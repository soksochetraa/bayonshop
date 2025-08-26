import HeaderUser from "@/src/components/layout/loginform/HeaderUser";
import LoginForm from "@/src/components/layout/loginform/LoginForm";
import React from "react";

const page = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <HeaderUser />
      <LoginForm />
    </section>
  );
};

export default page;
