import './App.css';

import MainPage from './Pages/MainPage'
import CollegeMainPage from './Pages/CollegeMainPage'

import {
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom'

// 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
        <Route exact path='/college' element={<CollegeMainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
