const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleJzvWIJf = await BirdOracle.new({from: accounts[1]});
		const stringfQWxIKf = "Y3yDiwpfQIsfTLwtPqtSamsWOdgA4PpJH0i6VlhPDMgFKdkFijj0iWKwhs5wnO8Sow8XGC6FWY182ZS3eiVhb3"
		const stringlMVY4Rw = "s8ek9Jgfoece9JhIlH"
		const uinthvP4XHx = BigInt("589")
		const stringfHQ3s8w = "s6rP296b25EgVEj"
		const string5remyN = "ctfOTH6wrBWRA5zFzmykS5H3zh0BgHK"
		const stringEO5jocv = "UcUmFwzwLH4oDrUHg2a9dLDdhBkYAJzaYrUdki61njThps1GH5Hh14ECgjG0zaAO1JHnefKj99AwErUeFlLPJwqy9FM"
		const stringhszeWmz = "OjbjmKwAOznG7bgyfMur3mXxuC2voeuLJS5Tv"
		const addressdIU76Ta = await BirdOracleJzvWIJf.parseAddr.call(stringfQWxIKf, {from: accounts[4]});
		const uint21HRP8 = await BirdOracleJzvWIJf.getRatingByAddressString.call(stringlMVY4Rw, {from: accounts[0]});
		const stringiK0awcJ = await BirdOracleJzvWIJf.substring.call(stringfHQ3s8w, uinthvP4XHx, {from: accounts[4]});
		const 
