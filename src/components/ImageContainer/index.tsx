import React from 'react';

import { 
    Container,
    Image
} from './styles';

interface IImageProps{
    source: string,
    description?: string
};

const ImageContainer:React.FC<IImageProps> = ({source,description}) => {
    return(
        <Container>
            <Image src={source} alt={description}/>
        </Container>
    )
};

export default ImageContainer;