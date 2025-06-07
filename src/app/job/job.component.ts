import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html'
})
export class JobComponent {
    @Input() title:string = '';
    @Input() entity:string = '';
    @Input() time:string = '';
    @Input() description:string = '';
}