import { useState } from "react";

export default function EnterTask({ tasks, setTasks, count, setCount }) {
	const [inputValue, setInputValue] = useState("");

	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (e) => {
		console.log(inputValue.length);
		if (inputValue.length >= 0) {
			setErrorMsg("");
		}

		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue === "") {
			setErrorMsg("La nouvelle tâche ne peut être vide");
			return;
		}
		const newTask = { id: tasks.length, text: inputValue };
		setTasks([...tasks, newTask]);
		setInputValue("");
		setErrorMsg("");
		setCount(count + 1);
	};

	return (
		<div className="form-container">
			<form autoComplete="off" onSubmit={handleSubmit} className="form">
				<div className="container">
					<input
						className="input-new-task"
						name="newTask"
						value={inputValue}
						onChange={handleChange}
						type="text"
						placeholder="Entrez une tâche"
					/>
					{errorMsg && <p className="error-msg">{errorMsg}</p>}
				</div>

				<button className="button-submit" type="submit">
					+
				</button>
			</form>
		</div>
	);
}
