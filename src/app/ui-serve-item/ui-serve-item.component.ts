import { Component, OnInit, Input } from '@angular/core';
import { ServeItem } from '../game/serve-item';

@Component({
  selector: 'app-ui-serve-item',
  templateUrl: './ui-serve-item.component.html',
  styleUrls: ['./ui-serve-item.component.css']
})
export class UiServeItemComponent implements OnInit {
  @Input()
  serveItem: ServeItem;

  constructor() { }

  ngOnInit(): void {
  }

}
