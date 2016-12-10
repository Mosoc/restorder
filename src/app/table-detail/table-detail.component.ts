import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routes: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params['id']);
    })
  }

  back(){
    this.routes.navigate(['tables',2,'Kev']);
    let currentId = this.route.snapshot.params['id'];
  }

}
