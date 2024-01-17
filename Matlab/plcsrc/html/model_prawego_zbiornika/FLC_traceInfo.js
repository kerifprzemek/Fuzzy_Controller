function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Fuzzy Logic 
Controller */
	this.urlHashMap["model_prawego_zbiornika:38"] = "model_prawego_zbiornika.st:78,89,92,101,104,113,116,130,133,170,173,183,186,245";
	/* <S2>/Defuzzify Outputs */
	this.urlHashMap["model_prawego_zbiornika:38:581"] = "model_prawego_zbiornika.st:210,244";
	/* <S2>/Evaluate Rule Antecedents */
	this.urlHashMap["model_prawego_zbiornika:38:579"] = "model_prawego_zbiornika.st:79,93,105,117,134,212";
	/* <S2>/Evaluate Rule Consequents */
	this.urlHashMap["model_prawego_zbiornika:38:580"] = "model_prawego_zbiornika.st:149,174,187";
	/* <S2>/InputConversion */
	this.urlHashMap["model_prawego_zbiornika:38:575"] = "msg=rtwMsg_notTraceable&block=model_prawego_zbiornika:38:575";
	/* <S2>/Output Sample Points */
	this.urlHashMap["model_prawego_zbiornika:38:584"] = "model_prawego_zbiornika.st:150,175,211,240";
	/* <S3>:1 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1"] = "model_prawego_zbiornika.st:213";
	/* <S3>:1:4 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:4"] = "model_prawego_zbiornika.st:214";
	/* <S3>:1:5 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:5"] = "model_prawego_zbiornika.st:215";
	/* <S3>:1:63 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:63"] = "model_prawego_zbiornika.st:216";
	/* <S3>:1:64 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:64"] = "model_prawego_zbiornika.st:217";
	/* <S3>:1:65 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:65"] = "model_prawego_zbiornika.st:218";
	/* <S3>:1:66 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:66"] = "model_prawego_zbiornika.st:219";
	/* <S3>:1:67 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:67"] = "model_prawego_zbiornika.st:220";
	/* <S3>:1:68 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:68"] = "model_prawego_zbiornika.st:221";
	/* <S3>:1:69 */
	this.urlHashMap["model_prawego_zbiornika:38:581:1:69"] = "model_prawego_zbiornika.st:222";
	/* <S4>:1 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1"] = "model_prawego_zbiornika.st:80";
	/* <S4>:1:4 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:4"] = "model_prawego_zbiornika.st:81";
	/* <S4>:1:5 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:5"] = "model_prawego_zbiornika.st:82";
	/* <S4>:1:32 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:32"] = "model_prawego_zbiornika.st:83";
	/* <S4>:1:33 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:33"] = "model_prawego_zbiornika.st:84";
	/* <S4>:1:34 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:34"] = "model_prawego_zbiornika.st:85";
	/* <S4>:1:35 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:35"] = "model_prawego_zbiornika.st:86";
	/* <S4>:1:36 */
	this.urlHashMap["model_prawego_zbiornika:38:579:1:36"] = "model_prawego_zbiornika.st:87";
	/* <S5>:1 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1"] = "model_prawego_zbiornika.st:151";
	/* <S5>:1:4 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:4"] = "model_prawego_zbiornika.st:152";
	/* <S5>:1:5 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:5"] = "model_prawego_zbiornika.st:153";
	/* <S5>:1:55 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:55"] = "model_prawego_zbiornika.st:154";
	/* <S5>:1:56 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:56"] = "model_prawego_zbiornika.st:155";
	/* <S5>:1:57 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:57"] = "model_prawego_zbiornika.st:156";
	/* <S5>:1:58 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:58"] = "model_prawego_zbiornika.st:157";
	/* <S5>:1:59 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:59"] = "model_prawego_zbiornika.st:158";
	/* <S5>:1:60 */
	this.urlHashMap["model_prawego_zbiornika:38:580:1:60"] = "model_prawego_zbiornika.st:159";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "model_prawego_zbiornika"};
	this.sidHashMap["model_prawego_zbiornika"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/Error"] = {sid: "model_prawego_zbiornika:68"};
	this.sidHashMap["model_prawego_zbiornika:68"] = {rtwname: "<S1>/Error"};
	this.rtwnameHashMap["<S1>/Error change"] = {sid: "model_prawego_zbiornika:69"};
	this.sidHashMap["model_prawego_zbiornika:69"] = {rtwname: "<S1>/Error change"};
	this.rtwnameHashMap["<S1>/Fuzzy Logic  Controller"] = {sid: "model_prawego_zbiornika:38"};
	this.sidHashMap["model_prawego_zbiornika:38"] = {rtwname: "<S1>/Fuzzy Logic  Controller"};
	this.rtwnameHashMap["<S1>/Mux"] = {sid: "model_prawego_zbiornika:40"};
	this.sidHashMap["model_prawego_zbiornika:40"] = {rtwname: "<S1>/Mux"};
	this.rtwnameHashMap["<S1>/out"] = {sid: "model_prawego_zbiornika:70"};
	this.sidHashMap["model_prawego_zbiornika:70"] = {rtwname: "<S1>/out"};
	this.rtwnameHashMap["<S2>/in"] = {sid: "model_prawego_zbiornika:38:514"};
	this.sidHashMap["model_prawego_zbiornika:38:514"] = {rtwname: "<S2>/in"};
	this.rtwnameHashMap["<S2>/Defuzzify Outputs"] = {sid: "model_prawego_zbiornika:38:581"};
	this.sidHashMap["model_prawego_zbiornika:38:581"] = {rtwname: "<S2>/Defuzzify Outputs"};
	this.rtwnameHashMap["<S2>/Evaluate Rule Antecedents"] = {sid: "model_prawego_zbiornika:38:579"};
	this.sidHashMap["model_prawego_zbiornika:38:579"] = {rtwname: "<S2>/Evaluate Rule Antecedents"};
	this.rtwnameHashMap["<S2>/Evaluate Rule Consequents"] = {sid: "model_prawego_zbiornika:38:580"};
	this.sidHashMap["model_prawego_zbiornika:38:580"] = {rtwname: "<S2>/Evaluate Rule Consequents"};
	this.rtwnameHashMap["<S2>/InputConversion"] = {sid: "model_prawego_zbiornika:38:575"};
	this.sidHashMap["model_prawego_zbiornika:38:575"] = {rtwname: "<S2>/InputConversion"};
	this.rtwnameHashMap["<S2>/Output Sample Points"] = {sid: "model_prawego_zbiornika:38:584"};
	this.sidHashMap["model_prawego_zbiornika:38:584"] = {rtwname: "<S2>/Output Sample Points"};
	this.rtwnameHashMap["<S2>/out"] = {sid: "model_prawego_zbiornika:38:521"};
	this.sidHashMap["model_prawego_zbiornika:38:521"] = {rtwname: "<S2>/out"};
	this.rtwnameHashMap["<S3>:1"] = {sid: "model_prawego_zbiornika:38:581:1"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1"] = {rtwname: "<S3>:1"};
	this.rtwnameHashMap["<S3>:1:4"] = {sid: "model_prawego_zbiornika:38:581:1:4"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:4"] = {rtwname: "<S3>:1:4"};
	this.rtwnameHashMap["<S3>:1:5"] = {sid: "model_prawego_zbiornika:38:581:1:5"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:5"] = {rtwname: "<S3>:1:5"};
	this.rtwnameHashMap["<S3>:1:63"] = {sid: "model_prawego_zbiornika:38:581:1:63"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:63"] = {rtwname: "<S3>:1:63"};
	this.rtwnameHashMap["<S3>:1:64"] = {sid: "model_prawego_zbiornika:38:581:1:64"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:64"] = {rtwname: "<S3>:1:64"};
	this.rtwnameHashMap["<S3>:1:65"] = {sid: "model_prawego_zbiornika:38:581:1:65"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:65"] = {rtwname: "<S3>:1:65"};
	this.rtwnameHashMap["<S3>:1:66"] = {sid: "model_prawego_zbiornika:38:581:1:66"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:66"] = {rtwname: "<S3>:1:66"};
	this.rtwnameHashMap["<S3>:1:67"] = {sid: "model_prawego_zbiornika:38:581:1:67"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:67"] = {rtwname: "<S3>:1:67"};
	this.rtwnameHashMap["<S3>:1:68"] = {sid: "model_prawego_zbiornika:38:581:1:68"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:68"] = {rtwname: "<S3>:1:68"};
	this.rtwnameHashMap["<S3>:1:69"] = {sid: "model_prawego_zbiornika:38:581:1:69"};
	this.sidHashMap["model_prawego_zbiornika:38:581:1:69"] = {rtwname: "<S3>:1:69"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "model_prawego_zbiornika:38:579:1"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "model_prawego_zbiornika:38:579:1:4"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "model_prawego_zbiornika:38:579:1:5"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:32"] = {sid: "model_prawego_zbiornika:38:579:1:32"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:32"] = {rtwname: "<S4>:1:32"};
	this.rtwnameHashMap["<S4>:1:33"] = {sid: "model_prawego_zbiornika:38:579:1:33"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:33"] = {rtwname: "<S4>:1:33"};
	this.rtwnameHashMap["<S4>:1:34"] = {sid: "model_prawego_zbiornika:38:579:1:34"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:34"] = {rtwname: "<S4>:1:34"};
	this.rtwnameHashMap["<S4>:1:35"] = {sid: "model_prawego_zbiornika:38:579:1:35"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:35"] = {rtwname: "<S4>:1:35"};
	this.rtwnameHashMap["<S4>:1:36"] = {sid: "model_prawego_zbiornika:38:579:1:36"};
	this.sidHashMap["model_prawego_zbiornika:38:579:1:36"] = {rtwname: "<S4>:1:36"};
	this.rtwnameHashMap["<S5>:1"] = {sid: "model_prawego_zbiornika:38:580:1"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1"] = {rtwname: "<S5>:1"};
	this.rtwnameHashMap["<S5>:1:4"] = {sid: "model_prawego_zbiornika:38:580:1:4"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:4"] = {rtwname: "<S5>:1:4"};
	this.rtwnameHashMap["<S5>:1:5"] = {sid: "model_prawego_zbiornika:38:580:1:5"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:5"] = {rtwname: "<S5>:1:5"};
	this.rtwnameHashMap["<S5>:1:55"] = {sid: "model_prawego_zbiornika:38:580:1:55"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:55"] = {rtwname: "<S5>:1:55"};
	this.rtwnameHashMap["<S5>:1:56"] = {sid: "model_prawego_zbiornika:38:580:1:56"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:56"] = {rtwname: "<S5>:1:56"};
	this.rtwnameHashMap["<S5>:1:57"] = {sid: "model_prawego_zbiornika:38:580:1:57"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:57"] = {rtwname: "<S5>:1:57"};
	this.rtwnameHashMap["<S5>:1:58"] = {sid: "model_prawego_zbiornika:38:580:1:58"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:58"] = {rtwname: "<S5>:1:58"};
	this.rtwnameHashMap["<S5>:1:59"] = {sid: "model_prawego_zbiornika:38:580:1:59"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:59"] = {rtwname: "<S5>:1:59"};
	this.rtwnameHashMap["<S5>:1:60"] = {sid: "model_prawego_zbiornika:38:580:1:60"};
	this.sidHashMap["model_prawego_zbiornika:38:580:1:60"] = {rtwname: "<S5>:1:60"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
