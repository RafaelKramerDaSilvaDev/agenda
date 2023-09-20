import React, { ReactNode } from 'react';
import { BiAddToQueue, BiSolidEdit, BiSolidSave } from 'react-icons/bi';
import { BsPersonFillGear } from 'react-icons/bs';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { IoIosArrowDown, IoIosArrowUp, IoMdHammer } from 'react-icons/io';
import { MdCancel, MdOutlineAbc } from 'react-icons/md';
import { PiBroomBold } from 'react-icons/pi';
import { TbTrashFilled, TbTrashXFilled } from 'react-icons/tb';
import { useDisplay } from '../../contexts/DisplayContext';
import { GenericButtonStylized } from './styles';

type ButtonVariant =
	| 'new'
	| 'edit'
	| 'deleteAll'
	| 'delete'
	| 'save'
	| 'clear'
	| 'build'
	| 'sortAscending'
	| 'sortDescending'
	| 'sortAlphabetical'
	| 'cancel'
	| 'custom'
	| 'checked'
	| 'unchecked';

interface ButtonConfig {
	icon: ReactNode;
	backgroundColor: string;
	message?: string;
	title: string;
}

const buttonConfigs: Record<ButtonVariant, ButtonConfig> = {
	new: {
		icon: <BiAddToQueue size={20} color='white' />,
		backgroundColor: '#4682b4',
		message: 'Criar tarefa',
		title: 'Nova Tarefa',
	},
	edit: {
		icon: <BiSolidEdit size={20} color='white' />,
		backgroundColor: '#DAA520',
		message: 'Editar tarefa',
		title: 'Editar Tarefa',
	},
	delete: {
		icon: <TbTrashFilled size={20} color='white' />,
		backgroundColor: '#CD5C5C',
		message: 'Tarefa excluída',
		title: 'Apagar Tarefa',
	},
	deleteAll: {
		icon: <TbTrashXFilled size={20} color='white' />,
		backgroundColor: '#CD5C5C',
		message: 'Tarefas excluídas',
		title: 'Apagar Todas Tarefas',
	},
	save: {
		icon: <BiSolidSave size={20} color='white' />,
		backgroundColor: '#3CB371',
		message: 'Tarefa salva ;)',
		title: 'Salvar Tarefa',
	},
	clear: {
		icon: <PiBroomBold size={20} color='white' />,
		backgroundColor: '#778899',
		message: 'Campos limpos',
		title: 'Limpar campos',
	},
	build: {
		icon: <IoMdHammer size={18} color='white' />,
		backgroundColor: '#A0522D',
		message: 'Tarefas geradas',
		title: 'Gerar Tarefas',
	},
	sortAscending: {
		icon: <IoIosArrowUp size={20} color='#1a202c' />,
		backgroundColor: '#D8D9DA',
		message: 'Ordenação crescente',
		title: 'Ordenar Crescente',
	},
	sortDescending: {
		icon: <IoIosArrowDown size={20} color='#1a202c' />,
		backgroundColor: '#D8D9DA',
		message: 'Ordenação decrescente',
		title: 'Ordenar Decrescente',
	},
	sortAlphabetical: {
		icon: <MdOutlineAbc size={32} color='#1a202c' />,
		backgroundColor: '#D8D9DA',
		message: 'Ordenação alfabetica',
		title: 'Ordenar Alfabeticamente',
	},
	cancel: {
		icon: <MdCancel size={24} color='white' />,
		backgroundColor: '#CD5C5C',
		message: 'Cancelado',
		title: 'Cancelar',
	},
	custom: {
		icon: <BsPersonFillGear size={20} color='#1a202c' />,
		backgroundColor: '#D8D9DA',
		message: 'Ordenação personalizada',
		title: 'Ordenar Personalizado',
	},
	checked: {
		icon: <ImCheckboxChecked size={18} color='white' />,
		backgroundColor: '#3CB371',
		message: 'Tarefa concluída',
		title: 'Marcar concluída',
	},
	unchecked: {
		icon: <ImCheckboxUnchecked size={18} color='white' />,
		backgroundColor: '#3CB371',
		message: 'Tarefa alterada para não concluída',
		title: 'Marcar como não concluída',
	},
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant;
}

function GenericButton({ variant, onClick, ...props }: ButtonProps) {
	const { setLastUpdated } = useDisplay();
	// buttonsConfig é um objeto que acessa seu valor usando a chave variant que é uma string
	const config = buttonConfigs[variant];

	function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		if (config.message) {
			setLastUpdated(config.message);
		}
		// Se o onClick for passado como propriedade, ele será true e executará a função
		if (onClick) {
			// Executa a função onClick passando o evento como parâmetro
			onClick(event);
		}
	}

	return (
		<GenericButtonStylized
			style={{ backgroundColor: config.backgroundColor }}
			onClick={handleClick}
			title={config.title}
			{...props}
		>
			{config.icon}
		</GenericButtonStylized>
	);
}

export { GenericButton };
