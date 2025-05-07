import React, { useEffect, useState } from 'react';

const Insight = () => {
    const [mapError, setMapError] = useState(false); // 지도 로드 오류 상태

    useEffect(() => {
        // Kakao 지도 API 스크립트를 동적으로 로드
        const script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f8bf1fa087f8708a45c0c961cfbf693d";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Kakao 지도 API 초기화
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
                    if (mapContainer) {
                        const mapOption = {
                            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                            level: 3 // 지도의 확대 레벨
                        };
                        new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성
                    } else {
                        setMapError(true); // mapContainer가 없을 경우 오류 상태 설정
                    }
                });
            } else {
                setMapError(true); // Kakao API가 로드되지 않았을 경우 오류 상태 설정
            }
        };

        script.onerror = () => {
            setMapError(true); // 스크립트 로드 실패 시 오류 상태 설정
        };

        return () => {
            // 컴포넌트 언마운트 시 스크립트 제거
            document.head.removeChild(script);
            console.log('Kakao 지도 API 스크립트 제거됨');
        };
    }, []);

    return (
        <div>
            {mapError ? (
                <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
                    지도를 로드할 수 없습니다. 잠시 후 다시 시도해주세요.
                </div>
            ) : (
                <div id="map" style={{ width: '100%', height: '350px' }}></div>
            )}
        </div>
    );
};

export default Insight;