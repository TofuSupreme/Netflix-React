import './styles.css'

const base_poster_url = "https://image.tmdb.org/t/p/original"

function Poster({ title, url }) {
    return ( 
        <div className="poster">
            <img src={base_poster_url + url} alt={title} />

            <div className="overlay"></div>

            <div className="poster-description">
                {title}
            </div>
        </div>
    )
}

export default Poster