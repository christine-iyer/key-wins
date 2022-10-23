const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Log Entry">
            <form method="POST" action="/wins">
                field1: <input type="text" name="field1" placeholder='field1'></input><br/>
                field2: <input type="text" name="field2" placeholder='field2'></input><br/>
                field3: <input type="number" name="field3"></input><br/>
                field4: <input type="text" name="field4" placeholder='field4'></input><br/>
                field5: <input type="text" name="field5" placeholder='Type'></input><br/>
                field6: <input type="text" name="field6"></input><br/>
                field7: <input type="text" name="field7"></input><br />
                Date: <input type="date" name="Date"></input><br /> 
                <input type="submit" value="Submit Strain"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New