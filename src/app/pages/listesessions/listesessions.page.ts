import { InscriSessionPage } from './../inscri-session/inscri-session.page';
import { PopoverController, ModalController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/services/session.service";

@Component({
  selector: "app-listesessions",
  templateUrl: "./listesessions.page.html",
  styleUrls: ["./listesessions.page.scss"],
})
export class ListesessionsPage implements OnInit {
  tab: any[];
  theme;
  prix;
  value: string;
  selectedValue;
  role: string;
  userId: any;
  myInput;
  tablestyle='bootstrap'
  constructor(private modalController: ModalController,private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userId = JSON.parse(sessionStorage.getItem("auth-user")).id;

    // this.role="apprenant/societe";
    const res = this.sessionService.getAllSessions(this.userId);
    res.subscribe(
      (data) => {
        this.tab = data;
        console.log(data);
      },
      (err) => {
        console.log("breaks here getAllSessions");
      }
    );
  }

  //filters by theme and prix this method weli tahtha
  onInput(test: any) {
    if (this.theme !='') {
      this.tab = this.tab.filter(res => {
        return res.theme.toLocaleLowerCase().match(this.theme.toLocaleLowerCase());
      })
    } else if (this.theme =='') {
      this.tab = [];
      this.ngOnInit();
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InscriSessionPage,
      cssClass: 'my-custom-class',
      componentProps: {
     
      }
    });




    return await modal.present();
  }

}
