import * as React from 'react';
import Card from "./Card";
import CardSection from "./CardSection";
import IUser from "../interfaces/IUser";

interface IUserProps extends IUser {
    onUserClick:(UUID: string) => void,
}

const User = (props: IUserProps) => {
    const style = {
        height: "300px",
        width: "300px",
        backgroundColor: "#e1e5ed",
    };

    const topStyle = {
        flex: 2,
        backgroundImage: (props.imageURI ? `url(${props.imageURI})` : null),
        backgroundSize: "100%",
    }

    return (
        <Card style={style} onCardClick={() => {props.onUserClick(props.UUID)}}>
            <CardSection style={topStyle}>
            </CardSection> 

            <CardSection style={{backgroundColor: "white", flex: 1}}> 
                <div style={{display: "inline"}}>{props.name}</div>
                <div style={{ display: "inline" }}>{props.atHome ? "Home" : "Away"}</div>
            </CardSection>
        </Card>
    )
};

export default User;
