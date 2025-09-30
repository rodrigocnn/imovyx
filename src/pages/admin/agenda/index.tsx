import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import LayoutAdmin from "@/components/LayoutAdmin";

import { FormModalAgenda } from "@/modules/appointment/components/form-modal-agenda";
import { CustomModal } from "@/components/Modal";
import { useAppointment } from "@/modules/appointment/hooks/useAppointment";
import { useFindAllPatients } from "@/modules/patients/hooks/useFindAllPatients";
import { useFindAllAppoitments } from "@/modules/appointment/hooks/useFindAllAppoitments";
import { renderEventContent } from "@/modules/appointment/components/render-event-content";

export default function Appointment() {
  const {
    handleEventClick,
    isModalOpen,
    openModal,
    closeModal,
    bookAppointment,
    form,
    isModeUpdate,
  } = useAppointment();

  const { data: patients, isLoading } = useFindAllPatients();
  const { data: events } = useFindAllAppoitments();

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Agenda</h2>

      <CustomModal
        primaryAction={{
          label: "Agendar",
          onClick: () => form.handleSubmit(bookAppointment)(),
        }}
        title="Agendar Paciente"
        show={isModalOpen}
        onClose={closeModal}
      >
        <FormModalAgenda
          patients={patients}
          form={form}
          isModeUpdate={isModeUpdate}
        />
      </CustomModal>

      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <FullCalendar
            events={events}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView={"dayGridMonth"}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            displayEventTime={false}
            locale={"pt-br"}
            noEventsText="Sem Eventos"
            buttonText={{
              today: "Hoje",
              month: "Mês",
              day: "Dia",
            }}
            headerToolbar={{
              left: "cadastrar",
              center: "prev today next",
              right: "dayGridMonth,timeGridDay",
            }}
            customButtons={{
              cadastrar: {
                text: "Cadastrar",
                click: () => openModal(),
              },
            }}
            views={{
              listWeek: { buttonText: "Lista" },
            }}
            datesSet={(arg) => {
              console.log(
                "Mudou de período:",
                arg.startStr,
                arg.endStr,
                arg.view.type
              );
            }}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
