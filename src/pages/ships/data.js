import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

const ShipDataPage = () => {
  const [shipData, setShipData] = useState(null)

  useEffect(() => {
    // 加載艦船數據
    import("../../data/shipsData.json").then(data => {
      setShipData(data)
    })
  }, [])

  // 繪製圖表的數據格式化
  const createChartData = (shipType, attribute) => {
    return shipData ? {
      labels: shipData[shipType].map(ship => `Level ${ship.level}`),
      datasets: [{
        label: `${shipType} - ${attribute}`,
        data: shipData[shipType].map(ship => ship[attribute]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }]
    } : null
  }

  // 根據艦船的 type 來返回相應的中文名稱
  const getShipTypeName = (type) => {
    if (type === 'Missile') return '導彈';
    if (type === 'Laser') return '雷射';
    if (type === 'Kinetic') return '動能';
    return type; // fallback if type doesn't match
  }

  // 創建數據表格，添加 text-align: center 居中對齊
  const createTable = (shipType) => {
    return (
      <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>等級</th>
            <th>艦船名稱</th>
            <th>類型</th>
            <th>戰力</th>
            <th>載重</th>
            <th>生命值</th>
            <th>裝甲</th>
            <th>護盾</th>
            <th>傷害輸出</th>
          </tr>
        </thead>
        <tbody>
          {shipData[shipType].map((ship, idx) => (
            <tr key={idx}>
              <td>{ship.level}</td>
              <td>{ship.ship_name}</td>
              <td>{getShipTypeName(ship.type)}</td> {/* 顯示類型中文名稱 */}
              <td>{ship.power}</td> {/* 戰力 */}
              <td>{ship.load}</td>
              <td>{ship.HP}</td>
              <td>{ship.armor}</td>
              <td>{ship.shield}</td>
              <td>{ship.damage_output}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  // 創建所有艦船大比較的數據（疊加）
  const createComparisonChart = (attribute, leadership) => {
    return shipData ? {
      labels: shipData.frigate.map(ship => `Level ${ship.level}`), // 假設所有艦船的等級數據一致
      datasets: [
        {
          label: '護衛艦',
          data: shipData.frigate.map(ship => ship[attribute] / leadership.frigate),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true
        },
        {
          label: '驅逐艦',
          data: shipData.destroyer.map(ship => ship[attribute] / leadership.destroyer),
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true
        },
        {
          label: '巡洋艦',
          data: shipData.cruiser.map(ship => ship[attribute] / leadership.cruiser),
          borderColor: 'rgba(255, 159, 64, 1)',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          fill: true
        }
      ]
    } : null
  }

  return (
    <Layout>
      <h1>艦船資料</h1>
      <p>這裡提供艦船的詳細資料</p>
      <sub><font color="grey">資料是我從該遊戲中造船的那裡一個一個抄下來的，希望能讓大家方便。另外感謝我弟幫忙整理驅逐艦的資料</font></sub>
      
      <p>艦船的重點整理可參考<Link to="/ships">艦船簡介</Link></p>

      {shipData ? (
        <div>
          {/* 護衛艦部分 */}
          <h2>護衛艦</h2>
          {createTable('frigate')} {/* 添加護衛艦數據表格 */}
          <Line data={createChartData('frigate', 'load')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '護衛艦 - 載重' } } }} />
          <Line data={createChartData('frigate', 'damage_output')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '護衛艦 - 傷害輸出' } } }} />

          {/* 驅逐艦部分 */}
          <h2>驅逐艦</h2>
          {createTable('destroyer')} {/* 添加驅逐艦數據表格 */}
          <Line data={createChartData('destroyer', 'load')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '驅逐艦 - 載重' } } }} />
          <Line data={createChartData('destroyer', 'damage_output')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '驅逐艦 - 傷害輸出' } } }} />

          {/* 巡洋艦部分 */}
          <h2>巡洋艦</h2>
          {createTable('cruiser')} {/* 添加巡洋艦數據表格 */}
          <Line data={createChartData('cruiser', 'load')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '巡洋艦 - 載重' } } }} />
          <Line data={createChartData('cruiser', 'damage_output')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '巡洋艦 - 傷害輸出' } } }} />

          {/* 艦船大比較 */}    
          <h2>艦船大比較</h2>

          {/* 單位領導力戰力比較 */}
          <Line data={createComparisonChart('power', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力戰力比較' } } }} />
          <p>由上述圖表可知，不同種類艦船在相同階數</p>

          {/* 單位領導力載重比較 */}
         <Line data={createComparisonChart('load', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力載重比較' } } }} />

          {/* 單位領導力傷害輸出比較 */}
          <Line data={createComparisonChart('damage_output', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力傷害輸出比較' } } }} />

          {/* 單位領導力生命值比較 */}
          <Line data={createComparisonChart('HP', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力生命值比較' } } }} />

          {/* 單位領導力裝甲比較 */}
          <Line data={createComparisonChart('armor', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力裝甲比較' } } }} />

          {/* 單位領導力護盾比較 */}
          <Line data={createComparisonChart('shield', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力護盾比較' } } }} />

        </div>
      ) : (
        <p>加載中...</p>
      )}
    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title="艦船頁面" 
    description="這裡整理了infinite galaxy中艦船的詳細資料"
    lang="zh-Hant"
  />
)

export default ShipDataPage
