import { HttpErrorResponse } from '@angular/common/http';
import { IResponse } from 'src/app/models/response.interface';
import { AppServicesService } from 'src/app/services/app-services.service';
import { ICandidate } from './../models/candidate.interface';
import { AppServicesService } from "../services/app-services.service";
import { Component, OnInit } from "@angular/core";
import { FileItem, FileUploader, ParsedResponseHeaders } from "ng2-file-upload";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "../reusable-components/modal/modal.component"
import { Router } from "@angular/router";

const URL = 'http://localhost:3000/api/candidate'

@Component({
  selector: "app-candidate-form",
  templateUrl: "./candidate-form.component.html",
  styleUrls: ["./candidate-form.component.scss"],
})
export class CandidateFormComponent implements OnInit {

<<<<<<< HEAD
  constructor(private modalService: NgbModal,
  ) { }
=======
  constructor(private modalService : NgbModal,
              private router: Router,
              private service: AppServicesService
              ) { }
>>>>>>> da377f39f009a9e258b047771fabb48d772491d5

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: "file",
    allowedMimeType: ["application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf"]

  });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onSuccessItem = (item: any, response: string, status: number) => {
      console.log("successfull")
      let data = JSON.parse(response);
      const modalRef: NgbModalRef = this.modalService.open(ModalComponent);

      modalRef.componentInstance.shouldConfirm = false;

      modalRef.componentInstance.success = data.success;
      modalRef.componentInstance.message = data.payload.message;

      modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
        modalRef.close();
      });


    }

    this.uploader.onErrorItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
<<<<<<< HEAD
      let data = JSON.parse(response);
      const modalRef: NgbModalRef = this.modalService.open(ModalComponent);

      modalRef.componentInstance.shouldConfirm = false;

      modalRef.componentInstance.success = data.success;
      modalRef.componentInstance.message = data.payload.message;

      modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
        modalRef.close();
      });

    }
=======
    console.log("error displayed")
    let data = JSON.parse(response);
    const modalRef: NgbModalRef = this.modalService.open(ModalComponent);
>>>>>>> da377f39f009a9e258b047771fabb48d772491d5



<<<<<<< HEAD
  }

=======
    modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
      modalRef.close();
    });
  
    }
    
    this.load()
  }
>>>>>>> da377f39f009a9e258b047771fabb48d772491d5

  model: any = {};
  type: String;

  createCandidate(candidateObj: ICandidate) {
    if (
      candidateObj.name &&
      candidateObj.email &&
      candidateObj.aadhar &&
      candidateObj.file &&
      candidateObj.skills &&
      candidateObj.appliedFor
    ) {
      if (this.uploader.getNotUploadedItems().length != 0) {
        this.uploader.onBuildItemForm = (item, form) => {
          form.append("name", candidateObj.name);
          form.append("experience", candidateObj.experience);
          form.append("email", candidateObj.email);
          form.append("aadhar", candidateObj.aadhar);
          form.append("skills", candidateObj.skills);
          form.append("appliedFor", candidateObj.appliedFor);
          // item.formData = candidateObj.name;
          // item.formData = candidateObj.experience;
          // item.formData = candidateObj.email;
          // item.formData = candidateObj.aadhar;
          // item.formData = candidateObj.skills;
          // item.formData = candidateObj.appliedFor;
        };
        this.uploader.uploadAll();
      }
    }
  }
  
  load(){
    this.type = this.router.url.split("/")[1];
    if(this.router.url.split("/")[1]=="progressTracker"){
      let candidateId = this.router.url.split("/")[2];
      this.service.getCandidate(candidateId).subscribe(
        (res: IResponse) =>{
          this.model = res.payload.data;
        },
        (error: HttpErrorResponse) => {
        }
      )}
    else if(this.router.url.split("/")[1]=="candidate"){
      this.model.appliedFor = this.router.url.split("/")[2];
    }
  }
}
