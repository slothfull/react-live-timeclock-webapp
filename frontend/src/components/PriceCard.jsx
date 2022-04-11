const PriceCard = ({ type, price }) => {
    const border = {
        time: '8px solid #4caf50',
    };

    return (
        // see ../app.css for style cusomization
        <div className="price-card" style={{ borderBottom: border[type] }}>
            <h4 className="price-type">{type}</h4>
            <h1 className="price"> ‹{price}› </h1>
        </div>
    );
};

export default PriceCard;
