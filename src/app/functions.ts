const withStyles = (stylesheet: Object, keys: Array | string): string => {
    let text = '';
  
    if (Array.isArray(keys)) {
      for (let index in keys) {
        const key = keys[index];
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
    withStyles
};