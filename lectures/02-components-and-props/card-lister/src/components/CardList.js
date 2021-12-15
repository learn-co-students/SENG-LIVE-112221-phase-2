import Card from './Card';

function CardList({ cards }) {

    return (
        <div className="card-list">
            <h2 className="component-name">Card List Component</h2>
            <br />

            {cards.map(card => {
                return (
                    <Card 
                        key={card.id}
                        title={card.title} 
                        content={card.content} 
                    />
                );
            })}
        </div>
    );
}

export default CardList;