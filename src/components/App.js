import React from "react";
class ResourcesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcesList: "Posts",
    };
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resourcesList: "Posts" })}>
            Posts
          </button>
          <button onClick={() => this.setState({ resourcesList: "Todos" })}>
            Todos
          </button>
        </div>
        {this.state.resourcesList}
      </div>
    );
  }
}
export default ResourcesList;
