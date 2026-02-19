export type WixDataItem = {
  _id?: string;
  [key: string]: unknown;
};

export type WixDataQueryResult<T = WixDataItem> = {
  items: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
