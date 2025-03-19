const express = require('express');
const axios = require('axios');

const app = express();

const GOOGLE_CLIENT_ID = '671092852945-0c32g5ilhhg1467ibo1069gdevaavl0g.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const GOOGLE_REDIRECT_URI = 'http://localhost:3000/login/redirect';

// 루트 페이지
// 로그인 버튼을 누르면 GET /login으로 이동
app.get('/', (req, res) => {
    res.send(`
        <h1>Log in</h1>
        <a href="/login">Log in</a>
    `);
});

// 로그인 버튼을 누르면 도착하는 목적지 라우터
// 모든 로직을 처리한 뒤 구글 인증 서버인 https://accounts.google.com/o/oauth2/v2/auth
// 으로 redirect 되는데, 이 url에 첨부할 몇가지 QueryString들이 필요
app.get('/login', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
	// client_id는 위 스크린샷을 보면 발급 받았음을 알 수 있음
	// 단, 스크린샷에 있는 ID가 아닌 당신이 직접 발급 받은 ID를 사용해야 함.
    url += `?client_id=${GOOGLE_CLIENT_ID}`
	// 아까 등록한 redirect_uri
    // 로그인 창에서 계정을 선택하면 구글 서버가 이 redirect_uri로 redirect 시켜줌
    url += `&redirect_uri=${GOOGLE_REDIRECT_URI}`
    // 필수 옵션.
    url += '&response_type=code'
  	// 구글에 등록된 유저 정보 email, profile을 가져오겠다 명시
    url += '&scope=email profile'    
  	// 완성된 url로 이동
  	// 이 url이 위에서 본 구글 계정을 선택하는 화면임.
	res.redirect(url);
});

// 구글 계정 선택 화면에서 계정 선택 후 redirect 된 주소
// 아까 등록한 GOOGLE_REDIRECT_URI와 일치해야 함
// 우리가 http://localhost:3000/login/redirect를
// 구글에 redirect_uri로 등록했고,
// 위 url을 만들 때도 redirect_uri로 등록했기 때문
app.get('/login/redirect', (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);
    res.send('ok');
});

app.listen(3000, () => {
    console.log('server is running at 3000');
});