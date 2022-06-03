import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../service/crud.service';
import {Dados} from '../../model/country';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  dados: Dados;
  goBackUrl = '..';

  constructor(private crudService: CrudService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const name: string = this.route.snapshot.paramMap.get('id');
    this.crudService.get(name).subscribe(data => this.dados = data);
  }
}
