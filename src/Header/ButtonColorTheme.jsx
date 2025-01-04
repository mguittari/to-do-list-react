import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function ButtonColorTheme() {
	const { colorTheme, setColorTheme } = useContext(ThemeContext);
	return (
		<div className="button-flex">
			<button
				type="button"
				className={`button-toggle-theme ${colorTheme === "Blue" ? "button-toggle-theme-red" : "button-toggle-theme-blue"} `}
				onClick={() => setColorTheme(colorTheme === "Blue" ? "Red" : "Blue")}
			/>
		</div>
	);
}
