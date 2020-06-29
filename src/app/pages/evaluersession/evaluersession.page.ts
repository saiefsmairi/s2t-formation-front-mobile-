import { ActivatedRoute } from "@angular/router";
import { UserService } from "./../../services/user-service.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-evaluersession",
  templateUrl: "./evaluersession.page.html",
  styleUrls: ["./evaluersession.page.scss"],
})
export class EvaluersessionPage implements OnInit {
  form: FormGroup;
  nom;
  email;
  user_id;
  id: any;
  private sub: any;
  listeApprenantsInscrits: any;
  userRole: any = JSON.parse(sessionStorage.getItem("auth-user")).roles[0];
  listeDocuments: any;
  date = new Date();
  theme;
  datedebut;
  datefin;
  nbMAxApp;
  status;
  nomFormateur;
  prenomFormateur;
  userData;
  quest1 =
    "La formation que vous venez de suivre a-t-elle respecté le programme annoncé et atteint les objectifs";
  quest2 =
    "Pensez-vous que les connaissances que vous avez acquises pourront etre mises en oeuvre dans votre travail ?";
  quest3 = "Le niveau de compétences techniques de l'animateur vous a paru";
  quest4 =
    "Les supports pédagogiques utilisés par l'animateur sont-ils satisfaisantes? (qualité, contenu...)";
  quest5 =
    "Les conditions du déroulement de la formation (accueil, local, restauration, rythme, hébergement, durée) vous ont_ils paru ?";
  quest6 = "Souhaiteriez-vous une suite à cette formation ?";
  idapprenant;

  tabQuest: any;
  form1: FormGroup;
  formattedDate;
  tabQuestForma;
  clicked;
  dateterminewithtoday;
  idsession;
  msgattestation;
  nbevaluationForthisApprenantinthisSession;
  veriftodayislastday;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"];
    });

    this.form = fb.group({
      typecheck1: new FormControl("", [Validators.required]),
      typecheck2: new FormControl("", [Validators.required]),
      typecheck3: new FormControl("", [Validators.required]),
      typecheck4: new FormControl("", [Validators.required]),
      typecheck5: new FormControl("", [Validators.required]),
      typecheck6: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    this.nom = JSON.parse(sessionStorage.getItem("auth-user")).nom;
    this.email = JSON.parse(sessionStorage.getItem("auth-user")).email;
    this.user_id = JSON.parse(sessionStorage.getItem("auth-user")).user_id;

    this.userService
      .verifNbFeedbackPerApprenantpersession(this.user_id, this.id)
      .subscribe(
        (data) => {
          this.nbevaluationForthisApprenantinthisSession = data;
          console.log(this.nbevaluationForthisApprenantinthisSession);
        },

        (err) => {
          console.log(err);
        }
      );
  }

  get f() {
    return this.form.controls;
  }
  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      this.form.get(key).clearValidators();
      this.form.get(key).updateValueAndValidity();
    }
  }

  onFeedbackFormSubmit() {
    this.userService
      .verifNbFeedbackPerApprenantpersession(this.user_id, this.id)
      .subscribe(
        (data) => {
          this.nbevaluationForthisApprenantinthisSession = data;
        },

        (err) => {
          console.log(err);
        }
      );

    this.tabQuest = [
      {
        question: this.quest1,
        check: this.f.typecheck1.value,
      },
      {
        question: this.quest2,
        check: this.f.typecheck2.value,
      },
      {
        question: this.quest3,
        check: this.f.typecheck3.value,
      },
      {
        question: this.quest4,
        check: this.f.typecheck4.value,
      },
      {
        question: this.quest5,
        check: this.f.typecheck5.value,
      },
      {
        question: this.quest6,
        check: this.f.typecheck6.value,
      },
    ];

    if (
      !this.form.invalid &&
      this.nbevaluationForthisApprenantinthisSession == 0
    ) {
      console.log("1");
      this.clicked = true;
      this.tabQuest.forEach((element) => {
        console.log(element.check);
        this.userService
          .SendFeedback(
            element.question,
            element.check,
            "Apprenant",
            this.user_id,
            this.id
          )
          .subscribe(
            (data) => {},

            (err) => {
              console.log(err);
            }
          );
      });

      this.toastService.presentToast(
        "Votre Avis sur Cette session à été envoyé avec succées"
      );
    } else if (
      
      this.nbevaluationForthisApprenantinthisSession ==6
    ) {
      this.toastService.presentToast("vous avez déja évaluer cette session");
    } else if (this.form.invalid) {

      this.toastService.presentToast(
        "Veuillez Répondre sur toutes les questions"
      );
    }

    this.userService
      .verifNbFeedbackPerApprenantpersession(this.user_id, this.id)
      .subscribe(
        (data) => {
          this.nbevaluationForthisApprenantinthisSession = data;
        },

        (err) => {
          console.log(err);
        }
      );
      this.removeValidators(this.form);
  }
}
