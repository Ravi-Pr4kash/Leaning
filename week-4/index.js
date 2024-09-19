const fs = require('fs');
const {Command} = require('commander');
const program = new Command();

program
 .name('counter')
 .description('ClI to do file based task')
 .version('0.8.0');

program.command('counter')
    .description('count the no. of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
       fs.readFile(file, 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                const lines = data.split(' ').length;
                console.log(`there are ${lines} in the ${file}`);
            }
        });
    });
program.parse();