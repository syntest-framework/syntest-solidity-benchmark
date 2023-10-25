const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressqDzBoDM = accounts[4]
		const LayerxUu2Hzjm = await Layerx.new(addressqDzBoDM, {from: accounts[4]});
		const uinta6bQRll = BigInt("1193")
		const uintzDO4U0Z = BigInt("349")
		const addressYdMgm0x = accounts[2]
		const addressWjIZkhc = accounts[0]
		const uint256GU0WKZv = await LayerxUu2Hzjm.burn.call(uinta6bQRll, {from: accounts[1]});
		const boolu4N2IJ = await LayerxUu2Hzjm.transferFrom.call(addressWjIZkhc, addressYdMgm0x, uintzDO4U0Z, {from: accounts[4]});
		await LayerxUu2Hzjm.f.call({from: accounts[2]});
		await LayerxUu2Hzjm.f.call({from: accounts[4]});
		await LayerxUu2Hzjm.addStakePayment.call({from: accounts[3]});

		await expect(LayerxUu2Hzjm.burn.call(uinta6bQRll, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKKByHCJ = accounts[0]
		const LayerxQbjHtKG = await Layerx.new(addressKKByHCJ, {from: accounts[4]});
		const addressFZAz2Ii = accounts[2]
		const addressyPK7v4t = accounts[3]
		const uintS7sQZo5 = BigInt("318")
		const addressuAOfsiC = accounts[3]
		const uintaPDfl8A = await LayerxQbjHtKG.balanceOf.call(addressFZAz2Ii, {from: accounts[2]});
		const uintmD1ajj = await LayerxQbjHtKG.balanceOf.call(addressyPK7v4t, {from: accounts[1]});
		const boola0WgrMx = await LayerxQbjHtKG.approve.call(addressuAOfsiC, uintS7sQZo5, {from: accounts[5]});

		assert.equal(boola0WgrMx, true)
		assert.equal(uintaPDfl8A, BigInt("0"))
		assert.equal(uintmD1ajj, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressZqoMjar = accounts[5]
		const LayerxGTwplUe = await Layerx.new(addressZqoMjar, {from: accounts[0]});
		const byteRaei21y = "0x141404101513050d141d0e071803060b091809111f09020d0b010c00"
		const uintVI1pM62 = BigInt("1754")
		const addressTRCGS6j = accounts[2]
		const uintQ0p1ffL = BigInt("1045")
		const addressX8XMGJ = accounts[2]
		const boollNABMOt = true
		const boolOitQxIr = await LayerxGTwplUe.approveAndCall.call(addressTRCGS6j, uintVI1pM62, byteRaei21y, {from: accounts[4]});
		const boolqRdNWsc = await LayerxGTwplUe.approve.call(addressX8XMGJ, uintQ0p1ffL, {from: accounts[4]});
		const uintQD74MY7 = await LayerxGTwplUe.totalSupply.call({from: accounts[3]});
		const boolBvXtVSG = await LayerxGTwplUe.setIsPaused.call(boollNABMOt, {from: accounts[2]});
		await LayerxGTwplUe.paused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxGTwplUe.approveAndCall.call(addressTRCGS6j, uintVI1pM62, byteRaei21y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressaEknTyN = "0x0000000000000000000000000000000000000001"
		const LayerxI2tw1Rc = await Layerx.new(addressaEknTyN, {from: accounts[2]});
		const uintBJ3426k = BigInt("738")
		const addresshtGcybr = accounts[2]
		const addressaS1l28m = "0x0000000000000000000000000000000000000001"
		const uintwJguNjb = BigInt("643")
		const addressjbb9Kac = accounts[3]
		const uint0fsSom = BigInt("1468")
		const boolwQbmVEL = await LayerxI2tw1Rc.transferFrom.call(addressaS1l28m, addresshtGcybr, uintBJ3426k, {from: accounts[4]});
		const boolB2F0Ue1 = await LayerxI2tw1Rc.approve.call(addressjbb9Kac, uintwJguNjb, {from: accounts[4]});
		const uinttFJiyvO = await LayerxI2tw1Rc.getStakesNum.call({from: accounts[3]});
		await LayerxI2tw1Rc.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uintf5ktf4Y = await LayerxI2tw1Rc.withdraw.call(uint0fsSom, {from: accounts[0]});

		await expect(LayerxI2tw1Rc.transferFrom.call(addressaS1l28m, addresshtGcybr, uintBJ3426k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskISSak = "0x0000000000000000000000000000000000000001"
		const LayerxW2CxiU = await Layerx.new(addresskISSak, {from: accounts[4]});
		const uintPKdkcP = BigInt("768")
		const address4LZKN7 = accounts[4]
		const addressEOeDM29 = accounts[0]
		const uintYTAwMVo = await LayerxW2CxiU.getStakesNum.call({from: accounts[3]});
		const boolQw1fw5O = await LayerxW2CxiU.approve.call(address4LZKN7, uintPKdkcP, {from: accounts[3]});
		const uintSwG5lsi = await LayerxW2CxiU.balanceOf.call(addressEOeDM29, {from: accounts[0]});

		assert.equal(boolQw1fw5O, true)
		assert.equal(uintSwG5lsi, BigInt("0"))
		assert.equal(uintYTAwMVo, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addressu3mLBcr = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressu3mLBcr, {from: accounts[3]});
		const uintHorQCq1 = BigInt("1735")
		const uintXxb2MY = await LayerxUpQKAk0.getStakesNum.call({from: accounts[0]});
		const uintS64PVgI = await LayerxUpQKAk0.totalSupply.call({from: accounts[0]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		const uintQxNeX9N = await LayerxUpQKAk0.withdraw.call(uintHorQCq1, {from: accounts[4]});
		await LayerxUpQKAk0.paused.call({from: accounts[1]});

		assert.equal(uintS64PVgI, BigInt("40000000000000000000000"))
		assert.equal(uintXxb2MY, BigInt("1"))
		await expect(LayerxUpQKAk0.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressp705Iz6 = accounts[0]
		const LayerxKBn8uqD = await Layerx.new(addressp705Iz6, {from: accounts[3]});
		const addressmeDBLKo = accounts[3]
		const addressiem94Cq = "0x0000000000000000000000000000000000000001"
		const addressgi9FSP = accounts[0]
		const uintroUVrfe = await LayerxKBn8uqD.totalSupply.call({from: accounts[1]});
		const uintmJ154TK = await LayerxKBn8uqD.balanceOf.call(addressmeDBLKo, {from: accounts[2]});
		const uintgyGS4mI = await LayerxKBn8uqD.allowance.call(addressgi9FSP, addressiem94Cq, {from: accounts[1]});
		const uintuK1bRlD = await LayerxKBn8uqD.totalSupply.call({from: accounts[1]});

		assert.equal(uintgyGS4mI, BigInt("0"))
		assert.equal(uintmJ154TK, BigInt("0"))
		assert.equal(uintroUVrfe, BigInt("40000000000000000000000"))
		assert.equal(uintuK1bRlD, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addressjnq7Yy2 = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressjnq7Yy2, {from: accounts[3]});
		const addressALLvdV = accounts[0]
		const addressIgh0Y15 = "0x0000000000000000000000000000000000000001"
		const uintEVmbazN = BigInt("1735")
		const uintx7KjEZg = BigInt("1004")
		const addressRolH68s = accounts[3]
		const uintXxb2MY = await LayerxUpQKAk0.getStakesNum.call({from: accounts[0]});
		await LayerxUpQKAk0.onlyOwner.call({from: accounts[2]});
		const uintS64PVgI = await LayerxUpQKAk0.totalSupply.call({from: accounts[0]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		const uintQlzNM2p = await LayerxUpQKAk0.allowance.call(addressIgh0Y15, addressALLvdV, {from: accounts[4]});
		const uintQxNeX9N = await LayerxUpQKAk0.withdraw.call(uintEVmbazN, {from: accounts[4]});
		const boolfXuxbA1 = await LayerxUpQKAk0.transfer.call(addressRolH68s, uintx7KjEZg, {from: accounts[2]});
		await LayerxUpQKAk0.paused.call({from: accounts[1]});

		assert.equal(uintXxb2MY, BigInt("1"))
		await expect(LayerxUpQKAk0.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrqHfXnu = accounts[1]
		const Layerxh5ucOmT = await Layerx.new(addressrqHfXnu, {from: accounts[4]});
		const addressyeOrpgt = accounts[3]
		const addressHZd0by = accounts[2]
		const uintz1uSZ7 = BigInt("1084")
		const addressWMUxt9G = accounts[0]
		const addressTCjMwJE = accounts[0]
		const uintWairV9H = await Layerxh5ucOmT.allowance.call(addressHZd0by, addressyeOrpgt, {from: accounts[3]});
		await Layerxh5ucOmT.addStakePayment.call({from: accounts[4]});
		const booluxEUuR = await Layerxh5ucOmT.transferFrom.call(addressTCjMwJE, addressWMUxt9G, uintz1uSZ7, {from: accounts[3]});

		assert.equal(uintWairV9H, BigInt("0"))
		await expect(Layerxh5ucOmT.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressz99DHoa = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressz99DHoa, {from: accounts[3]});
		const uintN3wC2h1 = BigInt("1202")
		const uintXxb2MY = await LayerxUpQKAk0.getStakesNum.call({from: accounts[0]});
		const uintS64PVgI = await LayerxUpQKAk0.totalSupply.call({from: accounts[0]});
		const uintz0Ccq8p = await LayerxUpQKAk0.lock.call(uintN3wC2h1, {from: accounts[1]});
		await LayerxUpQKAk0.paused.call({from: accounts[3]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		await LayerxUpQKAk0.paused.call({from: accounts[1]});

		assert.equal(uintS64PVgI, BigInt("40000000000000000000000"))
		assert.equal(uintXxb2MY, BigInt("1"))
		await expect(LayerxUpQKAk0.lock.call(uintN3wC2h1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressO8Qtdhr = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressO8Qtdhr, {from: accounts[3]});
		const uintVKn2U4 = BigInt("1319")
		const addressz46VGlw = accounts[1]
		const uint9Y7If7 = BigInt("598")
		const uintMPWt7QC = await LayerxUpQKAk0.getStakesNum.call({from: accounts[4]});
		const boolVxTm7VY = await LayerxUpQKAk0.transfer.call(addressz46VGlw, uintVKn2U4, {from: accounts[2]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		await LayerxUpQKAk0.paused.call({from: accounts[1]});
		const uint256Zeyp7vL = await LayerxUpQKAk0.burn.call(uint9Y7If7, {from: accounts[2]});

		assert.equal(uintMPWt7QC, BigInt("1"))
		await expect(LayerxUpQKAk0.transfer.call(addressz46VGlw, uintVKn2U4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYkYfbAr = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressYkYfbAr, {from: accounts[3]});
		const boolCRRIMK = false
		const uintXxb2MY = await LayerxUpQKAk0.getStakesNum.call({from: accounts[0]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		const boolFol55SP = await LayerxUpQKAk0.setIsPaused.call(boolCRRIMK, {from: accounts[3]});
		await LayerxUpQKAk0.paused.call({from: accounts[1]});

		assert.equal(uintXxb2MY, BigInt("1"))
		await expect(LayerxUpQKAk0.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHUKtR8G = accounts[5]
		const LayerxrvV32Yw = await Layerx.new(addressHUKtR8G, {from: accounts[2]});
		await LayerxrvV32Yw.unlock.call({from: accounts[1]});
		const uintorrD6y7 = await LayerxrvV32Yw.totalSupply.call({from: accounts[0]});

		await expect(LayerxrvV32Yw.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKKXkSvX = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressKKXkSvX, {from: accounts[3]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		await LayerxUpQKAk0.f.call({from: accounts[2]});

		await expect(LayerxUpQKAk0.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYnBcYiF = accounts[2]
		const LayerxsCQXjxr = await Layerx.new(addressYnBcYiF, {from: "0x0000000000000000000000000000000000000001"});
		const uintAme9r7E = BigInt("900")
		const addressOpSK1J = accounts[0]
		const uintCXx6wwh = BigInt("1427")
		const address6BoEwZ = accounts[1]
		const addressEaRTkiI = accounts[3]
		const uintIhiM8yz = await LayerxsCQXjxr.withdraw.call(uintAme9r7E, {from: accounts[0]});
		const uintUAzzGRk = await LayerxsCQXjxr.balanceOf.call(addressOpSK1J, {from: accounts[0]});
		const boolekYYwah = await LayerxsCQXjxr.transferFrom.call(addressEaRTkiI, address6BoEwZ, uintCXx6wwh, {from: "0x0000000000000000000000000000000000000001"});
		const uinturRGF6Q = await LayerxsCQXjxr.totalSupply.call({from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addresshW39ssC = accounts[1]
		const Layerxh5ucOmT = await Layerx.new(addresshW39ssC, {from: accounts[4]});
		const addressxtrmT0g = accounts[3]
		const uintTusdjzA = BigInt("1100")
		const addressJBLj8K = accounts[4]
		const addressJ6j6lbO = accounts[2]
		await Layerxh5ucOmT.addStakePayment.call({from: accounts[1]});
		const uintf7Z4bf = await Layerxh5ucOmT.balanceOf.call(addressxtrmT0g, {from: accounts[5]});
		const uint256N6cwNsw = await Layerxh5ucOmT.burn.call(uintTusdjzA, {from: accounts[1]});
		const uintWairV9H = await Layerxh5ucOmT.allowance.call(addressJ6j6lbO, addressJBLj8K, {from: accounts[3]});

		await expect(Layerxh5ucOmT.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressL0TgRwb = accounts[3]
		const LayerxUpQKAk0 = await Layerx.new(addressL0TgRwb, {from: accounts[3]});
		const addressZWTMPFI = accounts[2]
		const uintfYQOC0K = BigInt("1121")
		const addressN8IIDBU = await LayerxUpQKAk0.transferOwnership.call(addressZWTMPFI, {from: accounts[3]});
		await LayerxUpQKAk0.unlock.call({from: accounts[4]});
		const uint2teG78 = await LayerxUpQKAk0.exist.call(uintfYQOC0K, {from: accounts[0]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});
		await LayerxUpQKAk0.addStakePayment.call({from: accounts[3]});

		await expect(LayerxUpQKAk0.unlock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSECKQBI = accounts[1]
		const Layerxh5ucOmT = await Layerx.new(addressSECKQBI, {from: accounts[4]});
		const addressLaFcLz = accounts[4]
		const addressjrJBuDE = accounts[4]
		const addressqGQ6Is4 = accounts[4]
		const uintIV8KxOO = BigInt("1059")
		const addressn2XQZ1v = "0x0000000000000000000000000000000000000001"
		const addressOTMTVop = accounts[0]
		const uintFucHBYy = BigInt("1549")
		const uintWairV9H = await Layerxh5ucOmT.allowance.call(addressjrJBuDE, addressLaFcLz, {from: accounts[3]});
		const addressBBs0Ub = await Layerxh5ucOmT.setNewStakeCreator.call(addressqGQ6Is4, {from: accounts[1]});
		const uintDIWcJmX = await Layerxh5ucOmT.lock.call(uintIV8KxOO, {from: accounts[0]});
		const uintrOHF4A1 = await Layerxh5ucOmT.allowance.call(addressOTMTVop, addressn2XQZ1v, {from: accounts[1]});
		const uintTD2umk6 = await Layerxh5ucOmT.lock.call(uintFucHBYy, {from: accounts[3]});

		assert.equal(uintWairV9H, BigInt("0"))
		await expect(Layerxh5ucOmT.lock.call(uintIV8KxOO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})