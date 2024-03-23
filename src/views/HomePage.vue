<template>
  <IonPage>
    <IonContent>
      <div class="container">
        <div class="calculator-output">
          <p class="number-input">{{ input }}</p>
          <span class="result">{{ result }}</span>
        </div>

        <div class="calculator-buttons">
          <IonButton
            color="green-custom span-2"
            shape="round"
            size="large"
            @click="clear()"
            >C</IonButton
          >
          <IonButton
            color="green-custom"
            shape="round"
            size="large"
            @click="deleteClick()"
          >
            <IonIcon :icon="arrowBack"></IonIcon>
          </IonButton>
          <IonButton
            color="green-custom"
            shape="round"
            size="large"
            @click="print('/')"
            >&divide;</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('7')"
            >7</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('8')"
            >8</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('9')"
            >9</IonButton
          >
          <IonButton
            color="green-custom"
            shape="round"
            size="large"
            @click="print('*')"
            >*</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('4')"
            >4</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('5')"
            >5</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('6')"
            >6</IonButton
          >
          <IonButton
            color="green-custom"
            shape="round"
            size="large"
            @click="print('-')"
            >-</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('1')"
            >1</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('2')"
            >2</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('3')"
            >3</IonButton
          >
          <IonButton
            color="green-custom"
            shape="round"
            size="large"
            @click="print('+')"
            >+</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            class="span-2"
            @click="print('0')"
            >0</IonButton
          >
          <IonButton
            color="light"
            shape="round"
            size="large"
            @click="print('.')"
            >.</IonButton
          >
          <IonButton
            color="green-custom"
            shape="round"
            size="large"
            @click="calculate()"
            >=</IonButton
          >
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { arrowBack } from "ionicons/icons";
import { ref } from "vue";

const input = ref("" as string);
const result = ref(null as number | null);

const basicOperation = ["*", "/", "+", "-"];
let isNewOperation = false;

const print = (char: string) => {
  if (!isNewOperation) {
    input.value += char;
    return;
  }

  if (basicOperation.includes(char)) {
    input.value = result.value?.toString() ?? "";
    result.value = null;
  } else {
    clear();
  }
  isNewOperation = false;
  input.value += char;
};
const deleteClick = () => (input.value = input.value.slice(0, -1));
const clear = () => {
  input.value = "";
  result.value = null;
};

const calculate = () => {
  try {
    result.value = Math.round(eval(input.value) * 1e8) / 1e8;
  } catch (error) {
    input.value = "ERROR";
  }
  isNewOperation = true;
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.calculator-output {
  flex-grow: 1;
  padding: 2em;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.number-input {
  font-size: 3.5em;
}

.result {
  font-size: 2em;
}
.span-2 {
  grid-column: span 2;
}

.primary_button {
  background-color: #00dc82;
}
</style>
