import * as React from "react";

interface ICardSectionProps {
    style?: any;
    children?: any;
}

const style = {
    flex: 1,
}

const CardSection = (props: ICardSectionProps) => (
    <div style={{...style, ...props.style}}>
        {props.children}
    </div>
);

export default CardSection;
