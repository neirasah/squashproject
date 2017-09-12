import {Component} from '@angular/core'
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";


@Component ({
    templateUrl: 'login.component.html',
    providers: [AuthService]
})

export class LoginComponent {
    constructor (private authService:AuthService, private router:Router){
        
    }


//when form is submitted 
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['clubs'])
    }

    cancel() {
        this.router.navigate(['clubs'])
    }

}