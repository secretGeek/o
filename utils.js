/* ####################### */
/* ####################### */
/* ## utility functions ## */
/* ####################### */
/*    #################    */
/*       ###########       */
/*          #####          */
/*            #            */
function $(selector) {
  return document.querySelectorAll(selector);
}

function $id(id) {
  return document.getElementById(id);
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
// add the class of className to all elements that match the selector
function addClass(selector, className) {
  for (var _i = 0, _a = $(selector); _i < _a.length; _i++) {
    var example = _a[_i];
    example.classList.add(className);
  }
} // remove the class className from all elements that match the selector

function removeClass(selector, className) {
  for (var _i = 0, _a = $(selector); _i < _a.length; _i++) {
    var example = _a[_i];
    example.classList.remove(className);
  }
}
// remove the class of className from all elements that have a class of className
function removeAllClass(className) {
  for (var _i = 0, _a = $("." + className); _i < _a.length; _i++) {
    var example = _a[_i];
    example.classList.remove(className);
  }
}
// true if the element has
// a class name starting with prefix,
// eg. has(el, 'lang-') -- do any classes start with lang- ?
function hasClassWithPrefix(element, prefix) {
  for (var c of element.classList) {
    if (c.indexOf(prefix) == 0) return true;
  }
  return false;
}

function htmlToElement(html) {
  var template = document.createElement(template);
  html = html.trim();
  // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

/*            #            */
/*          #####          */
/*       ###########       */
/*    #################    */
/* ####################### */
/* ## utility functions ## */
/* ####################### */
/* ####################### */
