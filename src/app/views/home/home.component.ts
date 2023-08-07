import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTable, MatTableModule} from '@angular/material/table';
import { Register } from 'src/app/models/Register';
import { ElementListComponent } from 'src/app/shared/element-list/element-list.component';


const ELEMENT_DATA: Register[] = [
  {position: 1, name: 'Sesisnando Lagos', job: 'Presidente', age:25},
  {position: 2, name: 'Gabriel Maia', job: 'Empreśario', age: 19},
  {position: 3, name: 'Lucas Ramalho', job: 'Jogador de Tênis', age: 19},
  {position: 4, name: 'Nathália Rodrigues', job: 'Cantora', age: 20},
  {position: 5, name: 'Julis Araújo', job: 'Tech Lead', age: 25}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(MatTable)//o view CHild serve para buscar o id filho
  table!: MatTable<any>
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog){}

  openList(element: Register | null):void {
    const dialogRef = this.dialog.open(ElementListComponent, {
      data: element === null ? {
        position : null,
        name: '',
        job: null,
        age: ''
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {//Verifica qual é o resultado que é passado após o fechamento da Lista
      if(result !== undefined) {
        this.dataSource.push(result)
        this.table.renderRows()//Para renderizar novamente a tabela após ter feito o push dos Dados
      }
    });
  }
    delete(position:number):void {
      this.dataSource = this.dataSource.filter(i => i.position !== position)
    }

    edit(element: Register):void {
      this.openList(element)//Pega a função de abrir a Lista ond elá você já pode fazer as edições das informações
    }

  }


