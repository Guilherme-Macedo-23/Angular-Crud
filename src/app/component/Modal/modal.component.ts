// Angular imports
import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// PrimeNG imports
import {PrimeNGConfig} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import {Dados} from '../../model/country';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showDialog: boolean;
  @Input() header: string;
  data: Dados;
  dadosForm: FormGroup;

  constructor(private primengConfig: PrimeNGConfig, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.data = this.config.data.dados;
    this.dadosForm = new FormGroup({
      id: new FormControl({value: this.data.id, disabled: this.data.id != null}, [Validators.required]),
      name: new FormControl(this.data.name, [Validators.required]),
      capital: new FormControl(this.data.telefone, [Validators.required]),
    });
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.formValuesToCountry();
    this.ref.close(this.data);
  }

  hideDialog() {
    this.ref.close(null);
  }

  formValuesToCountry() {
    this.data = this.dadosForm.getRawValue();
  }

}
