import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getShowbyId } from "../api/tvmaze";
const useShowbyId = showId =>{
    const [showData, setShowData] = useState(null)
    const [showError, setShowError] = useState(null)
    useEffect(()=>{
        async function fetchData(){
            try {
                const data = await getShowbyId(showId)
                setShowData(data)
            } catch (err) {
                setShowError(err);
            }
            const data = await getShowbyId(showId)
            console.log(data)
        }
        fetchData();
    },[showId]);
    return {showData, showError}
}
const Show = ()=>{
    const {showId} = useParams();
    const {showData, showError} = useShowbyId(showId)
    if(showError)
    {
        return <div>we got an error {showError.message}</div>
    }
    if(showData)
    {
        return <div>showname : {showData.name}</div>
    }
    return <div>
        data is loading 
    </div>
}
export default Show;