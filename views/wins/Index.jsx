const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {wins} = this.props
        return(
            <Default title="Log Entries Index Page">
                <ul>
                    {
                        wins.map((win) => {
                            const {field1, field2, field3, field4, field5,field6,field7,_id,Date} = win
                            return (
                                <li key={_id}>
                                    <a href={`/wins/${_id}`}>
                                    {field1} ({field2.charAt(0).toUpperCase()})</a>
                                    
                                     <br/>
                                    
                                    <form method="POST" action={`/wins/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${field1}, a ${field2}??? Really?`}/>
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