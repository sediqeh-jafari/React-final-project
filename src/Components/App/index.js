import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from "../../Config";


function App() {
  const routerProvider = createBrowserRouter(router)

  return (


    <div className="App">
      <RouterProvider router={routerProvider} />

    </div>

  );
}

export default App;
