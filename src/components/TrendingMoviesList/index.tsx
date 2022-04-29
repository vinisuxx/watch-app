import { text } from "node:stream/consumers";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TrendingMoviesItem } from "../TrendingMoviesItem";
import { Container } from "./styles";

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
    results?: object;
    total_pages?: number;
    total_results?: number;
}

export function TrendingMovies(){

    const getMovies = (pageNumber: number) => {
        setIsLoading(true);
        api.get(`/trending/movie/week?api_key=17431779eda8af5a56badd182eac5e70&page=${pageNumber}`)
        .then(response => setMovies([...movies, ...response.data.results]))
        setIsLoading(false);
    }

    const handleNextPage = () => {
        setRequest({
            ...request,
            page: request.page + 1
        })
    }

    const [movies, setMovies] = useState<Movie[]>([]);
    const [request, setRequest] = useState<Request>({page: 1});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getMovies(request.page);
    }, [request.page])

        
    return (
        <>
            <Container>
                {/* { isLoading ? <h1 color="#fff">Loading...</h1> : <></> } */}
                {movies.map(movie => {
                    return <TrendingMoviesItem key={movie.id} movie={movie} />
                })}
            {/* <button onClick={handleNextPage}>Próximo</button> */}
            </Container>
        </>
    );
}


