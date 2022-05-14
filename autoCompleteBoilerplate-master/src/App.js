import React, {useEffect, useState} from 'react';
import {AutocompleteInput} from "../../../zadanie/autoCompleteBoilerplate/src/components/AutocompleteInput";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../recrutation/autoCompleteBoilerplate-master/src/redux/action";

const App = () => {

    const {users, loading} = useSelector((state) => ({...state.data}))
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers())
    },[])

    if(loading){
        return <h1>Loading data</h1>
    }

    return (
        <div className="App">
            <AutocompleteInput users={users}/>
        </div>
    );
}

export default App;





//====================== WERSJA BEZ REDUXA =====================
//
//const [names, setNames] = useState(null)
//
// useEffect(() => {
//     (async () =>{
//
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await data.json()
//
//     const names = users.map(user => (user.name))
//         // console.log(names)
//
//     setNames(names)
//     })();
// })
//
