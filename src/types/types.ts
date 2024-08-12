export interface placeholderText {
  mainText: string;
  additionalText: string;
}

export interface mainPageImage {
  src: string;
  alt: string;
  title: string;
  mainText: string;
  additionalText: string;
  width: number;
  height: number;
}

export interface innoDescription {
  title: string;
  description: string;
}

export interface skiImage {
  src: string;
  width: number;
  height: number;
}


export interface skiContent {
  description: string;
}

export interface netImage {
  src: string;
  width: number;
  height: number;
}

// Define an interface for the enterprise structure
export interface netEnterprise {
  id: number;
  name: string;
  description1: string;
  description2: string;
  images: netImage[];
}

export interface hotelServices {
  title: string;
  description: string;
  imageUrl: string;
  width: number;
  height: number;
}

export interface hotelDescription {
  title: string;
  address: string;
  phone: string;
  email: string;
}

export interface hotelContent {
  heading: string;
  description: hotelDescription;
}


export interface hotelImage {
  img: string;
  width: number;
  height: number;
}
