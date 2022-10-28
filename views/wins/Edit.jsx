const React = require('react')
const Default = require('../layouts/Default.jsx')
const checkTF = require('../../ulilities/randomization')

class Edit extends React.Component {
    render(){
        const {success, satisfaction, challenge, firstWin, longTerm,gratitude,comments,_id, Date} = this.props.win
        return (
            <Default title={`${success} Edit Page`} win={this.props.win}>
                <form method="POST" action={`/wins/${_id}?_method=PUT`}>
                    success: <input type="text" name="success" defaultValue={success}></input><br/>
                    satisfaction: <input type="checkbox" name="satisfaction" defaultChecked={satisfaction}/> <br />
                    challenge: <input type="checkbox" name="challenge" defaultChecked={challenge}/> <br />
                    firstWin: <input type="checkbox" name="firstWin" defaultChecked={firstWin}/> <br />
                    longTerm: <input type="checkbox" name="longTerm" defaultChecked={longTerm}/> <br />
                    gratitude: <input type="checkbox" name="gratitude" defaultChecked={gratitude}/> <br />
                    comments: <input type="text" name="comments" defaultValue={comments}></input><br />
                    {/* Date: <input type="date" name="Date" defaultValue={Date}></input><br /> */}
                    
                    <input type="submit" value="Edit Win" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit