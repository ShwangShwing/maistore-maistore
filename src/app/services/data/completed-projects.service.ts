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

  getById(projectId: string) {
    return this.af.object(`completedProjects/${projectId}`);
  }

  addProject(newCompletedProject: CompletedProjectModel): void {
    const pushedProjectKey = this.completedProjects$.push(newCompletedProject);
    this.af.object(`workers/${newCompletedProject.workerId}/completedProjects/${pushedProjectKey}`)
      .set(newCompletedProject);
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
