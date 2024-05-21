import { Component, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TalleresComponent } from '../web/talleres/talleres.component';
import { EventosComponent } from '../web/eventos/eventos.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialModule, TalleresComponent,EventosComponent,RouterLink,RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
  @Output() CloseSidenav = new EventEmitter<void>();
  constructor(
    //private router: Router, 
    //private ActivatedRoute: ActivatedRoute
    ) 
    { }
  onClose() {
    this.CloseSidenav.emit();
  }
  ngOnInit(): void {
  }
}
