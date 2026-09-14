function Card({ number, holder, expiry, vendor, label, placeholder}){
    return(
    <div className={`card ${placeholder ? 'card--empty' : ''}`}>
        <span className="card-label">{label}</span>
        <p>{number || 'XXXX XXXX XXXX XXXX'}</p>
        <div className="card-footer">
            <span>{holder || 'Firstname Lastname'}</span>
            <span>{expiry || 'MM/YY'}</span>
        </div>
    </div>
    );
}

export default Card;