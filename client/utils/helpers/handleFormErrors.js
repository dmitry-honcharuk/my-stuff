import { SubmissionError } from 'redux-form';

import getErrors from './getErrors';

const handleFormErrors = error => {
  if (error.isAxiosError) {
    const {
      response: { data },
    } = error;
    if (data) {
      throw new SubmissionError(getErrors(data));
    }
  }
};

export default handleFormErrors;
