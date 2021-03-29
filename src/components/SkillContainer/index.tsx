import React from 'react';

import { 
    Container,
    ContainerHeader,
    ContainerBody
 } from './styles';

interface IChildProps{
    children?: React.ReactNode,
    description: string,
    data: {
        type?: string,
        skill: string
    }[]
};

const SkillContainer:React.FC<IChildProps> = ({ children,data,description }) => {
    return(
        <Container>
            <ContainerHeader>
                { children }
                <h1>{description}</h1>
            </ContainerHeader>
            <ContainerBody>    
                {
                    !!data && data.length > 0 ?
                        data.map((item,index) => {
                            if(item['type']){
                                return(
                                    <>
                                        <h2 key={index}>{item['type']}</h2>
                                        <p key={index}>{item['skill']}</p>
                                    </>
                                )
                            }else{
                                <p key={index}>{item['skill']}</p>
                            };
                        }) :
                        <p>Loading Data...</p>
                }
            </ContainerBody>
        </Container>
    )
};

export default SkillContainer;