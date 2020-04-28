import { IEmployee } from './../employee/models/employee.interface';
import { EmployeeFormComponent } from '../employee/components/employee-form/employee-form.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

type FormType = "create" | "update" | "read"; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  formType: FormType;

  @Input()
  columns : Array<String> = [];

  @Input()
  employees : Array<any> = [];

  constructor(private modalService : NgbModal) { }
  
  ngOnInit(): void{
    console.log(this.employees, this.columns, 'Inside ngOnInit');
  }
    openModal(formType: FormType, employee: IEmployee) {
      this.formType = formType;
      const modalRef = this.modalService.open(EmployeeFormComponent);
      modalRef.componentInstance.formType = this.formType;
      modalRef.componentInstance.employee = employee;
      modalRef.componentInstance.closeModal.subscribe(() => {
        modalRef.close();
      })
    }
}
