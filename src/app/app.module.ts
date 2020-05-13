import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, TypographyComponent, TogglebuttonComponent, IconsComponent, BadgesComponent, SpinnerComponent, ToolbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
