const tidy = require("./tidy");


class checkTF {
     constructor(){

     this.firstWinYes = [' As Napolean said, history is written by the winners. So buckle in while I tell you a story. ', 'Yesterday I dared to struggle. Today I dared to win. ', ' This is the first time I\'ve been able to do this. And it\'s a big deal!. ', ' This is a huge success for me. A first!. ',' We go into the war room everyday and celebrate the little wins. Today was a big one. ' ,' Fortune smiled on me for the first time today. ', '  '];
     this.firstWinMeh =  [' Don\'t be a hater because I\'m that good. ',' I\'ve been through some things. Some successfully, some not so much. But I gotta say, this one is particularly sweet. ', ' It\'s not my first win here. But man, it sure feels good. ', 'Little wins like this stack up. ',	' Looks like there\'s another thumbs up for me. ',	'Just because I\'m good at it doesn\'t mean I don\'t need the flattery. ',	' Slam dunk '];
     this.longtermYes =  ['The harder the battle, the sweeter the victory.', ' I\'m not saying it was easy. Definitely highs and lows. ' ,' I\'ve been working towards this for ages; and it\'s sometimes been a struggle. ', 'It feels like I\'ve unclocked something in my brain. ' ];
     this.longtermNo =  [' Easier than I thought it would be, but I\'ll take anything I can get. ', ' I must confess it was a relatively quick win but we count those. ', 'No question about it, success doesn\'t get old. ', 'Winning never gets old. ', ' To quote consummate winner, DJ Khalid, all I do is win, win, win...no matter what, got money on my mind I can never get enough. '];
     this.satisfiedYes =  [' Excuse me if I gloat I am unapologetically proud right now, and I don\'t care who knows it. ', ' Am I satisfied? Are you kidding, I am so freaking proud. And yeah, I feel great. ' ];
     this.satisfiedMeh =  [' If I\'m going to be honest, this one feels a little hollow. ', ' How satisfied do I feel? Meh, no big deal. ', ' As I say, C\s get degrees' ];
     this.challengeYes =  [' I surprised myself. Left everything on the field. Didn\'t know I could want something so bad and work so hard to get it. Good to know, if I ever need to do it again . (But I hope I don\'t 😂.)', ' I didn\'t say it was easy, I said it was worth it. ',' I don\'t always work this hard. But this win is different and it was really important to me. So I basically emptied the tank. ' ];
     this.challengeMeh =  [' As the 🇯🇲 king Bob Marley said, the day you stop racing, is the day you win the race. ',' I\'m just lucky. Just look at how easy that was! Why did I bother stressing over it?? ',' I\'ve done much harder things. But I don\'t take it for granted that most things come easy. ', ' As I like to say, sweat today so you dont regret today. ' ];
     this.gratitudeYes =  [' To quote Mia Hamm ⚽️🌟, I am a member of a team, and I rely on the team, I defer to it and sacrifice for it, because the team, not the individual, is the ultimate champion. ', ' I could never have done this alone and I want to thank each and every one of you. You know who you are. I love you. ', ' Thanks for having my back; you know who you are. ',' I have to give credit where it\'s due. You know who you are. ', ' I sincerely applaud all of you. ', ' Snappy Snaps all around ', ' It takes a village. ', ' I don\'t deserve all the credit. It takes a team 🥇 , and we\'ve got a kick-ass team.  Thank you all so much. This is all you! '];
     this.gratitudeMeh =  [' I\'m  a pretty good winner. I’m a terrible loser. And I rub it in pretty good when I win. (Who am I channeling?  🏈)? ', ' It\'s not about winning and losing. You know who says that? The loser.', ' Hate to say it, but I got zero support on this — and I crushed it ' ,' Does anyone besides me deserve credit for this win? Not today, went rogue and killed it alone. ', ' And you dared to doubt me.  Hah! ', ' Though I stand alone in recognition, I appreciate so many well wishers ' ];
}

     randomize(arr){
          let randomItem = arr[Math.floor(Math.random()*arr.length)];
           return tidy(randomItem)
}}
module.exports = checkTF;