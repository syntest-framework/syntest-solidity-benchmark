const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressjZHGEuv = accounts[5]
		const LayerxQPqUOpt = await Layerx.new(addressjZHGEuv, {from: accounts[0]});
		const addressWQEW6TB = accounts[0]
		const addressd0A3hP = accounts[2]
		const bytemDWx4w = "0x14161a070f11"
		const uintFsb3CEB = BigInt("1668")
		const addressJtrymEC = accounts[1]
		const uintG85RYUS = BigInt("1333")
		const addressI1oDnAz = accounts[0]
		const uintYY3ppsT = BigInt("501")
		const uintwNSqkBK = await LayerxQPqUOpt.allowance.call(addressd0A3hP, addressWQEW6TB, {from: accounts[4]});
//		const boolNUqnsZ = await LayerxQPqUOpt.approveAndCall.call(addressJtrymEC, uintFsb3CEB, bytemDWx4w, {from: accounts[1]});
//		const uintWv5akwr = await LayerxQPqUOpt.exist.call(uintG85RYUS, {from: accounts[2]});
//		const uintmLKYBwd = await LayerxQPqUOpt.balanceOf.call(addressI1oDnAz, {from: accounts[4]});
//		const uintbH7SByV = await LayerxQPqUOpt.exist.call(uintYY3ppsT, {from: accounts[2]});

		assert.equal(uintwNSqkBK, BigInt("0"))
		await expect(LayerxQPqUOpt.approveAndCall.call(addressJtrymEC, uintFsb3CEB, bytemDWx4w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressCnryR8 = accounts[3]
		const LayerxGe3eK3e = await Layerx.new(addressCnryR8, {from: accounts[0]});
		const uintgNtNG5A = BigInt("382")
		const addresswWgdHQZ = accounts[4]
		const addressn9DxV9B = accounts[5]
		const addressFNEQ01g = accounts[4]
		const uint2YioFB = BigInt("1235")
		const uintJeWzFLw = BigInt("627")
//		const uintdrq27rJ = await LayerxGe3eK3e.withdraw.call(uintgNtNG5A, {from: accounts[4]});
//		const uintBrjJ4J = await LayerxGe3eK3e.allowance.call(addressn9DxV9B, addresswWgdHQZ, {from: accounts[3]});
//		const uintq9nakT = await LayerxGe3eK3e.balanceOf.call(addressFNEQ01g, {from: accounts[3]});
//		const uintYclz7sb = await LayerxGe3eK3e.lock.call(uint2YioFB, {from: accounts[4]});
//		const uint256DUrXSBs = await LayerxGe3eK3e.burn.call(uintJeWzFLw, {from: accounts[3]});
//		const uintNsUIygO = await LayerxGe3eK3e.totalSupply.call({from: accounts[2]});

		await expect(LayerxGe3eK3e.withdraw.call(uintgNtNG5A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRj35Kv9 = accounts[1]
		const LayerxCEkzKHW = await Layerx.new(addressRj35Kv9, {from: accounts[4]});
		const uintEI5SmYm = BigInt("1")
		const uintPbcg8us = BigInt("910")
		const uintopJs3YM = BigInt("15")
		const uintVJbrJ4S = BigInt("114")
		const addressaRMpftR = accounts[3]
//		const uintwvMljYL = await LayerxCEkzKHW.lock.call(uintEI5SmYm, {from: accounts[5]});
//		const uintpbkf4qf = await LayerxCEkzKHW.withdraw.call(uintPbcg8us, {from: accounts[0]});
//		const uintmci2HEU = await LayerxCEkzKHW.lock.call(uintopJs3YM, {from: accounts[4]});
//		const uint5dmUZV = await LayerxCEkzKHW.lock.call(uintVJbrJ4S, {from: accounts[0]});
//		const uinttG42dz = await LayerxCEkzKHW.balanceOf.call(addressaRMpftR, {from: accounts[1]});

		await expect(LayerxCEkzKHW.lock.call(uintEI5SmYm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressiFGO0Wz = accounts[3]
		const LayerxB4uGeyy = await Layerx.new(addressiFGO0Wz, {from: "0x0000000000000000000000000000000000000001"});
		const addressSfUf23e = accounts[4]
		const addressZE9ZHnU = accounts[4]
		const uintmWyuDZ = BigInt("999")
		const uintlXQIOfD = BigInt("1088")
		const addressqsF9uBX = accounts[4]
		const addressK5WhhG = accounts[4]
		const addressrJRkOz = await LayerxB4uGeyy.setNewStakeCreator.call(addressSfUf23e, {from: accounts[3]});
		const uintSDXLNvC = await LayerxB4uGeyy.balanceOf.call(addressZE9ZHnU, {from: "0x0000000000000000000000000000000000000001"});
		const uintMm8RLo = await LayerxB4uGeyy.exist.call(uintmWyuDZ, {from: accounts[0]});
		const boolaqlnTMV = await LayerxB4uGeyy.approve.call(addressqsF9uBX, uintlXQIOfD, {from: accounts[0]});
		const addressKHYqh5 = await LayerxB4uGeyy.setNewStakeCreator.call(addressK5WhhG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Layerx', async () => {
		const addresslnO6E7I = accounts[4]
		const LayerxIxT9P6e = await Layerx.new(addresslnO6E7I, {from: accounts[2]});
		const uintGkmOk8 = BigInt("1316")
		const addressbPU3Gb = accounts[4]
//		await LayerxIxT9P6e.addStakePayment.call({from: accounts[2]});
//		const uintAo2QvAr = await LayerxIxT9P6e.getStakesNum.call({from: accounts[3]});
//		const boolkR7gOyw = await LayerxIxT9P6e.transfer.call(addressbPU3Gb, uintGkmOk8, {from: accounts[2]});

		await expect(LayerxIxT9P6e.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKjQdMGN = accounts[3]
		const Layerxo1rYsRt = await Layerx.new(addressKjQdMGN, {from: accounts[3]});
		const uintx6rJ0f = BigInt("1145")
		const uintvNdqktV = BigInt("710")
		const addressYOMK0Nb = accounts[0]
		const uintaavSNzf = BigInt("159")
		const uintX2y944B = await Layerxo1rYsRt.getStakesNum.call({from: accounts[1]});
//		const uintBH641R1 = await Layerxo1rYsRt.exist.call(uintx6rJ0f, {from: accounts[1]});
//		const boolG3hFcdf = await Layerxo1rYsRt.transfer.call(addressYOMK0Nb, uintvNdqktV, {from: accounts[5]});
//		const uint256KzjO9d = await Layerxo1rYsRt.burn.call(uintaavSNzf, {from: accounts[1]});

		assert.equal(uintX2y944B, BigInt("1"))
		await expect(Layerxo1rYsRt.exist.call(uintx6rJ0f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNiLzrBb = "0x0000000000000000000000000000000000000001"
		const Layerxpo6TeB = await Layerx.new(addressNiLzrBb, {from: accounts[3]});
		const uintMVWoOBC = BigInt("1535")
		const addressiqAojTe = accounts[0]
		const addressabpG6CE = accounts[4]
		const boolaTsuscS = await Layerxpo6TeB.transfer.call(addressiqAojTe, uintMVWoOBC, {from: "0x0000000000000000000000000000000000000001"});
//		const addressb8J8cXK = await Layerxpo6TeB.transferOwnership.call(addressabpG6CE, {from: accounts[3]});
//		const uintl7XWwF = await Layerxpo6TeB.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintZuups6G = await Layerxpo6TeB.getStakesNum.call({from: accounts[0]});

		assert.equal(boolaTsuscS, true)
		await expect(Layerxpo6TeB.transferOwnership.call(addressabpG6CE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressC4KXgJ = accounts[2]
		const LayerxO7RLi2z = await Layerx.new(addressC4KXgJ, {from: accounts[4]});
		const uint1bcyy0 = BigInt("1309")
		const address6hZ8gE = "0x0000000000000000000000000000000000000001"
		const addressJqrmYAJ = accounts[4]
		const boolf7Asepl = true
//		const bool2p2tPf = await LayerxO7RLi2z.transferFrom.call(addressJqrmYAJ, address6hZ8gE, uint1bcyy0, {from: accounts[4]});
//		const boolXB1vJdH = await LayerxO7RLi2z.setIsPaused.call(boolf7Asepl, {from: accounts[1]});

		await expect(LayerxO7RLi2z.transferFrom.call(addressJqrmYAJ, address6hZ8gE, uint1bcyy0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressn3kpXJ = accounts[1]
		const LayerxCEkzKHW = await Layerx.new(addressn3kpXJ, {from: accounts[4]});
		const uintu1v4JDy = BigInt("0")
		const uintLRrL9EG = BigInt("910")
		const uinthAcMkB = BigInt("15")
		const uintJNkXRrg = BigInt("114")
		const addressJzWJgKz = accounts[3]
//		const uintwvMljYL = await LayerxCEkzKHW.lock.call(uintu1v4JDy, {from: accounts[5]});
//		const uintpbkf4qf = await LayerxCEkzKHW.withdraw.call(uintLRrL9EG, {from: accounts[0]});
//		const uintmci2HEU = await LayerxCEkzKHW.lock.call(uinthAcMkB, {from: accounts[4]});
//		const uint5dmUZV = await LayerxCEkzKHW.lock.call(uintJNkXRrg, {from: accounts[0]});
//		await LayerxCEkzKHW.paused.call({from: accounts[2]});
//		const uinttG42dz = await LayerxCEkzKHW.balanceOf.call(addressJzWJgKz, {from: accounts[1]});

		await expect(LayerxCEkzKHW.lock.call(uintu1v4JDy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressvpOJ4qR = accounts[4]
		const LayerxXvWxf5t = await Layerx.new(addressvpOJ4qR, {from: accounts[0]});
		const uintgWs3Z28 = BigInt("1674")
		const addressjyP5Rgq = accounts[1]
		const uintwvMUzkx = BigInt("651")
		const addresscOEi9H1 = accounts[3]
		const addressauGq4uz = accounts[0]
		const uintjr6JgPK = BigInt("1308")
		const boolh4qiDuQ = await LayerxXvWxf5t.approve.call(addressjyP5Rgq, uintgWs3Z28, {from: accounts[2]});
//		await LayerxXvWxf5t.unlock.call({from: accounts[3]});
//		const boolDwunkkm = await LayerxXvWxf5t.transferFrom.call(addressauGq4uz, addresscOEi9H1, uintwvMUzkx, {from: accounts[5]});
//		const uint256X6bBK5 = await LayerxXvWxf5t.burn.call(uintjr6JgPK, {from: accounts[1]});

		assert.equal(boolh4qiDuQ, true)
		await expect(LayerxXvWxf5t.unlock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJIUQvvC = accounts[4]
		const LayerxIxT9P6e = await Layerx.new(addressJIUQvvC, {from: accounts[2]});
		const uintyVK0yaf = BigInt("856")
		const uintJNzxRA = BigInt("1316")
		const addressrvEdhI9 = accounts[5]
		const uint256F6eg6Xt = await LayerxIxT9P6e.burn.call(uintyVK0yaf, {from: accounts[4]});
//		await LayerxIxT9P6e.addStakePayment.call({from: accounts[2]});
//		const uinterJlaAw = await LayerxIxT9P6e.getStakesNum.call({from: accounts[2]});
//		const boolkR7gOyw = await LayerxIxT9P6e.transfer.call(addressrvEdhI9, uintJNzxRA, {from: accounts[2]});

		await expect(LayerxIxT9P6e.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRl1JuCy = accounts[4]
		const LayerxIxT9P6e = await Layerx.new(addressRl1JuCy, {from: accounts[2]});
//		await LayerxIxT9P6e.f.call({from: accounts[1]});
//		await LayerxIxT9P6e.addStakePayment.call({from: accounts[2]});

		await expect(LayerxIxT9P6e.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZrfpRtA = accounts[1]
		const LayerxeldsRZh = await Layerx.new(addressZrfpRtA, {from: accounts[4]});
		const addressF5MmG8X = accounts[1]
		const uintziTgQke = BigInt("1856")
		const addressgtms0xy = await LayerxeldsRZh.transferOwnership.call(addressF5MmG8X, {from: accounts[1]});
//		const uintQiv8mAW = await LayerxeldsRZh.exist.call(uintziTgQke, {from: accounts[0]});
//		const uintpFNnHF7 = await LayerxeldsRZh.totalSupply.call({from: accounts[3]});
//		await LayerxeldsRZh.unlock.call({from: accounts[4]});

		await expect(LayerxeldsRZh.exist.call(uintziTgQke, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUx1JOF7 = accounts[4]
		const LayerxIxT9P6e = await Layerx.new(addressUx1JOF7, {from: accounts[2]});
		const uintn616bsh = BigInt("1827")
		const uintyFYCBM1 = await LayerxIxT9P6e.totalSupply.call({from: accounts[4]});
//		const uintL5oOc0x = await LayerxIxT9P6e.lock.call(uintn616bsh, {from: accounts[2]});
//		const uintBTsNF7j = await LayerxIxT9P6e.getStakesNum.call({from: accounts[5]});
//		await LayerxIxT9P6e.addStakePayment.call({from: accounts[2]});

		assert.equal(uintyFYCBM1, BigInt("40000000000000000000000"))
		await expect(LayerxIxT9P6e.lock.call(uintn616bsh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVrfjK0 = accounts[4]
		const LayerxIxT9P6e = await Layerx.new(addressVrfjK0, {from: accounts[2]});
		const addressAXWpMPa = accounts[2]
		const boolsYASJwH = false
		const addressdjoEL8P = await LayerxIxT9P6e.setNewStakeCreator.call(addressAXWpMPa, {from: accounts[4]});
//		await LayerxIxT9P6e.addStakePayment.call({from: accounts[2]});
//		const bool9u6arV = await LayerxIxT9P6e.setIsPaused.call(boolsYASJwH, {from: accounts[1]});

		await expect(LayerxIxT9P6e.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVT0fvbO = accounts[1]
		const LayerxrvCWYf2 = await Layerx.new(addressVT0fvbO, {from: accounts[3]});
		const addressDUXJwe = accounts[3]
		const addresskEJ6eCM = accounts[2]
		const addressnp5kAjj = accounts[4]
		const addressdrzjZh = accounts[1]
		const uintP5KzNsS = BigInt("1910")
		const byteJXXwCaH = "0x011d1e0d1a1e081608"
		const uintQmzdTjP = BigInt("900")
		const addressq1RLvK = accounts[3]
		const uintoWlWnch = BigInt("321")
		const uintq5Gye4J = await LayerxrvCWYf2.balanceOf.call(addressDUXJwe, {from: accounts[4]});
		const uintit6D2mE = await LayerxrvCWYf2.allowance.call(addressnp5kAjj, addresskEJ6eCM, {from: accounts[4]});
		const uintevn6DWb = await LayerxrvCWYf2.balanceOf.call(addressdrzjZh, {from: accounts[2]});
//		const uintjTsoTQa = await LayerxrvCWYf2.withdraw.call(uintP5KzNsS, {from: accounts[3]});
//		const boolLSWwOMi = await LayerxrvCWYf2.approveAndCall.call(addressq1RLvK, uintQmzdTjP, byteJXXwCaH, {from: accounts[5]});
//		const uintDNUccBB = await LayerxrvCWYf2.exist.call(uintoWlWnch, {from: accounts[5]});

		assert.equal(uintevn6DWb, BigInt("40000000000000000000000"))
		assert.equal(uintit6D2mE, BigInt("0"))
		assert.equal(uintq5Gye4J, BigInt("0"))
		await expect(LayerxrvCWYf2.withdraw.call(uintP5KzNsS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressaeDvB9W = accounts[2]
		const LayerxFQbbc6m = await Layerx.new(addressaeDvB9W, {from: accounts[3]});
		const uintecqhlKc = BigInt("56")
//		await LayerxFQbbc6m.addStakePayment.call({from: accounts[2]});
//		const uint256uVIZYmO = await LayerxFQbbc6m.burn.call(uintecqhlKc, {from: accounts[2]});

		await expect(LayerxFQbbc6m.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address36Yoks = accounts[2]
		const LayerxFQbbc6m = await Layerx.new(address36Yoks, {from: accounts[3]});
		const addressrMZ8HWI = accounts[1]
		const addressrGpVPsW = accounts[2]
		const boolJ5DQju5 = false
		const addressEQqwQBH = accounts[2]
		const uintLzJtLa9 = BigInt("2025")
		const uintaVZx8hq = BigInt("1273")
		const uintLsFbqiX = BigInt("72")
//		await LayerxFQbbc6m.addStakePayment.call({from: accounts[2]});
//		const addressNEVIxDZ = await LayerxFQbbc6m.setNewStakeCreator.call(addressrMZ8HWI, {from: accounts[2]});
//		const uintVFExGiH = await LayerxFQbbc6m.balanceOf.call(addressrGpVPsW, {from: accounts[2]});
//		const uintbhrcDTh = await LayerxFQbbc6m.getStakesNum.call({from: accounts[3]});
//		const bools7JaQ9y = await LayerxFQbbc6m.setIsPaused.call(boolJ5DQju5, {from: accounts[2]});
//		const uintmR7KBne = await LayerxFQbbc6m.totalSupply.call({from: accounts[2]});
//		await LayerxFQbbc6m.unlock.call({from: accounts[2]});
//		const uintvOfszX = await LayerxFQbbc6m.balanceOf.call(addressEQqwQBH, {from: accounts[4]});
//		const uintTqNBXVY = await LayerxFQbbc6m.lock.call(uintLzJtLa9, {from: accounts[3]});
//		const uintqOj2QTp = await LayerxFQbbc6m.lock.call(uintaVZx8hq, {from: accounts[0]});
//		const uint256uVIZYmO = await LayerxFQbbc6m.burn.call(uintLsFbqiX, {from: accounts[2]});

		await expect(LayerxFQbbc6m.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})