// src/pages/protected.tsx
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

const ProtectedPage: React.FC = () => {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>You can see this content because you are logged in.</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProtectedPage;
