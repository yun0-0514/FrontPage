import React, {useRef} from 'react'

import './dropdown.css'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Dropdown = props => {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
    
    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_el} className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown_content_el} className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown
드롭다운 토글:

dropdown__toggle 버튼을 클릭하면 드롭다운 메뉴(dropdown__content)가 열리거나 닫힙니다.
useRef를 사용하여 버튼과 드롭다운 콘텐츠를 참조하고, classList.toggle('active')로 활성화 상태를 관리합니다.
외부 클릭 감지:

clickOutsideRef 함수는 드롭다운 외부를 클릭했을 때 메뉴를 닫는 동작을 처리합니다.
mousedown 이벤트를 감지하여, 드롭다운 외부를 클릭하면 active 클래스를 제거합니다.
동적 콘텐츠 렌더링:

props.contentData와 props.renderItems를 사용하여 드롭다운 메뉴 항목을 동적으로 렌더링합니다.
props.renderFooter를 통해 드롭다운 하단에 추가적인 콘텐츠(예: 버튼, 링크 등)를 렌더링할 수 있습니다.
아이콘 및 배지 표시:

props.icon: 드롭다운 버튼에 아이콘을 표시합니다.
props.badge: 드롭다운 버튼에 배지를 표시합니다.
커스텀 토글:

props.customToggle을 통해 버튼의 내용을 커스터마이징할 수 있습니다.