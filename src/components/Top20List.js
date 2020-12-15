import Top20Entry from "./Top20Entry";

const Top20List = ({top20UKSongs}) => {

    const top20UKSongsNodes = top20UKSongs.map((song) => {
        
        let label = song["im:name"].label;
        let key = top20UKSongs.indexOf(song);

        return(

           <Top20Entry label={label} key={key} />
        )
    })

    return(
        <>
            <ul>
            {top20UKSongsNodes}
            </ul>
        </>
    )
}
export default Top20List;