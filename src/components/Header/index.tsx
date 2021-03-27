import React from 'react';

import { 
    Container,
    Divider,
    LowerText,
    UpperText
} from './styles';

interface IBadgeProps{
    name: string,
    position: string
};

const Header:React.FC<IBadgeProps> = ({name,position}) => {
    return(
        <Container>
            <UpperText>{name}</UpperText>
            <Divider/>
            <LowerText>{position}</LowerText>
        </Container>
    )
};

export default Header;