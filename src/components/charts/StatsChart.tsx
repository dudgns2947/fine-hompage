import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ApexCharts를 동적으로 import (SSR 이슈 해결)
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartContainer = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  margin: 2rem 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }
  }

  .chart-wrapper {
    width: 100%;
    height: 350px;

    @media (max-width: 768px) {
      height: 300px;
    }

    @media (max-width: 480px) {
      height: 250px;
    }
  }
`;

interface StatsChartProps {
  type: 'satisfaction' | 'growth' | 'services' | 'performance';
}

const StatsChart: React.FC<StatsChartProps> = ({ type }) => {
  const getChartConfig = () => {
    switch (type) {
      case 'satisfaction':
        return {
          title: '고객 만족도 추이',
          series: [{
            name: '만족도',
            data: [85, 88, 92, 95, 97, 99]
          }],
          options: {
            chart: {
              type: 'line' as const,
              height: 350,
              toolbar: { show: false },
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
              }
            },
            colors: ['#FF6B35'],
            stroke: {
              curve: 'smooth' as const,
              width: 4
            },
            xaxis: {
              categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
              labels: {
                style: {
                  colors: '#7F8C8D',
                  fontSize: '12px'
                }
              }
            },
            yaxis: {
              min: 80,
              max: 100,
              labels: {
                formatter: (value: number) => `${value}%`,
                style: {
                  colors: '#7F8C8D',
                  fontSize: '12px'
                }
              }
            },
            grid: {
              borderColor: '#E9ECEF',
              strokeDashArray: 5
            },
            markers: {
              size: 6,
              colors: ['#FF6B35'],
              strokeColors: '#fff',
              strokeWidth: 2,
              hover: {
                size: 8
              }
            },
            tooltip: {
              theme: 'light',
              y: {
                formatter: (value: number) => `${value}%`
              }
            }
          }
        };

      case 'growth':
        return {
          title: '매출 성장률',
          series: [{
            name: '매출',
            data: [120, 145, 180, 220, 280, 350]
          }],
          options: {
            chart: {
              type: 'bar' as const,
              height: 350,
              toolbar: { show: false },
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
              }
            },
            colors: ['#F39C12'],
            plotOptions: {
              bar: {
                borderRadius: 8,
                columnWidth: '60%',
                distributed: false
              }
            },
            xaxis: {
              categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
              labels: {
                style: {
                  colors: '#7F8C8D',
                  fontSize: '12px'
                }
              }
            },
            yaxis: {
              labels: {
                formatter: (value: number) => `${value}억`,
                style: {
                  colors: '#7F8C8D',
                  fontSize: '12px'
                }
              }
            },
            grid: {
              borderColor: '#E9ECEF',
              strokeDashArray: 5
            },
            tooltip: {
              theme: 'light',
              y: {
                formatter: (value: number) => `${value}억원`
              }
            }
          }
        };

      case 'services':
        return {
          title: '서비스 이용 현황',
          series: [35, 25, 20, 20],
          options: {
            chart: {
              type: 'donut' as const,
              height: 350,
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
              }
            },
            colors: ['#FF6B35', '#F39C12', '#2C3E50', '#7F8C8D'],
            labels: ['생명보험', '손해보험', '건강보험', '연금보험'],
            legend: {
              position: 'bottom' as const,
              fontSize: '14px',
              labels: {
                colors: '#7F8C8D'
              }
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '60%',
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      label: '전체',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#2C3E50'
                    }
                  }
                }
              }
            },
            tooltip: {
              theme: 'light',
              y: {
                formatter: (value: number) => `${value}%`
              }
            }
          }
        };

      case 'performance':
        return {
          title: '월별 성과 지표',
          series: [
            {
              name: '신규 고객',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80]
            },
            {
              name: '계약 건수',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 110, 120, 135]
            }
          ],
          options: {
            chart: {
              type: 'area' as const,
              height: 350,
              toolbar: { show: false },
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
              }
            },
            colors: ['#FF6B35', '#F39C12'],
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.1,
              }
            },
            stroke: {
              curve: 'smooth' as const,
              width: 3
            },
            xaxis: {
              categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
              labels: {
                style: {
                  colors: '#7F8C8D',
                  fontSize: '12px'
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: '#7F8C8D',
                  fontSize: '12px'
                }
              }
            },
            grid: {
              borderColor: '#E9ECEF',
              strokeDashArray: 5
            },
            legend: {
              position: 'top' as const,
              fontSize: '14px',
              labels: {
                colors: '#7F8C8D'
              }
            },
            tooltip: {
              theme: 'light'
            }
          }
        };

      default:
        return { title: '', series: [], options: {} };
    }
  };

  const { title, series, options } = getChartConfig();

  return (
    <ChartContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <div className="chart-wrapper">
        <Chart
          options={options}
          series={series}
          type={options.chart?.type || 'line'}
          height={350}
        />
      </div>
    </ChartContainer>
  );
};

export default StatsChart;
