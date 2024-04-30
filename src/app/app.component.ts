import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Activity } from '../models/activité.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sortiefacile';

  value!: string;

  date: Date | undefined;
  date2: Date | undefined;

  cities = [
    {
      name: 'paris',
    },
    { name: 'london' },
  ];

  users: User[] = [
    {
      name: 'lili',
      email: 'lili@gmail.com',
    },
    { name: 'jojo', email: 'jojo@gmail.com' },
  ];

  activities: Activity[] = [
    {
      name: 'match',
      category: 'foot',
      image: '../assets/football.jpg',
    },
    {
      name: 'dune',
      category: 'cinema',
      image: '../assets/popcorn.jpg',
    },
    {
      name: 'match',
      category: 'foot',
      image: '../assets/football.jpg',
    },
    {
      name: 'dune',
      category: 'cinema',
      image: '../assets/popcorn.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
