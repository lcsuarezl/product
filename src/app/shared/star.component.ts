import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StartComponent implements OnChanges {

  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  @Input() rating: number;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  //@Output() notify: EventEmitter<string> = new EventEmitter<string>();


  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
