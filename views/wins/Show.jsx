const React = require('react');
const Default = require('../layouts/Default.jsx');
const checkTF = require('../../ulilities/randomization')
const tidy = require('../../ulilities/tidy')
const bee = new checkTF ();




class Show extends React.Component {
   
    render(){
        const {success, satisfaction,challenge, firstWin, _id,longTerm, gratitude, comments, createdAt }= this.props.win

  
    
        return(<div className='show'>

        <Default title={` congratulations on this huge win`} win={this.props.win}>
            <h2>On this Day </h2>
            <h3>{createdAt.toLocaleDateString()}</h3> 
            <p className='cert'> i {tidy(success)}.
            {firstWin ? bee.randomize(bee.firstWinYes): bee.randomize(bee.firstWinYes)}
            {longTerm ?  bee.randomize(bee.longtermYes): bee.randomize(bee.longtermNo) }
            {satisfaction  ? bee.randomize(bee.satisfiedYes): bee.randomize(bee.satisfiedMeh)}
            {challenge ? bee.randomize(bee.challengeYes): bee.randomize(bee.challengeMeh)}
            {gratitude ? bee.randomize(bee.gratitudeYes): bee.randomize(bee.gratitudeMeh)}
            <form method="POST" action={`/wins/${_id}?_method=DELETE`}></form>
            </p>
        </Default>
        </div>)
   } 
}

module.exports = Show