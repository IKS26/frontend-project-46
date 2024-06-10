import _ from 'lodash';

const stringifyValue = (value) => {
  if (value === null) {
    return 'null';
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (tree) => {
  const iterate = (nodes, parentPath = '') =>
    nodes
      .map((node) => {
        const { key, value, type, oldValue, newValue, children } = node;
        const propertyPath = parentPath ? `${parentPath}.${key}` : key;
        switch (type) {
          case 'deleted':
            return `Property '${propertyPath}' was removed`;
          case 'added':
            return `Property '${propertyPath}' was added with value: ${stringifyValue(value)}`;
          case 'modified':
            return `Property '${propertyPath}' was updated. From ${stringifyValue(oldValue)} to ${stringifyValue(newValue)}`;
          case 'nested':
            return iterate(children, propertyPath).join('\n');
          default:
            return null;
        }
      })
      .filter(Boolean);

  return iterate(tree).join('\n');
};

export default plain;
