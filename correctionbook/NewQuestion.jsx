NewQuestion = React.createClass({
    noChangeEmit() {
    if (this.refs.aChoice.value === "nc") {
        this.refs.aChoice.value = "NO CHANGE";
    }
    },
    submitEvent(evt) {
        evt.preventDefault();

        var question = {};
        question.title = this.refs.title.value;
        question.originalText = marked(this.refs.originalText.value, {
            sanitize: true
        });
        question.tag = this.refs.tag.value;
        question.aChoice = this.refs.aChoice.value;
        question.bChoice = this.refs.bChoice.value;
        question.cChoice = this.refs.cChoice.value;
        question.dChoice = this.refs.dChoice.value;
        question.correctChoice = this.refs.correctChoice.value;
        question.reason = marked(this.refs.reason.value, {
            sanitize: true
        });
        question.createdAt = Date.now();

        if (this.refs.checkDic.checked) {
            var letter = ['a', 'b', 'c', 'd'];
            for (var i = 0; i<=3; i++) {
                var appid = '20160225000013498';
                var key = 'Zr8kx_Rhqxpci0bNJ3EI';
                var salt = (new Date).getTime();
                var query = "hello";
                var from = 'en';
                var to = 'zh';
                var str1 = appid + query + salt +key;
                var sign = MD5(str1);
                $.ajax({
                    url: 'http://api.fanyi.baidu.com/api/trans/vip/translatea',
                    type: 'get',
                    dataType: 'jsonp',
                    data: {
                        q: query,
                        appid: appid,
                        salt: salt,
                        from: from,
                        to: to,
                        sign: sign
                    },
                    success: function (data) {
                        console.log(data);
                        if (data["trans_result"][0].dst !== data["trans_result"][0].src) {
                            var meaning = "A " + data["trans_result"][0].dst;
                            question.reason += meaning;

                        }
                    }
                });
            }
            Questions.insert(question);
            alert("inserted with auto search");
        } else {
            Questions.insert(question);
            alert("inserted");

        }


        this.refs.title.value = "";
        this.refs.originalText.value = "";
        this.refs.tag.value = "";
        this.refs.aChoice.value = "";
        this.refs.bChoice.value = "";
        this.refs.cChoice.value = "";
        this.refs.dChoice.value = "";
        this.refs.correctChoice.value = "";
        this.refs.reason.value = "";
        this.refs.title.focus();

    },
    render() {
        return (
            <div >
                <form onSubmit={this.submitEvent}>
                    <div className="form-group">
                        <label>Title</label>
                        <input ref="title" type="text" placeholder="title" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Original Text</label>
                        <textarea ref="originalText" placeholder="Original Text" className="form-control"></textarea>
                    </div>

                    <div className="form-group">
                        <label>Question Tag</label>
                        <textarea ref="tag" placeholder="Question tag" className="form-control"></textarea>
                    </div>

                    <div className="form-group">
                        <label>A. try typing nc for NO CHANGE</label>
                        <input ref="aChoice" type="text" placeholder="Choice A" className="form-control" onChange={this.noChangeEmit}></input>
                    </div>

                    <div className="form-group">
                        <label>B.</label>
                        <input ref="bChoice" type="text" placeholder="Choice B" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>C.</label>
                        <input ref="cChoice" type="text" placeholder="Choice C" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>D.</label>
                        <input ref="dChoice" type="text" placeholder="Choice D" className="form-control"></input>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" ref="checkDic"></input>
                                Auto dictionary search based on choices
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Correct Choice</label>
                        <input ref="correctChoice" type="text" placeholder="A, B, C, or D" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Reason</label>
                        <textarea ref="reason" placeholder="Reason" className="form-control"></textarea>
                    </div>

                    <input type="submit" className="btn btn-success" value="Submit"></input>
                </form>
            </div>
        )
    }
});
