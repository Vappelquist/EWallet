import { useDispatch, useSelector } from "react-redux"
import { useNavigate} from "react-router-dom"
import { cardSetActive } from "../reducers/cardsSlice"
import Header from '../components/Header'
import Card from '../components/Card'
import CardStack from "../components/CardStack"

function Home(){
const {items, activeCardId} = useSelector((state) => state.cards);
const dispatch = useDispatch();
const navigate = useNavigate();

const activeCard = items.find ((c) => c.id === activeCardId);
const otherCards = items.filter ((c) => c.id !== activeCardId)

console.log('items:', items);
console.log('otherCards:', otherCards);
    return(
        <div>
            <Header title ="E-Wallet"/>
            {activeCard && <Card {...activeCard} label="Active card" />}

        <CardStack
        cards = {otherCards}
        onSelect ={(id) => dispatch(cardSetActive(id))}
        />

        <button onClick={() => navigate('/addcard')}> 
            Add a new card
        </button>
        </div>
    )
}
export default Home;