import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase; 

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()    
  }


  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  public verifcarResposta(): void {

    if(this.rodadaFrase.frasePor == this.resposta){
      
      alert('A tradução esá correta!')

      // para trocar de pergunta 
      this.rodada++

      // atualizar a barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      // quando chega no final do jogo
      if(this.rodada === 4){
        this.encerrarJogo.emit('Vitória!!')
      }

      // atualiza para próxima rodada
      this.atualizaRodada()
    } else {
      alert('A tradução está incorreta!')

      // decrementar a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota!')
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]

    // limpa a resposta da caixa de texto
    this.resposta = ''
  }
}
