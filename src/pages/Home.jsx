import { useState } from "react";
import { searchforShows } from "./../api/tvmaze";
const Home = ()=>{
    const [apiData, setapiData] = useState(null);
    const [apiDataError, setapiDataError] = useState(null);
    const [searchStr, setsearchStr] = useState('');
    const onSearchInputChange = (ev)=>{
        setsearchStr(ev.target.value);
    }
    const onSearch = async(ev)=>{
        ev.preventDefault();
       try {
        setapiDataError(null);
        const result = await searchforShows(searchStr);
       setapiData(result);
       } catch (error) {
        setapiDataError(error);
       }
    }
    const renderApidata = ()=>{
        if(apiDataError)
        {
            return <div>Error Occured:{apiDataError.message}</div>
        }
        if(apiData)
        {
            return apiData.map((data)=>(
                <div key={data.show.id}>{data.show.name}</div>
            ));
        }
        return null;
    }
    return <div>
        <form action="" onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
        </form>
        <div>{renderApidata()}</div>
    </div>
}
export default Home;