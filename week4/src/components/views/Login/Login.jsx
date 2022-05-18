 import { useFormik } from 'formik';

 const Login = ({loginUser}) => {

    const formik = useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: values => {
        loginUser(values.username, values.password);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
         <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default Login;