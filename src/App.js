import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const router = createBrowserRouter([
  {
    path:'/',
   element: <Main></Main>, children:[
    {path:'/',
     element:<Home></Home>  
  },
  {
     path:"/header",
     element:<Header></Header>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
   ]
  }
  ])
  return (
    <div className="App">
     
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
