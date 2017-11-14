export default interface IUser {
    UUID: string;
    atHome: boolean;
    host: IUser;
    name: string;
    imageURI?: string;
}