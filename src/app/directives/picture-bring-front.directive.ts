import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPictureBringFront]'
})
export class PictureBringFrontDirective {
  private pictureElement = null;

  constructor(el: ElementRef) {
    if (el.nativeElement.tagName === 'IMG' || el.nativeElement.tagName === 'img') {
      this.pictureElement = el.nativeElement;
    }
  }

  @HostListener('click')
  onClick() {
    if (!this.pictureElement) {
      return;
    }

    const src = this.pictureElement.getAttribute('src');

    const newPictureElement = document.createElement('img');
    newPictureElement.style.position = 'fixed';
    newPictureElement.style.maxWidth = '100%';
    newPictureElement.style.maxHeight = '100%';
    newPictureElement.style.width = 'auto';
    newPictureElement.style.height = 'auto';
    newPictureElement.style.top = '0';
    newPictureElement.style.left = '0';
    newPictureElement.setAttribute('src', src);

    newPictureElement.addEventListener('click', () => {
      newPictureElement.parentElement.removeChild(newPictureElement);
    });

    document.body.appendChild(newPictureElement);
  }
}
