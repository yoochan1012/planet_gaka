import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planetsUrl = 'api/planet';
  httpOptions= {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  // getPlanet(): Observable<Planet[]> {
  //   const planets = of(PLS);
  //   return planets;
  // }

  getPlanet(): Observable<Planet[]> {
    // const planets = PLS.find(p => p.name == name)!;
    // return of(planets);
    return this.http.get<Planet[]>(this.planetsUrl);
  }

  getPlanetName(id: number): Observable<Planet> {
    const url = `${this.planetsUrl}/${id}`;
    return this.http.get<Planet>(url);
  }
}
