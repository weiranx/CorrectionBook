TestView = React.createClass({
    getInitialState() {
        return {

        }
    },
    render() {
        var {title, originalText, tag, aChoice, bChoice, cChoice, dChoice, correctChoice, reason, _id} = this.props.question;
        var titleDisplay;
        if (title) {
            titleDisplay= <p><strong>Title:</strong> {title}</p>
        }
        return (
            <div className="TestView">
                <p><strong>Original Text:</strong> <span dangerouslySetInnerHTML={{__html: originalText}} /></p>
                {titleDisplay}
                <form className="TestForm">
                    <p><input type="radio" ref="aChoice"> <b>A.</b> {aChoice}</input></p>
                    <p><input type="radio" ref="bChoice"> <b>B.</b> {bChoice}</input></p>
                    <p><input type="radio" ref="cChoice"> <b>C.</b> {cChoice}</input></p>
                    <p><input type="radio" ref="dChoice"> <b>D.</b> {dChoice}</input></p>
                </form>
            </div>
        )
    }
});