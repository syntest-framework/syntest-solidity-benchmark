const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinqJXIzJG = await MetaCoin.new({from: accounts[1]});
		const uinttMcvLbT = BigInt("1794")
		const addressZek4Gwd = accounts[0]
		const uintkHFvNj6 = BigInt("1246")
		const addressSIsmbXz = accounts[2]
		const uintvbtCvB1 = BigInt("43")
		const address14DCAr = accounts[4]
		const uintUEAXrSS = BigInt("973")
		const addressX748xYz = accounts[1]
		const boollMoKQdS = await MetaCoinqJXIzJG.sendCoin.call(addressZek4Gwd, uinttMcvLbT, {from: accounts[3]});
		const boolssarLWg = await MetaCoinqJXIzJG.sendCoin.call(addressSIsmbXz, uintkHFvNj6, {from: "0x0000000000000000000000000000000000000001"});
		const boolTlquwTx = await MetaCoinqJXIzJG.sendCoin.call(address14DCAr, uintvbtCvB1, {from: accounts[4]});
		const boolzSugu96 = await MetaCoinqJXIzJG.sendCoin.call(addressX748xYz, uintUEAXrSS, {from: accounts[0]});

		assert.equal(boolTlquwTx, false)
		assert.equal(boollMoKQdS, false)
		assert.equal(boolssarLWg, false)
		assert.equal(boolzSugu96, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinZFc7zNE = await MetaCoin.new({from: accounts[3]});
		const uintnF3Od2j = BigInt("1723")
		const addressHMdLF4K = accounts[2]
		const uintSVloEEw = BigInt("94")
		const addressDdQgAkY = accounts[1]
		const uint4s9KJZ = BigInt("1031")
		const addresslGE5dz6 = accounts[0]
		const uintmsEUjfS = BigInt("36")
		const addressWxuHsc0 = accounts[0]
		const uint3UeieE = BigInt("1436")
		const addressdiMdMpa = "0x0000000000000000000000000000000000000001"
		const boollVO7vFX = await MetaCoinZFc7zNE.sendCoin.call(addressHMdLF4K, uintnF3Od2j, {from: accounts[3]});
		const boolAzXX7S = await MetaCoinZFc7zNE.sendCoin.call(addressDdQgAkY, uintSVloEEw, {from: accounts[1]});
		const boolKcVVJY4 = await MetaCoinZFc7zNE.sendCoin.call(addresslGE5dz6, uint4s9KJZ, {from: accounts[4]});
		const boolmrM2xyQ = await MetaCoinZFc7zNE.sendCoin.call(addressWxuHsc0, uintmsEUjfS, {from: accounts[1]});
		const boolsYP4bcW = await MetaCoinZFc7zNE.sendCoin.call(addressdiMdMpa, uint3UeieE, {from: accounts[1]});

		assert.equal(boolAzXX7S, false)
		assert.equal(boolKcVVJY4, false)
		assert.equal(boollVO7vFX, true)
		assert.equal(boolmrM2xyQ, false)
		assert.equal(boolsYP4bcW, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinltNllGH = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjuw4tt = BigInt("1998")
		const addressmTbxsXg = "0x0000000000000000000000000000000000000001"
		const uintqAslTmK = BigInt("1651")
		const addressdGOpoN = accounts[5]
		const uintq28Z2z = BigInt("386")
		const addressysVU0D2 = accounts[3]
		const uintLgsXWvn = BigInt("1127")
		const addressHgaIhn = accounts[3]
		const uintWGCi66i = BigInt("872")
		const addressWWsWkWR = accounts[1]
		const uintvnQmaqE = BigInt("1561")
		const addressHHYlC65 = accounts[4]
		const boolYvLTSpF = await MetaCoinltNllGH.sendCoin.call(addressmTbxsXg, uintjuw4tt, {from: accounts[4]});
		const boolfRzwTw = await MetaCoinltNllGH.sendCoin.call(addressdGOpoN, uintqAslTmK, {from: accounts[2]});
		const boolS3G6Lm8 = await MetaCoinltNllGH.sendCoin.call(addressysVU0D2, uintq28Z2z, {from: accounts[3]});
		const boolCp4BNAb = await MetaCoinltNllGH.sendCoin.call(addressHgaIhn, uintLgsXWvn, {from: accounts[4]});
		const boollh59sN7 = await MetaCoinltNllGH.sendCoin.call(addressWWsWkWR, uintWGCi66i, {from: accounts[2]});
		const boolagwKOtG = await MetaCoinltNllGH.sendCoin.call(addressHHYlC65, uintvnQmaqE, {from: accounts[0]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinkUgDD2f = await MetaCoin.new({from: accounts[0]});
		const uinthG4w3rY = BigInt("834")
		const addressIHhYIXB = accounts[3]
		const uintpQ07hq = BigInt("1819")
		const addressnA8Q7cT = accounts[3]
		const uinttqlexhg = BigInt("75")
		const addresseG4QfWj = accounts[3]
		const uintbjsQcZi = BigInt("1996")
		const addressJcNiBbb = accounts[2]
		const uintakOZ8g8 = BigInt("998")
		const addressHVysqfT = accounts[3]
		const uinthigFV6 = BigInt("1051")
		const addressi6PrOwt = "0x0000000000000000000000000000000000000001"
		const uint40ge5U = BigInt("1508")
		const addressD93oqO8 = accounts[4]
		const uintmoEzmL = BigInt("3")
		const addressBt064bJ = accounts[4]
		const uintH99kkO8 = BigInt("486")
		const addressZXrzhjO = accounts[3]
		const boolAKPuSSr = await MetaCoinkUgDD2f.sendCoin.call(addressIHhYIXB, uinthG4w3rY, {from: accounts[4]});
		const booleH6PYMU = await MetaCoinkUgDD2f.sendCoin.call(addressnA8Q7cT, uintpQ07hq, {from: accounts[4]});
		const boolYOSgckA = await MetaCoinkUgDD2f.sendCoin.call(addresseG4QfWj, uinttqlexhg, {from: accounts[0]});
		const boolgEuF3wI = await MetaCoinkUgDD2f.sendCoin.call(addressJcNiBbb, uintbjsQcZi, {from: accounts[0]});
		const boolWTsAVCE = await MetaCoinkUgDD2f.sendCoin.call(addressHVysqfT, uintakOZ8g8, {from: accounts[5]});
		const boolYwlmWAw = await MetaCoinkUgDD2f.sendCoin.call(addressi6PrOwt, uinthigFV6, {from: "0x0000000000000000000000000000000000000001"});
		const boolYwusYqs = await MetaCoinkUgDD2f.sendCoin.call(addressD93oqO8, uint40ge5U, {from: "0x0000000000000000000000000000000000000001"});
		const boolCLOtRc = await MetaCoinkUgDD2f.sendCoin.call(addressBt064bJ, uintmoEzmL, {from: accounts[0]});
		const booloybrpaU = await MetaCoinkUgDD2f.sendCoin.call(addressZXrzhjO, uintH99kkO8, {from: accounts[4]});

		assert.equal(boolAKPuSSr, false)
		assert.equal(boolCLOtRc, true)
		assert.equal(boolWTsAVCE, false)
		assert.equal(boolYOSgckA, true)
		assert.equal(boolYwlmWAw, false)
		assert.equal(boolYwusYqs, false)
		assert.equal(booleH6PYMU, false)
		assert.equal(boolgEuF3wI, true)
		assert.equal(booloybrpaU, false)
	});
})