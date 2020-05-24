import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

class AutocompleteInput extends Component {
  static propTypes = {
    // You shouldn't change the proptypes!
    address: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  state = {
    loading: false,
    search: "",
    results: []
  };

  componentDidMount() {
    const { address } = this.props;

    if (address)
      this.setState({
        results: [address]
      });
  }

  handleChange = e => {
    const newState = {
      loading: true,
      search: e.target.value
    };

    this.setState(newState);

    setTimeout(async () => {
      // TODO: Implement server call, also make sure to debounce this function,
      // this needs to scale well

      this.setState({
        ...newState,
        loading: false,
        results: []
      });
    }, 2000);
  };

  render() {
    const { search, loading } = this.state;

    return (
      <div class="container">
        <div class="row">
          <Input
            value={search}
            loading={loading}
            onChange={this.handleChange}
          />

          <ul>
            <li>hardcoded address 1</li>
            <li>hardcoded address 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AutocompleteInput;
