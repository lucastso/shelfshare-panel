import SignInButton from "@/components/sign_in_button";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="border grid grid-rows-2 rounded-md border-gray-300">
        <div className="flex items-center justify-center border-b border-gray-300">
          <Image
            src="/logo.png"
            alt=""
            width={512}
            height={256}
            className="w-40"
          />
        </div>
        <div className="flex items-center justify-center p-2">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
