const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringsN5oOGl = "Q78g516KCrE99oSaCwFPyqwRYSAxJxW2F1yX45a0qEcF5lM34Y1UXCoJQu8YTb8kHlh7UDfRhK8yUnbuiZZVAfJYapu"
		const addressvMGLqO1 = accounts[2]
		const addressuWlmfCg = accounts[0]
		const uintiionEhH = BigInt("346")
		const uintBkKvY5w = BigInt("1261")
		const Liquidity_v8UoO5StX = await Liquidity_v8.new(stringsN5oOGl, addressvMGLqO1, addressuWlmfCg, uintiionEhH, uintBkKvY5w, {from: accounts[0]});
		const addressYbamc8 = accounts[3]
		const uintHLjgPLV = BigInt("1595")
		const addressSRiFpti = await Liquidity_v8UoO5StX.transferOwnership.call(addressYbamc8, {from: accounts[4]});
		const boolcRx8iaV = await Liquidity_v8UoO5StX.stake.call(uintHLjgPLV, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringt6B0iO8 = "0m90rV"
		const addressOsK99Sf = accounts[3]
		const addressFpS4zE2 = accounts[0]
		const uintHgtlXrj = BigInt("854")
		const uint2qF8R2 = BigInt("1633")
		const Liquidity_v8cJxP59x = await Liquidity_v8.new(stringt6B0iO8, addressOsK99Sf, addressFpS4zE2, uintHgtlXrj, uint2qF8R2, {from: accounts[3]});
		const uintJ5pX7zv = BigInt("1449")
		const uintWLxj4TA = BigInt("1773")
		const uintAajszwr = BigInt("1318")
		const boolRHgTf6S = await Liquidity_v8cJxP59x.addReward.call(uintJ5pX7zv, {from: accounts[3]});
		await Liquidity_v8cJxP59x.onlyOwner.call({from: accounts[3]});
		const uint256OVdTAAc = await Liquidity_v8cJxP59x.changeLockDuration.call(uintWLxj4TA, {from: accounts[1]});
		const boolQ79Te7 = await Liquidity_v8cJxP59x.addReward.call(uintAajszwr, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringn2FZOrp = "MyKHnpowxllMPAI17frGpxDNKjh5sC6vwkwsyhysbGCIwl"
		const address5RRyYY = accounts[1]
		const addressRg4gnb = accounts[3]
		const uintfChmNqi = BigInt("810")
		const uintB4UYm7b = BigInt("1891")
		const Liquidity_v8uCB4goy = await Liquidity_v8.new(stringn2FZOrp, address5RRyYY, addressRg4gnb, uintfChmNqi, uintB4UYm7b, {from: accounts[4]});
		const addressW825fK = accounts[1]
		const uintn07Gvgh = BigInt("1869")
		const uint68AWmE = BigInt("1118")
		const uint256Tbsqv9E = await Liquidity_v8uCB4goy.calculate.call(addressW825fK, {from: accounts[4]});
		const boolbTNDh1I = await Liquidity_v8uCB4goy.addReward.call(uintn07Gvgh, {from: accounts[2]});
		const boolEf1Dcgn = await Liquidity_v8uCB4goy.stake.call(uint68AWmE, {from: accounts[2]});
		await Liquidity_v8uCB4goy.onlyOwner.call({from: accounts[0]});
		await Liquidity_v8uCB4goy.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringzTmlfM = "WSxnwY9TJfnK2yVfwOGn"
		const addressiXTTtQI = accounts[1]
		const addressMo0ZJJ = accounts[0]
		const uintf4bHWaU = BigInt("44")
		const uintOeWsDZ = BigInt("2024")
		const Liquidity_v8dLoPO1v = await Liquidity_v8.new(stringzTmlfM, addressiXTTtQI, addressMo0ZJJ, uintf4bHWaU, uintOeWsDZ, {from: accounts[3]});
		const uintllM1ETf = BigInt("107")
		const uintx9ljM2 = BigInt("1800")
		const addressE9zvGOs = "0x0000000000000000000000000000000000000001"
		const addressyRlp2lJ = accounts[3]
		const uint64kirhwt = await Liquidity_v8dLoPO1v.setRate.call(uintllM1ETf, {from: accounts[3]});
		const boolIXlJxFr = await Liquidity_v8dLoPO1v.withdraw.call({from: accounts[4]});
		await Liquidity_v8dLoPO1v.onlyOwner.call({from: accounts[0]});
		const uint64pHlE4MD = await Liquidity_v8dLoPO1v.setRate.call(uintx9ljM2, {from: accounts[1]});
		const uint256IF03aHg = await Liquidity_v8dLoPO1v.calculate.call(addressE9zvGOs, {from: accounts[0]});
		const addressa4sCd7e = await Liquidity_v8dLoPO1v.transferOwnership.call(addressyRlp2lJ, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQGhm7an = "5SspCvWBUUUULyNF3ISlq4R1FMpea0r11n9JCtdeRLECGTn3yWGquxTXu9RVTo4kLWEi7JGc1QjW92wb"
		const addresslWfY4kk = accounts[4]
		const addressO3fle2E = accounts[0]
		const uintqBenXM = BigInt("179")
		const uintcnoPLM6 = BigInt("1990")
		const Liquidity_v8aIZqoOZ = await Liquidity_v8.new(stringQGhm7an, addresslWfY4kk, addressO3fle2E, uintqBenXM, uintcnoPLM6, {from: accounts[5]});
		const addresskrSzrpc = accounts[2]
		const addressojez9oA = accounts[3]
		const boolGzs2Kt = await Liquidity_v8aIZqoOZ.isOwner.call({from: accounts[1]});
		const uint256To8XWgx = await Liquidity_v8aIZqoOZ.calculate.call(addresskrSzrpc, {from: accounts[0]});
		const uint256JDPBljr = await Liquidity_v8aIZqoOZ.calculate.call(addressojez9oA, {from: accounts[1]});
		const booleJgVTBP = await Liquidity_v8aIZqoOZ.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringh2owTZJ = "p6b51sR2FXIv7arWHF6P6pjyZBCZrwWLXR7t45"
		const addresssGdDp5Q = accounts[2]
		const addressssOcGz = accounts[3]
		const uintWFqOVi = BigInt("721")
		const uintuJiHOpD = BigInt("428")
		const Liquidity_v8WP2seY = await Liquidity_v8.new(stringh2owTZJ, addresssGdDp5Q, addressssOcGz, uintWFqOVi, uintuJiHOpD, {from: accounts[3]});
		const addressZmvqd2l = "0x0000000000000000000000000000000000000001"
		const boolHY12LMw = await Liquidity_v8WP2seY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8WP2seY.onlyOwner.call({from: accounts[2]});
		const uint256r4EUVup = await Liquidity_v8WP2seY.calculate.call(addressZmvqd2l, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringzTmlfM = "WSxnwY9TJfnK2yVfwOGn"
		const addressWitvlch = accounts[1]
		const address8dCQpF = accounts[0]
		const uintaUe2yn = BigInt("44")
		const uintukFs1WV = BigInt("2024")
		const Liquidity_v8dLoPO1v = await Liquidity_v8.new(stringzTmlfM, addressWitvlch, address8dCQpF, uintaUe2yn, uintukFs1WV, {from: accounts[3]});
		const uinteMZ5uvR = BigInt("107")
		const addressF0a7wNU = accounts[1]
		const uintTATIdQF = BigInt("1800")
		const addressn2q53je = "0x0000000000000000000000000000000000000001"
		const addressZfPjS5D = accounts[3]
		const uint64kirhwt = await Liquidity_v8dLoPO1v.setRate.call(uinteMZ5uvR, {from: accounts[3]});
		const addressJBSIotE = await Liquidity_v8dLoPO1v.transferOwnership.call(addressF0a7wNU, {from: accounts[3]});
		const boolIXlJxFr = await Liquidity_v8dLoPO1v.withdraw.call({from: accounts[4]});
		await Liquidity_v8dLoPO1v.onlyOwner.call({from: accounts[0]});
		const uint64pHlE4MD = await Liquidity_v8dLoPO1v.setRate.call(uintTATIdQF, {from: accounts[1]});
		const addresswtXMFLk = await Liquidity_v8dLoPO1v.transferOwnership.call(addressn2q53je, {from: "0x0000000000000000000000000000000000000001"});
		const addressa4sCd7e = await Liquidity_v8dLoPO1v.transferOwnership.call(addressZfPjS5D, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringsN5oOGl = "Q78g516KCrE99oSaCwFPyqwRYSAxJxW2F1yX45a0qEcF5lM34Y1UXCoJQu8YTb8kHlh7UDfRhK8yUnbuiZZVAfJYapu"
		const addresscqocNR5 = accounts[2]
		const addressNCeXD5 = accounts[0]
		const uintnILsGoB = BigInt("346")
		const uintgN9xBe0 = BigInt("1261")
		const Liquidity_v8UoO5StX = await Liquidity_v8.new(stringsN5oOGl, addresscqocNR5, addressNCeXD5, uintnILsGoB, uintgN9xBe0, {from: accounts[0]});
		const addressfr4t1L0 = accounts[3]
		const uintkTSg7gS = BigInt("1676")
		const uintLDzjksf = BigInt("1596")
		const 
SDrrryp = await Liquidity_v8UoO5StX.userDeposits.call(addressfr4t1L0, {from: accounts[0]});
		const boolJIZwdxz = await Liquidity_v8UoO5StX.withdraw.call({from: accounts[1]});
		const uint256PiKmRdK = await Liquidity_v8UoO5StX.changeLockDuration.call(uintkTSg7gS, {from: accounts[3]});
		const boolD7KPxWo = await Liquidity_v8UoO5StX.withdraw.call({from: accounts[3]});
		const boolcRx8iaV = await Liquidity_v8UoO5StX.stake.call(uintLDzjksf, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringy5RApHm = "gzJSlfUsuvIkHSgXyUciD81r2sZue2gj5z8pOIrb7sMACSBmU3i56gmy3YYns5oqzn0LbMqo7epbMsCf3b9qM7l5e"
		const addressbgX7The = accounts[1]
		const addresszs2u2Cb = accounts[2]
		const uintwgXEdEj = BigInt("1892")
		const uintP9Ko0mw = BigInt("822")
		const Liquidity_v8MUGygEe = await Liquidity_v8.new(stringy5RApHm, addressbgX7The, addresszs2u2Cb, uintwgXEdEj, uintP9Ko0mw, {from: accounts[5]});
		const addressq2786iq = "0x0000000000000000000000000000000000000001"
		const addressgaHHC90 = accounts[0]
		const uint256tLZnpHE = await Liquidity_v8MUGygEe.calculate.call(addressq2786iq, {from: accounts[3]});
		const addressmmxPpyA = await Liquidity_v8MUGygEe.owner.call({from: accounts[3]});
		const uint256O4nheCN = await Liquidity_v8MUGygEe.calculate.call(addressgaHHC90, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFVzvVMs = "JoexkvxrFSw"
		const addressNPWWKUQ = accounts[4]
		const addressdeI38C1 = accounts[3]
		const uintTWkbteR = BigInt("1142")
		const uintkkcj6ec = BigInt("1689")
		const Liquidity_v8ufRkRgZ = await Liquidity_v8.new(stringFVzvVMs, addressNPWWKUQ, addressdeI38C1, uintTWkbteR, uintkkcj6ec, {from: "0x0000000000000000000000000000000000000001"});
		const uintFO0a8Xp = BigInt("1369")
		const uinttNk7U4 = BigInt("1044")
		const addressDyM8Ju6 = accounts[5]
		const addressnHPQYjC = accounts[3]
		const uintCWJBAOf = BigInt("141")
		const addressIAVrb7D = accounts[2]
		const boolqcHdqjH = await Liquidity_v8ufRkRgZ.addReward.call(uintFO0a8Xp, {from: accounts[2]});
		const boolFYqDv6a = await Liquidity_v8ufRkRgZ.isOwner.call({from: accounts[3]});
		const uint256OF10Gad = await Liquidity_v8ufRkRgZ.changeLockDuration.call(uinttNk7U4, {from: accounts[4]});
		const 
kMfWmws = await Liquidity_v8ufRkRgZ.userDeposits.call(addressDyM8Ju6, {from: accounts[0]});
		const 
IYaYUfS = await Liquidity_v8ufRkRgZ._hasAllowance.call(addressIAVrb7D, uintCWJBAOf, addressnHPQYjC, {from: "0x0000000000000000000000000000000000000001"});
		const boolSy1BC4 = await Liquidity_v8ufRkRgZ.isOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQGhm7an = "5SspCvWBUUUULyNF3ISlq4R1FMpea0r11n9JCtdeRLECGTn3yWGquxTXu9RVTo4kLWEi7JGc1QjW92wb"
		const addressCMKCsL1 = accounts[4]
		const addressIpvBv6 = accounts[0]
		const uintUlSQAYD = BigInt("179")
		const uintmcrI0Gl = BigInt("1990")
		const Liquidity_v8aIZqoOZ = await Liquidity_v8.new(stringQGhm7an, addressCMKCsL1, addressIpvBv6, uintUlSQAYD, uintmcrI0Gl, {from: accounts[5]});
		const uintoFBtBGV = BigInt("988")
		const addressBViF9T = accounts[5]
		const addressLlgMJh7 = accounts[3]
		const uint256efCZDuu = await Liquidity_v8aIZqoOZ.changeLockDuration.call(uintoFBtBGV, {from: accounts[5]});
		const boolGzs2Kt = await Liquidity_v8aIZqoOZ.isOwner.call({from: accounts[1]});
		await Liquidity_v8aIZqoOZ.onlyOwner.call({from: accounts[0]});
		const 
FjLFWdy = await Liquidity_v8aIZqoOZ.userDeposits.call(addressBViF9T, {from: accounts[3]});
		const uint256JDPBljr = await Liquidity_v8aIZqoOZ.calculate.call(addressLlgMJh7, {from: accounts[1]});
		const booleJgVTBP = await Liquidity_v8aIZqoOZ.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQGhm7an = "5SspCvWBUUUULyNF3ISlq4R1FMpea0r11n9JCtdeRLECGTn3yWGquxTXu9RVTo4kLWEi7JGc1QjW92wb"
		const addressg8DC25W = accounts[4]
		const addressQl7SwaQ = accounts[0]
		const uintwofv9AJ = BigInt("179")
		const uintXUSfbNC = BigInt("1990")
		const Liquidity_v8aIZqoOZ = await Liquidity_v8.new(stringQGhm7an, addressg8DC25W, addressQl7SwaQ, uintwofv9AJ, uintXUSfbNC, {from: accounts[5]});
		const addressLQUgKXZ = accounts[4]
		await Liquidity_v8aIZqoOZ.renounceOwnership.call({from: accounts[5]});
		await Liquidity_v8aIZqoOZ.renounceOwnership.call({from: accounts[1]});
		const uint256JDPBljr = await Liquidity_v8aIZqoOZ.calculate.call(addressLQUgKXZ, {from: accounts[1]});
	});
})