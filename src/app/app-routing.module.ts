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
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'togglebutton', component: TogglebuttonComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid', component: GridComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'card', component: CardComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
