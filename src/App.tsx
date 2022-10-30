import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Suspense>
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  );
}

export default App;
