export interface Appointment {
    id: string;
    clientId: string;
    serviceId: string;
    professionalId: string;
    date: Date;
    time: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    notes?: string;
  }