const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {field1, field2, field3, field4, field5,field6,field7,_id, Date} = this.props.win
        return (
            <Default title={`${field1} Edit Page`} fruit={this.props.win}>
                <form method="POST" action={`/wins/${_id}?_method=PUT`}>
                    field1: <input type="text" name="field1" defaultValue={field1}></input><br/>
                    field2: <input type="text" name="field2" defaultValue={field2}></input><br />
                    field3: <input type="number" name="field3" defaultValue={field3}></input><br/>
                    field4: <input type="text" name="field4" defaultValue={field4}></input><br />
                    field5: <input type="text" name="field5" defaultValue={field5}></input><br/>
                    field6: <input type="text" name="field6" defaultValue={field6}></input><br />
                    field7: <input type="text" name="field7" defaultValue={field7}></input><br />
                    Date: <input type="date" name="Date" defaultValue={Date}></input><br />
                    
                    <input type="submit" value="Edit Win" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit