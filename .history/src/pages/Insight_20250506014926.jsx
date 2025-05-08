import React from 'react';

const Insight = () => {
    <div>
        <div id="map" style="width:100%;height:350px;"></div>

        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 사용하세요"></script>
        <script>
            var mapContainer = document.getElementById('map'), 
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
    };

            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            var map = new kakao.maps.Map(mapContainer, mapOption);
        </script>
    </div>


}
export default Insight;