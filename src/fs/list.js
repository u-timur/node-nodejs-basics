import fs from 'node:fs';

const list = async () => {    
    fs.stat('./src/fs/files', (err, stat) => {
        if(err) {
            if (err.code === 'ENOENT') {       
                console.error('FS operation failed');             
                return;
            }
            throw err;
        }

        fs.readdir('./src/fs/files', { recursive: true}, (err, data) => {
            if(err) {
                console.log('err.code:', err.code)
                if (err.code === 'ENOENT') {       
                    console.error('FS operation failed');             
                    return;
                }
                throw err;
            }    
            console.log(data);    
        });
    })
};

await list();