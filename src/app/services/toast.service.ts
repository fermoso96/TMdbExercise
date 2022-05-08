import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentFavoriteToast(mode: boolean) {
    const message = mode ? 'Movie added to favorites' : 'Movie removed from favorites';
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      animated: true,
      cssClass: 'toastFavorite',
      position: 'bottom',
      icon: 'star',
      color: mode ? 'primary' : '',
      mode: 'ios'
    });
    toast.present();
  }

  async presentSimpleToast(message: string, time: number) {
    const toast = await this.toastController.create({
      message,
      duration: time,
      animated: true,
      cssClass: 'toastFavorite',
      position: 'top',
      color: 'warning',
      mode: 'ios'
    });
    toast.present();
  }
}
