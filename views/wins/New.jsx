const React = require('react')
const Default = require('../layouts/Default.jsx')
const checkTF = require('../../ulilities/randomization')
class New extends React.Component {
    render(){
        return (
            <Default title="Share Your Key-Win with Us">
 

            <form method="POST" action="/wins">
                Success: <input type="text" name="success" placeholder='use as few or as many words as you like to share your victory' className='success-box'></input><br/>
                satisfaction: <input type="checkbox" name="satisfaction" placeholder='satisfaction'></input><br/>
                challenge: <input type="checkbox" name="challenge"></input><br/>
                firstWin: <input type='checkbox' name='firstWin' /><br />
                longTerm: <input type='checkbox' name='longTerm' /><br />
                gratitude: <input type="checkbox" name="gratitude"></input><br/>
                <h3>In reflecting on this key-win, do you have any words to express what this could unlock for you? </h3>
                comments: <input type="text" name="comments"></input><br />
                {/* Date: <input type="date" name="Date"></input><br />  */}
                <input type="submit" value="Submit your Key-Win"></input>
            </form>
            </Default>

        )
    }
}

module.exports = New