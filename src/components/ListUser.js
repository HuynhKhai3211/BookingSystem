import axios from "axios";
import { useEffect, useState } from "react";
const  ListUser= () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res =>{
            setUsers(res.data)
        })
    }, [])
    return (  
        <>
            <ul>
                {users.map(u =>(
                    <li key={u.id}>{u.name} </li>
                 ))}
            </ul>

        </>
    );
}
 
export default ListUser;