export default interface IUser {
    UUID: string;
    atHome: boolean;
    name: string;
    imageURI?: string;
    homeOwner: boolean;
    guestOfUUID: string;
}