const React = require('react')
const Default = require('../layouts/Default.jsx')
const checkTF = require('../../ulilities/randomization')
class New extends React.Component {
    render(){
        return (
            <Default title="everyone is a winner here  ">
                <span><h2 className='instructions'>Key-Win: 
                    noun: your best shot is a key win, even if you miss. 
                    verb: to create or change a habit.</h2><h3>note: expect to log 66 🔑-🥇 to achieve mastery.</h3> <br></br></span>

<h3>Logging a key win is simple: <br></br>

document your win. no need to start with 'I'. 
    simply say something like "finished my SEI 
    assignment". The narrative will flow best if you 
    follow this format. <br></br>
</h3> <br></br>


            <form method="POST" action="/wins">
                in the green space below describe your 🔑-🏆 using as few or as many details as you like : <input type="text" name="success" placeholder='enter your response here' className='success-box'></input><br/>
                for the check box questions, think about the degree 
to which each attribute below pertains to your 
particular win. <br></br>
For example,  <br></br>
                
                1. "satisfaction": similarly, checking satisfaction,  means the event 
is particularly rewarding.  <br></br>
2. "first-win": if the win was a first, check that box.  the first of many. <br></br>
3. "longterm": leaving it blank indicates it was an everyday task. checking the box means there is a goal involved.
"gratitude" : a click suggests something/someone came to the rescue just in time. <br></br>
4. challenge: checking indicates the task involved some difficulty. <br></br>
5. gratitude: checking indicates someone besides you deserves a mention, not necessarily by name.

                satisfaction: <input type="checkbox" className='one' name="satisfaction" placeholder='satisfaction'></input><br/>
                challenge: <input type="checkbox" name="challenge"></input><br/>
                firstWin: <input type='checkbox' name='firstWin' /><br />
                longTerm : <input type='checkbox' name='longTerm' /><br />
                gratitude: <input type="checkbox" name="gratitude"></input><br/>
                <h3>in reflecting on this key-win, do you have any words to express what this could unlock for you? </h3>
                comments: <input type="text" name="comments"></input><br />
                {/* Date: <input type="date" name="Date"></input><br />  */}
                <input type="submit" value="submit your 🔑-🥇"></input>
            </form>
            <br/>
            <br/>
            <br/>
            <a href='https://www.healthline.com/health/how-long-does-it-take-to-form-a-habit#:~:text=It%20can%20take%20anywhere%20from,new%20behavior%20to%20become%20automatic.'>66 Source</a>
            </Default>

        )
    }
}

module.exports = New