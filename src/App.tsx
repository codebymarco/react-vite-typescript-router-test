import { Link } from 'react-router-dom';
import AppRouter from './AppRouter';


function App() {
  return (
    <div className="App">
      <Link to='/'>home</Link>
      <Link to='/about'></Link>
      <AppRouter />
    </div>
  );
}

export default App;