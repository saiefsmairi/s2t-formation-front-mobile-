import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64/ngx';


@Component({
  selector: 'app-pdf-preview-dialog-component',
  templateUrl: './pdf-preview-dialog-component.component.html',
  styleUrls: ['./pdf-preview-dialog-component.component.scss'],
})
export class PdfPreviewDialogComponentComponent implements OnInit {
  @Input() id: string;
  pdfSrc: any;

  urlSafe: SafeResourceUrl;
viewr;
  constructor(
    private base64: Base64,
    public sanitizer: DomSanitizer,
    private modalController: ModalController,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.sessionService.getSupportCours(this.id).subscribe((res) => {
      this.pdfSrc = 'data:application/pdf;base64,' + res.file;

      this.viewr =  this.base64ToArrayBuffer(this.pdfSrc);

      const filePath = this.viewr;
 
      

      console.log(this.viewr);
    });
  }

  base64ToArrayBuffer(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}




  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
