const Seasons = ({seasons,})=>{
    return <div>
        <p>Seasons in total: {seasons.length}</p>
        <p>Episodes in total: {' '} {seasons.reduce((sum,seasons)=>sum+seasons.episodeOrder,0)}</p>
        <div>
            {seasons.map(season => (<div key={season.id}>
                <p>Season: {seasons.number}</p>
                <p>episode: {seasons.episodeOrder}</p>
                <div>
                    Aired:{season.premiereDate}-{season.endDate}
                </div>
                </div>))}
        </div>
    </div>
}
export default Seasons;