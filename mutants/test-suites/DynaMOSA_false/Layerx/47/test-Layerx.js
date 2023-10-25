const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressDe70JPJ = accounts[0]
		const Layerxe5X3XRl = await Layerx.new(addressDe70JPJ, {from: accounts[4]});
		const byterPi471B = "0x0d1d01131917021b021517181d0c0d06"
		const uintuWe7XRs = BigInt("581")
		const addressbyfa2d = accounts[5]
		const uintdcQVxS = BigInt("1506")
		const uinthiPEv1j = await Layerxe5X3XRl.totalSupply.call({from: accounts[2]});
//		const boolVdcvMiJ = await Layerxe5X3XRl.approveAndCall.call(addressbyfa2d, uintuWe7XRs, byterPi471B, {from: accounts[2]});
//		await Layerxe5X3XRl.f.call({from: accounts[0]});
//		const uintvcYO0Vy = await Layerxe5X3XRl.totalSupply.call({from: accounts[1]});
//		const uintdTKMODi = await Layerxe5X3XRl.withdraw.call(uintdcQVxS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinthiPEv1j, BigInt("40000000000000000000000"))
		await expect(Layerxe5X3XRl.approveAndCall.call(addressbyfa2d, uintuWe7XRs, byterPi471B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshNIdlMd = accounts[1]
		const LayerxXzftsUy = await Layerx.new(addresshNIdlMd, {from: accounts[4]});
		const uintDeucKj = BigInt("369")
		const uintCcnooPg = BigInt("1607")
		const uintyFj3uFi = BigInt("67")
		const addressSy9iA20 = "0x0000000000000000000000000000000000000001"
		const uintY0dVUIa = BigInt("802")
		const addressbAkqZ4q = accounts[4]
		const uintgoegR1p = await LayerxXzftsUy.getStakesNum.call({from: accounts[1]});
//		const uint256dlIC1W = await LayerxXzftsUy.burn.call(uintDeucKj, {from: accounts[3]});
//		const uintmcFeeIL = await LayerxXzftsUy.lock.call(uintCcnooPg, {from: accounts[3]});
//		await LayerxXzftsUy.paused.call({from: accounts[1]});
//		const boolgIIu8fS = await LayerxXzftsUy.transfer.call(addressSy9iA20, uintyFj3uFi, {from: accounts[1]});
//		const boolWTCnp8 = await LayerxXzftsUy.approve.call(addressbAkqZ4q, uintY0dVUIa, {from: accounts[0]});

		assert.equal(uintgoegR1p, BigInt("1"))
		await expect(LayerxXzftsUy.burn.call(uintDeucKj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressee5TiWz = accounts[1]
		const Layerxnb83bzv = await Layerx.new(addressee5TiWz, {from: accounts[4]});
		const uintdLt7S5i = BigInt("1474")
		const addressDC18qXu = accounts[0]
		const uintORYxBqQ = BigInt("1643")
		const uintba4N1xO = await Layerxnb83bzv.totalSupply.call({from: accounts[3]});
//		await Layerxnb83bzv.addStakePayment.call({from: accounts[5]});
//		const uintO8JKT6k = await Layerxnb83bzv.withdraw.call(uintdLt7S5i, {from: accounts[4]});
//		const addressbhv6dLm = await Layerxnb83bzv.transferOwnership.call(addressDC18qXu, {from: accounts[2]});
//		const uintpRpYTV6 = await Layerxnb83bzv.totalSupply.call({from: accounts[1]});
//		const uintZUMfwgR = await Layerxnb83bzv.exist.call(uintORYxBqQ, {from: accounts[3]});

		assert.equal(uintba4N1xO, BigInt("40000000000000000000000"))
		await expect(Layerxnb83bzv.addStakePayment.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBu2HS37 = accounts[3]
		const LayerxA9BvJLR = await Layerx.new(addressBu2HS37, {from: accounts[1]});
		const addressZrlUhjt = accounts[0]
//		await LayerxA9BvJLR.f.call({from: accounts[2]});
//		const uintmfRsun = await LayerxA9BvJLR.balanceOf.call(addressZrlUhjt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxA9BvJLR.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressI7qyTe4 = accounts[2]
		const LayerxqX83hE = await Layerx.new(addressI7qyTe4, {from: "0x0000000000000000000000000000000000000001"});
		const uintQtNqBSz = BigInt("1136")
		const uintq9EQiAJ = BigInt("901")
		const uintZWsJh89 = BigInt("1337")
		const uintTJgVHyX = BigInt("1311")
		const uintuyFLf3p = await LayerxqX83hE.totalSupply.call({from: accounts[3]});
		const uinty20F0St = await LayerxqX83hE.withdraw.call(uintQtNqBSz, {from: accounts[2]});
		const uintGBQxwYu = await LayerxqX83hE.lock.call(uintq9EQiAJ, {from: accounts[4]});
		const uint256rEeyawq = await LayerxqX83hE.burn.call(uintZWsJh89, {from: accounts[2]});
		const uintq3ygWM = await LayerxqX83hE.exist.call(uintTJgVHyX, {from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addresszI5vKCy = "0x0000000000000000000000000000000000000001"
		const LayerxQeVzLG3 = await Layerx.new(addresszI5vKCy, {from: accounts[4]});
		const uintuo2ayaO = BigInt("401")
		const addressW1xhdYd = accounts[3]
		const addressDopAZy = accounts[1]
		const uintsV1dQU = BigInt("264")
		const addressgswbWYc = accounts[1]
//		const booloRRt9U9 = await LayerxQeVzLG3.transfer.call(addressW1xhdYd, uintuo2ayaO, {from: accounts[1]});
//		const addresszDf5X4F = await LayerxQeVzLG3.transferOwnership.call(addressDopAZy, {from: accounts[4]});
//		const boolocp9mHG = await LayerxQeVzLG3.transfer.call(addressgswbWYc, uintsV1dQU, {from: accounts[4]});
//		await LayerxQeVzLG3.unlock.call({from: accounts[4]});

		await expect(LayerxQeVzLG3.transfer.call(addressW1xhdYd, uintuo2ayaO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUStnaMa = accounts[2]
		const LayerxRVRYAkt = await Layerx.new(addressUStnaMa, {from: accounts[0]});
		const uintYG8iXQ = BigInt("1642")
		const uintr4WZriT = BigInt("1638")
		const addressSkDBn7 = accounts[2]
		const addresskxj78dY = accounts[0]
		const uint256I2QiXhW = await LayerxRVRYAkt.burn.call(uintYG8iXQ, {from: accounts[2]});
//		const boolOUPwZEv = await LayerxRVRYAkt.transferFrom.call(addresskxj78dY, addressSkDBn7, uintr4WZriT, {from: accounts[2]});
//		await LayerxRVRYAkt.unlock.call({from: accounts[1]});

		await expect(LayerxRVRYAkt.transferFrom.call(addresskxj78dY, addressSkDBn7, uintr4WZriT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEj9r8mn = accounts[1]
		const Layerxnb83bzv = await Layerx.new(addressEj9r8mn, {from: accounts[4]});
		const uintdDuHfX3 = BigInt("1474")
		const addressVMKOmNy = accounts[0]
		const uintGlJWfgR = BigInt("1643")
		const uintba4N1xO = await Layerxnb83bzv.totalSupply.call({from: accounts[3]});
//		const uintO8JKT6k = await Layerxnb83bzv.withdraw.call(uintdDuHfX3, {from: accounts[4]});
//		const addressbhv6dLm = await Layerxnb83bzv.transferOwnership.call(addressVMKOmNy, {from: accounts[2]});
//		const uintpRpYTV6 = await Layerxnb83bzv.totalSupply.call({from: accounts[1]});
//		const uintZUMfwgR = await Layerxnb83bzv.exist.call(uintGlJWfgR, {from: accounts[3]});

		assert.equal(uintba4N1xO, BigInt("40000000000000000000000"))
		await expect(Layerxnb83bzv.withdraw.call(uintdDuHfX3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssCpOvJ = accounts[3]
		const LayerxA9BvJLR = await Layerx.new(addresssCpOvJ, {from: accounts[1]});
		const uintmElqkGw = BigInt("142")
		const addressagTpLmT = accounts[4]
//		await LayerxA9BvJLR.f.call({from: accounts[2]});
//		const uintEwfGAi3 = await LayerxA9BvJLR.lock.call(uintmElqkGw, {from: accounts[3]});
//		const uintmfRsun = await LayerxA9BvJLR.balanceOf.call(addressagTpLmT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxA9BvJLR.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZrfgEcn = accounts[0]
		const LayerxVp6VX7z = await Layerx.new(addressZrfgEcn, {from: accounts[4]});
		const uintGl7kTIy = BigInt("672")
//		await LayerxVp6VX7z.onlyOwner.call({from: accounts[1]});
//		const uintUADigzt = await LayerxVp6VX7z.lock.call(uintGl7kTIy, {from: accounts[1]});
//		await LayerxVp6VX7z.addStakePayment.call({from: accounts[3]});

		await expect(LayerxVp6VX7z.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSWPMcK0 = accounts[1]
		const Layerxnb83bzv = await Layerx.new(addressSWPMcK0, {from: accounts[4]});
		const uintiLmhZm2 = BigInt("1515")
		const boolq9jtiXt = false
		const addressMdXSxfc = accounts[0]
		const uintRC2wXX9 = BigInt("1643")
		const uintba4N1xO = await Layerxnb83bzv.totalSupply.call({from: accounts[3]});
//		await Layerxnb83bzv.unlock.call({from: accounts[2]});
//		await Layerxnb83bzv.addStakePayment.call({from: accounts[5]});
//		const uintO8JKT6k = await Layerxnb83bzv.withdraw.call(uintiLmhZm2, {from: accounts[4]});
//		const boolk0Doz3w = await Layerxnb83bzv.setIsPaused.call(boolq9jtiXt, {from: accounts[2]});
//		const addressbhv6dLm = await Layerxnb83bzv.transferOwnership.call(addressMdXSxfc, {from: accounts[2]});
//		const uintZUMfwgR = await Layerxnb83bzv.exist.call(uintRC2wXX9, {from: accounts[3]});

		assert.equal(uintba4N1xO, BigInt("40000000000000000000000"))
		await expect(Layerxnb83bzv.unlock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjILV3m = accounts[3]
		const LayerxA9BvJLR = await Layerx.new(addressjILV3m, {from: accounts[1]});
		const uintVaa8JEc = BigInt("1390")
		const addressfb6BQ1K = accounts[2]
		const uintJtPIvYl = BigInt("1054")
		const addresswKOwT5 = accounts[2]
		const boolTaaLAZ4 = await LayerxA9BvJLR.approve.call(addressfb6BQ1K, uintVaa8JEc, {from: accounts[0]});
//		const uintAaDh4C = await LayerxA9BvJLR.lock.call(uintJtPIvYl, {from: accounts[4]});
//		const uintmfRsun = await LayerxA9BvJLR.balanceOf.call(addresswKOwT5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTaaLAZ4, true)
		await expect(LayerxA9BvJLR.lock.call(uintJtPIvYl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJuZYoKs = accounts[3]
		const LayerxA9BvJLR = await Layerx.new(addressJuZYoKs, {from: accounts[1]});
		const addresswCx7pDo = accounts[4]
		const addresskMIwEz5 = accounts[0]
		const uintQBoFAy8 = BigInt("786")
		const addressSwQSqX = accounts[1]
		const uintpzJMPoQ = await LayerxA9BvJLR.allowance.call(addresskMIwEz5, addresswCx7pDo, {from: accounts[4]});
//		const uintZ5kGp61 = await LayerxA9BvJLR.withdraw.call(uintQBoFAy8, {from: accounts[4]});
//		const uintmfRsun = await LayerxA9BvJLR.balanceOf.call(addressSwQSqX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintpzJMPoQ, BigInt("0"))
		await expect(LayerxA9BvJLR.withdraw.call(uintQBoFAy8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdjN9D7U = accounts[3]
		const LayerxA9BvJLR = await Layerx.new(addressdjN9D7U, {from: accounts[1]});
		const addressmA19VD2 = accounts[1]
		const addressWZK8fJE = accounts[1]
		const uintmfRsun = await LayerxA9BvJLR.balanceOf.call(addressmA19VD2, {from: "0x0000000000000000000000000000000000000001"});
		const addressSJwS3z4 = await LayerxA9BvJLR.setNewStakeCreator.call(addressWZK8fJE, {from: accounts[3]});

		assert.equal(uintmfRsun, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addresstjTQDht = accounts[3]
		const LayerxBNtYoPc = await Layerx.new(addresstjTQDht, {from: accounts[2]});
		const uintTbBtzp5 = BigInt("328")
		const addressVptPJV8 = accounts[3]
		const uintcEfPcp7 = BigInt("1297")
		const uinttkT0PSL = BigInt("1012")
		const boolV7u5dVZ = await LayerxBNtYoPc.approve.call(addressVptPJV8, uintTbBtzp5, {from: accounts[5]});
//		await LayerxBNtYoPc.addStakePayment.call({from: accounts[3]});
//		const uintmznHoj2 = await LayerxBNtYoPc.lock.call(uintcEfPcp7, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxBNtYoPc.unlock.call({from: accounts[1]});
//		const uintBPNsiBS = await LayerxBNtYoPc.lock.call(uinttkT0PSL, {from: accounts[5]});

		assert.equal(boolV7u5dVZ, true)
		await expect(LayerxBNtYoPc.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressoC6s92d = accounts[1]
		const LayerxLa36rNj = await Layerx.new(addressoC6s92d, {from: accounts[2]});
		const addressVs5pEnA = accounts[2]
		const uintDeA7bly = BigInt("1373")
		const addressovxoyPQ = accounts[4]
		const addressjwKW5l5 = await LayerxLa36rNj.transferOwnership.call(addressVs5pEnA, {from: accounts[1]});
		const booltCAbGJ2 = await LayerxLa36rNj.approve.call(addressovxoyPQ, uintDeA7bly, {from: accounts[2]});

		assert.equal(booltCAbGJ2, true)
	});

	it('test for Layerx', async () => {
		const addresskFUC5Ht = accounts[3]
		const LayerxBNtYoPc = await Layerx.new(addresskFUC5Ht, {from: accounts[2]});
		const uintF0Kp8Zt = BigInt("845")
		const addressJa01DIX = accounts[3]
		const uintJYKVUtH = BigInt("0")
		const addresso0ZhYfy = accounts[1]
		const addressmSS4mdh = accounts[3]
		const boolV7u5dVZ = await LayerxBNtYoPc.approve.call(addressJa01DIX, uintF0Kp8Zt, {from: accounts[5]});
//		const uintmznHoj2 = await LayerxBNtYoPc.lock.call(uintJYKVUtH, {from: "0x0000000000000000000000000000000000000001"});
//		const uintxy1zulD = await LayerxBNtYoPc.allowance.call(addressmSS4mdh, addresso0ZhYfy, {from: accounts[3]});

		assert.equal(boolV7u5dVZ, true)
		await expect(LayerxBNtYoPc.lock.call(uintJYKVUtH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressvRmRWt = accounts[2]
		const Layerx3VZAUf = await Layerx.new(addressvRmRWt, {from: accounts[0]});
		const boolzRQoZkP = true
		const uintnpFyYYO = BigInt("797")
		const addresspIezZZH = accounts[3]
		const addressxxEeRMo = accounts[1]
		const uintt80r9q = BigInt("152")
		const addressuS55FD = "0x0000000000000000000000000000000000000001"
		const addresseYADlaI = accounts[1]
		const boolnoDNV4 = await Layerx3VZAUf.setIsPaused.call(boolzRQoZkP, {from: accounts[2]});
//		const boolt9apoca = await Layerx3VZAUf.transfer.call(addresspIezZZH, uintnpFyYYO, {from: accounts[1]});
//		const addresshBSoodE = await Layerx3VZAUf.setNewStakeCreator.call(addressxxEeRMo, {from: accounts[2]});
//		const boolCXc9Xp = await Layerx3VZAUf.transferFrom.call(addresseYADlaI, addressuS55FD, uintt80r9q, {from: accounts[2]});

		await expect(Layerx3VZAUf.transfer.call(addresspIezZZH, uintnpFyYYO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})