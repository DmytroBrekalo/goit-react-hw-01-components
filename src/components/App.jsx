import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../Props/user.json';
import data from '../Props/data.json';
import friends from '../Props/friends.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
    </div>  
  );
};
