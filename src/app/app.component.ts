import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisabledValidator } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    const fb = this.formBuilder;
    this.myForm = fb.group({
      endereco: fb.group({
        cep: [null, [Validators.required]],
        logradouro: [null, [
          Validators.required,
        ]],
        bairro: [null, [Validators.required]],
        localidade: [null, [Validators.required]],
        uf: [null, [Validators.required]],
      })
    });

    this.myForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  public enviar(){
    const cep = this.myForm.get('endereco.cep')?.value;
    this.http.get(`http://viacep.com.br/ws/${cep}/json/`).subscribe((endereco) => {
      this.myForm.patchValue({endereco})
    });
  }

}
