const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Share Your Key-Win with Us">
 

            <form method="POST" action="/wins">
                success: <input type="text" name="success" placeholder='success'></input><br/>
                satisfaction: <input type="checkbox" name="satisfaction" placeholder='satisfaction'></input><br/>
                challenge: <input type="checkbox" name="challenge"></input><br/>
                firstWin: <input type='checkbox' name='firstWin' /><br />
                longTerm: <input type='checkbox' name='longTerm' /><br />
                gratitude: <input type="checkbox" name="gratitude"></input><br/>
                comments: <input type="text" name="comments"></input><br />
                Date: <input type="date" name="Date"></input><br /> 
                <input type="submit" value="Submit your Key-Win"></input>
            </form>
            </Default>

        )
    }
}

module.exports = New