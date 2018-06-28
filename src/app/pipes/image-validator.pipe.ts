import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageValidator'
})
export class ImageValidatorPipe implements PipeTransform {

  transform(value: any[]): any {

    return (value.length > 0)?value[1].url:"assets/img/noimage.png";
  }

}
