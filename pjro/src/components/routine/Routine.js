import React from 'react';
import RoutineHead from './RoutineHead';
import RoutineList from './RoutineList';
import RoutineTemplate from './RoutineTemplate';

function Routine(){

    return(
        <RoutineTemplate>
            <RoutineHead/>
            <RoutineList/>
        </RoutineTemplate>
    )
}

export default Routine;