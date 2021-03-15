// import React, { useState, useEffect } from 'react'
import React from 'react'
import SidebarChat from './sidebar-chat/SidebarChat'
import SidebarSearch from './search/SidebarSearch'
import SidebarHeader from './header/SidebarHeader'
import firebaseDb from '../../config/firebase'
import './Sidebar.css'

function Sidebar() {
    // const [rooms, setRooms] = useState([]);
    const test = firebaseDb.collection('rooms');
    console.log(test);

    // useEffect(() => {
    //     firebaseDb
    //         .collection('rooms')
    //         .onSnapshot(snapshot =>
    //             setRooms(snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 data: doc.data()
    //             })
    //         ))
    //     )
    // }, []);

    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarSearch />
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {/* {
                    rooms.map(room => {
                        <SidebarChat
                            key={room.id}
                            id={room.id}
                            name={room.data.name}
                        />
                    })
                } */}
            </div>
        </div>
    )
}

export default Sidebar
