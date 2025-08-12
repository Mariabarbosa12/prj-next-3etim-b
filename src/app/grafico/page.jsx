"use client";

import { useRef, useEffect } from "react";
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from "chart.js";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

export default function grafico() {
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
            borderWidth: 1,
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

    // cleanup on unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => router.push("/home/home")}
          aria-label="Voltar"
        >
          <Image src="/voltar.png" alt="Voltar" width={24} height={24} priority />
        </button>
        <Image src="/logo.png" alt="Logo BLUVA" width={30} height={30} priority />
        <span>BLUVA</span>
      </div>

      <div className={styles.container}>
        <h2>CONSUMO DE ÁGUA</h2>
        <div className={styles.chartContainer}>
          <canvas ref={chartRef} />
        </div>
      </div>
    </>
  );
}
