var Hero = React.createClass({

	getInitialState: function() {
        return {
            count: 0
        };
    },

    handleClick: function () {
        this.setState({ count: this.state.count + 1 });
    },

	render: function() {
		return (
			<section className="wrap-hello">
			    <h1><span className="count">{this.state.count}</span>{this.props.title}</h1>
			    <h3>{this.props.from}</h3>
			    <img src={this.props.imgUrl} onClick={this.handelClick} />
			</section>
		);
	}
});

ReactDOM.render(
	<div>
		<Hero
			title="Hello, World!"
			from="React"
			imgUrl="img/react.png"
		/>
		<Hero
			title="Hello, World!"
			from="Angular"
			imgUrl="img/angular.png"
		/>
	</div>,
	document.getElementById('context')
);