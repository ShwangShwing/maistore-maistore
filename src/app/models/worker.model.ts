import { CompetencyModel } from './competency.model';
import { CompletedProjectModel } from './completed-project.model';

export interface WorkerModel {
    id: string;
    username: string;
    passwordHash: string;
    name: string;
    competencies: CompetencyModel[];
    completedProjects: CompletedProjectModel[];
    userRatings: {
        userId: string;
        rating: number; // between 1 and 5
    }[];
}
