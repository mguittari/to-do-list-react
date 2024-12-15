import { useState } from "react";

export default function EnterTask({ tasks, setTasks, count, setCount }) {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		console.log("inputValue", inputValue);
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = { id: tasks.length, text: inputValue };
		setTasks([...tasks, newTask]);
		setInputValue("");
		setCount(count + 1);
	};

	return (
		<div className="form-container">
			<form autoComplete="off" onSubmit={handleSubmit} className="form">
				<input
					className="input-new-task"
					name="newTask"
					value={inputValue}
					onChange={handleChange}
					type="text"
					placeholder="Entrez une tâche"
				/>
				<button className="button-submit" type="submit">
					+
				</button>
			</form>
		</div>
	);
}
