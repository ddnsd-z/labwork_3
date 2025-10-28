exports.activate = function(context) {
    context.subscriptions.push(
        require('vscode').commands.registerCommand('myplugin.hello', function() {
            let editor = require('vscode').window.activeTextEditor;
            if (editor) {
                editor.edit(function(e) {
                    e.insert(editor.selection.active, "hello ");
                });
            }
        })
    );
};