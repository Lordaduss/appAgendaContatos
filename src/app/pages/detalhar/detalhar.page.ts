import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/models/contato';
import { AlertController } from '@ionic/angular';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato: Contato
  nome: string
  telefone: number
  sexo: string
  dataNasc: string
  edicao: boolean

  constructor(private alertController: AlertController, private router: Router,private contatoService: ContatoService) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation()
    this.contato = nav.extras.state.objeto
    console.log(this.contato)
    this.nome = this.contato.nome
    this.telefone = this.contato.telefone
    this.sexo = this.contato.sexo
    this.dataNasc = this.contato.dataNasc

    //nome:[this.contato.nome,[Validators.required]],
  }

  alterarEdicao(): void{
    if(this.edicao == false){
      this.edicao = true
    }else{
      this.edicao = false
    }
  }

  editar(){
    if((this.validar(this.nome)) && (this.validar(this.telefone))
    && (this.validar(this.dataNasc)) && (this.validar(this.sexo))){
      if(this.contatoService.editar(this.contato,this.nome,this.telefone,this.dataNasc,this.sexo)){
        this.presentAlert("Agenda","Sucesso","Cadastro Editado")
        this.router.navigate(["/home"])
      }else{
        this.presentAlert("Agenda","Erro","Contato Não Existente")
      }
      this.router.navigate(["/home"])
    }else{
      this.presentAlert("Agenda","Erro","Preencha todos os campos!")
    }
  }
  excluir(): void{
    this.presentAlertConfirm("Agenda","Excluir contato","Você realmente deseja excluir o contato?")
  }

  private excluirContato(): void{
    if(this.contatoService.excluir(this.contato)){
      this.presentAlert("Agenda","Sucesso","Cadastro Excluido")
      this.router.navigate(["/home"])
    }else{
      this.presentAlert("Agenda","Erro","Contato Não Encontrado")
    }
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

  async presentAlertConfirm(cabecalho: string, subcabecalho: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem,
      buttons: [
        {
          text:'Cancelar',
          role:'cancelar',
          cssClass:'secondary',
          handler: ()=>{}
      },
      {
        text:'Confirmar',
        handler: ()=>{this.excluirContato()}
      }]
    });

    await alert.present();
  }
}
