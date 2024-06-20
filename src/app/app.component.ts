import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { item_id: 1, title: 'Home', url: '/home', icon: 'home' }, 
    { item_id: 2, title: 'Productos', url: '/tabs', icon: 'cube-outline' }, 
    { item_id: 4, title: 'Camara', url: '/camera', icon: 'camera-outline' },
    { item_id: 5, title: 'Mapa', url: '/maps', icon: 'locate-outline' },
    { item_id: 3, title: 'Cerrar Sesión', url: '/login', icon: 'exit' },
    // Agrega más páginas según sea necesario
  ];
  constructor() {}

  onMenuItemClick(id:any)
  { 
    //cerrar Sesión
    if( (id==3) && (localStorage.getItem('sesion_activa')=='SI'))
    {
        localStorage.clear(); 
    }
}

}
