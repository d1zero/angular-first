import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() card: Card;
    @Input() index: number;

    title: string;
    text: string;

    cardDate: Date = new Date();

    textColor: string;

    ngOnInit(): void {
    }

    changeTitle(): void {
        this.card.title = 'Title has been changed';
    }

    inputHandler(value): void {
        this.title = value;
    }

    changeHandler(): void {
        console.log(this.title);
    }
}
