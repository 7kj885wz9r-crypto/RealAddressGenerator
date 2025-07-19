// 地址数据库
const addressData = {
    us: {
        name: '美国',
        states: ['California', 'New York', 'Texas', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'],
        cities: {
            'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'Oakland'],
            'New York': ['New York City', 'Buffalo', 'Rochester', 'Syracuse', 'Albany'],
            'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
            'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
            'Illinois': ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville']
        },
        streets: ['Main St', 'Oak Ave', 'Park Rd', 'Elm St', 'Washington Blvd', 'First Ave', 'Second St', 'Third Ave', 'Maple Dr', 'Cedar Ln'],
        zipPattern: () => Math.floor(10000 + Math.random() * 90000).toString()
    },
    ca: {
        name: '加拿大',
        states: ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick'],
        cities: {
            'Ontario': ['Toronto', 'Ottawa', 'Hamilton', 'London', 'Windsor'],
            'Quebec': ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Sherbrooke'],
            'British Columbia': ['Vancouver', 'Victoria', 'Surrey', 'Burnaby', 'Richmond'],
            'Alberta': ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Medicine Hat']
        },
        streets: ['Main St', 'King St', 'Queen St', 'Yonge St', 'Bay St', 'College St', 'Dundas St', 'Bloor St', 'Front St', 'Church St'],
        zipPattern: () => {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const digits = '0123456789';
            return letters[Math.floor(Math.random() * letters.length)] + 
                   digits[Math.floor(Math.random() * digits.length)] + 
                   letters[Math.floor(Math.random() * letters.length)] + ' ' +
                   digits[Math.floor(Math.random() * digits.length)] + 
                   letters[Math.floor(Math.random() * letters.length)] + 
                   digits[Math.floor(Math.random() * digits.length)];
        }
    },
    gb: {
        name: '英国',
        states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
        cities: {
            'England': ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
            'Scotland': ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Stirling'],
            'Wales': ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Barry'],
            'Northern Ireland': ['Belfast', 'Derry', 'Lisburn', 'Newtownabbey', 'Bangor']
        },
        streets: ['High Street', 'Church Lane', 'Victoria Road', 'Mill Lane', 'School Lane', 'The Green', 'New Road', 'Manor Road', 'Park Road', 'Queens Road'],
        zipPattern: () => {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const digits = '0123456789';
            return letters[Math.floor(Math.random() * letters.length)] + 
                   letters[Math.floor(Math.random() * letters.length)] + 
                   digits[Math.floor(Math.random() * digits.length)] + ' ' +
                   digits[Math.floor(Math.random() * digits.length)] + 
                   letters[Math.floor(Math.random() * letters.length)] + 
                   letters[Math.floor(Math.random() * letters.length)];
        }
    },
    au: {
        name: '澳大利亚',
        states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory', 'Australian Capital Territory'],
        cities: {
            'New South Wales': ['Sydney', 'Newcastle', 'Wollongong', 'Maitland', 'Albury'],
            'Victoria': ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton'],
            'Queensland': ['Brisbane', 'Gold Coast', 'Townsville', 'Cairns', 'Toowoomba'],
            'Western Australia': ['Perth', 'Fremantle', 'Rockingham', 'Mandurah', 'Bunbury']
        },
        streets: ['Collins Street', 'Bourke Street', 'Flinders Street', 'Elizabeth Street', 'Swanston Street', 'King Street', 'Queen Street', 'George Street', 'Pitt Street', 'Market Street'],
        zipPattern: () => Math.floor(1000 + Math.random() * 9000).toString()
    },
    de: {
        name: '德国',
        states: ['Bavaria', 'Baden-Württemberg', 'North Rhine-Westphalia', 'Hesse', 'Saxony', 'Lower Saxony', 'Rhineland-Palatinate', 'Berlin'],
        cities: {
            'Bavaria': ['Munich', 'Nuremberg', 'Augsburg', 'Würzburg', 'Regensburg'],
            'Baden-Württemberg': ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg'],
            'North Rhine-Westphalia': ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen', 'Duisburg'],
            'Berlin': ['Berlin']
        },
        streets: ['Hauptstraße', 'Bahnhofstraße', 'Kirchstraße', 'Gartenstraße', 'Schulstraße', 'Mühlenstraße', 'Dorfstraße', 'Lindenstraße', 'Bergstraße', 'Waldstraße'],
        zipPattern: () => {
            // 德国邮政编码：01000-99999
            return Math.floor(1000 + Math.random() * 98999).toString().padStart(5, '0');
        }
    },
    fr: {
        name: '法国',
        states: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine', 'Occitanie', 'Hauts-de-France', 'Grand Est', 'Normandy'],
        cities: {
            'Île-de-France': ['Paris', 'Boulogne-Billancourt', 'Saint-Denis', 'Argenteuil', 'Montreuil'],
            'Provence-Alpes-Côte d\'Azur': ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Antibes'],
            'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Saint-Étienne', 'Villeurbanne', 'Clermont-Ferrand'],
            'Nouvelle-Aquitaine': ['Bordeaux', 'Limoges', 'Poitiers', 'Pau', 'La Rochelle']
        },
        streets: ['Rue de la Paix', 'Avenue des Champs', 'Rue Victor Hugo', 'Place de la République', 'Boulevard Saint-Germain', 'Rue de Rivoli', 'Avenue Montaigne', 'Rue du Faubourg', 'Place Vendôme', 'Rue de la Liberté'],
        zipPattern: () => {
            // 法国邮政编码：01000-95999
            return Math.floor(1000 + Math.random() * 94999).toString().padStart(5, '0');
        }
    }
};

