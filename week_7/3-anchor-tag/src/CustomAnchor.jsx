// Import React and necessary components
import React from 'react';

// Define the custom component
class CustomAnchor extends React.Component {
  render() {
    // Props destructuring
    const { href, children } = this.props;

    // Return the anchor tag with provided href and children
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
}

// Export the custom component
export default CustomAnchor;

