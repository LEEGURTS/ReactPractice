import { Suspense } from "react";
import ThreeJsPage from "./pages/ThreeJsPage";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index/Index";
import SudokuPage from "./pages/SudokuPage";

const App: React.FunctionComponent = () => {
  return (
    <div
      className="no-scrollbar scrollbar-hide"
      style={{ scrollbarWidth: "none" }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/threejs" element={<ThreeJsPage />} />
          <Route path="/Sudoku" element={<SudokuPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
