import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GetAPIService } from '../services/get-api.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  id: any
  dogs: any
  _album:any = [];

  constructor(private route: ActivatedRoute, private apiService: GetAPIService, private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    let url = "https://dog.ceo/api/breed/" + this.id + "/images"
    this.apiService.getAPI(url).subscribe(_album => {
      this.dogs = _album.message
      for (var dog in this.dogs)
        {  
            this._album.push({src : this.dogs[dog], caption: '', thumb: '' }) 
        } 
    })
  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
