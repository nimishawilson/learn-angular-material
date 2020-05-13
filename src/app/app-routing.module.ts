import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'togglebutton', component: TogglebuttonComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'sidebar', component: SidebarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
