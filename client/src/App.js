import './App.css';

import MainPage from './Pages/MainPage'
import CollegeMainPage from './Pages/CollegeMainPage'
import QuestionPage from './Pages/QuestionPage';

import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from 'react-router-dom'
import ContestPage from './Pages/ContestPage';
import * as React from 'react';
import NotFoundPage from './Pages/NotFoundPage';

// 

function App() {

  //get the college name from localStorage if available
  const [user,setUser] = React.useState("");
  const [collegeName,setcollegeName] = React.useState("daiict");
  React.useEffect(()=>{
    let user = localStorage.getItem('rg-user');
    if(user){
      setUser(JSON.parse(user));
      setcollegeName(JSON.parse(user).collge);
    }
    else{
      setUser("");
    }
  },[]);

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
        <Route exact path={`${collegeName}`} element={<CollegeMainPage/>} />
        <Route path={`${collegeName}/:contest`} element={ <ContestPage/> } />
        <Route path={`${collegeName}/:contestid/:questionId`} element={ <QuestionPage/> } />
        
       <Route exact strict element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
