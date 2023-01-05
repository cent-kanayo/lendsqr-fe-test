interface Card {
  image: string;
  text: string;
  figure: number;
}
const UserInfoCard = ({ image, text, figure }: Card) => {
  return (
    <article className="card">
      <img src={image} alt="avatar" />
      <p>{text}</p>
      <h3>{figure}</h3>
    </article>
  );
};

export default UserInfoCard;
