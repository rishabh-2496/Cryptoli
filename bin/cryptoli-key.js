const program = require('commander');
const key = require('../commands/key')


program
    .command('set')
    .description('Set Api key Get At -- https://nomics.com')
    .action(key.set);

program
    .command('show')
    .description('Show Api key')
    .action(key.show)


program
    .command('remove')
    .description('Remove Api key')
    .action(key.remove)

program.parse(process.argv)