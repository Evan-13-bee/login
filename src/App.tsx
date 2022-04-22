import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { restoreState } from './API/LocalStorage';
import './App.scss';
import { Login } from './Components/Login/Login';
import { Users } from './Components/Users/Users';
import { InitialLoginStateType } from './Reducers/Login';
import { changeAuthMe } from './Reducers/LoginAC';
import { AppRootStateType } from './store/state';

function App() {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const status = useSelector<AppRootStateType, InitialLoginStateType>(state => state.LoginReducer)

  const goToPage = (path: string) => {
    navigate(path);
  };
  
  useEffect(() => {
    let me = restoreState('authMe', {login: '0', password: 0})
    if (me.login !== '0') {
      dispatch(changeAuthMe(true))
      goToPage('users')
    } else {
      goToPage('login')
    }
  }, [status.me])

  return (
    <div className="App">
      {/* <Container>
        <Row>
          <Col md="2"  style={{background: 'red'}}>1 of 1</Col>
          <Col md="8"  style={{background: 'blue'}}>1 of 1</Col>
        </Row>
      </Container> */}
      <Routes>
        <Route path="login" element={<Login />}>
        </Route>
        <Route path="users" element={<Users/>}> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
