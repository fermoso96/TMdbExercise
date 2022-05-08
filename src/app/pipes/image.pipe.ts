import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.api_img_url;

@Pipe({
  name: 'image'
})

export class ImagePipe implements PipeTransform {

  transform(img: unknown, size: string = 'w500'): string {
    if (!img) {
      return './assets/images/no-image-banner.jpg';
    }
    const imgUrl = `${URL}/${size}${img}`
    return imgUrl;
  }

}
