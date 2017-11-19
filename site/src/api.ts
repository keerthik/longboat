import Axios from 'axios';
import IUser from './interfaces/IUser';
import { LONGBOAT_API_ENDPOINT } from './utils/Constants';

export const getUsersAPI = async () => (Axios.get(LONGBOAT_API_ENDPOINT));
export const setUserAPI = async (user: IUser) => (Axios.post(LONGBOAT_API_ENDPOINT, {user:{...user, house: "longboat"}}));