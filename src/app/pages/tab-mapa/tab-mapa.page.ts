import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { LocalizarService } from '../../servicios/localizar.service';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-mapa',
  templateUrl: './tab-mapa.page.html',
  styleUrls: ['./tab-mapa.page.scss'],
})
export class TabMapaPage implements OnInit {
  map: Leaflet.Map;
  public latitudes: any = [];
  public hora:string;
  public minutos: string;
  public longitudes: any=[];


  constructor(private getLocation: LocalizarService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.leafletMap();

  }

  leafletMap() {

    var marker = Leaflet.icon({
      iconUrl: '../../assets/icon/marker.png',
      iconSize:     [20, 20], // size of the icon
      iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
      popupAnchor:  [-12, -20] // point from which the popup should open relative to the iconAnchor
  });

    this.getLocation.getRealTimeLocation().subscribe(doc => {
      if (!doc) {
        console.log('No such document!');
      } else {
        doc.map(map => {
          this.longitudes = map.longitud;
          this.latitudes = map.latitud;
          this.hora = map.hora;
          this.minutos = map.minutos;
          let horas = this.hora+':'+this.minutos;
          console.log('Funciona: ' +this.longitudes+', '+this.latitudes);
         Leaflet.marker([this.latitudes, this.longitudes],{icon:marker}).addTo(this.map).bindPopup(horas);
          /*antPath([[parseFloat(this.latitudes), parseFloat(this.longitudes)], [parseFloat(this.latitudes), parseFloat(this.longitudes)]],
            { color: 'blue', weight: 5, opacity: 0.6 })
            .addTo(this.map);
*/

        });
      }
    });


  
    this.map = Leaflet.map('mapId').setView([6.152612, -75.375491], 14);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'SOMOS',
    }).addTo(this.map);


   


    /*Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();*/

  }

  /** Remove map when we have multiple map object */
  OnDestroy() {
    this.map.remove();
  }



}

