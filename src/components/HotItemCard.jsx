import '../styles/HotItemCard.css'
const HotItemCard = ({name,image,price,index}) => {
  return (
    <div className="hotItemCard">
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard