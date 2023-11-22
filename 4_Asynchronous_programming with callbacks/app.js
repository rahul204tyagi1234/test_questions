
// Answer :- Anynchronous programing is a programing paradigm that allows tasks to execute
// independently,without waiting for the completion of each other. 
// Callbacks are functions passed as arguments to other functions, which are then invoked when a specific task is completed.

function readFileAsync(fileName,callback){
    setTimeout(()=>{
        const content =`Content of ${fileName}`;
        callback(content);
    },1000);
}

function handleFileContent(content){
    console.log(`File content : ${content}`);
}

readFileAsync('example.text',handleFileContent);
console.log('Reading file ...');