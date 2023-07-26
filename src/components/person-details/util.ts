export const personFormValidations = {
  name: {
    required: {
      value: true,
      message: "This field is required.",
    },

    minLength: {
      value: 2,
      message: "Name cannot be less than 2 characters.",
    },

    maxLength: {
      value: 20,
      message: "Name cannot be more than 20 characters.",
    },
  },
  age: {
    required: {
      value: true,
      message: "This field is required.",
    },
  },
  dob: {
    required: {
      value: true,
      message: "This field is required.",
    },
    validate: {
      isBeforeCurrentDate: (v: Date | null) => {
        let error = "Date of Birth can't be in future :(";
        return v ? v < new Date() || error : error;
      },
    },
  },
  state: {
    required: {
      value: true,
      message: "This field is required.",
    },
  },
};
