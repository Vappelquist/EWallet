import bitcoin from '../assets/vendor-bitcoin.svg'
import blockchain from '../assets/vendor-blockchain.svg'
import evil from '../assets/vendor-evil.svg'
import ninja from '../assets/vendor-ninja.svg'
import darkChip from '../assets/chip-dark.svg'
import lightChip from '../assets/chip-light.svg'




function Card({ number, holder, expiry, vendor, label, ccv}){
    const background = vendorColors[vendor.toLowerCase()] || '#333';
    const textColor = vendorTextColor[vendor.toLowerCase ()]
    const chipDesign = vendorChip[vendor.toLowerCase ()]
    return(
        <div className="card" style={{background}}>
        <div className="imgs">
            <img src={chipDesign} alt="chip" className="card-chip"/>
            <img src={logos[vendor.toLowerCase()]} alt="VendorLogo" className="card-vendor-logo"/>
            </div>
            <span className="card-label">{label}</span>
            <p className="card-number" style={{ color: textColor }}>{number || 'XXXX XXXX XXXX XXXX'}</p>
            <div className="card-footer">
                <div className="cardname">
                <p className="info-text" style={{ color: textColor }}>CARDHOLDER NAME</p>
                <span className="card-info" style={{ color: textColor }}>{holder || 'Firstname Lastname'}</span>
                </div>
                <div className="cardnumbers">
                <p className="info-text" style={{ color: textColor }}>VALID THRU</p>
                <span className="card-info" style={{ color: textColor }}>{expiry || 'MM/YY'}</span>
                </div>
                
            </div>
        </div>
    );
}

export default Card;

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
const vendorTextColor ={
    bitcoin:'rgba(4, 4, 4)',
    blockchain: 'rgba(255, 255, 255)',
    evil: 'rgba(255, 255, 255)',
    ninja: 'rgba(255, 255, 255)'
}
const vendorChip ={
    bitcoin: (darkChip),
    blockchain: (lightChip), 
    evil: (lightChip),
    ninja: (lightChip),
}
