import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Mainlayout from './layouts/Mainlayout';
import AboutPage from './pages/AboutPage';
import LanguagesPage from './pages/LanguagesPage';
import NotFoundPage from './pages/NotFoundPage';
import LanguagePage from './pages/LanguagePage';
import ProjectPage from './pages/ProjectPage';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='/' element={<Mainlayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/languages' element={<LanguagesPage/>}/>
      <Route path='/languages/:id' element={<LanguagePage/>}/>
      <Route path='/projects/:id' element={<ProjectPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>)
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
