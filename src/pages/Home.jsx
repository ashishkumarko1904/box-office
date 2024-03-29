import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchforShows, searchforPeople } from "./../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
const Home = ()=>{
    const [filter, setFilter] = useState(null)

    const { data:apiData,error:apiDataError } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => filter.searchOption === 'shows'?searchforShows(filter.q):searchforPeople(filter.q),
      enabled: !!filter,
      refetchOnWindowFocus: false,
    })
  

    //const [apiData, setapiData] = useState(null);
    //const [apiDataError, setapiDataError] = useState(null);   
    const onSearch = async({q,searchOption})=>{
        setFilter({q,searchOption})
    //   try {
    //    setapiDataError(null);
    //    let result;
    //    if(searchOption === 'shows')
    //    {
    //         result = await searchforShows(q);
    //    }else{
    //        result = await searchforPeople(q);
    //    }
    //    setapiData(result);
    //   } catch (error) {
    //    setapiDataError(error);
    //   }
    }
    const renderApidata = ()=>{
        if(apiDataError)
        {
            return <div>Error Occured:{apiDataError.message}</div>
        }
        if(apiData?.length === 0){
            return <div>no results</div>
        }
        if(apiData)
        {
            return apiData[0].show
            ?<ShowsGrid shows = {apiData}/>
            :<ActorsGrid actors = {apiData}/>;
        }
        return null;
    }
    return <div>
        <SearchForm onSearch={onSearch} />
         <div>{renderApidata()}</div>

    </div>
}
export default Home;