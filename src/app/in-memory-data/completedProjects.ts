import { CompletedProjectModel } from '../models/completed-project.model';

const completedProjectList: CompletedProjectModel[] = [
    {
        id: '1',
        name: 'Obekt 1',
        workerId: '1',
        competencies: [
            {
                id: '1',
                name: 'Tiles'
            },
            {
                id: '3',
                name: 'Spackling' // шпакловка
            },
        ],
        picturePaths: [ 'https://c1.staticflickr.com/5/4153/4984379596_3e85401e56_b.jpg' ],
        userRatings: [
            {
                userId: '1',
                rating: 5
            }
        ]
    }
];

export { completedProjectList };
