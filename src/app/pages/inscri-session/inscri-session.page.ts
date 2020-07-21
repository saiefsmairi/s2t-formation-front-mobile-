import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-inscri-session',
  templateUrl: './inscri-session.page.html',
  styleUrls: ['./inscri-session.page.scss'],
})
export class InscriSessionPage implements OnInit {
  @Input() sessionId: any;
  @Input() userId: any;
  @Input() prix:any;
data:any;
  public myPhoto: any= 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  public error: string;
  private loading: any;

  constructor(private readonly http: HttpClient,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private userService: UserService,
              private modalController: ModalController,
              private camera: Camera) {
  }

  ngOnInit(){

  }

  async takePhoto() {
    // @ts-ignore
    const camera: any = navigator.camera;
    const cameraImage = await this.openCamera();
    // camera.getPicture(imageData => {
    //   this.myPhoto = this.convertFileSrc(cameraImage);
    //   this.changeDetectorRef.detectChanges();
    //   this.changeDetectorRef.markForCheck();
    //   // this.uploadPhoto(imageData);
    //  this.data= cameraImage;
    // }, error => this.error = JSON.stringify(error), {
    //   quality: 100,
    //   destinationType: camera.DestinationType.FILE_URI,
    //   sourceType: camera.PictureSourceType.CAMERA,
    //   encodingType: camera.EncodingType.JPEG
    // });
  }

  selectPhoto(): any {
    // @ts-ignore
    const camera: any = navigator.camera;
    camera.getPicture(imageData => {
      
      this.myPhoto =  this.convertFileSrc(imageData);
      
       this.data=imageData;
    }, error => this.error = JSON.stringify(error), {
      sourceType: camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: camera.EncodingType.JPEG,
    });
  }

//  async openCamera() {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.FILE_URI,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
  
//     this.camera.getPicture(options).then(async (imageData) => {
//       console.log(imageData);
//       return await imageData;
     
//     }, (err) => {
//       console.log(err);
//     });
//   }
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


  private convertFileSrc(url: string): string {
    if (!url) {
      return url;
    }
    if (url.startsWith('/')) {
      // @ts-ignore
      return window.WEBVIEW_SERVER_URL + '/_app_file_' + url;
    }
    if (url.startsWith('file://')) {
      // @ts-ignore
      return window.WEBVIEW_SERVER_URL + url.replace('file://', '/_app_file_');
    }
    if (url.startsWith('content://')) {
      // @ts-ignore
      return window.WEBVIEW_SERVER_URL + url.replace('content:/', '/_app_content_');
    }
    return url;
  }

  private async uploadPhoto() {

   const imageFileUri = this.data;

   this.error = null;
   this.loading = await this.loadingCtrl.create({
      message: 'Uploading...'
    });

   this.loading.present();

    // @ts-ignore
   window.resolveLocalFileSystemURL(imageFileUri,
      entry => {
        entry.file(file => this.readFile(file));
      });

  }

  private readFile(file: any) {
    console.log(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type});
      formData.append('recu', imgBlob, file.name);
      formData.append('sessionId', this.sessionId);
      formData.append('userId', this.userId);
      formData.append('prix',this.prix);
      this.postData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  private postData(formData: FormData) {
    this.http.post<boolean>(`http://192.168.1.46:9080/api/users/depot-recu-mobile`, formData)

      .subscribe(ok => {
        this.loading.dismiss();
        this.showToast(ok);
        this.dismiss();
      } );
  }

  private async showToast(ok: boolean | {}) {
    if (ok === true) {
      const toast = await this.toastCtrl.create({
        message: 'Recu déposé',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Upload failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  private handleError(error: any) {
    const errMsg = error.message ? error.message : error.toString();
    this.error = errMsg;
    this.changeDetectorRef.detectChanges();
    return throwError(errMsg);
  }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
