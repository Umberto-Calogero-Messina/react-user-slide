import { useState } from 'react';
import Card from './components/card/Card';
import { USERS } from './constants/users';
import SliderState from './slider/Slider';

const App = () => {
  const [index, setIndex] = useState(0);
  const user = USERS[index];

  return (
    <>
      {user && (
        <Card
          key={user.userId}
          title={user.title}
          name={user.name}
          username={user.username}
          email={user.email}
          profileImage={user.profileImage}
        />
      )}
      <SliderState index={index} setIndex={setIndex} />
    </>
  );
};

export default App;
