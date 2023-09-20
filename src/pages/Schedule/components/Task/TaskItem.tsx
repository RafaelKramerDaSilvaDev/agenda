import { Fragment, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { IoIosJournal } from 'react-icons/io';
import { TaskProps } from '../../../../app/types/TaskProps';
import { usePassValuesToEdit } from '../../contexts/PassValuesToEditContext';
import { useSchedule } from '../../contexts/ScheduleContext';
import { GenericButton } from '../Buttons';
import {
	AlignIconAndText,
	CardDescription,
	Content,
	EndTimeCard,
	OrganizeButtons,
	StartTimeCard,
	TaskBox,
	TaskId,
	TaskName,
	TopTaskBox,
} from './styles';

export function TaskItem({ id, position, name, description, startTime, endTime, checked }: TaskProps) {
	const { setViewOption, deleteTask, updateTask } = useSchedule();
	const { setTaskValues } = usePassValuesToEdit();
	const [checkedState, setCheckedState] = useState(checked);

	function handleEdit() {
		setViewOption('edit');

		setTaskValues({
			id: id,
			name: name,
			description: description,
			startTime: startTime,
			endTime: endTime,
			checked: checked,
		});
	}

	function handleCheckToggle() {
		const updatedCheckedValue = !checkedState;
		setCheckedState(updatedCheckedValue);

		const updatedTask = {
			...{ id, position, name, description, startTime, endTime },
			checked: updatedCheckedValue,
		};
		console.log(updatedTask.checked);
		updateTask(updatedTask);
	}

	return (
		<TaskBox check={checkedState ? checkedState : false}>
			<Content>
				<TopTaskBox>
					<TaskId title='Identificador Tarefa'>{id}</TaskId>
					<TaskName>{name}</TaskName>
				</TopTaskBox>
				<AlignIconAndText>
					{description && (
						<Fragment>
							<IoIosJournal color='#1a202c' />
							<CardDescription>{description}</CardDescription>
						</Fragment>
					)}
				</AlignIconAndText>
				<AlignIconAndText>
					{startTime && (
						<Fragment>
							<FaClock color='#1a202c' />
							<StartTimeCard>{`${startTime}hrs`}</StartTimeCard>
						</Fragment>
					)}
					{endTime && <EndTimeCard>{`- ${endTime}hrs`}</EndTimeCard>}
				</AlignIconAndText>
			</Content>
			<OrganizeButtons>
				<GenericButton variant='edit' onClick={handleEdit} />
				<GenericButton variant='delete' onClick={() => deleteTask(id)} />
				<GenericButton variant={checkedState ? 'checked' : 'unchecked'} onClick={handleCheckToggle} />
			</OrganizeButtons>
		</TaskBox>
	);
}
