export interface RentalPayment {
  id?: string;
  rental_contract_id: string;
  due_date: Date | string | null;
  payment_date: Date | string | null;
  amount: string;
  status: string;
}

export interface FormMapped {
  id?: string;
  rental_contract_id: string;
  due_date: Date | string | null;
  payment_date: Date | string | null;
  amount: number;
  status: string;
}

export interface FilterPayment {
  filter_by: string;
  rental_contract_id: number | string;
  initial_date: Date | null;
  end_date: Date | null;
  status: string;
}
