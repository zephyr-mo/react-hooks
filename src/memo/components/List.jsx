import React from 'react';

export default function List (props) {
    const {
      label, children, className = ''
    } = props;

    return (
      <ul className={className}>
        <li className="list-item text-small">{label}</li>
        <li className="list-item">{children}</li>
      </ul>
    );
}