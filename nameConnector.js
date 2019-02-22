
// This code below illustrates: .txt content read and put together in a new .txt doc. Works fine with node.js
const getNameString = require('fs');

var what2look4inFile = {
    encoding : 'utf8',
    flag : 'r'
};


getNameString.readFile('firstNameString.txt',what2look4inFile, (fail, firstname) => {
    getNameString.readFile('lastNameString.txt', what2look4inFile, (fail2, lastname) => {
        if (fail || fail2) {
            console.error(fail || fail2)
        }
       
        var theBothStringsCombined = firstname + ' ' + lastname;
        getNameString.writeFile('theBothStringsCombinedInAnewTXTdoc.txt', theBothStringsCombined, (err) => {
           console.log('Look in your file folder.')
        });
    });
});