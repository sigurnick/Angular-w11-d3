import { IRegister } from './../interfaces/register';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder, //conFormBuilder possiamo formare il form
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        //qui definiamo come è fatto. construiamo value

        name: this.fb.control(null, [Validators.required]), // <-- nelle () inseriamo il valore di default seguito da un array di validatori
        surname: this.fb.control(null, [Validators.required]),
        casata: this.fb.control(null),
        password: this.fb.control(null, [Validators.required]),
        confPassword: this.fb.control(null, [Validators.required]),
        gender: this.fb.control(null),
        profilePhoto: this.fb.control(null),
        biography: this.fb.control(null),
        username: this.fb.control(null, [Validators.required]),
        email: this.fb.control(null,[Validators.required])
      },
      {
        validators: this.passwordValidator,
      }
    );




  }

  //-------------------Invio form-----------------------
  send() {

    this.authSvc.singUp(this.form.value).subscribe((data) => {
      console.log('Utente registrato');
     this.router.navigate(['/login']);
    });
  }




  //controlla se un campo è valido
  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid;
  }

  //controlla se un campo è stato toccato
  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched;
  }

  //controllo conferma password
  passwordValidator = (formC: AbstractControl): ValidationErrors | null => {
    if (formC.get('password')?.value !== formC.get('confPassword')?.value) {
      console.log('pass non uguale');
      return {
        invalid: true,
        message: 'La password non corrisponde',
      };
    }
    console.log('pass uguale');

    return null;
  };

  getMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message']; //restituisce il messaggio di errore dei custom validators
  }
}
