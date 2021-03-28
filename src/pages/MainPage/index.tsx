import React from 'react';
import Main from '../../components/Main';
import Header from '../../components/Header';

const MainPage:React.FC = () => {
    return(
        <Main>
            <Header name={'Adriano Heller Mylla'} position={'Fullstack Developer'}/>
        </Main>
    )
};

export default MainPage;