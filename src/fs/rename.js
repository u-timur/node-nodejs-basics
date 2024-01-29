import fs from 'node:fs';

const rename = async () => {
    fs.stat('./src/fs/files_copy/properFilename.md', (err, stat) => {
        if(err) {
            if (err.code === 'ENOENT') {
                fs.rename('./src/fs/files_copy/wrongFilename.txt', './src/fs/files_copy/properFilename.md', (err) => {
                    if (err) {
                        if (err.code === 'ENOENT') {       
                            console.error('FS operation failed');             
                            return;
                        }
                        throw err;
                    }
                });
                return;                  
            }
            throw err;
        }
        console.error('FS operation failed');
    })
};

await rename();