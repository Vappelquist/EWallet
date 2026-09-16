import bitcoin from '../assets/vendor-bitcoin.svg'
import blockchain from '../assets/vendor-blockchain.svg'
import evil from '../assets/vendor-evil.svg'
import ninja from '../assets/vendor-ninja.svg'
import darkChip from '../assets/chip-dark.svg'
import lightChip from '../assets/chip-light.svg'


const logos ={
    bitcoin : bitcoin,
    blockchain : blockchain,
    evil : evil,
    ninja : ninja
}
const vendorColors = {
    bitcoin: 'rgba(255, 181, 70)',
    blockchain: 'rgba(126, 80, 226)',
    evil: 'rgba(222, 47, 78)',
    ninja: 'rgba(58, 58, 58)'
}


function Card({ number, holder, expiry, vendor, label, placeholder}){
    const background = vendorColors[vendor] || '#333';
    return(
    // <div className={`card ${vendor} ${placeholder ? 'card--empty' : ''}`}>
    <div className="card" style={{background}}>
        <div className="imgs">
            <img src={lightChip} alt="chip" />
            <img src={logos[vendor]} alt="VendorLogo" />
            </div>
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

/*bitcoin-cl: rgba(255, 181, 70);
  --ninja-cl: rgba(rgba(58, 58, 58));
  --blockchain-cl: rgba(rgba(126, 80, 226));
  --evil-cl: rgba(rgba(222, 47, 78));*/