import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class  ContactComponent {

  contactlist  = [
    {id: 1, name: 'MY NUMBER', email: 'chariebell.horca@evsu.edu.ph',number: '09148265512'},
    {id: 1, name: 'Mama', email: 'fe.horca@gmail.com'  ,number: '09145214210'},
   
  ]
  constructor(public alertController: AlertController,public router: Router,
              private toastCtrl: ToastController) {
  }
  redirectTo() {
    this.router.navigateByUrl('/mailpage');
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          role: 'destructive',
          handler: async () => {
            this.contactlist.splice(index, 1);
            let toast = await this.toastCtrl.create({
              header: 'Successfully Deleted!',
              buttons: ['OK'],
              color: 'warning',
              position: 'bottom'
            })
           toast.present();
            console.log('Deleted clicked')
        }

          },
        {
          text: 'No',
          role: 'destructive', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }

  async addUser() {
    let prompt = await this.alertController.create({
      header: 'Add Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'name',
        },{
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'number',
          placeholder: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
            
          this.contactlist.push({
            id: data.id,
            name: data.name,
            email: data.email,
            number: data.number
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }


}