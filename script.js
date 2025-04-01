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

// 添加搜索建议功能
function addSuggestions() {
    const input = document.getElementById('carModel');
    const datalist = document.createElement('datalist');
    datalist.id = 'carSuggestions';
    
    // 添加所有可能的搜索词到建议列表
    const suggestions = [
        ...Object.keys(maintenanceDatabase),
        ...Object.keys(carNameMapping)
    ];
    
    suggestions.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        datalist.appendChild(option);
    });
    
    document.body.appendChild(datalist);
    input.setAttribute('list', 'carSuggestions');
}

// 实时搜索建议功能
// 删除重复的 addSuggestions 函数，统一使用 showSuggestions

// 修改搜索函数，保留一个统一实现
function searchMaintenance() {
    const carModel = document.getElementById('carModel').value.trim();
    const resultDiv = document.getElementById('result');
    const suggestionsDiv = document.getElementById('suggestions');
    
    // 隐藏建议框
    suggestionsDiv.style.display = 'none';
    
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
            <div class="disclaimer-box">
                <p class="source-info">${dataDisclaimer.source}</p>
                <p class="disclaimer-text">${dataDisclaimer.disclaimer}</p>
                <p class="feedback-text">${dataDisclaimer.feedback}</p>
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<p>未找到匹配的车型信息</p>';
    }
}

