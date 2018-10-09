import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  title:string = 'My first AGM project';
  lat:number = 51.678418;
  ing:number = 7.809007;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController) {
              let coordsArray = this.navParams.get("coords").split(",");
              this.lat = Number(coordsArray[0].replace("geo:",""));
              this.ing = Number(coordsArray[1]);
              console.log(this.lat, this.ing);
  }
  cerrar_modal() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
