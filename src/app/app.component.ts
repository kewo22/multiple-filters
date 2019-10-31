import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  arr: any[] = [];
  tarr: any[] = [];
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
    this.tarr = this.arr;
  }

  ttt(_val) {
    const val = _val;

    // Exact match
    const exact = this.tarr.filter(ar => {
      return ar.name === val;
    });

    // Contains
    const containsAnyWhere = this.tarr.filter(ar => {
      return ar.name.indexOf(val) !== -1;
    });

    // Does Not Contains
    const doesNotContainsAnyWhere = this.tarr.filter(ar => {
      return ar.name.indexOf(val) === -1;
    });

    // startsWith
    const startsWith = this.tarr.filter(ar => {
      return ar.name.endsWith(val);
    });

    // endsWith
    const endsWith = this.tarr.filter(ar => {
      return ar.name.endsWith(val);
    });

    // empty
    const empty = this.tarr.filter(ar => {
      return ar.name === "" && ar.name.length === 0;
    });

    this.arr = [...containsAnyWhere];
    // console.log(empty);
  }

  id(_val) {
    if (!_val) {
      this.arr = [...this.tarr];
      return;
    }

    const val: number = +_val;
    // Exact match
    const exact = this.tarr.filter(ar => {
      return ar.id === val;
    });

    this.arr = [...exact];
  }
}
