import { h } from 'preact'
import style from './style'


export function validate(str) {
    var y = str.substr(0,4),
        m = str.substr(4,2) - 1,
        d = str.substr(6,2);
    var D = new Date(y,m,d);
    return (D.getFullYear() == y && D.getMonth() == m && D.getDate() == d) ? D : 'invalid date';
}

export function zeroPad (num) {
  return num < 10 ? '0' + num : num
}

export function parseQuery (qstr) {
  let query = {}
  let a = qstr.substr(1).split('&')
  for (let i = 0; i < a.length; i++) {
    let b = a[i].split('=')
    query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '')
  }
  return query
}

export function today () {
  let qdate = new Date();
  if (typeof window !== "undefined" ) {
    if (window.location.search) {
    let qs = parseQuery(window.location.search);
    if (qs.date) {
      qs.date = validate(qs.date);
      qdate = qs.date;
    }
  } else {qdate = new Date(qdate.setDate(qdate.getDate()))}
  return `${qdate.getFullYear()}-${zeroPad(qdate.getMonth() + 1)}-${zeroPad(qdate.getDate())}`
}
}

export function yday () {
  let qdate = new Date();
  if (typeof window !== "undefined" ) {
    if (window.location.search) {
    let qs = parseQuery(window.location.search);
    if (qs.date) {
      qs.date = validate(qs.date);
      qdate = new Date(qs.date.setDate(qs.date.getDate() - 1));
    }
  } else {qdate = new Date(qdate.setDate(qdate.getDate() - 1));}
  return `?date=${qdate.getFullYear()}${zeroPad(qdate.getMonth() + 1)}${zeroPad(qdate.getDate())}`
}
}

export function tmrw () {
  let qdate = new Date();
  if (typeof window !== "undefined" ) {
    if (window.location.search) {
    let qs = parseQuery(window.location.search);
    if (qs.date) {
      qs.date = validate(qs.date);
      qdate = new Date(qs.date.setDate(qs.date.getDate() + 1));
      
    }
  } else {qdate = new Date(qdate.setDate(qdate.getDate() + 1));}
  return `?date=${qdate.getFullYear()}${zeroPad(qdate.getMonth() + 1)}${zeroPad(qdate.getDate())}`
}
}

const Header = () => (
  <div>
    <div class='flex center flex-column header'>
      <h1 class={style.title}>Worth a watch?</h1>
      <date class={style.date}>
      <a href={yday()} class={style.arrow}>&larr;</a>
      <input type='date' id='date' name='date' class={style.dateinput} value={today()} />
      <a href={tmrw()} class={style.arrow}>&rarr;</a>
      
      </date>
    </div>
    <div class='flex flex-column' />
  </div>
)

export default Header