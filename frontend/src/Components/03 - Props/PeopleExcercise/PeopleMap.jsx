'use strict';
import People from "./People";

 
const peopleMap = (props) => {

    const {PN,PU,Pnumber} = props; 

    return(
        <> 
            <p>Person Name : {PN}</p>
            <p>User Name : {PU}</p>
            <p>Phone Number: {Pnumber}</p>
            
            
            {
                arrayProp.map((item,i) => (
                    <ArrayItem key={i} item={item}/>
                ))
            }
        </>
    );
}

export default peopleMap; 