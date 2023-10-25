const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnRTr0eij = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uint0lfwwu = BigInt("1507")
		const uint0nTYLV = BigInt("719")
		const addressG58Snz4 = accounts[3]
		const uint8QUXPIHT = await WeedburnRTr0eij.decimals.call({from: accounts[0]});
		await WeedburnRTr0eij.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256i1KqoVT = await WeedburnRTr0eij.burn.call(uint0lfwwu, {from: accounts[3]});
		await WeedburnRTr0eij.enableDevMode.call({from: accounts[0]});
		const boolRH1OBMK = await WeedburnRTr0eij.transfer.call(addressG58Snz4, uint0nTYLV, {from: accounts[3]});
		const uint8HjAfVUd = await WeedburnRTr0eij.decimals.call({from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnU3beAcB = await Weedburn.new({from: accounts[5]});
		const addressN91To8N = accounts[4]
		const uintpmiWuqD = BigInt("1719")
		const addressfXdm9Yk = accounts[2]
		const uintFGRNI2A = BigInt("2019")
		const addresse0NTZVa = accounts[1]
		const uint256y33PZJh = await WeedburnU3beAcB.balanceOf.call(addressN91To8N, {from: accounts[1]});
		const bool99h8Bj = await WeedburnU3beAcB.approve.call(addressfXdm9Yk, uintpmiWuqD, {from: accounts[0]});
		const addressWqOITU = await WeedburnU3beAcB.burnFrom.call(addresse0NTZVa, uintFGRNI2A, {from: accounts[0]});
		const uint256JkX9B8 = await WeedburnU3beAcB.totalSupply.call({from: accounts[5]});

		assert.equal(bool99h8Bj, true)
		assert.equal(uint256y33PZJh, BigInt("0"))
		await expect(WeedburnU3beAcB.burnFrom.call(addresse0NTZVa, uintFGRNI2A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnL1R7kvz = await Weedburn.new({from: accounts[2]});
		const addressrGenXoL = accounts[0]
		const addresskeq2Tn3 = accounts[3]
		const uintIZOBvL8 = BigInt("1496")
		const addressgqNT4W = accounts[2]
		await WeedburnL1R7kvz.enableDevMode.call({from: accounts[1]});
		const uint256grBbPtf = await WeedburnL1R7kvz.allowance.call(addresskeq2Tn3, addressrGenXoL, {from: accounts[3]});
		await WeedburnL1R7kvz.disableDevMode.call({from: accounts[0]});
		const bool9Fp6pI = await WeedburnL1R7kvz.approve.call(addressgqNT4W, uintIZOBvL8, {from: accounts[1]});

		await expect(WeedburnL1R7kvz.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxVnGV24 = await Weedburn.new({from: accounts[3]});
		const stringMf2cv8j = await WeedburnxVnGV24.name.call({from: accounts[2]});
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[3]});

		assert.equal(stringMf2cv8j, "t.me/burnweed1")
		await expect(WeedburnxVnGV24.disableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnaRveUlv = await Weedburn.new({from: accounts[3]});
		const uintVg5rcHl = BigInt("1817")
		const addressfC5dk4L = accounts[2]
		const uintDHVtWdm = BigInt("862")
		const addresspwSWEdj = accounts[5]
		const boolzgVCrQy = await WeedburnaRveUlv.decreaseAllowance.call(addressfC5dk4L, uintVg5rcHl, {from: accounts[4]});
		const stringfoebga = await WeedburnaRveUlv.symbol.call({from: accounts[2]});
		const boolAzRG7Sv = await WeedburnaRveUlv.decreaseAllowance.call(addresspwSWEdj, uintDHVtWdm, {from: accounts[1]});

		await expect(WeedburnaRveUlv.decreaseAllowance.call(addressfC5dk4L, uintVg5rcHl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqvCqJ4 = await Weedburn.new({from: accounts[0]});
		const uintr7dsHjl = BigInt("199")
		const addressshYfvgy = accounts[5]
		const uintwYZW9Am = BigInt("2020")
		const address5WqgpI = accounts[2]
		const boolR7SaaiY = await WeedburnqvCqJ4.transfer.call(addressshYfvgy, uintr7dsHjl, {from: "0x0000000000000000000000000000000000000001"});
		const boolKJCugM = await WeedburnqvCqJ4.transfer.call(address5WqgpI, uintwYZW9Am, {from: accounts[1]});
		await WeedburnqvCqJ4.disableDevMode.call({from: accounts[1]});
		const stringLyr40dv = await WeedburnqvCqJ4.symbol.call({from: accounts[2]});

		await expect(WeedburnqvCqJ4.transfer.call(addressshYfvgy, uintr7dsHjl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringTG5ay0Q = "0"
		const stringttycBm = "9BuerTPk0mHzDbCX1juq6BLjRwLv49QXgioLHUvr4EUQV8BuPd7w1DOjSFp"
		const uintAh7FjJ = BigInt("10")
		const WeedburnvFVfUlZ = await Weedburn.new(stringTG5ay0Q, stringttycBm, uintAh7FjJ, {from: accounts[3]});
		const addresszpyQ4Cp = accounts[2]
		const uintazJ0mI = BigInt("478")
		const addresswMWmV85 = accounts[2]
		const uintybWquQ4 = BigInt("6")
		const addressfUjzPjS = accounts[4]
		const uintkn4OtGW = BigInt("1976")
		const addresssvWUhuh = accounts[2]
		const uint256XqeXJER = await WeedburnvFVfUlZ.balanceOf.call(addresszpyQ4Cp, {from: accounts[1]});
		const boold3REp0O = await WeedburnvFVfUlZ.increaseAllowance.call(addresswMWmV85, uintazJ0mI, {from: accounts[3]});
		const boolHwvV9DB = await WeedburnvFVfUlZ.transfer.call(addressfUjzPjS, uintybWquQ4, {from: accounts[0]});
		const booliKwYvk9 = await WeedburnvFVfUlZ.decreaseAllowance.call(addresssvWUhuh, uintkn4OtGW, {from: "0x0000000000000000000000000000000000000001"});
		const uint8pTRJlWG = await WeedburnvFVfUlZ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const WeedburnqvCqJ4 = await Weedburn.new({from: accounts[0]});
		const uintKlNgM6O = BigInt("218")
		const addressGHmnMEk = accounts[5]
		const uintDy0hbJF = BigInt("2020")
		const addressf11Q6dg = accounts[2]
		const uintsoiyhQM = BigInt("1969")
		const addressbhAeA7i = "0x0000000000000000000000000000000000000001"
		await WeedburnqvCqJ4.enableLimitMode.call({from: accounts[3]});
		const boolR7SaaiY = await WeedburnqvCqJ4.transfer.call(addressGHmnMEk, uintKlNgM6O, {from: "0x0000000000000000000000000000000000000001"});
		const boolKJCugM = await WeedburnqvCqJ4.transfer.call(addressf11Q6dg, uintDy0hbJF, {from: accounts[1]});
		await WeedburnqvCqJ4.disableDevMode.call({from: accounts[1]});
		const stringLyr40dv = await WeedburnqvCqJ4.symbol.call({from: accounts[2]});
		const boolwSJtke4 = await WeedburnqvCqJ4.transfer.call(addressbhAeA7i, uintsoiyhQM, {from: accounts[4]});

		await expect(WeedburnqvCqJ4.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqvCqJ4 = await Weedburn.new({from: accounts[0]});
		const uintZm54sFW = BigInt("186")
		const addressR3ZBjJO = accounts[2]
		const uintUnB8iJP = BigInt("199")
		const addressG722tWx = accounts[5]
		const uintNQtA0UN = BigInt("1908")
		const addressHpOhuF = "0x0000000000000000000000000000000000000001"
		const addressqq8goYb = accounts[2]
		const boolbkX0Si = await WeedburnqvCqJ4.increaseAllowance.call(addressR3ZBjJO, uintZm54sFW, {from: accounts[1]});
		const boolR7SaaiY = await WeedburnqvCqJ4.transfer.call(addressG722tWx, uintUnB8iJP, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnqvCqJ4.disableDevMode.call({from: accounts[1]});
		const booluD1d9Y6 = await WeedburnqvCqJ4.transferFrom.call(addressqq8goYb, addressHpOhuF, uintNQtA0UN, {from: accounts[1]});
		const stringLyr40dv = await WeedburnqvCqJ4.symbol.call({from: accounts[2]});

		assert.equal(boolbkX0Si, true)
		await expect(WeedburnqvCqJ4.transfer.call(addressG722tWx, uintUnB8iJP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqvCqJ4 = await Weedburn.new({from: accounts[0]});
		const uintMgbYEfZ = BigInt("486")
		const addresseAfMti5 = accounts[3]
		const addressBntuxB = accounts[3]
		const uintVwEmOiM = BigInt("199")
		const addressPTeefp = accounts[5]
		const uintijScp5z = BigInt("2015")
		const addressZWK2Pev = accounts[2]
		const stringBjsUct = await WeedburnqvCqJ4.name.call({from: accounts[3]});
		const bool8eFJre = await WeedburnqvCqJ4.transferFrom.call(addressBntuxB, addresseAfMti5, uintMgbYEfZ, {from: accounts[4]});
		const boolR7SaaiY = await WeedburnqvCqJ4.transfer.call(addressPTeefp, uintVwEmOiM, {from: "0x0000000000000000000000000000000000000001"});
		const boolKJCugM = await WeedburnqvCqJ4.transfer.call(addressZWK2Pev, uintijScp5z, {from: accounts[1]});
		await WeedburnqvCqJ4.disableDevMode.call({from: accounts[1]});
		const stringLyr40dv = await WeedburnqvCqJ4.symbol.call({from: accounts[2]});

		assert.equal(stringBjsUct, "t.me/burnweed1")
		await expect(WeedburnqvCqJ4.transferFrom.call(addressBntuxB, addresseAfMti5, uintMgbYEfZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxVnGV24 = await Weedburn.new({from: accounts[3]});
		const uintYHMX8hs = BigInt("551")
		const uint256gr1Bg23 = await WeedburnxVnGV24.burn.call(uintYHMX8hs, {from: accounts[3]});
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[2]});
		const stringMf2cv8j = await WeedburnxVnGV24.name.call({from: accounts[2]});
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[3]});

		await expect(WeedburnxVnGV24.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnv8LsBX = await Weedburn.new({from: accounts[5]});
		const addressAXZSnu = accounts[3]
		const addresssZOjXKk = accounts[5]
		const uint256nicpqVw = await Weedburnv8LsBX.allowance.call(addresssZOjXKk, addressAXZSnu, {from: accounts[0]});
		const uint8OupEkfq = await Weedburnv8LsBX.decimals.call({from: accounts[1]});
		await Weedburnv8LsBX.disableDevMode.call({from: accounts[5]});

		assert.equal(uint256nicpqVw, BigInt("0"))
		assert.equal(uint8OupEkfq, BigInt("18"))
		await expect(Weedburnv8LsBX.disableDevMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnmzeILd = await Weedburn.new({from: accounts[1]});
		const uintAa4QHuZ = BigInt("959")
		const addressP3n2zTj = accounts[3]
		const addressBKzDVC4 = accounts[1]
		const uintZYIsp0 = BigInt("1620")
		const addresseLUjQN8 = accounts[3]
		const uint9GWun1 = BigInt("353")
		const addressvIdduFL = accounts[1]
		const addressdhMZvAL = accounts[4]
		const booloTgXuhV = await WeedburnmzeILd.transferFrom.call(addressBKzDVC4, addressP3n2zTj, uintAa4QHuZ, {from: accounts[3]});
		const addressYw49c5N = await WeedburnmzeILd.burnFrom.call(addresseLUjQN8, uintZYIsp0, {from: accounts[1]});
		const boolpSHpeaY = await WeedburnmzeILd.increaseAllowance.call(addressvIdduFL, uint9GWun1, {from: accounts[0]});
		const uint256YzhCT3C = await WeedburnmzeILd.balanceOf.call(addressdhMZvAL, {from: accounts[4]});

		await expect(WeedburnmzeILd.transferFrom.call(addressBKzDVC4, addressP3n2zTj, uintAa4QHuZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxVnGV24 = await Weedburn.new({from: accounts[3]});
		const uintatGOqDh = BigInt("1452")
		const addressPHjwuyC = accounts[3]
		const uint256nXqnzX = await WeedburnxVnGV24.burn.call(uintatGOqDh, {from: accounts[3]});
		const uint256XuKKB0h = await WeedburnxVnGV24.balanceOf.call(addressPHjwuyC, {from: accounts[1]});
		const stringdESI8vg = await WeedburnxVnGV24.symbol.call({from: accounts[3]});
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[3]});

		assert.equal(stringdESI8vg, "Weedburn")
		assert.equal(uint256XuKKB0h, BigInt("100000000000000000000000"))
		await expect(WeedburnxVnGV24.disableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxVnGV24 = await Weedburn.new({from: accounts[3]});
		const uint256WqaP6xI = await WeedburnxVnGV24.totalSupply.call({from: accounts[2]});
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[3]});

		assert.equal(uint256WqaP6xI, BigInt("100000000000000000000000"))
		await expect(WeedburnxVnGV24.disableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxVnGV24 = await Weedburn.new({from: accounts[3]});
		await WeedburnxVnGV24.disableLimitMode.call({from: accounts[3]});
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[3]});

		await expect(WeedburnxVnGV24.disableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxVnGV24 = await Weedburn.new({from: accounts[3]});
		const uintKYXNsQX = BigInt("486")
		const addressLKmSKfn = "0x0000000000000000000000000000000000000001"
		await WeedburnxVnGV24.disableDevMode.call({from: accounts[3]});
		const uint256qO74tBG = await WeedburnxVnGV24.totalSupply.call({from: accounts[1]});
		const boolztiVlZ = await WeedburnxVnGV24.transfer.call(addressLKmSKfn, uintKYXNsQX, {from: accounts[3]});

		await expect(WeedburnxVnGV24.disableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})