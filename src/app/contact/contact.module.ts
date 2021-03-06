import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToastController} from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactComponentModule {}
