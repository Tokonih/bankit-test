import * as Yup from 'yup';
import { formikConfig } from '../../components/Form/FormikConfig';
import Wrapper from './index';
import Form from '../../components/Form';
import DOMPurify from 'dompurify';

export interface IUserData {
  email?: string | undefined;
  password?: string | undefined;
}

function LoginPage() {
  const formikConfig: formikConfig = {
    initValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required')
        .test('is-sanitized', 'Invalid characters detected', (value) =>
          value ? value === DOMPurify.sanitize(value) : false
        ),
      password: Yup.string().min(8, 'Password must be 8 characters or longer!').required('Required')
    }),
    buttonTitle: 'Sign In'
  };

  const handleLogin = (userData: IUserData) => {
    // I AM USING SESSION STORAGE HERE BECAUSE I DON'T HAVE A BACKEND, IDEALY WE ARE TO SECURE USER DETAILS USING HTTP ONLY COOKIES
    const expirationTime = new Date().getTime() + 30 * 60 * 1000;
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('expiresAt', expirationTime.toString());
    window.location.href = '/';
  };

  return (
    <Wrapper>
      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="max-h-[90vh] flex flex-col px-4 py-8 bg-white shadow-lg sm:rounded-lg sm:pl-10 sm:pr-[28px] gap-7">
          <h2 className="text-2xl font-bold text-center">Welcome back!</h2>
          <div className="px-[1px]">
            <Form onSubmit={(values) => handleLogin(values)} formikConfig={formikConfig} />
          </div>
        </div>
        {/* <Help /> */}
      </div>
    </Wrapper>
  );
}

export default LoginPage;
