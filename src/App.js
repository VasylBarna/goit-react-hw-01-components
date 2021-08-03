import Container from './components/Container';
import Profile from './components/Profile';
import user from './user.json';

import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

function App() {
  return (
    <Container>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
