import React from 'react';
//import './donkeys.css'
//Same as props.js with extra delete donkey button added and calling remove donkey method  
const DeleteDonkey = ({donkeys, removeDonkey}) => {
    const list = donkeys.map(i => {
        return(
            <div className="donkey" key={i.id}>
                <div>Name : {i.name}</div>
                <div>Age : {i.age}</div>
                <div>Hair : {i.hair}</div>
                <button onClick={() => {removeDonkey(i.id)}}>Delete Donkey</button>
            </div>
        )
    })

    return(
        <div className="list">
            {list}
        </div>
    )
}

export default DeleteDonkey;