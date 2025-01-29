import * as yup from 'yup';

export interface formikConfig {
  initValues: {
    name?: string;
    email?: string;
    password?: string;
    'confirm password'?: string;
  };
  validationSchema: yup.Schema<
    {
      name?: string;
      email?: string;
      password?: string;
      'confirm password'?: string;
    },
    Record<string, any>
  >;
  buttonTitle: string;
}
