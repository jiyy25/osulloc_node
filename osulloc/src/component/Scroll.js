import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Scrolltop() {
    const location = useLocation();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' //여기 옵션을 auto에서 instant 바꾸면 한번에
        });
    }, [location.pathname]); // 라우트 변경을 감지하기 위해 사용
}

export default Scrolltop