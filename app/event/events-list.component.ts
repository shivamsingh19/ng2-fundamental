import {Component} from "@angular/core";

@Component({
    selector: 'event-list',
    template: `<div>
        <h1>Upcoming angular event </h1>
        <hr/>
        <h1>{{event.name}}</h1>
    </div>`
})
export class EventsListComponent{
    event = {
        id: 1,
        name: 'Angular app',
        data: '9/11/2035',
        time: '10:00',
        price: 500,
        img: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}