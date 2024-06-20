import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {

  nombre: any='';
  apellido: any='';

  products:  any = [
    {
      id: 1,
      name: 'Producto 1',
      price: 299.99,
      imageUrl: '/assets/img/p1.jpg',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 399.99,
      imageUrl: '/assets/img/p2.jpg',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 499.99,
      imageUrl: '/assets/img/p3.jpg',
    }, 
    {
      id: 3,
      name: 'Producto 4',
      price: 499.99,
      imageUrl: '/assets/img/p4.jpg',
    }, 
    {
      id: 3,
      name: 'Producto 5',
      price: 499.99,
      imageUrl: '/assets/img/p5.jpg',
    }, 
    {
      id: 3,
      name: 'Producto 6',
      price: 499.99,
      imageUrl: '/assets/img/p6.jpg',
    }, 
    {
      id: 3,
      name: 'Producto 7',
      price: 499.99,
      imageUrl: '/assets/img/p7.jpg',
    }, 
    {
      id: 3,
      name: 'Producto 8',
      price: 499.99,
      imageUrl: '/assets/img/p8.jpg',
    },
     
  ];

  constructor() { }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');

    console.log(this.nombre);
  }

}
