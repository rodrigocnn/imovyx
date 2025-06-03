import { createContext, ReactNode, useState } from "react";
import { RentalPayment } from "../interfaces";
import { formatarToCurrencyBR, formatDateToPtBR } from "@/utils";

interface RentalPaymentContextType {
  payments: RentalPayment[];
  setPayments: (payments: RentalPayment[] | undefined) => void;
}

export const RentalPaymentContext = createContext<RentalPaymentContextType>({
  payments: [],
  setPayments: () => {},
});

export function RentalPaymentProvider({ children }: { children: ReactNode }) {
  const [payments, setFormattedPayments] = useState<RentalPayment[]>([]);

  const format = (payment: RentalPayment): RentalPayment => ({
    ...payment,
    due_date: formatDateToPtBR(payment.due_date as string),
    payment_date: formatDateToPtBR(payment.payment_date as string),
    amount: formatarToCurrencyBR(payment.amount),
  });

  const setPayments = (rawPayments: RentalPayment[] | undefined) => {
    if (rawPayments) {
      setFormattedPayments(rawPayments.map(format));
    }
  };

  return (
    <RentalPaymentContext.Provider value={{ payments, setPayments }}>
      {children}
    </RentalPaymentContext.Provider>
  );
}
