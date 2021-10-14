export const validation = {
  required: {
    required: 'This is a required field',
  },
  phone: {
    pattern: {
      value: /^\+?[0-9-() ]*$/,
      message: 'Fill in a valid phonenumber',
    },
    maxLength: {
      value: 14,
      message: 'Phonenumber is too long',
    },
    minLength: {
      value: 10,
      message: 'Phonenumber is too short',
    },
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Fill in a valid email address',
    },
  },
  number: {
    pattern: {
      value: /^\d+$/,
      message: 'This field can only contain numbers',
    },
  },
  date: {
    pattern: {
      value: /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/,
      message: 'Fill in a valid date',
    },
  },
  address: {
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+$/,
      message: 'Fill in a valid address',
    },
  },
  password: {
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`])\S{8,99}$/,
      message: 'Password should contain at least 8 characters, 1 capital, 1 lowercase letter, 1 number and 1 special character',
    },
    minLength: {
      value: 8,
      message: 'Password should contain at least 8 characters, 1 capital, 1 lowercase letter, 1 number and 1 special character',
    },
  },
  textarea: {
    maxLength: {
      value: 255,
      message: 'This field contains too many characters (max 255)',
    },
  },
  postalCode: {
    pattern: {
      value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
      message: 'Fill in a valid postal code',
    },
  },
  positiveInterger: {
    validate: (value: string) => {
      const isValid = parseInt(value) >= 0;
      return !value || isValid || 'This value should be above 0';
    },
  },
  time: {
    pattern: {
      value: /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      message: 'Fill in a valid time',
    },
  },
};
