import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function ButtonColorTheme() {
	const { colorTheme, setColorTheme } = useContext(ThemeContext);

	useEffect(() => {
		const storedTheme = localStorage.getItem("Color theme");
		if (storedTheme) {
			setColorTheme(storedTheme); // Met à jour le contexte avec le thème stocké
		}
	}, [setColorTheme]);

	const handleClick = () => {
		const newTheme = colorTheme === "Blue" ? "Red" : "Blue";
		setColorTheme(newTheme);
		localStorage.setItem("Color theme", newTheme); // Met à jour le localStorage
	};
	return (
		<div className="button-flex">
			<button
				type="button"
				className={`button-toggle-theme ${colorTheme === "Blue" ? "button-toggle-theme-red" : "button-toggle-theme-blue"} `}
				onClick={handleClick}
			/>
		</div>
	);
}
