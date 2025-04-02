// 添加英文名称映射
const carNameMapping = {
    // 德系车型
    'BMW 3 Series': '宝马3系',
    'BMW 5 Series': '宝马5系',
    'Mercedes-Benz C-Class': '奔驰C级',
    'Volkswagen Passat': '大众帕萨特',

    // 日系车型
    'Toyota Camry': '丰田凯美瑞',
    'Honda Accord': '本田雅阁',

    // 摩托车 - 日系
    'Honda CBR650R': '本田CBR650R',
    'Yamaha R1': '雅马哈R1',
    'Yamaha MT-09': '雅马哈MT-09',
    'Kawasaki Ninja 400': '川崎忍者400',
    'Kawasaki Z900': '川崎Z900',
    'Suzuki GSX250R': '铃木GSX250R',
    'Suzuki Hayabusa': '铃木隼',

    // 摩托车 - 欧系
    'BMW S1000RR': '宝马S1000RR',
    'Ducati Panigale V4': '杜卡迪V4',

    // 摩托车 - 国产
    'CFMOTO 800NK': '春风800NK',
    'CFMOTO 450SR': '春风450SR',
    'CFMOTO 675NK': '春风675NK',
    'CFMOTO 675SR': '春风675SR',
    'CFMOTO 250SR': '春风250SR',
    'Aprilia RSV4': '阿普利亚RSV4',
    'Harley-Davidson Street 750': '哈雷戴维森Street 750',
    'Royal Enfield Meteor': '皇家恩菲尔德Meteor',
    'Zontes 310R': '众泰310R'
};

