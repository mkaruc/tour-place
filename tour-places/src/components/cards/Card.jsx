import cardStyle from './Card.module.css';

const Card=({data})=> {
  return (
    <div className={cardStyle['container']}>
        {data.map((item)=>{
            const{id, title, desc, image}=item;
            return(
                <div className={cardStyle['card']} key={id}>
                <h1>{title}</h1>
                <div className='textOnImage'>
                <img src={image} alt="image"></img></div>
                <p>{desc}</p>
                </div>
            )
        })}
    </div>
  );
};

export default Card;

//#C7E5F4