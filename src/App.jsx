import { useContext, useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./Input/EnterTask";
import DisplayTasks from "./Task/DisplayTasks";
import Title from "./Header/Title";
import ButtonColorTheme from "./Header/ButtonColorTheme";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
	let [tasks, setTasks] = useState([
		{
			id: 0,
			text: "Construire une fusée",
			is_checked: false,
		},
	]);

	const [count, setCount] = useState(() => {
		const savedTasks = JSON.parse(localStorage.getItem("Saved Tasks"));
		return savedTasks ? savedTasks.length : 1; // Si le localStorage a des tâches, récupère la longueur sinon retourne 1
	});

	const [counterId, setCounterId] = useState(() => {
		const savedTasks = JSON.parse(localStorage.getItem("Saved Tasks"));
		return savedTasks ? savedTasks.length : 1; // Récupère le dernier ID ou démarre à 1
	});

	const deleteTask = (id) => {
		// Mettre le résultat du filter dans une variable
		const updatedTasks = tasks.filter((task) => task.id !== id);
		// Utiliser la variable pour mettre à jour l'état
		setTasks(updatedTasks);
		localStorage.setItem("Saved Tasks", JSON.stringify(updatedTasks));
		setCount(count - 1);
	};

	const { colorTheme } = useContext(ThemeContext);

	useEffect(() => {
		const storedTasks = localStorage.getItem("Saved Tasks");
		console.log("Données récupérées au démarrage :", storedTasks);
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
		}
	}, []);

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
