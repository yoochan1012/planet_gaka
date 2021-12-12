import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
// temparature: number;
// days: number;
// years: number;
// description: string;
  createDb() {
    const planet = [
      { id: 1, name: 'Mercury', distance: 57909176, size: 4879.4, temparature: 340, days: 58.6462, 
      years: 87.96934, sate: 0, description: "1. 태양과 거리가 가깝다. 2. 암석으로 이루어져 있다. 3. 밀도가 높지만 태양과의 거리가 가장 짧다."},
      { id: 2, name: "Venus", distance: 108208926, size: 12103.7, temparature: 737, days: 243.0185, 
      years: 224.70069, sate: 0, description: "1. 가장 뜨거운 행성이다. 2. 원에 가깝게 자전한다."},
      { id: 3, name: "Earth", distance: 147098074, size: 12756.2, temparature: 288, days: 1,
      years: 365.24219, sate: 1, description: "1. 우리가 살고 있는 유일한 행성이다. 2. 달을 위성으로 갖고 있다."},
      { id: 4, name: "Mars", distance: 227939134, size: 6779.0, temparature: 210, days: 1.0260,
      years: 686.97100, sate: 2, description: "1. 액체 상태의 물이 있다. 2. 가장 높은 화산이 있다."},
      { id: 5, name: "Jupiter", distance: 778547200, size: 139822.0, temparature: 165, days: 0.4135,
      years: 4332.42981, sate: 79, description: "1. 가장 큰 행성! 2. 고리가 있음!"},
      { id: 6, name: "Saturn", distance: 1426725413, size: 120536.0, temparature: 143, days: 0.4444,
      years: 10756.19950, sate: 60, description: "1. 물보다 가볍다! 2. 고리가 많음!"},
      { id: 7, name: "Uranus", distance: 2870972220, size: 50532.0, temparature: 53, days: 0.7183,
      years: 30707.48960, sate: 27, description: "1. 옆으로 눕힘! 2. 고리가 있음!"},
      { id: 8, name: "Neptune", distance: 4498252900, size: 49528.0, temparature: 55, days: 0.6713,
      years: 60223.3528, sate: 14, description: "1. 가장 먼 행성! 2. 가장 차가운 행성!"},
    ];
    return {planet};
  }
  constructor() { }

  genID(planet: Planet[]): number {
    return planet.length > 0 ? 1 : 0;
  }
}
