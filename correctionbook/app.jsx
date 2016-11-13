if (Meteor.isClient) {
    Meteor.startup(function () {
        ReactDOM.render(<AppComponent />, document.getElementById("react-inject"));
    });
}

Questions = new Mongo.Collection("questions-Apr");
