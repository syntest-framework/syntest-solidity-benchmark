const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressVS2GOVc = accounts[1]
		const LayerxeA8cFR8 = await Layerx.new(addressVS2GOVc, {from: accounts[3]});
		const uintlc31S2M = BigInt("1191")
		const uinto2WmfT9 = BigInt("643")
		const addresss2cy4Vi = accounts[4]
//		const uintX776L3z = await LayerxeA8cFR8.exist.call(uintlc31S2M, {from: accounts[5]});
//		const uint256aQz4xiy = await LayerxeA8cFR8.burn.call(uinto2WmfT9, {from: accounts[3]});
//		const addressibq6wkn = await LayerxeA8cFR8.transferOwnership.call(addresss2cy4Vi, {from: accounts[4]});
//		await LayerxeA8cFR8.f.call({from: accounts[2]});

		await expect(LayerxeA8cFR8.exist.call(uintlc31S2M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqr5MsOQ = accounts[4]
		const LayerxvCsGGYe = await Layerx.new(addressqr5MsOQ, {from: accounts[3]});
		const addressVYfBlA = accounts[4]
//		await LayerxvCsGGYe.f.call({from: accounts[4]});
//		const uintIGmnCdk = await LayerxvCsGGYe.balanceOf.call(addressVYfBlA, {from: accounts[1]});
//		await LayerxvCsGGYe.f.call({from: accounts[1]});
//		await LayerxvCsGGYe.paused.call({from: accounts[4]});

		await expect(LayerxvCsGGYe.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNEvP28V = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addressNEvP28V, {from: accounts[5]});
		const uintnYXabI8 = BigInt("1232")
		const boolMlaGnQE = true
//		await LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]});
//		const uintGLuCGKZ = await LayerxTfC7Qz5.withdraw.call(uintnYXabI8, {from: accounts[2]});
//		const boolY68Nit = await LayerxTfC7Qz5.setIsPaused.call(boolMlaGnQE, {from: accounts[3]});

		await expect(LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUP5w7E5 = accounts[1]
		const LayerxOUzJrcC = await Layerx.new(addressUP5w7E5, {from: accounts[2]});
		const uintOKNKYjh = BigInt("1858")
		const addressGExWZT3 = accounts[2]
		const addressG2RpQFV = "0x0000000000000000000000000000000000000001"
//		const boolfQADSBN = await LayerxOUzJrcC.transferFrom.call(addressG2RpQFV, addressGExWZT3, uintOKNKYjh, {from: accounts[3]});
//		await LayerxOUzJrcC.addStakePayment.call({from: accounts[3]});
//		const uintHY2Hn2 = await LayerxOUzJrcC.getStakesNum.call({from: accounts[5]});
//		await LayerxOUzJrcC.addStakePayment.call({from: accounts[4]});

		await expect(LayerxOUzJrcC.transferFrom.call(addressG2RpQFV, addressGExWZT3, uintOKNKYjh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrLbey3N = accounts[4]
		const LayerxVxzEJz = await Layerx.new(addressrLbey3N, {from: accounts[3]});
		const addressggDlVFs = accounts[1]
		const addresseeyHqPg = accounts[3]
		const uinttqYPmvR = BigInt("603")
		const addressuJdKyZ5 = accounts[2]
		const addressgbNicJz = accounts[1]
		const uintGzcjoXz = await LayerxVxzEJz.getStakesNum.call({from: accounts[1]});
		const uint0ehK53 = await LayerxVxzEJz.allowance.call(addresseeyHqPg, addressggDlVFs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256iB4Clg = await LayerxVxzEJz.burn.call(uinttqYPmvR, {from: accounts[1]});
//		const uintz6XerIw = await LayerxVxzEJz.allowance.call(addressgbNicJz, addressuJdKyZ5, {from: accounts[0]});

		assert.equal(uint0ehK53, BigInt("0"))
		assert.equal(uintGzcjoXz, BigInt("1"))
		await expect(LayerxVxzEJz.burn.call(uinttqYPmvR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressksSdKRr = accounts[2]
		const LayerxkSJlpcg = await Layerx.new(addressksSdKRr, {from: accounts[4]});
		const uintYLrtntR = BigInt("1355")
		const addressw4wa48N = "0x0000000000000000000000000000000000000001"
		const uintHlWyyoA = BigInt("831")
		const addressqUFeyTu = accounts[1]
		const uintYwmRzX2 = BigInt("60")
		const byteE68R94H = "0x1005041a0d130b1613120b0601"
		const uintWRkHKdN = BigInt("674")
		const addressnXTMJIe = "0x0000000000000000000000000000000000000001"
//		const boolrbQay1J = await LayerxkSJlpcg.transfer.call(addressw4wa48N, uintYLrtntR, {from: accounts[3]});
//		const booldlEnn7p = await LayerxkSJlpcg.approve.call(addressqUFeyTu, uintHlWyyoA, {from: accounts[5]});
//		const uintnAKuMCd = await LayerxkSJlpcg.lock.call(uintYwmRzX2, {from: accounts[5]});
//		const booln72XWfd = await LayerxkSJlpcg.approveAndCall.call(addressnXTMJIe, uintWRkHKdN, byteE68R94H, {from: accounts[3]});

		await expect(LayerxkSJlpcg.transfer.call(addressw4wa48N, uintYLrtntR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressu6INS8i = accounts[5]
		const LayerxZq0HMw = await Layerx.new(addressu6INS8i, {from: accounts[5]});
		const addressndYEoO = accounts[0]
		const addresss4m9LBr = accounts[3]
		const bytevSmc5Y = "0x1c000f180b1c000a061912"
		const uintr8bD9tC = BigInt("1205")
		const addresssIHWyBP = accounts[4]
		const addresse1xqmD7 = accounts[2]
		const uintIVXxNcY = BigInt("1834")
		const addressMPRnSbV = accounts[0]
		const uintTwgtExJ = await LayerxZq0HMw.allowance.call(addresss4m9LBr, addressndYEoO, {from: accounts[2]});
//		const boolApwEUw = await LayerxZq0HMw.approveAndCall.call(addresssIHWyBP, uintr8bD9tC, bytevSmc5Y, {from: accounts[4]});
//		const addressI0YKv4e = await LayerxZq0HMw.setNewStakeCreator.call(addresse1xqmD7, {from: accounts[0]});
//		const boollfwjr3R = await LayerxZq0HMw.transfer.call(addressMPRnSbV, uintIVXxNcY, {from: accounts[5]});

		assert.equal(uintTwgtExJ, BigInt("0"))
		await expect(LayerxZq0HMw.approveAndCall.call(addresssIHWyBP, uintr8bD9tC, bytevSmc5Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscn8y3z1 = accounts[2]
		const LayerxhlhMOM = await Layerx.new(addresscn8y3z1, {from: accounts[3]});
		const addressNuk2YVs = accounts[2]
		const addressBzlts9Y = accounts[4]
		const uintTS5f9pV = BigInt("1686")
		const addresscbj3xAD = accounts[4]
		const uintqYQsgyf = BigInt("862")
		const addressPulqoPB = accounts[0]
		const uintw8qrmd = await LayerxhlhMOM.allowance.call(addressBzlts9Y, addressNuk2YVs, {from: accounts[2]});
		const boolqurGfSc = await LayerxhlhMOM.approve.call(addresscbj3xAD, uintTS5f9pV, {from: accounts[0]});
//		const boolAHd3ork = await LayerxhlhMOM.transfer.call(addressPulqoPB, uintqYQsgyf, {from: accounts[0]});

		assert.equal(boolqurGfSc, true)
		assert.equal(uintw8qrmd, BigInt("0"))
		await expect(LayerxhlhMOM.transfer.call(addressPulqoPB, uintqYQsgyf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrdXkxyU = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addressrdXkxyU, {from: accounts[5]});
		const uint79g8u8 = BigInt("1421")
		const addressz7UKw9 = accounts[2]
		const addressRhPjljo = accounts[2]
		const uintIQARAoC = BigInt("1232")
		const boolMlaGnQE = false
		const uintBml2S9W = await LayerxTfC7Qz5.totalSupply.call({from: accounts[5]});
//		const boolySnvLZg = await LayerxTfC7Qz5.transferFrom.call(addressRhPjljo, addressz7UKw9, uint79g8u8, {from: accounts[4]});
//		await LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]});
//		const uintGLuCGKZ = await LayerxTfC7Qz5.withdraw.call(uintIQARAoC, {from: accounts[2]});
//		const boolY68Nit = await LayerxTfC7Qz5.setIsPaused.call(boolMlaGnQE, {from: accounts[3]});

		assert.equal(uintBml2S9W, BigInt("40000000000000000000000"))
		await expect(LayerxTfC7Qz5.transferFrom.call(addressRhPjljo, addressz7UKw9, uint79g8u8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUqJTuJK = accounts[5]
		const LayerxPHMxPtE = await Layerx.new(addressUqJTuJK, {from: accounts[1]});
		const uintDtJMdNt = BigInt("932")
		const addressEGd2a3g = accounts[2]
		const addressnxOAXg4 = accounts[1]
		const addressUaTkGyf = accounts[3]
		const addressfVZPQue = accounts[2]
		const boolQJaXFTg = await LayerxPHMxPtE.approve.call(addressEGd2a3g, uintDtJMdNt, {from: accounts[0]});
		const uintuNlONb3 = await LayerxPHMxPtE.balanceOf.call(addressnxOAXg4, {from: accounts[4]});
		const uintaMMBmmg = await LayerxPHMxPtE.allowance.call(addressfVZPQue, addressUaTkGyf, {from: accounts[1]});
//		await LayerxPHMxPtE.unlock.call({from: accounts[1]});

		assert.equal(boolQJaXFTg, true)
		assert.equal(uintaMMBmmg, BigInt("0"))
		assert.equal(uintuNlONb3, BigInt("0"))
		await expect(LayerxPHMxPtE.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfa05ZLz = accounts[5]
		const LayerxPHMxPtE = await Layerx.new(addressfa05ZLz, {from: accounts[1]});
		const uintT3WtCEO = BigInt("932")
		const addresszsQtEja = accounts[2]
		const addresszHEvIC = accounts[1]
		const addressT0TAfWo = accounts[3]
		const addressQ2cHNia = accounts[2]
		const boolQJaXFTg = await LayerxPHMxPtE.approve.call(addresszsQtEja, uintT3WtCEO, {from: accounts[0]});
//		await LayerxPHMxPtE.addStakePayment.call({from: accounts[4]});
//		const uintuNlONb3 = await LayerxPHMxPtE.balanceOf.call(addresszHEvIC, {from: accounts[4]});
//		const uintaMMBmmg = await LayerxPHMxPtE.allowance.call(addressQ2cHNia, addressT0TAfWo, {from: accounts[1]});
//		await LayerxPHMxPtE.unlock.call({from: accounts[1]});

		assert.equal(boolQJaXFTg, true)
		await expect(LayerxPHMxPtE.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjEm5WTj = accounts[2]
		const LayerxvrR26A = await Layerx.new(addressjEm5WTj, {from: "0x0000000000000000000000000000000000000001"});
		const byteYxUvgL = "0x0f0d0b0c1c1f1210171e12041b0c1908040a0b1d0905011b091f1c1b"
		const uintB4lnhAy = BigInt("759")
		const addressTrbyUFC = accounts[3]
		const boolTw3MUqz = await LayerxvrR26A.approveAndCall.call(addressTrbyUFC, uintB4lnhAy, byteYxUvgL, {from: accounts[4]});
		const uintNqVTYXX = await LayerxvrR26A.totalSupply.call({from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addressLF63Pwk = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addressLF63Pwk, {from: accounts[5]});
		const uintonUUAPU = BigInt("810")
		const uintLNrUWNI = BigInt("1232")
		const boolMlaGnQE = true
//		await LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]});
//		const uintpidR6Tn = await LayerxTfC7Qz5.lock.call(uintonUUAPU, {from: accounts[5]});
//		const uintGLuCGKZ = await LayerxTfC7Qz5.withdraw.call(uintLNrUWNI, {from: accounts[2]});
//		const boolY68Nit = await LayerxTfC7Qz5.setIsPaused.call(boolMlaGnQE, {from: accounts[3]});

		await expect(LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressaBGpIdh = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addressaBGpIdh, {from: accounts[5]});
		const addressPykwmFi = accounts[3]
		const uintltYJLzK = BigInt("1294")
		const addressJHffvvL = "0x0000000000000000000000000000000000000001"
		const addresszdJvIJz = accounts[1]
//		await LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]});
//		const addressYFxbYbP = await LayerxTfC7Qz5.transferOwnership.call(addressPykwmFi, {from: accounts[2]});
//		const booliEsGGCM = await LayerxTfC7Qz5.transferFrom.call(addresszdJvIJz, addressJHffvvL, uintltYJLzK, {from: accounts[0]});

		await expect(LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMX4HU79 = accounts[5]
		const LayerxPHMxPtE = await Layerx.new(addressMX4HU79, {from: accounts[1]});
		const boolZzW1YNS = true
		const booly1GeSuf = await LayerxPHMxPtE.setIsPaused.call(boolZzW1YNS, {from: accounts[5]});
//		await LayerxPHMxPtE.unlock.call({from: accounts[1]});

		await expect(LayerxPHMxPtE.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresstPuOW1B = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addresstPuOW1B, {from: accounts[5]});
		const addressrQnZKo3 = accounts[0]
//		await LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]});
//		const uintP1NYiMR = await LayerxTfC7Qz5.totalSupply.call({from: accounts[5]});
//		const addressS1eJd3b = await LayerxTfC7Qz5.setNewStakeCreator.call(addressrQnZKo3, {from: accounts[2]});
//		const uintWXTpV65 = await LayerxTfC7Qz5.getStakesNum.call({from: accounts[2]});
//		await LayerxTfC7Qz5.unlock.call({from: accounts[1]});

		await expect(LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswjdi9nI = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addresswjdi9nI, {from: accounts[5]});
		const uintLspIrY1 = BigInt("542")
		const uintw2BVR2S = BigInt("1183")
		const addressWaDf5x4 = accounts[5]
		const addressaqYI5ZA = accounts[3]
//		await LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]});
//		const uint256zFRmKxn = await LayerxTfC7Qz5.burn.call(uintLspIrY1, {from: accounts[2]});
//		const bool8bIsEr = await LayerxTfC7Qz5.transfer.call(addressWaDf5x4, uintw2BVR2S, {from: accounts[2]});
//		const address5EvKWm = await LayerxTfC7Qz5.setNewStakeCreator.call(addressaqYI5ZA, {from: accounts[3]});

		await expect(LayerxTfC7Qz5.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressohgmezV = accounts[2]
		const LayerxTfC7Qz5 = await Layerx.new(addressohgmezV, {from: accounts[5]});
		const uintO8qYKrb = BigInt("1705")
		const addressKEN9JmN = accounts[3]
		const uintNWCpLdJ = BigInt("0")
		const addressfg6iBPM = accounts[1]
		const uinthzbbpTH = BigInt("1906")
		const uinte43cUD = BigInt("484")
		const bytetxt7I2d = "0x13150e1b0409071f071a16120417081f1c0907120d"
		const uintYdYFusH = BigInt("1254")
		const addressAAJzRvj = accounts[2]
		const addressEW38ROn = accounts[2]
		const bool3CJwrs = await LayerxTfC7Qz5.approve.call(addressKEN9JmN, uintO8qYKrb, {from: accounts[4]});
//		const uintErk6pDp = await LayerxTfC7Qz5.lock.call(uintNWCpLdJ, {from: accounts[4]});
//		const uintPHolbeM = await LayerxTfC7Qz5.balanceOf.call(addressfg6iBPM, {from: accounts[4]});
//		const uintC2x46DH = await LayerxTfC7Qz5.exist.call(uinthzbbpTH, {from: accounts[3]});
//		const uinthboTyus = await LayerxTfC7Qz5.exist.call(uinte43cUD, {from: accounts[2]});
//		const boollX9bjVx = await LayerxTfC7Qz5.approveAndCall.call(addressAAJzRvj, uintYdYFusH, bytetxt7I2d, {from: accounts[1]});
//		const addressUS3JTwd = await LayerxTfC7Qz5.transferOwnership.call(addressEW38ROn, {from: accounts[4]});

		assert.equal(bool3CJwrs, true)
		await expect(LayerxTfC7Qz5.lock.call(uintNWCpLdJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})