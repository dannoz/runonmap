/** @jsx React.DOM */
var runDates = ["11/08/14", "05/08/14","01/08/14"];

var RunButton = React.createClass({
  getInitialState: function(){
    return {
      clicked : 0
    };
  },

  handleClick: function(){
    this.setState({likes: this.state.clicked +=1});
  },

  render: function(){
    return (
        <button onClick={this.handleClick}>{this.props.name}</button>
      )
  }

});



var RunList = React.createClass({
  
  render: function(){
    var runItems = this.props.runDates.map(function(dates){
        return <RunButton name ={dates} />
    });
    return (
        <ul>
          {runItems}
        </ul>
      )
  }
});


