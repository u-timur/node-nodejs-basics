import fs from 'node:fs';

const copy = async () => {

    fs.stat('./src/fs/files', (err, stat) => {
        if(err) {
            if (err.code === 'ENOENT') {
                console.error('FS operation failed');
                return;
            }
            throw err;
        }

        fs.stat('./src/fs/files_copy', (err, stat) => {
            if(err) {
                if (err.code === 'ENOENT') {                    
                    fs.readdir('./src/fs/files', { recursive: true}, (err, data) => {
                        if(err) {
                            throw err;
                        }
                
                        fs.mkdir('./src/fs/files_copy', { recursive: true }, (err) => {
                            if (err) throw err;
                        }); 
        
                        for(let currentData of data) {
                            fs.copyFile(`./src/fs/files/${currentData}`, `./src/fs/files_copy/${currentData}`, (err) => {
                                if(err) {
                                    throw err;
                                }
                            })
                        }
                    });
                    return;
                }
                throw err;
            }
            console.error('FS operation failed');
        })
    })
};

await copy();
