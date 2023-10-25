const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITakndxQ = await RIT.new({from: accounts[5]});
		const uintm0SfQ7d = BigInt("232")
		const addressHsWjcDd = accounts[4]
//		const boolSEIrusG = await RITakndxQ.decreaseAllowance.call(addressHsWjcDd, uintm0SfQ7d, {from: accounts[4]});
//		const stringHBUX4Qq = await RITakndxQ.symbol.call({from: accounts[3]});

		await expect(RITakndxQ.decreaseAllowance.call(addressHsWjcDd, uintm0SfQ7d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITjKN52VP = await RIT.new({from: accounts[5]});
		const uintdJ59vgJ = BigInt("899")
		const addressuFUXA3W = accounts[4]
		const addresssXrMsQ6 = accounts[2]
		const addressLGbeUqC = accounts[1]
		const addresso3OpqIy = accounts[1]
		const addressSjKiHNa = accounts[0]
		const uintJiqxKr = BigInt("92")
		const addresssXTCxFt = accounts[1]
		const uintijHkF1s = BigInt("956")
		const addressBun5002 = accounts[1]
//		const boolu80jNr1 = await RITjKN52VP.transferFrom.call(addresssXrMsQ6, addressuFUXA3W, uintdJ59vgJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256C5j3R2r = await RITjKN52VP.balanceOf.call(addressLGbeUqC, {from: accounts[3]});
//		const uint256NskonxT = await RITjKN52VP.allowance.call(addressSjKiHNa, addresso3OpqIy, {from: accounts[1]});
//		const bool6VJoJa = await RITjKN52VP.increaseAllowance.call(addresssXTCxFt, uintJiqxKr, {from: accounts[4]});
//		const uint256FZZGcLL = await RITjKN52VP._burn.call(uintijHkF1s, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256towCN0k = await RITjKN52VP.balanceOf.call(addressBun5002, {from: accounts[1]});

		await expect(RITjKN52VP.transferFrom.call(addresssXrMsQ6, addressuFUXA3W, uintdJ59vgJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITE8hKAgT = await RIT.new({from: accounts[5]});
		const addresstrzyw3J = accounts[5]
		const uintlqSwUbQ = BigInt("1417")
		const addressvabmPjt = "0x0000000000000000000000000000000000000001"
		const stringqKzcqOh = await RITE8hKAgT.name.call({from: accounts[3]});
		const uint256T2xfqvG = await RITE8hKAgT.balanceOf.call(addresstrzyw3J, {from: accounts[0]});
		const bool4XEz8K = await RITE8hKAgT.increaseAllowance.call(addressvabmPjt, uintlqSwUbQ, {from: accounts[4]});

		assert.equal(bool4XEz8K, true)
		assert.equal(stringqKzcqOh, "Real Estate Investment Token")
		assert.equal(uint256T2xfqvG, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITLI8vtHa = await RIT.new({from: accounts[4]});
		const uintcqQfX79 = BigInt("633")
		const addressK8o1GgG = accounts[2]
		const uintmoZSrLO = BigInt("1986")
		const addressLwIrsqe = accounts[0]
		const address0OCX4m = accounts[5]
//		const boolqr0csgN = await RITLI8vtHa.transfer.call(addressK8o1GgG, uintcqQfX79, {from: accounts[4]});
//		const bool4EhyFL = await RITLI8vtHa.transferFrom.call(address0OCX4m, addressLwIrsqe, uintmoZSrLO, {from: accounts[1]});
//		const stringA2Ua5DI = await RITLI8vtHa.name.call({from: accounts[2]});

		await expect(RITLI8vtHa.transfer.call(addressK8o1GgG, uintcqQfX79, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfJt5ti0 = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZ254xk = BigInt("1773")
		const address0QJ3Ma = accounts[0]
		const uintTIg0EiH = BigInt("33")
		const addressMoKTaFY = accounts[4]
		const boolzwB9YjE = await RITfJt5ti0.increaseAllowance.call(address0QJ3Ma, uintZ254xk, {from: accounts[3]});
		const boolxLT9ktp = await RITfJt5ti0.increaseAllowance.call(addressMoKTaFY, uintTIg0EiH, {from: accounts[3]});
		const stringEGDp9sh = await RITfJt5ti0.name.call({from: accounts[3]});
	});

	it('test for RIT', async () => {
		const RITklQ8rUC = await RIT.new({from: accounts[1]});
		const addressDsuFf4Z = accounts[4]
		const addressqObpE6 = accounts[4]
		const uintzkPpDUY = BigInt("526")
		const addressRBuS6R3 = accounts[2]
		const uintYeUZV3s = BigInt("1515")
		const addressxLlpdMy = "0x0000000000000000000000000000000000000001"
		const addressltrk51G = accounts[1]
		const addressgLII1JS = accounts[1]
		const uint2560cqsy5 = await RITklQ8rUC.allowance.call(addressqObpE6, addressDsuFf4Z, {from: accounts[2]});
//		const bool2xGoMv = await RITklQ8rUC.decreaseAllowance.call(addressRBuS6R3, uintzkPpDUY, {from: accounts[3]});
//		const bool47pjOp = await RITklQ8rUC.approve.call(addressxLlpdMy, uintYeUZV3s, {from: accounts[1]});
//		const uint256BnttkLr = await RITklQ8rUC.totalSupply.call({from: accounts[1]});
//		const uint256fEsv1ja = await RITklQ8rUC.allowance.call(addressgLII1JS, addressltrk51G, {from: accounts[2]});
//		const uint256kRAsr1 = await RITklQ8rUC.totalSupply.call({from: accounts[2]});

		assert.equal(uint2560cqsy5, BigInt("0"))
		await expect(RITklQ8rUC.decreaseAllowance.call(addressRBuS6R3, uintzkPpDUY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITo1uxX9j = await RIT.new({from: accounts[3]});
		const uintnZuYpd0 = BigInt("1327")
		const addresslRIF92 = accounts[1]
		const uinty7DXn5P = BigInt("818")
		const uint8XoIcdpI = await RITo1uxX9j.decimals.call({from: accounts[1]});
//		const boolvLzOuO3 = await RITo1uxX9j.transfer.call(addresslRIF92, uintnZuYpd0, {from: accounts[2]});
//		const uint256JRm1aKb = await RITo1uxX9j._burn.call(uinty7DXn5P, {from: accounts[3]});

		assert.equal(uint8XoIcdpI, BigInt("18"))
		await expect(RITo1uxX9j.transfer.call(addresslRIF92, uintnZuYpd0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITasvOi3l = await RIT.new({from: accounts[4]});
		const uintDZvSvsm = BigInt("944")
		const addressmlO1pCR = accounts[3]
		const uintyiUCHMJ = BigInt("432")
		const addressKuf5Oqu = accounts[3]
		const boolHWesVLf = await RITasvOi3l.increaseAllowance.call(addressmlO1pCR, uintDZvSvsm, {from: accounts[1]});
		const boolAlJuigV = await RITasvOi3l.approve.call(addressKuf5Oqu, uintyiUCHMJ, {from: accounts[3]});

		assert.equal(boolAlJuigV, true)
		assert.equal(boolHWesVLf, true)
	});

	it('test for RIT', async () => {
		const RITbeVfq9f = await RIT.new({from: accounts[4]});
		const addressVuGa6Zc = accounts[4]
		const addressvwdrRhH = "0x0000000000000000000000000000000000000001"
		const addressFTbmJnL = accounts[2]
		const uint256csCcOWN = await RITbeVfq9f.allowance.call(addressvwdrRhH, addressVuGa6Zc, {from: accounts[2]});
		const uint256QzO8lYO = await RITbeVfq9f.balanceOf.call(addressFTbmJnL, {from: "0x0000000000000000000000000000000000000001"});
		const stringTv3PJM7 = await RITbeVfq9f.symbol.call({from: accounts[1]});

		assert.equal(stringTv3PJM7, "RIT 2.0")
		assert.equal(uint256QzO8lYO, BigInt("0"))
		assert.equal(uint256csCcOWN, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITklQ8rUC = await RIT.new({from: accounts[1]});
		const address4zAwRn = accounts[4]
		const addressuXzThxa = accounts[4]
		const uintBT8mR9f = BigInt("1515")
		const addressgQG7FR = "0x0000000000000000000000000000000000000001"
		const addressnH7IaXl = accounts[1]
		const addresshfydyOd = accounts[1]
		const uint2560cqsy5 = await RITklQ8rUC.allowance.call(addressuXzThxa, address4zAwRn, {from: accounts[2]});
		const bool47pjOp = await RITklQ8rUC.approve.call(addressgQG7FR, uintBT8mR9f, {from: accounts[1]});
		const uint256BnttkLr = await RITklQ8rUC.totalSupply.call({from: accounts[1]});
		const uint256fEsv1ja = await RITklQ8rUC.allowance.call(addresshfydyOd, addressnH7IaXl, {from: accounts[2]});
		const uint256kRAsr1 = await RITklQ8rUC.totalSupply.call({from: accounts[2]});

		assert.equal(bool47pjOp, true)
		assert.equal(uint2560cqsy5, BigInt("0"))
		assert.equal(uint256BnttkLr, BigInt("500000000000000000000000000"))
		assert.equal(uint256fEsv1ja, BigInt("0"))
		assert.equal(uint256kRAsr1, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITjKN52VP = await RIT.new({from: accounts[5]});
		const uintfxEas0 = BigInt("250")
		const uintaYiZtC = BigInt("899")
		const addresso0Mvhkh = accounts[4]
		const addressuHlOf7g = accounts[2]
		const addressWHP9TE = accounts[1]
		const addresssyQCgcm = accounts[1]
		const addressOJvXLY = accounts[0]
		const uintSlRszJY = BigInt("92")
		const addressRp014vh = accounts[1]
		const uintnztby2 = BigInt("956")
		const addressNZ3LvA = accounts[1]
//		const uint256luRnZPr = await RITjKN52VP._burn.call(uintfxEas0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolu80jNr1 = await RITjKN52VP.transferFrom.call(addressuHlOf7g, addresso0Mvhkh, uintaYiZtC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256C5j3R2r = await RITjKN52VP.balanceOf.call(addressWHP9TE, {from: accounts[3]});
//		const uint256NskonxT = await RITjKN52VP.allowance.call(addressOJvXLY, addresssyQCgcm, {from: accounts[1]});
//		const bool6VJoJa = await RITjKN52VP.increaseAllowance.call(addressRp014vh, uintSlRszJY, {from: accounts[4]});
//		const uint256FZZGcLL = await RITjKN52VP._burn.call(uintnztby2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256towCN0k = await RITjKN52VP.balanceOf.call(addressNZ3LvA, {from: accounts[1]});

		await expect(RITjKN52VP._burn.call(uintfxEas0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITE8hKAgT = await RIT.new({from: accounts[5]});
		const uintk4OTPOL = BigInt("1417")
		const addressTqZRtrY = "0x0000000000000000000000000000000000000000"
		const stringqKzcqOh = await RITE8hKAgT.name.call({from: accounts[3]});
//		const bool4XEz8K = await RITE8hKAgT.increaseAllowance.call(addressTqZRtrY, uintk4OTPOL, {from: accounts[4]});

		assert.equal(stringqKzcqOh, "Real Estate Investment Token")
		await expect(RITE8hKAgT.increaseAllowance.call(addressTqZRtrY, uintk4OTPOL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})