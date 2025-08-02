export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'client' | 'professional' | 'admin';
    preferences?: string[];
    createdAt: Date;
  }