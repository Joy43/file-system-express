const fs = require('fs');

// Read file synchronously
const output = fs.readFileSync(__dirname + '/hello.txt', 'utf-8');
console.log(output);

// Write to a file asynchronously
const text = "hi sami are know i can love you so much. please answer to me. I can lost control my mind. please agree with me. i can try too hard, how to always happy";
fs.writeFile("write.txt", text, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully.');
});
