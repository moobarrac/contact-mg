// Importing required modules and hooks
import Chart, { ChartItem } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { useHistoricalData } from '../hooks/useHistoricalData';

const LineGraph = () => {
  // Creating a reference to canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Fetching the historical data using custom hook
  const { data: casesData } = useHistoricalData();

  // Rendering the chart using Chart.js and updating it when casesData changes
  useEffect(() => {
    if (casesData && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d') as ChartItem;

      const chartInstance = Chart.getChart('line-graph');
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Creating a new chart with data received from casesData
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Object.keys(casesData.cases),
          datasets: [
            {
              label: 'Cases',
              data: Object.values(casesData.cases),
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
            },
          ],
        },
      });
    }
  }, [casesData, canvasRef]);

  // Rendering the JSX
  return (
    <div className="p-4 md:p-8">
      <canvas ref={canvasRef} id="line-graph" className=" w-full h-full" />
    </div>
  );
};

export default LineGraph;  // export LineGraph component for use in other parts of the application
