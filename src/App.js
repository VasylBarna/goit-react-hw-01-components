import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />;
    </div>
  );
}

export default App;