// 修改搜索建议函数
// 统一的搜索建议函数
function showSuggestions(input) {
    const suggestionsDiv = document.getElementById('suggestions');
    const resultDiv = document.getElementById('result');
    const searchTerm = input.toLowerCase().trim();
    
    // 获取输入框位置
    const inputElement = document.getElementById('carModel');
    const rect = inputElement.getBoundingClientRect();
    
    // 设置建议框位置（添加5px间距）
    suggestionsDiv.style.top = `${rect.bottom + window.scrollY + 5}px`;
    suggestionsDiv.style.left = `${rect.left + window.scrollX}px`;
    suggestionsDiv.style.width = `${rect.width}px`;
    
    // 清空旧建议
    suggestionsDiv.innerHTML = '';
    
    if (!searchTerm) {
        suggestionsDiv.style.display = 'none';
        resultDiv.style.display = 'none';
        resultDiv.innerHTML = '';
        return;
    }

    // 创建文档片段提升性能
    const fragment = document.createDocumentFragment();
    let hasMatches = false;
    const addedSuggestions = new Set(); // 用于去重

    // 优先匹配中文
    Object.keys(maintenanceDatabase).forEach(car => {
        if (car.toLowerCase().includes(searchTerm) && !addedSuggestions.has(car)) {
            const engName = Object.keys(carNameMapping).find(key => carNameMapping[key] === car);
            const div = createSuggestionItem(car, engName);
            fragment.appendChild(div);
            hasMatches = true;
            addedSuggestions.add(car);
        }
    });

    // 补充匹配英文
    Object.entries(carNameMapping).forEach(([eng, ch]) => {
        if (eng.toLowerCase().includes(searchTerm) && !addedSuggestions.has(ch) && maintenanceDatabase[ch]) {
            const div = createSuggestionItem(ch, eng);
            fragment.appendChild(div);
            hasMatches = true;
            addedSuggestions.add(ch);
        }
    });

    // 显示结果
    if (hasMatches) {
        suggestionsDiv.appendChild(fragment);
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

// 创建建议项函数
function createSuggestionItem(cn, en) {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    div.innerHTML = `
        <span class="name-cn">${cn}</span>
        ${en ? `<span class="name-en">(${en})</span>` : ''}
    `;
    div.onclick = () => selectCar(cn);
    return div;
}

// 修改选择车型函数
function selectCar(chineseName, englishName) {
    const input = document.getElementById('carModel');
    const suggestionsDiv = document.getElementById('suggestions');
    
    // 设置输入框的值
    input.value = chineseName;
    
    // 隐藏建议框
    suggestionsDiv.style.display = 'none';
    
    // 显示保养信息
    const resultDiv = document.getElementById('result');
    const maintenance = maintenanceDatabase[chineseName];
    
    if (maintenance) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="maintenance-item">
                <h3>${englishName ? `${chineseName} (${englishName})` : chineseName}</h3>
                ${renderMaintenanceDetails(maintenance)}
            </div>
            <div class="disclaimer-box">
                <p class="source-info">${dataDisclaimer.source}</p>
                <p class="disclaimer-text">${dataDisclaimer.disclaimer}</p>
                <p class="feedback-text">${dataDisclaimer.feedback}</p>
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
            </div>
        `;
    }
}

// 修改页面初始化
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('carModel');
    const searchBtn = document.getElementById('searchBtn');
    
    // 绑定输入事件
    input.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });
    
    // 绑定搜索按钮点击事件
    searchBtn.addEventListener('click', searchMaintenance);
    
    // 绑定回车事件
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchMaintenance();
        }
    });
});

// 添加渲染保养详情的函数
function renderMaintenanceDetails(maintenance) {
    let html = '';
    
    // 基础保养项目
    if (maintenance.oil) html += `<p>机油更换：${maintenance.oil}</p>`;
    
    // 刹车系统
    if (typeof maintenance.brake === 'string') {
        html += `<p>刹车系统检查：${maintenance.brake}</p>`;
    } else if (maintenance.brake) {
        html += `
            <p>刹车液更换：${maintenance.brake.fluid}</p>
            <p>刹车片更换：${maintenance.brake.pads}</p>
        `;
    }
    
    // 滤清器
    if (maintenance.filter) {
        if (typeof maintenance.filter === 'string') {
            html += `<p>滤清器更换：${maintenance.filter}</p>`;
        } else {
            if (maintenance.filter.air) html += `<p>空气滤清器：${maintenance.filter.air}</p>`;
            if (maintenance.filter.oil) html += `<p>机油滤清器：${maintenance.filter.oil}</p>`;
            if (maintenance.filter.fuel) html += `<p>燃油滤清器：${maintenance.filter.fuel}</p>`;
            if (maintenance.filter.cabin) html += `<p>空调滤清器：${maintenance.filter.cabin}</p>`;
        }
    }
    
    // 其他保养项目
    if (maintenance.timing_belt) html += `<p>正时皮带更换：${maintenance.timing_belt}</p>`;
    if (maintenance.spark_plug) html += `<p>火花塞更换：${maintenance.spark_plug}</p>`;
    if (maintenance.coolant) html += `<p>冷却液更换：${maintenance.coolant}</p>`;
    if (maintenance.transmission) html += `<p>变速箱油更换：${maintenance.transmission}</p>`;
    
    // 摩托车特有项目
    if (maintenance.chain) {
        if (typeof maintenance.chain === 'string') {
            html += `<p>链条维护：${maintenance.chain}</p>`;
        } else {
            if (maintenance.chain.check) html += `<p>链条检查：${maintenance.chain.check}</p>`;
            if (maintenance.chain.replace) html += `<p>链条更换：${maintenance.chain.replace}</p>`;
            if (maintenance.chain.adjustment) html += `<p>链条调整：${maintenance.chain.adjustment}</p>`;
        }
    }
    
    if (maintenance.valve_check) html += `<p>气门间隙检查：${maintenance.valve_check}</p>`;
    
    return html;
}

// 修改搜索函数
// 添加数据来源和免责声明
const dataDisclaimer = {
    source: '数据来源：各车企官方维修手册、4S店保养手册',
    disclaimer: '免责声明：本数据仅供参考，具体保养周期请以车辆使用手册和当地授权经销商建议为准。不同地区、使用环境可能会影响实际保养周期。',
    feedback: '如发现数据有误，请通过下方反馈按钮提交更正信息。'
};

// 在搜索函数中添加免责声明显示
function searchMaintenance() {
    const carModel = document.getElementById('carModel').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!carModel) {
        resultDiv.innerHTML = '<p>请输入车型关键词</p>';
        resultDiv.style.display = 'block';
        return;
    }

    // 直接匹配中文名称
    if (maintenanceDatabase[carModel]) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="maintenance-item">
                <h3>${carModel}</h3>
                ${renderMaintenanceDetails(maintenanceDatabase[carModel])}
            </div>
        `;
        return;
    }

    // 匹配英文名称
    const chineseName = carNameMapping[carModel];
    if (chineseName && maintenanceDatabase[chineseName]) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="maintenance-item">
                <h3>${chineseName} (${carModel})</h3>
                ${renderMaintenanceDetails(maintenanceDatabase[chineseName])}
            </div>
        `;
        return;
    }

    // 模糊匹配
    const searchTerm = carModel.toLowerCase();
    let found = false;

    // 搜索中文名称
    for (const [car, info] of Object.entries(maintenanceDatabase)) {
        if (car.toLowerCase().includes(searchTerm)) {
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <div class="maintenance-item">
                    <h3>${car}</h3>
                    ${renderMaintenanceDetails(info)}
                </div>
            `;
            found = true;
            break;
        }
    }

    // 如果没找到，搜索英文名称
    if (!found) {
        for (const [eng, ch] of Object.entries(carNameMapping)) {
            if (eng.toLowerCase().includes(searchTerm)) {
                const info = maintenanceDatabase[ch];
                if (info) {
                    resultDiv.style.display = 'block';
                    resultDiv.innerHTML = `
                        <div class="maintenance-item">
                            <h3>${ch} (${eng})</h3>
                            ${renderMaintenanceDetails(info)}
                        </div>
                    `;
                    found = true;
                    break;
                }
            }
        }
    }

    if (!found) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p>未找到匹配的车型信息</p>';
    }
}

