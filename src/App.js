import './App.css';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Layout from './Layout/Layout';
import About from './About/About';
import Contact from './Contact/Contact';
import Notfound from './Notfound/Notfound';

import {createHashRouter, RouterProvider} from 'react-router-dom';
// createHashRouter 
const Router = createHashRouter([
  { path: '/', element: <Layout />, children: [
    { path: '/', element: <Home />},
    { path: '/home',  element: <Home />},
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <Notfound/>}
  ]}
]);

function App() {
  return (<>
    <RouterProvider router={Router}>
    </RouterProvider>
  </>);
}

export default App;
