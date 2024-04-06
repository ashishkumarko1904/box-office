import { useParams } from "react-router-dom";
import { getShowbyId } from "../api/tvmaze";
import {useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
//const useShowbyId = showId =>{
//    const [showData, setShowData] = useState(null)
//    const [showError, setShowError] = useState(null)
//    useEffect(()=>{
//        async function fetchData(){
//            try {
//                const data = await getShowbyId(showId)
//                setShowData(data)
//            } catch (err) {
//                setShowError(err);
//            }
//            const data = await getShowbyId(showId)
//            console.log(data)
//        }
//        fetchData();
//    },[showId]);
//    return {showData, showError}
//}
const Show = ()=>{
    const {showId} = useParams();
   // const {showData, showError} = useShowbyId(showId)
  const {data:showData, error:showError} = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowbyId(showId),
   })
    if(showError)
    {
        return <div>we got an error {showError.message}</div>
    }
    if(showData)
    {
        return <div>
            <ShowMainData 
            image = {showData.image}
            name = {showData.name}
            rating = {showData.rating}
            summary = {showData.summary}
            genres = {showData.genres}
            />
            <div>
                <h2>details</h2>
                <Details 
                status = {showData.status}
                premiered = {showData.premiered}
                network = {showData.network}
                />
            </div>
            <div>
                <h2>Seasons</h2>
                <Seasons seasons = {showData._embedded.seasons}/>
            </div>
            <div>
                <h2>Cast</h2>
                <Cast  cast = {showData._embedded.cast}/>
            </div>
        </div>
    }
    return <div>
        data is loading 
    </div>
}
export default Show;