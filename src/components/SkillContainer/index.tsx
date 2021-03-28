import React from 'react';

import { 
    Container,
    ContainerHeader,
    ContainerBody
 } from './styles';

interface IChildProps{
    children?: React.ReactNode,
    data: {
        type?: string,
        skill: string
    }[]
};

const SkillContainer:React.FC<IChildProps> = ({ children,data }) => {
    return(
        <Container>
            <ContainerHeader>
                { children }
            </ContainerHeader>
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
        </Container>
    )
};

export default SkillContainer;