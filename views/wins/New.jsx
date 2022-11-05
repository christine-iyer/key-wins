const React = require('react')
const Default = require('../layouts/Default.jsx')
const checkTF = require('../../ulilities/randomization')
class New extends React.Component {
    render() {
        return (
            <Default title="Key-Win: 

            noun: your best shot is a key win, even if you miss.

            verb: chipping away at a new habit. (It takes an average of 66 🔑-🥇 to achieve mastery, so be patient).">

                <form method="POST" action="/wins">
                    <h3>Tell me about  in the past tense. (Don't bother using I, the most important pronoun, the app's got you).
                    in the green space below describe your  using as few or as many details as you like.</h3>
                    <input type="text" name="success" placeholder='enter your response here' className='success-box'></input><br />
                    satisfaction: if the event was particularly rewarding, check here <input type="checkbox" className='one' name="satisfaction" placeholder='satisfaction'></input><br />
                    challenge: this task was HARD!<input type="checkbox" name="challenge"></input><br />
                    firstWin: the first of many!<input type='checkbox' name='firstWin' /><br />
                    longTerm: there is/was a goal involved. <input type='checkbox' name='longTerm' /><br />
                    gratitude: someone besides you deserves a mention. <input type="checkbox" name="gratitude"></input><br />
                    <h3>in reflecting on this key-win, do you have any words to express what this could unlock for you? </h3>
                    comments: <input type="text" name="comments"></input><br />
                    {/* Date: <input type="date" name="Date"></input><br />  */}
                    <input type="submit" value="submit your 🔑-🥇"></input>
                </form>
                <br />
                <br />
                <br />
               
                
                <a href='https://www.healthline.com/health/how-long-does-it-take-to-form-a-habit#:~:text=It%20can%20take%20anywhere%20from,new%20behavior%20to%20become%20automatic.'>66 Source</a>
            </Default>

        )
    }
}

module.exports = New