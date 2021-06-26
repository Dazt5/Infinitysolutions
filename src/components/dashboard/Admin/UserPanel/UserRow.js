import React from 'react';

export const UserRow = ({ user }) => {


    return (
        <tr>
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
                <p>{user.create_at}</p>
            </td>

            <td>
                <p>{user.last_access}</p>
            </td>

        </tr>
    )

}