import axios from "axios";
import { type UserListResponse } from "../interfaces/reqres.response"

export const loadUsersAction = async (page: number) => {

  try{
    const { data } = await axios.get<UserListResponse>('https://reqres.in/api/users', {
      params: {
        page: page
      },
      headers:{
        'x-api-key':'reqres_b155977d37f24ebdb35467cb89a36689'
      }
    });

    return data.data;

  } catch( error ){
    console.log( error );
    return [];

  }

};