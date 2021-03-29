import styled from 'styled-components';

interface IDataProps{
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

export const Container = styled.div<IDataProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UpperData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LowerData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;