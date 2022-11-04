import logo from './logo.svg';
import './App.css'
import {

  Routes,
  Route,
} from "react-router-dom";import StudentLists from './StudentLists';
import SchoolDit from './SchoolDit';
import ProtectedRoute from './CastingDirector';
import Home from './Home';
;

function App() {

    return (

      <div className="App ">
      <Routes>
       <Route exact path="/" element={<Home />} />
         
       <Route  element={<ProtectedRoute />}>
          <Route exact path="/admin" element={<StudentLists />} />
          
       </Route>
       
      </Routes>
      </div>


);
}

export default App;
