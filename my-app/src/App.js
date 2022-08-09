import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.Sidebar}>
      <Sidebar/>
      <StatefulGreeting/>
    </div>
  );
}



export default App;