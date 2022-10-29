const React = require('react');
const Default = require('../layouts/Default.jsx');
const checkTF = require('../../ulilities/randomization')
const bee = new checkTF ();




class Show extends React.Component {
   
    render(){
        const {success, satisfaction,challenge, firstWin, _id,longTerm, gratitude, comments, createdAt }= this.props.win

  
    
        return(<div className='show'>

        <Default title={` Certificate of Congratulations`} win={this.props.win}>
            <h2>Bring it!</h2>
            <h3>On {createdAt.toLocaleDateString()} {createdAt.toLocaleTimeString()}</h3> 
            <p> I {success}.
            {firstWin ? bee.randomize(bee.firstWinYes): bee.randomize(bee.firstWinYes)}
            {longTerm ?  bee.randomize(bee.longtermYes): bee.randomize(bee.longtermNo) }
            {satisfaction  ? bee.randomize(bee.satisfiedYes): bee.randomize(bee.satisfiedMeh)}
            {challenge ? bee.randomize(bee.challengeYes): bee.randomize(bee.challengeMeh)}
            {gratitude ? bee.randomize(bee.gratitudeYes): bee.randomize(bee.gratitudeMeh)}</p>
        </Default>
        </div>)
   } 
}

module.exports = Show