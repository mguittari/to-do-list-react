import { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./Input/EnterTask";
import DisplayTasks from "./Task/DisplayTasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			text: "Construire une fusée",
			is_checked: false,
		},
	]);

	const [count, setCount] = useState(1);
	const [counterId, setCounterId] = useState(1);

	const deleteTask = (id) => {
		// Mettre le résultat du filter dans une variable
		const updatedTasks = tasks.filter((task) => task.id !== id);
		// Utiliser la variable pour mettre à jour l'état
		setTasks(updatedTasks);
		setCount(count - 1);
	};

	return (
		<div className="app">
			<div className="main-container">
				<h1>TO DO LIST</h1>
				<AddTaskForm
					tasks={tasks}
					setTasks={setTasks}
					count={count}
					setCount={setCount}
					counterId={counterId}
					setCounterId={setCounterId}
				/>
				<div className="tasks-container">
					<DisplayTasks
						tasks={tasks}
						setTasks={setTasks}
						deleteTask={deleteTask}
					/>
				</div>
				<p className="counter">Nombres de tâches en cours : {count}</p>
			</div>
		</div>
	);
}

export default App;
