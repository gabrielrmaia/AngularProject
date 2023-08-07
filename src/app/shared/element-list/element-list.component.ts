import { Register } from 'src/app/models/Register';
import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent {
  element!: Register;
  changeInfo!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
      public data: Register,
      public dialogRef: MatDialogRef<ElementListComponent>,
    
  ) {}

    ngOnInit(): void {//Ver depois o que faz o ngOnInit
      if(this.data.position != null) {//Aqui retorna DATA que é o elemento periódico
        this.changeInfo = true
      } else {
        this.changeInfo = false
      }
    }

  

  onCancel(): void {
    this.dialogRef.close();
  }

}
