import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-item-technology',
    template: `
        <p class="capitalize py-1 px-2 bg-slate-800 border border-slate-500 rounded-sm">{{name}}</p>
    `
})
export class ItemTechnologyComponent {
    @Input() name:string = '';
}