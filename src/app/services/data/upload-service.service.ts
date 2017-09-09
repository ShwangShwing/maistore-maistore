import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class UploadService {
//   constructor(private db: AngularFireDatabase) { }

//   private basePath = '/uploads';
//   private uploadTask: firebase.storage.UploadTask;

//   pushUpload(filename) {
//     uploadTask = storageRef.child(filename).put(file);
//   }

//   // Writes the file details to the realtime db
//   private saveFileData(upload: Upload) {
//     this.db.list(`${this.basePath}/`).push(upload);
//   }
    upload(workerId: string, file: File) {
        console.log('uploading');
        console.log(file);
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(`worker-pics/${workerId}`);

        return fileRef.put(file)
            .then(snapshot => snapshot.downloadURL);
    }
}
