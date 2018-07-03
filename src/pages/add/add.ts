import {Component, ViewChild} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Camera} from '@ionic-native/camera';
import {MindsPage} from "../minds/minds";
import {MindService} from "../../mocks/providers/mind";
import {Mind} from "../../models/mind";

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public formBuilder: FormBuilder, public camera: Camera,
              public mindService: MindService) {
    this.form = formBuilder.group({
      image: [''],
      title: ['', Validators.required],
      descriptions: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL
      }).then((data) => {
        this.form.patchValue({ 'image': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Não é possível tirar foto');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'image': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getImageStyle() {
    return 'url(' + this.form.controls['image'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.getNav().push(MindsPage);
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }

    let mind: Mind = new Mind(this.form.controls.title.value, this.form.controls.descriptions.value, this.form.controls.image.value);
    console.log(mind)
    mindService.add(mind);
    this.viewCtrl.getNav().push(MindsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
