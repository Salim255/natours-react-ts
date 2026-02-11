import AppRoutes from './app-routes/app-routes';
import './App.scss';
import { RouterProvider } from 'react-router-dom';


function App(){
  return <RouterProvider router={AppRoutes}></RouterProvider>
}

export default App;