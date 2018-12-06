function Word_list(rnd_data){

	var rnd_01 = Number(rnd_data.charAt(0) + rnd_data.charAt(9));
	var rnd_02 = Number(rnd_data.charAt(1) + rnd_data.charAt(8));
	var rnd_03 = Number(rnd_data.charAt(2) + rnd_data.charAt(7));
	var rnd_04 = Number(rnd_data.charAt(3) + rnd_data.charAt(6));
	var rnd_05 = Number(rnd_data.charAt(4) + rnd_data.charAt(5));
	var rnd_06 = Number(rnd_data.charAt(5) + rnd_data.charAt(4));
	var rnd_07 = Number(rnd_data.charAt(6) + rnd_data.charAt(3));
	var rnd_08 = Number(rnd_data.charAt(7) + rnd_data.charAt(2));
	var rnd_09 = Number(rnd_data.charAt(8) + rnd_data.charAt(1));
	var rnd_10 = Number(rnd_data.charAt(9) + rnd_data.charAt(0));

	if ( rnd_01 == 10 ) { WL_01 = "%e7%82%8a%e3%81%8d%e3%81%9f%e3%81%a6%e3%81%8b%e3%82%88%e3%81%a1%e3%82%93"; }
	if ( rnd_01 == 10 ) { WL_01 = "%e7%82%8a%e3%81%8d%e3%81%9f%e3%81%a6%e3%81%8b%e3%82%88%e3%81%a1%e3%82%93"; }

	document.write("<a href=\"?text=" + WL_01 + "\">" + decodeURIComponent(WL_01) + "</a>");
}