import "./App.css";
import AddTaskForm from "./Input/EnterTask";

function App() {
	return (
		<div className="app">
			<div className="main-container">
				<AddTaskForm />
				<div className="tasks-container">tâches en cours</div>
			</div>
		</div>
	);
}

export default App;
