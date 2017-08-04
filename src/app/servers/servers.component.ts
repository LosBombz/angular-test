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
    serverCreated: boolean = false;
    servers = ['Test server', 'Test server 2']

    constructor() {

    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = `server ${this.serverName} was created`;
    }

    onUpdateServerName(event: Event) {
        console.log((<HTMLInputElement>event.target).value);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
