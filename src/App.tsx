import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import AddBook from "./pages/AddBook";
import { BookProvider } from "./context/BookContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <BookProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </BookProvider>
      <Footer />
    </>
  );
}

export default App;
