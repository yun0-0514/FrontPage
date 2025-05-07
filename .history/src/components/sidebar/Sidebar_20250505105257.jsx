import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

import SidebarItem from './SidebarItem'

const Sidebar = () => {
    const location = useLocation();

    // location이 undefined일 경우 기본값 설정
    const currentPath = location?.pathname || '/';

    console.log('Current Path:', currentPath);

    const activeItem = sidebar_items.findIndex(item => item.route === currentPath)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />RISK RADAR
            </div>
            <p>Current Path: {currentPath}</p>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar