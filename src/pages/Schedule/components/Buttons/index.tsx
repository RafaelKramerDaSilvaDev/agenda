import {
  BiAddToQueue,
  BiSolidEdit,
  BiSolidSave,
  BiSolidTrashAlt,
} from "react-icons/bi";
import { IoMdHammer } from "react-icons/io";
import { PiBroomBold } from "react-icons/pi";
import {
  BuildButtonStylized,
  ClearButtonStylized,
  DeleteButtonStylized,
  EditButtonStylized,
  NewButtonStylized,
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

function NewButton({ ...props }: ButtonProps) {
  return (
    <NewButtonStylized {...props}>
      <BiAddToQueue size={20} color="white" />
    </NewButtonStylized>
  );
}

function BuildButton({ ...props }: ButtonProps) {
  return (
    <BuildButtonStylized {...props}>
      <IoMdHammer size={20} color="white" />
    </BuildButtonStylized>
  );
}

export {
  BuildButton,
  ClearButton,
  DeleteButton,
  EditButton,
  NewButton,
  SaveButton,
};
