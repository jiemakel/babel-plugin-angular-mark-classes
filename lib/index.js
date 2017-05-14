exports.__esModule = true;
exports.definitions = undefined;

exports.default = function (_ref) {
  var t = _ref.types;
  return {
    visitor: {
      ClassDeclaration: function ClassDeclaration(path) {
        var node = path.node;
        var self = t.identifier(node.id.name);
        var prop = t.memberExpression(self, t.identifier('$$ngIsClass'));
        var assignment = t.assignmentExpression('=', prop, t.booleanLiteral(true));
        var expression = t.expressionStatement(assignment)
        if (t.isExportNamedDeclaration(path.parent))
          path.parentPath.insertAfter(expression);
        else
          path.insertAfter(expression)
      }
    }
  };
};

module.exports = exports["default"];
