import { CompetencyModel } from './competency.model';

export interface CompletedProjectModel {
    id?: string;
    name: string;
    workerId: string;
    competencies: CompetencyModel[];
    picturePaths: string[];
    userRatings: {
        rating: number; // between 1 and 5
    }[];
}
