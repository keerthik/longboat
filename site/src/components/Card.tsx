import * as React from 'react';

const style = {
    boxShadow: "0px 5px 35px 4px #afafaf",
    borderRadius: "10px",
    border: "1px solid",
    borderBottomWidth: "3px",
    borderColor: "#9b9da3",
    display: "inline-flex",
    margin: "20px",
    position: "relative" as "relative",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden"
};

interface ICardProps {
    onCardClick: () => void,
    style?: any
    children?: any
}

const Card = (props: ICardProps) => (
    <div style={{...style, ...props.style}} onClick={props.onCardClick}>
        {props.children}
    </div>
)

export default Card;