import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.page.html',
  styleUrls: ['./tabs2.page.scss'],
})
export class Tabs2Page implements OnInit {

  experiencias:  any = [
    {
      id: 1,
      name: 'Experiencia 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/assets/img/e1.jpg',
    },
    {
      id: 2,
      name: 'Experiencia 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/assets/img/e2.jpg',
    },
    {
      id: 3,
      name: 'Experiencia 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/assets/img/e3.jpg',
    }, 
    {
      id: 4,
      name: 'Experiencia 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/assets/img/e4.jpg',
    },
    {
      id: 5,
      name: 'Experiencia 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/assets/img/e5.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
