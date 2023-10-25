const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinsaGz0Q6 = await MetaCoin.new({from: accounts[0]});
		const uintSMUa9qf = BigInt("1995")
		const addressnMY9xP = accounts[3]
		const uintRort2RY = BigInt("1282")
		const addressc87bRjN = accounts[1]
		const boolFmvxhON = await MetaCoinsaGz0Q6.sendCoin.call(addressnMY9xP, uintSMUa9qf, {from: accounts[3]});
		const boolU9ohRkq = await MetaCoinsaGz0Q6.sendCoin.call(addressc87bRjN, uintRort2RY, {from: accounts[5]});

		assert.equal(boolFmvxhON, false)
		assert.equal(boolU9ohRkq, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinRlIAANB = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUPptC4r = BigInt("265")
		const addressTPxSVWP = accounts[2]
		const uintE7Tli3a = BigInt("363")
		const addressiPqQoGc = "0x0000000000000000000000000000000000000001"
		const uintqqhTXmE = BigInt("679")
		const addressLWAavdU = accounts[4]
		const uintmFdDa5z = BigInt("5")
		const addressgqpM3bQ = accounts[4]
		const uintN7HisW = BigInt("1266")
		const addressErAlNF = accounts[3]
		const uints3FWKJb = BigInt("1864")
		const addressDRdGNJG = accounts[2]
		const boolSC0CHVO = await MetaCoinRlIAANB.sendCoin.call(addressTPxSVWP, uintUPptC4r, {from: "0x0000000000000000000000000000000000000001"});
		const boolZPjOsdb = await MetaCoinRlIAANB.sendCoin.call(addressiPqQoGc, uintE7Tli3a, {from: accounts[5]});
		const boolF3FjljD = await MetaCoinRlIAANB.sendCoin.call(addressLWAavdU, uintqqhTXmE, {from: accounts[5]});
		const booliFXOc0o = await MetaCoinRlIAANB.sendCoin.call(addressgqpM3bQ, uintmFdDa5z, {from: accounts[2]});
		const boolATwRhci = await MetaCoinRlIAANB.sendCoin.call(addressErAlNF, uintN7HisW, {from: accounts[1]});
		const boolAYCHbFM = await MetaCoinRlIAANB.sendCoin.call(addressDRdGNJG, uints3FWKJb, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinOUxCNyk = await MetaCoin.new({from: accounts[2]});
		const uintFIWFeAG = BigInt("1478")
		const addressYCos5vo = accounts[1]
		const uintLSujRcx = BigInt("395")
		const addresszHRgeIa = accounts[1]
		const uintV58ke3z = BigInt("1013")
		const addressyH1X5H8 = accounts[0]
		const uintTEAE1Cp = BigInt("1959")
		const addressPKa3AVg = accounts[3]
		const uinta5YKpll = BigInt("1584")
		const addressulUv31 = accounts[5]
		const uintJ6kO07f = BigInt("1892")
		const addressiNskZcV = accounts[1]
		const boolwhe4xWH = await MetaCoinOUxCNyk.sendCoin.call(addressYCos5vo, uintFIWFeAG, {from: accounts[0]});
		const boolYPsnmpR = await MetaCoinOUxCNyk.sendCoin.call(addresszHRgeIa, uintLSujRcx, {from: accounts[3]});
		const boolM8B0d89 = await MetaCoinOUxCNyk.sendCoin.call(addressyH1X5H8, uintV58ke3z, {from: "0x0000000000000000000000000000000000000001"});
		const booldFinaG5 = await MetaCoinOUxCNyk.sendCoin.call(addressPKa3AVg, uintTEAE1Cp, {from: accounts[2]});
		const boolnbZSm8o = await MetaCoinOUxCNyk.sendCoin.call(addressulUv31, uinta5YKpll, {from: accounts[2]});
		const boolYRPpcGx = await MetaCoinOUxCNyk.sendCoin.call(addressiNskZcV, uintJ6kO07f, {from: accounts[3]});

		assert.equal(boolM8B0d89, false)
		assert.equal(boolYPsnmpR, false)
		assert.equal(boolYRPpcGx, false)
		assert.equal(booldFinaG5, true)
		assert.equal(boolnbZSm8o, true)
		assert.equal(boolwhe4xWH, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinF0ZDl2 = await MetaCoin.new({from: accounts[3]});
		const uintY6t7SNS = BigInt("2007")
		const addresstMIVafW = accounts[1]
		const uint6qCGFk = BigInt("0")
		const addressjzfouAi = accounts[1]
		const uintxxOX2E = BigInt("1813")
		const addressCeaSDk9 = accounts[1]
		const booltIAIpEy = await MetaCoinF0ZDl2.sendCoin.call(addresstMIVafW, uintY6t7SNS, {from: accounts[2]});
		const boolotuyhuX = await MetaCoinF0ZDl2.sendCoin.call(addressjzfouAi, uint6qCGFk, {from: accounts[3]});
		const boolPmAjJNM = await MetaCoinF0ZDl2.sendCoin.call(addressCeaSDk9, uintxxOX2E, {from: accounts[0]});

		assert.equal(boolPmAjJNM, false)
		assert.equal(boolotuyhuX, true)
		assert.equal(booltIAIpEy, false)
	});
})