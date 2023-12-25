import { Component } from '@angular/core';
import { MerryChristmasDialogComponent } from '../merry-christmas-dialog/merry-christmas-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  // @ts-ignore
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(MerryChristmasDialogComponent, {
      width: '500px',
      height: '500px'
    });
  }
}
