<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept' );
  header( 'Content-Type:application/json' );

  if ( !isset( $_POST['currency'] ) ) { echo '{"error":"no currency set"}'; exit; }

  $flag = 'http://flags.fmcdn.net/data/flags/h80/';
  switch( $_POST['currency'] ) {
    case "USD": $flag.="us.png"; break;
    case "JPY": $flag.="jp.png"; break;
    case "BGN": $flag.="bg.png"; break;
    case "CZK": $flag.="cz.png"; break;
    case "DKK": $flag.="dk.png"; break;
    case "GBP": $flag.="gb.png"; break;
    case "HUF": $flag.="hu.png"; break;
    case "PLN": $flag.="pl.png"; break;
    case "RON": $flag.="ro.png"; break;
    case "SEK": $flag.="se.png"; break;
    case "CHF": $flag.="ch.png"; break;
    case "HRK": $flag.="hr.png"; break;
    case "RUB": $flag.="ru.png"; break;
    case "TRY": $flag.="tr.png"; break;
    case "AUD": $flag.="au.png"; break;
    case "BRL": $flag.="br.png"; break;
    case "CAD": $flag.="ca.png"; break;
    case "CNY": $flag.="cn.png"; break;
    case "HKD": $flag.="cn.png"; break;
    case "IDR": $flag.="in.png"; break;
    case "ILS": $flag.="il.png"; break;
    case "INR": $flag.="in.png"; break;
    case "KRW": $flag.="kr.png"; break;
    case "MXN": $flag.="mx.png"; break;
    case "MYR": $flag.="my.png"; break;
    case "NZD": $flag.="nz.png"; break;
    case "PHP": $flag.="ph.png"; break;
    case "SGD": $flag.="sg.png"; break;
    case "THB": $flag.="th.png"; break;
    case "ZAR": $flag.="za.png"; break;
    default:  echo '{"error":"currency not exists"}'; exit;
  }

  echo '{"flag":"'.$flag.'"}';
