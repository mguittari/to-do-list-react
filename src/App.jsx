import { useContext, useState } from "react";
import "./App.css";
import AddTaskForm from "./Input/EnterTask";
import DisplayTasks from "./Task/DisplayTasks";
import Title from "./Header/Title";
import ButtonColorTheme from "./Header/ButtonColorTheme";
import { ThemeContext } from "./Context/ThemeContext";

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

	const { colorTheme } = useContext(ThemeContext);

	return (
		<div className="app">
			<div
				className={`main-container ${colorTheme === "Blue" ? "background-blue" : "background-red"}`}
			>
				<ButtonColorTheme />
				<Title />
				<AddTaskForm
					tasks={tasks}
					setTasks={setTasks}
					count={count}
					setCount={setCount}
					counterId={counterId}
					setCounterId={setCounterId}
				/>
				<div
					className={`tasks-container ${colorTheme === "Blue" ? "blue" : "red"}`}
				>
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
