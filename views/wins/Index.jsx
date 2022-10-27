const React = require('react');
const Default = require('../layouts/Default.jsx')
const checkTF = require('../../ulilities/randomization')


class Index extends React.Component{
    render(){
        const {wins} = this.props
        return(

            <Default title="My Key Wins" pageClass= 'index'>
                <ul>
                    {
                        wins.map((win) => {
                            const {success, satisfaction, challenge, firstWin, longTerm,gratitude,comments,_id,Date} = win
                            return (
                                <li key={_id}>
                                    <a href={`/wins/${_id}`}>
                                    Key Win alert!!!  </a>
                                    <p> I {success}. 
                                    <br />
                              {
                                        firstWin
                                          ? ' This is a huge success for me. A first. ' : ' It\'s not my first win here. But man, it sure feels good. '
                                    }
                                    
                              {
                                        longTerm
                                          ? ' I\'ve been working towards this for ages; and it\'s sometimes been a struggle. ' : 'I must confess it was a relative quick win, but we count those. '
                                    }
                                    
                                     {
                                        satisfaction
                                        ? 'Am I satisfied? Are you kidding, I am so freaking proud. And yeah, I feel great. ' :  'How satisfied do I feel? Meh, no big deal.  '
                                     }
                                     {
                                        challenge
                                        ? 'I don\'t always work this hard. But this win is different and it is really important to me. So I basically emptied the tank. ' :  'I\'ve done much harder things. But I don\'t take it for granted that most things come easy. '
                                     }
                                     {
                                        gratitude
                                        ? 'I could never have done this alone and I want to thank each and every one of you. You know who you are! I love you. ' :  'Does anyone besides me deserve credit for this win ? Not today, went rogue and killed it alone! '
                                     }
                                       Should I delete this victory, even though it made me feel 
                                       {
                                       satisfaction
                                        ? ' super satisfied ' :  ' pleased '
                                        } on {Date}??? 
                                        </p>

                             

                                    
                                    <form method="POST" action={`/wins/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete it`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>

        )
    }
}

module.exports = Index