import React from 'react';
import "./style.css";
import dayjs from 'dayjs';
export const AdminUserRow = ({ user,desactiveUser }) => {


    return (

        <tr >
    
        <td>
                <p>{user.name}</p>
            </td>

            <td>
                <p>{user.lastname}</p>
            </td>

            <td>
                <p>{user.email}</p>
            </td>

            <td>
                <p>{user.phone_number}</p>
            </td>

            <td>
                <p>{dayjs(user.create_at).format('DD/MM/YYYY h:mm A')}</p>
            </td>

            <td>
                <p>{dayjs(user.last_access).format('DD/MM/YYYY h:mm A')}</p>
            </td>
        <td>
        {user.activated === 1
                    ?
                    <span className={user.email === "admin@infinitysolutions.com" ? "master" : "admin"}>
                        <i className="las la-toggle-on" onClick={() => desactiveUser(user._id)}></i>
                    </span>
                    :
                    <span className="">
                        <i className="las la-toggle-off" onClick={() => desactiveUser(user._id)}></i>
                    </span>
                }
        </td>
    </tr>

       
    )

}