import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartMake from "./pages/StartMake";
import StartName from "./pages/StartName";
import FinalResult from "./pages/FinalResult";

function App() {
	return (
		<BrowserRouter>
			<div className="h-lvh bg-darkGray">
				<Routes>
					<Route path="/make" element={<StartMake />} />
					<Route path="/name" element={<StartName />} />
					<Route path="/result" element={<FinalResult name="오제제 광화문점" url="https://naver.me/5pUfFLek" />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
