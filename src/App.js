import AppRoutes from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BreadCrumb from "./components/BreadCrumb";
function App() {
  return (
    <div>
      <BreadCrumb/>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;