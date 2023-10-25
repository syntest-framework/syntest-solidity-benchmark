const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uinthMWaE5s = BigInt("360")
		const stringjmqCZXi = "6y1Bnnlynj8N2I09N"
		const stringsWUCYAV = "3YgQkDEeI2k7Hegv6spZdtSK2"
		const INSTTs5soA = await INS.new(uinthMWaE5s, stringjmqCZXi, stringsWUCYAV, {from: accounts[4]});
		const uinttfcBk1 = BigInt("401")
		const addressBKito6A = accounts[2]
		const bytezaArsQc = "0x060c180c1b08161b1b030b"
		const uintu92igu = BigInt("463")
		const addressUV3UaHK = accounts[5]
		const bytenwVn1Of = "0x1609190c1a0a0c"
		const uintnvMuD2N = BigInt("563")
		const addressxpS0RZ5 = accounts[4]
		const byteZD35Rj2 = "0x0212161d041b12021a131d0e17"
		const uintYKbwmdw = BigInt("450")
		const addressvjys0yS = accounts[4]
		const uintnkUd48G = BigInt("16")
		const addressTS9HF8 = accounts[2]
		const uintZLskB5z = BigInt("908")
		const addresszmMvjuP = accounts[3]
		const boolkwjbguh = await INSTTs5soA.burnFrom.call(addressBKito6A, uinttfcBk1, {from: accounts[3]});
		const boolvbnDOY0 = await INSTTs5soA.approveAndCall.call(addressUV3UaHK, uintu92igu, bytezaArsQc, {from: accounts[1]});
		const boolh6ZQy4L = await INSTTs5soA.approveAndCall.call(addressxpS0RZ5, uintnvMuD2N, bytenwVn1Of, {from: accounts[0]});
		const boolzw11ABh = await INSTTs5soA.approveAndCall.call(addressvjys0yS, uintYKbwmdw, byteZD35Rj2, {from: accounts[3]});
		const boolJaD9Ufn = await INSTTs5soA.burnFrom.call(addressTS9HF8, uintnkUd48G, {from: accounts[1]});
		const boolMzKuOiF = await INSTTs5soA.burnFrom.call(addresszmMvjuP, uintZLskB5z, {from: accounts[2]});

		await expect(INSTTs5soA.burnFrom.call(addressBKito6A, uinttfcBk1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintNQXW8iU = BigInt("400")
		const stringBwnwNov = "UAKTsmA2c88gxC4GnmGGqb4B7DgOdrOZaLlceDK4PjstNILXpjQdkXaCqR640"
		const stringlJPzcso = "M79ZobvA"
		const INSN0a0VSd = await INS.new(uintNQXW8iU, stringBwnwNov, stringlJPzcso, {from: accounts[5]});
		const uintna7IdD = BigInt("920")
		const addressMWyIG45 = accounts[3]
		const uinte02n7QT = BigInt("1075")
		const addressMzzMgAq = accounts[2]
		const address9ZFEl7 = accounts[4]
		const uintu4KkPZ = BigInt("481")
		const addressPWcgPOF = accounts[3]
		const addressdc1Zba7 = accounts[0]
		const uinttJlNBd = BigInt("681")
		const addressxJgLYDq = accounts[0]
		const uintTDpMVHm = BigInt("327")
		const addressg4x0eUb = accounts[2]
		const uintwCGR1xZ = BigInt("549")
		const addressyMMNZDi = accounts[5]
		const boolj2U6WXt = await INSN0a0VSd.approve.call(addressMWyIG45, uintna7IdD, {from: accounts[4]});
		const boolJzTTtD = await INSN0a0VSd.transferFrom.call(address9ZFEl7, addressMzzMgAq, uinte02n7QT, {from: accounts[4]});
		const boolHlvQt8b = await INSN0a0VSd.transferFrom.call(addressdc1Zba7, addressPWcgPOF, uintu4KkPZ, {from: accounts[2]});
		const boolQSTV9oP = await INSN0a0VSd.approve.call(addressxJgLYDq, uinttJlNBd, {from: accounts[1]});
		const boolWN1gtpe = await INSN0a0VSd.transfer.call(addressg4x0eUb, uintTDpMVHm, {from: accounts[2]});
		const boolEi5a4XH = await INSN0a0VSd.approve.call(addressyMMNZDi, uintwCGR1xZ, {from: accounts[3]});

		assert.equal(boolj2U6WXt, true)
		await expect(INSN0a0VSd.transferFrom.call(address9ZFEl7, addressMzzMgAq, uinte02n7QT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintUvCQkX6 = BigInt("583")
		const stringwRmlvoP = "pxtCd4do9GsZujhQCnymWWM9Xxp8rr786DywlV3mWoYYVMr0YGbhFJyYggsuFtbYJzHWT"
		const stringJJr3Qdh = "DajrDs2qHztydWxDRB15okm17nVLtGoStY1ze5Ji1sD6"
		const INSeXuwx0y = await INS.new(uintUvCQkX6, stringwRmlvoP, stringJJr3Qdh, {from: accounts[1]});
		const uint4xtt9R = BigInt("1002")
		const byteo9PkFPb = "0x1a081e0a0216010110081f1813171f011f1b091e120d0a02040719"
		const uinth5aKsw3 = BigInt("134")
		const addresswCTwRCv = accounts[4]
		const boolsDkz7y = await INSeXuwx0y.burn.call(uint4xtt9R, {from: accounts[5]});
		const boolTbjvJ3 = await INSeXuwx0y.approveAndCall.call(addresswCTwRCv, uinth5aKsw3, byteo9PkFPb, {from: accounts[1]});

		await expect(INSeXuwx0y.burn.call(uint4xtt9R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintqWQK8Xk = BigInt("952")
		const stringA5ofMCc = "ogIfpnYleD4evLpAJ6MJfBjlB1RE8eFNO9SUY2DbdSlGDH2QobPsw657Qt23Y2z1IVNiVCJlQ5yl6kYcSqfDRrMb"
		const stringqsLuDDE = "1mjQYl4hq79MMBrWze8jFmw6WbM2inF6WQjJt"
		const INStO8Xt0t = await INS.new(uintqWQK8Xk, stringA5ofMCc, stringqsLuDDE, {from: accounts[1]});
		const uintJmNvgW5 = BigInt("679")
		const addressz1wjL3N = accounts[2]
		const byteHWhiDxW = "0x09151a14191208"
		const uintjusbm7P = BigInt("2004")
		const addressrQeETre = accounts[2]
		const boolliebzuh = await INStO8Xt0t.approve.call(addressz1wjL3N, uintJmNvgW5, {from: accounts[4]});
		const boolxylXGOV = await INStO8Xt0t.approveAndCall.call(addressrQeETre, uintjusbm7P, byteHWhiDxW, {from: accounts[3]});

		assert.equal(boolliebzuh, true)
		await expect(INStO8Xt0t.approveAndCall.call(addressrQeETre, uintjusbm7P, byteHWhiDxW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintBROIC5D = BigInt("1741")
		const stringdBZdChc = "CpUZ8KuVu5"
		const stringHmzub9 = "rRgdw8TQiw0hvh68G5rTV7t6yGe8mJI8p44bcnp8z4hewZp9sfBBbJBXMVCRWhFEoOwQpZIbzyTJE"
		const INSiE2BqlE = await INS.new(uintBROIC5D, stringdBZdChc, stringHmzub9, {from: "0x0000000000000000000000000000000000000001"});
		const uinthyebD7i = BigInt("1931")
		const byteaFUuzK = "0x0a1c170410001d1c0d07131502"
		const uintaUNBeWR = BigInt("1379")
		const addressVPluyBd = accounts[0]
		const boolww7uK0X = await INSiE2BqlE.burn.call(uinthyebD7i, {from: accounts[3]});
		const boolxMB1jQ2 = await INSiE2BqlE.approveAndCall.call(addressVPluyBd, uintaUNBeWR, byteaFUuzK, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintD7GhYmN = BigInt("952")
		const stringA5ofMCc = "ogIfpnYleD4evLpAJ6MJfBjlB1RE8eFNO9SUY2DbdSlGDH2QobPsw657Qt23Y2z1IVNiVCJlQ5yl6kYcSqfDRrMb"
		const stringqsLuDDE = "1mjQYl4hq79MMBrWze8jFmw6WbM2inF6WQjJt"
		const INStO8Xt0t = await INS.new(uintD7GhYmN, stringA5ofMCc, stringqsLuDDE, {from: accounts[1]});
		const uintYxuOPUt = BigInt("1401")
		const addressqzSCDPg = accounts[1]
		const uintbVrRth = BigInt("679")
		const addressAGdHbjs = accounts[2]
		const boolXdbeSES = await INStO8Xt0t.transfer.call(addressqzSCDPg, uintYxuOPUt, {from: accounts[4]});
		const boolliebzuh = await INStO8Xt0t.approve.call(addressAGdHbjs, uintbVrRth, {from: accounts[4]});

		await expect(INStO8Xt0t.transfer.call(addressqzSCDPg, uintYxuOPUt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})