import '../styles/ProductReviewCard.css'
export const ProductReviewCard = ({ price, name, review, image, index }) => {
  return <div className="productReviewCard">
    <img src={image} alt={`${index} review`} />
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
  </div>;
};

