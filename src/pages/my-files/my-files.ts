import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular/components/alert/alert-controller';
import {ToastController} from 'ionic-angular/components/toast/toast-controller';
import {Observable} from 'rxjs/Observable';
import {DataProvider} from '../../providers';

@Component({
  selector: 'page-my-files',
  templateUrl: 'my-files.html',
})
export class MyFilesPage {
  files: Observable<any[]>;

  constructor(private dataProvider: DataProvider,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private iab: InAppBrowser) {
    this.files = this.dataProvider.getFiles();
  }

  addFile() {
    let inputAlert = this.alertCtrl.create({
      title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Lorem ipsum dolor...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    inputAlert.present();
  }

  uploadInformation(text) {
    let upload = this.dataProvider.uploadToStorage(text);

    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
      this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
        let toast = this.toastCtrl.create({
          message: 'New File added!',
          duration: 3000
        });
        toast.present();
      });
    });
  }

  deleteFile(file) {
    this.dataProvider.deleteFile(file).subscribe(() => {
      let toast = this.toastCtrl.create({
        message: 'File removed!',
        duration: 3000
      });
      toast.present();
    });
  }

  viewFile(url) {
    this.iab.create(url);
  }
}
