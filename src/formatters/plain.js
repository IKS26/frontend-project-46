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

const handleDeleted = (propertyPath) =>
  `Property '${propertyPath}' was removed`;
const handleAdded = (propertyPath, value) =>
  `Property '${propertyPath}' was added with value: ${stringifyValue(value)}`;
const handleModified = (propertyPath, oldValue, newValue) =>
  `Property '${propertyPath}' was updated. From ${stringifyValue(oldValue)} to ${stringifyValue(newValue)}`;
const handleNested = (iterate, children, propertyPath) =>
  iterate(children, propertyPath).join('\n');

const plain = (tree) => {
  const iterate = (nodes, parentPath = '') =>
    nodes
      .map((node) => {
        const { key, value, type, oldValue, newValue, children } = node;
        const propertyPath = parentPath ? `${parentPath}.${key}` : key;

        switch (type) {
          case 'deleted':
            return handleDeleted(propertyPath);
          case 'added':
            return handleAdded(propertyPath, value);
          case 'modified':
            return handleModified(propertyPath, oldValue, newValue);
          case 'nested':
            return handleNested(iterate, children, propertyPath);
          default:
            return null;
        }
      })
      .filter(Boolean);

  return iterate(tree).join('\n');
};

export default plain;
