const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTz1yT1LT = await PACT.new({from: accounts[1]});
		const addressFcGIawb = accounts[4]
		const addresszOAtRKU = accounts[3]
		const addresstnWmww6 = accounts[1]
		const addressS0y8BGT = "0x0000000000000000000000000000000000000001"
		const boolX8ZZ2Ys = await PACTz1yT1LT.setupBasePool.call(addressFcGIawb, {from: accounts[4]});
		const uintadGfKsc = await PACTz1yT1LT.balanceOf.call(addresszOAtRKU, {from: "0x0000000000000000000000000000000000000001"});
		const boolQWjkDkC = await PACTz1yT1LT.setupRewards.call(addresstnWmww6, {from: accounts[4]});
		const uintdmwqpXI = await PACTz1yT1LT.balanceOf.call(addressS0y8BGT, {from: accounts[4]});

		await expect(PACTz1yT1LT.setupBasePool.call(addressFcGIawb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLegVQS = await PACT.new({from: accounts[5]});
		const addressjO7O33G = accounts[1]
		const uintSSYSHkf = BigInt("1230")
		const addressmjTN1B = accounts[2]
		const addressHrSp8y4 = accounts[2]
		const uintimjc97O = await PACTLegVQS.totalSupply.call({from: accounts[5]});
		const uintxhgtJBV = await PACTLegVQS.balanceOf.call(addressjO7O33G, {from: accounts[1]});
		const boolprAo35v = await PACTLegVQS.burn.call(addressmjTN1B, uintSSYSHkf, {from: accounts[2]});
		const uintjtAamv3 = await PACTLegVQS.balanceOf.call(addressHrSp8y4, {from: accounts[4]});

		assert.equal(uintimjc97O, BigInt("1000000000000000000000000000"))
		assert.equal(uintxhgtJBV, BigInt("0"))
		await expect(PACTLegVQS.burn.call(addressmjTN1B, uintSSYSHkf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMEXK8zv = await PACT.new({from: accounts[4]});
		const addressoegrexG = accounts[0]
		const addressnmelTN = accounts[3]
		const addressCyUz3ei = accounts[3]
		const boolQwv8b7d = await PACTMEXK8zv.setupFarming.call(addressoegrexG, {from: accounts[5]});
		const boolyC0QMcC = await PACTMEXK8zv.setupReserve.call(addressnmelTN, {from: accounts[0]});
		const uintMeVghtb = await PACTMEXK8zv.balanceOf.call(addressCyUz3ei, {from: accounts[1]});

		await expect(PACTMEXK8zv.setupFarming.call(addressoegrexG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTm2PZvS = await PACT.new({from: accounts[1]});
		const addressAefJ14j = accounts[1]
		const addresssQWYz4 = accounts[4]
		const uintfnZ8Kj = BigInt("98")
		const addressyKMR25Z = accounts[3]
		const addressdZyqj6r = accounts[4]
		const boolXAsKN6G = await PACTm2PZvS.setupRewards.call(addressAefJ14j, {from: accounts[0]});
		const boolaGAd5J = await PACTm2PZvS.setupRewards.call(addresssQWYz4, {from: accounts[4]});
		const boolz87vxKe = await PACTm2PZvS.transferFrom.call(addressdZyqj6r, addressyKMR25Z, uintfnZ8Kj, {from: accounts[4]});

		await expect(PACTm2PZvS.setupRewards.call(addressAefJ14j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTks8ougS = await PACT.new({from: accounts[2]});
		const addressForlpo6 = accounts[3]
		const addressMwbMjb3 = accounts[4]
		const boolJzdK6Kw = await PACTks8ougS.setupTeam.call(addressForlpo6, {from: accounts[3]});
		const boolj5M3EN0 = await PACTks8ougS.setupTeam.call(addressMwbMjb3, {from: accounts[3]});
		const uintvTnNVee = await PACTks8ougS.totalSupply.call({from: accounts[1]});

		await expect(PACTks8ougS.setupTeam.call(addressForlpo6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTv4BlF21 = await PACT.new({from: accounts[2]});
		const addressQkc73II = accounts[2]
		const stringiqUTdTZ = await PACTv4BlF21.name.call({from: accounts[1]});
		const uintTeyRwWc = await PACTv4BlF21.balanceOf.call(addressQkc73II, {from: accounts[2]});

		assert.equal(stringiqUTdTZ, "P2PB2B community token")
		assert.equal(uintTeyRwWc, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTI3xjT5M = await PACT.new({from: accounts[4]});
		const uintjpRb0a9 = BigInt("292")
		const addressMqBa3M = accounts[3]
		const addressGbKXexi = accounts[2]
		const addressloWMki = accounts[0]
		const addressdmDevQd = accounts[2]
		const boolA8OCGf0 = await PACTI3xjT5M.transferFrom.call(addressGbKXexi, addressMqBa3M, uintjpRb0a9, {from: accounts[5]});
		const boolHskdDFW = await PACTI3xjT5M.setupReserve.call(addressloWMki, {from: accounts[1]});
		const boolz5VWVok = await PACTI3xjT5M.setupReserve.call(addressdmDevQd, {from: accounts[5]});
		const stringVqQD0xN = await PACTI3xjT5M.name.call({from: accounts[1]});

		await expect(PACTI3xjT5M.transferFrom.call(addressGbKXexi, addressMqBa3M, uintjpRb0a9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLegVQS = await PACT.new({from: accounts[5]});
		const addresszMR9wt = accounts[2]
		const uintD5e1cQw = BigInt("380")
		const addressJ3jjr6q = accounts[1]
		const uintcUFrPzP = BigInt("1230")
		const address39gqOe = accounts[2]
		const uintimjc97O = await PACTLegVQS.totalSupply.call({from: accounts[5]});
		const uintxhgtJBV = await PACTLegVQS.balanceOf.call(addresszMR9wt, {from: accounts[1]});
		const booljvRD3VX = await PACTLegVQS.approve.call(addressJ3jjr6q, uintD5e1cQw, {from: accounts[3]});
		const stringw8TL11d = await PACTLegVQS.name.call({from: accounts[0]});
		const boolprAo35v = await PACTLegVQS.burn.call(address39gqOe, uintcUFrPzP, {from: accounts[2]});

		assert.equal(booljvRD3VX, true)
		assert.equal(stringw8TL11d, "P2PB2B community token")
		assert.equal(uintimjc97O, BigInt("1000000000000000000000000000"))
		assert.equal(uintxhgtJBV, BigInt("0"))
		await expect(PACTLegVQS.burn.call(address39gqOe, uintcUFrPzP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLegVQS = await PACT.new({from: accounts[5]});
		const addressEXyKH4J = accounts[1]
		const addressnMJNoI = accounts[4]
		const addresspRaCB0 = accounts[1]
		const uintITYFhuR = BigInt("1230")
		const addressTl9oY9e = accounts[3]
		const addressePHyG3P = accounts[5]
		const addresstnETUBW = accounts[1]
		const addressT3Y2k8H = accounts[2]
		const uintimjc97O = await PACTLegVQS.totalSupply.call({from: accounts[5]});
		const uintGjLmI9 = await PACTLegVQS.allowance.call(addressnMJNoI, addressEXyKH4J, {from: accounts[0]});
		const uintxhgtJBV = await PACTLegVQS.balanceOf.call(addresspRaCB0, {from: accounts[1]});
		const boolprAo35v = await PACTLegVQS.burn.call(addressTl9oY9e, uintITYFhuR, {from: accounts[2]});
		const uintN0U6uKf = await PACTLegVQS.allowance.call(addresstnETUBW, addressePHyG3P, {from: accounts[4]});
		const uintjtAamv3 = await PACTLegVQS.balanceOf.call(addressT3Y2k8H, {from: accounts[4]});

		assert.equal(uintGjLmI9, BigInt("0"))
		assert.equal(uintimjc97O, BigInt("1000000000000000000000000000"))
		assert.equal(uintxhgtJBV, BigInt("0"))
		await expect(PACTLegVQS.burn.call(addressTl9oY9e, uintITYFhuR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTz1yT1LT = await PACT.new({from: accounts[1]});
		const uintp6fP6vu = BigInt("698")
		const addressjpTxEm = "0x0000000000000000000000000000000000000001"
		const addressGf6JLV = accounts[2]
		const addressheyHWjw = accounts[5]
		const addressGfpUJjL = accounts[3]
		const addressF6odXW = accounts[1]
		const addressBW0FSX = "0x0000000000000000000000000000000000000001"
		const uint8Hh3xFS9 = await PACTz1yT1LT.decimals.call({from: accounts[1]});
		const boolSfvxOiM = await PACTz1yT1LT.transferFrom.call(addressGf6JLV, addressjpTxEm, uintp6fP6vu, {from: accounts[0]});
		const boolX8ZZ2Ys = await PACTz1yT1LT.setupBasePool.call(addressheyHWjw, {from: accounts[4]});
		const uintadGfKsc = await PACTz1yT1LT.balanceOf.call(addressGfpUJjL, {from: "0x0000000000000000000000000000000000000001"});
		const boolQWjkDkC = await PACTz1yT1LT.setupRewards.call(addressF6odXW, {from: accounts[4]});
		const uintdmwqpXI = await PACTz1yT1LT.balanceOf.call(addressBW0FSX, {from: accounts[4]});

		assert.equal(uint8Hh3xFS9, BigInt("18"))
		await expect(PACTz1yT1LT.transferFrom.call(addressGf6JLV, addressjpTxEm, uintp6fP6vu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMEXK8zv = await PACT.new({from: accounts[4]});
		const addressAhDzZ7 = "0x0000000000000000000000000000000000000001"
		const addressp4IyH7 = accounts[0]
		const uintfzJD1Hg = BigInt("1681")
		const addressUCQgg6L = accounts[3]
		const addressD1slGGK = accounts[4]
		const addresslEfo8Dt = accounts[3]
		const addressrTSBDNM = accounts[4]
		const boolpXIdrE = await PACTMEXK8zv.setupReserve.call(addressAhDzZ7, {from: accounts[0]});
		const boolQwv8b7d = await PACTMEXK8zv.setupFarming.call(addressp4IyH7, {from: accounts[5]});
		const boolktPFwPf = await PACTMEXK8zv.approve.call(addressUCQgg6L, uintfzJD1Hg, {from: accounts[0]});
		const boolkdn9j2P = await PACTMEXK8zv.setupRewards.call(addressD1slGGK, {from: accounts[4]});
		const boolyC0QMcC = await PACTMEXK8zv.setupReserve.call(addresslEfo8Dt, {from: accounts[0]});
		const uintMeVghtb = await PACTMEXK8zv.balanceOf.call(addressrTSBDNM, {from: accounts[1]});

		await expect(PACTMEXK8zv.setupReserve.call(addressAhDzZ7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTF8t4hNy = await PACT.new({from: accounts[3]});
		const addressieVhBx = accounts[1]
		const uintD4Jr0xB = BigInt("1614")
		const addressGpSb15Z = accounts[5]
		const stringv7FKveW = await PACTF8t4hNy.name.call({from: accounts[3]});
		const uint8xllygH = await PACTF8t4hNy.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uintFVZop6s = await PACTF8t4hNy.balanceOf.call(addressieVhBx, {from: accounts[5]});
		const boolvF1DF4 = await PACTF8t4hNy.transfer.call(addressGpSb15Z, uintD4Jr0xB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringv7FKveW, "P2PB2B community token")
		assert.equal(uint8xllygH, BigInt("18"))
		assert.equal(uintFVZop6s, BigInt("0"))
		await expect(PACTF8t4hNy.transfer.call(addressGpSb15Z, uintD4Jr0xB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACToE6q0u = await PACT.new({from: accounts[0]});
		const addressfDvujAO = accounts[2]
		const stringP3RjBQQ = await PACToE6q0u.symbol.call({from: accounts[1]});
		const boolTcSbFxc = await PACToE6q0u.setupBasePool.call(addressfDvujAO, {from: accounts[2]});
		const uintlB5kNC6 = await PACToE6q0u.totalSupply.call({from: accounts[4]});

		assert.equal(stringP3RjBQQ, "PACT")
		await expect(PACToE6q0u.setupBasePool.call(addressfDvujAO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGjksmWx = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressj9rD5Y9 = accounts[1]
		const addressCVkuL8P = accounts[2]
		const addressnqPZJ7 = accounts[4]
		const addressLK9OGL2 = accounts[5]
		const uintKFWxT5E = await PACTGjksmWx.allowance.call(addressCVkuL8P, addressj9rD5Y9, {from: accounts[3]});
		const uinti1bkuNd = await PACTGjksmWx.totalSupply.call({from: accounts[3]});
		const boolrq2IzdO = await PACTGjksmWx.setupFarming.call(addressnqPZJ7, {from: accounts[0]});
		const boolK33J0pS = await PACTGjksmWx.setupTeam.call(addressLK9OGL2, {from: accounts[1]});
	});
})