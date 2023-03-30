class CustomError extends Error {
  constructor(name: string, mess: string, statusCode: string) {
    super(mess);
    this.name = name;
    this.stack = statusCode;
  }
}

export default CustomError;
