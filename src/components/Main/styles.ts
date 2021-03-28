import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 100px 200px 200px auto;
    grid-template-areas:
    'lbox rbox'
    'lbox rbox'
    'subh subh'
    'subh subh';
`;

