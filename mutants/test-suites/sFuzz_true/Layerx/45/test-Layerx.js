const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressuiJTQH2 = accounts[2]
		const LayerxsoH0sUE = await Layerx.new(addressuiJTQH2, {from: "0x0000000000000000000000000000000000000001"});
		const addressIDxzVSD = accounts[0]
		const uintjVdoQS = BigInt("1097")
		const addressap8GOo4 = "0x0000000000000000000000000000000000000001"
		const addressO2J6bD = accounts[5]
		const bytetcSJ6ib = "0x1a081d1d0a010517101d1a0c090a16040a010e1119"
		const uinty8ieZ3G = BigInt("1183")
		const addresscWyhT8H = accounts[2]
		await LayerxsoH0sUE.onlyOwner.call({from: accounts[4]});
		const addresshfyVtm5 = await LayerxsoH0sUE.transferOwnership.call(addressIDxzVSD, {from: accounts[2]});
		const boolRitikYu = await LayerxsoH0sUE.transferFrom.call(addressO2J6bD, addressap8GOo4, uintjVdoQS, {from: accounts[5]});
		const boolH17MAmy = await LayerxsoH0sUE.approveAndCall.call(addresscWyhT8H, uinty8ieZ3G, bytetcSJ6ib, {from: accounts[0]});
		await LayerxsoH0sUE.addStakePayment.call({from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addressIEkkvAg = accounts[1]
		const LayerxsDvURim = await Layerx.new(addressIEkkvAg, {from: accounts[4]});
		const uintjAimRfD = BigInt("426")
		const uintWyTB9sA = BigInt("384")
		const uintRTZRnmc = BigInt("662")
		const addressnMKajw3 = accounts[5]
//		const uintA6HSEVA = await LayerxsDvURim.exist.call(uintjAimRfD, {from: accounts[1]});
//		const uintS8maGqr = await LayerxsDvURim.getStakesNum.call({from: accounts[4]});
//		await LayerxsDvURim.unlock.call({from: accounts[0]});
//		const uint256t9Gxt7 = await LayerxsDvURim.burn.call(uintWyTB9sA, {from: accounts[4]});
//		const boolhvWYrNh = await LayerxsDvURim.approve.call(addressnMKajw3, uintRTZRnmc, {from: accounts[4]});

		await expect(LayerxsDvURim.exist.call(uintjAimRfD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMDkGQWB = accounts[4]
		const LayerxkIKgSm = await Layerx.new(addressMDkGQWB, {from: accounts[2]});
		const addressomWiYyb = accounts[4]
		const uintFEfHSN = await LayerxkIKgSm.getStakesNum.call({from: accounts[0]});
//		const addressvI9fFns = await LayerxkIKgSm.transferOwnership.call(addressomWiYyb, {from: accounts[3]});

		assert.equal(uintFEfHSN, BigInt("1"))
		await expect(LayerxkIKgSm.transferOwnership.call(addressomWiYyb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGyjaGZ = "0x0000000000000000000000000000000000000001"
		const LayerxQOzY6AM = await Layerx.new(addressGyjaGZ, {from: accounts[4]});
		const uintQQIUDZb = BigInt("580")
		const addressmYaQvqa = accounts[3]
		const addressbWtOZWi = accounts[1]
		const addressKjCCMz = accounts[4]
		const addressO0Oukie = accounts[1]
		const boolIIL3qAM = await LayerxQOzY6AM.approve.call(addressmYaQvqa, uintQQIUDZb, {from: accounts[3]});
		const uintgg6CJFB = await LayerxQOzY6AM.getStakesNum.call({from: accounts[4]});
		const uintno0M7wU = await LayerxQOzY6AM.balanceOf.call(addressbWtOZWi, {from: accounts[4]});
//		await LayerxQOzY6AM.addStakePayment.call({from: accounts[4]});
//		const uintvAJhUHU = await LayerxQOzY6AM.allowance.call(addressO0Oukie, addressKjCCMz, {from: accounts[1]});

		assert.equal(boolIIL3qAM, true)
		assert.equal(uintgg6CJFB, BigInt("1"))
		assert.equal(uintno0M7wU, BigInt("0"))
		await expect(LayerxQOzY6AM.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUTkDRb7 = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressUTkDRb7, {from: accounts[3]});
		const uintcURcXfA = BigInt("66")
		const addressx4p7JQY = accounts[0]
//		await LayerxWU0g12k.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressx4p7JQY, uintcURcXfA, {from: accounts[1]});

		await expect(LayerxWU0g12k.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxjJ6DoJ = accounts[4]
		const LayerxTAPafoe = await Layerx.new(addressxjJ6DoJ, {from: accounts[0]});
		const booltD3nAFe = true
		const uintCPsLMrk = await LayerxTAPafoe.totalSupply.call({from: accounts[3]});
//		const boolnQFjL8U = await LayerxTAPafoe.setIsPaused.call(booltD3nAFe, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxTAPafoe.paused.call({from: accounts[4]});

		assert.equal(uintCPsLMrk, BigInt("40000000000000000000000"))
		await expect(LayerxTAPafoe.setIsPaused.call(booltD3nAFe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressG2lpQpg = accounts[3]
		const Layerxi6u1Gkr = await Layerx.new(addressG2lpQpg, {from: accounts[1]});
		const addressWHv4Av = "0x0000000000000000000000000000000000000001"
		const addressUkvVuFG = accounts[1]
		const uintjtNJKbw = await Layerxi6u1Gkr.allowance.call(addressUkvVuFG, addressWHv4Av, {from: accounts[2]});
		const uint4B7ixU = await Layerxi6u1Gkr.totalSupply.call({from: accounts[4]});
//		await Layerxi6u1Gkr.paused.call({from: accounts[4]});

		assert.equal(uint4B7ixU, BigInt("40000000000000000000000"))
		assert.equal(uintjtNJKbw, BigInt("0"))
		await expect(Layerxi6u1Gkr.paused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswIdep9U = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addresswIdep9U, {from: accounts[3]});
		const uintM24FXlZ = BigInt("66")
		const addressKCHNizb = accounts[0]
		const uintpcS7qN9 = BigInt("1369")
		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressKCHNizb, uintM24FXlZ, {from: accounts[1]});
//		const uintxtReXN = await LayerxWU0g12k.lock.call(uintpcS7qN9, {from: accounts[5]});

		assert.equal(boolTGIa1ly, true)
		await expect(LayerxWU0g12k.lock.call(uintpcS7qN9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJxan99J = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressJxan99J, {from: accounts[3]});
		const uintBsvZMMr = BigInt("1251")
		const uint1cFMMk = BigInt("66")
		const addressX7kJTBr = accounts[1]
		const uintU3RBExD = BigInt("1852")
		const addressLPLa3RH = accounts[5]
		const addressO3ioPiF = accounts[5]
//		const uintPS12ZeK = await LayerxWU0g12k.withdraw.call(uintBsvZMMr, {from: accounts[4]});
//		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressX7kJTBr, uint1cFMMk, {from: accounts[1]});
//		const boolRVFWw6Q = await LayerxWU0g12k.transferFrom.call(addressO3ioPiF, addressLPLa3RH, uintU3RBExD, {from: accounts[3]});

		await expect(LayerxWU0g12k.withdraw.call(uintBsvZMMr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTEjMUSI = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressTEjMUSI, {from: accounts[3]});
		const byteuiO9H5O = "0x140c021c05171d1e1d20021c0a1219150512021a1101"
		const uintAbZsVEh = BigInt("106")
		const addresssvR5k8o = accounts[1]
		const uintHjBde5Z = BigInt("1990")
		const uinttgJuuKy = BigInt("66")
		const addressrcDAnx = accounts[1]
//		const boolNFvaj4T = await LayerxWU0g12k.approveAndCall.call(addresssvR5k8o, uintAbZsVEh, byteuiO9H5O, {from: accounts[4]});
//		const uintQvlbEZV = await LayerxWU0g12k.exist.call(uintHjBde5Z, {from: accounts[0]});
//		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressrcDAnx, uinttgJuuKy, {from: accounts[1]});

		await expect(LayerxWU0g12k.approveAndCall.call(addresssvR5k8o, uintAbZsVEh, byteuiO9H5O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHaLQccF = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressHaLQccF, {from: accounts[3]});
		const uintE1EpCn8 = BigInt("18")
		const addressRMhrbGC = accounts[0]
		const uintWFZE2OV = BigInt("1503")
		const addressxH3y9VR = "0x0000000000000000000000000000000000000001"
		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressRMhrbGC, uintE1EpCn8, {from: accounts[1]});
		const booltY2MxXW = await LayerxWU0g12k.transfer.call(addressxH3y9VR, uintWFZE2OV, {from: accounts[1]});

		assert.equal(boolTGIa1ly, true)
		assert.equal(booltY2MxXW, true)
	});

	it('test for Layerx', async () => {
		const addressKlUzVcZ = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressKlUzVcZ, {from: accounts[3]});
		const uintQYcwKyD = BigInt("194")
		const addressN1smX0R = accounts[1]
		const uintPIXXD6r = BigInt("925")
		const addressV0XA7Mx = accounts[2]
		const addressGw9EYUe = accounts[0]
		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressN1smX0R, uintQYcwKyD, {from: accounts[1]});
//		const boolwftwAp9 = await LayerxWU0g12k.transferFrom.call(addressGw9EYUe, addressV0XA7Mx, uintPIXXD6r, {from: accounts[2]});

		assert.equal(boolTGIa1ly, true)
		await expect(LayerxWU0g12k.transferFrom.call(addressGw9EYUe, addressV0XA7Mx, uintPIXXD6r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIHqI4Ep = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressIHqI4Ep, {from: accounts[3]});
		const boolndBUOJ1 = false
		const addressEtiTtQP = accounts[0]
		const uintWB6jOKt = BigInt("66")
		const addresslClFdc = accounts[1]
		const boolKEuvNZH = await LayerxWU0g12k.setIsPaused.call(boolndBUOJ1, {from: accounts[1]});
//		const addressNstKsX6 = await LayerxWU0g12k.setNewStakeCreator.call(addressEtiTtQP, {from: accounts[2]});
//		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addresslClFdc, uintWB6jOKt, {from: accounts[1]});

		await expect(LayerxWU0g12k.setNewStakeCreator.call(addressEtiTtQP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressOx5JrX5 = accounts[0]
		const LayerxGjqq13P = await Layerx.new(addressOx5JrX5, {from: accounts[3]});
//		await LayerxGjqq13P.f.call({from: accounts[2]});
//		await LayerxGjqq13P.unlock.call({from: accounts[1]});

		await expect(LayerxGjqq13P.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressa0BsX0N = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressa0BsX0N, {from: accounts[3]});
		const uintwuIy9jI = BigInt("64")
		const address4Jd2mp = accounts[1]
//		await LayerxWU0g12k.addStakePayment.call({from: accounts[1]});
//		const boolTGIa1ly = await LayerxWU0g12k.approve.call(address4Jd2mp, uintwuIy9jI, {from: accounts[1]});

		await expect(LayerxWU0g12k.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRqOG8yJ = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressRqOG8yJ, {from: accounts[3]});
		const addresskF0N5A = accounts[0]
		const uintlj6qzCG = BigInt("66")
		const addressTQOk3RZ = accounts[1]
		const uintcze7ZiN = BigInt("1324")
		const addressTe6H57g = await LayerxWU0g12k.transferOwnership.call(addresskF0N5A, {from: accounts[1]});
		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressTQOk3RZ, uintlj6qzCG, {from: accounts[1]});
		const uintRktYhwL = await LayerxWU0g12k.getStakesNum.call({from: accounts[3]});
//		const uintbhj6Gf2 = await LayerxWU0g12k.lock.call(uintcze7ZiN, {from: accounts[2]});

		assert.equal(boolTGIa1ly, true)
		assert.equal(uintRktYhwL, BigInt("1"))
		await expect(LayerxWU0g12k.lock.call(uintcze7ZiN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresseO90PwY = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addresseO90PwY, {from: accounts[3]});
		const uintCoqIXjo = BigInt("88")
		const addressTZByABh = accounts[0]
		const addresskXdbPc8 = accounts[2]
		const uintlkuZJm1 = BigInt("1283")
		const addressaSNIHTC = accounts[2]
		const addressoGzvXuR = accounts[5]
		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressTZByABh, uintCoqIXjo, {from: accounts[1]});
		const addressml29Cic = await LayerxWU0g12k.setNewStakeCreator.call(addresskXdbPc8, {from: accounts[1]});
//		const boolJSAt7He = await LayerxWU0g12k.transferFrom.call(addressoGzvXuR, addressaSNIHTC, uintlkuZJm1, {from: accounts[1]});

		assert.equal(boolTGIa1ly, true)
		await expect(LayerxWU0g12k.transferFrom.call(addressoGzvXuR, addressaSNIHTC, uintlkuZJm1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressm4aZuWA = accounts[1]
		const LayerxWU0g12k = await Layerx.new(addressm4aZuWA, {from: accounts[3]});
		const uintTy4tCJt = BigInt("995")
		const uintiMgN23q = BigInt("66")
		const addressjrB0G5n = accounts[1]
		const uint256dLr3Ody = await LayerxWU0g12k.burn.call(uintTy4tCJt, {from: accounts[1]});
		const uintV9Dan4i = await LayerxWU0g12k.totalSupply.call({from: accounts[0]});
		const boolTGIa1ly = await LayerxWU0g12k.approve.call(addressjrB0G5n, uintiMgN23q, {from: accounts[1]});

		assert.equal(boolTGIa1ly, true)
		assert.equal(uintV9Dan4i, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addressJcu9RWw = accounts[0]
		const LayerxiSj5qYQ = await Layerx.new(addressJcu9RWw, {from: accounts[5]});
		const uintvskDSHH = BigInt("0")
		const addressr4IxXQ2 = accounts[2]
		const addressYjtLENn = accounts[2]
		const uintmHiSKR0 = await LayerxiSj5qYQ.withdraw.call(uintvskDSHH, {from: accounts[5]});
//		await LayerxiSj5qYQ.f.call({from: accounts[1]});
//		const addressloy2IKe = await LayerxiSj5qYQ.setNewStakeCreator.call(addressr4IxXQ2, {from: accounts[1]});
//		const uinthwIheh4 = await LayerxiSj5qYQ.totalSupply.call({from: accounts[1]});
//		const uintI9NNVOC = await LayerxiSj5qYQ.balanceOf.call(addressYjtLENn, {from: accounts[2]});
//		await LayerxiSj5qYQ.unlock.call({from: accounts[1]});

		await expect(LayerxiSj5qYQ.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})