// 修改选择车型函数
// 添加个性化保养建议功能
function calculatePersonalizedMaintenance(registrationDate, mileage, maintenanceInfo) {
    const now = new Date();
    const regDate = new Date(registrationDate);
    const monthsDiff = (now.getFullYear() - regDate.getFullYear()) * 12 + now.getMonth() - regDate.getMonth();
    
    let recommendations = [];
    
    // 检查各个保养项目
    if (maintenanceInfo.oil) {
        const oilInterval = parseMaintenanceInterval(maintenanceInfo.oil);
        if (mileage >= oilInterval.mileage || monthsDiff >= oilInterval.months) {
            recommendations.push('需要更换机油');
        }
    }
    
    if (maintenanceInfo.brake) {
        if (typeof maintenanceInfo.brake === 'object') {
            const fluidInterval = parseMaintenanceInterval(maintenanceInfo.brake.fluid);
            if (mileage >= fluidInterval.mileage || monthsDiff >= fluidInterval.months) {
                recommendations.push('需要更换刹车液');
            }
        }
    }
    
    // ... 其他保养项目的检查 ...
    
    return recommendations;
}

// 解析保养间隔
function parseMaintenanceInterval(interval) {
    const mileageMatch = interval.match(/每(\d+)公里/);
    const monthsMatch = interval.match(/每(\d+)个月/);
    
    return {
        mileage: mileageMatch ? parseInt(mileageMatch[1]) : Infinity,
        months: monthsMatch ? parseInt(monthsMatch[1]) : Infinity
    };
}

