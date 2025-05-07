import React, { useEffect } from 'react';

const Insight = () => {
    useEffect(() => {
        // Kakao 지도 API 스크립트를 동적으로 로드
        const script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f8bf1fa087f8708a45c0c961cfbf693d&autoload=false";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Kakao 지도 API 초기화
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map'); // 지도를 표시할 div
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };
                new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성
            });
        };

        return () => {
            // 컴포넌트 언마운트 시 스크립트 제거
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>

            <div id="map" style={{ width: '100%', height: '350px' }}></div>

        </div>
    );
};

export default Insight;