import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import kakaoLoginImage from './path_to_kakao_login_image.jpg'; // 카카오 로그인 이미지 경로

const KakaoLogin = () => {
  const [cookies] = useCookies(['authorize-access-token']);
  const [tokenInfo, setTokenInfo] = useState('');

  useEffect(() => {
    Kakao.init('c089c8172def97eb00c07217cae17495'); // 사용하려는 앱의 JavaScript 키 입력
    displayToken();
  }, [cookies]);

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
    });
  };

  const displayToken = () => {
    const token = cookies['authorize-access-token'];
    if (token) {
      Kakao.Auth.setAccessToken(token);
      Kakao.Auth.getStatusInfo().then(res => {
        if (res.status === 'connected') {
          setTokenInfo(`login success, token: ${Kakao.Auth.getAccessToken()}`);
        }
      }).catch(() => {
        Kakao.Auth.setAccessToken(null);
      });
    }
  };

  return (
    <div>
      <a href="javascript:;" onClick={loginWithKakao}>
        <img src={kakaoLoginImage} width="222" alt="카카오 로그인 버튼" />
      </a>
      <p id="token-result">{tokenInfo}</p>
    </div>
  );
};

export default KakaoLogin;
