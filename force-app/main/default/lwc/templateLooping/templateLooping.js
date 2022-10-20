import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
    countries =["İstanbul", "Adana", "İzmir", "Ankara","Bursa"];

    contacts = [
        {
            id:1,
            firstName: "Steve",
            lastName: "Jobs"
        },
        {
            id:2,
            firstName: "Taner",
            lastName: "Öz"
        }
    ];


}