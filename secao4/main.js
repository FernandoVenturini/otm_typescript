// CALCULADORA COM FUNCAO CONSTRUTORA

// Declaração da função construtora Calculadora
// Funções construtoras são usadas para criar múltiplos objetos com a mesma estrutura
function Calculadora() {
    
    // Cria uma propriedade 'display' no objeto que está sendo criado (this)
    // document.querySelector('.display') - seleciona o elemento HTML com a classe 'display'
    // Esse elemento é onde os números e resultados serão mostrados
    this.display = document.querySelector('.display');

    // Método que inicializa a calculadora
    // Seta os eventos de clique e teclado
    this.inicia = () => {
        this.capturaCliques();  // Ativa a captura de cliques nos botões
        this.capturaEnter();     // Ativa a captura da tecla Enter
    };

    // Método que captura quando a tecla Enter é pressionada
    this.capturaEnter = () => {
        // Adiciona um evento 'keyup' (quando a tecla é solta) em todo o documento

function Calculadora() { // Funcao construtora, tem a letra maiuscula
    this.display = document.querySelector('.display'); // Acessa o display da calculadora

    this.inicia = () => { // Funcao que inicia a calculadora, chama as outras funcoes
        this.capturaCliques(); // Chama a funcao que captura os cliques dos botoes
        this.capturaEnter(); // Chama a funcao que captura o enter, para realizar a conta quando o usuario apertar enter
    };

    this.capturaEnter = () => { // Funcao que captura o enter, para realizar a conta quando o usuario apertar enter
        
        document.addEventListener('keyup', e => {
            // Verifica se o código da tecla pressionada é 13 (Enter)
            if (e.keyCode === 13) {
                this.realizaConta();  // Executa o cálculo
            }
        });
    };

    // Método que captura cliques em qualquer lugar da página
    this.capturaCliques = () => {
        // Adiciona evento de clique no documento inteiro
        document.addEventListener('click', event => {
            const el = event.target;  // Pega o elemento específico que foi clicado
            
            // Verifica se o elemento clicado tem a classe 'btn-num' (botão número)
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            
            // Verifica se o elemento clicado tem a classe 'btn-clear' (botão limpar)
            if (el.classList.contains('btn-clear')) this.clear();
            
            // Verifica se o elemento clicado tem a classe 'btn-del' (botão deletar)
            if (el.classList.contains('btn-del')) this.del();
            
            // Verifica se o elemento clicado tem a classe 'btn-eq' (botão igual)
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    // Método que realiza o cálculo matemático
    this.realizaConta = () => {
        try {
            // eval() - Função que interpreta e executa código JavaScript em forma de string
            // Ex: se display.value = '2+2', eval retorna 4
            const conta = eval(this.display.value);

            // Se o resultado for falsy (null, undefined, 0, false, '')
            if (!conta) {
                alert('Conta inválida');  // Mostra alerta de erro
                return;  // Sai do método
            }

            // Atualiza o display com o resultado do cálculo
            this.display.value = conta;
        } catch (e) {
            // Se ocorrer qualquer erro no eval (ex: 'abc+2')
            alert('Conta inválida');
            return;
        }
    };

    // Método que adiciona números/operadores ao display
    // el é o botão que foi clicado
    this.addNumDisplay = el => {
        this.display.value += el.innerText;  // Pega o texto do botão e adiciona ao display
        this.display.focus();  // Foca no display (útil para continuar digitando)
    };

    // Método que limpa todo o display
    // Atribui uma string vazia ao campo
    this.clear = () => this.display.value = '';
    
    // Método que apaga o ÚLTIMO caractere do display
    // slice(0, -1) pega do início até o penúltimo caractere
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

// Cria uma nova instância da calculadora (objeto)
const calculadora = new Calculadora();

// Inicializa a calculadora (ativa todos os eventos)
calculadora.inicia();