const maintenanceDatabase = {
    // 原有车型数据保持不变
    '宝马3系': {
        oil: '每10000公里或12个月',
        brake: '每20000公里或24个月',
        filter: {
            air: '每20000公里',
            oil: '每20000公里',
            fuel: '每40000公里',
            cabin: '每30000公里'
        },
        timing_belt: '每60000公里',
        spark_plug: '每60000公里',
        coolant: '每60000公里或4年',
        transmission: '每60000公里'
    },
    
    // 添加新车型数据
    '宝马5系': {
        oil: '每10000公里或12个月',
        brake: '每20000公里或24个月',
        filter: {
            air: '每20000公里',
            oil: '每20000公里',
            fuel: '每40000公里',
            cabin: '每30000公里'
        },
        timing_belt: '每60000公里',
        spark_plug: '每60000公里',
        coolant: '每60000公里或4年',
        transmission: '每60000公里'
    },
    '奔驰C级': {
        oil: '每12000公里或12个月',
        brake: '每20000公里或24个月',
        filter: {
            air: '每24000公里',
            oil: '每24000公里',
            fuel: '每48000公里',
            cabin: '每24000公里'
        },
        timing_belt: '每80000公里',
        spark_plug: '每60000公里',
        coolant: '每60000公里或5年',
        transmission: '每60000公里'
    },
    '大众帕萨特': {
        oil: '每7500公里或12个月',
        brake: '每30000公里或24个月',
        filter: {
            air: '每15000公里',
            oil: '每15000公里',
            fuel: '每60000公里',
            cabin: '每30000公里'
        },
        timing_belt: '每90000公里',
        spark_plug: '每60000公里',
        coolant: '每60000公里或4年',
        transmission: '每60000公里'
    },

    // 轿车 - 日系
    '丰田凯美瑞': {
        oil: '每5000公里或6个月',
        brake: '每20000公里或24个月',
        filter: {
            air: '每20000公里',
            oil: '每10000公里',
            fuel: '每40000公里',
            cabin: '每20000公里'
        },
        timing_belt: '每80000公里',
        spark_plug: '每100000公里',
        coolant: '每160000公里或5年',
        transmission: '每60000公里'
    },
    '本田雅阁': {
        oil: '每8000公里或6个月',
        brake: '每25000公里或24个月',
        filter: {
            air: '每16000公里',
            oil: '每16000公里',
            fuel: '每40000公里',
            cabin: '每30000公里'
        },
        timing_belt: '每100000公里',
        spark_plug: '每100000公里',
        coolant: '每200000公里或5年',
        transmission: '每60000公里'
    },

    // 摩托车 - 日系
    '本田CBR650R': {
        oil: '每6000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每25000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每12000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每3年或36000公里'
    },
    '川崎忍者400': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每10000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每10000公里',
            oil: '每10000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每25000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每18000公里',
        valve_check: '每18000公里',
        coolant: '每2年或24000公里'
    },

    // 摩托车 - 国产
    '春风800NK': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每10000公里',
            oil: '每10000公里'
        },
        chain: {
            check: '每600公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每20000公里',
        valve_check: '每20000公里',
        coolant: '每2年或24000公里'
    },
    '春风450SR': {
        oil: '每4000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每8000公里',
            oil: '每8000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每16000公里',
        valve_check: '每16000公里',
        coolant: '每2年或24000公里'
    },
    '春风675NK': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每10000公里',
            oil: '每10000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每20000公里',
        valve_check: '每20000公里',
        coolant: '每2年或24000公里'
    },
    '春风675SR': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每10000公里',
            oil: '每10000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每20000公里',
        valve_check: '每20000公里',
        coolant: '每2年或24000公里'
    },  // 添加逗号！
    '雅马哈R1': {
        oil: '每4000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每4000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每25000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每3年或36000公里'
    },
    '雅马哈MT-09': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每5000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每25000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每3年或36000公里'
    },
    '川崎Z900': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每5000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每25000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每3年或36000公里'
    },
    '铃木隼': {
        oil: '每4000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每4000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每3年或36000公里'
    },
    '铃木GSX250R': {
        oil: '每4000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每8000公里',
            oil: '每4000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每16000公里',
        valve_check: '每16000公里',
        coolant: '每2年或24000公里'
    },
    '阿普利亚RSV4': {
        oil: '每6000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每6000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每25000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每3年或36000公里'
    },
    '哈雷戴维森Street 750': {
        oil: '每8000公里或12个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每25000公里或视磨损情况'
        },
        filter: {
            air: '每15000公里',
            oil: '每8000公里'
        },
        belt: {
            check: '每5000公里检查',
            tension: '每10000公里调整',
            replace: '每40000公里更换'
        },
        spark_plug: '每30000公里',
        valve_check: '每30000公里',
        coolant: '每4年或48000公里'
    },
    '皇家恩菲尔德Meteor': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每10000公里',
            oil: '每5000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每20000公里',
        valve_check: '每20000公里',
        coolant: '每3年或36000公里'
    },
    '众泰310R': {
        oil: '每4000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每15000公里或视磨损情况'
        },
        filter: {
            air: '每8000公里',
            oil: '每4000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每16000公里',
        valve_check: '每16000公里',
        coolant: '每2年或24000公里'
    },

    // 欧系摩托车
    '宝马S1000RR': {
        oil: '每6000公里或12个月',
        brake: {
            fluid: '每12000公里或24个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每6000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每30000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每30000公里',
        valve_check: '每30000公里',
        coolant: '每4年或48000公里'
    },
    '杜卡迪V4': {
        oil: '每5000公里或12个月',
        brake: {
            fluid: '每12000公里或24个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每12000公里',
            oil: '每5000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每25000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每24000公里',
        valve_check: '每24000公里',
        coolant: '每4年或48000公里'
    },

    // 国产摩托车
    '春风250SR': {
        oil: '每5000公里或6个月',
        brake: {
            fluid: '每12000公里或12个月',
            pads: '每20000公里或视磨损情况'
        },
        filter: {
            air: '每10000公里',
            oil: '每5000公里'
        },
        chain: {
            check: '每500公里检查和润滑',
            replace: '每20000公里更换',
            adjustment: '每1000公里检查调整'
        },
        spark_plug: '每20000公里',
        valve_check: '每20000公里',
        coolant: '每2年或24000公里'
    }
};

// 页面加载完成后初始化功能
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('carModel');
    const searchBtn = document.getElementById('searchBtn');
    
    // 绑定搜索按钮点击事件
    searchBtn.addEventListener('click', searchMaintenance);
    
    // 绑定回车事件
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchMaintenance();
        }
    });

    // 绑定输入事件，实现实时搜索建议
    input.addEventListener('input', (e) => {
        showSuggestions(e.target.value.trim());
    });

    // 点击页面其他地方时隐藏建议框
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#suggestions') && !e.target.closest('#carModel')) {
            document.getElementById('suggestions').style.display = 'none';
        }
    });
});

