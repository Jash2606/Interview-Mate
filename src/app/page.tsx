import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button>
          <p>Ander Jao</p>
        </Button>
      </SignInButton>
      
    </div>
  );
}
