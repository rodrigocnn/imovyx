import { Button, ButtonProps } from "flowbite-react";

type ButtonAppProps = ButtonProps;

export function ButtonApp({ children, className, ...props }: ButtonAppProps) {
  return (
    <Button
      color="blue"
      className={`!bg-sky-500 !text-white hover:!bg-sky-500/75 rounded mb-4 ${
        className ?? ""
      }`}
      {...props}
    >
      {children ?? "Cadastrar"}
    </Button>
  );
}
