<template>
  <h1>工程計算機</h1>
  <section>
    <h2>一般計算</h2>
    <input v-model="expression" type="text" size="50" placeholder="輸入算式，如 sin(30) + 5 * 2" style="height: 30px;">
    <label>
      模式:
      <select v-model="angleMode" style="height: 30px;">
        <option value="deg">角度</option>
        <option value="rad">弧度</option>
      </select>
    </label>
    <button @click="calculate" style="height: 30px;">計算</button>
    <div>{{ result }}</div>
  </section>
</template>

<script>
const API_BASE = 'https://calculator-gj6q.onrender.com';

export default {
  data() {
    return {
      expression: '',
      angleMode: 'deg',
      result: ''
    };
  },
  methods: {
    async calculate() {
      this.result = '計算中...';
      try {
        const response = await fetch(`${API_BASE}/calculate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            expression: this.expression,
            angle_mode: this.angleMode
          })
        });
        const data = await response.json();
        this.result = data.error ? `錯誤: ${data.error}` : `結果: ${data.result}`;
      } catch (err) {
        this.result = `伺服器連線失敗: ${err}`;
      }
    }
  }
};
</script>
