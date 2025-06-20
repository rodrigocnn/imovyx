import { Contract } from "../interfaces";

export function mapContractFormData(form: Contract): Contract {
  const { start_date, end_date } = form;

  return {
    ...form,
    monthly_rent: form.monthly_rent,
    deposit_amount: form.deposit_amount,
    start_date: start_date instanceof Date ? start_date.toISOString() : "",
    end_date: end_date instanceof Date ? end_date.toISOString() : "",
    status: "ativo",
  };
}
