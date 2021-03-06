import Container from './components/Container';

import Profile from './components/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './data/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
