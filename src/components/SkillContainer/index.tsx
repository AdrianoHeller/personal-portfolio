import React from 'react';

import { 
    Container,
    ContainerHeader,
    ContainerBody
 } from './styles';

interface IChildProps{
    children?: React.ReactNode
};

const SkillContainer:React.FC<IChildProps> = ({children}) => {
    return(
        <Container>
            <ContainerHeader>
                { children }
            </ContainerHeader>
        </Container>
    )
};

export default SkillContainer;