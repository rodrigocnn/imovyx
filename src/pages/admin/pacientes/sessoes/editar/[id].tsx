import LayoutAdmin from "@/components/admin/LayoutAdmin";
import { SessionForm } from "@/modules/sessions/components/session-form";

export default function EditarSessaoPaciente() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold mb-4">Editar Sessão</h2>
      <div className="bg-white p-4 rounded h-screen space-y-4 overflow-y-auto">
        <SessionForm mode="edit" />
      </div>
    </LayoutAdmin>
  );
}
