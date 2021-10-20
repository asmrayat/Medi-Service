import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Video from './components/Video/Video';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Reg from './components/Reg/Reg';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import CovidTest from './components/CovidTest/CovidTest';
import OnlineDoctor from './components/OnlineDoctor/OnlineDoctor';
import HospitalBooking from './components/HospitalBooking/HospitalBooking';
import OnlineMedicine from './components/OnlineMedicine/OnlineMedicine';
import DoctorBooking from './components/DoctorBooking/DoctorBooking';
import Ambulance from './components/Ambulance/Ambulance';
import Error404 from './components/Error404/Error404';





function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/video">
              <Video></Video>
            </Route>
            <Route path="/signin">
              <Reg></Reg>
            </Route>
            <PrivateRoute exact path="/covidtest">
              <CovidTest></CovidTest>
            </PrivateRoute>
            <PrivateRoute path="/onlinedoctor">
              <OnlineDoctor></OnlineDoctor>
            </PrivateRoute>
            <PrivateRoute path="/hospitalbooking">
              <HospitalBooking></HospitalBooking>
            </PrivateRoute>
            <PrivateRoute path="/onlinemedicine">
              <OnlineMedicine></OnlineMedicine>
            </PrivateRoute>
            <PrivateRoute path="/doctorbooking">
              <DoctorBooking></DoctorBooking>
            </PrivateRoute>
            <PrivateRoute path="/ambulance">
              <Ambulance></Ambulance>
            </PrivateRoute>
            <Route>
              <Error404></Error404>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

