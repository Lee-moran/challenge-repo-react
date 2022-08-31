import css from './App.module.css';
// import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import NavBarSimple from './components/NavBarSimple';
// import NavBarForm from './components/NavBarForm';
// // import Content from './components/Content';
// import Loader from './components/Loader';
// import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.Sidebar}>
      {/* <Loader/>
      <StatefulGreeting/>
      <NavBarSimple/>
      <NavBarForm/>
      <Sidebar/>
      <Content/> */}

      {/* <ContentHooks/> */}

      {/* <ContentAPI/> */}
      <ContentAPIHooks/>
      
    </div>
  );
}



export default App;