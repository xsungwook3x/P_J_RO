import React from 'react';
import RoutineCreate from './RoutineCreate';
import RoutineHead from './RoutineHead';
import RoutineList from './RoutineList';
import RoutineTemplate from './RoutineTemplate';

function Routine(){

    return(
        <RoutineTemplate>
            <RoutineHead/>
            <RoutineList/>
            <RoutineCreate/>
        </RoutineTemplate>
    )
}

export default Routine;