import './App.css';
import ChatRoom from './component/ChatRoom';
import MainForm from './component/MainForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<div className="fs-1 container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
			<Router>
				<Routes>
					<Route index element={<MainForm />} />
					<Route path="chat/:roomId" element={<ChatRoom />} />
					<Route path="*" element={<h1>not found</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
