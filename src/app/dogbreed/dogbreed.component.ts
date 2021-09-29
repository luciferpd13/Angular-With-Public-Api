import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../services/get-api.service';

@Component({
  selector: 'app-dogbreed',
  templateUrl: './dogbreed.component.html',
  styleUrls: ['./dogbreed.component.css']
})
export class DogbreedComponent implements OnInit {

  breeds: any

  constructor(private apiService: GetAPIService) { }

  ngOnInit() {
    let url = "https://dog.ceo/api/breeds/list/all"
    this.apiService.getAPI(url).subscribe(breeds => {
      this.breeds = breeds.message
    })
  }
}
