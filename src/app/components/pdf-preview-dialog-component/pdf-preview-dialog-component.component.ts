import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-pdf-preview-dialog-component',
  templateUrl: './pdf-preview-dialog-component.component.html',
  styleUrls: ['./pdf-preview-dialog-component.component.scss'],
})
export class PdfPreviewDialogComponentComponent implements OnInit {
  @Input() id: any;

  pdfSrc: any;

  urlSafe: SafeResourceUrl;
viewr;
  opener: any;
  constructor(
    private base64: Base64,
    public sanitizer: DomSanitizer,
    private modalController: ModalController,
    private sessionService: SessionService,
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform,
    private documentViewer: DocumentViewer

  ) {}

  ngOnInit() {
     this.sessionService.getSupportCours(this.id).subscribe((res) => {
       console.log(res);
       this.pdfSrc = res.file;
       
      // this.showDocument(document,this.base64ToArrayBuffer(this.pdfSrc));
  });
  this.openPDFFile();
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



  openPDFFile(){
     this.file.createFile(this.file.externalRootDirectory,'test.pdf',true).then((response) => {
        console.log('file created',response);

        const byteCharacters = atob(this.pdfSrc);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: 'application/pdf'});

        this.file.writeExistingFile(this.file.externalRootDirectory,'test.pdf',blob).then((response) => {
          console.log('successfully wrote to file',response);
          this.fileOpener.open(this.file.externalRootDirectory + 'test.pdf','application/pdf').then((response) => {
            console.log('opened PDF file successfully',response);
          }).catch((err) => {
              console.log('error in opening pdf file',err);
          });
        }).catch((err) => {
          console.log('error writing to file',err);
        });       

     }).catch((err) => {
        console.log('Error creating file',err);
     });
  }







  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
