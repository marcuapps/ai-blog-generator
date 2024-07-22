// src/components/SignOutButton.tsx
import { signOut, useSession } from "next-auth/react";

const SignOutButton: React.FC = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
