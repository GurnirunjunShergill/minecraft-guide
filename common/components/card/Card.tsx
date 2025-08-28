const Card = ({ itemName, itemImage, description, tags, className }) => {
  return (
    <section className={className}>
      <h3>{itemName}</h3>
      <img src={itemImage} alt={`image of ${itemName}`} />
      <p>{description}</p>
      <p>{tags}</p>
      <button>View Details</button>
      <button>Toggle Recipe View</button>
    </section>
  );
};
export default Card;
