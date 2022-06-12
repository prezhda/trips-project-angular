import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trips: Trip[] = [];
  tripService: TripService;

  filters = {
    date: null, // current date
    destination: null, // or something special
  };

  constructor(tripService: TripService) {
    this.tripService = tripService;
    // this.trips = tripService.all();
  }

  ngOnInit(): void {}

  // filterTrips(): void {
  //   this.trips = this.tripService.filter(this.filters);
  // }
}