// 修改选择车型函数，添加个性化建议
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
                <div class="personalized-maintenance">
                    <h4>个性化保养建议</h4>
                    <div class="input-group">
                        <label>上牌时间：</label>
                        <input type="date" id="registrationDate">
                    </div>
                    <div class="input-group">
                        <label>当前里程：</label>
                        <input type="number" id="currentMileage" placeholder="请输入公里数">
                    </div>
                    <button onclick="showPersonalizedAdvice('${car}')" class="advice-btn">获取建议</button>
                </div>
            </div>
            <div class="disclaimer-box">
                <p class="source-info">${dataDisclaimer.source}</p>
                <p class="disclaimer-text">${dataDisclaimer.disclaimer}</p>
                <p class="feedback-text">${dataDisclaimer.feedback}</p>
                <button onclick="showFeedbackForm()" class="feedback-btn">提交反馈</button>
            </div>
        `;
    }
}

// 显示个性化建议
function showPersonalizedAdvice(car) {
    const regDate = document.getElementById('registrationDate').value;
    const mileage = parseInt(document.getElementById('currentMileage').value);
    
    if (!regDate || isNaN(mileage)) {
        alert('请输入完整的上牌时间和里程信息');
        return;
    }
    
    const maintenance = maintenanceDatabase[car];
    const recommendations = calculatePersonalizedMaintenance(regDate, mileage, maintenance);
    
    const adviceDiv = document.createElement('div');
    adviceDiv.className = 'maintenance-advice';
    adviceDiv.innerHTML = `
        <h4>根据您的用车情况，建议：</h4>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
        <p class="advice-note">注：以上建议仅供参考，请结合实际使用情况和专业技师建议进行保养。</p>
    `;
    
    // 插入建议到个性化保养区域
    const personalizedSection = document.querySelector('.personalized-maintenance');
    const existingAdvice = personalizedSection.querySelector('.maintenance-advice');
    if (existingAdvice) {
        existingAdvice.remove();
    }
    personalizedSection.appendChild(adviceDiv);
}

// 添加相关样式
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    .personalized-maintenance {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: #f5f5f5;
    }
    
    .input-group {
        margin: 10px 0;
    }
    
    .input-group label {
        display: inline-block;
        width: 100px;
    }
    
    .input-group input {
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .advice-btn {
        background-color: #2196F3;
        color: white;
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
    }
    
    .maintenance-advice {
        margin-top: 15px;
        padding: 10px;
        border-left: 3px solid #2196F3;
        background-color: #fff;
    }
    
    .advice-note {
        font-size: 0.9em;
        color: #666;
        margin-top: 10px;
    }
`;

document.head.appendChild(additionalStyle);

function showFeedbackForm() {
    const feedbackHtml = `
        <div class="feedback-form">
            <h3>数据反馈</h3>
            <form id="feedbackForm">
                <div class="form-group">
                    <label>车型：</label>
                    <input type="text" id="feedbackModel" required>
                </div>
                <div class="form-group">
                    <label>需要更正的项目：</label>
                    <select id="feedbackItem" required>
                        <option value="oil">机油更换</option>
                        <option value="brake">刹车系统</option>
                        <option value="filter">滤清器</option>
                        <option value="timing_belt">正时皮带</option>
                        <option value="spark_plug">火花塞</option>
                        <option value="coolant">冷却液</option>
                        <option value="transmission">变速箱油</option>
                        <option value="chain">链条维护</option>
                        <option value="valve_check">气门间隙</option>
                        <option value="other">其他</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>正确的保养周期：</label>
                    <input type="text" id="feedbackCorrection" required>
                </div>
                <div class="form-group">
                    <label>信息来源：</label>
                    <input type="text" id="feedbackSource" placeholder="如：官方手册、4S店" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="submit-btn">提交</button>
                    <button type="button" onclick="closeFeedbackForm()" class="cancel-btn">取消</button>
                </div>
            </form>
        </div>
    `;

    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = 'feedbackOverlay';
    feedbackDiv.className = 'feedback-overlay';
    feedbackDiv.innerHTML = feedbackHtml;
    document.body.appendChild(feedbackDiv);

    // 绑定表单提交事件
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedback);
}

function closeFeedbackForm() {
    const overlay = document.getElementById('feedbackOverlay');
    if (overlay) {
        overlay.remove();
    }
}

function handleFeedback(event) {
    event.preventDefault();
    // 这里可以添加发送反馈到服务器的逻辑
    alert('感谢您的反馈！我们会认真核实相关信息。');
    closeFeedbackForm();
}

// 添加相应的 CSS 样式
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
`;

document.head.appendChild(style);