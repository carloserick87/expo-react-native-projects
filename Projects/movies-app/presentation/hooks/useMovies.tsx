import { useQuery } from '@tanstack/react-query'
import {nowPlayingAction} from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction} from "@/core/actions/movies/popular.action";


export const useMovies = () =>{

// Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, //24Hrs
    });

    const popularQuery = useQuery({
        queryKey: ['movies','popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, //24Hrs
    })

    return{
        nowPlayingQuery,
        popularQuery,
    }
}