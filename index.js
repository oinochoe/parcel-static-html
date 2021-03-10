'use strict';
const fs = require('fs');
const out = 'www/locales';
const excelToJson = require('convert-excel-to-json');
const result = excelToJson({
    sourceFile: 'test.xlsx',
    header: {
        rows: 1,
    },
    columnToKey: {
        A: 'dragon',
        B: 'dragonSea',
        C: 'dragonSeahore'
    },
});

const fileLength = result.Sheet1.length; // 최상단 Row 제외

const outSrc = fs
    .readdirSync(out)
    .map((files) => `${out}/${files}`);


for (let index = 0; index < fileLength; index++) {
    try {
        fs.writeFileSync(outSrc[index], JSON.stringify(result.Sheet1[index]));
        console.log('생성 완료');
    } catch (err) {
        console.error(err);
    }
}