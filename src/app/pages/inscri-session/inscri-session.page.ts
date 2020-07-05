import { ModalController } from "@ionic/angular";
import { UserService } from "./../../services/user-service.service";
import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-inscri-session",
  templateUrl: "./inscri-session.page.html",
  styleUrls: ["./inscri-session.page.scss"],
})
export class InscriSessionPage implements OnInit {
  listSessions: any;
  image = "https://www.kasterencultuur.nl/editor/placeholder.jpg";

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private camera: Camera
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async addPhoto(source: string) {
    if (source === "library") {
      console.log("library");
      const libraryImage = await this.openLibrary();
      this.image = "data:image/jpg;base64," + libraryImage;
    } else {
      console.log("camera");
      const cameraImage = await this.openCamera();
      this.image = "data:image/jpg;base64," + cameraImage;
    }
    fetch(this.image)
      .then((res) => res.blob())
      .then(console.log);
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };
    return await this.camera.getPicture(options);
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    return await this.camera.getPicture(options);
  }

  uploadFirebase() {
    console.log(this.image);

    var BASE64_MARKER = ";base64,";

    var base64Index = this.image.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = this.image.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    console.log(array);

   

    this.userService.ajoutRecuMobile(this.image).subscribe(
      (data) => {
        console.log(data);
    
      },
      (err) => {

        console.log('breaks here');
        // this.errorMessage = err.error.message;
      }
    );


  }


  
}
