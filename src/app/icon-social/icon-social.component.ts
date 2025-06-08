import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-icon-social',
    template: `
        <a href={{href}} target="_blank" class="text-white bg-slate-800 max-w-max py-1 px-2 border border-slate-500 rounded-xl hover:bg-white hover:text-black hover:cursor-pointer">{{name}}</a>
    `
})
export class IconSocialComponent {
    @Input() name:string = '';
    @Input() href:string = '';
}