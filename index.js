'use strict';
const fs = require('fs');
const excelFileName = 'input.xlsx';
const out = 'www/locales/';
const excelToJson = require('convert-excel-to-json');
const getKey = excelToJson({
    sourceFile: excelFileName,
});
const keyArray = getKey.Sheet1[0];
const result = excelToJson({
    sourceFile: excelFileName,
    header: {
        rows: 1
    },
    columnToKey: keyArray,
});

const fileLength = result.Sheet1.length; // 최상단 Row 제외
let fileName = '';

for (let index = 0; index < fileLength; index++) {
    try {
        fileName = out + result.Sheet1[index].country + '.json';
        console.log(fileName)
        fs.writeFile(fileName, JSON.stringify(result.Sheet1[index]), (err) => {
            if(err) return console.log(err);
        });
        console.log('Success');
    } catch (err) {
        console.error(err);
    }
}