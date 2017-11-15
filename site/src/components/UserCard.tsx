import * as React from 'react';
import Card from "./Card";
import CardSection from "./CardSection";
import UserCardBottom from "./UserCardBottom";
import IUser from "../interfaces/IUser";

interface IUserProps extends IUser {
    onUserClick:(UUID: string) => void,
}

const UserCard = (props: IUserProps) => {
    const style = {
        height: "300px",
        width: "300px",
        backgroundColor: "#e1e5ed",
        fontFamily: "comfortaa",
        fontSize: "30px"
    };

    const topStyle = {
        flex: 3,
        backgroundImage: (props.imageURI ? `url(${props.imageURI})` : null),
        backgroundSize: "100%",
    }

    return (
        <Card style={style} onCardClick={() => {props.onUserClick(props.UUID)}}>
            <CardSection style={topStyle}>
            </CardSection> 
            <UserCardBottom name={props.name} atHome={props.atHome}/>
        </Card>
    )
};

export default UserCard;
