import { Component, OnInit } from '@angular/core';
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
  nome: string;
  telefone: number;
  dataNasc: string;
  sexo: string;
  editar: boolean;

  constructor(private alertController: AlertController, private router: Router,
    private contatoService: ContatoService) { }

  ngOnInit() {
  }

  
  cadastrar(): void{
    if((this.validar(this.nome)) && (this.validar(this.telefone))
    && (this.validar(this.dataNasc)) && (this.validar(this.sexo))){
      let contato = new Contato(this.nome, this.telefone, this.dataNasc, this.sexo)
      this.contatoService.inserir(contato)
      this.presentAlert("Agenda","Sucesso","Cadastro Realizado")
      this.router.navigate(["/home"])
    }else{
      this.presentAlert("Agenda","Erro","Preencha todos os campos!")
    }
    console.log(this.nome + " " + this.telefone + " " + this.dataNasc + " " + this.sexo)
  }

  private validar(campo: any): boolean{
    if (!campo){
      return false
    }
    return true
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
