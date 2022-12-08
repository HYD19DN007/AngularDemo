import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { PbindingComponent } from './pbinding/pbinding.component';
import { CbindingComponent } from './cbinding/cbinding.component';
import { EbindingComponent } from './ebinding/ebinding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { StructralDirectivesComponent } from './structral-directives/structral-directives.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpEmpService } from './http-emp.service';
import {HttpClientModule} from '@angular/common/http';
import { ConsumefileComponent } from './consumefile/consumefile.component';
import { CreateComponent } from './create/create.component';
import { HttpusersService } from './httpusers.service';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PbindingComponent,
    CbindingComponent,
    EbindingComponent,
    TwowayBindingComponent,
    StructralDirectivesComponent,
    TestComponent,
    EmployeeListComponent,
    ConsumefileComponent,
    CreateComponent,
    UpdateComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,HttpEmpService,HttpusersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
