import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyData, WelcomeDataService } from '../service/data/welcome-data.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})



export class WelcomeComponent implements OnInit {
  name = this.route.snapshot.params['name']
  msg = ""
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(response => {
      this.handleSuccessfullResponse(response)
    }, error => {
      this.handleError(error)
    }
    )
  }


  getWelcomeMessageWithPathVariable() {
    this.service.excecuteWithPathVariable(this.name).subscribe(res => {
      this.handleSuccessfullResponse(res);
    }, err => {
      this.handleError(err)
    })
  }




  handleError(error: any) {
    this.msg = error.error.message;
    // console.log(error.message)
  }

  handleSuccessfullResponse(response: MyData) {
    // console.log(response);
    // console.log(response.message);
    this.msg = response.message;
  }

}
