import { Button, Label, TextInput, Spinner } from "flowbite-react";
import { useFormClient } from "../hooks/useFormClient";
import { useEffect } from "react";
import { Client } from "../interfaces";

interface FormClientProps {
  edit?: boolean;
  initialData?: Client;
}

export function FormClient(props: FormClientProps) {
  const initialData = props.initialData;

  const { form, handleChange, handleSubmit, setForm, create, update } =
    useFormClient(initialData, props.edit);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm(initialData);
    }
  }, [initialData]);

  return (
    <div className="bg-white p-4 rounded">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-gray-200 p-2 mb-4">
            <h2>Geral</h2>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="nome" value="Nome" />
              <TextInput
                onChange={handleChange}
                name="name"
                id="nome"
                value={form.name}
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="email" value="Email" />
              <TextInput
                onChange={handleChange}
                name="email"
                id="email"
                value={form.email}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="cpf" value="CPF" />
              <TextInput
                onChange={handleChange}
                name="cpf"
                id="cpf"
                value={form.cpf}
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="telefone" value="Telefone" />
              <TextInput
                onChange={handleChange}
                name="phone"
                id="telefone"
                value={form.phone}
              />
            </div>
          </div>

          <div className="col-span-2">
            <Button type="submit">
              {create.isPending ||
                (update.isPending && <Spinner color="info" />)}
              {props.edit ? "Atualizar" : "Cadastrar"} Cliente
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
