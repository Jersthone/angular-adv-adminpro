import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';
declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('googleBtn') googleBtn: ElementRef;

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [Boolean(JSON.parse(localStorage.getItem('remember'))) || false]
  });

  constructor(
    private router : Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }


  ngAfterViewInit(): void {
      this.googleInit();
  }

  googleInit(){
    google.accounts.id.initialize({
      client_id: '408480742105-idcpfr0mvkj0tlspbsi23v0brati939m.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      //document.getElementById("buttonDiv"),
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any){
    this.usuarioService.loginGoogle(response.credential)
    .subscribe(resp =>{
      this.router.navigateByUrl('/');
    });
  }

  login(){
    this.usuarioService.login(this.loginForm.value)
        .subscribe(resp => {
          if(this.loginForm.get('remember').value){
            localStorage.setItem('email', this.loginForm.get('email').value);
            localStorage.setItem('remember', 'true');
          }else{
            localStorage.removeItem('email');
            localStorage.removeItem('remember');
          }

          this.router.navigateByUrl('/');
        }, (err) => {
          //Si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        });
  }

}
