import styled from 'styled-components';

export const Card = styled.div`
    &:before {
            content: '';
            background: ${props => props.bg};
            height: 5px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
    }
`;