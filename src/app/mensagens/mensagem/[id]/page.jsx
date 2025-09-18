import { use } from 'react';
import { notFound } from 'next/navigation';

import mensagensMockup from '@/componentes/mockup/mensagens';
import Mensagem from '@/componentes/Mensagens/Mensagem';

export default function MensagemRota({ params }) {
  const awaitedParams = use(Promise.resolve(params));
  const { id } = awaitedParams;

  const mensagem = produtosMockup.find(item => item.id === parseInt(id));

  if (!mensagem) {
    notFound(); 
  }

  return <Mensagem mensagem={mensagem} />;
}