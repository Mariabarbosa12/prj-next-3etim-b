'use client';
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function chat() {
 

  return (
    <div className={styles.body}>
      <div className={styles.header}>
         <Link  href={'/home'}
          className={styles.backButton}
        >
          <Image src="/voltar.png" alt="Voltar" width={135} height={114} priority />
        </Link>
        <img src="/logo.png" alt="Logo BLUVA" />
        <span>BLUVA</span>
      </div>

      <div className={styles.contatoChat}>

      <iframe 
        src="https://bluva-horti-helper-264805782463.us-west1.run.app" 
        height="700" 
        style={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        title="BLUVA Horti Helper"
      />




       
      </div>
    </div>
  );
}
