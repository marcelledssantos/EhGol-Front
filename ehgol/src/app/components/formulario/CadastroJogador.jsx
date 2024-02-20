"use client";
import React, { useState } from "react";

const CadastroJogador = () => {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        timeCoracao: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Dados do jogador:', formData);

        setFormData({
            nome: '',
            idade: '',
            timeCoracao: '',
            email: '',
            senha: ''
        });
    };

    return (
        <div className="max-w-md mx-auto bg-red-900 text-white py-8 px-4 rounded-md shadow-md">
            <h2 className="text-3xl font-bold text-center mb-8">Cadastro de Jogador</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nome" className="block mb-1 text-white">Nome:</label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 text-black" />
                </div>
                <div>
                    <label htmlFor="idade" className="block mb-1 text-white">Idade:</label>
                    <input type="number" id="idade" name="idade" value={formData.idade} onChange={handleChange} className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 text-black" />
                </div>
                <div>
                    <label htmlFor="timeCoracao" className="block mb-1 text-white">Time do Coração:</label>
                    <input type="text" id="timeCoracao" name="timeCoracao" value={formData.timeCoracao} onChange={handleChange} className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 text-black" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 text-white">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 text-black" />
                </div>
                <div>
                    <label htmlFor="senha" className="block mb-1 text-white">Senha:</label>
                    <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 text-black" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">Cadastrar</button>
                </div>

            </form>
        </div>
    );
};

export default CadastroJogador;