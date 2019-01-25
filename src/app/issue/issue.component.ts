import { Component, OnInit, OnDestroy } from '@angular/core';
import { CsvToJsonService } from '../csv-to-json.service';
import { Issue } from '../Issue';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [CsvToJsonService]
})
export class IssueComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  issues: Issue[] = [];
  dtTrigger: Subject<any> = new Subject();


  constructor(private csvService: CsvToJsonService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      retrieve: true
    };
  }

  setCsvContents(result) {
    let content = {
      header: true,
      separator: ',',
      csv: result
    };

    this.issues = this.csvService.csvToJSON(content);
    this.dtTrigger.next();    

  }

  filesAdded(files: FileList) {
    if (files && files.length > 0) {
      let file = files.item(0);
      let reader = new FileReader();
      reader.onload = () => {
        this.setCsvContents(reader.result);
      };
      reader.readAsText(file);

    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
