import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.mainBackground};
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;