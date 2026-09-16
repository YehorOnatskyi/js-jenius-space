import validator from "validator";
import dayjs from "dayjs";

const email = "ivan@example.com";

const out = document.querySelector("#out");
out.textContent =
  email +
  " — email правильный? " +
  validator.isEmail(email) +
  ". Заявка от " +
  dayjs().format("DD.MM.YYYY HH:mm");
