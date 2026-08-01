import { View, Text } from 'react-native';
import {CompleteMovie} from "@/infrastructure/interfaces/movie.interfaces";
import {Formatter} from "@/config/helpers/formatter";

interface Props{
    movie: CompleteMovie;
}

const MovieDescription = ({movie}:Props) => {
  return (
    <View className='mx-5'>
        <View className='flex '>
            <Text>{movie.description}</Text>
            <Text className='mt-3'> - {movie.genres.join(', ')}</Text>
        </View>

        <Text className='font-bold mt-5'>Sinopsis</Text>
        <Text className='font-normal mt-2'>{movie.description}</Text>

        <Text className='font-bold mt-2 text-2xl'>{Formatter.currency(movie.budget)}</Text>

    </View>
  );
};

export default MovieDescription;