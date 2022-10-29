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
                <h1>
                        {title}
                    </h1>
                <body className={this.props.pageClass}>
                
                    <nav className='nav'>
                        <a href="/wins">Journal</a>
                        <a href="/wins/new">New Entry</a>
                        { win? <a href={`/wins/${win._id}/edit`}> Edit Page </a> : ''}
                        { win? <a href={`/wins/${win._id}`}>Show Page</a> : ''}
                    </nav>
                    
                    {this.props.children}
                </body>
            </html>

        )
    }
}

module.exports = Default