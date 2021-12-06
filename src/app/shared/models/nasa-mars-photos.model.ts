export interface NasaMarsPhotoModel {
    id: string;
    sol: number;
    camera: NasaMarsCameraModel,
    img_src: string;
    earth_date: string;
    rover: NasaMarsRoverModel
}

export interface NasaMarsCameraModel {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface NasaMarsRoverModel {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export interface NasaMarsLatestPhotosApiResponseModel {
    latest_photos: NasaMarsPhotoModel[];
}

export interface NasaMarsPhotosApiResponseModel {
    photos: NasaMarsPhotoModel[];
}