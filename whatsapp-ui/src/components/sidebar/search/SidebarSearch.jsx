import React from 'react'
import { IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import './SidebarSearch.css'

function SidebarSearch() {
    return (
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <input
                    className="formControl"
                    id="sidebar-search-input"
                    type="text"
                    aria-describedby="sidebar search text-input"
                    placeholder="Search or start new chat"
                />
            </div>
        </div>
    )
}

export default SidebarSearch
