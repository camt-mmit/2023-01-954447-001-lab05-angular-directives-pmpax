import { Routes } from '@angular/router';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';

export const routes: Routes = [
    {path: 'dynamic-input', component : DynamicInputComponent},
    {path: 'dynamic-section', component : DynamicSectionComponent},
];
