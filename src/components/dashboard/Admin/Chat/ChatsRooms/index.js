import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { Room } from './Room';
import { socketConnection } from '../../../../../utils/apisocket';

export const ChatsRooms = ({ selectRoom }) => {

    const [rooms, setRooms] = useState([]);

    const getRooms = async () => {
        try {
            const { data } = await apiAxios.get('/admin/chat/room');
            setRooms(data.rooms);


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getRooms();

        socketConnection.on("salas", salas => {
            setRooms(salas);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div className="inbox_chat">
            {
                (rooms.length !== 0) && rooms.map(room => {
                    return <Room
                        key={room._id}
                        room={room}
                        selectRoom={selectRoom}
                    />

                })}
        </div>
    )
}
