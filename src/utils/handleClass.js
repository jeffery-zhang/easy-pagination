export function hasClass(ele, name) {
  return !!ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
}

export function addClass(ele, name) {
  if (!hasClass(ele, name)) {
    ele.className += ' ' + name;
  }
}

export function removeClass(ele, name) {
  if (hasClass(ele, name)) {
    ele.className = ele.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ');
  }
}
