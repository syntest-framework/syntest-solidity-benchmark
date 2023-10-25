const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vikQQk4 = await GAZ_ERC20.new({from: accounts[5]});
		const uint3TaW8b = BigInt("263")
		const addressft4YQmN = accounts[1]
		const uintHkcV0LY = BigInt("1886")
		const address2QHbud = accounts[4]
		const addressRjaHCBP = accounts[0]
		const booltK20slQ = await GAZ_ERC20vikQQk4.transfer.call(addressft4YQmN, uint3TaW8b, {from: accounts[3]});
		const boolFxcGGnG = await GAZ_ERC20vikQQk4.transferFrom.call(addressRjaHCBP, address2QHbud, uintHkcV0LY, {from: accounts[0]});

		await expect(GAZ_ERC20vikQQk4.transfer.call(addressft4YQmN, uint3TaW8b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xX3DLbV = await GAZ_ERC20.new({from: accounts[2]});
		const addressXFVfTTk = accounts[5]
		const uintVu86o6P = BigInt("321")
		const addressyP5TH9n = accounts[1]
		const uintT8f2Lxp = BigInt("4")
		const addresstjzP3kD = accounts[0]
		const uintl3gg5vr = BigInt("848")
		const addressMf1sd5N = accounts[2]
		const addressUXizICY = accounts[1]
		const addressDnEzM2 = accounts[4]
		const boolUDoZmNa = await GAZ_ERC20xX3DLbV.approve.call(addressXFVfTTk, {from: accounts[0]});
		const boolBDG5oz = await GAZ_ERC20xX3DLbV.approve.call(addressyP5TH9n, uintVu86o6P, {from: "0x0000000000000000000000000000000000000001"});
		const boolVWRpMlo = await GAZ_ERC20xX3DLbV.transfer.call(addresstjzP3kD, uintT8f2Lxp, {from: accounts[3]});
		const boolRMYbK3o = await GAZ_ERC20xX3DLbV.transferFrom.call(addressUXizICY, addressMf1sd5N, uintl3gg5vr, {from: accounts[2]});
		const booljuXUEJY = await GAZ_ERC20xX3DLbV.approve.call(addressDnEzM2, {from: accounts[1]});

		await expect(GAZ_ERC20xX3DLbV.approve.call(addressXFVfTTk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20I32QP0U = await GAZ_ERC20.new({from: accounts[0]});
		const uinty8tt6i = BigInt("369")
		const addressTAPMs4f = accounts[1]
		const uintyTmYkBC = BigInt("686")
		const addressgxXmlIR = accounts[4]
		const boolEhhfsbJ = await GAZ_ERC20I32QP0U.approve.call(addressTAPMs4f, uinty8tt6i, {from: accounts[2]});
		const boolj3gU3a5 = await GAZ_ERC20I32QP0U.approve.call(addressgxXmlIR, uintyTmYkBC, {from: accounts[2]});

		assert.equal(boolEhhfsbJ, true)
		assert.equal(boolj3gU3a5, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20cWhCqry = await GAZ_ERC20.new({from: accounts[0]});
		const addressG5iaFzM = accounts[2]
		const uintv9d8fkA = BigInt("1729")
		const addresszyjYwYn = accounts[1]
		const addressmnf4c0J = accounts[3]
		const uintVgLSj07 = BigInt("343")
		const addressykm6Nv0 = accounts[3]
		const addresspqK7Pvs = accounts[1]
		const addressNabOVJ5 = accounts[0]
		const boolAVCOb4G = await GAZ_ERC20cWhCqry.approve.call(addressG5iaFzM, {from: accounts[4]});
		const boolVEG5dT = await GAZ_ERC20cWhCqry.transferFrom.call(addressmnf4c0J, addresszyjYwYn, uintv9d8fkA, {from: accounts[1]});
		const boolGkPtuJE = await GAZ_ERC20cWhCqry.transferFrom.call(addresspqK7Pvs, addressykm6Nv0, uintVgLSj07, {from: accounts[1]});
		const boolWedLtAx = await GAZ_ERC20cWhCqry.approve.call(addressNabOVJ5, {from: accounts[2]});

		await expect(GAZ_ERC20cWhCqry.approve.call(addressG5iaFzM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20X1dMiyu = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHhg3Cnc = BigInt("992")
		const addressk652u1H = accounts[4]
		const uintzJXZT1G = BigInt("1789")
		const addressoxgQBNq = accounts[5]
		const uint76Z3zN = BigInt("1205")
		const addressPvA5pqj = accounts[2]
		const addressDVdfZQT = "0x0000000000000000000000000000000000000001"
		const boolqaNtQX = await GAZ_ERC20X1dMiyu.transfer.call(addressk652u1H, uintHhg3Cnc, {from: accounts[1]});
		const boolAUD4SzJ = await GAZ_ERC20X1dMiyu.transfer.call(addressoxgQBNq, uintzJXZT1G, {from: accounts[5]});
		const booln3YTHKN = await GAZ_ERC20X1dMiyu.approve.call(addressPvA5pqj, uint76Z3zN, {from: accounts[0]});
		const boolmero8Zl = await GAZ_ERC20X1dMiyu.approve.call(addressDVdfZQT, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c4rZ56 = await GAZ_ERC20.new({from: accounts[2]});
		const addressDEsyKDk = accounts[5]
		const addresslV1KPQ = "0x0000000000000000000000000000000000000001"
		const uintf93L3jl = BigInt("309")
		const addressZI9L3gd = accounts[0]
		const uintVkDWGFA = BigInt("1363")
		const addressHpA98Fa = accounts[4]
		const uintHLbF2jg = BigInt("1285")
		const addressZFLWOhR = accounts[0]
		const uintVUD90JG = BigInt("392")
		const addresszfXUrlt = accounts[2]
		const boolOfsmSdf = await GAZ_ERC20c4rZ56.approve.call(addressDEsyKDk, {from: accounts[3]});
		const boolb6VoY0b = await GAZ_ERC20c4rZ56.approve.call(addresslV1KPQ, {from: accounts[3]});
		const boolRedw06e = await GAZ_ERC20c4rZ56.approve.call(addressZI9L3gd, uintf93L3jl, {from: accounts[2]});
		const boolLtWS66 = await GAZ_ERC20c4rZ56.approve.call(addressHpA98Fa, uintVkDWGFA, {from: accounts[4]});
		const boolJfMm97 = await GAZ_ERC20c4rZ56.transfer.call(addressZFLWOhR, uintHLbF2jg, {from: accounts[4]});
		const boolEeM5it = await GAZ_ERC20c4rZ56.approve.call(addresszfXUrlt, uintVUD90JG, {from: accounts[3]});

		await expect(GAZ_ERC20c4rZ56.approve.call(addressDEsyKDk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LTDCjmg = await GAZ_ERC20.new({from: accounts[1]});
		const uint5JKXw4 = BigInt("1992")
		const addressOSQXnVB = "0x0000000000000000000000000000000000000001"
		const uintzR4L987 = BigInt("864")
		const address5Cztq5 = accounts[4]
		const uinthhgvlir = BigInt("839")
		const addressQMsHC95 = accounts[0]
		const uintOHa3euT = BigInt("852")
		const addressOuj8y8 = accounts[2]
		const uintlqcDgwG = BigInt("394")
		const addresswU9Crp9 = accounts[0]
		const addressVO9x8eu = accounts[5]
		const addressYmyrDmJ = accounts[2]
		const uintwJGX2ff = BigInt("1697")
		const addressr5VJSjq = accounts[1]
		const uintLhKZFV7 = BigInt("1855")
		const addressJOkFTYm = accounts[2]
		const addresstE3hflw = accounts[6]
		const boolykoDUj = await GAZ_ERC20LTDCjmg.approve.call(addressOSQXnVB, uint5JKXw4, {from: accounts[4]});
		const boola9tKB9n = await GAZ_ERC20LTDCjmg.approve.call(address5Cztq5, uintzR4L987, {from: accounts[1]});
		const boolBVnhQz2 = await GAZ_ERC20LTDCjmg.approve.call(addressQMsHC95, uinthhgvlir, {from: accounts[0]});
		const boolqQxiL76 = await GAZ_ERC20LTDCjmg.approve.call(addressOuj8y8, uintOHa3euT, {from: accounts[5]});
		const boolykwEH0l = await GAZ_ERC20LTDCjmg.transferFrom.call(addressVO9x8eu, addresswU9Crp9, uintlqcDgwG, {from: accounts[4]});
		const bool1CNvYi = await GAZ_ERC20LTDCjmg.approve.call(addressYmyrDmJ, {from: accounts[0]});
		const booln65fnZP = await GAZ_ERC20LTDCjmg.transfer.call(addressr5VJSjq, uintwJGX2ff, {from: accounts[3]});
		const boolZrNB6gV = await GAZ_ERC20LTDCjmg.transferFrom.call(addresstE3hflw, addressJOkFTYm, uintLhKZFV7, {from: accounts[1]});

		assert.equal(boolBVnhQz2, true)
		assert.equal(boola9tKB9n, true)
		assert.equal(boolqQxiL76, true)
		assert.equal(boolykoDUj, true)
		await expect(GAZ_ERC20LTDCjmg.transferFrom.call(addressVO9x8eu, addresswU9Crp9, uintlqcDgwG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vikQQk4 = await GAZ_ERC20.new({from: accounts[5]});
		const addressLkV25Ts = accounts[0]
		const uintWJ9dNSi = BigInt("655")
		const addressV448sBN = accounts[0]
		const uintFBB9gQ9 = BigInt("263")
		const addressoaqerbs = accounts[1]
		const uintXNWMft = BigInt("1886")
		const addressiV1s5af = accounts[4]
		const addressAdpTg0C = accounts[0]
		const boolvgenlAy = await GAZ_ERC20vikQQk4.approve.call(addressLkV25Ts, {from: accounts[1]});
		const booljlsVZsT = await GAZ_ERC20vikQQk4.approve.call(addressV448sBN, uintWJ9dNSi, {from: accounts[0]});
		const booltK20slQ = await GAZ_ERC20vikQQk4.transfer.call(addressoaqerbs, uintFBB9gQ9, {from: accounts[3]});
		const boolFxcGGnG = await GAZ_ERC20vikQQk4.transferFrom.call(addressAdpTg0C, addressiV1s5af, uintXNWMft, {from: accounts[0]});

		await expect(GAZ_ERC20vikQQk4.approve.call(addressLkV25Ts, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LTDCjmg = await GAZ_ERC20.new({from: accounts[1]});
		const uintQSIJ5kF = BigInt("1992")
		const addressNEP8bCl = "0x0000000000000000000000000000000000000001"
		const uintd1e8otp = BigInt("864")
		const addressrs6pfU = accounts[4]
		const uintDIiASXo = BigInt("839")
		const addressvWZQLFB = accounts[0]
		const uintOGl37oi = BigInt("154")
		const addressEV7oU1r = accounts[3]
		const uintlUNTFdV = BigInt("852")
		const addressV6QarM2 = accounts[2]
		const uintb9CiMcS = BigInt("394")
		const addressE0AduFO = accounts[0]
		const addressL1zxg2S = accounts[5]
		const addressltSiwb5 = accounts[3]
		const uintEIDuRLp = BigInt("1697")
		const addressO7TxP16 = accounts[1]
		const uintySp8nnl = BigInt("1855")
		const addressEP2FDE = accounts[2]
		const addresshkZondo = accounts[6]
		const boolykoDUj = await GAZ_ERC20LTDCjmg.approve.call(addressNEP8bCl, uintQSIJ5kF, {from: accounts[4]});
		const boola9tKB9n = await GAZ_ERC20LTDCjmg.approve.call(addressrs6pfU, uintd1e8otp, {from: accounts[1]});
		const boolBVnhQz2 = await GAZ_ERC20LTDCjmg.approve.call(addressvWZQLFB, uintDIiASXo, {from: accounts[0]});
		const boolXwhUH8 = await GAZ_ERC20LTDCjmg.transfer.call(addressEV7oU1r, uintOGl37oi, {from: accounts[1]});
		const boolqQxiL76 = await GAZ_ERC20LTDCjmg.approve.call(addressV6QarM2, uintlUNTFdV, {from: accounts[5]});
		const boolykwEH0l = await GAZ_ERC20LTDCjmg.transferFrom.call(addressL1zxg2S, addressE0AduFO, uintb9CiMcS, {from: accounts[4]});
		const bool1CNvYi = await GAZ_ERC20LTDCjmg.approve.call(addressltSiwb5, {from: accounts[0]});
		const booln65fnZP = await GAZ_ERC20LTDCjmg.transfer.call(addressO7TxP16, uintEIDuRLp, {from: accounts[3]});
		const boolZrNB6gV = await GAZ_ERC20LTDCjmg.transferFrom.call(addresshkZondo, addressEP2FDE, uintySp8nnl, {from: accounts[1]});

		assert.equal(boolBVnhQz2, true)
		assert.equal(boolXwhUH8, true)
		assert.equal(boola9tKB9n, true)
		assert.equal(boolqQxiL76, true)
		assert.equal(boolykoDUj, true)
		await expect(GAZ_ERC20LTDCjmg.transferFrom.call(addressL1zxg2S, addressE0AduFO, uintb9CiMcS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vikQQk4 = await GAZ_ERC20.new({from: accounts[5]});
		const addressZtMjA4S = "0x0000000000000000000000000000000000000001"
		const uintygVCo9H = BigInt("81")
		const addressK8pLcoI = accounts[0]
		const uintrshcD5y = BigInt("1886")
		const addresswBijOPm = accounts[4]
		const addressD9WIi0V = accounts[1]
		const boolJqszhBk = await GAZ_ERC20vikQQk4.approve.call(addressZtMjA4S, {from: accounts[2]});
		const boolerXP0Y6 = await GAZ_ERC20vikQQk4.approve.call(addressK8pLcoI, uintygVCo9H, {from: "0x0000000000000000000000000000000000000001"});
		const boolFxcGGnG = await GAZ_ERC20vikQQk4.transferFrom.call(addressD9WIi0V, addresswBijOPm, uintrshcD5y, {from: accounts[0]});

		await expect(GAZ_ERC20vikQQk4.approve.call(addressZtMjA4S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LTDCjmg = await GAZ_ERC20.new({from: accounts[1]});
		const uint0tcwEx = BigInt("1992")
		const addressVVaSX59 = "0x0000000000000000000000000000000000000001"
		const addressbTliX3V = accounts[0]
		const uintY52dkia = BigInt("864")
		const addressOZpnMRC = accounts[4]
		const uintx8e4kX4 = BigInt("839")
		const addresskjFsBem = accounts[0]
		const uintgFTf9xc = BigInt("852")
		const addressw3xEUzm = accounts[3]
		const uintT20LlgA = BigInt("394")
		const addressy8QO8P = accounts[1]
		const addressvm8Kfh5 = accounts[5]
		const addressWMW2KXH = accounts[2]
		const uintRFAt0oY = BigInt("1697")
		const addressRnOB8lQ = accounts[1]
		const uintqJk6ON9 = BigInt("1855")
		const addressQkJe3Wg = accounts[2]
		const addresstevO36F = accounts[6]
		const boolykoDUj = await GAZ_ERC20LTDCjmg.approve.call(addressVVaSX59, uint0tcwEx, {from: accounts[4]});
		const booljIZ5aFw = await GAZ_ERC20LTDCjmg.approve.call(addressbTliX3V, {from: accounts[5]});
		const boola9tKB9n = await GAZ_ERC20LTDCjmg.approve.call(addressOZpnMRC, uintY52dkia, {from: accounts[1]});
		const boolBVnhQz2 = await GAZ_ERC20LTDCjmg.approve.call(addresskjFsBem, uintx8e4kX4, {from: accounts[0]});
		const boolqQxiL76 = await GAZ_ERC20LTDCjmg.approve.call(addressw3xEUzm, uintgFTf9xc, {from: accounts[5]});
		const boolykwEH0l = await GAZ_ERC20LTDCjmg.transferFrom.call(addressvm8Kfh5, addressy8QO8P, uintT20LlgA, {from: accounts[4]});
		const bool1CNvYi = await GAZ_ERC20LTDCjmg.approve.call(addressWMW2KXH, {from: accounts[0]});
		const booln65fnZP = await GAZ_ERC20LTDCjmg.transfer.call(addressRnOB8lQ, uintRFAt0oY, {from: accounts[3]});
		const boolZrNB6gV = await GAZ_ERC20LTDCjmg.transferFrom.call(addresstevO36F, addressQkJe3Wg, uintqJk6ON9, {from: accounts[1]});

		assert.equal(boolykoDUj, true)
		await expect(GAZ_ERC20LTDCjmg.approve.call(addressbTliX3V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LTDCjmg = await GAZ_ERC20.new({from: accounts[1]});
		const uintSeZVL7 = BigInt("1992")
		const addressdwLirw = "0x0000000000000000000000000000000000000001"
		const addressQ7EhANL = accounts[5]
		const uintN1XixxI = BigInt("851")
		const addressyMuEwW = accounts[0]
		const uintU1bqp8y = BigInt("852")
		const addressYm5aXa7 = accounts[2]
		const uintqRVU66w = BigInt("394")
		const addressgN7syAo = accounts[0]
		const addressRvc7Cad = accounts[5]
		const uintF1DNG6l = BigInt("819")
		const addressCY8R5tw = accounts[4]
		const addressqRzhceC = accounts[2]
		const uintzqxdshN = BigInt("1855")
		const addressheqJbQe = accounts[2]
		const addressE74irmD = accounts[6]
		const boolykoDUj = await GAZ_ERC20LTDCjmg.approve.call(addressdwLirw, uintSeZVL7, {from: accounts[4]});
		const boolsjHco4i = await GAZ_ERC20LTDCjmg.approve.call(addressQ7EhANL, {from: "0x0000000000000000000000000000000000000001"});
		const boolBVnhQz2 = await GAZ_ERC20LTDCjmg.approve.call(addressyMuEwW, uintN1XixxI, {from: accounts[0]});
		const boolqQxiL76 = await GAZ_ERC20LTDCjmg.approve.call(addressYm5aXa7, uintU1bqp8y, {from: accounts[5]});
		const boolykwEH0l = await GAZ_ERC20LTDCjmg.transferFrom.call(addressRvc7Cad, addressgN7syAo, uintqRVU66w, {from: accounts[4]});
		const boolwmxNWs = await GAZ_ERC20LTDCjmg.transfer.call(addressCY8R5tw, uintF1DNG6l, {from: accounts[5]});
		const bool1CNvYi = await GAZ_ERC20LTDCjmg.approve.call(addressqRzhceC, {from: accounts[0]});
		const boolZrNB6gV = await GAZ_ERC20LTDCjmg.transferFrom.call(addressE74irmD, addressheqJbQe, uintzqxdshN, {from: accounts[1]});

		assert.equal(boolykoDUj, true)
		await expect(GAZ_ERC20LTDCjmg.approve.call(addressQ7EhANL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})