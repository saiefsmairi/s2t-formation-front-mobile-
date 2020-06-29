import { SessionMenuPage } from './../session-menu/session-menu.page';
import { SessionService } from './../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfPreviewDialogComponentComponent } from 'src/app/components/pdf-preview-dialog-component/pdf-preview-dialog-component.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  listeDocuments: any;
  listeApprenantsInscrits: any;
  private sub: any;
id:any;
sessionname;
  constructor(public popoverController: PopoverController,private route: ActivatedRoute,private sessionService:SessionService,public modalController: ModalController) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];


   });
   }


   async OpenReclamerEvaluerMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: SessionMenuPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        'id': this.id
        }
    });
    return await popover.present();
  }

   async presentModal(id) {
    const modal = await this.modalController.create({
      component: PdfPreviewDialogComponentComponent,
      cssClass: 'my-custom-class',
      componentProps: {
      'id':id
      }
    });




    return await modal.present();
  }


  ngOnInit() {

    this.sessionService.getSessionByid(this.id).subscribe(data => {
this.sessionname=data.theme;
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

}
