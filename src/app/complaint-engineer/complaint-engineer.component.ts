import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint-engineer',
  templateUrl: './complaint-engineer.component.html',
  styleUrls: ['./complaint-engineer.component.css']
})
export class ComplaintEngineerComponent implements OnInit {

  complaintdetails = [];
  constructor(
    private complaintService:ComplaintService
  ) { }

  ngOnInit(): void {
   //this.getAllComplaints();
  this.getAllComplaintsForEngineer();
  }
 getAllComplaintsForEngineer() {
    this.complaintService.getComplaintListEngg()
    .subscribe(
      (resp: Complaint[]) => {
        console.log(resp);
        resp.forEach(c => this.complaintdetails.push(c));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
      );
  } 

 /* getAllComplaints()
  {
    this.complaintService.getComplaintList()
    .subscribe(
      (resp: Complaint[]) => {
        console.log(resp);
        resp.forEach(c => this.complaintdetails.push(c));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  } */

  wip(complaintId){
    this.complaintService.markAsWip(complaintId);
    //this.getAllComplaintsForEngineer();
   //this.getAllComplaints();
  }
  Reviewed(complaintId){
    this.complaintService.markAsInReview(complaintId);
   // this.getAllComplaintsForEngineer();
    //this.getAllComplaints();
  }
  Resolved(complaintId){
    this.complaintService.markAsResolved(complaintId);
   // this.getAllComplaintsForEngineer();
   //this.getAllComplaints();
  }

}
