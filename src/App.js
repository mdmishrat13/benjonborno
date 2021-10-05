import './App.css';
// import Courses from './Courses/Courses';
import Testemonial from './Testemonial/Testemonial';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import AllCourses from './AllCourses/AllCourses';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/testemonial">
            <Testemonial></Testemonial>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
