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
        name: "Lamborghini"
      },
      {
        id: 1,
        name: "Pagani"
      },
      {
        id: 2,
        name: "Maclaren"
      },
      {
        id: 3,
        name: "Koenigsegg"
      },
      {
        id: 4,
        name: "Audi"
      },
      {
        id: 5,
        name: "Mercedes Benz"
      },
      {
        id: 6,
        name: ""
      }
    ];
    this.tarr = this.arr;
  }

  filter: any = [];

  ttt(_val) {
    const x = this.filter.find(d => {
      return d.col === "name";
    });

    if (!x) {
      this.filter.push({
        value: _val,
        op: "eq",
        col: "name"
      });
    } else {
      x.value = _val;
    }

    const val = _val;

    console.log(this.filter);
  }

  id(_val) {
    if (!_val) {
      this.arr = [...this.tarr];
      return;
    } else {
      const x = this.filter.find(d => {
        return d.col === "id";
      });

      if (!x) {
        this.filter.push({
          value: _val,
          op: "eq",
          col: "id"
        });
      } else {
        x.value = _val;
      }

      console.log(this.filter);
    }

    const val: number = +_val;
    // Exact match
    const exact = this.tarr.filter(ar => {
      return ar.id === val;
    });

    this.arr = [...exact];
  }

  filterString(val) {
    // Exact match
    const exact = this.tarr.filter(ar => {
      return ar.name.toLowerCase() === val.toLowerCase();
    });

    // Contains
    const containsAnyWhere = this.tarr.filter(ar => {
      return ar.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });

    // Does Not Contains
    const doesNotContainsAnyWhere = this.tarr.filter(ar => {
      return ar.name.toLowerCase().indexOf(val.toLowerCase()) === -1;
    });

    // startsWith
    const startsWith = this.tarr.filter(ar => {
      return ar.name.toLowerCase().endsWith(val.toLowerCase());
    });

    // endsWith
    const endsWith = this.tarr.filter(ar => {
      return ar.name.toLowerCase().endsWith(val.toLowerCase());
    });

    // empty
    const empty = this.tarr.filter(ar => {
      return ar.name.toLowerCase() === "" && ar.name.length === 0;
    });

    this.arr = [...containsAnyWhere];
    // console.log(empty);
  }
}
