import React from 'react';
import styled from 'styled-components';


const RoutineTemplateBlock =styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column; 
`

function RoutineTemplate({children}){

    return(
        <RoutineTemplateBlock>{children}</RoutineTemplateBlock>
    )
}

export default RoutineTemplate;