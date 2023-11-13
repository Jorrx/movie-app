import React, {useState} from 'react';
import './MyButton.scss'

interface IProps {
    children: React.ReactNode
    onClick?: () => void
}

const MyButton = ({children , ...props}: IProps) => {
    const [x, setX] = useState<number>(0);

    const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        setX(mouseX);
    };

    const buttonStyle: any = {
        '--x': `${x}px`,
    };

    return (
        <button  onMouseMove={onMouseMove} {...props} style={buttonStyle}>{children}</button>
    );
};

export default MyButton;