import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
    display_name: 'Doğukan Taha ',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav

// 검색창:

// 상단 왼쪽에 검색 입력 필드와 검색 아이콘(bx bx-search)을 렌더링합니다.
// 사용자가 검색어를 입력할 수 있는 UI를 제공합니다.
// 사용자 메뉴:

// 사용자 정보를 표시하며, 드롭다운 메뉴를 통해 사용자 관련 옵션(예: 프로필, 로그아웃 등)을 제공합니다.
// Dropdown 컴포넌트를 사용하여 동적으로 메뉴 항목을 렌더링합니다.
// curr_user 객체를 기반으로 사용자 이름과 이미지를 표시합니다.
// 알림 드롭다운:

// 알림 아이콘(bx bx-bell)과 배지(badge='12')를 표시합니다.
// notifications 데이터를 기반으로 알림 항목을 동적으로 렌더링합니다.
// 드롭다운 하단에 "View All" 링크를 추가하여 모든 알림을 볼 수 있는 옵션을 제공합니다.
// 테마 변경 메뉴:

// ThemeMenu 컴포넌트를 렌더링하여 테마(예: 다크 모드, 라이트 모드)를 변경할 수 있는 UI를 제공합니다.
