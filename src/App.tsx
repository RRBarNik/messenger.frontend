import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UsersPage from './components/Users/UsersPage';
import ChatsPage from './components/ChatsPage/ChatsPage';
import ChatPage from './components/Chat/ChatPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import { AppStateType } from './store/reducers';
import { withRouter } from 'react-router';
import { compose } from "redux";
import { connect } from "react-redux";
import Header from './components/Header/Header';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';

const MessengerPage : React.FC<{}> = ()=>{
  return(
    <div className='app-wrapper'>
      <Header />
        <Navbar />
        <div className='app-wrapper-content' >
          <Switch>
            <PrivateRoute path='/users' component={UsersPage} />
            <PrivateRoute path='/profile/:userId?' component={ProfilePage} />
            <PrivateRoute path='/chats' component={ChatsPage} />
            <PrivateRoute path='/chat/:chatId?' component={ChatPage} />
          </Switch>
        </div>
    </div>
  )
}

type PropsType = ReturnType<typeof mapStateToProps>

class App extends React.Component<PropsType> {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <PrivateRoute path='/' component={MessengerPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {})
)(App);
