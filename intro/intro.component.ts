import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent{

    status = 'Resting';

    changeit = () => {
        this.status = "Fetch Data Initiated, please be around...";
    }
}