var language = ["hindi","english","marathi","finnish","french","urdu","tamil","telgu"];

const deleteLang = (langName)=>{
    return language.filter((lang)=>{
        return lang!== langName;
    })
}

var x = deleteLang("telgu")
console.log(x);

// const deleteLang = (langName)=>{
//     return language.filter((lang)=> lang!== langName); 
// }

// var x = deleteLang("finnish")
// console.log(x);

// const deleteLang = (langName) => language.filter((lang) => lang != langName)

// console.log("Original array: ", language);

// console.log("New created array with the language deleted: \n");

// var x = deleteLang("urdu")
// console.log(x);
