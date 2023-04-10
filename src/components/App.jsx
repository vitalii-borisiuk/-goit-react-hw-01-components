import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendsList';
import Transactions from './Transactions/Transactions';
import user from '../data/user.json';
import Stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
<section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
</section>

<section>
        <Statistics title="Upload stats" stats={Stats} />
</section>


<section>
        <FriendList friends={friends} />
</section>

<section>
        <Transactions transactions={transactions} />
</section>
    </div>
  );
}