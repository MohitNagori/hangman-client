import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AppRouter from './Router';
import { State } from '../redux/reducers';
import { connect } from 'react-redux';
import { appState } from '../redux/reducers/app';
import './App.scss';

// Props interface
interface Props {
  app?: appState;
}

// Bind state to Props
const mapStateToProps = (state: State) => ({
  app: state.app
})

const App: React.FunctionComponent<Props> = props => {
  return (
    <>
      <div className={`theme-${props.app?.theme}`}>        
        <Header />
        <div className="app-main">
          <AppRouter />
        </div>
        <Footer />   
      </div>
    </>
  );
}


// Redux connector to create high order component with store integration
const AppContainer = connect(mapStateToProps, null)(App);
export default AppContainer;
