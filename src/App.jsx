import { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./Input/EnterTask";
import DisplayTasks from "./Task/DisplayTasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			text: "Tâche à faire 1",
		},
	]);

	useEffect(() => {
		tasks.forEach((task, index) => {
			task.id = index; // ID = index dans le tableau
		});
	});

	const deleteTask = (id) => {
		// Mettre le résultat du filter dans une variable
		const updatedTasks = tasks.filter((task) => task.id !== id);
		// Utiliser la variable pour mettre à jour l'état
		setTasks(updatedTasks);
	};

	console.log("tasks in app ->>", tasks);

	return (
		<div className="app">
			<div className="main-container">
				<AddTaskForm tasks={tasks} setTasks={setTasks} />
				<div className="tasks-container">
					<DisplayTasks tasks={tasks} deleteTask={deleteTask} />
				</div>
				<p className="counter">Nombres de tâches en cours : 0</p>
			</div>
		</div>
	);
}

export default App;
