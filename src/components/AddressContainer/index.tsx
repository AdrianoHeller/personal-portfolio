import React from 'react';

import { Container,UpperData,LowerData } from './styles';

interface IDynamicDataProps{
    data:{
       address: string,
       complement: string,
       cityState: string,
       zipCode: string,
       github: string,
       linkedin: string,
       email: string,
       phone: string
    }
};

const AddressContainer: React.FC<IDynamicDataProps> = ({ data }) => {
    return(
        <Container>
            <UpperData>
                {
                    !!data &&
                    <>
                        <p>{data.address}</p>
                        <p>{data.complement}</p>
                        <p>{data.cityState}</p>
                        <p>{data.zipCode}</p>
                    </>
                }
            </UpperData>
            <LowerData>
                {
                    !!data &&
                    <>
                        <p>{data.github}</p>
                        <p>{data.linkedin}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                    </>
                }
            </LowerData>
        </Container>
    )
};

export default AddressContainer;