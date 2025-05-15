<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="/calculator_front_vue/src/views/script.js"></script>

<template>
    <h1>工程計算機</h1>
    <section>
        <h2>函數繪圖</h2>
        <label>函數（用逗號分隔）: <input id="functions" value="sin(x), cos(x)" size="40" style="height: 30px;"></label><br>
        <label>X 起點: <input id="x_start" value="-360" type="number" style="height: 30px;"></label>
        <label>X 終點: <input id="x_end" value="360" type="number" style="height: 30px;"></label><br>
        <label>積分起點: <input id="int_start" value="0" type="number" style="height: 30px;"></label>
        <label>積分終點: <input id="int_end" value="180" type="number" style="height: 30px;"></label><br>

        <label>
            模式:
            <select id="plot_angle_mode" style="height: 30px;">
                <option value="deg">角度</option>
                <option value="rad">弧度</option>
            </select>
        </label><br>

        <label><input type="checkbox" id="show_derivative" style="height: 30px;"> 顯示導數</label>
        <label><input type="checkbox" id="show_points" style="height: 30px;"> 標示交點 / 極值</label><br>

        <button onclick="plot()" style="height: 30px;">繪圖</button>
        <div class="error" id="plot_error"></div>

        <h3>定積分結果</h3>
        <div id="integrals"></div>
        <div id="plot"></div>
    </section>
</template>
