export interface Client {
  id: string;
  name: string;
}

export interface Property {
  id: string;
  title: string;
}

export interface Contract {
  id?: string;
  client_id: string;
  property_id: string;
  start_date: Date | string | null;
  end_date?: Date | string | null;
  monthly_rent: string | undefined;
  deposit_amount?: string | undefined;
  contract_code?: string;
  status: string;
  client?: Client;
  property?: Property;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DateFormContract {
  start_date: Date | null;
  end_date: Date | null;
}
