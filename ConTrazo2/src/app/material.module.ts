import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule,MatIconButton} from '@angular/material/button'
import{ MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
      MatButtonModule,
      MatIconButton,
      MatButton,
      MatIconModule,
    MatSidenavModule
  ], 
  exports:[
       MatButtonModule,
       MatIconButton,
       MatButton,
       MatIconModule,
       MatSidenavModule
  ]

})
export class MaterialModule { 

}
