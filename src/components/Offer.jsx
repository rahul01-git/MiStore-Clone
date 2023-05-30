const Offer = ({src,link,idx}) => {
  return (
    <a href={link}><img src={src} alt={idx} /></a>
    )
}

export default Offer