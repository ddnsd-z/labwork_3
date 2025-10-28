exports.activate = function(context) {
    const vscode = require('vscode');

    context.subscriptions.push(
        vscode.commands.registerCommand('myplugin.hello', function() {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                editor.edit(e => {
                    e.insert(editor.selection.active, "Hello! ");
                });
            }
        })
    );
};

exports.deactivate = function() {};
