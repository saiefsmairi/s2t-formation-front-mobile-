import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-pdf-preview-dialog-component',
  templateUrl: './pdf-preview-dialog-component.component.html',
  styleUrls: ['./pdf-preview-dialog-component.component.scss'],
})
export class PdfPreviewDialogComponentComponent implements OnInit {
  @Input() id: string;
  pdfSrc:any;
file:any;

  constructor(private modalController: ModalController,private sessionService:SessionService) { }

  ngOnInit() {

   
  this.sessionService.getSupportCours(this.id).subscribe(res => {
  this.pdfSrc ='data:application/pdf;base64,'+res.file;




console.log(this.pdfSrc)
      })
  }
  dismiss() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
