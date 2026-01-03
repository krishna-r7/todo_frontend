// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI renders
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging or send to a tracking service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    // Reset error state to retry rendering children
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    const { error, errorInfo } = this.state;

    if (error) {
      return (
        <div
          style={{
            padding: '2rem',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            // backgroundColor: '#fef2f2',
            color: '#b91c1c',
            borderRadius: '8px',
          }}
        >
          <h2>⚠️ Oops! Something went wrong.</h2>
          <p>{error.message}</p>

          {process.env.NODE_ENV === 'development' && errorInfo && (
            <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', marginTop: '1rem' }}>
              {errorInfo.componentStack}
            </details>
          )}

          <button
            onClick={this.handleReset}
            style={{
              marginTop: '1.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#14b8a6',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
