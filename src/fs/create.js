import fs from 'node:fs';

const create = async () => {
    fs.open('./src/fs/files/fresh.txt', 'wx', (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('FS operation failed');
                return;
            }
            throw err;
        }

        fs.appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
            if(err) {
                throw err;
            }
        })
    })
};

await create();