import { useState } from "react";

export default function EnterTask({ tasks, setTasks }) {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		console.log("inputValue", inputValue);
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		console.log(tasks);
		e.preventDefault();
		const newTask = { id: tasks.length, text: inputValue, checked: false };

		console.log("Nouvelle tâche !", newTask);
		console.log("tâches -->", tasks);
		setTasks([...tasks, newTask]);
		setInputValue("");
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="form">
				<label htmlFor="">Entrez une tâche </label>
				<input
					name="newTask"
					value={inputValue}
					onChange={handleChange}
					type="text"
					placeholder="Entrez une tâche"
				/>
				<button className="button" type="submit">
					Valider
				</button>
			</form>
		</div>
	);
}
