const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleJ5EVIg = await BirdOracle.new({from: accounts[5]});
		const stringUtNMmS9 = "YVLhLKCUn3hRKbu29zkRNZAqm3xgdqap2EEdonyb"
		const stringQ2EvAZJ = "7TI4OT6Q073JP7GeXADlmIRsrOX8vhTNFbVeJxcYOgBYcUEz7C7zu1pG2Ci4abcIQrPDVWMeOIpbY"
		const stringlxCeZE2 = await BirdOracleJ5EVIg.extractAddress.call(stringUtNMmS9, {from: accounts[4]});
		const uintAlRTdPR = await BirdOracleJ5EVIg.getRatingByAddressString.call(stringQ2EvAZJ, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleZTcTQyP = await BirdOracle.new({from: accounts[3]});
		const addresschL6X3Y = accounts[4]
		const uintk8Y564u = BigInt("422")
		const uintrlmTgS2 = BigInt("916")
		const stringy25oA8R = "dEVkkUJRjfIzU6XDrQi1i"
		const addressVDpi2ar = accounts[0]
		const uintlu7iuBQ = BigInt("481")
		const uintbpuKzE = BigInt("1953")
		const stringuka5ldK = "5LweaeR"
		const uintg8ig11H = await BirdOracleZTcTQyP.getRatingByAddress.call(addresschL6X3Y, {from: accounts[4]});
		const stringx8LLrhY = await BirdOracleZTcTQyP.substring.call(stringy25oA8R, uintrlmTgS2, uintk8Y564u, {from: accounts[1]});
		const uintllsomvq = await BirdOracleZTcTQyP.getRatingByAddress.call(addressVDpi2ar, {from: accounts[4]});
		const 
UOjeilH = await BirdOracleZTcTQyP.updatedChainRequest.call(uintbpuKzE, uintlu7iuBQ, {from: accounts[1]});
		const addressSSvTeC = await BirdOracleZTcTQyP.parseAddr.call(stringuka5ldK, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracley1DykJa = await BirdOracle.new({from: accounts[2]});
		const addressr9bLC1t = accounts[2]
		const string2beZ1F = "3UlyFrNMJ3De1eRyI3GyFR7"
		const stringAL2JuyY = "YtWrA45cMXPYnEcbd4SZ59EpazDOC8x"
		const uintD9eIsRi = BigInt("566")
		const stringpIK0nfk = "zI9G8ACtB6uylkptNzJwJ7xj0fsibeHK1sIJTHnrX5bbfOm2t"
		const uintF7KrQz = await BirdOracley1DykJa.getRatingByAddress.call(addressr9bLC1t, {from: accounts[0]});
		const addressiCtIVaC = await BirdOracley1DykJa.parseAddr.call(string2beZ1F, {from: accounts[1]});
		const uintFGRJORl = await BirdOracley1DykJa.getRatingByAddressString.call(stringAL2JuyY, {from: accounts[0]});
		const stringn8BfJnL = await BirdOracley1DykJa.substring.call(stringpIK0nfk, uintD9eIsRi, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclex02mXM9 = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyVGFKt = BigInt("1932")
		const stringtPOZ6Es = "TqlKXHH5PVe"
		const stringxnOyPUX = "FXVHq8LQgOBDISE1bJzMCwyYpiEGXEwztuEPzQENjHkr1VrSE95aGamLpqWEQg"
		const stringhrmsK95 = await BirdOraclex02mXM9.substring.call(stringtPOZ6Es, uintyVGFKt, {from: accounts[2]});
		const uintxnrANAC = await BirdOraclex02mXM9.getRating.call({from: accounts[4]});
		const addressaTFCZ5L = await BirdOraclex02mXM9.parseAddr.call(stringxnOyPUX, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehNp2M1i = await BirdOracle.new({from: accounts[5]});
		const uintnL0fKgE = BigInt("417")
		const uintHU4Z5OI = BigInt("1202")
		const uintPPtt2xs = BigInt("1683")
		const stringhs1Hs3s = "40JJ9CFDbOF36MAHoa3t7eH5x7U3SpwW99KwYZ4c2EkBDcMVaK2LVHwjLv3wpBT5FNdYOQ7lgFomizOYVY4c9sgyK6u1p"
		const stringK8x2Xer = "y9x695yhzJLUOVLUJO9QN59uAlTGkbcfXJqv"
		const uintrgNbKUl = BigInt("63")
		const uinte6fB4o5 = BigInt("1958")
		const string181prK = "sIxFcl2wjfBiHP1yGhlwes0F2y1cF5TLK79L5AonZyeEsJ5"
		const 
W8Mk0pz = await BirdOraclehNp2M1i.updatedChainRequest.call(uintHU4Z5OI, uintnL0fKgE, {from: "0x0000000000000000000000000000000000000001"});
		const stringMy78dI4 = await BirdOraclehNp2M1i.substring.call(stringhs1Hs3s, uintPPtt2xs, {from: accounts[3]});
		const addressm8XdRq5 = await BirdOraclehNp2M1i.parseAddr.call(stringK8x2Xer, {from: accounts[0]});
		const 
zhODS1O = await BirdOraclehNp2M1i.updatedChainRequest.call(uinte6fB4o5, uintrgNbKUl, {from: accounts[4]});
		const uintyeUrEz3 = await BirdOraclehNp2M1i.getRatingByAddressString.call(string181prK, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleocNsTwm = await BirdOracle.new({from: accounts[1]});
		const stringhJ4yiiX = "HXE6GkSz"
		const uintGOtDGxP = await BirdOracleocNsTwm.getRating.call({from: accounts[0]});
		const stringjuUCamn = await BirdOracleocNsTwm.extractAddress.call(stringhJ4yiiX, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEBQrcL0 = await BirdOracle.new({from: accounts[4]});
		const uintim97Z7U = BigInt("1951")
		const uinteXZ0dsq = BigInt("1486")
		const stringoN6ilAS = "NBP1kD"
		const uintNopFkNs = BigInt("1306")
		const uintCZr7rMO = BigInt("1656")
		const stringrOIgKUH = "NMvnlheFqxLZpvFMqCrtF"
		const uintuTS9ieW = BigInt("236")
		const uint8viZrf = BigInt("1431")
		const uintBEzW8fk = await BirdOracleEBQrcL0.getRating.call({from: accounts[3]});
		const stringQ7oAe28 = await BirdOracleEBQrcL0.substring.call(stringoN6ilAS, uinteXZ0dsq, uintim97Z7U, {from: "0x0000000000000000000000000000000000000001"});
		const stringsAPmn95 = await BirdOracleEBQrcL0.substring.call(stringrOIgKUH, uintCZr7rMO, uintNopFkNs, {from: accounts[4]});
		const 
M31aui5 = await BirdOracleEBQrcL0.updatedChainRequest.call(uint8viZrf, uintuTS9ieW, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleocNsTwm = await BirdOracle.new({from: accounts[1]});
		const stringMDo1gMU = "eClVmxzEQdrhM8zO8pYl46YX4gfD"
		const stringL7pce4 = "ot5Usq7DAPQWUIXAGmv7iQnQbYSvKeIQ2NnWd16D3BYUwGqAuwDnG2C9G7g0KBHR2t7tZaV6avh"
		const stringhJ4yiiX = "HXE6GkSz"
		const uintGOtDGxP = await BirdOracleocNsTwm.getRating.call({from: accounts[0]});
		const uintz7ha5RN = await BirdOracleocNsTwm.getRating.call({from: accounts[0]});
		const 
i71qiZO = await BirdOracleocNsTwm.newChainRequest.call(stringL7pce4, stringMDo1gMU, {from: accounts[1]});
		const stringjuUCamn = await BirdOracleocNsTwm.extractAddress.call(stringhJ4yiiX, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclelw9XTNx = await BirdOracle.new({from: accounts[3]});
		const uintiwXLaJN = BigInt("1013")
		const stringKEndZ13 = "RcALJaUXQeDSz77Ui332AQqkpN56llr"
		const uintYtXcGAe = BigInt("1730")
		const stringZxDYTeX = "lu8ZsJsDibfNmhdCTqha"
		const stringScXQNXn = "d1fmkGxKrNjdMiT0gtRVchdSZPTptGIH3R7aecjVsrJxUlX3focpNgxcA5rBTuZcmXb53I9rcl"
		const stringi3HsCT5 = "2adR29pMJpalKyR"
		const stringyXfOCLU = await BirdOraclelw9XTNx.substring.call(stringKEndZ13, uintiwXLaJN, {from: accounts[0]});
		const stringVcd7TsR = await BirdOraclelw9XTNx.substring.call(stringZxDYTeX, uintYtXcGAe, {from: accounts[5]});
		const uintNgnYw5v = await BirdOraclelw9XTNx.getRating.call({from: accounts[3]});
		const stringDPKwHKB = await BirdOraclelw9XTNx.extractAddress.call(stringScXQNXn, {from: accounts[2]});
		const stringBvXgYtT = await BirdOraclelw9XTNx.extractAddress.call(stringi3HsCT5, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqhHJhmH = await BirdOracle.new({from: accounts[0]});
		const uintNXbonxR = BigInt("765")
		const stringExaI6ok = "FG2MzlUXl6nA"
		const stringfWdVsGG = "zPqCk69HwtjezwB8LWKEO2B3djSGaqiBztZHg9aenzcVJrM0DWDt3nighBmD8atCPTz1fp"
		const uintQH5OJm5 = await BirdOracleqhHJhmH.getRating.call({from: accounts[3]});
		const stringV0s0YFd = await BirdOracleqhHJhmH.substring.call(stringExaI6ok, uintNXbonxR, {from: accounts[3]});
		const addressDc15pCi = await BirdOracleqhHJhmH.parseAddr.call(stringfWdVsGG, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJ5EVIg = await BirdOracle.new({from: accounts[5]});
		const stringQ2EvAZJ = "7TI4OT6Q073JP7GeXADlmIRsrOX8vhTNFbVeJxcYOgBYcUEz7C7zu1pG2Ci4abcIQrPDVWMeOIpbY"
		const uintAlRTdPR = await BirdOracleJ5EVIg.getRatingByAddressString.call(stringQ2EvAZJ, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleB6N3cvT = await BirdOracle.new({from: accounts[2]});
		const addressq0gdby7 = accounts[0]
		const uintkAlYbfr = BigInt("1831")
		const stringAJufMpX = "MvSUVYVfCvDmqsxoHkyFRjy6a7ns5bdCnK7mgSSwNgLdMEaWavFXx70hye71iGBcUli7VTLNIc2sUlaVHw944j6G65dj"
		const uintizuTI87 = BigInt("451")
		const uintobIQKFi = BigInt("1034")
		const stringM1iqrVu = "eQC98Ou7Ym9H7BR4ljjpk7KAri3KrR9189sK4GqGiriC0EJsy"
		const uintpx1XuZY = BigInt("582")
		const stringhMQ8SD = "st"
		const string1FkRNp = "MgD8oHGuv2QatyaW6wqjn6scuw4SPBxGPtisJfm33Ud5nD6PdiUwUZLA"
		const stringfj9N9ve = "R7N7TO9cAYtEssQvIJHmmRjslNpDfH63B"
		const uintqnGRXgu = await BirdOracleB6N3cvT.getRatingByAddress.call(addressq0gdby7, {from: accounts[0]});
		const stringMgqUeVY = await BirdOracleB6N3cvT.substring.call(stringAJufMpX, uintkAlYbfr, {from: accounts[1]});
		const stringx5j3wH = await BirdOracleB6N3cvT.substring.call(stringM1iqrVu, uintobIQKFi, uintizuTI87, {from: accounts[0]});
		const stringX0CihdI = await BirdOracleB6N3cvT.substring.call(stringhMQ8SD, uintpx1XuZY, {from: accounts[1]});
		const 
wJq9WDD = await BirdOracleB6N3cvT.newChainRequest.call(stringfj9N9ve, string1FkRNp, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleMULZJyK = await BirdOracle.new({from: accounts[0]});
		const stringTLVVa5p = "yIJQtt0tQG9voori9QU14bDTUyDhW1ITGzY24V33XaM6nIDDphznpRTfqB8ldkglnE7x5KjcD2V6lUw1zZNkkTgG2"
		const uintuBjI06u = BigInt("242")
		const stringnuYQQm = "i6bZh8OkJ16GclshjuWSJYzMp3owdrqPJq1JyyVsSFWNO2pu7hvp1vsZy1ntQfw3W3hDT5iwNDx7DKpOR65"
		const uintDHhKhSJ = await BirdOracleMULZJyK.getRating.call({from: accounts[3]});
		const addressV12fRxC = await BirdOracleMULZJyK.parseAddr.call(stringTLVVa5p, {from: accounts[4]});
		const stringFxYQelg = await BirdOracleMULZJyK.substring.call(stringnuYQQm, uintuBjI06u, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJ5EVIg = await BirdOracle.new({from: accounts[5]});
		const uintjFwy6L6 = BigInt("404")
		const stringeQgyWy2 = "fANq0xGEchh3MCoY42avxfde8rCJYlzcmojvGSQro8jvDr"
		const stringUtNMmS9 = "YVLhLKCUn3hRKbu29zkRNZAkm3xgdqap2EEdonyb"
		const stringIy6TRVL = await BirdOracleJ5EVIg.substring.call(stringeQgyWy2, uintjFwy6L6, {from: accounts[5]});
		const stringlxCeZE2 = await BirdOracleJ5EVIg.extractAddress.call(stringUtNMmS9, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracletkblx63 = await BirdOracle.new({from: accounts[5]});
		const uintct5k726 = BigInt("464")
		const stringoAhKiv = "M8iNCEWcYzR8Fj8D5NPUt6tW17AQMVJycSng1qrQN1adseXeg98FTsf"
		const uintlHWAcdV = BigInt("99")
		const uintqDwptoW = BigInt("1506")
		const stringQUxknf = "hR31MPp6mFFM38W1nLV6h7xtel"
		const uintgftYzox = BigInt("1614")
		const uintnfNEo4q = BigInt("1182")
		const stringg8OSscc = "d8KlcnTO5WqVqDB0C7iKKcPghoLKhhMPDOVriXm17"
		const uintiBmkPt = BigInt("1845")
		const uintKftSnxk = BigInt("2040")
		const stringeWeGwZt = await BirdOracletkblx63.substring.call(stringoAhKiv, uintct5k726, {from: accounts[4]});
		const stringxw3kipq = await BirdOracletkblx63.substring.call(stringQUxknf, uintqDwptoW, uintlHWAcdV, {from: accounts[0]});
		const stringuMedwy = await BirdOracletkblx63.substring.call(stringg8OSscc, uintnfNEo4q, uintgftYzox, {from: accounts[1]});
		const 
DFRv1G = await BirdOracletkblx63.updatedChainRequest.call(uintKftSnxk, uintiBmkPt, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclef7FPNzN = await BirdOracle.new({from: accounts[4]});
		const uintmGToWh1 = BigInt("713")
		const stringVcLcwsh = "xmw"
		const uintMPNiQXY = BigInt("1765")
		const uintaDB6Zp1 = BigInt("1209")
		const uinth191bf3 = await BirdOraclef7FPNzN.getRating.call({from: accounts[3]});
		const stringGW3GE4U = await BirdOraclef7FPNzN.substring.call(stringVcLcwsh, uintmGToWh1, {from: "0x0000000000000000000000000000000000000001"});
		const 
oM5egKD = await BirdOraclef7FPNzN.updatedChainRequest.call(uintaDB6Zp1, uintMPNiQXY, {from: accounts[1]});
		const uintQu8lFnr = await BirdOraclef7FPNzN.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclentpq9Cs = await BirdOracle.new({from: accounts[0]});
		const uintdePG0B = BigInt("1358")
		const uintlDsNWm0 = BigInt("1358")
		const stringUDiU0Kq = "YOGhLVpZRh4Ms2YUV8HzVW9nXjkLWbbrLr5yPOtTn5FTY2FJSLULVBSKgi27wzGkLmc"
		const stringn7NDRzE = await BirdOraclentpq9Cs.substring.call(stringUDiU0Kq, uintlDsNWm0, uintdePG0B, {from: "0x0000000000000000000000000000000000000001"});
	});
})