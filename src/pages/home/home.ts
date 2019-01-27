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
    setTimeout(()=> 
    {
      this.nativeAudio.play('testingAudio').then(
        //success
        ()=>{
          console.log("Button Click Success");
          this.buttonImage = this.buttonUpImg;
        }
        , 
        //error
        ()=>{
            console.log("Button Click Error");
            this.buttonImage = this.buttonUpImg;
            });
    }, 50);

  }

  onCtorSuccess(){
    console.log("success: constructor");
  }

  onCtorError(){
    console.log("error: constructor");
  }

  

}
