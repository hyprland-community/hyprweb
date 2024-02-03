/** So that we can type the response in our APIs */
export interface JsonResponse<T> extends Response {
  json(): Promise<T>

  arrayBuffer(): never
  blob(): never
  formData(): never
  text(): never
}
