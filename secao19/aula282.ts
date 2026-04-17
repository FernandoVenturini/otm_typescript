// Type Aliases
// Os aliases de tipo permitem definir tipos com um nome personalizado (um alias).
// Os aliases de tipo podem ser usados ​​para tipos primitivos como `int` string ou tipos mais complexos como ` objects int` e `string` arrays:

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001;
const carType: CarType = "Sedan";
const carModel: CarModel = "Corolla"

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

// Example: Union and Intersection Types
