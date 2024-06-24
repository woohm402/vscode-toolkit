import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import { componentTemplate, cssTemplate, presenterTemplate } from './templates';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('createComponent', async (uri) => {
    const fp = uri.fsPath;
    const componentName = await vscode.window.showInputBox({
      placeHolder: 'Enter Component Name',
      validateInput: (value: string) => {
        if (!value) {
          return "Component Name Can't be Empty!";
        }
        return undefined;
      },
    });

    if (componentName) {
      const componentPath = path.join(fp, componentName);

      if (!fs.existsSync(componentPath)) {
        fs.mkdirSync(componentPath);

        fs.writeFileSync(path.join(componentPath, 'index.tsx'), componentTemplate(componentName));
        fs.writeFileSync(path.join(componentPath, 'index.module.css'), cssTemplate());
        fs.writeFileSync(path.join(componentPath, 'index.presenter.ts'), presenterTemplate(componentName));

        vscode.window.showInformationMessage(`Component Created!`);
      } else {
        vscode.window.showInformationMessage(`Component already Exist`);
      }
    }
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
