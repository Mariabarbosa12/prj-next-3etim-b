import Link from "next/link"; 

export default function Teste() {
    return(
        <div>
            <Link href={'/usuarios/login'}>Login</Link> <br />
            <Link href={'/usuarios/cadastro'}>cadastro</Link> <br />
            <Link href={'/Entrada'}>PG de Entrada</Link> <br />
            <Link href={'/grafico'}>Grafico</Link> <br />
            <Link href={'/chat'}>Chat</Link> <br />
            <Link href={'/contatos'}>Contatos</Link> <br />
            <Link href={'/perfil'}>Perfil</Link> <br />
        </div>
    );
}