import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule,  } from "@angular/material/icon";
import { MatMenuModule,  } from "@angular/material/menu";
import { MatDividerModule,  } from "@angular/material/divider";









@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule

  ],

  exports: [
    HeaderComponent,
    FooterComponent,
  ],

})
export class HomeModule {
}
