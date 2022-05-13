import { useEffect, useState } from "react";
import { Interface } from "readline";
import { api } from "../../services/api";
import { TrendingMoviesItem } from "../TrendingMoviesItem";
import { Container, MovieList } from "./styles";

interface Movie {
    id: string;
    original_title: string;
    overview: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    media_type: string;
}

interface Request {
    page: number;
    total_pages?: number;
    total_results?: number;
    canLoadMore?: boolean;
}

export function TrendingMovies(){
    
    const [movies, setMovies] = useState<Movie[]>([]);
    const [request, setRequest] = useState<Request>({page: 1, canLoadMore: true });
    const [isLoading, setIsLoading] = useState(false);

    const getMovies = (pageNumber: number) => {
        setIsLoading(true);
        api.get(`/trending/movie/week?api_key=17431779eda8af5a56badd182eac5e70&page=${pageNumber}`)
        .then((response) => {
            setRequest({
                ...request,
                total_results: response.data.total_results,
                total_pages: response.data.total_pages,
                canLoadMore: request.page < response.data.total_pages
            })
            setMovies([...movies, ...response.data.results])
        })
        setIsLoading(false);
    }

    const handleNextPage = () => {
        if(!request.canLoadMore) return;
        setRequest({...request, page: request.page + 1})
    }

    useEffect(() => {
        getMovies(request.page);
    }, [request.page])

    return (
        <>
            <Container>
                <MovieList>
                    {/* { isLoading ? <h1 color="#fff">Loading...</h1> : <></> } */}
                    {movies.map(movie => {
                        return <TrendingMoviesItem key={movie.id} movie={movie} />
                    })}
                </MovieList>
                {request.canLoadMore && <button onClick={handleNextPage} className="btn load-more">Carregar Mais</button>}
            </Container>
        </>
    );
}


