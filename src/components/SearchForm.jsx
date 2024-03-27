import { useState, useEffect } from "react";
const SearchForm = ({onSearch})=>{
    const [searchStr, setsearchStr] = useState('');
    const [searchOption, setsearchOption] = useState("shows")

    useEffect(()=>{
        console.log("component mounts")
        return ()=>{
            console.log("component unmounts")
        }
    }, [searchOption]);
    const onSearchInputChange = (ev)=>{
        setsearchStr(ev.target.value);
    }
    const onRadioChange = (ev)=>{
        setsearchOption(ev.target.value);
    }
    const onSubmit = (ev)=>{
        ev.preventDefault();
        const options = {
            q:searchStr,
            searchOption,
        }
        onSearch(options);
    }
    return (
        <form name = "" action="" onSubmit={onSubmit}>
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
    );
}
export default SearchForm;