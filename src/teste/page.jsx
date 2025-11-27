import Link from "next/link"; 

export default function Teste() {
    return(
        <div>
            <Link href={'/usuarios/entrada'}>Primeira pagina</Link> <br />
            <Link href={'/usuarios/login'}>Login</Link> <br />
            <Link href={'/usuarios/cadastro'}>cadastro</Link> <br />
            <Link href={'/home'}>PG de Entrada</Link> <br />
            <Link href={'/quest'}>Questionario</Link> <br />
            <Link href={'/termos'}>Termos</Link> <br />
            <Link href={'/chat'}>Chat</Link> <br />
            <Link href={'/contatos'}>Contatos</Link> <br />
            <Link href={'/perfil'}>Perfil</Link> <br />
            <Link href={'/perfiltc'}>Perfil tecnico</Link> <br/>
        </div>
    );
}