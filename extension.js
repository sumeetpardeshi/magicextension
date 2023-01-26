// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');
const { fetchOpenAI } = require('./openai');
const { openaiKey } = require("./config");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "magicextension" is now active!');
	

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('magicextension.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from MagicExtension!');
	});


	let didChange= vscode.workspace.onDidChangeTextDocument(e=>{
		console.log(e.document.getText());
	})

	const reverseWord = vscode.commands.registerCommand('magicextension.reverseWord', function() {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const reversed = word.split('').reverse().join('');
			editor.edit(editBuilder => {
				editBuilder.replace(selection, reversed);
			});
		}
	});


	const fetchData = async (selection)=> {
		console.log("selection", selection)
		//vscode.window.showWarningMessage('Fetching Code....');
		vscode.window.setStatusBarMessage('Fetching Code....',5000);
		const choices = await fetchOpenAI(selection);
		// const res = await axios.get('https://api.publicapis.org/entries');
		
		vscode.window.showInformationMessage(`Done Generating!`);
		return choices 
	}
	const generateComponent = vscode.commands.registerCommand('magicextension.generateComponent', async function(){
	
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			

			// Get the text within the selection
			const text = document.getText(selection);

			if(text){

			const data =  await fetchData(text);
			
			editor.edit(editBuilder => {
				editBuilder.replace(selection, data[0].text);
			});
		}
		}
	
		

	});

	context.subscriptions.push(reverseWord);
	context.subscriptions.push(disposable);
	context.subscriptions.push(didChange);
	context.subscriptions.push(generateComponent);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
