AppComponent = React.createClass({
    getInitialState() {
        return {
            appState: "view",
            question: {},
            securePassed: document.cookie
        }
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            questions: Questions.find().fetch()
        }
    },
    changeToViewState() {
        this.setState({
            appState: "view"
        });
    },
    changeToEditState() {
        this.setState({
            appState: "edit"
        });
    },
    changeToTestState() {
       this.setState({
           appState: "test"
       });
    },
    render() {
        var menu = (
            <div className="menu">
                <button className="btn btn-sm" onClick={this.changeToViewState}>View</button>
                <button className="btn btn-sm" onClick={this.changeToEditState}>Edit</button>
                <button className="btn btn-sm" onClick={this.changeToTestState}>Test</button>
            </div>
        )
        if (this.state.appState==="edit") {
            if (this.state.securePassed === "user=true") {
            return (
                <div className="app">
                    <Header />
                    {menu}
                        <div className="container content">
                            <NewQuestion onEditEvent={this.handleDataChangePreview}/>
                        </div>
                </div>
            )
            } else {
                return (
                <div className="app">
                    <Header />
                    {menu}
                        <div className="container content">
                            <div className="alert alert-danger"><h3>Access Refrained due to authentication failure</h3></div>
                        </div>
                </div>)
            }
        } else if (this.state.appState==="view") {
            return (
                <div className="app">
                    <Header />
                    {menu}
                        <div className="container content">
                            {this.data.questions.map(function(question) {
                                return <QuestionView key={question._id} question={question} />
                            })
                            }
                        </div>

                </div>
            )
        } else if (this.state.appState === "test") {
            return (
                <div className="app">
                    <Header />
                    {menu}
                    <div className="container content">
                        {this.data.questions.map(function(question) {
                            return <TestView key={question._id} question={question} />
                        })}
                    </div>
                    }
                </div>
            )
        }

    }
});
