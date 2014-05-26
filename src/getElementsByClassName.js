// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var getElements = function(node) {
    
    var nodeClass = node.classList;
    if (nodeClass !== undefined) {
      for (var i = 0; i < nodeClass.length; i++) {
        if (nodeClass[i] === className) {
          results.push(node);
        }
      }
    }
    
    var nodes = node.childNodes;
    if (nodes !== undefined && 0 < nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        getElements(nodes[i]);
      }
    }
  };

  var results = [];
  $(document).ready(function() {
    getElements(document.body);
  });
  return results;
};
