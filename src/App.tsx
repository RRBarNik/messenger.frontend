import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ChatsListContainer from './components/ChatsList/ChatsListContainer';
import ChatContainer from './components/Chat/ChatContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import { AppStateType } from './store/reducers';
import { withRouter } from 'react-router';
import { compose } from "redux";
import { connect } from "react-redux";
import HeaderContainer from './components/Header/HeaderContainer';

type PropsType = ReturnType<typeof mapStateToProps>

class App extends React.Component<PropsType> {
  render() {
    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content' >
          <Switch>
            <Route path='/users'>
              <UsersContainer />
            </Route>
            <Route path='/profile/:userId?'>
              <ProfileContainer />
            </Route>
            <Route path='/chats'>
              <ChatsListContainer />
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
