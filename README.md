
### Confidence Club

In answer to my question about adding styling to defauly...
No you’re doing well. What you have to do is make a prop Default called something like pageClass

The use pageClass to set the className of the body in Default

```<Default pageClass=‘index’>```

In Default.jsx


```<body className={this.props.pageClass}```
This is because Default isn’t literally an HTML element so it you can’t give it a class.
You can give the html elements that it creates class names though. 

Plan to randomize possible answers to the True False questions. This is a work in progress. 
An example of randomizing in a req,res format: 

```JS   
     // Magic 8 Ball
app.get('/magic/:str', (req,res) => {
  var arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it, yes"]
  let randomItem = arr[Math.floor(Math.random()*arr.length)];
  res.send(`<h1>${randomItem}</h1>`)
})      

const bingo = ['Bingo', 'Nailed it!', 'Homerun', 'Damn Girl']
 ```


|question    |randomResponse1                                                                                                                  |randomResponse2                                                                         |randomResponse3                                               |randomResponse4                                                                                                                     |randomResponse5                   |randomResponse6     |randomResponse7|
|------------|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|--------------------|---------------|
|firstWinYes | This is a huge success  for me. A first. '                                                                                      |‘We go into the war room  everyday and celebrate  the little wins.  Today was a big one’|Fortune smiled on me for  the first time today.               |Watch me destroy.                                                                                                                                |TBA                               |TBA                 |TBA            |
|firstWinMeh | It\'s not my first win here.  But man, it sure feels good. '                                                                    |Little wins like this stack up.                                                         |Looks like there's another thumbs up for me.                  |Just because I'm good at it doesn't mean I don't need the flattery.                                                                 |Slam dunk.                               |TBA                 |TBA            |
|longtermYes | I\'ve been working towards  this for ages; and it\'s sometimes  been a struggle. '                                              |TBA                                                                                     |TBA                                                           |TBA                                                                                                                                 |TBA                               |TBA                 |TBA            |
|longtermNo  |I must confess it was a  relatively quick win, but we  count those. '                                                            |No question about it,  success doesn’t get old.                                         |Winning never  gets old                                       |To quote consummate winner,  DJ Khalid, all I do is win,  win, win...no matter what, g ot money on my mind  I can never get enough."|TBA                               |TBA                 |TBA            |
|satisfiedYes|Am I satisfied? Are you kidding,  I am so freaking proud. And yeah,  I feel great. '                                             |TBA                                                                                     |TBA                                                           |TBA                                                                                                                                 |TBA                               |TBA                 |TBA            |
|satisfiedMeh|How satisfied do I feel? Meh, no  big deal. '                                                                                    |C's get degrees! No complaints                                                          |TBA                                                           |TBA                                                                                                                                 |TBA                               |TBA                 |TBA            |
|challengeYes|I don\'t always work this hard.  But this win is different and it is  really important to me. So I basically  emptied the tank. '|‘Left it all on the field.  Gave 100%’                                                  |TBA                                                           |TBA                                                                                                                                 |TBA                               |TBA                 |TBA            |
|challengeMeh|I\'ve done much harder things.  But I don\'t take it for granted  that most things come easy. '                                  |As I like to say, sweat today so you dont  regret today.                                |TBA                                                           |TBA                                                                                                                                 |TBA                               |TBA                 |TBA            |
|gratitudeYes|I could never have done  this alone and I want to thank  each and every one of you. You  know who you are! I love you. '         |Thanks for having my back;  you know who you are.                                       |I have to give credit  where  it’s due. You  know who you are.|I could never overlook those whose shoulders on which  I stood. This our our win.                                                   |I sincerely applaud  all of you.  |It takes a village. |TBA            |
|gratitudeMeh|Does anyone besides me  deserve credit for this win?  Not today, went rogue  and killed it alone! '                              |Though I stand alone in recognition,  I appreciate so many well wishers.                |TBA                                                           |TBA                                                                                                                                 |TBA                               |TBA                 |TBA            |

