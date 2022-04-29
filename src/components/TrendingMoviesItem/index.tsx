import { Container, MovieInfo } from "./style";
import { BsStarFill } from 'react-icons/bs'

interface TrendingMoviesItemProps {
    movie: {
        original_title: string;
        overview: string;
        backdrop_path: string;
        release_date: string;
        vote_average: number;
        media_type: string;
    }
}

export function TrendingMoviesItem({ movie }: TrendingMoviesItemProps) {
    return (
        <Container>
            <div className="movie-backdrop"><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/></div>
            <MovieInfo>
                <span className="media-type">{movie.media_type}</span>
                <h1>{movie?.original_title ?? 'Sem Título'}</h1>
                {/* Se o filme possuir uma data de lançamento, retorna apenas o ano */}
                { movie?.release_date && <span className="release-date">{movie.release_date.slice(0, movie.release_date.indexOf('-'))}</span> }
                { movie?.vote_average && <span className="vote-avarage"><BsStarFill color="#ffb801" /> {movie.vote_average}</span> }          
            </MovieInfo>
        </Container>
    );
}