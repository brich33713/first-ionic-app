import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.page.html',
  styleUrls: ['./claim.page.scss'],
})
export class ClaimPage implements OnInit {
  data: Object = {};
  results: Observable<any>;
  constructor(private router: Router 
    ,private http: HttpClient
    ) { }

  ngOnInit() {
  }

  submitInfo(event: Event){
      for(let item of document.forms['form']){
        this.data[item.name] = item.value;
      }
      console.log(this.data)
      this.router.navigate(['/home']);

      this.results = this.http.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      this.results.subscribe( res => {
        console.log(res)
      })

  }

}
