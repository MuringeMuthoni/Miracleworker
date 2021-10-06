import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  id: number;
  artist_name: string;
  song_name: string;
  constructor() { }
}
