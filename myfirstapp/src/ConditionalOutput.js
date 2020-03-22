import React from 'react';

const Conditional = ({donkeys}) => {

    // Using Ternary
    // const list = donkeys.map(donkey =>{
    //     return donkey.age > 13 ?  (
    //             <div className="donkey" key={donkey.id}>
    //                 <div>Name: {donkey.name}</div>
    //                 <div>Age: {donkey.age}</div>
    //                 <div>Hair: {donkey.hair}</div>
    //             </div>
    //         ) : null;
        
    // })


    //Using if-else
    // const list = donkeys.map(donkey => {
    //     if(donkey.age > 13){
    //         return (
    //             <div className="donkey" key={donkey.id}>
    //                 <div>Name: {donkey.name}</div>
    //                 <div>Age: {donkey.age}</div>
    //                 <div>Hair: {donkey.hair}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })


    // when the list is declared above
    // return(
    //     <div className="list">
    //         {list}
    //     </div>
    // );


    //But this can also be done but above one is good practice and simpler
    return(
        <div className="list">
            {
                donkeys.map(donkey =>{
                    return donkey.age > 13 ?  (
                            <div className="donkey" key={donkey.id}>
                                <div>Name: {donkey.name}</div>
                                <div>Age: {donkey.age}</div>
                                <div>Hair: {donkey.hair}</div>
                            </div>
                        ) : null;
                    
                })
            }
        </div>
    );

}

export default Conditional;