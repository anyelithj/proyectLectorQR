import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialService} from '../../providers/historial/historial';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController, 
              private platform: Platform,
              private _historialService:HistorialService
              ) {
    
      }
      scan(){
        if( !this.platform.is('cordova') ){
         console.log("en desktop");
         this.mostrar_mensaje("No puede probarlo en web" );
          return;
        }
        this.barcodeScanner.scan().then( (barcodeData) => {
         console.log("result:", barcodeData.text );
         console.log("format:", barcodeData.format );
         console.log("cancelled:", barcodeData.cancelled );

         if(!barcodeData.cancelled && barcodeData.text != null) {
           this._historialService.agregar_historial(barcodeData.text);
         }
         this.mostrar_mensaje("correcto " + barcodeData.text+" "+barcodeData.format );
        }, (err) => { console.error("Error: ", err ); 
        this.mostrar_mensaje("Error: " + err);});
      }
      mostrar_mensaje( mensaje:string ) {
          let toast = this.toastCtrl.create({
            message: mensaje,
            duration: 2500
          });
          toast.present();
      }
}
