import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function DisplayTasks({ tasks, deleteTask }) {
	const [taskStates, setTaskStates] = useState({});
	// const [taskStates, setTaskStates] = useState(
	// 	tasks.reduce((acc, task) => {
	// 		acc[task.id] = false;
	// 		return acc;
	// 	}, {}),
	// );

	console.log(taskStates);

	const handleCheckboxChange = (id) => {
		// Mettre à jour directement l'état pour la tâche concernée
		const updatedStates = { ...taskStates };
		updatedStates[id] = !taskStates[id]; // Inverser l'état de la tâche
		setTaskStates(updatedStates);
	};

	return tasks.map((task) => (
		<div key={task.id} className="task">
			<input
				name={`checkbox-${task.id}`}
				type="checkbox"
				value={taskStates[task.id]}
				onChange={() => handleCheckboxChange(task.id)}
			/>
			<p
				className={
					taskStates[task.id] ? "style-text-crossed" : "style-text-regular"
				}
			>
				{task.text}
			</p>
			<button onClick={() => deleteTask(task.id)} type="submit">
				<FaTrashAlt />
			</button>
		</div>
	));
}