// 生成随机地址
function generateAddress(country) {
    const data = addressData[country];
    const state = data.states[Math.floor(Math.random() * data.states.length)];
    const cities = data.cities[state] || data.cities[Object.keys(data.cities)[0]];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const street = data.streets[Math.floor(Math.random() * data.streets.length)];
    const streetNumber = Math.floor(1 + Math.random() * 9999);
    const zipCode = data.zipPattern();

    return {
        street: `${streetNumber} ${street}`,
        city: city,
        state: state,
        zipCode: zipCode,
        country: data.name
    };
}

// 格式化地址显示
function formatAddress(address) {
    return `${address.street}
${address.city}, ${address.state} ${address.zipCode}
${address.country}`;
}

// 复制到剪贴板
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        return success;
    }
}

// 生成地址列表
function generateAddresses() {
    const country = document.getElementById('country').value;
    const count = parseInt(document.getElementById('count').value);
    const resultsDiv = document.getElementById('results');
    const generateBtn = document.getElementById('generateBtn');

    // 显示加载状态
    generateBtn.innerHTML = '<span class="loading"></span> 生成中...';
    generateBtn.disabled = true;

    // 模拟加载延迟
    setTimeout(() => {
        const addresses = [];
        for (let i = 0; i < count; i++) {
            addresses.push(generateAddress(country));
        }

        displayAddresses(addresses);
        
        // 恢复按钮状态
        generateBtn.innerHTML = '🎯 生成地址';
        generateBtn.disabled = false;
    }, 500);
}

// 显示地址列表
function displayAddresses(addresses) {
    const resultsDiv = document.getElementById('results');
    
    const addressListHTML = addresses.map((address, index) => `
        <div class="address-item">
            <button class="copy-btn" onclick="copyAddress(${index}, this)">📋 复制</button>
            <div class="address-content">${formatAddress(address)}</div>
        </div>
    `).join('');

    const exportButtons = `
        <div class="export-section">
            <h3>📥 导出地址</h3>
            <div class="export-buttons">
                <button onclick="exportAddresses('txt')" class="export-btn">📄 TXT</button>
                <button onclick="exportAddresses('json')" class="export-btn">📋 JSON</button>
                <button onclick="exportAddresses('csv')" class="export-btn">📊 CSV</button>
            </div>
        </div>
    `;

    resultsDiv.innerHTML = `
        <div class="address-list">
            ${addressListHTML}
        </div>
        ${exportButtons}
    `;

    // 存储地址数据供复制使用
    window.currentAddresses = addresses;
}

// 复制单个地址
async function copyAddress(index, button) {
    const address = window.currentAddresses[index];
    const text = formatAddress(address);
    
    const success = await copyToClipboard(text);
    
    if (success) {
        const originalText = button.innerHTML;
        button.innerHTML = '✅ 已复制';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    } else {
        button.innerHTML = '❌ 复制失败';
        setTimeout(() => {
            button.innerHTML = '📋 复制';
        }, 2000);
    }
}

// 初始化事件监听器
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const countInput = document.getElementById('count');
    
    generateBtn.addEventListener('click', generateAddresses);
    
    // 限制数量输入
    countInput.addEventListener('input', function() {
        let value = parseInt(this.value);
        if (value < 1) this.value = 1;
        if (value > 50) this.value = 50;
    });
    
    // 回车键生成
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateAddresses();
        }
    });
    
    // 添加网站推广提示
    console.log('🌟 访问 https://addressgen.top 获得最佳体验！');
    
    // 定期显示网站推广
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% 概率
            console.log('💡 提示：访问 https://addressgen.top 体验更多功能！');
        }
    }, 30000); // 每30秒检查一次
});
// 导出功能
function exportAddresses(format = 'txt') {
    if (!window.currentAddresses || window.currentAddresses.length === 0) {
        alert('请先生成地址！');
        return;
    }

    let content = '';
    const addresses = window.currentAddresses;

    if (format === 'txt') {
        content = addresses.map(addr => formatAddress(addr)).join('\n\n');
    } else if (format === 'json') {
        content = JSON.stringify(addresses, null, 2);
    } else if (format === 'csv') {
        const headers = 'Street,City,State,ZipCode,Country\n';
        const rows = addresses.map(addr => 
            `"${addr.street}","${addr.city}","${addr.state}","${addr.zipCode}","${addr.country}"`
        ).join('\n');
        content = headers + rows;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `addresses.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

