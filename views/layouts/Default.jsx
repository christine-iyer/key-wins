const React = require('react');

class Default extends React.Component {
    render(){
        const {win, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/wins">Go to Home Page For Log Entries</a>
                        <a href="/wins/new">Create a New Log Entry</a>
                        { win? <a href={`/wins/${win._id}/edit`}> {win.field1} Edit Page </a> : ''}
                        { win? <a href={`/wins/${win._id}`}>{win.field1} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default