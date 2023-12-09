import { Component } from '@angular/core';

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
export class ListProjectComponent {
  listOfData: IProject[] = [
    {
      key: '1',
      projectName: 'Proyecto 1',
      company: 'Empresa A',
      supervisor: 'Supervisor A',
      startDate: '2023-01-01',
      endDate: '2023-02-01',
    },
    {
      key: '2',
      projectName: 'Proyecto 2',
      company: 'Empresa B',
      supervisor: 'Supervisor B',
      startDate: '2023-02-01',
      endDate: '2023-03-01',
    },
    {
      key: '3',
      projectName: 'Proyecto 3',
      company: 'Empresa C',
      supervisor: 'Supervisor C',
      startDate: '2023-03-01',
      endDate: '2023-04-01',
    },
    {
      key: '4',
      projectName: 'Proyecto 4',
      company: 'Empresa D',
      supervisor: 'Supervisor D',
      startDate: '2023-04-01',
      endDate: '2023-05-01',
    },
    {
      key: '5',
      projectName: 'Proyecto 5',
      company: 'Empresa E',
      supervisor: 'Supervisor E',
      startDate: '2023-05-01',
      endDate: '2023-06-01',
    },
    {
      key: '6',
      projectName: 'Proyecto 6',
      company: 'Empresa F',
      supervisor: 'Supervisor F',
      startDate: '2023-06-01',
      endDate: '2023-07-01',
    },
    {
      key: '7',
      projectName: 'Proyecto 7',
      company: 'Empresa G',
      supervisor: 'Supervisor G',
      startDate: '2023-07-01',
      endDate: '2023-08-01',
    },
    {
      key: '8',
      projectName: 'Proyecto 8',
      company: 'Empresa H',
      supervisor: 'Supervisor H',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
    },
    {
      key: '9',
      projectName: 'Proyecto 9',
      company: 'Empresa I',
      supervisor: 'Supervisor I',
      startDate: '2023-09-01',
      endDate: '2023-10-01',
    },
    {
      key: '10',
      projectName: 'Proyecto 10',
      company: 'Empresa J',
      supervisor: 'Supervisor J',
      startDate: '2023-10-01',
      endDate: '2023-11-01',
    },
    {
      key: '11',
      projectName: 'Proyecto 11',
      company: 'Empresa K',
      supervisor: 'Supervisor K',
      startDate: '2023-11-01',
      endDate: '2023-12-01',
    },
    {
      key: '12',
      projectName: 'Proyecto 12',
      company: 'Empresa L',
      supervisor: 'Supervisor L',
      startDate: '2023-12-01',
      endDate: '2024-01-01',
    },
    {
      key: '13',
      projectName: 'Proyecto 13',
      company: 'Empresa M',
      supervisor: 'Supervisor M',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
    },
    {
      key: '14',
      projectName: 'Proyecto 14',
      company: 'Empresa N',
      supervisor: 'Supervisor N',
      startDate: '2024-02-01',
      endDate: '2024-03-01',
    },
    {
      key: '15',
      projectName: 'Proyecto 15',
      company: 'Empresa O',
      supervisor: 'Supervisor O',
      startDate: '2024-03-01',
      endDate: '2024-04-01',
    },
    {
      key: '16',
      projectName: 'Proyecto 16',
      company: 'Empresa P',
      supervisor: 'Supervisor P',
      startDate: '2024-04-01',
      endDate: '2024-05-01',
    },
    {
      key: '17',
      projectName: 'Proyecto 17',
      company: 'Empresa Q',
      supervisor: 'Supervisor Q',
      startDate: '2024-05-01',
      endDate: '2024-06-01',
    },
    {
      key: '18',
      projectName: 'Proyecto 18',
      company: 'Empresa R',
      supervisor: 'Supervisor R',
      startDate: '2024-06-01',
      endDate: '2024-07-01',
    },
  ];
}
