import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { LocalizarService } from '../../servicios/localizar.service';
@Component({
  selector: 'app-tab-mapa',
  templateUrl: './tab-mapa.page.html',
  styleUrls: ['./tab-mapa.page.scss'],
})
export class TabMapaPage implements OnInit, OnDestroy {
  map: Leaflet.Map;
  public rutas_usuario : any = [];

  constructor(private getLocation: LocalizarService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.leafletMap();
  }
  leafletMap() {
    this.map = Leaflet.map('mapId').setView([6.152612, -75.375491], 14);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'SOMOS',
    }).addTo(this.map);
    /*Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();*/

    /*antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);*/
  }

  /** Remove map when we have multiple map object */
   ngOnDestroy() {
    this.map.remove();
  }



}

