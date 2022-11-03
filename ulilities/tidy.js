const tidy = function tidy(str) {
     tidied = str.toLowerCase()
     tidied.replace(/[?!.',\/#!$%\^&\*;:{}=\-_`~()]/g,"")
     tidied.toLowerCase()

     return tidied
   }


   module.exports = tidy

