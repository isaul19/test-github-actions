import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Index page</h1>
                <Link to="/test">Ir a test</Link>
              </>
            }
          />

          <Route
            path="test"
            element={
              <>
                <h1>Test page</h1>
                <Link to="/test">Ir a index</Link>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
