const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

const add = (title, level) => {
    const data = readData();
    const language = {
        title,
        level,
    };
    data.languages.push(language);
    saveData(data);
    console.log(`Мову ${title} успішно додано!`);
};

const remove = (title) => {
    const data = readData();
    const languages = data.languages.filter((language) => language.title !== title);
    data.languages = languages;
    saveData(data);
    console.log(`Мову ${title} успішно видалено!`);
};

const list = () => {
    const data = readData();
    console.log('Список мов:');
    data.languages.forEach((language) => {
        console.log(`- ${language.title} (${language.level})`);
    });
};

const read = (title) => {
    const data = readData();
    const language = data.languages.find((language) => language.title === title);
    if (!language) {
        console.error(`Мова ${title} не знайдена!`);
        return;
    }
    console.log(`Назва: ${language.title}`);
    console.log(`Рівень: ${language.level}`);
};

const readData = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Помилка читання даних!');
        return { languages: [] };
    }
};

const saveData = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Помилка запису даних!');
    }
};

module.exports = {
    add,
    remove,
    list,
    read,
};
