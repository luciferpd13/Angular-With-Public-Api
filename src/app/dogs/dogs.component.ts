import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GetAPIService } from '../services/get-api.service';

declare var $: any;

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  id: any
  dogs: any

  constructor(private route: ActivatedRoute, private apiService: GetAPIService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    let url = "https://dog.ceo/api/breed/" + this.id + "/images"
    this.apiService.getAPI(url).subscribe(dogs => {
      this.dogs = dogs.message
    })

    $(document).ready(function() {
      $(".gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
    })
  }
}
