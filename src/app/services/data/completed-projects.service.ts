import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CompletedProjectModel } from '../../models/completed-project.model';

import { completedProjectList } from '../../in-memory-data/completedProjects';
import { workerList } from '../../in-memory-data/workers';

@Injectable()
export class CompletedProjectsService {
  private completedProjects$: BehaviorSubject<CompletedProjectModel[]>;

  constructor() {
    this.completedProjects$ = new BehaviorSubject<CompletedProjectModel[]>(completedProjectList);
  }

  getAll(): Observable<CompletedProjectModel[]> {
    return this.completedProjects$;
  }

  addProject(newCompletedProject: CompletedProjectModel): void {
    const worker = workerList.find(w => w.id === newCompletedProject.workerId);
    if (!worker) {
      return;
    }

    completedProjectList.push(newCompletedProject);
    worker.completedProjects.push(newCompletedProject);
    this.completedProjects$.next(completedProjectList);
  }

  rateProject(projectId: string, userId: string, rating: number) {
    const project = completedProjectList.find(p => p.id === projectId);
    if (!project) {
      return;
    }

    const userRating = project.userRatings.find(u => u.userId === userId);
    if (rating) {
      userRating.rating = rating;
    } else {
      project.userRatings.push({userId, rating});
    }

    const worker = workerList.find(w => w.id === project.workerId);
    if (!worker) {
      return;
    }

    for (let i = 0; i < worker.completedProjects.length; i++) {
      if (worker.completedProjects[i].id === project.workerId) {
        worker.completedProjects[i] = project;
        return;
      }
    }
  }

  addPictureToProject(projectId: string, picturePath: string) {
    const project = completedProjectList.find(p => p.id === projectId);
    if (!project) {
      return;
    }

    project.picturePaths.push(picturePath);

    const worker = workerList.find(w => w.id === project.workerId);
    if (!worker) {
      return;
    }

    for (let i = 0; i < worker.completedProjects.length; i++) {
      if (worker.completedProjects[i].id === project.workerId) {
        worker.completedProjects[i].picturePaths.push(picturePath);
        return;
      }
    }
  }
}
