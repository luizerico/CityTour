import { Component, OnInit, OnChanges } from '@angular/core';
import { } from '@types/googlemaps';

import { Picture } from '../../picture/picture';
import { PictureService } from '../../picture/picture.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnChanges {
 
  map: any;
  infoWindow: any;
  pictures: Picture[];

  constructor(private _pictureService: PictureService) {
    
  }

  ngOnInit() {
    this._pictureService.getAllPictures('undefined').subscribe(
      pictures => {
        this.pictures = pictures;
        this.initMap();
      },
      (err) => console.log(err)
    );
    
    console.log(this.pictures)
  }

 

  ngOnChanges() {
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('pos : ', pos);

      this.infoWindow.setPosition(pos);
      this.infoWindow.setContent('You are here.');
      this.infoWindow.open(this.map);
      this.map.setCenter(pos);

      return (pos);
    }, () => {
      return (false);
    });
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 43.78, lng: -79.22 },
      zoom: 14
    });
    this.infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.infoWindow.setPosition(pos);

        this.infoWindow.setContent('You are here.');
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);
      }, function () {
        this.handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }

    this.pictures.map((picture) => {
      var marker = new google.maps.Marker({
        position: { lat: parseFloat(picture.lat), lng: parseFloat(picture.lng) },
        map: this.map,
        title: picture.location,
        animation: google.maps.Animation.DROP,
      });

      var image = "uploads/" + picture.name;
      var contentString = '<div id="content">' +
        '<div id="siteNotice" >' +
        '<h1 id="firstHeading" class="firstHeading">' + picture.location + '</h1>' +
        '<div id="bodyContent">' + picture.description + '</div>' +
        '<img src=uploads/' + picture.name + ' style="width: 250px; height:auto; padding: 10px;">' +
        '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      //var marker = new google.maps.Marker({
      //  position: { lat: 42.66, lng: -78.44 },
      //  map: this.map,
      //  title: 'Hello World 2!',
      //  animation: google.maps.Animation.DROP,
      //  //icon: image
      //});
      marker.addListener('mouseover', function () {
        infowindow.open(this.map, marker);
      });

      marker.addListener('mouseout', function () {
        infowindow.close();
      });

    });

    
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    this.infoWindow.open(this.map);
  }

}
