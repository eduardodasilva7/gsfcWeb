import React, { useState } from 'react';
import '../formulario/formulario.css';
import Menu from '../menu/Menu'

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    assunto: '',
    mensagem: '',
  });

  const [erros, setErros] = useState({});
  const [mensagemErro, setMensagemErro] = useState('');
  const [formEnviado, setFormEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErros((prev) => ({ ...prev, [name]: false }));
    setMensagemErro('');
    setFormEnviado(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = {};

    Object.entries(formData).forEach(([campo, valor]) => {
      if (valor.trim() === '') {
        novosErros[campo] = true;
      }
    });

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setMensagemErro('');
      setFormEnviado(true);
      console.log('Formulário enviado com sucesso:', formData);
    } else {
      setMensagemErro('⚠️ Preencha todos os campos antes de enviar.');
      setFormEnviado(false);
    }
  };

  return (
    <div lang="pt-BR">
     <Menu/>

      <main>
        <div className="entre-em-contato-container">
          <h1 className="titulo-principal">Entre em Contato</h1>
          <p>O Grupo Socorrista Francisco de Assis informa que:</p>
          <ul>
            <li>Verifique se o e-mail está correto.</li>
            <li>Contato é apenas para informações sobre a casa espírita.</li>
            <li>Atendimentos devem ser preferencialmente presenciais.</li>
            <li>Endereço: Rua Diogo de Quadros, 363 – São Paulo/SP.</li>
            <li>Não realizam psicografia.</li>
            <li>Todos os trabalhos são gratuitos e voluntários.</li>
            <li>Casas que cobram não são espíritas.</li>
          </ul>
        </div>

        <div className="div1-entre-em-contato">
          <h2>Formulário de Contato:</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Nome', name: 'nome' },
              { label: 'E-mail', name: 'email', type: 'email' },
              { label: 'Bairro', name: 'bairro' },
              { label: 'Cidade', name: 'cidade' },
              { label: 'Estado', name: 'estado' },
              { label: 'CEP', name: 'cep' },
              { label: 'Assunto', name: 'assunto' },
            ].map(({ label, name, type = 'text' }) => (
              <div className="input-grupo" key={name}>
                <label htmlFor={name}>{label}:</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={
                    erros[name]
                      ? 'input-erro'
                      : formEnviado
                      ? 'input-sucesso'
                      : ''
                  }
                />
              </div>
            ))}

            <div className="input-grupo">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                name="mensagem"
                id="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className={
                  erros.mensagem
                    ? 'input-erro'
                    : formEnviado
                    ? 'input-sucesso'
                    : ''
                }
              />
            </div>

            {mensagemErro && (
              <p className="mensagem-erro">{mensagemErro}</p>
            )}
            {formEnviado && (
              <p className="mensagem-sucesso">✅ Formulário enviado com sucesso!</p>
            )}

            <button type="submit" className="envia-form">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Formulario;
