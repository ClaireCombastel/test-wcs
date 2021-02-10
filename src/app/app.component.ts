import { Component } from '@angular/core';
import firebase from "firebase";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wcs-test';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBfmCxQpUBjcJ0jCL1MjCUDtDw4-wEl8No",
      authDomain: "wcstest-251ab.firebaseapp.com",
      projectId: "wcstest-251ab",
      storageBucket: "wcstest-251ab.appspot.com",
      messagingSenderId: "317166858553",
      appId: "1:317166858553:web:a7c376f51009d0196ab8e8"
    };
    firebase.initializeApp(firebaseConfig);
  }
}


