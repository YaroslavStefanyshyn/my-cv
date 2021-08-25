import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/content/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/content/about/about';
import Skills from './components/content/skills/skills';
import Contacts from './components/content/contacts/contacts';

function App(props) {
  return (
    <BrowserRouter>
      <div className="CV-Wrapper">
        <Header />
        <Navbar />
        <div className='Content'>
          <Route path='/profile' render={() => <Profile
            state={props.state.profilePage}
            dispatch={props.dispatch} />} />
          <Route path='/about' component={About}></Route>
          <Route path='/skills' component={Skills}></Route>
          <Route path='/contacts' component={Contacts}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
