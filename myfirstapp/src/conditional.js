import React from 'react';

const Conditional = ({donkeys}) => {

    // Using Ternary
    // const list = donkeys.map(i =>{
    //     return i.age > 13 ?  (
    //             <div className="donkey" key={i.id}>
    //                 <div>Name: {i.name}</div>
    //                 <div>Age: {i.age}</div>
    //                 <div>Hair: {i.hair}</div>
    //             </div>
    //         ) : null;
        
    // })


    //Using if-else
    // const list = donkeys.map(i => {
    //     if(i.age > 13){
    //         return (
    //             <div className="donkey" key={i.id}>
    //                 <div>Name: {i.name}</div>
    //                 <div>Age: {i.age}</div>
    //                 <div>Hair: {i.hair}</div>
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
                donkeys.map(i =>{
                    return i.age > 13 ?  (
                            <div className="donkey" key={i.id}>
                                <div>Name: {i.name}</div>
                                <div>Age: {i.age}</div>
                                <div>Hair: {i.hair}</div>
                            </div>
                        ) : null;
                    
                })
            }
        </div>
    );

}

export default Conditional;