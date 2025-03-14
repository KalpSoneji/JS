const pdfHandler = (option) => option.fname + " is a pdf file with size " + option.size;

const docxHandler = (option) => option.fname + " is a docx file with size " + option.size;

const txtHandler = (option) => option.fname + " is a txt file with size " + option.size;

const Handler = (file, cb) => {
    var result = cb({
        fname: file.name,
        size: file.size
    })

console.log(result);
    
}

//OR

//const Handler = (file, cb) => cb({fname: file.name, size: file.size });
    
var filename = "a.txt";

if(filename.endsWith(".pdf"))
    Handler({name: filename, size: "10kb", location: "Documents"}, pdfHandler);

else if(filename.endsWith(".docx"))
    Handler({name: filename, size: "20kb", location: "Downloads"}, docxHandler);

else if(filename.endsWith(".txt"))
    Handler({name: filename, size: "30kb", location: "Desktop"}, txtHandler);

else
    console.log("File type not supported");
