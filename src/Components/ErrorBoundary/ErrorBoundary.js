import React from 'react';
import OopsImg from '../../Assets/trust.png';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pathname !== this.props.pathname) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <img src={OopsImg} alt='oopsImg' className='w-100' />
          <h2 className='text-center'>
            {this.props.message || "We're sorry, something went wrong. Please try again later."}
          </h2>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
