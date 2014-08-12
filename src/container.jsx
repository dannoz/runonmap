/** @jsx React.DOM */
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