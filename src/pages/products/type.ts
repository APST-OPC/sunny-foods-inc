export type IProductType = "Core Products" | "Steak Series"

export interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
  type: IProductType;
  tags?: string[]
}
