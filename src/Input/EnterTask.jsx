export default function EnterTask() {
	return (
		<div className="form-container">
			<form className="form">
				<label htmlFor="">Entrez une tâche </label>
				<input type="text" placeholder="Entrez une tâche" />
				<button className="button" type="submit">
					Valider
				</button>
			</form>
		</div>
	);
}
