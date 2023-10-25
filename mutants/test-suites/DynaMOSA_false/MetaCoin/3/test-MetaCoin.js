const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinP0nWeh = await MetaCoin.new({from: accounts[4]});
		const uintskWyznh = BigInt("844")
		const addressmIdNXqQ = accounts[1]
		const uintXcy8xd0 = BigInt("527")
		const addressv2wwUMe = accounts[4]
		const uintDBlPVrT = BigInt("1297")
		const addressM43xXGA = accounts[3]
		const uintHEX7C0h = BigInt("1172")
		const addressSe22ivO = accounts[3]
		const boolOgdWAfd = await MetaCoinP0nWeh.sendCoin.call(addressmIdNXqQ, uintskWyznh, {from: accounts[3]});
		const boolY1Q6oUk = await MetaCoinP0nWeh.sendCoin.call(addressv2wwUMe, uintXcy8xd0, {from: accounts[5]});
		const boolQJo3LCb = await MetaCoinP0nWeh.sendCoin.call(addressM43xXGA, uintDBlPVrT, {from: accounts[0]});
		const booln8o56eP = await MetaCoinP0nWeh.sendCoin.call(addressSe22ivO, uintHEX7C0h, {from: accounts[1]});

		assert.equal(boolOgdWAfd, false)
		assert.equal(boolQJo3LCb, false)
		assert.equal(boolY1Q6oUk, false)
		assert.equal(booln8o56eP, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinAFQhDFZ = await MetaCoin.new({from: accounts[3]});
		const uintfNk8nZC = BigInt("2025")
		const addressmA3ZDY6 = accounts[2]
		const uintRszPm8B = BigInt("1270")
		const addresskh4xms = accounts[2]
		const uintVouM2fW = BigInt("138")
		const addressojHDdM = accounts[3]
		const uintwTQlFBD = BigInt("1329")
		const addresscmlEI78 = accounts[4]
		const uintzvKsMky = BigInt("550")
		const addressEZmKzti = accounts[3]
		const boolXQoFraY = await MetaCoinAFQhDFZ.sendCoin.call(addressmA3ZDY6, uintfNk8nZC, {from: accounts[0]});
		const boolz5K1hR = await MetaCoinAFQhDFZ.sendCoin.call(addresskh4xms, uintRszPm8B, {from: accounts[2]});
		const boolfTmhF6f = await MetaCoinAFQhDFZ.sendCoin.call(addressojHDdM, uintVouM2fW, {from: accounts[2]});
		const boolrYHPanB = await MetaCoinAFQhDFZ.sendCoin.call(addresscmlEI78, uintwTQlFBD, {from: accounts[3]});
		const boolhyAeyhT = await MetaCoinAFQhDFZ.sendCoin.call(addressEZmKzti, uintzvKsMky, {from: accounts[2]});

		assert.equal(boolXQoFraY, false)
		assert.equal(boolfTmhF6f, false)
		assert.equal(boolhyAeyhT, false)
		assert.equal(boolrYHPanB, true)
		assert.equal(boolz5K1hR, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinbZZzbzU = await MetaCoin.new({from: accounts[0]});
		const uintkZq7ds = BigInt("131")
		const addressZHWbRW = "0x0000000000000000000000000000000000000001"
		const uintludcWin = BigInt("515")
		const addressPjXWvsF = "0x00000000000000000000000000000000000000-1"
		const uintktDnKGN = BigInt("535")
		const addressq9BriOr = accounts[5]
		const boolSbkscgE = await MetaCoinbZZzbzU.sendCoin.call(addressZHWbRW, uintkZq7ds, {from: accounts[0]});
//		const boolwPp0MN = await MetaCoinbZZzbzU.sendCoin.call(addressPjXWvsF, uintludcWin, {from: accounts[1]});
//		const boolBVpziS = await MetaCoinbZZzbzU.sendCoin.call(addressq9BriOr, uintktDnKGN, {from: accounts[0]});

		assert.equal(boolSbkscgE, true)
		await expect(MetaCoinbZZzbzU.sendCoin.call(addressPjXWvsF, uintludcWin, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MetaCoin', async () => {
		const MetaCoinhKN1pyD = await MetaCoin.new({from: accounts[3]});
		const uintuJioOBo = BigInt("1802")
		const addresszIECeRK = accounts[1]
		const uintRjldXFr = BigInt("2")
		const addressTLolNAI = accounts[0]
		const uintMjANfr4 = BigInt("1592")
		const addressxcu0Xus = accounts[0]
		const uintQ5reBZq = BigInt("2033")
		const addressAd3Sj6G = accounts[3]
		const uint1Du4YY = BigInt("1868")
		const addressOMzVWj = accounts[1]
		const uintLrVQSJr = BigInt("859")
		const addressrLvHfvs = accounts[0]
		const uintHfKQpu8 = BigInt("1647")
		const addresswkCDxHj = accounts[1]
		const uintdT1Wwej = BigInt("356")
		const addressIjbcQp9 = "0x0000000000000000000000000000000000000001"
		const uintKVuwSSI = BigInt("1388")
		const addressnFiYqBp = "0x0000000000000000000000000000000000000001"
		const boolsPRPx1i = await MetaCoinhKN1pyD.sendCoin.call(addresszIECeRK, uintuJioOBo, {from: accounts[0]});
		const boolrDsk4Ze = await MetaCoinhKN1pyD.sendCoin.call(addressTLolNAI, uintRjldXFr, {from: accounts[3]});
		const boolt43Gjya = await MetaCoinhKN1pyD.sendCoin.call(addressxcu0Xus, uintMjANfr4, {from: accounts[3]});
		const boolpE5PdCq = await MetaCoinhKN1pyD.sendCoin.call(addressAd3Sj6G, uintQ5reBZq, {from: accounts[3]});
		const boolh8OXxcM = await MetaCoinhKN1pyD.sendCoin.call(addressOMzVWj, uint1Du4YY, {from: accounts[1]});
		const boolHHwGP2e = await MetaCoinhKN1pyD.sendCoin.call(addressrLvHfvs, uintLrVQSJr, {from: accounts[3]});
		const boolpcY2aO8 = await MetaCoinhKN1pyD.sendCoin.call(addresswkCDxHj, uintHfKQpu8, {from: accounts[5]});
		const boolr8QOYVR = await MetaCoinhKN1pyD.sendCoin.call(addressIjbcQp9, uintdT1Wwej, {from: accounts[3]});
		const boolfqayQ4 = await MetaCoinhKN1pyD.sendCoin.call(addressnFiYqBp, uintKVuwSSI, {from: accounts[1]});

		assert.equal(boolHHwGP2e, true)
		assert.equal(boolfqayQ4, false)
		assert.equal(boolh8OXxcM, false)
		assert.equal(boolpE5PdCq, true)
		assert.equal(boolpcY2aO8, false)
		assert.equal(boolr8QOYVR, true)
		assert.equal(boolrDsk4Ze, true)
		assert.equal(boolsPRPx1i, false)
		assert.equal(boolt43Gjya, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinL4a2XNV = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQga9Tf0 = BigInt("1535")
		const addressk1Mn2L = accounts[5]
		const uintgLCFmiR = BigInt("1967")
		const addressXA5G6B = accounts[3]
		const uintFvmGPG2 = BigInt("813")
		const addresszzuZdI8 = accounts[4]
		const uintrkSC0Fd = BigInt("1199")
		const addresstfQB0Jf = accounts[3]
		const booleZp5rLD = await MetaCoinL4a2XNV.sendCoin.call(addressk1Mn2L, uintQga9Tf0, {from: accounts[2]});
		const boolbLbQS7B = await MetaCoinL4a2XNV.sendCoin.call(addressXA5G6B, uintgLCFmiR, {from: accounts[2]});
		const boolO9FHaZH = await MetaCoinL4a2XNV.sendCoin.call(addresszzuZdI8, uintFvmGPG2, {from: accounts[1]});
		const boolCpX3Y7A = await MetaCoinL4a2XNV.sendCoin.call(addresstfQB0Jf, uintrkSC0Fd, {from: accounts[1]});
	});
})