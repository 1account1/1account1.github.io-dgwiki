const sqlite = require('better-sqlite3');
const db = new sqlite('./database.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS wiki(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        namew TEXT,
        indxxx TEXT,
        editlog TEXT
    );
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT,
        uuid TEXT,
        username TEXT,
        email TEXT,
        warned INTEGER,
        banned TEXT
    );
`);
db.exec(`
    CREATE TABLE IF NOT EXISTS babl(
        dayl INTEGER,
        likeb INTEGER,
        likel INTEGER,
        liked INTEGER
    );
    CREATE TABLE IF NOT EXISTS babc(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dtl INTEGER,
        cmt TEXT,
        user TEXT
    );
    CREATE TABLE IF NOT EXISTS babb(
        day INTEGER,
        breakfast TEXT,
        lunch TEXT,
        dinner TEXT
    );
    CREATE TABLE IF NOT EXISTS econo(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        indexx TEXT,
        author TEXT
    );
`)

module.exports = db;