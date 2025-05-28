import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome : string = '';
  perfil = {
    username: 'fulanosilva',
    nome: 'Fulano da Silva',
    local: 'Manaus',
    idade: 39,
    profissao: 'Pedreir/o',
    empresa: 'Regis ConStruções',
    publicacoes: 1145,
    seguidores: 1743,
    seguindo: 1549,
    foto: 'https://th.bing.com/th/id/OIP.U7SENCKIAKx6quEemTFFZgHaE7?cb=iwp2&rs=1&pid=ImgDetMain'
  }

}
