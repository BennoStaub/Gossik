import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { Capture } from '../../model/capture/capture.model';

@Component({
  selector: 'app-define-reference-modal',
  templateUrl: './define-reference-modal.page.html',
  styleUrls: ['./define-reference-modal.page.scss'],
})
export class DefineReferenceModalPage implements OnInit {

	defineReferenceForm: FormGroup;
  capture = {} as Capture;
  goalname: string;

  constructor(
  	public navParams: NavParams,
  	public modalCtrl: ModalController,
  	public translate: TranslateService,
  	public fb: FormBuilder
  	) {
  }

  ngOnInit() {
    if(this.navParams.get('capture')) {
      this.capture = this.navParams.get('capture');
    } else {
      this.capture = {} as Capture;
    }
    if(this.navParams.get('goal')) {
      this.goalname = this.navParams.get('goal');
    }
    this.defineReferenceForm = this.fb.group({
      content: [this.capture.content, Validators.required]
    });
  }

  ionFocus(event){
    event.target.firstChild.placeholder = '';
  }

  cancel() {
    this.modalCtrl.dismiss('cancel');
  }

  addReference() {
  	this.modalCtrl.dismiss(this.defineReferenceForm.value)
  }


}