aVTWa1V = await BirdOracleJzvWIJf.newChainRequest.call(stringEO5jocv, string5remyN, {from: "0x0000000000000000000000000000000000000001"});
		const uintqplJyWC = await BirdOracleJzvWIJf.getRatingByAddressString.call(stringhszeWmz, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const stringHki6eex = "Vv5V24JAGaMs5O9"
		const stringKYNYlMq = "UJs58ixfsNRCgqoFZ3kJa6y5Nx753gO9ThW7L3lCM84qADs2Skd88MfGU4XyIgmK6jUlhjn7B"
		const stringhK4uzvR = "qvLiWd9NEYhDykVrVnkYGNuo3xL62"
		const 
Wo6TXuL = await BirdOracleyhEIxOI.newChainRequest.call(stringKYNYlMq, stringHki6eex, {from: accounts[2]});
		const addressH8b2Xfd = await BirdOracleyhEIxOI.parseAddr.call(stringhK4uzvR, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGJ5jBM = await BirdOracle.new({from: accounts[3]});
		const addressC4jzdrS = accounts[0]
		const uinteOhvAQ = BigInt("717")
		const uintCrsEhzo = BigInt("1840")
		const stringQSz7UNR = "921K9hbKLWOU1MqFIf7pO96d3jjxHPTX6N9uNwIpSVhLodAG4cudbPBXb4LL4zFbNR"
		const uintnjutf6W = BigInt("924")
		const uintNjpQejy = BigInt("2015")
		const stringZ5oEJSW = "4a1sbBFpNTMLS3ok3kK1QeQo9ggrkx6Xb8CkYkaiDYudHwFVAiYMogikTrVaBE8WvXmCuHnuW5VdMW1wrt0viUXAt"
		const stringhSIcs9B = "yp6vAqfahlSBncOtijjP6RNPJCtxgBrmjjHFj26vixXw7Ist1r7v2"
		const uintLbNiPs1 = await BirdOracleGJ5jBM.getRatingByAddress.call(addressC4jzdrS, {from: accounts[4]});
		const stringmiaaDy2 = await BirdOracleGJ5jBM.substring.call(stringQSz7UNR, uintCrsEhzo, uinteOhvAQ, {from: accounts[4]});
		const stringCREpLQR = await BirdOracleGJ5jBM.substring.call(stringZ5oEJSW, uintNjpQejy, uintnjutf6W, {from: accounts[1]});
		const uintSPFaXOF = await BirdOracleGJ5jBM.getRatingByAddressString.call(stringhSIcs9B, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleMnOLuZB = await BirdOracle.new({from: accounts[0]});
		const stringPWxq9xz = "GyMLgTtZSbd82FDvzbOBB3bfBpu7wb3tMyhMnnQHSKZispzAcS3lNOQt2dxdvJQCS7tPPoPh97mmBMooN3A"
		const uintd7WqHV3 = BigInt("1571")
		const stringJxyJtQO = "yCRBDkqiI8aF3oRVxp7IsGs6FiqbBIRci01iOMeUihpBTxvFpxNlZpOIBg53KyAIWgHafTYLm7tONhbdUhppChDDxu7nHe"
		const uintILhuGv = BigInt("1581")
		const stringeIoQUIG = "85ddFAQBNgSo9ZNbRB4LYE6bNURzQLmpwVzlh5hVNlN7vd"
		const uintaQNNhW4 = await BirdOracleMnOLuZB.getRatingByAddressString.call(stringPWxq9xz, {from: accounts[0]});
		const stringHcPw4vN = await BirdOracleMnOLuZB.substring.call(stringJxyJtQO, uintd7WqHV3, {from: accounts[3]});
		const stringkWLOOXi = await BirdOracleMnOLuZB.substring.call(stringeIoQUIG, uintILhuGv, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclegb8CP2i = await BirdOracle.new({from: accounts[1]});
		const uintU3HILBy = BigInt("1081")
		const uintqK4VCWz = BigInt("458")
		const stringDlkqvFN = "7wcuyUf"
		const stringO3DbMgO = "csYqkUYF25dRwhy5B5T6jw7F1KnmR"
		const stringLqZpAbh = "oR3O48UKdoE8nx2vWtGkXj4bIXmGTrcqDokwL5WHXxFn7H4IjlBh0DQCMfE7d5vXJkGu6qpGPjoRPIS4bWxye"
		const uintQk6oVS = BigInt("168")
		const stringfWrJax = "NBTtu1UiEPliIJzMJI7or30VCKDqy84SXYozz"
		const stringwFPTsm4 = "63OoJX98MvrrYAwLKWTxDGbkkymyrB7EA2lwY9LbW6spqF3E7o5v7qW2CJruNrAnDTB5Cf2YMufplxBqHJrarcVqQX4Yz9"
		const address6XgDvE = accounts[5]
		const stringlpk3CR = await BirdOraclegb8CP2i.substring.call(stringDlkqvFN, uintqK4VCWz, uintU3HILBy, {from: accounts[1]});
		const addresslLjQ1Q6 = await BirdOraclegb8CP2i.parseAddr.call(stringO3DbMgO, {from: accounts[4]});
		const addressKkWMu9O = await BirdOraclegb8CP2i.parseAddr.call(stringLqZpAbh, {from: accounts[2]});
		const stringlBLxQI = await BirdOraclegb8CP2i.substring.call(stringfWrJax, uintQk6oVS, {from: accounts[2]});
		const stringrDoqyT = await BirdOraclegb8CP2i.extractAddress.call(stringwFPTsm4, {from: accounts[0]});
		const uintKQEhTJW = await BirdOraclegb8CP2i.getRatingByAddress.call(address6XgDvE, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRPdq79p = await BirdOracle.new({from: accounts[3]});
		const uintZNov4q4 = BigInt("1787")
		const stringWMpK8D3 = "ca18vlJP27RXynCae1vkBKpQPUQBBLdPUjc6"
		const stringwxT3HwP = "PhTO9bvuotbdJbaHiWeD3Uqd5lXND2IkM6PJ6FL8tAwYYSfWd1xsgcRDGpGsxqnO0X0fwPVtrifGRnSMduDqN3KbzTJ1"
		const stringn8lxGl3 = "pObwUkeKu"
		const addressYn64FdV = "0x0000000000000000000000000000000000000001"
		const stringphFfM6s = await BirdOracleRPdq79p.substring.call(stringWMpK8D3, uintZNov4q4, {from: accounts[0]});
		const uintyeJwE6 = await BirdOracleRPdq79p.getRating.call({from: accounts[0]});
		const 
Ud8SBpl = await BirdOracleRPdq79p.newChainRequest.call(stringn8lxGl3, stringwxT3HwP, {from: accounts[3]});
		const uintgSbnfO = await BirdOracleRPdq79p.getRatingByAddress.call(addressYn64FdV, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejfwKTkH = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintf8AeZcB = BigInt("1709")
		const uintJ6F9j0b = BigInt("81")
		const uintKzPONFd = BigInt("52")
		const stringPbVweom = "6X7Po8AhKoty6gaNgueH2Mf8xiZag0hxUy3R1ZaRBy7pzBfUVvOd8is930m"
		const 
LeTq7zP = await BirdOraclejfwKTkH.updatedChainRequest.call(uintJ6F9j0b, uintf8AeZcB, {from: accounts[4]});
		const uintdZe3087 = await BirdOraclejfwKTkH.getRating.call({from: accounts[1]});
		const stringhMiqL5d = await BirdOraclejfwKTkH.substring.call(stringPbVweom, uintKzPONFd, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const uintrugujV = BigInt("1157")
		const uintEh6Fn0c = BigInt("1056")
		const 
Fz2ESuC = await BirdOracleyhEIxOI.updatedChainRequest.call(uintEh6Fn0c, uintrugujV, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const uintvdTJOou = BigInt("1157")
		const uintd1MsclW = BigInt("1056")
		const uintbCk8jyY = await BirdOracleyhEIxOI.getRating.call({from: accounts[4]});
		const uintxFkGhRG = await BirdOracleyhEIxOI.getRating.call({from: accounts[4]});
		const 
Fz2ESuC = await BirdOracleyhEIxOI.updatedChainRequest.call(uintd1MsclW, uintvdTJOou, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclegb8CP2i = await BirdOracle.new({from: accounts[1]});
		const uint54A0Bm = BigInt("168")
		const stringfWrJax = "NBTtu1UiEPliIJzMJI7or30VCKDqy84SXYozz"
		const addressl0ZB5R = accounts[5]
		const stringlBLxQI = await BirdOraclegb8CP2i.substring.call(stringfWrJax, uint54A0Bm, {from: accounts[2]});
		const uintKQEhTJW = await BirdOraclegb8CP2i.getRatingByAddress.call(addressl0ZB5R, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const uintH8TilAd = BigInt("1318")
		const stringh6GIy9 = "kUgItmut1hBCEmO5cuf7wpUmQfoHTmwBjzC5q7bs2UFc376GSVvCVDNJSwVnsqPnEhQVawh15"
		const uintIuGrXGr = BigInt("1157")
		const uintxPHOIru = BigInt("1056")
		const stringafYF1UK = "qqQFjDDvS5KIEqssVNZVay58QtJS6Pws6QnFg8RGnNC55imY8v3FGlsApVRn3F1P7iH"
		const stringLnpoyQu = await BirdOracleyhEIxOI.substring.call(stringh6GIy9, uintH8TilAd, {from: accounts[4]});
		const 
Fz2ESuC = await BirdOracleyhEIxOI.updatedChainRequest.call(uintxPHOIru, uintIuGrXGr, {from: "0x0000000000000000000000000000000000000001"});
		const addressN1iYuC4 = await BirdOracleyhEIxOI.parseAddr.call(stringafYF1UK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleaonPE1m = await BirdOracle.new({from: accounts[5]});
		const uintHWeb7od = BigInt("1901")
		const stringlpwSDli = "3MyI25cDXi69SxlabhtaD9tSKG"
		const stringWU4Ggfd = "6feuiPlyGkxoejwUkGWOKqnMVnaLSLV3YFaeHnVyBGxwYN1sG1Qcfkj4eNJDz4Rl"
		const stringHv6eoRu = "LUyxAgEPXmSs4UzF5D28DXqvKcZT7FppdG33IybxFKiA6drVPqrWFjtgJKToDJbBxntWudiPqV3sIckRKHLrfPVzVOqX"
		const stringJqgKHGy = "9uHS7pPs2DJkE9MwJXJ87zu3XkU03GTK7Ld1cxC9YReOyFEmK7qMXI8cHOL"
		const stringhEXOhq = "9"
		const stringJFmMsFq = await BirdOracleaonPE1m.substring.call(stringlpwSDli, uintHWeb7od, {from: accounts[1]});
		const stringgChKvq = await BirdOracleaonPE1m.extractAddress.call(stringWU4Ggfd, {from: accounts[4]});
		const uintX57PHs9 = await BirdOracleaonPE1m.getRating.call({from: accounts[0]});
		const addressZQ2zDTv = await BirdOracleaonPE1m.parseAddr.call(stringHv6eoRu, {from: accounts[3]});
		const 
ZPFkTlR = await BirdOracleaonPE1m.newChainRequest.call(stringhEXOhq, stringJqgKHGy, {from: accounts[4]});
		const uintQke4zmp = await BirdOracleaonPE1m.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const uintvtu37OT = BigInt("794")
		const stringC3wBZ5M = "Y5MhKSO2riaitgXb0vFFzNJRM8VaD452Yei4eGJwGVuNPS0ldasg1x9"
		const uintoQD535 = BigInt("1147")
		const uintWmUaliw = BigInt("1056")
		const stringnuSUg7 = await BirdOracleyhEIxOI.substring.call(stringC3wBZ5M, uintvtu37OT, {from: "0x0000000000000000000000000000000000000001"});
		const 
Fz2ESuC = await BirdOracleyhEIxOI.updatedChainRequest.call(uintWmUaliw, uintoQD535, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const uintDM8agTu = BigInt("24")
		const stringECGYxui = "ARCKHbZ2NMOXgyYhvipA"
		const uintAODoL6U = BigInt("1859")
		const uintCC32KWN = BigInt("1877")
		const stringuvMWhRm = "0PlYDY"
		const stringYZuU5iW = await BirdOracleyhEIxOI.substring.call(stringECGYxui, uintDM8agTu, {from: accounts[5]});
		const stringCwdvPEd = await BirdOracleyhEIxOI.substring.call(stringuvMWhRm, uintCC32KWN, uintAODoL6U, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyhEIxOI = await BirdOracle.new({from: accounts[4]});
		const uinty1IbrPz = BigInt("1858")
		const uintcsXSdIi = BigInt("1858")
		const stringuvMWhRm = "0PlYDY"
		const stringwpYksOR = "3EsjL3XOuheSRnlgxBd2XzctujnBFIX"
		const addressaHCPJ6Q = "0x0000000000000000000000000000000000000001"
		const stringCwdvPEd = await BirdOracleyhEIxOI.substring.call(stringuvMWhRm, uintcsXSdIi, uinty1IbrPz, {from: accounts[3]});
		const addressPqMs3h = await BirdOracleyhEIxOI.parseAddr.call(stringwpYksOR, {from: accounts[4]});
		const uintd4stTcA = await BirdOracleyhEIxOI.getRatingByAddress.call(addressaHCPJ6Q, {from: accounts[3]});
	});
})