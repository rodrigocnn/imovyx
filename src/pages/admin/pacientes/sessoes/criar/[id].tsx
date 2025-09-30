import { useState } from "react";
import { Button } from "flowbite-react";
import LayoutAdmin from "@/components/LayoutAdmin";
import { Editor } from "@tinymce/tinymce-react";

export default function CriarSessaoPaciente() {
  const [conteudo, setConteudo] = useState("");

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold mb-4">Pacientes</h2>

      <div className="bg-white p-4 rounded h-screen space-y-4">
        {/* Campo de texto rico */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Notas da Sessão
          </label>
          <Editor
            apiKey="no-api-key" // apenas para evitar aviso
            value={conteudo}
            onEditorChange={(newValue) => setConteudo(newValue)}
            init={{
              height: 300,
              menubar: true,
              plugins: [
                "advlist autolink lists link charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline strikethrough | \
       alignleft aligncenter alignright alignjustify | \
       bullist numlist outdent indent | link | code",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

        {/* Botão iniciar sessão */}
        <Button className="text-white bg-red-500 rounded hover:bg-red-600">
          Iniciar Sessão
        </Button>
      </div>
    </LayoutAdmin>
  );
}
