// //'use strict';
// //var name = prompt('what is your name?');
// //alert('Hello' + name);
// var counter = 0;
// for (var i = 0; i < 4; i++) {
//     var exactArray = questions[i];
//     var promptquestions = exactArray[0];
//     var posetiveReply = exactArray[1];
//     var negativeReply = exactArray[2];
//     var defultReply = exactArray[3];
//     var name = prompt(promptquestions);
//     promptquestions = promptquestions.toLowerCase();
//     switch (name) {
//         case "yes":
//         case "y":
//             counter=counter+1;
//             alert(posetiveReply);
//             break;
//         case "no":
//         case "n":
//             alert(negativeReply);
//             break;
//         default:
//             alert(defultReply);
//             break;
//     }
// }


// for (var num = 0; num < 4; num++) {
//     var facebook = prompt("How many times do you open facebook ? -- You have 3 chance")
//     if (facebook == 5) {
//         alert("Yes exactly!");
//         counter=counter+1;

//         break;
//     } else if (facebook > 5) {
//         alert("too much");
//     } else if (facebook < 5) {
//         alert(" more than");
//     }
// }
// alert("I open it 5 times ")

// var country = ["Italy", "Spain", "France", "United kingdom", "Switzerland", "Bulgaria"];
// for (var count = 0; count < 5; count++) {
//    var play = prompt("I love 6 different countrys , Can you tell me one of them ??");
//    switch (play) {
//        case country[0]:
//        case country[1]:
//        case country[2]:
//        case country[3]:
//        case country[4]:
//        case country[5]:
//            alert("  You are right, My favorite countrys are : Italy,Spain,France,United Kingdom,Switzerlan,Bulgaria");
//            counter = counter + 1;
//            console.log(play);
//            count = 5;
//            break;
//        default:
//            alert("Unfortunately you are wrong ~_~! Try it again  ")
//            console.log(play);
//            break;
//    }
// }
// alert("You are right, My favorite countrys are : Italy,Spain,France,United Kingdom,Switzerlan,Bulgaria");

// alert('you got this marks'+counter);

//  function numberValidator(inputstring){
//      var inputNumber = parseInt(inputString);
//      while (isNaN(inputNumber)){
//          Response =('please enter a number');
//          inputNumber=parseInt(response);
//      }
//      return response;
//  }
//  function question7 (country){
//     var country = ["Italy", "Spain", "France", "United kingdom", "Switzerland", "Bulgaria"];
//     for (var count = 0; count < 5; count++) {
//        var play = prompt("I love 6 different countrys , Can you tell me one of them ??");
//        switch (play) {
//            case country[0]:
//            case country[1]:
//            case country[2]:
//            case country[3]:
//            case country[4]:
//            case country[5]:
//                alert("  You are right, My favorite countrys are : Italy,Spain,France,United Kingdom,Switzerlan,Bulgaria");
//                counter = counter + 1;
//                console.log(play);
//                count = 5;
//                break;
//            default:
//                alert("Unfortunately you are wrong ~_~! Try it again  ")
//                console.log(play);
//                break;
//        }
//     }
//     alert("You are right, My favorite countrys are : Italy,Spain,France,United Kingdom,Switzerlan,Bulgaria");

//     alert('you got this marks'+counter);
//     return country
//  }
// function userEntry(ask, yes, no) {
//     var response = prompt(ask)
//     response = response.toUpperCase();
//     if (response == 'YES' || response == 'Y') {
//         alert (yes);
//         mark = mark + 1;
//     } else if (response == 'NO' || response == 'N') {
//             alert (no);
//     } else 
//     alert('wrong answer') 
//     return response 
//  }
//  userEntry('did you know who am I?', 'Sure you know me ', 'Check your memory again')
//  userEntry('Do you know what I studied at university? ', 'Maybe you know me from university', 'not proplem')
//  userEntry(' Do you know what industrial engineering is? ', 'You know it\'s a great specialty ', 'So Read my page')
//  userEntry(' Do you know what I like? ', 'Nice! ', 'never mind')
// userEntry('Were the questions annoying? ', 'I\'m sorry for that', ' thanks for your kindness', ' thanks for your kindness')




