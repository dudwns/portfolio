"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js/auto";
import { fetchUsedLanguages } from "@/app/apis/useLanguages";
import { IChartData } from "@/app/types/chart";

const LanguageChart = () => {
  const [chart, setChart] = useState<IChartData | null>(null);

  const getChartData = async () => {
    const chartData = await fetchUsedLanguages();
    setChart(chartData);
    localStorage.setItem(
      "languageStats",
      JSON.stringify({
        data: chartData,
        timestamp: Date.now(),
      })
    );
  };

  useEffect(() => {
    const cached = localStorage.getItem("languageStats");
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 3600000) {
        setChart(data);
        return;
      }
    }
    getChartData();
  }, []);

  const options: ChartOptions<"bar"> = {
    scales: {
      y: {
        beginAtZero: true,
        max: 70,
        ticks: {
          callback: function (value) {
            if (typeof value === "number") {
              return `${value.toFixed(1)}%`;
            }
            return value;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return chart ? (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl animate-fadeIn">언어 사용 비율</h3>
      <div className="w-200">
        <Bar data={chart} options={options} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default LanguageChart;
