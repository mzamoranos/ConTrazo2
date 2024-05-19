import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialModule} from '../material.module';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TalleresComponent } from '../web/talleres/talleres.component';
import { EventosComponent } from '../web/eventos/eventos.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule,RouterLink,RouterLinkActive, FlexLayoutModule,
    TalleresComponent,EventosComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit
{
  @Output() SidenavToggle = new EventEmitter<void>();
  constructor(
    public router: Router, 
    private ActivatedRouter:ActivatedRoute) 
    { }
  onToggleSidenav() {
    this.SidenavToggle.emit();
  }
  ngOnInit(): void {
  }
}
    
  
