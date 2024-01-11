import { data } from "autoprefixer";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedData = useLoaderData();
    const [users, setUsers] = useState(loadedData);


    const handleDelete = id =>{
        fetch(`http://localhost:5050/user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                //remove form ui or page
                const reamainingUsers = users.filter(user => user._id !== id);
                setUsers(reamainingUsers);
            }
        })
    }

return (
    <div>
        <h2>Users: {loadedData.length}</h2>
        <div className="overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead>
                <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Logged In</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            
                {
                    users.map(user => <tr key={user._id}>
                    <th>1</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td>
                        <button onClick={() => handleDelete(user._id)} className="btn btn-primary">Delete</button>
                    </td>
                    </tr>)
                }
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default Users;
