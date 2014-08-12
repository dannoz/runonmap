/** @jsx React.DOM */
var React = require("react");
var RunList = require("./sidebar.jsx");
var Container = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
         <RunList />
        </div>
        <div className="col-md-8">
          Cool2
        </div>
      </div>
    );
  }
});



React.renderComponent(<Container />,
  document.getElementById('example')
);