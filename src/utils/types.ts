export type TaskListProps = {
    tasks: TaskProps[];
  };

export type FormProps = {
    onCreateTask: (title: string, description: string) => void;
  };

export type ModalWindowProps = {
    title: string;
    description: string;
    onClose: () => void;
    isOpen: boolean;
    checked: boolean;
  };

export type TaskProps = {
    id: number;
    title: string;
    description: string;
    checked: boolean;
  };
  