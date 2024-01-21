import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';

interface IProject {
  key: string;
  projectName: string;
  company: string;
  supervisor: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent implements OnInit {

  listOfData: IProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (res) => {
        const resp = JSON.parse(JSON.stringify(res));

        console.log(resp.data);

        if (resp.data === null) {
          this.listOfData = [];
        }

        for (let e of resp.data) {
          this.listOfData.push({
            key: e.id,
            projectName: e.name,
            company: e.company.name,
            supervisor: '',
            startDate: e.starts,
            endDate: e.ends,
          });
        }

        console.log(this.listOfData);
      }, error: console.error
    });
  }

}
