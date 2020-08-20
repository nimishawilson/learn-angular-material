import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {
  DialogComponent,
  DialogOverviewExampleDialog,
} from './dialog/dialog.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypographyComponent,
    TogglebuttonComponent,
    IconsComponent,
    BadgesComponent,
    SpinnerComponent,
    ToolbarComponent,
    SidebarComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
