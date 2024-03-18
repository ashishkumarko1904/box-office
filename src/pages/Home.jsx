import { useState } from "react";
import { searchforShows, searchforPeople } from "./../api/tvmaze";
const Home = ()=>{
    const [apiData, setapiData] = useState(null);
    const [apiDataError, setapiDataError] = useState(null);
    const [searchStr, setsearchStr] = useState('');
    const [searchOption, setsearchOption] = useState("shows")
    const onSearchInputChange = (ev)=>{
        setsearchStr(ev.target.value);
    }
    const onRadioChange = (ev)=>{
        setsearchOption(ev.target.value);
    }
    const onSearch = async(ev)=>{
        ev.preventDefault();
       try {
        setapiDataError(null);
        if(searchOption === 'shows')
        {
            const result = await searchforShows(searchStr);
            setapiData(result);
        }else{
            const result = await searchforPeople(searchStr);
            setapiData(result);
        }
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
            return apiData[0].show
            ?apiData.map((data)=>
                <div key={data.show.id}>{data.show.name}</div>)
            :apiData.map((data)=>
                <div key={data.person.id}>{data.person.name}</div>);
        }
        return null;
    }
    return <div>
        <form action="" onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
            Shows
            <input type="radio" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
        </label>
        <label>
            Actors
            <input type="radio" name="search-option" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange}/>
        </label>
        <button type="submit">Search</button>
        </form>
        <div>{renderApidata()}</div>
    </div>
}
export default Home;