// 渲染保养详情
function renderMaintenanceDetails(info) {
    let html = '<table class="maintenance-table">';
    
    // 处理基本项目
    for (const [key, value] of Object.entries(info)) {
        if (typeof value === 'string') {
            html += `
                <tr>
                    <td class="maintenance-key">${getMaintenanceItemName(key)}</td>
                    <td class="maintenance-value">${value}</td>
                </tr>`;
        } else if (typeof value === 'object') {
            // 处理嵌套项目（如滤清器、链条等）
            html += `
                <tr class="nested-header">
                    <td colspan="2">${getMaintenanceItemName(key)}</td>
                </tr>`;
            
            for (const [subKey, subValue] of Object.entries(value)) {
                html += `
                    <tr>
                        <td class="nested-key">${getMaintenanceItemName(subKey)}</td>
                        <td class="nested-value">${subValue}</td>
                    </tr>`;
            }
        }
    }
    
    html += '</table>';
    return html;
}

// 获取保养项目的中文名称
function getMaintenanceItemName(key) {
    const nameMapping = {
        oil: '机油更换',
        brake: '刹车系统',
        filter: '滤清器',
        timing_belt: '正时皮带',
        spark_plug: '火花塞',
        coolant: '冷却液',
        transmission: '变速箱油',
        chain: '链条保养',
        valve_check: '气门间隙检查',
        air: '空气滤清器',
        fuel: '燃油滤清器',
        cabin: '空调滤清器',
        fluid: '刹车油',
        pads: '刹车片',
        check: '检查',
        replace: '更换',
        adjustment: '调整',
        tension: '张力调整',
        belt: '皮带系统'
    };
    
    return nameMapping[key] || key;
}

