const withStyles = (
  stylesheet: {[key:string] : any},
  keys: Array<string> | string,
): string => {
  let text = '';
  let changedKeys = keys;

  if (typeof keys === 'string') {
    changedKeys = keys.split(' ');
  }
  
  if (Array.isArray(changedKeys)) {
    for (let index in changedKeys) {
      const key:string = changedKeys[index];
      
      if (stylesheet[key]) {
        text = `${text} ${stylesheet[key]}`;
      }
    }
  } else {
    const styleName = stylesheet[keys as keyof typeof stylesheet];
    if (styleName) {
      text = `${styleName}`;
    }
  }

  return text.trim();
};

const usingStyles = (styles: Object): Function => {
  return (classes: string | Array<string>) => {
    let newClasses: Array<string> = [];
    if (typeof classes === 'string') {
      newClasses = classes.split(' ');
    } else if (Array.isArray(classes)) {
      newClasses = classes;
    }
    return withStyles(styles, newClasses);
  };
};

const isMobileView = () : boolean => {
  let val : number = window.outerWidth;
  return val < 600;
}

const didClickedInside = (event:Event, targetElement:HTMLElement) : boolean => {
  const has = event.composedPath().includes(targetElement)
  return has;
}

export default {
  withStyles,
  usingStyles,
  isMobileView,
  didClickedInside
};
