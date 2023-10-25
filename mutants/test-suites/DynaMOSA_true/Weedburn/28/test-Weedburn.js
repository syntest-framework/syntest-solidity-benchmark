const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnG03GLJt = await Weedburn.new({from: accounts[4]});
		const uintn0neCFs = BigInt("503")
		const addressIDdlyGZ = accounts[2]
		const uintr3yNaGd = BigInt("1377")
		const addressTqNT59 = accounts[1]
		const uintdWS9SJB = BigInt("722")
		const addressaq0uAUK = accounts[1]
//		const addresszvY9qXD = await WeedburnG03GLJt.burnFrom.call(addressIDdlyGZ, uintn0neCFs, {from: accounts[3]});
//		await WeedburnG03GLJt.enableLimitMode.call({from: accounts[1]});
//		const addressAI2qTz = await WeedburnG03GLJt.burnFrom.call(addressTqNT59, uintr3yNaGd, {from: accounts[2]});
//		const boolKIsljip = await WeedburnG03GLJt.transfer.call(addressaq0uAUK, uintdWS9SJB, {from: accounts[5]});

		await expect(WeedburnG03GLJt.burnFrom.call(addressIDdlyGZ, uintn0neCFs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringNowRbJj = "b2JBUDIKhlyzL73GS7fb2QgABWqYxHYoB7"
		const stringZiZxU71 = "KjKNQHFyCZtrbx6LPBoHMhTKFVPnBW6W5Y8qvhJUljeURgzW9wa6DQYcPrbtb497rpZ3mIc9SEri7KrKc712OJ4u4SRJq"
		const uintRkdrlK1 = BigInt("209")
		const Weedburns9NMboy = await Weedburn.new(stringNowRbJj, stringZiZxU71, uintRkdrlK1, {from: accounts[1]});
		const uintdZLTxNM = BigInt("1637")
		const addresshBGqNgq = accounts[3]
		const addressmmChLmd = accounts[4]
		const addressv4wOzec = "0x0000000000000000000000000000000000000001"
		await Weedburns9NMboy.enableDevMode.call({from: accounts[4]});
		const uint8fnj5Uq8 = await Weedburns9NMboy.decimals.call({from: accounts[2]});
		const boolcZhY360 = await Weedburns9NMboy.increaseAllowance.call(addresshBGqNgq, uintdZLTxNM, {from: accounts[4]});
		const uint256W4bels = await Weedburns9NMboy.allowance.call(addressv4wOzec, addressmmChLmd, {from: accounts[5]});
		await Weedburns9NMboy.disableDevMode.call({from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const Weedburnz7uTQ3F = await Weedburn.new({from: accounts[0]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]});
//		const stringIt9SUWM = await Weedburnz7uTQ3F.name.call({from: accounts[3]});

		await expect(Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnFxiUXCy = await Weedburn.new({from: accounts[2]});
		const uintPiL9Aop = BigInt("202")
		const addressN6qpG5X = accounts[0]
		const uintBiv4sJb = BigInt("1216")
		const addressgsPjhbp = accounts[5]
		const addressmFLdKNZ = accounts[2]
		const uintlO5HC7W = BigInt("1008")
		const addressWpuphbx = accounts[4]
		const addressWGmaRv = "0x0000000000000000000000000000000000000001"
		const uintbYAVemD = BigInt("268")
		const addressn559QYC = accounts[1]
		const addresswW1LPZI = accounts[2]
//		const boolQQIcUPG = await WeedburnFxiUXCy.decreaseAllowance.call(addressN6qpG5X, uintPiL9Aop, {from: accounts[0]});
//		const boolK7stgaB = await WeedburnFxiUXCy.transferFrom.call(addressmFLdKNZ, addressgsPjhbp, uintBiv4sJb, {from: accounts[5]});
//		const boolD98jENF = await WeedburnFxiUXCy.increaseAllowance.call(addressWpuphbx, uintlO5HC7W, {from: accounts[2]});
//		const uint256ejbZuF = await WeedburnFxiUXCy.balanceOf.call(addressWGmaRv, {from: accounts[2]});
//		const uint8YtePLHF = await WeedburnFxiUXCy.decimals.call({from: accounts[4]});
//		const boolikuSYBK = await WeedburnFxiUXCy.transferFrom.call(addresswW1LPZI, addressn559QYC, uintbYAVemD, {from: accounts[1]});

		await expect(WeedburnFxiUXCy.decreaseAllowance.call(addressN6qpG5X, uintPiL9Aop, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDzZ86rV = await Weedburn.new({from: accounts[1]});
		const uintTwQMcPf = BigInt("1322")
		const uintLpoWyM2 = BigInt("1136")
		const addressRpLLXEG = accounts[2]
		const uinteTfF7G = BigInt("1013")
		const stringrRPycZ = await WeedburnDzZ86rV.name.call({from: accounts[0]});
//		const uint256zqUhJhI = await WeedburnDzZ86rV.burn.call(uintTwQMcPf, {from: accounts[3]});
//		const boolwGXpYot = await WeedburnDzZ86rV.decreaseAllowance.call(addressRpLLXEG, uintLpoWyM2, {from: accounts[4]});
//		const uint256PCxdVYG = await WeedburnDzZ86rV.burn.call(uinteTfF7G, {from: accounts[1]});

		assert.equal(stringrRPycZ, "t.me/burnweed1")
		await expect(WeedburnDzZ86rV.burn.call(uintTwQMcPf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRwtWjYO = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintE32YWFe = BigInt("701")
		const addresstjbtKSZ = accounts[5]
		const uintjbSIPuE = BigInt("1551")
		const addresswXSVSl = accounts[1]
		const uintALDedQy = BigInt("1622")
		const addressPy8pTwL = accounts[3]
		const uintdhk08pc = BigInt("1274")
		const addressQIvxfmN = await WeedburnRwtWjYO.burnFrom.call(addresstjbtKSZ, uintE32YWFe, {from: accounts[0]});
		const boolt9U3Thg = await WeedburnRwtWjYO.transfer.call(addresswXSVSl, uintjbSIPuE, {from: accounts[4]});
		const bool5GXSdD = await WeedburnRwtWjYO.transfer.call(addressPy8pTwL, uintALDedQy, {from: accounts[3]});
		const uint256lBatBVD = await WeedburnRwtWjYO.burn.call(uintdhk08pc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const Weedburnm8agQuO = await Weedburn.new({from: accounts[1]});
		const uintwhbyplv = BigInt("485")
		const addressDWuOO8f = accounts[0]
		const uintRb2cCf0 = BigInt("934")
		const addressUnl90XL = accounts[1]
		const uintKZezjS1 = BigInt("353")
		const addressyoIkGCi = accounts[2]
		const stringJsj3ihI = await Weedburnm8agQuO.symbol.call({from: accounts[1]});
		const boolRQ1u7bb = await Weedburnm8agQuO.increaseAllowance.call(addressDWuOO8f, uintwhbyplv, {from: "0x0000000000000000000000000000000000000001"});
		const boollPqEt7F = await Weedburnm8agQuO.increaseAllowance.call(addressUnl90XL, uintRb2cCf0, {from: accounts[1]});
//		await Weedburnm8agQuO.disableDevMode.call({from: accounts[4]});
//		const boolqO9p5hz = await Weedburnm8agQuO.decreaseAllowance.call(addressyoIkGCi, uintKZezjS1, {from: accounts[0]});
//		await Weedburnm8agQuO.disableLimitMode.call({from: accounts[2]});

		assert.equal(boolRQ1u7bb, true)
		assert.equal(boollPqEt7F, true)
		assert.equal(stringJsj3ihI, "Weedburn")
		await expect(Weedburnm8agQuO.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnz7uTQ3F = await Weedburn.new({from: accounts[0]});
		const uintiJQZRSp = BigInt("1654")
		const addressRIvF0mn = accounts[3]
//		const boolx6JMrkW = await Weedburnz7uTQ3F.transfer.call(addressRIvF0mn, uintiJQZRSp, {from: accounts[5]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]});

		await expect(Weedburnz7uTQ3F.transfer.call(addressRIvF0mn, uintiJQZRSp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnz7uTQ3F = await Weedburn.new({from: accounts[0]});
		const addressfeBV72s = accounts[4]
		const uint256FDd22Iz = await Weedburnz7uTQ3F.balanceOf.call(addressfeBV72s, {from: accounts[2]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]});
//		const uint8Q43w8tA = await Weedburnz7uTQ3F.decimals.call({from: accounts[1]});

		assert.equal(uint256FDd22Iz, BigInt("0"))
		await expect(Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDzZ86rV = await Weedburn.new({from: accounts[1]});
		const uintm0Pav4S = BigInt("1885")
		const addressz3McmRy = accounts[2]
		const uintaJQiUiv = BigInt("1339")
		const uintksHOVAI = BigInt("1136")
		const addressqOrIMlX = accounts[2]
		const uintyZeKMmZ = BigInt("312")
//		await WeedburnDzZ86rV.enableLimitMode.call({from: accounts[4]});
//		const stringrRPycZ = await WeedburnDzZ86rV.name.call({from: accounts[0]});
//		const addressUSlkxQr = await WeedburnDzZ86rV.burnFrom.call(addressz3McmRy, uintm0Pav4S, {from: accounts[3]});
//		const uint256zqUhJhI = await WeedburnDzZ86rV.burn.call(uintaJQiUiv, {from: accounts[3]});
//		const boolwGXpYot = await WeedburnDzZ86rV.decreaseAllowance.call(addressqOrIMlX, uintksHOVAI, {from: accounts[4]});
//		await WeedburnDzZ86rV.enableDevMode.call({from: accounts[4]});
//		const uint256PCxdVYG = await WeedburnDzZ86rV.burn.call(uintyZeKMmZ, {from: accounts[1]});
//		const uint256sFwUXgO = await WeedburnDzZ86rV.totalSupply.call({from: accounts[0]});

		await expect(WeedburnDzZ86rV.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnz7uTQ3F = await Weedburn.new({from: accounts[0]});
		const uint420arW = BigInt("1654")
		const addressN60YF51 = accounts[4]
		const uintRDMGI0Z = BigInt("491")
//		await Weedburnz7uTQ3F.enableDevMode.call({from: accounts[3]});
//		const boolx6JMrkW = await Weedburnz7uTQ3F.transfer.call(addressN60YF51, uint420arW, {from: accounts[5]});
//		const stringN3wq1Mt = await Weedburnz7uTQ3F.symbol.call({from: accounts[4]});
//		await Weedburnz7uTQ3F.enableLimitMode.call({from: accounts[5]});
//		const uint256DPqMgzy = await Weedburnz7uTQ3F.burn.call(uintRDMGI0Z, {from: accounts[0]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]});

		await expect(Weedburnz7uTQ3F.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDzZ86rV = await Weedburn.new({from: accounts[1]});
		const uintxO9g9Vn = BigInt("1305")
		const uintYheEqMv = BigInt("933")
		const uintEL4WnPM = BigInt("1136")
		const addressBLu75K = accounts[2]
		const uintsrPB7Ed = BigInt("168")
		const addressuRBw6gN = accounts[1]
		const uinteDlduAb = BigInt("1046")
//		await WeedburnDzZ86rV.disableDevMode.call({from: accounts[1]});
//		const stringrRPycZ = await WeedburnDzZ86rV.name.call({from: accounts[0]});
//		await WeedburnDzZ86rV.disableLimitMode.call({from: accounts[3]});
//		const uint256zqUhJhI = await WeedburnDzZ86rV.burn.call(uintxO9g9Vn, {from: accounts[3]});
//		await WeedburnDzZ86rV.enableDevMode.call({from: accounts[5]});
//		const stringCAaqK1b = await WeedburnDzZ86rV.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256onP83UX = await WeedburnDzZ86rV.burn.call(uintYheEqMv, {from: accounts[1]});
//		const boolwGXpYot = await WeedburnDzZ86rV.decreaseAllowance.call(addressBLu75K, uintEL4WnPM, {from: accounts[4]});
//		const booll0j9prD = await WeedburnDzZ86rV.decreaseAllowance.call(addressuRBw6gN, uintsrPB7Ed, {from: accounts[2]});
//		const uint256PCxdVYG = await WeedburnDzZ86rV.burn.call(uinteDlduAb, {from: accounts[1]});
//		await WeedburnDzZ86rV.enableDevMode.call({from: accounts[4]});

		await expect(WeedburnDzZ86rV.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDzZ86rV = await Weedburn.new({from: accounts[1]});
		const addressFWEOzv9 = accounts[1]
		const addressmXvkUo8 = accounts[5]
		const uintI4lpqXg = BigInt("1305")
		const uintyvx3dbU = BigInt("1136")
		const addressWwFpCeT = accounts[2]
		const uintD1yAULs = BigInt("168")
		const addressLj7lCiz = accounts[1]
		const uintHFifxR4 = BigInt("1013")
//		await WeedburnDzZ86rV.disableDevMode.call({from: accounts[1]});
//		const stringrRPycZ = await WeedburnDzZ86rV.name.call({from: accounts[0]});
//		const uint256CdT18RE = await WeedburnDzZ86rV.allowance.call(addressmXvkUo8, addressFWEOzv9, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zqUhJhI = await WeedburnDzZ86rV.burn.call(uintI4lpqXg, {from: accounts[3]});
//		const stringCAaqK1b = await WeedburnDzZ86rV.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolwGXpYot = await WeedburnDzZ86rV.decreaseAllowance.call(addressWwFpCeT, uintyvx3dbU, {from: accounts[4]});
//		const booll0j9prD = await WeedburnDzZ86rV.decreaseAllowance.call(addressLj7lCiz, uintD1yAULs, {from: accounts[2]});
//		const uint256PCxdVYG = await WeedburnDzZ86rV.burn.call(uintHFifxR4, {from: accounts[1]});

		await expect(WeedburnDzZ86rV.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnz7uTQ3F = await Weedburn.new({from: accounts[0]});
		const uint8Fo0TQxx = await Weedburnz7uTQ3F.decimals.call({from: accounts[1]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]});

		assert.equal(uint8Fo0TQxx, BigInt("18"))
		await expect(Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnz7uTQ3F = await Weedburn.new({from: accounts[0]});
		const uintMVnqCQL = BigInt("491")
		const addressw0d2mjU = accounts[5]
		const addressGS86jix = accounts[4]
		const uintvNRpPZI = BigInt("491")
		const uintbA97kaZ = BigInt("1183")
		const addresssv7hyfC = accounts[1]
//		const boolkBRCgg7 = await Weedburnz7uTQ3F.transferFrom.call(addressGS86jix, addressw0d2mjU, uintMVnqCQL, {from: accounts[1]});
//		await Weedburnz7uTQ3F.enableLimitMode.call({from: accounts[5]});
//		const uint8K3L1qZx = await Weedburnz7uTQ3F.decimals.call({from: accounts[3]});
//		const uint256DPqMgzy = await Weedburnz7uTQ3F.burn.call(uintvNRpPZI, {from: accounts[0]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[4]});
//		const addresseEs3RQ7 = await Weedburnz7uTQ3F.burnFrom.call(addresssv7hyfC, uintbA97kaZ, {from: accounts[1]});
//		await Weedburnz7uTQ3F.enableLimitMode.call({from: accounts[3]});
//		await Weedburnz7uTQ3F.disableDevMode.call({from: accounts[2]});

		await expect(Weedburnz7uTQ3F.transferFrom.call(addressGS86jix, addressw0d2mjU, uintMVnqCQL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG03GLJt = await Weedburn.new({from: accounts[4]});
		const addressnuGMKvk = accounts[2]
		const addressaNIJQtw = accounts[2]
		const uinta1TgBq5 = BigInt("722")
		const addressePfvLz4 = accounts[1]
		const uint256heu8sbf = await WeedburnG03GLJt.allowance.call(addressaNIJQtw, addressnuGMKvk, {from: accounts[2]});
		const uint256xnxKuWj = await WeedburnG03GLJt.totalSupply.call({from: accounts[4]});
//		const boolKIsljip = await WeedburnG03GLJt.transfer.call(addressePfvLz4, uinta1TgBq5, {from: accounts[5]});

		assert.equal(uint256heu8sbf, BigInt("0"))
		assert.equal(uint256xnxKuWj, BigInt("100000000000000000000000"))
		await expect(WeedburnG03GLJt.transfer.call(addressePfvLz4, uinta1TgBq5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG03GLJt = await Weedburn.new({from: accounts[4]});
		const uintLjvvKaR = BigInt("45")
		const addressE7oniYg = accounts[3]
		const uintHYA0FcD = BigInt("503")
		const addressUb2u7i9 = accounts[2]
		const boolrhbqgmL = await WeedburnG03GLJt.approve.call(addressE7oniYg, uintLjvvKaR, {from: "0x0000000000000000000000000000000000000001"});
//		const addresszvY9qXD = await WeedburnG03GLJt.burnFrom.call(addressUb2u7i9, uintHYA0FcD, {from: accounts[3]});

		assert.equal(boolrhbqgmL, true)
		await expect(WeedburnG03GLJt.burnFrom.call(addressUb2u7i9, uintHYA0FcD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGrXt65m = await Weedburn.new({from: accounts[1]});
		const uintdqYzyBi = BigInt("1567")
		const addressAP8m283 = accounts[4]
		const addresszuiaMs0 = accounts[1]
		const addressJTfsyCM = accounts[1]
		const addressBxQQzb = accounts[4]
		const uintpNCiDIc = BigInt("77")
		const addressrXXOcNS = accounts[0]
		const addressmgujBvw = "0x0000000000000000000000000000000000000001"
		const address2yNyYe = accounts[2]
		const addressfP8Pdkw = accounts[4]
//		const boolK4XJpDe = await WeedburnGrXt65m.transferFrom.call(addresszuiaMs0, addressAP8m283, uintdqYzyBi, {from: accounts[2]});
//		const uint256gXLDYTQ = await WeedburnGrXt65m.allowance.call(addressBxQQzb, addressJTfsyCM, {from: accounts[3]});
//		const boolq4UpXst = await WeedburnGrXt65m.decreaseAllowance.call(addressrXXOcNS, uintpNCiDIc, {from: accounts[1]});
//		await WeedburnGrXt65m.enableDevMode.call({from: accounts[0]});
//		const uint256J7hORGo = await WeedburnGrXt65m.balanceOf.call(addressmgujBvw, {from: accounts[5]});
//		const uint256PYtvhlG = await WeedburnGrXt65m.allowance.call(addressfP8Pdkw, address2yNyYe, {from: accounts[1]});

		await expect(WeedburnGrXt65m.transferFrom.call(addresszuiaMs0, addressAP8m283, uintdqYzyBi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG03GLJt = await Weedburn.new({from: accounts[4]});
		const addressiL14jk = accounts[5]
		const addressxtjtcnz = accounts[2]
		const uintnF3Y25x = BigInt("67")
		const addressiknzmgI = accounts[5]
		const uintP2VW0rZ = BigInt("80")
		const address2mcNWE = "0x0000000000000000000000000000000000000001"
		const addressHhHTfTg = accounts[4]
		const uintQ7Fq0Yv = BigInt("503")
		const addressP7Qxi1 = accounts[3]
		const uint8CW5M2WH = await WeedburnG03GLJt.decimals.call({from: accounts[4]});
		const uint256WdXRsO2 = await WeedburnG03GLJt.allowance.call(addressxtjtcnz, addressiL14jk, {from: accounts[4]});
		const boolP5X9zKC = await WeedburnG03GLJt.transfer.call(addressiknzmgI, uintnF3Y25x, {from: accounts[4]});
//		const boolXZEQvB4 = await WeedburnG03GLJt.transferFrom.call(addressHhHTfTg, address2mcNWE, uintP2VW0rZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addresszvY9qXD = await WeedburnG03GLJt.burnFrom.call(addressP7Qxi1, uintQ7Fq0Yv, {from: accounts[3]});

		assert.equal(boolP5X9zKC, true)
		assert.equal(uint256WdXRsO2, BigInt("0"))
		assert.equal(uint8CW5M2WH, BigInt("18"))
		await expect(WeedburnG03GLJt.transferFrom.call(addressHhHTfTg, address2mcNWE, uintP2VW0rZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG03GLJt = await Weedburn.new({from: accounts[4]});
		const uintaWywgpt = BigInt("1793")
		const uintFPGzLX = BigInt("2034")
		const addressEDaZZDx = accounts[2]
		const uint256Vc8FU5R = await WeedburnG03GLJt.burn.call(uintaWywgpt, {from: accounts[4]});
//		await WeedburnG03GLJt.enableDevMode.call({from: accounts[4]});
//		const addresszvY9qXD = await WeedburnG03GLJt.burnFrom.call(addressEDaZZDx, uintFPGzLX, {from: accounts[3]});

		await expect(WeedburnG03GLJt.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG03GLJt = await Weedburn.new({from: accounts[4]});
		const uint1u7NOH = BigInt("67")
		const addressemnxBJB = accounts[5]
		const uintVgVLIwD = BigInt("80")
		const addressUFVBOhZ = "0x00000000000000000000000000000000000000-1"
		const addressw4IrI4h = accounts[4]
		const uint8CW5M2WH = await WeedburnG03GLJt.decimals.call({from: accounts[4]});
		const boolP5X9zKC = await WeedburnG03GLJt.transfer.call(addressemnxBJB, uint1u7NOH, {from: accounts[4]});
//		const boolXZEQvB4 = await WeedburnG03GLJt.transferFrom.call(addressw4IrI4h, addressUFVBOhZ, uintVgVLIwD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ujXQR2i = await WeedburnG03GLJt.totalSupply.call({from: accounts[3]});

		assert.equal(boolP5X9zKC, true)
		assert.equal(uint8CW5M2WH, BigInt("18"))
		await expect(WeedburnG03GLJt.transferFrom.call(addressw4IrI4h, addressUFVBOhZ, uintVgVLIwD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})