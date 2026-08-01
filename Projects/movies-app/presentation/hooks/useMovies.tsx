import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import {nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.actions";
import { upComingAction } from "@/core/actions/movies/upcoming.action";


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
    });

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','topRated'],
        queryFn: ({ pageParam })=> {
            console.log({pageParam})
            return topRatedMoviesAction({page : pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24, //24Hrs
        getNextPageParam: ( lastPage, pages)=> pages.length + 1
    });

    const upcomingQuery = useQuery({
        queryKey: ['movies','upcoming'],
        queryFn: upComingAction,
        staleTime: 1000 * 60 * 60 * 24, //24Hrs
    });

    return{
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    }
}