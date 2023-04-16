import { Suspense } from "react";
import ThreeJsPage from "./pages/ThreeJsPage";
import { Route, Routes } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
    <div
      className="no-scrollbar scrollbar-hide"
      style={{ scrollbarWidth: "none" }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<ThreeJsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
