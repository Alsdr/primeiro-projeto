import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  perfil = {
    username: 'fulanosilva',
    nome: 'Fulano da Silva',
    local: 'Manaus',
    idade: 28,
    profissao: 'Desenvolvedor Web',
    empresa: 'FpfTech',
    publicacoes: 1145,
    seguidores: 1743,
    seguindo: 1549,
    foto: 'https://encrypted-tbn0.gst++++'
  }

}
