export interface IProductItem {
  sku: string,
  group: string,
  category: string,
  subcategory: string,
  uom: number
}

export interface IProductsResponse {
  data: IProductItem[]
}
