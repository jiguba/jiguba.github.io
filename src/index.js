import { createRoot } from "react-dom/client";
import App from "./components/App";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

//import Custom styles
import "./styles.css"

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);


