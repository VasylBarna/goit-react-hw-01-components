import React from 'react';
import Profile from './Profile/Profile';

import user from './user.json';

function App() {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
}

export default App;
