import * as React from "react";
import { getUsers, setUser } from "../api";
import IUser from "../interfaces/IUser";
import UserCard from "../components/UserCard";
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

            this.setState((prevState) => ({
                users,
                loading: false
            }));
            console.log(`Fetched users: ${JSON.stringify(users)}`);
        } catch (err) {
            console.log(err);
        }

    }

    async fetchUsers() {
        console.log('Fetching users')
        const users = await (getUsers() as any);
        return users.data;
    }

    async toggleUserState(UUID:string) {
        console.log(`Clicked user: ${UUID}`);
        const user = this.state.users[UUID];
        user.atHome = !(user.atHome);
        try {
            await setUser(user);
            console.log(`Successfully toggled user: ${user.UUID}`);
            this.setState((prevState) => {
                const state = {...prevState};
                state.users[user.UUID] = user;
                return state;
            });
        } catch (err) {
            console.log(err);
        }
    }

    renderLoading() {
        return ('THIS SHIT IS LOADING!');
    }

    renderUsers() {
        return (Object.keys(this.state.users)
            .map((UUID) => (this.state.users[UUID]))
            .map((u) => (<UserCard {...u} onUserClick={this.toggleUserState} key={u.UUID}/>)));
    }
    

    public render() {
        return (
            <div>
                {this.state.loading ? this.renderLoading(): this.renderUsers()}
            </div>
        )
    }
}

export default UserListContainer;