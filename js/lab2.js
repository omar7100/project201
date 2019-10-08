'use strict';
var name = prompt('what is your name?');
alert('Hello' + name);
var counter = 0;

var questions = [
    [
        'do you knew where I\'m from ?',
        'that\'s great',
        'no problem',],
    ['do you knew what\'s my favorite color?',
        'Amazing !',
        'Ooh ! you must knew !',
    ],
    ['do you knew what is my studies ?',
        'college ?',
        'Iam Industrial Engineering',
    ],

    ['where was my last job ?',
        'great you got it ! ',
        'I worked in Ministry Of Municipals Affairs '
    ]


]
for (var i = 0; i < 4; i++) {
    var exactArray = questions[i];
    var promptquestions = exactArray[0];
    var posetiveReply = exactArray[1];
    var negativeReply = exactArray[2];
    var defultReply = exactArray[3];
    var name = prompt(promptquestions);
    promptquestions = promptquestions.toLowerCase();
    switch (name) {
        case "yes":
        case "y":
            counter=counter+1;
            alert(posetiveReply);
            break;
        case "no":
        case "n":
            alert(negativeReply);
            break;
        default:
            alert(defultReply);
            break;
    }
}


for (var num = 0; num < 4; num++) {
    var facebook = prompt("How many times do you open facebook ? -- You have 3 chance")
    if (facebook == 5) {
        alert("Yes exactly!");
        counter=counter+1;

        break;
    } else if (facebook > 5) {
        alert("too much");
    } else if (facebook < 5) {
        alert(" more than");
    }
}
alert("I open it 5 times ")

var country = ["Italy", "Spain", "France", "United kingdom", "Switzerland", "Bulgaria"];
for (var count = 0; count < 5; count++) {
   var play = prompt("I love 6 different countrys , Can you tell me one of them ??");
   switch (play) {
       case country[0]:
       case country[1]:
       case country[2]:
       case country[3]:
       case country[4]:
       case country[5]:
           alert("  You are right, My favorite countrys are : Italy,Spain,France,United Kingdom,Switzerlan,Bulgaria");
           counter = counter + 1;
           console.log(play);
           count = 5;
           break;
       default:
           alert("Unfortunately you are wrong ~_~! Try it again  ")
           console.log(play);
           break;
   }
}
alert("You are right, My favorite countrys are : Italy,Spain,France,United Kingdom,Switzerlan,Bulgaria");

alert('you got this marks'+counter);
