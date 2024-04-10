function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Sum */
	this.urlHashMap["porownanie_algorytmow:92"] = "porownanie_algorytmow.st:94";
	/* <S3>/Discrete-Time
Integrator */
	this.urlHashMap["porownanie_algorytmow:80:398"] = "porownanie_algorytmow.st:47,54,93,128";
	/* <S3>/Linear extended state observer */
	this.urlHashMap["porownanie_algorytmow:80:27"] = "porownanie_algorytmow.st:92,129";
	/* <S5>/Extended state feedback robust controller */
	this.urlHashMap["porownanie_algorytmow:80:35"] = "porownanie_algorytmow.st:53,82";
	/* <S6>:1 */
	this.urlHashMap["porownanie_algorytmow:80:27:1"] = "porownanie_algorytmow.st:95";
	/* <S6>:1:10 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:10"] = "porownanie_algorytmow.st:96";
	/* <S6>:1:22 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:22"] = "porownanie_algorytmow.st:97,107";
	/* <S6>:1:23 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:23"] = "porownanie_algorytmow.st:99,109";
	/* <S6>:1:24 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:24"] = "porownanie_algorytmow.st:102,112";
	/* <S6>:1:25 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:25"] = "porownanie_algorytmow.st:103,113";
	/* <S6>:1:11 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:11"] = "porownanie_algorytmow.st:106";
	/* <S6>:1:12 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:12"] = "porownanie_algorytmow.st:116";
	/* <S6>:1:13 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:13"] = "porownanie_algorytmow.st:117";
	/* <S6>:1:35 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:35"] = "porownanie_algorytmow.st:118";
	/* <S6>:1:14 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:14"] = "porownanie_algorytmow.st:119";
	/* <S6>:1:39 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:39"] = "porownanie_algorytmow.st:120";
	/* <S6>:1:40 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:40"] = "porownanie_algorytmow.st:123";
	/* <S6>:1:16 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:16"] = "porownanie_algorytmow.st:124";
	/* <S6>:1:17 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:17"] = "porownanie_algorytmow.st:125";
	/* <S6>:1:18 */
	this.urlHashMap["porownanie_algorytmow:80:27:1:18"] = "porownanie_algorytmow.st:126";
	/* <S7>/Last element of estimated extended state */
	this.urlHashMap["porownanie_algorytmow:80:254"] = "msg=rtwMsg_notTraceable&block=porownanie_algorytmow:80:254";
	/* <S8>:1 */
	this.urlHashMap["porownanie_algorytmow:80:254:1"] = "porownanie_algorytmow.st:130";
	/* <S8>:1:2 */
	this.urlHashMap["porownanie_algorytmow:80:254:1:2"] = "porownanie_algorytmow.st:131";
	/* <S10>:1 */
	this.urlHashMap["porownanie_algorytmow:80:35:1"] = "porownanie_algorytmow.st:55";
	/* <S10>:1:8 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:8"] = "porownanie_algorytmow.st:56";
	/* <S10>:1:17 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:17"] = "porownanie_algorytmow.st:57,67";
	/* <S10>:1:18 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:18"] = "porownanie_algorytmow.st:59,69";
	/* <S10>:1:19 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:19"] = "porownanie_algorytmow.st:62,72";
	/* <S10>:1:20 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:20"] = "porownanie_algorytmow.st:63,73";
	/* <S10>:1:9 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:9"] = "porownanie_algorytmow.st:66";
	/* <S10>:1:10 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:10"] = "porownanie_algorytmow.st:76";
	/* <S10>:1:25 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:25"] = "porownanie_algorytmow.st:77";
	/* <S10>:1:26 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:26"] = "porownanie_algorytmow.st:78";
	/* <S10>:1:12 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:12"] = "porownanie_algorytmow.st:79";
	/* <S10>:1:13 */
	this.urlHashMap["porownanie_algorytmow:80:35:1:13"] = "porownanie_algorytmow.st:80";
	/* <S13>/Saturation */
	this.urlHashMap["porownanie_algorytmow:80:107"] = "porownanie_algorytmow.st:84,90";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "porownanie_algorytmow"};
	this.sidHashMap["porownanie_algorytmow"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/Ref"] = {sid: "porownanie_algorytmow:120"};
	this.sidHashMap["porownanie_algorytmow:120"] = {rtwname: "<S1>/Ref"};
	this.rtwnameHashMap["<S1>/fdbck"] = {sid: "porownanie_algorytmow:121"};
	this.sidHashMap["porownanie_algorytmow:121"] = {rtwname: "<S1>/fdbck"};
	this.rtwnameHashMap["<S1>/b"] = {sid: "porownanie_algorytmow:159"};
	this.sidHashMap["porownanie_algorytmow:159"] = {rtwname: "<S1>/b"};
	this.rtwnameHashMap["<S1>/obs_band"] = {sid: "porownanie_algorytmow:160"};
	this.sidHashMap["porownanie_algorytmow:160"] = {rtwname: "<S1>/obs_band"};
	this.rtwnameHashMap["<S1>/ctrl_band"] = {sid: "porownanie_algorytmow:161"};
	this.sidHashMap["porownanie_algorytmow:161"] = {rtwname: "<S1>/ctrl_band"};
	this.rtwnameHashMap["<S1>/ADRC controller"] = {sid: "porownanie_algorytmow:80"};
	this.sidHashMap["porownanie_algorytmow:80"] = {rtwname: "<S1>/ADRC controller"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "porownanie_algorytmow:92"};
	this.sidHashMap["porownanie_algorytmow:92"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/y"] = {sid: "porownanie_algorytmow:122"};
	this.sidHashMap["porownanie_algorytmow:122"] = {rtwname: "<S1>/y"};
	this.rtwnameHashMap["<S2>/controlError"] = {sid: "porownanie_algorytmow:80:3"};
	this.sidHashMap["porownanie_algorytmow:80:3"] = {rtwname: "<S2>/controlError"};
	this.rtwnameHashMap["<S2>/inputGainParameterIn"] = {sid: "porownanie_algorytmow:80:399"};
	this.sidHashMap["porownanie_algorytmow:80:399"] = {rtwname: "<S2>/inputGainParameterIn"};
	this.rtwnameHashMap["<S2>/observerBandwidthIn"] = {sid: "porownanie_algorytmow:80:400"};
	this.sidHashMap["porownanie_algorytmow:80:400"] = {rtwname: "<S2>/observerBandwidthIn"};
	this.rtwnameHashMap["<S2>/controllerBandwidthIn"] = {sid: "porownanie_algorytmow:80:401"};
	this.sidHashMap["porownanie_algorytmow:80:401"] = {rtwname: "<S2>/controllerBandwidthIn"};
	this.rtwnameHashMap["<S2>/ "] = {sid: "porownanie_algorytmow:80:4"};
	this.sidHashMap["porownanie_algorytmow:80:4"] = {rtwname: "<S2>/ "};
	this.rtwnameHashMap["<S2>/From"] = {sid: "porownanie_algorytmow:80:7"};
	this.sidHashMap["porownanie_algorytmow:80:7"] = {rtwname: "<S2>/From"};
	this.rtwnameHashMap["<S2>/From1"] = {sid: "porownanie_algorytmow:80:243"};
	this.sidHashMap["porownanie_algorytmow:80:243"] = {rtwname: "<S2>/From1"};
	this.rtwnameHashMap["<S2>/From2"] = {sid: "porownanie_algorytmow:80:56"};
	this.sidHashMap["porownanie_algorytmow:80:56"] = {rtwname: "<S2>/From2"};
	this.rtwnameHashMap["<S2>/From3"] = {sid: "porownanie_algorytmow:80:60"};
	this.sidHashMap["porownanie_algorytmow:80:60"] = {rtwname: "<S2>/From3"};
	this.rtwnameHashMap["<S2>/From4"] = {sid: "porownanie_algorytmow:80:143"};
	this.sidHashMap["porownanie_algorytmow:80:143"] = {rtwname: "<S2>/From4"};
	this.rtwnameHashMap["<S2>/From5"] = {sid: "porownanie_algorytmow:80:10"};
	this.sidHashMap["porownanie_algorytmow:80:10"] = {rtwname: "<S2>/From5"};
	this.rtwnameHashMap["<S2>/From6"] = {sid: "porownanie_algorytmow:80:11"};
	this.sidHashMap["porownanie_algorytmow:80:11"] = {rtwname: "<S2>/From6"};
	this.rtwnameHashMap["<S2>/From7"] = {sid: "porownanie_algorytmow:80:146"};
	this.sidHashMap["porownanie_algorytmow:80:146"] = {rtwname: "<S2>/From7"};
	this.rtwnameHashMap["<S2>/Goto"] = {sid: "porownanie_algorytmow:80:14"};
	this.sidHashMap["porownanie_algorytmow:80:14"] = {rtwname: "<S2>/Goto"};
	this.rtwnameHashMap["<S2>/Goto1"] = {sid: "porownanie_algorytmow:80:15"};
	this.sidHashMap["porownanie_algorytmow:80:15"] = {rtwname: "<S2>/Goto1"};
	this.rtwnameHashMap["<S2>/Goto2"] = {sid: "porownanie_algorytmow:80:53"};
	this.sidHashMap["porownanie_algorytmow:80:53"] = {rtwname: "<S2>/Goto2"};
	this.rtwnameHashMap["<S2>/Goto3"] = {sid: "porownanie_algorytmow:80:16"};
	this.sidHashMap["porownanie_algorytmow:80:16"] = {rtwname: "<S2>/Goto3"};
	this.rtwnameHashMap["<S2>/Goto4"] = {sid: "porownanie_algorytmow:80:142"};
	this.sidHashMap["porownanie_algorytmow:80:142"] = {rtwname: "<S2>/Goto4"};
	this.rtwnameHashMap["<S2>/Goto5"] = {sid: "porownanie_algorytmow:80:145"};
	this.sidHashMap["porownanie_algorytmow:80:145"] = {rtwname: "<S2>/Goto5"};
	this.rtwnameHashMap["<S2>/Linear extended state observer"] = {sid: "porownanie_algorytmow:80:21"};
	this.sidHashMap["porownanie_algorytmow:80:21"] = {rtwname: "<S2>/Linear extended state observer"};
	this.rtwnameHashMap["<S2>/Observer output"] = {sid: "porownanie_algorytmow:80:244"};
	this.sidHashMap["porownanie_algorytmow:80:244"] = {rtwname: "<S2>/Observer output"};
	this.rtwnameHashMap["<S2>/State feedback robust controller"] = {sid: "porownanie_algorytmow:80:30"};
	this.sidHashMap["porownanie_algorytmow:80:30"] = {rtwname: "<S2>/State feedback robust controller"};
	this.rtwnameHashMap["<S2>/selectedObserverOutput"] = {sid: "porownanie_algorytmow:80:397"};
	this.sidHashMap["porownanie_algorytmow:80:397"] = {rtwname: "<S2>/selectedObserverOutput"};
	this.rtwnameHashMap["<S2>/controlSignal"] = {sid: "porownanie_algorytmow:80:37"};
	this.sidHashMap["porownanie_algorytmow:80:37"] = {rtwname: "<S2>/controlSignal"};
	this.rtwnameHashMap["<S3>/controlError"] = {sid: "porownanie_algorytmow:80:22"};
	this.sidHashMap["porownanie_algorytmow:80:22"] = {rtwname: "<S3>/controlError"};
	this.rtwnameHashMap["<S3>/controlSignal"] = {sid: "porownanie_algorytmow:80:23"};
	this.sidHashMap["porownanie_algorytmow:80:23"] = {rtwname: "<S3>/controlSignal"};
	this.rtwnameHashMap["<S3>/externalInputGainParameter"] = {sid: "porownanie_algorytmow:80:54"};
	this.sidHashMap["porownanie_algorytmow:80:54"] = {rtwname: "<S3>/externalInputGainParameter"};
	this.rtwnameHashMap["<S3>/externalObserverBandwidth"] = {sid: "porownanie_algorytmow:80:141"};
	this.sidHashMap["porownanie_algorytmow:80:141"] = {rtwname: "<S3>/externalObserverBandwidth"};
	this.rtwnameHashMap["<S3>/Discrete-Time Integrator"] = {sid: "porownanie_algorytmow:80:398"};
	this.sidHashMap["porownanie_algorytmow:80:398"] = {rtwname: "<S3>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S3>/Linear extended state observer"] = {sid: "porownanie_algorytmow:80:27"};
	this.sidHashMap["porownanie_algorytmow:80:27"] = {rtwname: "<S3>/Linear extended state observer"};
	this.rtwnameHashMap["<S3>/estimatedExtendedState"] = {sid: "porownanie_algorytmow:80:28"};
	this.sidHashMap["porownanie_algorytmow:80:28"] = {rtwname: "<S3>/estimatedExtendedState"};
	this.rtwnameHashMap["<S4>/estimatedExtendedState"] = {sid: "porownanie_algorytmow:80:245"};
	this.sidHashMap["porownanie_algorytmow:80:245"] = {rtwname: "<S4>/estimatedExtendedState"};
	this.rtwnameHashMap["<S4>/Only estimated control error"] = {sid: "porownanie_algorytmow:80:331"};
	this.sidHashMap["porownanie_algorytmow:80:331"] = {rtwname: "<S4>/Only estimated control error"};
	this.rtwnameHashMap["<S4>/Only estimated total disturbance"] = {sid: "porownanie_algorytmow:80:249"};
	this.sidHashMap["porownanie_algorytmow:80:249"] = {rtwname: "<S4>/Only estimated total disturbance"};
	this.rtwnameHashMap["<S4>/Whole estimated extended state"] = {sid: "porownanie_algorytmow:80:246"};
	this.sidHashMap["porownanie_algorytmow:80:246"] = {rtwname: "<S4>/Whole estimated extended state"};
	this.rtwnameHashMap["<S4>/selectedObserverOutput"] = {sid: "porownanie_algorytmow:80:252"};
	this.sidHashMap["porownanie_algorytmow:80:252"] = {rtwname: "<S4>/selectedObserverOutput"};
	this.rtwnameHashMap["<S5>/estimatedExtendedState"] = {sid: "porownanie_algorytmow:80:34"};
	this.sidHashMap["porownanie_algorytmow:80:34"] = {rtwname: "<S5>/estimatedExtendedState"};
	this.rtwnameHashMap["<S5>/externalInputGainParameter"] = {sid: "porownanie_algorytmow:80:59"};
	this.sidHashMap["porownanie_algorytmow:80:59"] = {rtwname: "<S5>/externalInputGainParameter"};
	this.rtwnameHashMap["<S5>/externalControllerBandwidth"] = {sid: "porownanie_algorytmow:80:144"};
	this.sidHashMap["porownanie_algorytmow:80:144"] = {rtwname: "<S5>/externalControllerBandwidth"};
	this.rtwnameHashMap["<S5>/Dead time"] = {sid: "porownanie_algorytmow:80:127"};
	this.sidHashMap["porownanie_algorytmow:80:127"] = {rtwname: "<S5>/Dead time"};
	this.rtwnameHashMap["<S5>/Extended state feedback robust controller"] = {sid: "porownanie_algorytmow:80:35"};
	this.sidHashMap["porownanie_algorytmow:80:35"] = {rtwname: "<S5>/Extended state feedback robust controller"};
	this.rtwnameHashMap["<S5>/Saturation"] = {sid: "porownanie_algorytmow:80:97"};
	this.sidHashMap["porownanie_algorytmow:80:97"] = {rtwname: "<S5>/Saturation"};
	this.rtwnameHashMap["<S5>/controlSignal"] = {sid: "porownanie_algorytmow:80:36"};
	this.sidHashMap["porownanie_algorytmow:80:36"] = {rtwname: "<S5>/controlSignal"};
	this.rtwnameHashMap["<S6>:1"] = {sid: "porownanie_algorytmow:80:27:1"};
	this.sidHashMap["porownanie_algorytmow:80:27:1"] = {rtwname: "<S6>:1"};
	this.rtwnameHashMap["<S6>:1:10"] = {sid: "porownanie_algorytmow:80:27:1:10"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:10"] = {rtwname: "<S6>:1:10"};
	this.rtwnameHashMap["<S6>:1:22"] = {sid: "porownanie_algorytmow:80:27:1:22"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:22"] = {rtwname: "<S6>:1:22"};
	this.rtwnameHashMap["<S6>:1:23"] = {sid: "porownanie_algorytmow:80:27:1:23"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:23"] = {rtwname: "<S6>:1:23"};
	this.rtwnameHashMap["<S6>:1:24"] = {sid: "porownanie_algorytmow:80:27:1:24"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:24"] = {rtwname: "<S6>:1:24"};
	this.rtwnameHashMap["<S6>:1:25"] = {sid: "porownanie_algorytmow:80:27:1:25"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:25"] = {rtwname: "<S6>:1:25"};
	this.rtwnameHashMap["<S6>:1:11"] = {sid: "porownanie_algorytmow:80:27:1:11"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:11"] = {rtwname: "<S6>:1:11"};
	this.rtwnameHashMap["<S6>:1:12"] = {sid: "porownanie_algorytmow:80:27:1:12"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:12"] = {rtwname: "<S6>:1:12"};
	this.rtwnameHashMap["<S6>:1:13"] = {sid: "porownanie_algorytmow:80:27:1:13"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:13"] = {rtwname: "<S6>:1:13"};
	this.rtwnameHashMap["<S6>:1:35"] = {sid: "porownanie_algorytmow:80:27:1:35"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:35"] = {rtwname: "<S6>:1:35"};
	this.rtwnameHashMap["<S6>:1:14"] = {sid: "porownanie_algorytmow:80:27:1:14"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:14"] = {rtwname: "<S6>:1:14"};
	this.rtwnameHashMap["<S6>:1:39"] = {sid: "porownanie_algorytmow:80:27:1:39"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:39"] = {rtwname: "<S6>:1:39"};
	this.rtwnameHashMap["<S6>:1:40"] = {sid: "porownanie_algorytmow:80:27:1:40"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:40"] = {rtwname: "<S6>:1:40"};
	this.rtwnameHashMap["<S6>:1:16"] = {sid: "porownanie_algorytmow:80:27:1:16"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:16"] = {rtwname: "<S6>:1:16"};
	this.rtwnameHashMap["<S6>:1:17"] = {sid: "porownanie_algorytmow:80:27:1:17"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:17"] = {rtwname: "<S6>:1:17"};
	this.rtwnameHashMap["<S6>:1:18"] = {sid: "porownanie_algorytmow:80:27:1:18"};
	this.sidHashMap["porownanie_algorytmow:80:27:1:18"] = {rtwname: "<S6>:1:18"};
	this.rtwnameHashMap["<S7>/estimatedExtendedState"] = {sid: "porownanie_algorytmow:80:250"};
	this.sidHashMap["porownanie_algorytmow:80:250"] = {rtwname: "<S7>/estimatedExtendedState"};
	this.rtwnameHashMap["<S7>/Last element of estimated extended state"] = {sid: "porownanie_algorytmow:80:254"};
	this.sidHashMap["porownanie_algorytmow:80:254"] = {rtwname: "<S7>/Last element of estimated extended state"};
	this.rtwnameHashMap["<S7>/selectedObserverOutput"] = {sid: "porownanie_algorytmow:80:251"};
	this.sidHashMap["porownanie_algorytmow:80:251"] = {rtwname: "<S7>/selectedObserverOutput"};
	this.rtwnameHashMap["<S8>:1"] = {sid: "porownanie_algorytmow:80:254:1"};
	this.sidHashMap["porownanie_algorytmow:80:254:1"] = {rtwname: "<S8>:1"};
	this.rtwnameHashMap["<S8>:1:2"] = {sid: "porownanie_algorytmow:80:254:1:2"};
	this.sidHashMap["porownanie_algorytmow:80:254:1:2"] = {rtwname: "<S8>:1:2"};
	this.rtwnameHashMap["<S9>/In1"] = {sid: "porownanie_algorytmow:80:128"};
	this.sidHashMap["porownanie_algorytmow:80:128"] = {rtwname: "<S9>/In1"};
	this.rtwnameHashMap["<S9>/Dead time off"] = {sid: "porownanie_algorytmow:80:129"};
	this.sidHashMap["porownanie_algorytmow:80:129"] = {rtwname: "<S9>/Dead time off"};
	this.rtwnameHashMap["<S9>/Dead time on"] = {sid: "porownanie_algorytmow:80:132"};
	this.sidHashMap["porownanie_algorytmow:80:132"] = {rtwname: "<S9>/Dead time on"};
	this.rtwnameHashMap["<S9>/Out1"] = {sid: "porownanie_algorytmow:80:135"};
	this.sidHashMap["porownanie_algorytmow:80:135"] = {rtwname: "<S9>/Out1"};
	this.rtwnameHashMap["<S10>:1"] = {sid: "porownanie_algorytmow:80:35:1"};
	this.sidHashMap["porownanie_algorytmow:80:35:1"] = {rtwname: "<S10>:1"};
	this.rtwnameHashMap["<S10>:1:8"] = {sid: "porownanie_algorytmow:80:35:1:8"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:8"] = {rtwname: "<S10>:1:8"};
	this.rtwnameHashMap["<S10>:1:17"] = {sid: "porownanie_algorytmow:80:35:1:17"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:17"] = {rtwname: "<S10>:1:17"};
	this.rtwnameHashMap["<S10>:1:18"] = {sid: "porownanie_algorytmow:80:35:1:18"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:18"] = {rtwname: "<S10>:1:18"};
	this.rtwnameHashMap["<S10>:1:19"] = {sid: "porownanie_algorytmow:80:35:1:19"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:19"] = {rtwname: "<S10>:1:19"};
	this.rtwnameHashMap["<S10>:1:20"] = {sid: "porownanie_algorytmow:80:35:1:20"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:20"] = {rtwname: "<S10>:1:20"};
	this.rtwnameHashMap["<S10>:1:9"] = {sid: "porownanie_algorytmow:80:35:1:9"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:9"] = {rtwname: "<S10>:1:9"};
	this.rtwnameHashMap["<S10>:1:10"] = {sid: "porownanie_algorytmow:80:35:1:10"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:10"] = {rtwname: "<S10>:1:10"};
	this.rtwnameHashMap["<S10>:1:25"] = {sid: "porownanie_algorytmow:80:35:1:25"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:25"] = {rtwname: "<S10>:1:25"};
	this.rtwnameHashMap["<S10>:1:26"] = {sid: "porownanie_algorytmow:80:35:1:26"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:26"] = {rtwname: "<S10>:1:26"};
	this.rtwnameHashMap["<S10>:1:12"] = {sid: "porownanie_algorytmow:80:35:1:12"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:12"] = {rtwname: "<S10>:1:12"};
	this.rtwnameHashMap["<S10>:1:13"] = {sid: "porownanie_algorytmow:80:35:1:13"};
	this.sidHashMap["porownanie_algorytmow:80:35:1:13"] = {rtwname: "<S10>:1:13"};
	this.rtwnameHashMap["<S11>/In1"] = {sid: "porownanie_algorytmow:80:98"};
	this.sidHashMap["porownanie_algorytmow:80:98"] = {rtwname: "<S11>/In1"};
	this.rtwnameHashMap["<S11>/Saturation off"] = {sid: "porownanie_algorytmow:80:99"};
	this.sidHashMap["porownanie_algorytmow:80:99"] = {rtwname: "<S11>/Saturation off"};
	this.rtwnameHashMap["<S11>/Saturation on"] = {sid: "porownanie_algorytmow:80:102"};
	this.sidHashMap["porownanie_algorytmow:80:102"] = {rtwname: "<S11>/Saturation on"};
	this.rtwnameHashMap["<S11>/controlSignal"] = {sid: "porownanie_algorytmow:80:105"};
	this.sidHashMap["porownanie_algorytmow:80:105"] = {rtwname: "<S11>/controlSignal"};
	this.rtwnameHashMap["<S12>/In1"] = {sid: "porownanie_algorytmow:80:130"};
	this.sidHashMap["porownanie_algorytmow:80:130"] = {rtwname: "<S12>/In1"};
	this.rtwnameHashMap["<S12>/Out1"] = {sid: "porownanie_algorytmow:80:131"};
	this.sidHashMap["porownanie_algorytmow:80:131"] = {rtwname: "<S12>/Out1"};
	this.rtwnameHashMap["<S13>/In1"] = {sid: "porownanie_algorytmow:80:103"};
	this.sidHashMap["porownanie_algorytmow:80:103"] = {rtwname: "<S13>/In1"};
	this.rtwnameHashMap["<S13>/Saturation"] = {sid: "porownanie_algorytmow:80:107"};
	this.sidHashMap["porownanie_algorytmow:80:107"] = {rtwname: "<S13>/Saturation"};
	this.rtwnameHashMap["<S13>/controlSignal"] = {sid: "porownanie_algorytmow:80:104"};
	this.sidHashMap["porownanie_algorytmow:80:104"] = {rtwname: "<S13>/controlSignal"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
