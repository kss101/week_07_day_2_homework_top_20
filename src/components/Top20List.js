import Top20Entry from "./Top20Entry";

const Top20List = ({top20UKSongs}) => {

    const top20UKSongsNodes = top20UKSongs.map((song) => {

        let name = song["im:name"].label;
        let artist = song["im:artist"].label;
        let key = top20UKSongs.indexOf(song);

        return(

           <Top20Entry name={name} artist={artist} position={key + 1} key={key} />
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