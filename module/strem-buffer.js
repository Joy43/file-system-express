const { error } = require('console');
const fs = require('fs');

// Readable stream
const readableStream = fs.createReadStream(
    __dirname + "/steam.txt",
    "utf-8"
);

readableStream.on('data', (data) => {
    console.log(data);

    // Writable stream
    const writableStream = fs.createWriteStream(__dirname +"/steamwrite.txt");
    
    writableStream.write(data, (err) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log("Write completed successfully.");
        }
    });
    // readableStream.pipe(writableStream)
});
readableStream.on('error',(err)=>{
    throw new Error(Error);
});


