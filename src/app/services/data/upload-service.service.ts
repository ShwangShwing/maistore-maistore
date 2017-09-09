import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class UploadService {
    upload(filename: string, file: File) {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(filename);

        return fileRef.put(file)
            .then(snapshot => snapshot.downloadURL);
    }
}
