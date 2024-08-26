import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

const ShipPage = () => {
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
      
      <p>艦船的重點整理可參考<Link to="/fleet">艦隊</Link>頁面</p>

      {shipData ? (
        <div>
          {/* 護衛艦部分 */}
          <h2>護衛艦</h2>
          <p>護衛艦是一種小型的戰鬥艦艇。雖然在低階不明顯，但在高階艦船中護航艦耐久跟護盾明顯超出其他兩種艦船。裝甲則是不管階數都遠超其他兩者，高階更多。因此護衛艦是重要的<b>防禦性</b>艦船</p>
          <p>另外，在<Link to="/fff">戰役</Link>關卡中，由於一次可以叫出（呼叫？請求？）三艘，可針對敵方的雷射武器對自身旗艦做出比其他兩者更加強而有力的保護。<sub>此特點會於<Link to="/fff">戰役</Link>頁面中做更詳細解釋</sub></p>
          <ul>
            <li>航行速度：最快</li>
            <li>單位領導力載重：最低</li>
            <li>克制：驅逐艦</li>
          </ul>

          {createTable('frigate')} {/* 添加護衛艦數據表格 */}
          <Line data={createChartData('frigate', 'load')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '護衛艦 - 載重' } } }} />
          <Line data={createChartData('frigate', 'damage_output')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '護衛艦 - 傷害輸出' } } }} />

          {/* 驅逐艦部分 */}
          <h2>驅逐艦</h2>
          <p>驅逐艦是中型的戰艦，鑑於其極高的<b>載重</b>能力，為用來<b>挖礦</b>的重要艦船。</p>
          <p>其單位領導力下的傷害輸出略高於其他兩者。</p>
          <p><strong>很重要：從下表可看出，2階驅逐艦載重高於8階之前的所有驅逐艦，因此在8階之前可以造一些2階驅逐艦來挖礦</strong></p>
          <ul>
            <li>航行速度：中等</li>
            <li>單位領導力載重：最高</li>
            <li>克制：巡洋艦</li>
          </ul>
          {createTable('destroyer')} {/* 添加驅逐艦數據表格 */}
          <Line data={createChartData('destroyer', 'load')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '驅逐艦 - 載重' } } }} />
          <Line data={createChartData('destroyer', 'damage_output')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '驅逐艦 - 傷害輸出' } } }} />

          {/* 巡洋艦部分 */}
          <h2>巡洋艦</h2>
          <p>巡洋艦是一種大型戰艦。雖然數值上都低於其他兩者，但會他克制護衛艦。因此也是有某種優勢？</p>
          <p>因為我也不太懂克制的具體數值，所以我去查了目前最大的<a href="https://infinite-galaxy.fandom.com/wiki/">目前最大的infinite galaxy維基</a>，上面說沒有明顯感覺出克制。<sub>如果有大佬了解克制機制的數值（或大概）請聯絡我</sub></p>
          <ul>
            <li>航行速度：最慢</li>
            <li>單位領導力載重：中等</li>
            <li>克制：護衛艦</li>
          </ul>
          {createTable('cruiser')} {/* 添加巡洋艦數據表格 */}
          <Line data={createChartData('cruiser', 'load')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '巡洋艦 - 載重' } } }} />
          <Line data={createChartData('cruiser', 'damage_output')} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '巡洋艦 - 傷害輸出' } } }} />

          {/* 艦船大比較 */}    
          <h2>艦船大比較</h2>

          {/* 單位領導力戰力比較 */}
          <Line data={createComparisonChart('power', { frigate: 3, destroyer: 10, cruiser: 30 })} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: '所有艦船 - 單位領導力戰力比較' } } }} />
          <p>由上述圖表可知，不同種類艦船在相同階數下單位領導力戰力基本相同</p>

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

export default ShipPage
