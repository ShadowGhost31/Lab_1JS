const fs = require('fs');

function appendToFile(filename, data) {
    fs.appendFile(filename, data + '\n', (err) => {
        if (err) {
            console.error('Помилка при додаванні до файлу:', err);
            return;
        }
        console.log('Рядок успішно додано до файлу.');
    });
}


const filename = 'task02.txt';


const newData = 'Hello, World!';


appendToFile(filename, newData);