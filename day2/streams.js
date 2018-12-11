const fs = require('fs');
const zlib  = require('zlib');

const r = fs.createReadStream('doc2.doc');

// r.on('readable', () => {
//     let chunk;
//     while (null !== (chunk = r.read())) {
//         // console.log(`chunk read of ${chunk.length} bytes`);
//         // console.log(`content found: ${chunk}`);
//     }
//   });
  



// const w = fs.createWriteStream('output.doc');

// r.pipe(writable);



// const fs = require('fs');
// const r = fs.createReadStream('file.txt');
const z = zlib.createGzip();
const w = fs.createWriteStream('doc1.doc.gz');

r.pipe(z).pipe(w);