//   for (var i = 0; i < 5; i++) {
//       var exactArray = questions[i];
//       var promptQuestion = exactArray[0];
//       var posetiveReply = exactArray[1];
//       var negativeReply = exactArray[2];
//       var defultReply = exactArray[3];
//       var name = prompt(promptQuestion);
//       promptQuestion = promptQuestion.toLowerCase();
//       switch (name) {
//           case "yes":
//           case "y":
//               alert(posetiveReply);
//               counter = counter + 1;
//               break;
//           case "no":
//           case "n":
//               alert(negativeReply);
//               break;
//           default:
//               alert(defultReply);
//               break;
//       }
//   }
//   return name;
// var counter = 0;
// function q1(name) {
//     var questions = [
//         [
//             'do you knew where I\'m from ?',
//             'that\'s great',
//             'no problem',],
//         ['do you knew what\'s my favorite color?',
//             'Amazing !',
//             'Ooh ! you must knew !',
//         ],
//         ['do you knew what is my studies ?',
//             'college ?',
//             'Iam Industrial Engineering',
//         ],
//         ['where was my last job ?',
//             'great you got it ! ',
//             'I worked in Ministry Of Municipals Affairs '
//         ]
// q1();
//     function q2(smoke) {
//         for (var sum = 0; sum < 4; sum++) {
//             var smoke = prompt("Ok now tell me, how much cigarette I smoke today?")
//             if (smoke == 15) {
//                 alert("Yes exactly!");
//                 counter = counter + 1;
//                 console.log(smoke);
//                 break;
//             } else if (smoke > 15) {
//                 alert("mmm , not Daily");
//                 console.log(smoke);
//             } else if (smoke < 15) {
//                 alert(" too low add A little");
//                 console.log(smoke);
//             }
//         }
//         alert('i am smoke 15 segrit evry day')
//         return (smoke);
//     }
//     q2();
//     function q3(play) {
//         var tourism = ["dubai", 'petra', 'sharm', 'taba', 'Dead Sea', 'paris'];
//         for (var times = 0; times < 5; times++) {
//             var play = prompt("I like 7 different touristic places .. Can you guess one of them?");
//             switch (play) {
//                 case tourism[0]:
//                 case tourism[1]:
//                 case tourism[2]:
//                 case tourism[3]:
//                 case tourism[4]:
//                 case tourism[5]:
//                     alert(" You are right.. My fav touristic places are:- dubai , petra , sharm , taba , Dead Sea , paris , roma ");
//                     counter = counter + 1;
//                     console.log(play);
//                     times = 5;
//                     break;
//                 default:
//                     alert("You are wrong .. plz Try it again ")
//                     console.log(play);
//                     break;
//             }
//         }
//         return (play);
//     }
//     q3();
//     alert(" Your points are " + counter);
//     alert("Thanks for being here " + user);

'use strict';
var user = prompt(" what is your name ? ")
alert("Hallo " + user)
var counter = 0;
function q1(name) {
    var questions = [
        ["Do you know what my name is?",
            " Good ",
            " Right , Actually my name is omar",
        ],
        [
            'do you knew where I\'m from ?',
            'that\'s great',
            'no problem',],
        ['do you knew what\'s my favorite color?',
            'Amazing !',
            'Ooh ! you must knew !',
        ],
        ['do you know what is my studies ?',
            'good',
            'Iam Industrial Engineering',
        ],
        ['do knew where was my last job ?',
            'great you got it ! ',
            'I worked in Ministry Of Municipals Affairs '
        ]
    ]
    for (var i = 0; i < 5; i++) {
        var exactArray = questions[i];
        var promptQuestion = exactArray[0];
        var posetiveReply = exactArray[1];
        var negativeReply = exactArray[2];
        var defultReply = exactArray[3];
        var name = prompt(promptQuestion);
        promptQuestion = promptQuestion.toLowerCase();
        switch (name) {
            case "yes":
            case "y":
                alert(posetiveReply);
                counter = counter + 1;
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
    return name;
}
q1();
function q2(money) {
    for (var sum = 0; sum < 4; sum++) {
        var money = prompt(" how much i have money right now? ! ")
        if (money == 15) {
            alert("Yes exactly!");
            counter = counter + 1;
            console.log(money);
            break;
        } else if (money > 15) {
            alert(" not all time");
            console.log(money);
        } else if (money < 15) {
            alert(" too low ");
            console.log(money);
        }
    }
    alert('Actully i have more and more O_o')
    return (money);
}
q2();
function q3(TV) {
    var Show = ['God father ', 'beaky blinders', 'let us talk ', 'The town', 'dead wood'];
    for (var times = 0; times < 4; times++) {
        var TV = prompt("I like many tv show and movies ,guess what is it !");
        switch (TV) {
            case Show[0]:
            case Show[1]:
            case Show[2]:
            case Show[3]:
            case Show[4]:

                alert(" You\'re right i like God father ' , 'beaky blinders' ,'let us talk ' ,'The town' ,'dead wood ");
                counter = counter + 1;
                console.log(TV);
                times = 4;
                break;
            default:
                alert("you have another chance just tyr ")
                console.log(TV);
                break;
        }
    }
    return (TV);
}
q3();
alert(" Your marks : " + counter);
alert("Thanks to be here " + user);


