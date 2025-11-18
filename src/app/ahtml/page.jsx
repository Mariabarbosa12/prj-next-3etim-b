"use client";

import { useRef, useEffect } from "react";
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from "chart.js";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

export default function termos() {
  const router = useRouter();
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
        datasets: [
          {
            label: "Consumo de Água (L)",
            data: [300, 250, 400, 350, 200, 150, 100],
            backgroundColor: "#353967",
            borderColor: "#2f65d1",
          
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 500,
            ticks: {
              stepSize: 100,
              font: {
                size: 80, // tamanho dos números do eixo Y
                weight: "bold",
              },
            },
          },
          x: {
            ticks: {
              font: {
                size: 80, // tamanho dos dias da semana
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link  href={'/home'}
          className={styles.backButton}
        >
          <Image src="/voltar.png" alt="Voltar" width={130} height={124} priority />
        </Link>
        <Image src="/logo.png" alt="Logo BLUVA" width={180} height={180} priority />
        <span>BLUVA</span>
      </div>

      <div className={styles.container}>
        <p className={styles.sm}>CONSUMO DE ÁGUA</p>
        <div className={styles.chartContainer}>
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
}
