import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Member} from "../interface/member";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[] = [];

  membersSubject = new Subject<Member[]>();
  constructor() { }

  emitMembers() {
    this.membersSubject.next(this.members);
  }

  saveMembers() {
    firebase.database().ref('/members').set(this.members);
  }

  getMembers() {
    firebase.database().ref('/members').on('value', (data) => {
      this.members = data.val() ? data.val() :  [];
      this.emitMembers();
    });
  }

  createMember(member: Member) {
    this.members.push(member);
    this.saveMembers();
    this.emitMembers();
  }
}
