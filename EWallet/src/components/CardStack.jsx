import Card from './Card';

function CardStack({ cards = [], onSelect}){
    console.log('cards:', cards);
    return(


        
        <div className='card-stack'>
            {cards.map((card) => (
                <div key ={card.id} onClick={() => onSelect(card.id)}>
                    <Card {...card}/>
                    </div>
            ))}
        </div>
    )
}

export default CardStack;