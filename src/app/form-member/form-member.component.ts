import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MembersService} from "../services/members.service";
import {Member} from "../interface/member";

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.css']
})
export class FormMemberComponent implements OnInit {

  membersForm: FormGroup;
  members: Member[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.initMembersForm();
    this.membersService.getMembers();
    this.membersService.emitMembers();
  }

  initMembersForm() {
    this.membersForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmitMembersForm() {
   const newMember: Member = this.membersForm.value;
   this.membersService.createMember(newMember);
   console.log(this.membersService.members);
  }

  resetForm() {
    this.membersForm.reset();
  }
}
