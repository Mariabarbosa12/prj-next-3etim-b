"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import api from '@/services/api';

export default function Perfil() {
  const [user, setUser] = useState({ nome: '', tipo_usu: '', id_usu: null, email: '', telefone: '' });
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser((prev) => ({
          ...prev,
          nome: parsed.nome || prev.nome,
          tipo_usu: parsed.tipo_usu || prev.tipo_usu,
          id_usu: parsed.id_usu || prev.id_usu,
          email: parsed.email || prev.email,
          telefone: parsed.telefone || prev.telefone,
        }));

  // Se tivermos um id de usuário, buscar dados completos na API
        if (parsed.id_usu) {
          const fetchUser = async (id) => {
            try {
              // usa a rota completa relativa à baseURL do axios (api)
              const res = await api.get(`/usuarios?id_usu=${id}`);
              if (res?.data?.sucesso && Array.isArray(res.data.dados) && res.data.dados.length) {
                const servidorUser = res.data.dados[0];
                setUser((prev2) => ({
                  ...prev2,
                  nome: servidorUser.nome || prev2.nome,
                  tipo_usu: servidorUser.tipo_usu || prev2.tipo_usu,
                  id_usu: servidorUser.id_usu || prev2.id_usu,
                  email: servidorUser.email || prev2.email,
                  telefone: servidorUser.telefone || prev2.telefone,
                }));
              } else {
                console.warn('Resposta inesperada ao buscar usuário:', res?.data);
              }
            } catch (err) {
              console.error('Erro ao buscar usuário na API:', err);
            }
          };

          fetchUser(parsed.id_usu);
        }
      }
    } catch (e) {
      console.warn('Erro ao ler user do localStorage:', e);
    }
  }, []);

  // sincroniza o form com o estado do usuário quando ele muda
  useEffect(() => {
    setForm({ nome: user.nome || '', email: user.email || '', telefone: user.telefone || '' });
  }, [user.nome, user.email, user.telefone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    // reverte para os valores do servidor
    setForm({ nome: user.nome || '', email: user.email || '', telefone: user.telefone || '' });
    setEditing(false);
  };

  const handleSave = async () => {
    if (!user.id_usu) {
      alert('ID do usuário não encontrado. Faça login novamente.');
      return;
    }

    const payload = {
      tipo_usu: user.tipo_usu || '1',
      nome: form.nome,
      email: form.email,
      telefone: form.telefone,
    };

    // Usar apenas o endpoint PUT /usuarios/:id conforme informado, para evitar tentativas que geram 404s no console
    try {
      const res = await api.patch(`/usuarios/${user.id_usu}`, payload);
      if (res?.data?.sucesso) {
        const updated = (res.data.dados && res.data.dados[0]) ? res.data.dados[0] : { ...user, ...payload };
        setUser((prev) => ({ ...prev, ...updated }));
        try {
          localStorage.setItem('user', JSON.stringify({ ...prevSafe(user), ...payload }));
        } catch (e) {
          localStorage.setItem('user', JSON.stringify(updated));
        }
        setEditing(false);
        alert('Dados atualizados com sucesso.');
      } else {
        console.warn('Resposta inesperada ao atualizar usuário:', res?.data);
        alert('Não foi possível atualizar. Veja o console para mais detalhes.');
      }
    } catch (err) {
      console.error('Erro ao atualizar usuário:', err);
      const status = err?.response?.status;
      if (status === 404) {
        alert('Rota não encontrada (404). O backend pode estar esperando outro endpoint ou método. Me envie o registro de rede (Network) que funcionou para eu ajustar.');
      } else {
        alert('Erro ao atualizar usuário. Verifique o console e a API.');
      }
    }
  };

  // helper para garantir cópia segura do user atual
  const prevSafe = (u) => ({
    id_usu: u?.id_usu ?? null,
    tipo_usu: u?.tipo_usu ?? '1',
    nome: u?.nome ?? '',
    email: u?.email ?? '',
    telefone: u?.telefone ?? '',
  });

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link  href={'/home'}
          className={styles.backButton}
        >
           <img src="/voltar.png" alt="Voltar" />
        </Link>
       <img src="/logo.png" alt="Logo BLUVA" />
        <span>BLUVA</span>
      </header>

      <main className={styles.container}>
        <h2 className={styles.sm}>PERFIL DO USUÁRIO</h2>

        <section className={styles.cccontainer}>
          <div className={styles.infoSection}>
            <div className={styles.perfilInfo}>
              <Image
                src="/usu.png"
                alt="Foto de Perfil"
                width={160}
                height={160}
                className={styles.profileImage}
              />
              <div >
                <span>APELIDO:</span>
                <input className={styles.perfilInput} type="text" value={user.nome ? `@${user.nome}` : '@Usuário'} disabled />
              </div>
            </div>

            <div className={styles.inputInfo}>
              <label>
                <span>NOME:</span>
                <input name="nome" type="text" value={editing ? form.nome : (user.nome || '')} onChange={handleChange} disabled={!editing} />
              </label>
              <label>
                <span>EMAIL:</span>
                <input name="email" type="text" value={editing ? form.email : (user.email || '')} onChange={handleChange} disabled={!editing} />
              </label>
              <label>
                <span>TELEFONE:</span>
                <input name="telefone" type="text" value={editing ? form.telefone : (user.telefone || '')} onChange={handleChange} disabled={!editing} />
              </label>
              <label>
                <span>SENHA:</span>
                <input type="password" value="********" disabled />
              </label>
            </div>
          </div>

          <div className={styles.buttonSection}>
            <button>ALTERAR FOTO DE PERFIL</button>
            <button>ALTERAR APELIDO</button>
            {!editing ? (
              <button onClick={handleEditClick}>ALTERAR DADOS PESSOAIS</button>
            ) : (
              <>
                <button onClick={handleSave}>SALVAR</button>
                <button onClick={handleCancel}>CANCELAR</button>
              </>
            )}
            <button>EXCLUIR CONTA</button>

            <button onClick={() => {
              // limpa os dados de sessão e redireciona
              try {
                localStorage.removeItem('user');
                localStorage.removeItem('isLogged');
              } catch (e) {
                console.warn('Erro ao limpar localStorage no logout:', e);
              }
              router.push('/login');
            }}>SAIR DA CONTA</button>

          </div>
        </section>
      </main>
    </div>
  );
}
