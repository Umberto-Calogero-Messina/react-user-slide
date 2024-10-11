const Card = ({ name, username, email, profileImage }) => {
  return (
    <>
      <img src={profileImage} alt='' />
      <h1>NAME: {name}</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </>
  );
};

export default Card;
