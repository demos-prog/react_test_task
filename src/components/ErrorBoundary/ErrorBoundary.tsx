import React, { Component, ReactNode } from 'react';
import css from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={css.wrapper}>
          <h2>Something went wrong.</h2>
          <br />
          {this.state.error && <h2>{this.state.error.toString()}</h2>}
          <br />
          {this.state.errorInfo?.componentStack}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
