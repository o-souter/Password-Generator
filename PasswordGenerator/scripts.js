var password = document.getElementById("password");

function createPass() {
    var length = 10;
    var options = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNMoliveriscool";
    var words = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"];
    var pass = "";
    //Insert random characters from the list to the password
    for (var i = 0; i <= length; i++) {
        var mathRandom = Math.floor(Math.random() * options.length);
        pass += options.substring(mathRandom, mathRandom+1)
    }
    //Insert a random word from the list to the password
    var wordChosen = words[Math.floor(Math.random() * words.length)]
    var wordplace = mathRandom = Math.floor(Math.random() * pass.length)
    pass = pass.slice(0, wordplace) + wordChosen + pass.slice(wordplace)
    document.getElementById("pass").value = pass;
}

function copy() {
    document.getElementById("pass").select();
    document.execCommand("copy");
}