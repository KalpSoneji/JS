const pdfHandler = (option) => option.fname + " is a pdf file";

const docxHandler = (option) => option.fname + " is a docx file";

const txtHandler = (option) => option.fname + " is a txt file";

const Handler = (file, cb) => {
    return cb({
        fname: file.name,
        size: file.size
    })
    
}

var filename = "a.txt";
var temp;

if(filename.endsWith(".pdf")){
    temp = Handler({name: filename, size: "10kb", location: "Documents"}, pdfHandler);
}

else if(filename.endsWith(".docx")){
    temp = Handler({name: filename, size: "20kb", location: "Downloads"}, docxHandler);
}

else if(filename.endsWith(".txt")){
    temp = Handler({name: filename, size: "30kb", location: "Desktop"}, txtHandler);
}

else{
    console.log("File type not supported");
}

console.log(temp);
