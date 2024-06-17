const fs = require('fs');

// Reading the contents of 'a.txt' asynchronously
fs.readFile('3-read-from-file.md', 'utf-8', (readErr, data) => {
    if (readErr) {
        console.error('Error reading file:', readErr);
    } else {
        console.log('Data read is:');
        console.log(data);

        // // Modifying the data (for example, adding a new line)
        // const newData = data + '\nNew line added.';

        // // Writing to a new file 'output.txt'
        // fs.writeFile('output.txt', newData, 'utf-8', (writeErr) => {
        //     if (writeErr) {
        //         console.error('Error writing to file:', writeErr);
        //     } else {
        //         console.log('Data written to output.txt');
        //     }
        // });
    }
});