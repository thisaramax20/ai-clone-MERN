import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-16">
      <SignIn signUpUrl="/sign-up" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default SignInPage;
