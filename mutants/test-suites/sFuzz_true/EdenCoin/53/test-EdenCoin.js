const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinsxek9ja = await EdenCoin.new({from: accounts[0]});
		const uintpzjlXbO = BigInt("691")
		const addressc2rwwOg = accounts[1]
		const addressEBst4to = accounts[0]
		const addressXZdZHT0 = accounts[2]
		const addressYy6X8Yh = accounts[5]
		const boolaPdC5Y2 = await EdenCoinsxek9ja.increaseApproval.call(addressc2rwwOg, uintpzjlXbO, {from: accounts[1]});
		const uint256RIa4Vpj = await EdenCoinsxek9ja.balanceOf.call(addressEBst4to, {from: accounts[0]});
		const uint256r0aa1K = await EdenCoinsxek9ja.allowance.call(addressYy6X8Yh, addressXZdZHT0, {from: accounts[0]});

		assert.equal(boolaPdC5Y2, true)
		assert.equal(uint256RIa4Vpj, BigInt("1000000000000000000000000000"))
		assert.equal(uint256r0aa1K, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinV32vZfq = await EdenCoin.new({from: accounts[2]});
		const addressrSQGw5i = accounts[1]
		const uintrhrLCrb = BigInt("1200")
		const addresstTVK00 = "0x0000000000000000000000000000000000000001"
		const uintO5ufrYD = BigInt("21")
		const addresstxNLYxK = accounts[2]
		const addressYJQVlF = accounts[0]
		const addressfpPV5uM = accounts[4]
		const uint256gXGlVIG = await EdenCoinV32vZfq.balanceOf.call(addressrSQGw5i, {from: accounts[2]});
		const boolWPhoe8e = await EdenCoinV32vZfq.decreaseApproval.call(addresstTVK00, uintrhrLCrb, {from: accounts[4]});
//		const boolskbwMZ = await EdenCoinV32vZfq.transfer.call(addresstxNLYxK, uintO5ufrYD, {from: accounts[3]});
//		const uint256N5XVsEm = await EdenCoinV32vZfq.allowance.call(addressfpPV5uM, addressYJQVlF, {from: accounts[2]});

		assert.equal(boolWPhoe8e, true)
		assert.equal(uint256gXGlVIG, BigInt("0"))
		await expect(EdenCoinV32vZfq.transfer.call(addresstxNLYxK, uintO5ufrYD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinA2f2PZa = await EdenCoin.new({from: accounts[1]});
		const uintgqqaAYD = BigInt("122")
		const addressmsVUKiy = accounts[1]
		const uintPaLWWXd = BigInt("186")
		const addresse1YU8e = accounts[2]
		const addressDxs4Zw = accounts[3]
		const uintty1UJLe = BigInt("1822")
		const addresshcaRnNh = accounts[3]
		const boolKXE1boH = await EdenCoinA2f2PZa.approve.call(addressmsVUKiy, uintgqqaAYD, {from: accounts[2]});
//		const boolzzRXLXH = await EdenCoinA2f2PZa.transferFrom.call(addressDxs4Zw, addresse1YU8e, uintPaLWWXd, {from: accounts[0]});
//		const boolJwEhMn = await EdenCoinA2f2PZa.decreaseApproval.call(addresshcaRnNh, uintty1UJLe, {from: accounts[4]});

		assert.equal(boolKXE1boH, true)
		await expect(EdenCoinA2f2PZa.transferFrom.call(addressDxs4Zw, addresse1YU8e, uintPaLWWXd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinIVcUEfi = await EdenCoin.new({from: accounts[5]});
		const uintbCbbLuu = BigInt("1040")
		const addressJekbtCo = accounts[3]
		const addressdO6Qwxm = accounts[5]
		const uintJtkOIQt = BigInt("1911")
		const addressNBEKan9 = accounts[1]
//		const booluoS8Prx = await EdenCoinIVcUEfi.transferFrom.call(addressdO6Qwxm, addressJekbtCo, uintbCbbLuu, {from: accounts[1]});
//		const boolG5RKjSz = await EdenCoinIVcUEfi.approve.call(addressNBEKan9, uintJtkOIQt, {from: accounts[2]});

		await expect(EdenCoinIVcUEfi.transferFrom.call(addressdO6Qwxm, addressJekbtCo, uintbCbbLuu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinR1IKlAk = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHYIVKv0 = accounts[0]
		const addressZYLlva = accounts[0]
		const uintsJlmpy5 = BigInt("1445")
		const addressVUeKWH = accounts[3]
		const addressDVPMUre = accounts[3]
		const uintrEHlgdK = BigInt("313")
		const addressjXcBRNM = "0x0000000000000000000000000000000000000001"
		const uint256KS4M10k = await EdenCoinR1IKlAk.allowance.call(addressZYLlva, addressHYIVKv0, {from: "0x0000000000000000000000000000000000000001"});
		const boolQJqNtf1 = await EdenCoinR1IKlAk.transferFrom.call(addressDVPMUre, addressVUeKWH, uintsJlmpy5, {from: accounts[5]});
		const boolLmtXulQ = await EdenCoinR1IKlAk.decreaseApproval.call(addressjXcBRNM, uintrEHlgdK, {from: accounts[0]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinq8oHiL8 = await EdenCoin.new({from: accounts[1]});
		const addressDgYWjt = accounts[1]
		const addressjz3nfca = accounts[3]
		const uintDjHAtUW = BigInt("111")
		const addresssotdlxP = accounts[4]
		const uintDsRICrL = BigInt("991")
		const addressdq3Ss2I = accounts[3]
		const uint256bpwNd2U = await EdenCoinq8oHiL8.allowance.call(addressjz3nfca, addressDgYWjt, {from: accounts[2]});
		const boolWt1lhyI = await EdenCoinq8oHiL8.increaseApproval.call(addresssotdlxP, uintDjHAtUW, {from: accounts[1]});
		const boolf9EoGnK = await EdenCoinq8oHiL8.transfer.call(addressdq3Ss2I, uintDsRICrL, {from: accounts[1]});

		assert.equal(boolWt1lhyI, true)
		assert.equal(boolf9EoGnK, true)
		assert.equal(uint256bpwNd2U, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinIVcUEfi = await EdenCoin.new({from: accounts[5]});
		const addressSJCYZUo = accounts[4]
		const uintnJbOgW7 = BigInt("1376")
		const addressn9WvZ4v = accounts[4]
		const uintVJRbuM0 = BigInt("592")
		const addressBXBP47l = accounts[3]
		const uinth2sbWUM = BigInt("0")
		const addressj6b3pzg = accounts[4]
		const uint256NLF8zSl = await EdenCoinIVcUEfi.balanceOf.call(addressSJCYZUo, {from: "0x0000000000000000000000000000000000000001"});
		const boolknETjF1 = await EdenCoinIVcUEfi.approve.call(addressn9WvZ4v, uintnJbOgW7, {from: accounts[1]});
		const boolf7tbfNO = await EdenCoinIVcUEfi.increaseApproval.call(addressBXBP47l, uintVJRbuM0, {from: accounts[3]});
		const boolZJaL4ra = await EdenCoinIVcUEfi.decreaseApproval.call(addressj6b3pzg, uinth2sbWUM, {from: accounts[3]});

		assert.equal(boolZJaL4ra, true)
		assert.equal(boolf7tbfNO, true)
		assert.equal(boolknETjF1, true)
		assert.equal(uint256NLF8zSl, BigInt("0"))
	});
})