import React from 'react';
import { MainContainer } from './styles';

interface IChildProps{
    children: React.ReactNode
};

const Main:React.FC = ({children}) => {
    return(
        <MainContainer>
            { children }
        </MainContainer>
    )
};
export default Main;