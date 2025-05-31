import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { RentalPaymentProvider } from "@/modules/rental-payments/context";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RentalPaymentProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </RentalPaymentProvider>
    </QueryClientProvider>
  );
}
