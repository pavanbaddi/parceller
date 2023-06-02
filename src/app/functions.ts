const withStyles = (stylesheet: Object, keys: Array | string): string => {
  let text = '';
  let changedKeys = keys;

  if (typeof keys === 'string') {
    changedKeys = keys.split(' ');
  }

  if (Array.isArray(changedKeys)) {
    for (let index in changedKeys) {
      const key = changedKeys[index];
      const styleName = stylesheet[key];

      if (styleName) {
        text = `${text} ${styleName}`;
      }
    }
  } else {
    const styleName = stylesheet[keys];
    if (styleName) {
      text = `${styleName}`;
    }
  }

  return text;
};

export default {
  withStyles,
};
