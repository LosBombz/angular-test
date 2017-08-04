import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = true;
    serverCreationStatus: string = "no server was created";
    serverName: string = "untitled server";

    constructor() { }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = `server ${this.serverName} was created`;
    }

    onUpdateServerName(event: Event) {
        console.log((<HTMLInputElement>event.target).value);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
