#!/usr/bin/env node

const program = require("commander");
const check = require('../commands/check')


program
        .command('price')
        .description('Check Price of Coins')
        .option('--coin <type>','Add Specific Coin Types in CSV format','BTC,ETH,XRP')
        .option('--cur <currency>','Change the Currency','USD')
        .action((cmd) => check.price(cmd))


program.parse(process.argv)