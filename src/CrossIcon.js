'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class CrossIcon extends Component {
  getCrossStyle(type) {
    return {
      position: 'absolute',
      width: 3,
      height: 14,
      transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
    };
  }

  render() {
    var icon;

    if (this.props.customIcon) {
      let extraProps = {
        className: classNames(this.props.customIcon.props.className, 'bm-cross')
      };
      icon = React.cloneElement(this.props.customIcon, extraProps);
    } else {
      icon = (
        <span style={{ position: 'absolute', top: '6px', right: '14px' }}>
          {['before', 'after'].map((type, i) => (
            <span
              key={i}
              className={`bm-cross ${this.props.crossClassName}`.trim()}
              style={{
                ...this.getCrossStyle(type),
                ...this.props.styles.bmCross
              }}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`bm-cross-button ${this.props.className}`.trim()}
        onClick={this.props.onClick}
      >
        {icon}
      </div>
    );
  }
}

CrossIcon.propTypes = {
  crossClassName: PropTypes.string,
  customIcon: PropTypes.element,
  styles: PropTypes.object
};

CrossIcon.defaultProps = {
  crossClassName: '',
  className: '',
  styles: {}
};
