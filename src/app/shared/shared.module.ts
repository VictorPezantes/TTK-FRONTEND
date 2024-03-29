import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersByPaginationComponent } from './components/filters-by-pagination/filters-by-pagination.component';
import { PostulantInformationComponent } from './components/postulant-information/postulant-information.component';
import { SliderInformationComponent } from './components/slider-information/slider-information.component';
import { OfferInformationComponent } from './components/offer-information/offer-information.component';
import { StatusOffersPipe } from './pipes/status-offers.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StatusOffersPipe
    ],
    declarations: [
      FiltersByPaginationComponent,
      PostulantInformationComponent,
      SliderInformationComponent,
      OfferInformationComponent,
      StatusOffersPipe
    ]
})
export class SharedModule
{
}
