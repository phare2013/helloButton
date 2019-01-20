import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  this.nativeAudio.preloadSimple('testingAudio', 'assets/snd/test.mp3').then(this.onSuccess, this.onError);

  }

 buttonClick(){
   console.log("button clicked");
   this.nativeAudio.play('testingAudio').then(this.onSuccess, this.onError);
 }

  onSuccess(){
    console.log("ran success");
  }

  onError(){
    console.log("ran error");
  }

}
