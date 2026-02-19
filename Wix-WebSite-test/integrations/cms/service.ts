import { WixDataItem, WixDataQueryResult } from ".";

/**
 * Static-hosting fallback service.
 * Keeps API shape used by components without requiring Wix runtime.
 */
export class BaseCrudService {
  static async create<T extends WixDataItem>(
    _collectionId: string,
    itemData: Partial<T> | Record<string, unknown>
  ): Promise<T> {
    return itemData as T;
  }

  static async getAll<T extends WixDataItem>(
    _collectionId: string,
    _includeReferencedItems?: string[]
  ): Promise<WixDataQueryResult<T>> {
    return {
      items: [],
      totalCount: 0,
      offset: 0,
      limit: 0,
    };
  }

  static async getById<T extends WixDataItem>(
    _collectionId: string,
    _itemId: string,
    _includeReferencedItems?: string[]
  ): Promise<T | null> {
    return null;
  }

  static async update<T extends WixDataItem>(
    _collectionId: string,
    itemData: T
  ): Promise<T> {
    return itemData;
  }

  static async delete<T extends WixDataItem>(
    _collectionId: string,
    _itemId: string
  ): Promise<T> {
    throw new Error("Delete is not supported in static mode");
  }
}
