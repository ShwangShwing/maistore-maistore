import { WorkerModel } from '../models/worker.model';

const workerList: WorkerModel[] = [
    {
        id: '1',
        username: 'MaistorGele',
        passwordHash: 'no-password',
        name: 'Maistor Gele',
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
        completedProjects: [
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
        ],
        userRatings: [
            {
                userId: '1',
                rating: 5
            }
        ]
    },
    {
        id: '2',
        username: 'StamatElektroto',
        passwordHash: 'no-password',
        name: 'Stamat Elektricheskia',
        competencies: [
            {
                id: '5',
                name: 'Electrical instalation'
            },
        ],
        completedProjects: [],
        userRatings: [],
    },
    {
        id: '3',
        username: 'Tosho',
        passwordHash: 'no-password',
        name: 'Tosho Vodoprovodchika',
        competencies: [
            {
                id: '4',
                name: 'Plumbing'
            },
            {
                id: '2',
                name: 'Painting'
            },
        ],
        completedProjects: [],
        userRatings: [
            {
                userId: '1',
                rating: 2
            }
        ]
    },
];

export { workerList };
