import React, {useEffect, useState} from 'react';
import './AutocopleteInput.css'

export const AutocompleteInput = ({users}) => {



    const [finalName, setFinalName] = useState('')



    const changeFinalName = (e) => {
        setFinalName(e.target.value);
    }

    const sendForm = (e) => {
        e.preventDefault();
        console.log('wysłano imię', finalName );
        setFinalName('');
    }


    return (
        <form action='#' onSubmit={sendForm}>
            <input className='name-input' list='names' name='names' type="text" placeholder='Name' value={finalName} onChange={changeFinalName}/>
            <datalist id='names'>
                {users.map(user => <option key={user.id} value={user.name}></option>)}
            </datalist>
            <button type="submit">Submit</button>
        </form>
    );
};


