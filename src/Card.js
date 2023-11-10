import './Card.css'

const Card = (props) => {

    return (
        
            <div className="card">
                <div className="card_body">

                    <img src={props.image} className='card_image'/>

                    <div className="card_title">
                        <h1>{props.title}</h1>
                    </div>


                    <div className="card_description">
                        <h3>{props.description}</h3>
                    </div>


                    <div className="card_link">
                        {props.link}
                    </div>


                </div>
            </div>
       
    )
}

export default Card;