// 实时搜索建议功能
function showSuggestions(searchTerm) {
    const suggestionsDiv = document.getElementById('suggestions');
    if (!searchTerm) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    const suggestions = [];
    searchTerm = searchTerm.toLowerCase();

    // 搜索中文名称
    for (const car of Object.keys(maintenanceDatabase)) {
        if (car.toLowerCase().includes(searchTerm)) {
            suggestions.push({
                chinese: car,
                english: Object.keys(carNameMapping).find(key => carNameMapping[key] === car) || ''
            });
        }
    }

    // 搜索英文名称
    for (const [eng, ch] of Object.entries(carNameMapping)) {
        if (eng.toLowerCase().includes(searchTerm) && !suggestions.some(s => s.chinese === ch)) {
            suggestions.push({
                chinese: ch,
                english: eng
            });
        }
    }

    if (suggestions.length > 0) {
        let html = '<ul class="suggestion-list">';
        suggestions.forEach(car => {
            // 修改这里，改用 fillInput 函数替代 selectCar
            html += `<li class="suggestion-item" onclick="fillInput('${car.chinese}')">`;
            if (car.english) {
                html += `${car.chinese} (${car.english})`;
            } else {
                html += car.chinese;
            }
            html += '</li>';
        });
        html += '</ul>';
        suggestionsDiv.innerHTML = html;
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

// 添加新函数：只填充输入框
function fillInput(car) {
    const input = document.getElementById('carModel');
    input.value = car;
    document.getElementById('suggestions').style.display = 'none';
}

// 选择建议项
function selectSuggestion(carModel) {
    document.getElementById('carModel').value = carModel;
    document.getElementById('suggestions').style.display = 'none';
    searchMaintenance();
}

// 修改搜索函数，保留一个统一实现
function searchMaintenance() {
    const carModel = document.getElementById('carModel').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!carModel) {
        resultDiv.innerHTML = '<p>请输入车型关键词</p>';
        resultDiv.style.display = 'block';
        return;
    }

    let found = false;
    let maintenanceInfo = null;
    let displayName = '';

    // 搜索逻辑
    const searchTerm = carModel.toLowerCase();

    // 1. 直接匹配中文名称
    if (maintenanceDatabase[carModel]) {
        maintenanceInfo = maintenanceDatabase[carModel];
        displayName = carModel;
        const engName = Object.keys(carNameMapping).find(key => carNameMapping[key] === carModel);
        if (engName) {
            displayName = `${carModel} (${engName})`;
        }
        found = true;
    }
    // 2. 英文匹配
    else if (carNameMapping[carModel] && maintenanceDatabase[carNameMapping[carModel]]) {
        maintenanceInfo = maintenanceDatabase[carNameMapping[carModel]];
        displayName = `${carNameMapping[carModel]} (${carModel})`;
        found = true;
    }
    // 3. 模糊匹配
    else {
        // 中文模糊匹配
        for (const [car, info] of Object.entries(maintenanceDatabase)) {
            if (car.toLowerCase().includes(searchTerm)) {
                maintenanceInfo = info;
                displayName = car;
                const engName = Object.keys(carNameMapping).find(key => carNameMapping[key] === car);
                if (engName) {
                    displayName = `${car} (${engName})`;
                }
                found = true;
                break;
            }
        }
        
        // 英文模糊匹配
        if (!found) {
            for (const [eng, ch] of Object.entries(carNameMapping)) {
                if (eng.toLowerCase().includes(searchTerm) && maintenanceDatabase[ch]) {
                    maintenanceInfo = maintenanceDatabase[ch];
                    displayName = `${ch} (${eng})`;
                    found = true;
                    break;
                }
            }
        }
    }

    // 显示结果
    resultDiv.style.display = 'block';
    if (found) {
        resultDiv.innerHTML = `
            <div class="maintenance-item">
                <h3>${displayName}</h3>
                ${renderMaintenanceDetails(maintenanceInfo)}
            </div>
            <div class="action-buttons">
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
                <button onclick="showSponsorQR()" class="sponsor-btn">赞助支持</button>
            </div>
            <div class="disclaimer-box">
                <p class="source-info">数据来源：各大汽车厂商官方保养手册</p>
                <p class="disclaimer-text">免责声明：本工具提供的保养周期数据仅供参考，具体保养时间请以车辆实际使用情况和厂商建议为准。</p>
                <p class="feedback-text">如发现数据有误或需要补充，欢迎提交反馈。</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <p>未找到匹配的车型信息</p>
            <div class="action-buttons">
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
                <button onclick="showSponsorQR()" class="sponsor-btn">赞助支持</button>
            </div>
            <div class="disclaimer-box">
                <p class="source-info">数据来源：各大汽车厂商官方保养手册</p>
                <p class="disclaimer-text">免责声明：本工具提供的保养周期数据仅供参考，具体保养时间请以车辆实际使用情况和厂商建议为准。</p>
                <p class="feedback-text">如发现数据有误或需要补充，欢迎提交反馈。</p>
            </div>
        `;
    }
}

// 添加赞助二维码显示函数
function showSponsorQR() {
    const resultDiv = document.getElementById('result');
    const sponsorHTML = `
        <div class="sponsor-form">
            <h3>赞助支持</h3>
            <div class="qr-container">
                <div class="qr-item">
                    <img src="./支付.png" alt="微信支付二维码" class="qr-image">
                    <p>感谢您的赞助支持</p>
                </div>
            </div>
            <div class="button-group">
                <button onclick="searchMaintenance()" class="back-btn">返回</button>
            </div>
        </div>
    `;
    resultDiv.innerHTML = sponsorHTML;
    resultDiv.style.display = 'block';
}

// 添加新样式
style.textContent += `
    .action-buttons {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        justify-content: center;
    }

    .sponsor-btn {
        background-color: #ff9800;
        color: white;
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .sponsor-btn:hover {
        background-color: #f57c00;
    }

    .sponsor-form {
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
        margin: 0 auto;
    }
`;

// 修改选择车型函数
function selectCar(car) {
    const input = document.getElementById('carModel');
    input.value = car;
    document.getElementById('suggestions').style.display = 'none';
    
    const resultDiv = document.getElementById('result');
    const maintenance = maintenanceDatabase[car];
    
    if (maintenance) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="maintenance-item">
                <h3>${car}</h3>
                ${renderMaintenanceDetails(maintenance)}
            </div>
            <div class="disclaimer-box">
                <p class="source-info">数据来源：各大汽车厂商官方保养手册</p>
                <p class="disclaimer-text">免责声明：本工具提供的保养周期数据仅供参考，具体保养时间请以车辆实际使用情况和厂商建议为准。</p>
                <p class="feedback-text">如发现数据有误或需要补充，欢迎提交反馈。</p>
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <p>未找到匹配的车型信息</p>
            <div class="disclaimer-box">
                <p class="source-info">数据来源：各大汽车厂商官方保养手册</p>
                <p class="disclaimer-text">免责声明：本工具提供的保养周期数据仅供参考，具体保养时间请以车辆实际使用情况和厂商建议为准。</p>
                <p class="feedback-text">如发现数据有误或需要补充，欢迎提交反馈。</p>
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
            </div>
        `;
    }
}



function showFeedbackForm() {
    const resultDiv = document.getElementById('result');
    const formHTML = `
        <div class="feedback-form">
            <h3>反馈与建议</h3>
            <div class="qr-container">
                <div class="qr-item">
                    <img src="./添加.png" alt="微信二维码" class="qr-image">
                    <p>扫描添加好友进行反馈</p>
                </div>
            </div>
            <div class="button-group">
                <button onclick="searchMaintenance()" class="back-btn">返回</button>
            </div>
        </div>
    `;
    resultDiv.innerHTML = formHTML;
    resultDiv.style.display = 'block';
}

// 删除单独的showSponsorQR函数，因为已经合并到反馈表单中

// 添加新的样式
const style = document.createElement('style');
style.textContent = `
    .disclaimer-box {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: #f9f9f9;
    }

    .source-info {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 10px;
    }

    .disclaimer-text {
        color: #444;
        font-size: 0.9em;
        margin-bottom: 10px;
    }

    .feedback-text {
        color: #666;
        font-size: 0.9em;
    }

    .feedback-btn {
        background-color: #4CAF50;
        color: white;
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
    }

    .feedback-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .feedback-form {
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group input,
    .form-group select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .submit-btn,
    .cancel-btn {
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
    }

    .submit-btn {
        background-color: #4CAF50;
        color: white;
    }

    .cancel-btn {
        background-color: #f44336;
        color: white;
    }

    .qr-container {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
    }

    .qr-item {
        text-align: center;
        padding: 10px;
    }

    .qr-image {
        width: 200px;
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .button-group {
        text-align: center;
        margin-top: 20px;
    }

    .back-btn {
        background-color: #4CAF50;
        color: white;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .back-btn:hover {
        background-color: #45a049;
    }
`;

document.head.appendChild(style);

// 使用原有的renderMaintenanceDetails函数
