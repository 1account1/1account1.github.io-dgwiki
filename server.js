const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();
const axios = require('axios');
const PORT = 3000;

// 정적 파일을 제공하는 미들웨어
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// 루트 경로로 접속 시 index.html 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Index.html'));
  res.send('Express + SQlite')
});

app.get('/wiki', (req, res) => {
  const rows = db.prepare(`SELECT * FROM wiki`).all();
  res.json(rows);
});
app.get('/babl', (req, res) => {
  const rows = db.prepare(`SELECT * FROM babl`).all();
  res.json(rows);
});
app.get('/babc', (req, res) => {
  const rows = db.prepare(`SELECT * FROM babc`).all();
  res.json(rows);
});
app.get('/econo', (req, res) => {
  const rows = db.prepare(`SELECT * FROM econo`).all();
  res.json(rows);
});


app.get('/econo/:title', (req, res) => {
  const title = req.params.title;
  const rows = db.prepare(`SELECT * FROM econo WHERE title = ?`).get(title);
  res.json(rows);
});

app.post('/econo', (req, res) => {
  const { title, indexx, author } = req.body;

  const stmt = db.prepare('INSERT INTO econo (title, indexx, author)  VALUES (?,?,?)');
  stmt.run(title, indexx, author);
  
  res.json({ message: '🥕data added'});
})

app.post('/wiki', (req, res) => {
  const { namew, indxxx, editlog } = req.body;

  const stmt = db.prepare('INSERT INTO wiki (namew, indxxx, editlog)  VALUES (?,?,?)');
  stmt.run(namew, indxxx, editlog);
  
  res.json({ message: '🥕data added'});
})
app.post('/babc', (req, res) => {
  const { dtl, cmt, user } = req.body;

  const stmt = db.prepare('INSERT INTO babc (dtl, cmt, user)  VALUES (?,?,?)');
  stmt.run(dtl, cmt, user);
  
  res.json({ message: '🥕data added'});
})
app.get('/babc/:dtl', (req, res) => {
  const dtl = req.params.dtl;
  const row = db.prepare(`SELECT * FROM babc WHERE dtl = ?`).all(dtl);
  res.json(row);
});

app.put('/putm/:cm', (req, res) => {
  const cm = req.params.cm;
  const stmt = db.prepare(cm);
  stmt.run();
  
  res.json({ message: '좋아요 리셋'});
})
app.post('/postm/:cm', (req, res) => {
  const cm = req.params.cm;
  const stmt = db.prepare(cm);
  stmt.run();
  
  res.json({ message: '좋아요 리셋'});
})
app.delete('/delm/:cm', (req, res) => {
  const cm = req.params.cm;
  const stmt = db.prepare(cm);
  stmt.run();
  
  res.json({ message: '좋아요 리셋'});
})


app.put('/babl/reset', (req, res) => {
  const cm = req.params.cm;
  stmt.run();
  
  res.json({ message: '좋아요 리셋'});
})


app.post('/babl', (req, res) => {
  const { likeb, likel, liked } = req.body;

  const stmt = db.prepare('INSERT INTO babl (likeb, likel, liked)  VALUES (?,?,?)');
  stmt.run(likeb, likel, liked);
  
  res.json({ message: '🥕data added'});
})
app.put('/babl/:dayl', (req, res) => {
  const dayl = req.params.dayl;
  const { likeb, likel, liked } = req.body;
  const stmt = db.prepare(`UPDATE babl SET likeb = ?, likel = ?, liked = ? WHERE dayl = ?`)
  const result = stmt.run(likeb, likel, liked, dayl);

  res.json({ updated: result.changes });
});
app.get('/babl/:dayl', (req, res) => {
  const dayl = req.params.dayl;
  const row = db.prepare(`SELECT * FROM babl WHERE dayl = ?`).get(dayl);
  res.json(row);
});

app.post('/saveall', (req, res) => {
  const newData = req.body;

  const updateStmt = db.prepare(`
    UPDATE babc SET dtl = ?, cmt = ?, user = ? WHERE id = ?
  `);

  const insertStmt = db.prepare(`
    INSERT INTO babc (id, dtl, cmt, user) VALUES (?, ?, ?, ?)
  `);

  const existingIds = db.prepare(`SELECT id FROM babc`).all().map(r => r.dayl);

  for (const row of newData) {
    if (existingIds.includes(row.dayl)) {
      updateStmt.run(row.dtl, row.cmt, row.user, row.id);
    } else {
      insertStmt.run(row.id, row.dtl, row.cmt, row.user);
    }
  }

  res.json({ status: 'ok', updated: newData.length });
});


app.get('/wiki/:namew', (req, res) => {
  const namew = req.params.namew;
  const row = db.prepare('SELECT * FROM wiki WHERE namew = ? ORDER BY id DESC LIMIT 1').get(namew);
  //const row = db.prepare(`SELECT * FROM wiki WHERE id = ?`).get(id);
  res.json(row);
});
app.get('/allwiki', (req, res) => {
  const rows = db.prepare(`SELECT * FROM wiki`).all();
  res.json(rows);
});
app.get('/allbabc', (req, res) => {
  const rows = db.prepare(`SELECT * FROM babc`).all();
  res.json(rows);
});
app.get('/allbabl', (req, res) => {
  const rows = db.prepare(`SELECT * FROM babl`).all();
  res.json(rows);
});



//구글 로그인

const GOOGLE_CLIENT_ID = "671092852945-06cb0vcctj58pjpf6gmcapk5voqc8h3e.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_LOGIN_REDIRECT_URI = 'http://localhost:3000/login/redirect';
const GOOGLE_SIGNUP_REDIRECT_URI = 'http://localhost:3000/signup/redirect';

// 루트 페이지
// 로그인 버튼을 누르면 GET /login으로 이동
/*
app.get('/', (req, res) => {
    res.send(`
        <h1>Log in</h1>
        <a href="/login">Log in</a>
    `);
});*/

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
    url += `&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}`
    // 필수 옵션.
    url += '&response_type=code'
  	// 구글에 등록된 유저 정보 email, profile을 가져오겠다 명시
    url += '&scope=email profile'    
  	// 완성된 url로 이동
  	// 이 url이 위에서 본 구글 계정을 선택하는 화면임.
	res.redirect(url);
});
app.get('/login/redirect', (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`)
    res.send('ok');
    res.json(res.data)
});

app.get('/signup', (req, res) => {
  let url = 'https://accounts.google.com/o/oauth2/v2/auth';
  url += `?client_id=${GOOGLE_CLIENT_ID}`
  url += `&redirect_uri=${GOOGLE_SIGNUP_REDIRECT_URI}`
  url += '&response_type=code'
  url += '&scope=email profile'    
  res.redirect(url);
});

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

app.get('/signup/redirect', async (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);

  	// access_token, refresh_token 등의 구글 토큰 정보 가져오기
    const resp = await axios.post(GOOGLE_TOKEN_URL, {
        // x-www-form-urlencoded(body)
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
        grant_type: 'authorization_code',
    });
    res.json(resp.data);
    res.cookie('google_token', JSON.stringify(resp.data), {
      httpOnly: false,
      maxAge: 60000,
  });
    res.redirect('/Index.html')
});


// 서버 실행
app.listen(PORT, () => {
  console.log(`🥕The Server is running on http://localhost:${PORT}`);
});
