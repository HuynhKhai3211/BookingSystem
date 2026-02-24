import axios from "axios";
import { useEffect, useState } from "react";      
const DeleteUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .them(res =>{
            setUsers(res.data);
        })
    }, [])
    return (  
        <>
            <ul>
                {users.map(u =>
                    <li key={u.id}> </li>
                 )}
            </ul>
        </>
    );
}
 
export default DeleteUser;