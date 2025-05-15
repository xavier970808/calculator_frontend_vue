<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="/calculator_front_vue/src/views/script.js"></script>

<template>
    <h1>工程計算機</h1>

    <!-- 一般計算機 -->
    <section>
        <h2>一般計算</h2>
        <input id="calc_input" type="text" size="50" placeholder="輸入算式，如 sin(30) + 5 * 2" style="height: 30px;">
        <label>
            模式:
            <select id="calc_angle_mode" style="height: 30px;">
                <option value="deg">角度</option>
                <option value="rad">弧度</option>
            </select>
        </label>
        <button onclick="calculate()" style="height: 30px;">計算</button>
        <div id="calc_result"></div>
    </section>
</template>
 