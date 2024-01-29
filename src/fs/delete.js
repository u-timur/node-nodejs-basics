import fs from 'node:fs';

const remove = async () => {
    fs.unlink('./src/fs/files_copy/fileToRemove.txt', (err) => {
        if (err) {
            if (err.code === 'ENOENT') {       
                console.error('FS operation failed');             
                return;
            }
            throw err;
        }
    });
};

await remove();