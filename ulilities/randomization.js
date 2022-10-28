class checkTF {
     constructor(){

     this.firstWinYes = ['This is a huge success for me. A first. ','We go into the war room everyday and celebrate the little wins. Today was a big one','Fortune smiled on me for the first time today. ', ' TBA ',' TBA ',' TBA ' ];
     this.firstWinMeh =  [ ' It\'s not my first win here. But man, it sure feels good. ', 'Little wins like this stack up. ',	'Looks like there\'s another thumbs up for me. ',	'Just because I\'m good at it doesn\'t mean I don\'t need the flattery. ',	'Slam dunk',	' TBA ',	' TBA ' ];
     this.longtermYes =  [ ' I\'ve been working towards this for ages; and it\'s sometimes been a struggle. ', ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ' ];
     this.longtermNo =  [ ' I must confess it was a relatively quick win but we count those. ', 'No question about it, success doesn\’t get old. ', 'Winning never gets old', 'To quote consummate winner, DJ Khalid, all I do is win, win, win...no matter what, got money on my mind I can never get enough',' TBA ',' TBA ',' TBA ' ];
     this.satisfiedYes =  [ ' Am I satisfied? Are you kidding, I am so freaking proud. And yeah, I feel great. ',  ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ' ];
     this.satisfiedMeh =  [ ' How satisfied do I feel? Meh, no big deal. ', 'As I say, C\s get degrees', ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ' ];
     this.challengeYes =  [ ' I don\'t always work this hard. But this win is different and it is really important to me. So I basically emptied the tank. ',  ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ' ];
     this.challengeMeh =  [ ' I\'ve done much harder things. But I don\'t take it for granted that most things come easy. ', 'As I like to say, sweat today so you dont regret today. ',  ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ' ];
     this.gratitudeYes =  [ ' I could never have done this alone and I want to thank each and every one of you. You know who you are! I love you. ', 'Thanks for having my back; you know who you are. ',' I have to give credit where it\’s due. You know who you are. ', 'I sincerely applaud all of you. ', 'Snappy Snaps all around', 'It takes a village. ' ];
     this.gratitudeMeh =  [ ' Does anyone besides me deserve credit for this win? Not today, went rogue and killed it alone!', 'And you dared to doubt me! Hah', 'Though I stand alone in recognition, I appreciate so many well wishers. ', ' TBA ', ' TBA ', ' TBA ', ' TBA ', ' TBA ' ];
}

     randomize(arr){
          let randomItem = arr[Math.floor(Math.random()*arr.length)];
           return randomItem
}}
module.exports = checkTF;