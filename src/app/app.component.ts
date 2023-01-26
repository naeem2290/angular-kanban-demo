import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CardsStepsComponent } from './cards-steps/cards-steps.component';
import { ticketService } from 'src/services/ticketService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular-Project';
  public cardData: any = [];

  constructor(public dialog: MatDialog, public ticketService: ticketService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.ticketService.getCards().subscribe((data: any) => {
      this.cardData = data;
    })
  }

  clickOnCard(item: any): void {
    this.openDialog(item)
  }

  openDialog(item? : any): void {
    const dialogRef = this.dialog.open(CardsStepsComponent, {
      width: '40%',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result?.event == 'submit') {
        this.ngOnInit();
      }
    });
  }

}
