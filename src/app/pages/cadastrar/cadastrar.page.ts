import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  form_cadastrar: FormGroup
  isSubmitted: boolean = false

  constructor(
    private alertController: AlertController, 
    private router: Router,
    private contatoService: ContatoService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form_cadastrar=this.formBuilder.group({
      nome:["",[Validators.required]],
      telefone:["",[Validators.required, Validators.minLength(10)]],
      sexo:["",[Validators.required]],
      dataNasc:["",[Validators.required]]
    })
  }

  get errorControl(){
    return this.form_cadastrar.controls
  }

  submitForm(): boolean{
    this.isSubmitted = true
    if(!this.form_cadastrar.valid){
      this.presentAlert("Agenda","Erro","Preencha todos os campos!")
      return false
    }else{
      this.cadastrar()
    }
  }

  
  private cadastrar(): void{
    this.contatoService.inserir(this.form_cadastrar.value)
      this.presentAlert("Agenda","Sucesso","Cadastro Realizado")
      this.router.navigate(["/home"])
  }

  async presentAlert(cabecalho: string, subcabecalho: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
