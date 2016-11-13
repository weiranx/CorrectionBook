QuestionView = React.createClass({
    deleteQuestion() {
        Questions.remove({_id: this.props.question._id+""});
    },

    render() {
        var {title, originalText, tag, aChoice, bChoice, cChoice, dChoice, correctChoice, reason, _id} = this.props.question;
        var titleDisplay;
            if (title) {
                titleDisplay= <p><strong>Title:</strong> {title}</p>
            }
        return (
            <div className="QuestionView">
                <p><strong>Original Text:</strong> <span dangerouslySetInnerHTML={{__html: originalText}} /></p>
                {titleDisplay}
                <p><strong>Question Type:</strong> {tag}</p>
                <p><strong>A.</strong> {aChoice}</p>
                <p><strong>B.</strong> {bChoice}</p>
                <p><strong>C.</strong> {cChoice}</p>
                <p><strong>D.</strong> {dChoice}</p>
                <p><strong>Correct Choice</strong> {correctChoice}</p>
                <p><strong>Reason:</strong> <span dangerouslySetInnerHTML={{__html: reason}} /> </p>
                <p className="deEmphasize">QuestionID: {_id}</p>
            </div>
        )
    }
});