import * as React from 'react';
//import classNames from 'classnames';

const Tree = ({ data }) => {
  const renderNode = (node, level) => {
    const hasChildren = node.children && node.children.length > 0;
    const keys = Object.keys(node);

    const isOpen = hasChildren ? node.isOpen : true;

    const nodeClass = hasChildren
      ? {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: `${4 * (level * 2)}px`,
        }
      : { marginLeft: `${4 * (level * 2)}px` };

    return (
      <div key={node.name}>
        <div style={nodeClass}>{node.name}</div>
        {hasChildren &&
          isOpen &&
          node.children.map((child) => renderNode(child, level + 1))}
      </div>
    );
  };

  return <div>{renderNode(data, 0)}</div>;
};

export default Tree;
