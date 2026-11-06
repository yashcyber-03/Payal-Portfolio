import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-paper-subtle border border-rule m-6 font-mono text-xs text-ink">
          <span className="text-[10px] text-accent uppercase tracking-wider block mb-2">
            // RUNTIME BOUNDARY EXCEPTION
          </span>
          <h3 className="font-serif text-2xl text-ink mb-2">Component Failed to Render</h3>
          <p className="font-sans text-xs text-ink-muted mb-4 max-w-md mx-auto">
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="py-2 px-5 bg-ink text-paper hover:bg-ink-deep text-xs uppercase tracking-wider transition-colors"
          >
            [RETRY COMPONENT]
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
