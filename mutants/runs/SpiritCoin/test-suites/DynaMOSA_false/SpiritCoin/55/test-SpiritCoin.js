const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressjwCovMB = accounts[5]
		const addressL8OUEk4 = accounts[1]
		const SpiritCoinSzjZRxq = await SpiritCoin.new(addressjwCovMB, addressL8OUEk4, {from: accounts[1]});
		const uinthUYYX0 = BigInt("1583")
		const addressM6muJUt = "0x0000000000000000000000000000000000000001"
		const uintJ4GfUzs = BigInt("870")
		const addressBG9qT1Q = accounts[1]
		const addressLhXRhkd = accounts[2]
		const uintxwguZ6O = BigInt("1892")
		const addressydGIwQh = accounts[4]
		const addressdPeuNu = accounts[1]
		const uinthzafZ0J = BigInt("1645")
		const addressZSexhp7 = accounts[5]
		const addressDqrntyr = accounts[0]
		const boolHcIJvnU = await SpiritCoinSzjZRxq.transfer.call(addressM6muJUt, uinthUYYX0, {from: accounts[4]});
		const addressdlURbda = await SpiritCoinSzjZRxq.mint.call(addressBG9qT1Q, uintJ4GfUzs, {from: accounts[1]});
		const addressU1WjbXi = await SpiritCoinSzjZRxq.setMinter.call(addressLhXRhkd, {from: "0x0000000000000000000000000000000000000001"});
		const boolEAGFQSh = await SpiritCoinSzjZRxq.approve.call(addressydGIwQh, uintxwguZ6O, {from: accounts[0]});
		const uintpSZ83QN = await SpiritCoinSzjZRxq.balanceOf.call(addressdPeuNu, {from: accounts[5]});
		const boolLR4TDl = await SpiritCoinSzjZRxq.transferFrom.call(addressDqrntyr, addressZSexhp7, uinthzafZ0J, {from: accounts[5]});

		await expect(SpiritCoinSzjZRxq.transfer.call(addressM6muJUt, uinthUYYX0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressWBz0s0R = accounts[3]
		const addressq7gv2Mv = "0x0000000000000000000000000000000000000001"
		const SpiritCoin2OZ6FQ = await SpiritCoin.new(addressWBz0s0R, addressq7gv2Mv, {from: "0x0000000000000000000000000000000000000001"});
		const uintHRXiWfH = BigInt("1549")
		const addresspmKwfKU = accounts[3]
		const uintzLApinO = BigInt("602")
		const addressvaSGZpg = accounts[1]
		const addressg6UWbxc = accounts[0]
		const uintzJ3cbSD = BigInt("185")
		const addresskkQYg2w = accounts[0]
		const addresslHYLHEm = await SpiritCoin2OZ6FQ.mint.call(addresspmKwfKU, uintHRXiWfH, {from: accounts[5]});
		const boolIdI9Uxm = await SpiritCoin2OZ6FQ.transferFrom.call(addressg6UWbxc, addressvaSGZpg, uintzLApinO, {from: "0x0000000000000000000000000000000000000001"});
		const boolW9DVIUm = await SpiritCoin2OZ6FQ.transfer.call(addresskkQYg2w, uintzJ3cbSD, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressQoSvjci = accounts[4]
		const addressp2TY3lf = accounts[1]
		const SpiritCoinyAFrynz = await SpiritCoin.new(addressQoSvjci, addressp2TY3lf, {from: accounts[1]});
		const uintH4z9678 = BigInt("494")
		const addressP9Glwu9 = accounts[1]
		const uintogxcRG = BigInt("1407")
		const addressDfh1quP = accounts[0]
		const uintVzmR1NJ = BigInt("536")
		const addressdw6ZQi1 = accounts[2]
		const uintjclxfLB = BigInt("143")
		const addressfC2vJHm = accounts[1]
		const addressYDQbymY = await SpiritCoinyAFrynz.mint.call(addressP9Glwu9, uintH4z9678, {from: accounts[4]});
		const addresskt4DdaW = await SpiritCoinyAFrynz.mint.call(addressDfh1quP, uintogxcRG, {from: accounts[2]});
		const addressMyW1H4b = await SpiritCoinyAFrynz.mint.call(addressdw6ZQi1, uintVzmR1NJ, {from: accounts[4]});
		const addressYMKNav3 = await SpiritCoinyAFrynz.mint.call(addressfC2vJHm, uintjclxfLB, {from: accounts[4]});

		await expect(SpiritCoinyAFrynz.mint.call(addressP9Glwu9, uintH4z9678, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressOx5VV8 = accounts[5]
		const addressGoqxqN = accounts[0]
		const SpiritCoindZtzzoN = await SpiritCoin.new(addressOx5VV8, addressGoqxqN, {from: accounts[3]});
		const addressnJQTCz1 = accounts[1]
		const addressT80240e = accounts[4]
		const uintVACq7qb = BigInt("634")
		const addressbhj5947 = accounts[3]
		const addressYDUCoQL = accounts[1]
		const addressY5YD2nc = accounts[2]
		const uintR0N913W = await SpiritCoindZtzzoN.allowance.call(addressT80240e, addressnJQTCz1, {from: accounts[2]});
		const boolrIaJG4D = await SpiritCoindZtzzoN.approve.call(addressbhj5947, uintVACq7qb, {from: accounts[2]});
		const uintfqLnZzJ = await SpiritCoindZtzzoN.allowance.call(addressY5YD2nc, addressYDUCoQL, {from: accounts[0]});

		assert.equal(boolrIaJG4D, true)
		assert.equal(uintR0N913W, BigInt("0"))
		assert.equal(uintfqLnZzJ, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressg1ezUI = accounts[1]
		const addresscrbmLz8 = "0x0000000000000000000000000000000000000001"
		const SpiritCoinY1TQFO = await SpiritCoin.new(addressg1ezUI, addresscrbmLz8, {from: accounts[0]});
		const addressQr8VztZ = accounts[3]
		const uintYrgjxKB = BigInt("583")
		const addressc2EUGi2 = accounts[0]
		const addressNxZpRU = accounts[5]
		const uinttk0SJzs = await SpiritCoinY1TQFO.balanceOf.call(addressQr8VztZ, {from: accounts[3]});
		const addressUdNgLOJ = await SpiritCoinY1TQFO.mint.call(addressc2EUGi2, uintYrgjxKB, {from: accounts[1]});
		const addresspX7pNV4 = await SpiritCoinY1TQFO.setMinter.call(addressNxZpRU, {from: accounts[0]});

		assert.equal(uinttk0SJzs, BigInt("0"))
		await expect(SpiritCoinY1TQFO.mint.call(addressc2EUGi2, uintYrgjxKB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressaBHRIyK = accounts[0]
		const addressrI9SwXw = accounts[4]
		const SpiritCoineOeAW54 = await SpiritCoin.new(addressaBHRIyK, addressrI9SwXw, {from: accounts[3]});
		const uintlcT0CZ = BigInt("1500")
		const addressMEa0Jdi = accounts[3]
		const addressJcssDPu = accounts[3]
		const uintojDFkSg = BigInt("1077")
		const addressjJmb6fb = accounts[0]
		const addressSCNDPvI = accounts[4]
		const boolOiLvuNZ = await SpiritCoineOeAW54.transferFrom.call(addressJcssDPu, addressMEa0Jdi, uintlcT0CZ, {from: accounts[5]});
		const boolhQ6Zl5O = await SpiritCoineOeAW54.transferFrom.call(addressSCNDPvI, addressjJmb6fb, uintojDFkSg, {from: accounts[4]});

		await expect(SpiritCoineOeAW54.transferFrom.call(addressJcssDPu, addressMEa0Jdi, uintlcT0CZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressh5hRexZ = accounts[0]
		const addressP5urV0e = accounts[4]
		const SpiritCoinP71MeZ = await SpiritCoin.new(addressh5hRexZ, addressP5urV0e, {from: accounts[1]});
		const addressxinVuYB = accounts[0]
		const addressd06MT22 = accounts[3]
		const addressIpMB3ZW = await SpiritCoinP71MeZ.setMinter.call(addressxinVuYB, {from: accounts[2]});
		const uintwIkkjPF = await SpiritCoinP71MeZ.balanceOf.call(addressd06MT22, {from: accounts[2]});

		await expect(SpiritCoinP71MeZ.setMinter.call(addressxinVuYB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFS23b4u = accounts[1]
		const addressahTgsJH = accounts[4]
		const SpiritCoinEFE0FDq = await SpiritCoin.new(addressFS23b4u, addressahTgsJH, {from: accounts[3]});
		const uintUntaXT = BigInt("357")
		const addresslCjCQmc = accounts[1]
		const uint0Ih43o = BigInt("365")
		const addressL8cEwHn = accounts[4]
		const boolsW3PG7E = await SpiritCoinEFE0FDq.approve.call(addresslCjCQmc, uintUntaXT, {from: accounts[1]});
		const boolOHQbcgt = await SpiritCoinEFE0FDq.transfer.call(addressL8cEwHn, uint0Ih43o, {from: accounts[1]});

		assert.equal(boolOHQbcgt, true)
		assert.equal(boolsW3PG7E, true)
	});

	it('test for SpiritCoin', async () => {
		const addresslQLKhtc = accounts[1]
		const addressUJ11y5 = accounts[4]
		const SpiritCoinEFE0FDq = await SpiritCoin.new(addresslQLKhtc, addressUJ11y5, {from: accounts[3]});
		const uintS16Kfhe = BigInt("339")
		const addresslMZFvVo = accounts[1]
		const uinthy8N5qU = BigInt("365")
		const addressRcUEOer = accounts[4]
		const uintcCealyP = BigInt("1576")
		const addresstps006R = accounts[1]
		const addresshPZMwyz = accounts[1]
		const boolsW3PG7E = await SpiritCoinEFE0FDq.approve.call(addresslMZFvVo, uintS16Kfhe, {from: accounts[1]});
		const boolOHQbcgt = await SpiritCoinEFE0FDq.transfer.call(addressRcUEOer, uinthy8N5qU, {from: accounts[1]});
		const addresspJadBGD = await SpiritCoinEFE0FDq.mint.call(addresstps006R, uintcCealyP, {from: accounts[4]});
		const addresshUjvVsr = await SpiritCoinEFE0FDq.setMinter.call(addresshPZMwyz, {from: accounts[2]});

		assert.equal(boolOHQbcgt, true)
		assert.equal(boolsW3PG7E, true)
		await expect(SpiritCoinEFE0FDq.setMinter.call(addresshPZMwyz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})