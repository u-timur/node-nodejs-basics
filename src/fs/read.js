import fs from 'node:fs';

const read = async () => {
    fs.open('./src/fs/files/fileToRead.txt', 'r', (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error('FS operation failed');
                return;
            }
            throw err;
        }

        fs.readFile('./src/fs/files/fileToRead.txt', (err, data) => {
            if(err) {
                throw err;
            }
            console.log(data);
        });
    })
};

await read();