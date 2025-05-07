import React from "react";

const UserInfo = () => {

    <div>
        <h2 className="page-header">
            User Info
        </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <h3>User Information</h3>
                        <p>Here you can view and edit your user information.</p>
                        {/* Add your user information form or details here */}
                    </div>
                </div>
            </div>
        </div>
    </div>


}
export default UserInfo;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 