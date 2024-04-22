import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("Error Boundary caught an error:", error, info);
    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
      // You can render a custom error message or UI here
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
