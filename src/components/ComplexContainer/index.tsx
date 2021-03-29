import React from 'react';

import { 
    Container,
    HigherContainer,
    LowerContainer
} from './styles';

interface IComplexProps{
    description: string,
    data:{
        [key:string]:string
    }
};

const ComplexContainer:React.FC<IComplexProps> = ({description,data}) => {
    return(
        <Container>
            <HigherContainer>
                <h2>{description}</h2>
            </HigherContainer>
            <LowerContainer>
                {
                    !!data &&
                    Object.keys(data).map((item,index) => {
                        return (
                            <p key={index}>{item[index]}</p>
                        )
                    })
                }
            </LowerContainer>
        </Container>
    )
};

export default ComplexContainer;