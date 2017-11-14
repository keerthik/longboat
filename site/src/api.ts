import Axios from 'axios';
import IUser from './interfaces/IUser';
import { LONGBOAT_API_ENDPOINT } from './utils/Constants';

export const getUsers = async () => (Axios.get(LONGBOAT_API_ENDPOINT));
export const setUser = async (user: IUser) => (Axios.post(LONGBOAT_API_ENDPOINT, {user:{...user, house: "longboat"}}));