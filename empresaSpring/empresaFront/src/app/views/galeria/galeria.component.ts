import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagesBasic = [
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).webp', description: 'Image 1' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).webp', description: 'Image 2' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).webp', description: 'Image 3' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).webp', description: 'Image 4' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).webp', description: 'Image 5' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).webp', description: 'Image 6' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).webp', description: 'Image 7' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).webp', description: 'Image 8' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).webp', description: 'Image 9' }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
