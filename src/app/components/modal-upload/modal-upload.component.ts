import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/services.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() { }


  subirImagen() {
    console.log(this._modalUploadService.tipo, this._modalUploadService.id);
    this._subirArchivoService.subirArchivo(this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
      .then(resp => {
        console.log(resp);
        this._modalUploadService.notificacion.emit(resp);
        this.cerrarModal();
      })
      .catch(err => {
        console.log('Error en la carga');
      });
  }

  cerrarModal() {
    this.imagenSubir = null;
    this.imagenTemp = null;

    this._modalUploadService.ocultarModal();
  }

  seleccionImage(archivo: File) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    if (archivo.type.indexOf('image') < 0) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    // this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);

    // this.imagenTemp  = reader.result;

    reader.onloadend = () => this.imagenTemp = reader.result as string;

    //  {
    //   console.log(reader.result);
    // };
  }


}
