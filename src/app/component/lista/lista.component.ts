import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Dados} from '../../model/country';
import {CrudService} from '../../service/crud.service';
import { ModalComponent } from '../Modal/modal.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  dados: Dados[];
  selectDados: Dados;

  constructor(private crudService: CrudService, private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit() {
    this.crudService.getAll().subscribe(data => this.dados = data);
    this.primengConfig.ripple = true;
  }

  onRowSelect($event: any) {
    this.router.navigate(['countries', $event.data.id]);
  }

  delete(dados: Dados) {
    this.crudService.delete(dados.id).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Removido!'});
    });
  }

  openCreateModal() {
    const ref = this.openModal(new Dados(), 'Add');
    ref.onClose.subscribe((dados: Dados) => {
      if (dados) {
        this.crudService.create(dados).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Criado!'});
        });
      }
    });
  }

  openEditModal(selectedDados: Dados) {
    const ref = this.openModal(selectedDados, 'Edit');
    ref.onClose.subscribe((dados: Dados) => {
      if (dados) {
        this.crudService.update(dados.id, dados).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Atualizado!'});
        });
      }
    });
  }

  openModal(dados: Dados, header: string): DynamicDialogRef {
    return this.dialogService.open(ModalComponent, {
      data: {dados},
      header,
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000
    });
  }
}
