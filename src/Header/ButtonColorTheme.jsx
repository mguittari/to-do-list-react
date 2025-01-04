import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function ButtonColorTheme() {
	const { colorTheme, setColorTheme } = useContext(ThemeContext);
	return (
		<>
			<button
				type="button"
				onClick={() => setColorTheme(colorTheme === "Blue" ? "Red" : "Blue")}
			>
				Color
			</button>
		</>
	);
}
