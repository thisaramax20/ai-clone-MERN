import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-16">
      <SignUp signInUrl="/sign-in" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default SignUpPage;
