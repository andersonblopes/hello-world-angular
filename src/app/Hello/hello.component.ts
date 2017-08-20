import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    template: '<h2> Hello {{pessoa}}</h2>'
})


export class HelloComponent {

    pessoa = 'Lopes';

}