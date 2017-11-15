import * as React from "react";
import CardSection from "./CardSection";

interface IUserCardBottomProps {
    atHome: boolean;
    name: string;
}
const style = {
    card: {
        backgroundColor: "white",
        display: 'flex',
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        // display: "flex",
        // flex:1,
        color: "#d3d3d3",
        whiteSpace: "pre-wrap"
    },
    homeStatus: {
        // display: "flex",
        // flex: 1
    },
    homeColor: "#77ff6b",
    awayColor: "#d3d3d3"
}

const UserCardBottom = (props: any) => (
    <CardSection style = {style.card}>
        <span style={style.name}>{props.name} is </span>
        <span 
            style={
            {...style.homeStatus,
                color: (props.atHome ? style.homeColor : style.awayColor)
            }}>
            {props.atHome ? "home." : "away."}
        </span>
    </CardSection >
);

export default UserCardBottom;