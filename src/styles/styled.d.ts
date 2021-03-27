import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,
        colors:{
            mainBackground: string,
            lightCommonFont: string,
            mediumLightCommonFont: string,
            darkCommonFont: string, 
        }
    }
};