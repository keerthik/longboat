import * as React from 'react';
import Card from "./Card";
import CardSection from "./CardSection";
import UserCardBottom from "./UserCardBottom";
import IUser from "../interfaces/IUser";

interface IUserProps extends IUser {
    onUserClick:(UUID: string) => void,
}

interface IUserState {
    loaded: boolean;
}

const style = {
    top: {
        flex: 3,
        backgroundSize: "100%",
    },
    outer: {
        height: "300px",
        width: "300px",
        // transition: "scale 1000ms ease-in "
        backgroundColor: "#e1e5ed",
        fontFamily: "comfortaa",
        fontSize: "30px",
        transition: "transform 1000ms ease-in-out",
        transform: ""
    }, 
    unloaded: {
        transform: "scale(0.5)"
    },
    loaded: {
        transform: "scale(1)"
    }
};

class UserCard extends React.Component<IUserProps, IUserState> {
    constructor(props: IUserProps) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    public componentDidMount() {
        setTimeout(() => {
            this.setState({loaded:true});
        }, 10);
    }

    public render() {
        const cardStyle = {...style.outer};
        cardStyle.transform = this.state.loaded ? style.loaded.transform : style.unloaded.transform;
        console.log("HI");

        return (
                <Card 
                    style={cardStyle}
                    onCardClick={() => { this.props.onUserClick(this.props.UUID) }}
                >
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
