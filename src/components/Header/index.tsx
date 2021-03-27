import React from 'react';

import { 
    Container,
    Divider,
    LowerText,
    UpperText
} from './styles';

const Header:React.FC = () => {
    return(
        <Container>
            <UpperText></UpperText>
            <Divider/>
            <LowerText></LowerText>
        </Container>
    )
};

export default Header;