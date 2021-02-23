'use strict';

import peopleList from "./static-data/people.json";


const People = () => {



    const name = peopleList.name

    const userName = peopleList.username

    const number = peopleList.phone 



    return(
        <People 
            PN={name} 
            PU={userName} 
            Pnumber={number} 
        
        /> 
    );
}

export default People; 