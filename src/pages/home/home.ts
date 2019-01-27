import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public buttonUpImg:string = "assets/imgs/red_button_up.png";
  public buttonDownImg:string = "assets/imgs/red_button_down.png";
  public buttonSoundSnd:string = "assets/snd/test.mp3";

  public buttonImage:string = this.buttonUpImg;

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('testingAudio', this.buttonSoundSnd).then(this.onCtorSuccess, this.onCtorError);
  }

  buttonClick(){
    console.log("button clicked");
    this.buttonImage = this.buttonDownImg;
    this.nativeAudio.play('testingAudio').then(this.onClickSuccess, this.onClickError);
  }

  onCtorSuccess(){
    console.log("success: constructor");
  }

  onClickSuccess(){
    console.log("success: click");
//    this.buttonImage = this.buttonUpImg;
  }

  onCtorError(){
    console.log("error: constructor");
  }

  onClickError(){
    console.log("error: click");
    this.buttonImage = this.buttonUpImg;
  }

}
