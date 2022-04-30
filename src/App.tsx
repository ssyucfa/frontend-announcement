import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import AddAnnouncement from './components/announcement/AddAnnouncement';
import ListAnnouncement from './components/announcement/ListAnnouncement';
import LoginForm from './components/authentication/LoginForm';
import RegisrationForm from './components/authentication/Registration';


const App: React.FC = () => {
  const {store} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])

  if (!store.isAuth) {
      return <><LoginForm /><br/><RegisrationForm /></>
  }

  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <ListAnnouncement />
      <AddAnnouncement />
      <button onClick={() => store.logout()}>Выйти</button>
    </div>
  );
}

export default observer(App);
