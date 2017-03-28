import { Component } from '@angular/core';

@Component({
	selector: 'text',
	template: `
		<div class="well">
			<form>
				<textarea class="form-control">
					{{text}}
				</textarea>
			</form>
		</div>
		<div>
			<button type="button" class="btn btn-primary btn-block">Save</button>
		</div>
	`
})
export class TextComponent {
	text: string;

	setText(text: string) {
		this.text = text;
	}

	clean() {
		this.text = "";
	}
}