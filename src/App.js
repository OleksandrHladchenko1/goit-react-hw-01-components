import './App.css';

import user from './data/user.json';
import Profile from './components/Profile/Profile';

import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistics/Statistics';

import FriendList from './components/FriendsList/FriendList';
import friends from './data/friends.json';

import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <h2 className="App-title">Task 1</h2>

      <Profile
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <h2 className="App-title">Task 2</h2>

      <Statistics title="Upload stats" stats={statisticalData} />

      <h2 className="App-title">Task 3</h2>

      <FriendList friends={friends} />

      <h2 className="App-title">Task 4</h2>

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
