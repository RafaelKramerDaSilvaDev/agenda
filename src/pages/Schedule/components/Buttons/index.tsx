import { BiSolidEdit, BiSolidSave, BiSolidTrashAlt } from "react-icons/bi";
import { PiBroomBold } from "react-icons/pi";
import {
  ClearButtonStylized,
  DeleteButtonStylized,
  EditButtonStylized,
  SaveButtonStylized,
} from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function EditButton({ ...props }: ButtonProps) {
  return (
    <EditButtonStylized {...props}>
      <BiSolidEdit size={20} color="white" />
    </EditButtonStylized>
  );
}

function DeleteButton({ ...props }: ButtonProps) {
  return (
    <DeleteButtonStylized {...props}>
      <BiSolidTrashAlt size={20} color="white" />
    </DeleteButtonStylized>
  );
}

function SaveButton({ ...props }: ButtonProps) {
  return (
    <SaveButtonStylized {...props}>
      <BiSolidSave size={20} color="white" />
    </SaveButtonStylized>
  );
}

function ClearButton({ ...props }: ButtonProps) {
  return (
    <ClearButtonStylized {...props}>
      <PiBroomBold size={20} color="white" />
    </ClearButtonStylized>
  );
}

export { DeleteButton, EditButton, SaveButton, ClearButton };
