import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mailpage',
  templateUrl: './mailpage.page.html',
  styleUrls: ['./mailpage.page.scss'],
  
})
export class MailpagePage {

  constructor(public toastController: ToastController){
    
  }

  async openToast(){
    const toast = await this.toastController.create({
      message: 'Already sent!',
      duration: 2000,
      color: 'warning'
    
    });
    await toast.present();
    toast.onDidDismiss().then((val) =>{
    console.log('Sent');
    });
  }

}
