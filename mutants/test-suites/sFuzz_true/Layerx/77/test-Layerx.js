const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressGF8vR5S = accounts[4]
		const LayerxIBuZqtd = await Layerx.new(addressGF8vR5S, {from: accounts[2]});
		const uintDc2ZTBY = BigInt("1201")
		const addressAF6MBM6 = accounts[5]
		const addressolROAwj = accounts[3]
//		const uintZEh3eS1 = await LayerxIBuZqtd.lock.call(uintDc2ZTBY, {from: accounts[0]});
//		const addressqSv2AnU = await LayerxIBuZqtd.transferOwnership.call(addressAF6MBM6, {from: accounts[2]});
//		const uintYyloLIZ = await LayerxIBuZqtd.balanceOf.call(addressolROAwj, {from: accounts[4]});

		await expect(LayerxIBuZqtd.lock.call(uintDc2ZTBY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUMGxtBr = "0x0000000000000000000000000000000000000001"
		const Layerxj3xMxro = await Layerx.new(addressUMGxtBr, {from: accounts[3]});
		const uintaxYwiK3 = BigInt("1105")
		const uintkJLt1J = BigInt("1032")
		const addresspfFbqxz = accounts[1]
//		await Layerxj3xMxro.unlock.call({from: accounts[1]});
//		const uintxgzx73v = await Layerxj3xMxro.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintkfUwmsC = await Layerxj3xMxro.getStakesNum.call({from: accounts[4]});
//		const uint256siZYVtN = await Layerxj3xMxro.burn.call(uintaxYwiK3, {from: accounts[4]});
//		const boolL2McckW = await Layerxj3xMxro.approve.call(addresspfFbqxz, uintkJLt1J, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Layerxj3xMxro.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZ8Y7hD = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressZ8Y7hD, {from: accounts[2]});
		const uintB1lKymK = BigInt("636")
		const addressZrVaMtg = accounts[2]
		const addressoyjA3i8 = accounts[2]
		const byteBAA2UiE = "0x171c000502031c1818110b1b02081f17"
		const uintIo63Jbt = BigInt("348")
		const addressFIsohZ = accounts[4]
		const addressISgZLcw = accounts[5]
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressoyjA3i8, addressZrVaMtg, uintB1lKymK, {from: accounts[1]});
//		const boolB1GlPiS = await LayerxX3TY5li.approveAndCall.call(addressFIsohZ, uintIo63Jbt, byteBAA2UiE, {from: accounts[4]});
//		const addresscf4UZSg = await LayerxX3TY5li.setNewStakeCreator.call(addressISgZLcw, {from: accounts[4]});

		await expect(LayerxX3TY5li.transferFrom.call(addressoyjA3i8, addressZrVaMtg, uintB1lKymK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHGYSJ4l = accounts[3]
		const LayerxzHmuZD4 = await Layerx.new(addressHGYSJ4l, {from: accounts[0]});
		const uintLI2dWXD = BigInt("1801")
		const addressIW2tSI = "0x0000000000000000000000000000000000000001"
		const byteXfU2qN1 = "0x1e06111c141b1e1317141318151f"
		const uintyxUDDFd = BigInt("1845")
		const addressRMrGNcI = accounts[5]
//		const boolwUJkgDT = await LayerxzHmuZD4.transfer.call(addressIW2tSI, uintLI2dWXD, {from: accounts[0]});
//		const boolUvmpfV2 = await LayerxzHmuZD4.approveAndCall.call(addressRMrGNcI, uintyxUDDFd, byteXfU2qN1, {from: accounts[3]});
//		await LayerxzHmuZD4.addStakePayment.call({from: accounts[1]});

		await expect(LayerxzHmuZD4.transfer.call(addressIW2tSI, uintLI2dWXD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjjD1q6t = accounts[3]
		const LayerxII9FeN = await Layerx.new(addressjjD1q6t, {from: accounts[1]});
		const uintFdUaVeg = BigInt("350")
		const uints7weMvU = BigInt("1894")
		const addressbUP1oxY = accounts[4]
//		const uintyw93tsc = await LayerxII9FeN.exist.call(uintFdUaVeg, {from: accounts[1]});
//		const uintGKxW0l = await LayerxII9FeN.exist.call(uints7weMvU, {from: accounts[2]});
//		const uintfxidnFG = await LayerxII9FeN.totalSupply.call({from: accounts[3]});
//		const addresstyd4ZaT = await LayerxII9FeN.transferOwnership.call(addressbUP1oxY, {from: accounts[0]});

		await expect(LayerxII9FeN.exist.call(uintFdUaVeg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDzCWMc1 = accounts[5]
		const LayerxrLdB1WO = await Layerx.new(addressDzCWMc1, {from: "0x0000000000000000000000000000000000000001"});
		const uintSorajkP = BigInt("471")
		const addressdlvYxhV = accounts[2]
		const addressxJDuyUW = accounts[2]
		const addressuERrzVy = accounts[5]
		const addresssPsDwdr = accounts[4]
		const booln1Yenwu = await LayerxrLdB1WO.transferFrom.call(addressxJDuyUW, addressdlvYxhV, uintSorajkP, {from: accounts[0]});
		await LayerxrLdB1WO.f.call({from: accounts[2]});
		const uintmxKUJGZ = await LayerxrLdB1WO.allowance.call(addresssPsDwdr, addressuERrzVy, {from: accounts[2]});
	});

	it('test for Layerx', async () => {
		const addressoWCqd12 = accounts[3]
		const LayerxvDypkgZ = await Layerx.new(addressoWCqd12, {from: accounts[4]});
		const bytecv9sAMy = "0x1609031c07150a08040d050412020c07100b161310021a03"
		const uintJNdalET = BigInt("1917")
		const addressdZcfMo = accounts[2]
		const addressS1V4aV9 = "0x0000000000000000000000000000000000000001"
		const uintV5qkKKn = BigInt("601")
		const uintxydM5xU = BigInt("1607")
		const uint0jwVaw = BigInt("1608")
//		const boolxvmU4oD = await LayerxvDypkgZ.approveAndCall.call(addressdZcfMo, uintJNdalET, bytecv9sAMy, {from: accounts[1]});
//		const addressT5tnF6 = await LayerxvDypkgZ.transferOwnership.call(addressS1V4aV9, {from: accounts[2]});
//		const uintDRRD6g = await LayerxvDypkgZ.lock.call(uintV5qkKKn, {from: "0x0000000000000000000000000000000000000001"});
//		const uintLfltmH = await LayerxvDypkgZ.exist.call(uintxydM5xU, {from: accounts[4]});
//		const uint256dR0JFM = await LayerxvDypkgZ.burn.call(uint0jwVaw, {from: accounts[3]});

		await expect(LayerxvDypkgZ.approveAndCall.call(addressdZcfMo, uintJNdalET, bytecv9sAMy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressFIe1rcQ = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressFIe1rcQ, {from: accounts[2]});
		const addressSXn34lx = "0x0000000000000000000000000000000000000001"
		const uinthbcyuZL = BigInt("636")
		const addresspoKo20K = accounts[2]
		const addressNIh1XAl = accounts[2]
		const byteeJAYX8Y = "0x171c000502031c1818110b1b02081f17"
		const uintVgWYYP = BigInt("348")
		const addressHmuhv03 = accounts[4]
		const addresskVZKlNf = accounts[6]
		const uintLZ9DyeN = await LayerxX3TY5li.balanceOf.call(addressSXn34lx, {from: accounts[2]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressNIh1XAl, addresspoKo20K, uinthbcyuZL, {from: accounts[1]});
//		const boolB1GlPiS = await LayerxX3TY5li.approveAndCall.call(addressHmuhv03, uintVgWYYP, byteeJAYX8Y, {from: accounts[4]});
//		const addresscf4UZSg = await LayerxX3TY5li.setNewStakeCreator.call(addresskVZKlNf, {from: accounts[4]});
//		const uintBZITigu = await LayerxX3TY5li.getStakesNum.call({from: accounts[0]});

		assert.equal(uintLZ9DyeN, BigInt("0"))
		await expect(LayerxX3TY5li.transferFrom.call(addressNIh1XAl, addresspoKo20K, uinthbcyuZL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVyPLVke = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressVyPLVke, {from: accounts[2]});
		const uintEyTG0m1 = BigInt("636")
		const addressNAcJcrQ = accounts[2]
		const addressIIHGARR = accounts[2]
		const bytejdcLZXf = "0x1a0113091a070f0e0e06071c0e200b04051b181e17091816"
		const uintV5Xktf7 = BigInt("1473")
		const addressyvmExic = accounts[3]
		const byteS93HQsn = "0x171c000502031c1818110b1b02081f17"
		const uintA8DzNX = BigInt("345")
		const addressBpoKpej = accounts[4]
		const addressQf657a = accounts[5]
//		await LayerxX3TY5li.addStakePayment.call({from: accounts[1]});
//		await LayerxX3TY5li.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressIIHGARR, addressNAcJcrQ, uintEyTG0m1, {from: accounts[1]});
//		const boolVBoNGjN = await LayerxX3TY5li.approveAndCall.call(addressyvmExic, uintV5Xktf7, bytejdcLZXf, {from: accounts[4]});
//		const boolB1GlPiS = await LayerxX3TY5li.approveAndCall.call(addressBpoKpej, uintA8DzNX, byteS93HQsn, {from: accounts[4]});
//		const addresscf4UZSg = await LayerxX3TY5li.setNewStakeCreator.call(addressQf657a, {from: accounts[4]});

		await expect(LayerxX3TY5li.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressOoVzXoi = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressOoVzXoi, {from: accounts[2]});
		const uintNj2Xcn = BigInt("1210")
		const uintzkx7qBt = BigInt("636")
		const addressjjUS1FF = accounts[2]
		const addressc3H6eM9 = accounts[2]
		const byteboyEYeq = "0x171c000502031c1818110b1b02081f17"
		const uinttlzOo3z = BigInt("336")
		const addressYmg0Dhc = accounts[4]
		const addressiAFZjNx = accounts[5]
		const uint256YXeWfq = await LayerxX3TY5li.burn.call(uintNj2Xcn, {from: accounts[0]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressc3H6eM9, addressjjUS1FF, uintzkx7qBt, {from: accounts[1]});
//		const boolB1GlPiS = await LayerxX3TY5li.approveAndCall.call(addressYmg0Dhc, uinttlzOo3z, byteboyEYeq, {from: accounts[4]});
//		const addresscf4UZSg = await LayerxX3TY5li.setNewStakeCreator.call(addressiAFZjNx, {from: accounts[4]});

		await expect(LayerxX3TY5li.transferFrom.call(addressc3H6eM9, addressjjUS1FF, uintzkx7qBt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressayb4RFZ = accounts[1]
		const LayerxaHCrE3e = await Layerx.new(addressayb4RFZ, {from: accounts[1]});
		const uintv0AKIxF = BigInt("1143")
		const addressp70xSGd = accounts[0]
		const uintS2HX3Qp = BigInt("627")
		const bytem5rCv6 = "0x0301141e051b0b0c0b1a1b141b1220110c090e141d051b0f08000d0f1e1e"
		const uintWzfEB1A = BigInt("1489")
		const addressOUGsWDu = accounts[3]
		const boolzibMvcw = await LayerxaHCrE3e.approve.call(addressp70xSGd, uintv0AKIxF, {from: accounts[1]});
//		const uintiXamVZT = await LayerxaHCrE3e.exist.call(uintS2HX3Qp, {from: accounts[1]});
//		const boolxKB72DZ = await LayerxaHCrE3e.approveAndCall.call(addressOUGsWDu, uintWzfEB1A, bytem5rCv6, {from: accounts[2]});
//		await LayerxaHCrE3e.onlyOwner.call({from: accounts[2]});
//		await LayerxaHCrE3e.unlock.call({from: accounts[5]});

		assert.equal(boolzibMvcw, true)
		await expect(LayerxaHCrE3e.exist.call(uintS2HX3Qp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmlC3YFz = accounts[0]
		const LayerxuwqLhmK = await Layerx.new(addressmlC3YFz, {from: accounts[1]});
		const addressqabGIVQ = accounts[1]
		const addressB3lslqi = accounts[2]
		const uintqZwB3F = BigInt("1466")
		const uintb7RZa69 = await LayerxuwqLhmK.allowance.call(addressB3lslqi, addressqabGIVQ, {from: accounts[0]});
//		const uintGehmRqN = await LayerxuwqLhmK.lock.call(uintqZwB3F, {from: accounts[0]});
//		const uintpt8z2eH = await LayerxuwqLhmK.getStakesNum.call({from: accounts[2]});
//		await LayerxuwqLhmK.onlyOwner.call({from: accounts[2]});

		assert.equal(uintb7RZa69, BigInt("0"))
		await expect(LayerxuwqLhmK.lock.call(uintqZwB3F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNcpnQT2 = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressNcpnQT2, {from: accounts[2]});
		const uintbocqJt8 = BigInt("636")
		const addressZ1kVMaL = accounts[3]
		const addressMCrWlob = accounts[2]
		const uintHtFtuH9 = await LayerxX3TY5li.getStakesNum.call({from: accounts[0]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressMCrWlob, addressZ1kVMaL, uintbocqJt8, {from: accounts[1]});

		assert.equal(uintHtFtuH9, BigInt("1"))
		await expect(LayerxX3TY5li.transferFrom.call(addressMCrWlob, addressZ1kVMaL, uintbocqJt8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKy2xu5 = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressKy2xu5, {from: accounts[2]});
		const uinttAM2ErH = BigInt("636")
		const addresszL7aPoO = accounts[3]
		const addressIWTDCGv = accounts[2]
//		await LayerxX3TY5li.f.call({from: accounts[1]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressIWTDCGv, addresszL7aPoO, uinttAM2ErH, {from: accounts[1]});

		await expect(LayerxX3TY5li.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKSGZ9s = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressKSGZ9s, {from: accounts[2]});
		const uintcADj1Vx = BigInt("576")
		const uintlTzVBwq = BigInt("636")
		const addresst52LaBz = accounts[0]
		const addressZXDYSsr = accounts[3]
//		const uinthuaMHR = await LayerxX3TY5li.withdraw.call(uintcADj1Vx, {from: accounts[3]});
//		await LayerxX3TY5li.unlock.call({from: accounts[2]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressZXDYSsr, addresst52LaBz, uintlTzVBwq, {from: accounts[1]});

		await expect(LayerxX3TY5li.withdraw.call(uintcADj1Vx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEva4kqP = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressEva4kqP, {from: accounts[2]});
		const booljhQGKe = false
		const uintW1MwSl0 = BigInt("636")
		const addressg87wPuu = accounts[1]
		const addressGWzdOHC = accounts[2]
		const boolw013q6x = await LayerxX3TY5li.setIsPaused.call(booljhQGKe, {from: accounts[0]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressGWzdOHC, addressg87wPuu, uintW1MwSl0, {from: accounts[1]});

		await expect(LayerxX3TY5li.transferFrom.call(addressGWzdOHC, addressg87wPuu, uintW1MwSl0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressgbFH4yC = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressgbFH4yC, {from: accounts[2]});
		const addressdO6TmAV = accounts[4]
		const uintWPiCJqP = BigInt("651")
		const addressSKjrnax = accounts[2]
		const addressjdQ7aMH = accounts[2]
		const addressRVLNSFQ = await LayerxX3TY5li.transferOwnership.call(addressdO6TmAV, {from: accounts[0]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressjdQ7aMH, addressSKjrnax, uintWPiCJqP, {from: accounts[1]});
//		await LayerxX3TY5li.unlock.call({from: accounts[4]});

		await expect(LayerxX3TY5li.transferFrom.call(addressjdQ7aMH, addressSKjrnax, uintWPiCJqP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressh3u2xM = accounts[4]
		const LayerxyP7d13l = await Layerx.new(addressh3u2xM, {from: accounts[3]});
		const addressR5KhTM6 = accounts[0]
		const addressdGeTO1a = accounts[3]
		const addressyMUutQl = accounts[4]
		const boolPPop1Cl = true
		const uintNQM2wuL = await LayerxyP7d13l.allowance.call(addressdGeTO1a, addressR5KhTM6, {from: accounts[4]});
		const uintsXVNs5r = await LayerxyP7d13l.balanceOf.call(addressyMUutQl, {from: accounts[1]});
		const uinthgmsmIf = await LayerxyP7d13l.totalSupply.call({from: accounts[1]});
		const uinthgGx26n = await LayerxyP7d13l.totalSupply.call({from: accounts[3]});
//		const boolLA4Ao3D = await LayerxyP7d13l.setIsPaused.call(boolPPop1Cl, {from: accounts[3]});

		assert.equal(uintNQM2wuL, BigInt("0"))
		assert.equal(uinthgGx26n, BigInt("40000000000000000000000"))
		assert.equal(uinthgmsmIf, BigInt("40000000000000000000000"))
		assert.equal(uintsXVNs5r, BigInt("40000000000000000000000"))
		await expect(LayerxyP7d13l.setIsPaused.call(boolPPop1Cl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressik9Yqy7 = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressik9Yqy7, {from: accounts[2]});
		const addressa2pnw3h = accounts[0]
		const uintaSlpCbR = BigInt("1306")
		const addressIatwip8 = accounts[2]
		const addresslLoHVci = accounts[2]
		const uintQhEv4QO = BigInt("636")
		const addressQjD1cdT = accounts[2]
		const addressyYwUdhc = accounts[3]
		const addressZQHQ3x = await LayerxX3TY5li.setNewStakeCreator.call(addressa2pnw3h, {from: accounts[0]});
//		const booltOMuwhY = await LayerxX3TY5li.transferFrom.call(addresslLoHVci, addressIatwip8, uintaSlpCbR, {from: accounts[3]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressyYwUdhc, addressQjD1cdT, uintQhEv4QO, {from: accounts[1]});

		await expect(LayerxX3TY5li.transferFrom.call(addresslLoHVci, addressIatwip8, uintaSlpCbR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJFEDPT = accounts[0]
		const LayerxX3TY5li = await Layerx.new(addressJFEDPT, {from: accounts[2]});
		const addresslXKcK3w = accounts[3]
		const address7YwT1T = accounts[5]
		const uintse14idU = BigInt("636")
		const addresspuMFFnv = accounts[2]
		const addressxc6RWlI = accounts[3]
//		await LayerxX3TY5li.addStakePayment.call({from: accounts[0]});
//		const uintbxkgYcj = await LayerxX3TY5li.balanceOf.call(addresslXKcK3w, {from: accounts[3]});
//		const addressYftH44I = await LayerxX3TY5li.transferOwnership.call(address7YwT1T, {from: accounts[0]});
//		const boolie32Vpt = await LayerxX3TY5li.transferFrom.call(addressxc6RWlI, addresspuMFFnv, uintse14idU, {from: accounts[1]});

		await expect(LayerxX3TY5li.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})