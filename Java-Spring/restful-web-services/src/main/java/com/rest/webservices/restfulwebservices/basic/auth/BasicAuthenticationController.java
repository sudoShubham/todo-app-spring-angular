package com.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.webservices.restfulwebservices.helloworld.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	@GetMapping(path = "/basicauth")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("You are authenticated");
//		throw new RuntimeException("Something went wrong");
	}

}
