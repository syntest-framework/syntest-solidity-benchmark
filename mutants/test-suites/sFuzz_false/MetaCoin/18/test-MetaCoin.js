const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinfkrO11q = await MetaCoin.new({from: accounts[2]});
		const uintFbguAhQ = BigInt("318")
		const addressc31bj69 = accounts[4]
		const uintoSnsH7j = BigInt("1043")
		const addressixGo0vd = accounts[4]
		const uintD4dh4Zc = BigInt("366")
		const addressSLGk6zR = accounts[2]
		const uintiP71878 = BigInt("1851")
		const addressgyn7cJJ = accounts[1]
		const uintiQIcMZY = BigInt("702")
		const addressIpFLGDV = accounts[3]
		const uintXhgqYLG = BigInt("47")
		const addressWHcYWI = accounts[1]
		const boolt8U8Nb7 = await MetaCoinfkrO11q.sendCoin.call(addressc31bj69, uintFbguAhQ, {from: accounts[0]});
		const booluOlly3Q = await MetaCoinfkrO11q.sendCoin.call(addressixGo0vd, uintoSnsH7j, {from: accounts[0]});
		const booloLcFO5t = await MetaCoinfkrO11q.sendCoin.call(addressSLGk6zR, uintD4dh4Zc, {from: accounts[2]});
		const boolEdimhAq = await MetaCoinfkrO11q.sendCoin.call(addressgyn7cJJ, uintiP71878, {from: accounts[2]});
		const boolfWVTE6P = await MetaCoinfkrO11q.sendCoin.call(addressIpFLGDV, uintiQIcMZY, {from: accounts[4]});
		const booljvfuXyG = await MetaCoinfkrO11q.sendCoin.call(addressWHcYWI, uintXhgqYLG, {from: accounts[2]});

		assert.equal(boolEdimhAq, true)
		assert.equal(boolfWVTE6P, false)
		assert.equal(booljvfuXyG, true)
		assert.equal(booloLcFO5t, true)
		assert.equal(boolt8U8Nb7, false)
		assert.equal(booluOlly3Q, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinaWYUC4R = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgDIq72K = BigInt("588")
		const address09yf4n = accounts[4]
		const uintGHeziSo = BigInt("254")
		const addressAtVjKrX = accounts[2]
		const uintMXFGjQP = BigInt("989")
		const addressXlORDN = accounts[5]
		const uintwrGiXGa = BigInt("672")
		const addressal2IMA = accounts[0]
		const uintjVN00rw = BigInt("1820")
		const addressGcGYxrn = "0x0000000000000000000000000000000000000001"
		const uintyftz3PP = BigInt("783")
		const address9kesNG = accounts[5]
		const boolrHKBbdo = await MetaCoinaWYUC4R.sendCoin.call(address09yf4n, uintgDIq72K, {from: accounts[0]});
		const boolC6k3Ja = await MetaCoinaWYUC4R.sendCoin.call(addressAtVjKrX, uintGHeziSo, {from: accounts[2]});
		const boolKIId8zI = await MetaCoinaWYUC4R.sendCoin.call(addressXlORDN, uintMXFGjQP, {from: accounts[1]});
		const boolY37zVwK = await MetaCoinaWYUC4R.sendCoin.call(addressal2IMA, uintwrGiXGa, {from: accounts[2]});
		const boolX1jQcHI = await MetaCoinaWYUC4R.sendCoin.call(addressGcGYxrn, uintjVN00rw, {from: accounts[2]});
		const boolyeFrsJ8 = await MetaCoinaWYUC4R.sendCoin.call(address9kesNG, uintyftz3PP, {from: accounts[3]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinnxh5kd = await MetaCoin.new({from: accounts[4]});
		const uintr8CuMaT = BigInt("1116")
		const addressPgWL6qW = accounts[0]
		const uinthsDne7 = BigInt("113")
		const addressYzPT11 = accounts[4]
		const uintaRf0CDW = BigInt("0")
		const addressbaFrdp1 = accounts[2]
		const uintEnE4ZZG = BigInt("615")
		const addressW92pI5j = accounts[5]
		const uintuSoGulN = BigInt("708")
		const addressSMG8i8H = accounts[5]
		const boolIIpvmxV = await MetaCoinnxh5kd.sendCoin.call(addressPgWL6qW, uintr8CuMaT, {from: accounts[3]});
		const bool3bOkTl = await MetaCoinnxh5kd.sendCoin.call(addressYzPT11, uinthsDne7, {from: accounts[4]});
		const boolJrPy4lH = await MetaCoinnxh5kd.sendCoin.call(addressbaFrdp1, uintaRf0CDW, {from: accounts[4]});
		const boolFq8tE0 = await MetaCoinnxh5kd.sendCoin.call(addressW92pI5j, uintEnE4ZZG, {from: accounts[2]});
		const boolBNxuOjQ = await MetaCoinnxh5kd.sendCoin.call(addressSMG8i8H, uintuSoGulN, {from: accounts[0]});

		assert.equal(bool3bOkTl, true)
		assert.equal(boolBNxuOjQ, false)
		assert.equal(boolFq8tE0, false)
		assert.equal(boolIIpvmxV, false)
		assert.equal(boolJrPy4lH, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinSWixI6l = await MetaCoin.new({from: accounts[0]});
		const uintUPWspIo = BigInt("655")
		const addresshS4tWne = accounts[2]
		const uintg12kEAs = BigInt("1125")
		const addressu6FNbdu = accounts[1]
		const uintldobHEN = BigInt("495")
		const addressoJIlHt7 = accounts[3]
		const uintJjqoej4 = BigInt("967")
		const addressKyvAAk = accounts[0]
		const uintvzNEoug = BigInt("3042")
		const addressiOuuL17 = accounts[10]
		const boolbDmirpB = await MetaCoinSWixI6l.sendCoin.call(addresshS4tWne, uintUPWspIo, {from: "0x0000000000000000000000000000000000000001"});
		const boolVTFsZXp = await MetaCoinSWixI6l.sendCoin.call(addressu6FNbdu, uintg12kEAs, {from: accounts[1]});
		const boolf6rkQG = await MetaCoinSWixI6l.sendCoin.call(addressoJIlHt7, uintldobHEN, {from: accounts[0]});
		const boolyJIPoKT = await MetaCoinSWixI6l.sendCoin.call(addressKyvAAk, uintJjqoej4, {from: accounts[2]});
//		const boolbi0tfaZ = await MetaCoinSWixI6l.sendCoin.call(addressiOuuL17, uintvzNEoug, {from: accounts[0]});

		assert.equal(boolVTFsZXp, false)
		assert.equal(boolbDmirpB, false)
		assert.equal(boolf6rkQG, true)
		assert.equal(boolyJIPoKT, false)
		await expect(MetaCoinSWixI6l.sendCoin.call(addressiOuuL17, uintvzNEoug, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})