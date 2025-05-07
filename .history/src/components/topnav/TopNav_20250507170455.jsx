import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/profile.png'

import user_menu from '../../assets/JsonData/user_menus.json'

// 현재 사용자 정보
const curr_user = {
    display_name: '박윤영',
    image: user_image
}

// 알림 항목을 렌더링하는 함수
const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i> {/* 아이콘 */}
        <span>{item.content}</span> {/* 알림 내용 */}
    </div>
)

// 사용자 토글 UI를 렌더링하는 함수
const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" /> {/* 사용자 이미지 */}
        </div>
        <div className="topnav__right-user__name">
            {user.display_name} {/* 사용자 이름 */}
        </div>
    </div>
)

// 사용자 메뉴 항목을 렌더링하는 함수
const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i> {/* 아이콘 */}
            <span>{item.content}</span> {/* 메뉴 내용 */}
        </div>
    </Link>
)

// Topnav 컴포넌트
const Topnav = () => {
    return (
        <div className='topnav'>
            {/* 검색창 */}
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' /> {/* 검색 입력 필드 */}
                <i className='bx bx-search'></i> {/* 검색 아이콘 */}
            </div>
            <div className="topnav__right">
                {/* 사용자 드롭다운 */}
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)} // 사용자 토글 UI
                        contentData={user_menu} // 사용자 메뉴 데이터
                        renderItems={(item, index) => renderUserMenu(item, index)} // 사용자 메뉴 항목 렌더링
                    />
                </div>
                {/* 알림 드롭다운 */}
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell' // 알림 아이콘
                        badge='12' // 알림 배지
                        contentData={notifications} // 알림 데이터
                        renderItems={(item, index) => renderNotificationItem(item, index)} // 알림 항목 렌더링
                        renderFooter={() => <Link to='/'>View All</Link>} // 드롭다운 하단 링크
                    />
                </div>
                {/* 테마 변경 메뉴 */}
                <div className="topnav__right-item">
                    <ThemeMenu /> {/* 테마 변경 UI */}
                </div>
            </div>
        </div>
    )
}

export default Topnav
