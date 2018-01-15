'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class BurgerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  getLineStyle(index) {
    return {
      position: 'absolute',
      height: '20%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: this.state.hover ? 0.6 : 1
    };
  }

  render() {
    let icon;
    let buttonStyle = {
      position: 'absolute',
      left: '20px',
      top: '20px',
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: 8,
      cursor: 'pointer'
    };

    if (this.props.customIcon) {
      let extraProps = {
        className: classNames(
          this.props.customIcon.props.className,
          'bm-burger-bars'
        )
      };
      icon = React.cloneElement(this.props.customIcon, extraProps);
    } else {
      icon = (
        <span>
          {[0, 1, 2].map(bar => (
            <span
              key={bar}
              className={`bm-burger-bars ${this.props.barClassName}`.trim()}
              style={{
                ...this.getLineStyle(bar),
                ...this.props.styles.bmBurgerBars
              }}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`bm-burger-button ${this.props.className}`.trim()}
        onClick={this.props.onClick}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
        style={{ ...{ zIndex: 1000 }, ...buttonStyle }}
      >
        {icon}
      </div>
    );
  }
}

BurgerIcon.propTypes = {
  barClassName: PropTypes.string,
  customIcon: PropTypes.element,
  styles: PropTypes.object
};

BurgerIcon.defaultProps = {
  barClassName: '',
  className: '',
  styles: {}
};
