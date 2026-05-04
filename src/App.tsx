import { BrowserRouter } from "react-router-dom";
import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0d0d0d] min-h-screen flex flex-col font-['DM_Sans']">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;