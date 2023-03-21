class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

try {
  console.log(name);
  // const name = "Maria Aparecida";

  const myError = new CustomError({
    message: 'Custom message on custom error',
    data: {
      type: 'Server error'
    }
  });
  throw myError;

} catch (error) {
  console.log(error);
  console.log(error.data);
  if (error.data.type === 'Server error') {
    console.log('do something if error is from server');
  } else {
    console.log('Specific exception');
  }
} finally {
  console.log('Keep going...');
}
