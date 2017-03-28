import { Injectable } from '@angular/core';

import { Notebook } from './notebook';
import { NOTEBOOKS } from './mock-notebooks';

@Injectable ()
export class NotebooksService {
	getNotebooks(): Promise<Notebook[]> {
		return Promise.resolve(NOTEBOOKS);
	}
        
    create(notebookName: string) {
        let notebook: Notebook = {notebookId: NOTEBOOKS.length + 1, notebookName: notebookName, noteSet: []};
        NOTEBOOKS.push(notebook);
    }
}