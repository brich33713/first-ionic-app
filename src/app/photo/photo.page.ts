import { Component, OnInit } from "@angular/core";
import { async } from "@angular/core/testing";
import { Router } from "@angular/router";

// imports for Camera usage on mobile devices
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory, FilesystemPlugin } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.page.html',
    styleUrls: ['./photo.page.scss'], 
})

export class PhotoService implements OnInit {
    imgSrc: string;
    image: {filepath: string, webviewPath: string}
    imgArray = [];
    
    //savePicture method variables
    base64data: string;
    fileName: string;
    savedFile: Object;

    blobVar: Blob;
    fileR: FileReader;

    platform: Platform;
    

    ngOnInit(){

    }

    takePicture = async () => {
        const capturedImg = await Camera.getPhoto({
          quality: 90,
          source: CameraSource.Camera,
          allowEditing: false,
          resultType: CameraResultType.Uri,
        //   saveToGallery: true,
          
        });

        
        // console.log(await this.fileR.readAsDataURL(this.blobVar));

        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        // this.image = {filepath: "soon", webviewPath: capturedImg.webPath};
        
        // var imageUrl = image.webPath;
      
        // Can be set to the src of an image now
        this.imgSrc = capturedImg.webPath;
        
        this.imgArray.push(this.image);
    };

    savePicture = async (cameraPhoto: Photo) => {
        this.base64data = await this.readAsBase64(cameraPhoto);
        this.fileName = new Date().getTime() + '.jpeg';        
        
        this.savedFile = await Filesystem.writeFile({
            path: this.fileName,
            data: this.base64data,
            directory: Directory.Data
        })
    }

    readAsBase64 = async(cameraPhoto: Photo) => {
          // Read the file into base64 format
          const file = await Filesystem.readFile({
            path: cameraPhoto.path
          });
      
          return file.data;
        
      }

}