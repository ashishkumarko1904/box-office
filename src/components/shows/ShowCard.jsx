import { Link } from "react-router-dom";

const ShowCard = ({name, image, id, summary})=>{
    const summaryStripped = summary? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''):"no description"
    return <div>
        <div>
            <img src={image} alt={name} />
        </div>
        <p>{summaryStripped}</p>
        <div>
            <Link to="/">read more</Link>
            <button>star me</button>
        </div>
        <h1>{name}</h1>
    </div>
}
export default ShowCard;