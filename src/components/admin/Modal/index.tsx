import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  size?: string;
  variant?: "danger" | "default";
}

export function CustomModal({
  show,
  onClose,
  title,
  children,
  primaryAction,
  size = "2xl",
  variant = "default", // default
}: CustomModalProps) {
  return (
    <Modal size={size} dismissible show={show} onClose={onClose}>
      {title && <Modal.Header>{title}</Modal.Header>}

      <Modal.Body>
        <div className="space-y-6">{children}</div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          className="focus:outline-none focus:ring-0 active:outline-none active:ring-0 text-black"
          color="gray"
          onClick={onClose}
        >
          Fechar
        </Button>

        {primaryAction && (
          <Button
            color={variant === "danger" ? "failure" : "info"}
            onClick={primaryAction.onClick}
          >
            {primaryAction.label}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
