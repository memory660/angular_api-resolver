export interface NasaApodApiResponseModel {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string,
    resource?: string,
    concept_tags?: boolean,
    concepts?: string,
    thumbnail_url?: string,
    copyright?: string
}