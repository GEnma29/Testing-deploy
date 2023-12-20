
export interface IPayment {
  id: string;
  method_id: string;
  base_id: string;
  multi_order_id: string;
  user_id: string;
  type: PaymentTypes;
  confirmation_number: string;
  amount: number;
  status: PaymentStatus;
  image: string;
  email: string;
  extra: any;
  amount_$: number;
  notas?: string;
  extra_1: string;
  extra_2: string;
}

export enum PaymentTypes {
  DEPOSIT = 'deposit',
  PAYMENT = 'payment',
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}