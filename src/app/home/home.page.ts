import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import { DbService } from '../db.service';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'] 
})
export class HomePage {

  usuarioRecibido: string='';
  passwordRecibido: string='';

  nombre: any='';
  apellido: any='';
  selectedOption: any='';
  selectedDate: any='';
  usuario: any='';
  password: any='';

  usuarioRecibidoPersistente: any='';

  isDBReady: boolean = false;

  

  constructor(private router:Router,
              private activateroute:ActivatedRoute, 
              private alertController:AlertController,
              private dbService: DbService) {
    this.activateroute.queryParams.subscribe( params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado']; 

        console.log();
      }
    })
  }

 
  
  ngOnInit() {
    this.dbService.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady) {
        // Aquí puedes llamar a funciones para cargar datos, etc. desde la base de datos
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.guardarDatos();  
    }
  }

  guardarDatos() {
    this.dbService.insertUsuario(this.nombre, this.apellido, this.usuario, this.password, this.selectedOption, this.selectedDate)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
        // Aquí puedes añadir lógica adicional, como mostrar un mensaje de éxito al usuario.
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:'+ error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      });
  }

  
   

}
