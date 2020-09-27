import * as Yup from 'yup';

import getValidationErros, { Erros } from '../getValidationErros';

const validate = async (data: object): Promise<Erros | undefined> => {
  try {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters long.')
        .required('Fields is required.'),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords must match.',
      ),
    });

    await schema.validate(data, { abortEarly: false });

    return undefined;
  } catch (err) {
    return getValidationErros(err);
  }
};

export default validate;
