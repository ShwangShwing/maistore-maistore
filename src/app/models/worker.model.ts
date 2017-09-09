import { CompetencyModel } from './competency.model';
import { CompletedProjectModel } from './completed-project.model';

export interface WorkerModel {
    userId: string;
    name: string;
    competencies: CompetencyModel[];
    completedProjects: CompletedProjectModel[];
    picUrl?: string;
    userRatings: {
        rating: number; // between 1 and 5
    }[];
}
