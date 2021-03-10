'use strict';
const fs = require('fs');
const out = 'www/locales';
const excelToJson = require('convert-excel-to-json');
const getKey = excelToJson({
    sourceFile: 'input.xlsx',
});
const keyArray = getKey.Sheet1[0];
const result = excelToJson({
    sourceFile: 'input.xlsx',
    header: {
        rows: 1,
    },
    columnToKey: keyArray,
});

const fileLength = result.Sheet1.length; // 최상단 Row 제외

const outSrc = fs
    .readdirSync(out)
    .map((files) => `${out}/${files}`);


for (let index = 0; index < fileLength; index++) {
    try {
        fs.writeFileSync(outSrc[index], JSON.stringify(result.Sheet1[index]));
        console.log('Success');
    } catch (err) {
        console.error(err);
    }
}