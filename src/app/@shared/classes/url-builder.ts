// Application Classes
import { QueryStringParameters } from './query-string-parameters';

export class UrlBuilder {
  public url: string;
  public queryString: QueryStringParameters;

  constructor(private baseUrl: string, private action: string, queryString?: QueryStringParameters) {
    this.url = [baseUrl, action].join('/');
    this.queryString = queryString || new QueryStringParameters();
  }

  public toString(): string {
    const qs: string = this.queryString ? this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }
}
