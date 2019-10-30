import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  arr: any[] = [];
  val: string = "";

  ngOnInit() {
    this.arr = [
      {
        id: 0,
        name: "Kewin"
      },
      {
        id: 1,
        name: "Pravin"
      },
      {
        id: 2,
        name: "Marlon"
      },
      {
        id: 3,
        name: "Adrian"
      },
      {
        id: 4,
        name: "Vivian"
      },
      {
        id: 5,
        name: "Milan"
      },
      {
        id: 6,
        name: ""
      }
    ];
  }

  ttt(val) {
    // Exact match
    const exact = this.arr.filter(ar => {
      return ar.name === val;
    });

    // Contains
    const containsAnyWhere = this.arr.filter(ar => {
      return ar.name.indexOf(val) !== -1;
    });

    // Does Not Contains
    const doesNotContainsAnyWhere = this.arr.filter(ar => {
      return ar.name.indexOf(val) === -1;
    });

    // startsWith
    const startsWith = this.arr.filter(ar => {
      return ar.name.endsWith(val);
    });

    // endsWith
    const endsWith = this.arr.filter(ar => {
      return ar.name.endsWith(val);
    });

    // empty
    const empty = this.arr.filter(ar => {
      return ar.name === '' && ar.name.length === 0;
    });

    console.log(empty);
  }

  qwdqwd() {
    this.ttt(this.val);
    // console.log();
  }
}
