import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/models/mesa.model';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  mesasList: Mesa[] = [];

  constructor(private router: Router, private mesaService: MesaService) {}

  ngOnInit(): void {
    this.getTableList();
  }

  private getTableList() {
    this.mesaService.getListMesa().subscribe({
      next: (data: Mesa[]) => {
        this.mesasList = data;
      },
      error: (err: Error) => {
        console.log(err);
      },
    });
  }
}
