import React from 'react';
import Link from 'next/link';


const HomePage = () => {
  return (
    <div className="bg-red-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo à nossa plataforma!</h1>
      <p className="text-lg mb-8">Cadastre-se para obter acesso a todos os recursos incríveis que oferecemos.</p>
      <Link href='/formularioJogador'>
      <button className="bg-black hover:bg-gray-900 py-3 px-6 rounded-md text-lg font-bold focus:outline-none focus:ring focus:border-red-300">
          Cadastrar-se
        </button>
      </Link>
      <p className="mt-4">Já possui uma conta? <Link href="/login"><span className="text-black hover:text-gray-900 cursor-pointer">Faça login aqui</span></Link></p>
    </div>
  );
};

export default HomePage;
