import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../Props/user.json';
import data from '../Props/data.json';
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
    </div>  
  );
};
