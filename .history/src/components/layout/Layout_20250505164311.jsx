import React, { useEffect } from 'react';

import './layout.css';

import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topnav/TopNav';
import AppRoutes from '../Routes';

import { useSelector, useDispatch } from 'react-redux';

import ThemeAction from '../../redux/actions/ThemeAction';

const Layout = () => {
    const themeReducer = useSelector((state) => state.ThemeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode') || 'theme-mode-light';
        const colorClass = localStorage.getItem('colorMode') || 'theme-mode-light';

        dispatch(ThemeAction.setMode(themeClass));
        dispatch(ThemeAction.setColor(colorClass));
    }, [dispatch]);

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
};

export default Layout;

애플리케이션의 전체 레이아웃을 정의하는 컴포넌트입니다. 이 컴포넌트는 사이드바, 상단 네비게이션 바, 그리고 메인 콘텐츠 영역을 포함하며, 애플리케이션의 전반적인 구조를 관리합니다.

주요 역할:
테마 설정:

useEffect를 사용하여 localStorage에서 저장된 테마(themeMode)와 색상(colorMode)을 가져옵니다.
Redux의 dispatch를 통해 테마와 색상을 전역 상태로 설정합니다.
themeReducer를 통해 현재 테마와 색상을 가져와 layout 클래스에 적용합니다.
레이아웃 구성:

Sidebar: 사이드바 컴포넌트를 렌더링합니다.
TopNav: 상단 네비게이션 바를 렌더링합니다.
AppRoutes: 라우팅된 페이지 콘텐츠를 렌더링합니다.
CSS 클래스 동적 적용:

themeReducer.mode와 themeReducer.color를 기반으로 layout 클래스에 동적으로 테마와 색상을 적용합니다.