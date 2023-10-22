import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import ErrorBoundaryPage from "./Components/Pages/ErrorBoundaryPage/ErrorBoundaryPage.jsx";
import Error404Page from "./Components/Pages/Error404Page/Error404Page.jsx";
import CustomHookPage from "./Components/Pages/CustomHookPage/CustomHookPage.jsx";
import Container from "./Components/Container/Container.jsx";
import "./index.css";

export default function App() {
  const navigate = useNavigate();
  const handleResetErrorboundary = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <Container>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryPage}
          onReset={handleResetErrorboundary}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="customhook" element={<CustomHookPage />} />
            <Route path="errorboundary" element={<ErrorBoundaryPage />} />
            <Route path="errorpagee" element={<Error404Page />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </div>
  );
}
