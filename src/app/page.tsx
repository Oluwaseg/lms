import Link from 'next/link';

const page = () => {
  return (
    <div className='container mx-auto p-4 '>
      <h1 className='text-2xl font-bold'>Welcome to the LMS</h1>
      <p className='mb-4 text-amber-600'>
        This is the main landing page of the Learning Management System.
      </p>

      {/* Student route */}
      <h2 className='text-xl font-semibold'>Student Authentication</h2>
      <p className='mb-4'>
        Students can log in and register through the student authentication
        page.
      </p>
      <Link href='/students/login' className='text-blue-500 hover:underline'>
        Student Login
      </Link>
      <br />
      <Link href='/students/register' className='text-blue-500 hover:underline'>
        Student Register
      </Link>
      <br />
      {/* Instructor route */}
      <h2 className='text-xl font-semibold'>Instructor Authentication</h2>
      <p className='mb-4'>
        Instructors can log in and register through the instructor
        authentication page.
      </p>
      <Link href='/instructors/login' className='text-blue-500 hover:underline'>
        Instructor Login
      </Link>
      <br />
      <Link
        href='/instructors/register'
        className='text-blue-500 hover:underline'
      >
        Instructor Register
      </Link>
      <br />

      {/* Parent route */}
      <h2 className='text-xl font-semibold'>Parent Authentication</h2>
      <p className='mb-4'>
        Parents can log in and register through the parent authentication page.
      </p>
      <Link href='/parents/login' className='text-blue-500 hover:underline'>
        Parent Login
      </Link>
      <br />
      <Link href='/parents/register' className='text-blue-500 hover:underline'>
        Parent Register
      </Link>
      <br />

      {/* Dashboard route */}
      <h2>Dashboard</h2>
      <p>
        After logging in, users are redirected to their respective dashboards
        based on their roles.
      </p>
    </div>
  );
};

export default page;
