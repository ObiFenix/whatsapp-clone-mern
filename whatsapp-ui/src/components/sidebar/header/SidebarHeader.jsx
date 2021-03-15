import React from 'react'
import './SidebarHeader.css'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SidebarHeader() {
    return (
        <div className="sidebar__header">
            <div className="sidebar__headerLeft">
                <IconButton>
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFvAjFHMOM27w/profile-displayphoto-shrink_400_400/0/1521738883610?e=1620864000&v=beta&t=wm6E0n3_WoaiMXGHy4Fo-3OucSFXU-bC9S7KHSLR9A8" />
                </IconButton>
            </div>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SidebarHeader
