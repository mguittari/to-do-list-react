import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import { FaTrashAlt } from "react-icons/fa";

export default function DisplayTasks({ tasks, setTasks, deleteTask }) {
	const { colorTheme } = useContext(ThemeContext);
	const handleCheckboxChange = (id) => {
		// Mettre à jour le tableau des tâches
		const updatedTasks = tasks.map((task) => {
			// Si l'id de la tâche correspond à celui qui a été cliqué, on inverse sa valeur `is_checked`
			if (task.id === id) {
				return {
					...task,
					is_checked: !task.is_checked,
				};
			}
			// Sinon, on retourne la tâche telle quelle
			return task;
		});
		// Mettre à jour l'état avec le tableau modifié
		setTasks(updatedTasks);
		localStorage.setItem("Saved Tasks", JSON.stringify(updatedTasks));
	};

	return tasks.map((task) => (
		<div
			key={task.id}
			className={`task ${colorTheme === "Blue" ? "task-blue-theme" : "task-red-theme"}`}
		>
			<input
				name={`checkbox-${task.id}`}
				type="checkbox"
				value={tasks.is_checked}
				onChange={() => handleCheckboxChange(task.id)}
				className={colorTheme === "Blue" ? "checkbox-blue" : "checkbox-red"}
			/>
			<p
				className={
					task.is_checked ? "style-text-crossed" : "style-text-regular"
				}
			>
				{task.text}
			</p>
			<button
				className={`button-trash ${colorTheme === "Blue" ? "button-trash" : "button-trash-red-theme"}`}
				onClick={() => deleteTask(task.id)}
				type="submit"
			>
				<FaTrashAlt className="test" />
			</button>
		</div>
	));
}
