import { Button } from "flowbite-react";
import { Editor } from "@tinymce/tinymce-react";

import { useFormSession } from "@/modules/sessions/hooks/useFormSesssion";
import { useRouter } from "next/router";
import { apiKeyEditor, configEditor } from "@/modules/sessions/constants";
import { StopWatch } from "@/modules/sessions/components/stopwatch";
import LayoutAdmin from "@/components/admin/LayoutAdmin";

export default function CriarSessaoPaciente() {
  const router = useRouter();
  const { onEditorChange, form, saveSession } = useFormSession(
    router.query.id as string,
    "create"
  );

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold mb-4">Sessão</h2>

      <div className="bg-white p-4 rounded h-screen space-y-4">
        <StopWatch />

        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Resumo da sessão
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.summary}
            onEditorChange={(newValue) => onEditorChange(newValue, "summary")}
            init={{ ...configEditor }}
          />
        </div>

        {/* Observações comportamentais */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Observações comportamentais
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.behavioralObservations}
            onEditorChange={(newValue) =>
              onEditorChange(newValue, "behavioralObservations")
            }
            init={{ ...configEditor }}
          />
        </div>

        {/* Reações do paciente */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Reações
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.patientReactions}
            onEditorChange={(newValue) =>
              onEditorChange(newValue, "patientReactions")
            }
            init={{ ...configEditor }}
          />
        </div>

        {/* Intervenções */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Intervenções
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.interventions}
            onEditorChange={(newValue) =>
              onEditorChange(newValue, "interventions")
            }
            init={{ ...configEditor }}
          />
        </div>

        {/* Encaminhamentos */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Encaminhamentos
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.referrals}
            onEditorChange={(newValue) => onEditorChange(newValue, "referrals")}
            init={{ ...configEditor }}
          />
        </div>

        {/* Planos terapêuticos */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Planos terapêuticos
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.therapeuticPlans}
            onEditorChange={(newValue) =>
              onEditorChange(newValue, "therapeuticPlans")
            }
            init={{ ...configEditor }}
          />
        </div>

        {/* Hipóteses diagnósticas */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Hipóteses diagnósticas
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.diagnosticHypotheses}
            onEditorChange={(newValue) =>
              onEditorChange(newValue, "diagnosticHypotheses")
            }
            init={{ ...configEditor }}
          />
        </div>

        {/* Técnica utilizada */}
        <div className="block">
          <label className="block text-gray-700 mb-2 font-medium">
            Técnica utilizada
          </label>
          <Editor
            apiKey={apiKeyEditor}
            value={form.techniqueUsed}
            onEditorChange={(newValue) =>
              onEditorChange(newValue, "techniqueUsed")
            }
            init={{ ...configEditor }}
          />
        </div>

        {/* Botão de salvar */}
        <Button
          onClick={saveSession}
          className="text-white bg-sky-500 rounded mb-4 hover:!bg-sky-500/75"
        >
          Salvar
        </Button>
      </div>
    </LayoutAdmin>
  );
}
