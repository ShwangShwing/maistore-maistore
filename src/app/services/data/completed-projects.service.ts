import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { CompletedProjectModel } from '../../models/completed-project.model';
import { calculateAverageRating } from '../../helpers/arithmetic-helpers';

@Injectable()
export class CompletedProjectsService {
  private completedProjects$: FirebaseListObservable<CompletedProjectModel[]>;
  private allProjects: CompletedProjectModel[];

  constructor(private af: AngularFireDatabase) {
    this.completedProjects$ = this.af.list('completedProjects');

    this.completedProjects$.subscribe(projectList => {
      this.allProjects = projectList;
    });
  }

  getAll(): Observable<CompletedProjectModel[]> {
    return this.completedProjects$;
  }

  getWorkerProjects(workerId: string): Observable<CompletedProjectModel[]> {
    return this.af.list(`workers/${workerId}/completedProjects`);
  }

  addProject(newCompletedProject: CompletedProjectModel) {
    return this.completedProjects$.push(newCompletedProject)
      .then(item => {
        newCompletedProject.id = item.key;

        this.af.object(`completedProjects/${newCompletedProject.id}/id`).set(newCompletedProject.id);
        return this.af.object(`workers/${newCompletedProject.workerId}/completedProjects/${item.key}`)
        .set(newCompletedProject);
      });
  }

  deleteProject(workerId: string, projectId: string) {
    this.af.object(`completedProjects/${projectId}`).remove();
    this.af.object(`workers/${workerId}/completedProjects/${projectId}`).remove();
  }

  rateProject(projectId: string, userId: string, rating: number) {
    this.af.object(`completedProjects/${projectId}/userRatings/${userId}`).set({ rating });
  }

  addPictureToProject(projectId: string, picturePath: string) {
    // TODO!!
  }

  getProjectsByFilter(competencyIds: string[], minRating: number) {
    return this.allProjects.filter(project => {
      const averageRating = calculateAverageRating(project.userRatings);
      if (averageRating < minRating) {
        return false;
      }

      let projectHasCompetency = false;
      for (let i = 0; i < competencyIds.length; i++) {
        if (typeof project.competencies[competencyIds[i]] !== 'undefined') {
          projectHasCompetency = true;
          break;
        }
      }

      if (!projectHasCompetency) {
        return false;
      }

      return true;
    });
  }
}
