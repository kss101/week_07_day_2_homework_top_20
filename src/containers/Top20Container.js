import {useEffect, useState} from "react";
import Top20List from "../components/Top20List";

const Top20Comtainer = () => {

    const [top20UKSongs, setTop20UKSongs] = useState(null);

        const getTop20 = () => {
            console.log("Getting Top 20 Listings");
            fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTop20UKSongs(data)
            })
        };

        useEffect(() => {
            getTop20();
          },[]);
          if(!top20UKSongs) return null;

    return (
        <>
            <h1>UK Top 20 Listings...</h1>
            <Top20List top20UKSongs={top20UKSongs.feed.entry} />
        </>
    )
}

export default Top20Comtainer;