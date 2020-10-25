import swal from 'sweetalert';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    usuario: '',
    senha: ''
  }

  public loginForm: FormGroup;
  submitted = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  get f() { return this.loginForm.controls; }
  login() {
    debugger
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.authenticationService.autenticacao(this.form)) {
      this.router.navigate([``]);
    } else {
      swal({
        title: `Ops`,
        text: "Usuário ou senha inválidos",
        icon: "warning",
      })
    }
  }

}
