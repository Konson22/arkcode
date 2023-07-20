import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import ScrollToTop from './hooks/ScrollToTop';
import HomePage from "./pages/home";
import './App.css';
import WebDesignPage from "./pages/WebDesignPage";
import MobileAppPage from "./pages/MobileAppPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";


function App() {

  
  return (
    <div className="text-base">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/web-design' element={<WebDesignPage />} />
        <Route path='/mobile-app' element={<MobileAppPage />} />
        <Route path='/graphic-design' element={<GraphicDesignPage />} />
      </Routes>
    </div>
  );
}

export default App;
