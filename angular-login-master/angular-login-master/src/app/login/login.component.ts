import { DashboardComponent } from './../dashboard/dashboard.component';
import { ServService } from './../serv.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tabledata = [];
  found: boolean;

@ViewChild ('starDiv') starDiv: ElementRef;

public noOfStars;

  constructor(private sservice: ServService, private router: Router) {

  }

  ngOnInit() {
    this.sservice.getPosts().subscribe(responseposts => { this.tabledata = responseposts });


  }
  updateRating(r) {
    this.noOfStars=r;
    console.log(this.noOfStars);

    let children=this.starDiv.nativeElement.children;
    console.log(children);
  for(let i=0;i<children.length;i++){
    this.starDiv.nativeElement.children[i].removeClass('icon-star');
  this.starDiv.nativeElement.children[i].addClass('icon-star-empty');

  }
    for(let j=0;j<r;j++){
      this.starDiv.nativeElement.children[j].removeClass('icon-star-empty');
      this.starDiv.nativeElement.children[j].addClass('icon-star');
    }
    // console.log("start");
    // this.noOfStars = r;
    // console.log(this.noOfStars);
    // this.ratingClick.emit({

    //   noOfStars: r

    // });
    // console.log(r);
    
  }

  shruthi(ss) {


    for (let i = 0; i < this.tabledata.length; i++) {
      console.log(this.tabledata[i].email);
      if ((this.tabledata[i].email === ss.email || this.tabledata[i].username === ss.username || this.tabledata[i].phone) && this.tabledata[i].password === ss.password) {

        this.found = true;

      }




    }



  }
  dashboard() {
    console.log("entered");
    this.router.navigateByUrl('/dashboard');
  }
}



