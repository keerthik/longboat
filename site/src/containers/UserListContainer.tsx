import * as React from "react";
import { getUsersAPI, setUserAPI } from "../api";
import IUser from "../interfaces/IUser";
import UserCard from "../components/UserCard";
import AddUserForm from "../components/AddUserForm";

interface IUserListContainerState {
    users: {[UUID:string]: IUser};
    loading: boolean;
}

class UserListContainer extends React.Component<{}, IUserListContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: {},
            loading: true
        };

        this.toggleUserState = this.toggleUserState.bind(this);
    }

    async componentWillMount() {
        try {
            const usersArr: any[] = await this.fetchUsers();

            // TODO: make this nice
            const users = {}
            usersArr.forEach((u: IUser) => {
                (users as any)[u.UUID] = u;
            });
            
            console.log(`Processed users: ${JSON.stringify(users)}`);

            this.setState({
                users,
                loading: false
            });
            console.log(`Fetched users: ${JSON.stringify(users)}`);
        } catch (err) {
            console.log(err);
        }

    }

    private async fetchUsers() {
        console.log('Fetching users');
        const users = (await getUsersAPI() as any);
        return users.data;
    }

    public async toggleUserState(UUID:string) {
        console.log(`Clicked user: ${UUID}`);
        const user = this.state.users[UUID];
        user.atHome = !(user.atHome);
        this.setUserState(user); // Optimistically set state

        try {
            await setUserAPI(user);
            console.log(`Successfully toggled user: ${user.UUID}`);
        } catch (err) {
            console.log(`User didn't properly set in API, with err: ${err}`);
            this.setUserState(user);
        }
    }

    public async addUser(user: {name: string, guestOfUUID: string}) {
        const newUser: IUser = {
            name: user.name,
            guestOfUUID: user.guestOfUUID,
            atHome: true,
            homeOwner: false,
            UUID: String(Math.floor(Math.random() * Number("0xFFFFFFFF")))
        }
        
        console.log(`Tryna add that user: ${JSON.stringify(newUser)}`)
        try {
            await setUserAPI(newUser)
            console.log("Succesfully added user")
            await this.fetchUsers();
        } catch (err) {
            console.log(`Error adding user: ${JSON.stringify(err)}`);
        }
    }

    public render() {
        return (
            <div>
                {this.state.loading ? this.renderLoading(): this.renderUsers()}
                <AddUserForm users={Object.values(this.state.users)} onSubmit={this.addUser}/>
            </div>
        )
    }

    private renderLoading() {
        return ('THIS SHIT IS LOADING!');
    }

    private renderUsers() {
        return (Object.keys(this.state.users)
            .map((UUID) => (this.state.users[UUID]))
            .map((u) => (<UserCard {...u} onUserClick={this.toggleUserState} key={u.UUID} />)));
    }

    private setUserState(user: IUser) {
        this.setState((prevState) => {
            const state = { ...prevState };
            state.users[user.UUID] = user;
            return state;
        });
    }
}

export default UserListContainer;