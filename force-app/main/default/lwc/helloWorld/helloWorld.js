import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name; //undefined
    age = 25;
    fullName = 'Salesforce LWC';
    check = true;

    detail ={
        name: "dummy",
        place: "Türkiye"
    };

    birds = ["sparrow", "crow", "peacock"];

}