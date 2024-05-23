const yargs = require('yargs');
const userModule = require('./user');

const argv = yargs
    .command('add', 'Додати нову мову', {
        title: {
            alias: 't',
            description: 'Назва мови',
            type: 'string',
            demandOption: true,
        },
        level: {
            alias: 'l',
            description: 'Рівень володіння мовою',
            type: 'string',
            demandOption: true,
            choices: ['Junior', 'Middle', 'Senior'],
        },
    })
    .command('delete', 'Видалити мову', {
        title: {
            alias: 't',
            description: 'Назва мови',
            type: 'string',
            demandOption: true,
        },
    })
    .command('view', 'Переглянути список мов')
    .command('viewl', 'Отримати інформацію про мову', {
        title: {
            alias: 't',
            description: 'Назва мови',
            type: 'string',
            demandOption: true,
        },
    })
    .help()
    .alias('h', 'help')
    .argv;

const command = argv._[0];

switch (command) {
    case 'add':
        userModule.add(argv.title, argv.level);
        break;
    case 'delete':
        userModule.remove(argv.title);
        break;
    case 'view':
        userModule.list();
        break;
    case 'viewl':
        userModule.read(argv.title);
        break;
    default:
        console.error(`Невідома команда: ${command}`);
}
