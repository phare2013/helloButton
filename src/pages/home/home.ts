import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public buttonUp:string = "assets/imgs/red_button_up.png";
  public buttonDown:string = "assets/imgs/red_button_down.png";
  public picTheView:string = this.buttonUp;

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  this.nativeAudio.preloadSimple('testingAudio', 'assets/snd/test.mp3').then(this.onSuccess, this.onError);

  }

 buttonClick(){
   console.log("button clicked");
   this.picTheView = this.buttonDown;
   this.nativeAudio.play('testingAudio').then(this.onSuccess, this.onError);

 }

  onSuccess(){
    console.log("ran success");
    this.picTheView = this.buttonUp;
  }

  onError(){
    console.log("ran error");
    this.picTheView = this.buttonUp;
  }

}
