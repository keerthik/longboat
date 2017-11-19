import * as React from 'react';
import Card from "./Card";
import CardSection from "./CardSection";
import UserCardBottom from "./UserCardBottom";
import IUser from "../interfaces/IUser";

interface IUserProps extends IUser {
    onUserClick:(UUID: string) => void,
}

const style = {
    top: {
        flex: 3,
        backgroundSize: "100%",
    },
    outer: {
        height: "300px",
        width: "300px",
        backgroundColor: "#e1e5ed",
        fontFamily: "comfortaa",
        fontSize: "30px"
    }
};

class UserCard extends React.Component<IUserProps, {}> {
    constructor(props: IUserProps) {
        super(props);
    }

    public render() {
        return (
            <Card style={style.outer} onCardClick={() => { this.props.onUserClick(this.props.UUID) }}>
                <CardSection 
                    style={{ ...style.top,
                        backgroundImage: (this.props.imageURI ? `url(${this.props.imageURI})` : null)
                    }}
                />
                <UserCardBottom name={this.props.name} atHome={this.props.atHome} />
            </Card>
        );
    }
};

(props: IUserProps) => {
    
};

export default UserCard;
