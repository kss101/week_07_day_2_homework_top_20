const Top20Entry = ({name, artist, position}) => {
    return (
        <>
            <li>
                <h4>Title: {name}</h4>
                <p>Artist: {artist}</p>
                <p>Chart Postition: {position}</p>
            </li>
        </>
    )
}

export default Top20Entry;