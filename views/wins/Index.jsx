const React = require('react');
const Default = require('../layouts/Default.jsx')
const checkTF = require('../../ulilities/randomization')
const bee = new checkTF ();

var emoji = require('node-emoji');
const key = require('../../ulilities/emoji.js');



class Index extends React.Component {
    render() {
        const { wins } = this.props
        return (

            <Default title="My Key Wins" pageClass='index'>
                <ul>
                    {
                        wins.map((win) => {
                            const { success, satisfaction, challenge, firstWin, longTerm, gratitude, comments, _id, createdAt } = win
                            return (
                                <li key={_id}>
                                    <a href={`/wins/${_id}`}>
                                    🍭🍬🎉🎊🥳 </a>
                                    <p> {createdAt.toLocaleDateString()} {createdAt.toLocaleTimeString()} <br />
                                        I {success}.
                                        {firstWin ? bee.randomize(bee.firstWinYes): bee.randomize(bee.firstWinYes)}
                                        {longTerm ?  bee.randomize(bee.longtermYes): bee.randomize(bee.longtermNo) }
                                        {satisfaction  ? bee.randomize(bee.satisfiedYes): bee.randomize(bee.satisfiedMeh)}
                                        {challenge ? bee.randomize(bee.challengeYes): bee.randomize(bee.challengeMeh)}
                                        {gratitude ? bee.randomize(bee.gratitudeYes): bee.randomize(bee.gratitudeMeh)}
                                        
                                    </p>
                                    <form method="POST" action={`/wins/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`✂️ 🥇 `} />
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