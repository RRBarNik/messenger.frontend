import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UsersPage from './components/Users/UsersPage';
import ChatsPage from './components/ChatsPage/ChatsPage';
import ChatContainer from './components/Chat/ChatContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import { AppStateType } from './store/reducers';
import { withRouter } from 'react-router';
import { compose } from "redux";
import { connect } from "react-redux";
import Header from './components/Header/Header';

type PropsType = ReturnType<typeof mapStateToProps>

class App extends React.Component<PropsType> {
  render() {
    return (
      <div className='app-wrapper' >
        <Header />
        <Navbar />
        <div className='app-wrapper-content' >
          <Switch>
            <Route path='/users'>
              <UsersPage />
            </Route>
            <Route path='/profile/:userId?'>
              <ProfileContainer />
            </Route>
            <Route path='/chats'>
              <ChatsPage />
            </Route>
            <Route path='/chat/:chatId?'>
              <ChatContainer />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </div>
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
