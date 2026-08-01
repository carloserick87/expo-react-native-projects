import {View, Text, useWindowDimensions} from 'react-native';
import { Movie } from '@/infrastructure/interfaces/movie.interfaces'
import Carousel from 'react-native-reanimated-carousel';
import {useRef} from "react";
import MoviePoster from "@/presentation/components/movies/MoviePoster";

interface Props{
    movies: Movie[];
}

const MainSlideshow = ({ movies }:Props) => {

    const ref= useRef(null);
    const width = useWindowDimensions().width;

  return (
    <View className='h=[250px] w-full'>
        <Carousel
            ref={ref}
            data={ movies }
                  renderItem={({ item })=><MoviePoster id={item.id} poster={item.poster} smallPoster={false} />}
                  width={ 200}
                  height={300}
                  style={{
                      width: width,
                      height: 300,
                      justifyContent:'center',
                      alignItems:'center',
                  }}
                      mode='parallax'
                      modeConfig={{
                          parallaxScrollingScale: 0.9,
                          parallaxScrollingOffset: 50,
                      }}
            defaultIndex={1}
        >

        </Carousel>
    </View>
  );
};

export default MainSlideshow;