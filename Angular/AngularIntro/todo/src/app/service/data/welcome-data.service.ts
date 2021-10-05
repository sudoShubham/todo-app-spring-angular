import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class MyData {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})




export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<MyData>("http://localhost:8080/hello-world-bean");
  }

  excecuteWithPathVariable(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    // const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });

    return this.http.get<MyData>(`http://localhost:8080/hello-world/${name}`,
      // {headers: headers }
    )
  }




  createBasicAuthenticationHttpHeader() {
    let username = "sudoRoot"
    let password = "shubham"
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeaderString
  }


}

