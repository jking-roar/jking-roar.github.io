/*global define, window*/

define(['react'], function (React) {
    return React.createClass({
        getInitialState: function () {
            return {time: "Now"}
        },
        updateTime: function () {
            this.setState({time: "<em>"+new Date() + "<em>"});
        },
        componentDidMount: function () {
            window.setInterval(this.updateTime, 100);
        },
        render: function () {
            return <div> Time is <span dangerouslySetInnerHTML={{__html: this.state.time}} /></div>;
        }
    });
});