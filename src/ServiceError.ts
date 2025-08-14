export interface ServiceErrorValue {
  statusText: string;
  status: number;
  responseData: any;
}

export default class ServiceError extends Error {
  statusText: string;
  status: number;
  responseData: any;

  constructor(params: { statusText: string; status: number; responseData: any }) {
    super(`ServiceError: ${params.status} ${params.statusText}`);
    this.statusText = params.statusText;
    this.status = params.status;
    this.responseData = params.responseData;
  }

  get value(): ServiceErrorValue {
    return { statusText: this.statusText, status: this.status, responseData: this.responseData };
  }
}
