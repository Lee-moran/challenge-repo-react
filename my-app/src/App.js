import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.Sidebar}>
      <Sidebar/>
      <StatefulGreeting/>
      <NavBarSimple/>
      <NavBarForm/>
    </div>
  );
}



export default App;