const API_BASE = 'https://calculator-gj6q.onrender.com';

// 一般計算
function calculate() {
    document.getElementById("calc_result").textContent = "計算中...";
    const payload = {
        expression: document.getElementById("calc_input").value,
        angle_mode: document.getElementById("calc_angle_mode").value
    };

    fetch(`${API_BASE}/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            document.getElementById("calc_result").textContent = "錯誤: " + data.error;
        } else {
            document.getElementById("calc_result").textContent = "結果: " + data.result;
        }
    })
    .catch(err => {
        document.getElementById("calc_result").textContent = "伺服器連線失敗: " + err;
    });
}

// 函數繪圖
function plot() {
    document.getElementById("plot_error").textContent = "";
    document.getElementById("integrals").innerHTML = "";

    const payload = {
        functions: document.getElementById("functions").value,
        x_start: document.getElementById("x_start").value,
        x_end: document.getElementById("x_end").value,
        int_start: document.getElementById("int_start").value,
        int_end: document.getElementById("int_end").value,
        angle_mode: document.getElementById("plot_angle_mode").value,
        show_derivative: document.getElementById("show_derivative").checked,
        show_points: document.getElementById("show_points").checked
    };

    fetch(`${API_BASE}/plot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            document.getElementById("plot_error").textContent = "錯誤: " + data.error;
            Plotly.purge('plot');
            return;
        }

        Plotly.newPlot("plot", data.traces, { margin: { t: 30 } });

        if (data.integrals.length > 0) {
            data.integrals.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `∫ ${item.expr} dx = ${item.value}`;
                document.getElementById("integrals").appendChild(div);
            });
        }
    })
    .catch(err => { 
        document.getElementById("plot_error").textContent = "伺服器連線錯誤：" + err;
    });
}