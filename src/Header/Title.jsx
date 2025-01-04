import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Title() {
	const { colorTheme } = useContext(ThemeContext);
	return (
		<>
			<h1 className={colorTheme === "Blue" ? "blue-title" : "red-title"}>
				TO DO LIST
			</h1>
		</>
	);
}
