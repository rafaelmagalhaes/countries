export interface Country {
  flag: string
  flags: Flags
  name: string
  code: string
  idd: Idd
  cities?: string[]
}
export interface Flags {
  png: string
  svg: string
  alt: string
}
export interface Idd {
  root: string
  suffixes?: string[] | null
}
export interface City {
  name: string
  lat: string
  country: string
  lng: string
}
