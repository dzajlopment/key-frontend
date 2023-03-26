import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataFetcher } from "./components/dataFetcher";
import { Keybox } from "./components/keybox";
import { KeyInfo } from "./components/keyInfo";

function App() {
	return (
		<DataFetcher>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Keybox />} />
					<Route path="/key/:keyName" element={
						<div className="flex">
							<Keybox />
							<KeyInfo />
						</div>
					} />
				</Routes>
			</BrowserRouter>
		</DataFetcher>
	);
}

export default App;
