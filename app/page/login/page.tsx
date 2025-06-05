'use client';
import { useState } from "react";
import Image from "next/image"; 
import { Eye, EyeClosed } from "lucide-react"; 

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex min-h-screen p-14">
      {/* Parte do formulário */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-6 flex justify-center md:justify-start">
            <Image
              src="/logo.png"
              alt="Logo Tropa Digital"
              width={200}
              height={100}
            />
          </div>

          {/* Título e subtítulo */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-[#cc6237] text-4xl font-bold">Bem-vindo de volta</h1>
            <p className="text-[#4a6fa4] text-sm mt-1">
              Entre com sua conta para acessar o painel.
            </p>
          </div>

          {/* Formulário */}
          <form className="w-full space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#cc6237] font-semibold mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="seunome@seuservidor.com"
                className="w-full px-4 py-3 rounded-full bg-gray-100 text-sm focus:outline-none"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-[#cc6237] font-semibold mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Digite aqui"
                  className="w-full px-4 py-3 rounded-full bg-gray-100 text-sm focus:outline-none pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#cc6237] cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-[#cc6237] hover:bg-[#a63e15] text-white py-3 cursor-pointer rounded-full text-sm font-medium"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      {/* Imagem - Direita */}
      <div className="bg-[#cc6237] rounded-[2rem] hidden md:flex md:w-1/2 items-end relative">
  {/* Wrapper fora do overflow-hidden */}
  <div className="absolute -left-10 bottom-0 w-[500px] h-[600px] z-10 translate-y-20">
    <Image
      src="/hero.png"
      alt="Pessoa usando celular"
      fill
      className="object-contain"
    />
  </div>
</div>
    </div>
  );
};

export default LoginPage;