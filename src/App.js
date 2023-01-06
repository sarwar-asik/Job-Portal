import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';

function App() {
  return (
    <div className="max-w-[95%] mx-auto App">
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
