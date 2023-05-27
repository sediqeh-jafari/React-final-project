import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from "../../Config";

function App() {
  const routerProvider = createBrowserRouter(router)

  return (
    
    <>
        {/* ------Fontawesome--------- */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>

      {/* -----RouterProvider------- */}
      
        <div className="App">

          <RouterProvider router={routerProvider} />

        </div>
        
    </>

  )
}

export default App
