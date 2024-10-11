import { USERS } from '../constants/users';
const SliderState = ({ index, setIndex }) => {
  const isFirstUser = index === 0;
  const isLastUser = index === USERS.length - 1;
  return (
    <>
      <button onClick={() => previous(index, setIndex)} disabled={isFirstUser}>
        Previous
      </button>
      <button onClick={() => next(index, setIndex)} disabled={isLastUser}>
        Next
      </button>
    </>
  );
};

const next = (index, setIndex) => {
  setIndex(index + 1);
};

const previous = (index, setIndex) => {
  setIndex(index - 1);
};

export default SliderState;
