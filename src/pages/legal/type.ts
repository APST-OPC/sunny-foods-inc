export interface ILicenseAndSafety {
  img: string;
  description: string;
}

export interface IFactory extends ILicenseAndSafety {
  title: string;
}

export interface ISafetyCard {
  img: string;
  content: {
    title: string;
    subtitle?: string;
    description: string[];
  };
  isFlipped?: boolean;
}
