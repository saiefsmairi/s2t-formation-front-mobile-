import { SessionMenuPage } from './../session-menu/session-menu.page';
import { SessionService } from './../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfPreviewDialogComponentComponent } from 'src/app/components/pdf-preview-dialog-component/pdf-preview-dialog-component.component';
import { PopoverController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  listeDocuments: any;
  listeApprenantsInscrits: any;
  private sub: any;
id: any;
sessionname;
pdfSrc: any;
  constructor(public popoverController: PopoverController, private route: ActivatedRoute,
              private sessionService: SessionService, public modalController: ModalController,
              private file: File,
              private fileOpener: FileOpener,) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;


   });
   }


   async OpenReclamerEvaluerMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: SessionMenuPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        id: this.id
        }
    });
    return await popover.present();
  }

   async presentModal(id) {

    const modal = await this.modalController.create({
      component: PdfPreviewDialogComponentComponent,
      cssClass: 'my-custom-class',
      componentProps: {
      id
      }
    });




    return await modal.present();
  }


  ngOnInit() {

    this.sessionService.getSessionByid(this.id).subscribe(data => {
this.sessionname = data.theme;
    });
    this.loadData();
  }

  loadData() {
    this.sessionService.getSessionInfo(this.id, 'formateur').subscribe(data => {
      console.log(data);
      this.listeDocuments = data.documents;
      this.listeApprenantsInscrits = data.apprenants;
    });
  }


  openPDFFile(cours){
    this.file.createFile(this.file.externalRootDirectory, cours.filename, true).then((response) => {
       console.log('file created', response);

       const byteCharacters = atob(cours.file);
       const byteNumbers = new Array(byteCharacters.length);
       for (let i = 0; i < byteCharacters.length; i++) {
           byteNumbers[i] = byteCharacters.charCodeAt(i);
       }

       const byteArray = new Uint8Array(byteNumbers);
       const blob = new Blob([byteArray], {type: 'application/pdf'});

       this.file.writeExistingFile(this.file.externalRootDirectory, cours.filename, blob).then((response) => {
         console.log('successfully wrote to file', response);
         this.fileOpener.open(this.file.externalRootDirectory + cours.filename, 'application/pdf').then((response) => {
           console.log('opened PDF file successfully', response);
         }).catch((err) => {
             console.log('error in opening pdf file', err);
         });
       }).catch((err) => {
         console.log('error writing to file', err);
       });

    }).catch((err) => {
       console.log('Error creating file', err);
    });
 }



}
