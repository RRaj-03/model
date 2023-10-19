import logo from "./logo.svg";
import "./App.css";
import { Model } from "./Grand_theft_auto_san_andreas__grove_street";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function App() {
	return (
		<div className="App">
			<Canvas camera={{ fov: 64, position: [-100, 50, 50] }}>
				<ambientLight intensity={5} />
				<OrbitControls enableZoom={true} enableRotate={true} />
				<Model />
			</Canvas>
		</div>
	);
}

export default App;
