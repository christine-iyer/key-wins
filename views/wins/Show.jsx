const React = require('react');
const Default = require('../layouts/Default.jsx');






class Show extends React.Component {
   
    render(){
        const {field1, field2,field3, field4, _id,field5} = this.props.win
        const capName = field1.toUpperCase() 
        const effectsName = field2.toLowerCase()
  




        
        
        // convertDate(Date){
        //     Date.moment().format('MMMM Do YYYY, h:mm:ss a');
        // }
    
        return(

        <Default title={`${field1} Show Page`} win={this.props.win}>
            <h2>{field1} is {field2} and according to data, it can make you feel {effectsName}. New thoughts? {field5} last edited ({new Date().toString()})</h2>
        </Default>
        )
   } 
}

module.exports = Show