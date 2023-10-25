const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisNqSlbPY = await Ledgis.new({from: accounts[3]});
		const addressmBWCBbS = accounts[3]
		const address4mws37 = accounts[4]
		const uint256SrzsHi3 = await LedgisNqSlbPY.allowance.call(address4mws37, addressmBWCBbS, {from: accounts[3]});
		await LedgisNqSlbPY.unpause.call({from: accounts[1]});
		await LedgisNqSlbPY.unpause.call({from: accounts[5]});

		assert.equal(uint256SrzsHi3, BigInt("0"))
		await expect(LedgisNqSlbPY.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXJrN5Y = await Ledgis.new({from: accounts[3]});
		const uintPT7SY60 = BigInt("1445")
		const address9bYGCH = accounts[4]
		const uintg0c9OK = BigInt("712")
		const addressMrPXza4 = accounts[2]
		const addressukXjqdp = accounts[1]
		const addressBhRGak7 = accounts[1]
		await LedgisXJrN5Y.pause.call({from: accounts[3]});
		const addressPgtXXR = await LedgisXJrN5Y.burn.call(address9bYGCH, uintPT7SY60, {from: accounts[2]});
		const boolR3Qsyk = await LedgisXJrN5Y.decreaseAllowance.call(addressMrPXza4, uintg0c9OK, {from: accounts[1]});
		await LedgisXJrN5Y.whenNotPaused.call({from: accounts[5]});
		const addressttM4LUf = await LedgisXJrN5Y.transferOwnership.call(addressukXjqdp, {from: accounts[3]});
		const uint256PksZnT3 = await LedgisXJrN5Y.balanceOf.call(addressBhRGak7, {from: accounts[2]});

		await expect(LedgisXJrN5Y.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisF8ABSqs = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaG6eVpf = accounts[3]
		const uintLuI7qH7 = BigInt("496")
		const addressJcxRI4w = accounts[4]
		const uintMSxeJF7 = BigInt("1370")
		const addressQHFqw4 = accounts[2]
		const addresshBb4J4C = "0x0000000000000000000000000000000000000001"
		await LedgisF8ABSqs.pause.call({from: accounts[3]});
		await LedgisF8ABSqs.renounceOwnership.call({from: accounts[0]});
		const addressmlExbJm = await LedgisF8ABSqs.transferOwnership.call(addressaG6eVpf, {from: accounts[5]});
		const boolJuUauaJ = await LedgisF8ABSqs.transfer.call(addressJcxRI4w, uintLuI7qH7, {from: accounts[0]});
		const boolkofczFD = await LedgisF8ABSqs.transferFrom.call(addresshBb4J4C, addressQHFqw4, uintMSxeJF7, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const Ledgisaq90YMX = await Ledgis.new({from: accounts[3]});
		const uintVfZCkyv = BigInt("1389")
		const addressvULkWCW = "0x0000000000000000000000000000000000000001"
		const addressxOAswW = accounts[0]
		const addressiXDcEQ4 = accounts[0]
		const uintlTLsgp = BigInt("1871")
		const uintzuvCGzo = BigInt("352")
		const addresswq8Ww9q = accounts[3]
		const boolArNr69b = await Ledgisaq90YMX.increaseAllowance.call(addressvULkWCW, uintVfZCkyv, {from: accounts[4]});
		const uint256wAdeRGX = await Ledgisaq90YMX.allowance.call(addressiXDcEQ4, addressxOAswW, {from: accounts[5]});
		await Ledgisaq90YMX.pause.call({from: accounts[4]});
		await Ledgisaq90YMX.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		await Ledgisaq90YMX.unpause.call({from: accounts[1]});
		const addressTKMQ7mX = await Ledgisaq90YMX.lock.call(addresswq8Ww9q, uintzuvCGzo, uintlTLsgp, {from: accounts[0]});

		assert.equal(boolArNr69b, true)
		assert.equal(uint256wAdeRGX, BigInt("0"))
		await expect(Ledgisaq90YMX.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBp2CsgY = await Ledgis.new({from: accounts[3]});
		const addresstlQaif3 = accounts[5]
		await LedgisBp2CsgY.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await LedgisBp2CsgY.whenNotPaused.call({from: accounts[2]});
		await LedgisBp2CsgY.whenPaused.call({from: accounts[0]});
		const addressfmQDlCE = await LedgisBp2CsgY.freeze.call(addresstlQaif3, {from: accounts[0]});

		await expect(LedgisBp2CsgY.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const addressJ68jItD = accounts[5]
		const addressvXGbQGD = accounts[0]
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addressJ68jItD, {from: accounts[4]});
		const addressofsB4Po = await Ledgisk0aRPOz.unfreeze.call(addressvXGbQGD, {from: accounts[0]});

		assert.equal(uint256WMYxjRg, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintPJLqDY3 = BigInt("460")
		const uintAmRchrD = BigInt("1402")
		const addressTBtsOt8 = accounts[3]
		const uintk0u97o = BigInt("1044")
		const addressOf7Bi9K = accounts[2]
		const addressZX4wwX0 = accounts[5]
		const addressb40V9BG = accounts[1]
		const addressbMJSTfo = accounts[1]
		const addressA5XycM5 = await Ledgisk0aRPOz.lock.call(addressTBtsOt8, uintAmRchrD, uintPJLqDY3, {from: accounts[0]});
		await Ledgisk0aRPOz.renounceOwnership.call({from: accounts[4]});
		const boolcm3yQah = await Ledgisk0aRPOz.transfer.call(addressOf7Bi9K, uintk0u97o, {from: accounts[4]});
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addressZX4wwX0, {from: accounts[4]});
		const uint256CI37xJ8 = await Ledgisk0aRPOz.balanceOf.call(addressb40V9BG, {from: accounts[3]});
		const addressofsB4Po = await Ledgisk0aRPOz.unfreeze.call(addressbMJSTfo, {from: accounts[0]});

		await expect(Ledgisk0aRPOz.lock.call(addressTBtsOt8, uintAmRchrD, uintPJLqDY3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const uintiU2HSt = BigInt("1223")
		const uintXMDBmod = BigInt("1319")
		const addressQZJbYSx = accounts[4]
		const uintVd5rMzG = BigInt("1137")
		const addresski20cL = accounts[3]
		const addressE6q8oIu = accounts[2]
		const addressRQPkHwd = accounts[1]
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressQZJbYSx, uintXMDBmod, uintiU2HSt, {from: accounts[4]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addressE6q8oIu, addresski20cL, uintVd5rMzG, {from: accounts[0]});
		const boolPMGXxg5 = await Ledgis4oTMYY.isFrozen.call(addressRQPkHwd, {from: accounts[5]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		await expect(Ledgis4oTMYY.transferFrom.call(addressE6q8oIu, addresski20cL, uintVd5rMzG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const uintzKhgAe = BigInt("125")
		const addressiAv3JtP = accounts[3]
		const uintBKchvpG = BigInt("1223")
		const uintMgzJ8Vf = BigInt("1319")
		const addressLihcS51 = accounts[4]
		const uintvc1dO1h = BigInt("844")
		const uintBtKYusb = BigInt("165")
		const addresslSyNiJV = accounts[1]
		const uintcj1gXUs = BigInt("1137")
		const addressDu5VQy6 = accounts[3]
		const addressCWJdjd = accounts[2]
		const addressoiP6kR2 = accounts[1]
		const boolxdg9bsV = await Ledgis4oTMYY.mint.call(addressiAv3JtP, uintzKhgAe, {from: accounts[4]});
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressLihcS51, uintMgzJ8Vf, uintBKchvpG, {from: accounts[4]});
		const boolXxnFdUE = await Ledgis4oTMYY.transferWithLockAfter.call(addresslSyNiJV, uintBtKYusb, uintvc1dO1h, {from: accounts[2]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addressCWJdjd, addressDu5VQy6, uintcj1gXUs, {from: accounts[0]});
		const boolPMGXxg5 = await Ledgis4oTMYY.isFrozen.call(addressoiP6kR2, {from: accounts[5]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		assert.equal(boolxdg9bsV, true)
		await expect(Ledgis4oTMYY.transferWithLockAfter.call(addresslSyNiJV, uintBtKYusb, uintvc1dO1h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNqSlbPY = await Ledgis.new({from: accounts[3]});
		const addressTAzBuFt = accounts[2]
		const addressr42CXKj = accounts[2]
		const addressD3WB3J = accounts[1]
		const addressGMcSUK2 = accounts[1]
		const addresslm791xE = accounts[4]
		const address3ZBnE7 = accounts[4]
		const uint256sgT6WpO = await LedgisNqSlbPY.allowance.call(addressr42CXKj, addressTAzBuFt, {from: accounts[4]});
		const boolmiwwtJh = await LedgisNqSlbPY.isFrozen.call(addressD3WB3J, {from: accounts[2]});
		const uint256uEgRgVj = await LedgisNqSlbPY.balanceOf.call(addressGMcSUK2, {from: accounts[1]});
		const uint256SrzsHi3 = await LedgisNqSlbPY.allowance.call(address3ZBnE7, addresslm791xE, {from: accounts[3]});
		await LedgisNqSlbPY.unpause.call({from: accounts[1]});
		await LedgisNqSlbPY.unpause.call({from: accounts[5]});

		assert.equal(boolmiwwtJh, false)
		assert.equal(uint256SrzsHi3, BigInt("0"))
		assert.equal(uint256sgT6WpO, BigInt("0"))
		assert.equal(uint256uEgRgVj, BigInt("0"))
		await expect(LedgisNqSlbPY.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNqSlbPY = await Ledgis.new({from: accounts[3]});
		const addressMoSKdog = accounts[2]
		const addressEduapop = accounts[1]
		const addressNJga6yE = accounts[1]
		const uintEDaaTEz = BigInt("2029")
		const addresso4nW35b = accounts[5]
		const addressBxsvXt = accounts[4]
		const uint256sgT6WpO = await LedgisNqSlbPY.allowance.call(addressEduapop, addressMoSKdog, {from: accounts[4]});
		const uint256uEgRgVj = await LedgisNqSlbPY.balanceOf.call(addressNJga6yE, {from: accounts[1]});
		const uint256Hvzboqu = await LedgisNqSlbPY.afterTime.call(uintEDaaTEz, {from: accounts[0]});
		const uint256SrzsHi3 = await LedgisNqSlbPY.allowance.call(addressBxsvXt, addresso4nW35b, {from: accounts[3]});
		await LedgisNqSlbPY.unpause.call({from: accounts[1]});
		await LedgisNqSlbPY.unpause.call({from: accounts[5]});

		assert.equal(uint256Hvzboqu, BigInt("1630235245"))
		assert.equal(uint256SrzsHi3, BigInt("0"))
		assert.equal(uint256sgT6WpO, BigInt("0"))
		assert.equal(uint256uEgRgVj, BigInt("0"))
		await expect(LedgisNqSlbPY.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const addresstvfSsdc = accounts[2]
		const uintP7c5gbf = BigInt("549")
		const addressBAH2Ia9 = accounts[2]
		const addressofsB4Po = await Ledgisk0aRPOz.unfreeze.call(addresstvfSsdc, {from: accounts[0]});
		const boolwoh2EGt = await Ledgisk0aRPOz.transfer.call(addressBAH2Ia9, uintP7c5gbf, {from: accounts[2]});

		await expect(Ledgisk0aRPOz.transfer.call(addressBAH2Ia9, uintP7c5gbf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const addressZJD0l0v = accounts[5]
		const addresszQxcQoO = accounts[0]
		const addresstB2xU5B = accounts[5]
		const addressyzExFgE = accounts[0]
		const addresscWLotI1 = accounts[3]
		const uint256dIbPMmL = await Ledgisk0aRPOz.allowance.call(addresszQxcQoO, addressZJD0l0v, {from: accounts[4]});
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addresstB2xU5B, {from: accounts[4]});
		const uint256EWkBzoB = await Ledgisk0aRPOz.currentTime.call({from: accounts[3]});
		const addressofsB4Po = await Ledgisk0aRPOz.unfreeze.call(addressyzExFgE, {from: accounts[0]});
		const uint2560FSiRo = await Ledgisk0aRPOz.lockCount.call(addresscWLotI1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2560FSiRo, BigInt("0"))
		assert.equal(uint256EWkBzoB, BigInt("1630233230"))
		assert.equal(uint256WMYxjRg, BigInt("0"))
		assert.equal(uint256dIbPMmL, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const addressRQVW4PC = accounts[5]
		const uintZCsShup = BigInt("39")
		const addresst9rv3ko = accounts[0]
		const addressEGr9JT5 = accounts[1]
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addressRQVW4PC, {from: accounts[4]});
		const boolTb9pM6E = await Ledgisk0aRPOz.approve.call(addresst9rv3ko, uintZCsShup, {from: accounts[0]});
		const addressofsB4Po = await Ledgisk0aRPOz.unfreeze.call(addressEGr9JT5, {from: accounts[0]});

		assert.equal(boolTb9pM6E, true)
		assert.equal(uint256WMYxjRg, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const uintbqXW4nl = BigInt("1223")
		const uintqsy5WgW = BigInt("1319")
		const addressDATUnRs = accounts[4]
		const uintWOcur89 = BigInt("1648")
		const addressouOvRW7 = accounts[3]
		const uintvFOgB4 = BigInt("1137")
		const addressG496H9R = accounts[4]
		const addressOW5Pmr7 = accounts[2]
		const uintQYtKgDa = BigInt("704")
		const addressmhUsoS1 = accounts[4]
		const uintWDVElSF = BigInt("1651")
		const address8EhGez = accounts[3]
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressDATUnRs, uintqsy5WgW, uintbqXW4nl, {from: accounts[4]});
		const boolBLHVkXL = await Ledgis4oTMYY.decreaseAllowance.call(addressouOvRW7, uintWOcur89, {from: accounts[4]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addressOW5Pmr7, addressG496H9R, uintvFOgB4, {from: accounts[0]});
		const boolWzF0A6 = await Ledgis4oTMYY.approve.call(addressmhUsoS1, uintQYtKgDa, {from: accounts[1]});
		const boolF1G6NDb = await Ledgis4oTMYY.transfer.call(address8EhGez, uintWDVElSF, {from: accounts[0]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		await expect(Ledgis4oTMYY.decreaseAllowance.call(addressouOvRW7, uintWOcur89, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const addressBff78LJ = accounts[1]
		const uintZ2oRvGx = BigInt("1223")
		const uintwL0i6bt = BigInt("1319")
		const addressE8CfoV3 = accounts[4]
		const uintA4qIjO = BigInt("1137")
		const addresssQHq0K6 = accounts[4]
		const addressISkM72y = accounts[3]
		const uinteaCaWrr = BigInt("307")
		const uintdhSMN3m = BigInt("1795")
		const addressnuTzGOY = accounts[3]
		const addressTpUOTZM = accounts[1]
		const uint256bN7MdQ = await Ledgis4oTMYY.balanceOf.call(addressBff78LJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressE8CfoV3, uintwL0i6bt, uintZ2oRvGx, {from: accounts[4]});
		const uint256ycEvRmc = await Ledgis4oTMYY.totalSupply.call({from: accounts[3]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addressISkM72y, addresssQHq0K6, uintA4qIjO, {from: accounts[0]});
		const boolSYI9BmS = await Ledgis4oTMYY.transferWithLockAfter.call(addressnuTzGOY, uintdhSMN3m, uinteaCaWrr, {from: accounts[0]});
		const boolPMGXxg5 = await Ledgis4oTMYY.isFrozen.call(addressTpUOTZM, {from: accounts[5]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256bN7MdQ, BigInt("0"))
		assert.equal(uint256ycEvRmc, BigInt("10000000000000"))
		await expect(Ledgis4oTMYY.transferFrom.call(addressISkM72y, addresssQHq0K6, uintA4qIjO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintQAvaZFy = BigInt("1318")
		const uintLrklxHf = BigInt("1952")
		const addressnUNAbeP = accounts[1]
		const uintCTkTC2g = BigInt("2013")
		const addressFWsyGjN = accounts[2]
		const addressUPdZOCP = await Ledgisk0aRPOz.lockAfter.call(addressnUNAbeP, uintLrklxHf, uintQAvaZFy, {from: accounts[0]});
		const boolwoh2EGt = await Ledgisk0aRPOz.transfer.call(addressFWsyGjN, uintCTkTC2g, {from: accounts[2]});

		await expect(Ledgisk0aRPOz.lockAfter.call(addressnUNAbeP, uintLrklxHf, uintQAvaZFy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintHuGmqQO = BigInt("1738")
		const addressXFzObE4 = accounts[4]
		const uintoeoy3Zj = BigInt("549")
		const addressO1Xe1ot = accounts[2]
		await Ledgisk0aRPOz.lockState.call(addressXFzObE4, uintHuGmqQO, {from: accounts[4]});
		const boolwoh2EGt = await Ledgisk0aRPOz.transfer.call(addressO1Xe1ot, uintoeoy3Zj, {from: accounts[2]});
		await Ledgisk0aRPOz.renounceOwnership.call({from: accounts[3]});

		await expect(Ledgisk0aRPOz.lockState.call(addressXFzObE4, uintHuGmqQO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const addressez0dUU8 = accounts[4]
		const addressxageGMn = accounts[1]
		const uintRJVSbo7 = BigInt("1223")
		const uinteWoJ3xa = BigInt("1319")
		const addressMeAx3Fj = accounts[4]
		const uintcZEFPQ = BigInt("1137")
		const addressz9Adtzo = accounts[3]
		const addressLRY1zV = accounts[3]
		const uintD9rOdMP = BigInt("333")
		const uintCcTqUso = BigInt("1795")
		const addressI3XzIY8 = accounts[3]
		const addressNFz1x3E = accounts[1]
		const addressJ7UBah = await Ledgis4oTMYY.freeze.call(addressez0dUU8, {from: accounts[4]});
		const uint256bN7MdQ = await Ledgis4oTMYY.balanceOf.call(addressxageGMn, {from: "0x0000000000000000000000000000000000000001"});
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressMeAx3Fj, uinteWoJ3xa, uintRJVSbo7, {from: accounts[4]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addressLRY1zV, addressz9Adtzo, uintcZEFPQ, {from: accounts[0]});
		const boolSYI9BmS = await Ledgis4oTMYY.transferWithLockAfter.call(addressI3XzIY8, uintCcTqUso, uintD9rOdMP, {from: accounts[0]});
		const boolPMGXxg5 = await Ledgis4oTMYY.isFrozen.call(addressNFz1x3E, {from: accounts[5]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256bN7MdQ, BigInt("0"))
		await expect(Ledgis4oTMYY.transferFrom.call(addressLRY1zV, addressz9Adtzo, uintcZEFPQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const addresse4xEt2 = accounts[7]
		const uint178GQF = BigInt("653")
		const addressIIcQBW9 = accounts[1]
		const addresse54nue = accounts[2]
		const uintaidVniR = BigInt("1187")
		const addressy9bwyhS = accounts[4]
		const uintu10x9Vv = BigInt("1528")
		const addresstyeP2z = "0x0000000000000000000000000000000000000001"
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addresse4xEt2, {from: accounts[4]});
		await Ledgisk0aRPOz.renounceOwnership.call({from: accounts[0]});
		const boolYoi2wBW = await Ledgisk0aRPOz.transferFrom.call(addresse54nue, addressIIcQBW9, uint178GQF, {from: accounts[2]});
		const uint256Kdaf0JW = await Ledgisk0aRPOz.currentTime.call({from: accounts[4]});
		await Ledgisk0aRPOz.lockState.call(addressy9bwyhS, uintaidVniR, {from: accounts[0]});
		await Ledgisk0aRPOz.lockState.call(addresstyeP2z, uintu10x9Vv, {from: accounts[2]});

		assert.equal(uint256WMYxjRg, BigInt("0"))
		await expect(Ledgisk0aRPOz.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintQIykYHo = BigInt("678")
		const addressFvFcAE = accounts[1]
		const addressCRITW4w = accounts[6]
		const addressM49pbH = await Ledgisk0aRPOz.unlock.call(addressFvFcAE, uintQIykYHo, {from: accounts[0]});
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addressCRITW4w, {from: accounts[4]});

		await expect(Ledgisk0aRPOz.unlock.call(addressFvFcAE, uintQIykYHo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const addresspAVoDvk = accounts[1]
		const uintUcMxsNA = BigInt("1223")
		const uintVaUssFB = BigInt("1353")
		const addressAVPKs7 = accounts[4]
		const uintS9IVwc = BigInt("573")
		const addressbSSFJwn = accounts[3]
		const uintTQILbuE = BigInt("1137")
		const addresso09ZZmn = accounts[3]
		const addresstO63bWV = accounts[3]
		const uintuQIMj84 = BigInt("307")
		const uintJiRPngi = BigInt("1795")
		const addressIXw1F8d = accounts[3]
		const addressTqXbOPL = accounts[1]
		const uintUoqsKyP = BigInt("1358")
		const addresse7LRbTY = accounts[4]
		const uint256bN7MdQ = await Ledgis4oTMYY.balanceOf.call(addresspAVoDvk, {from: "0x0000000000000000000000000000000000000001"});
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressAVPKs7, uintVaUssFB, uintUcMxsNA, {from: accounts[4]});
		const addressjawFFfZ = await Ledgis4oTMYY.burn.call(addressbSSFJwn, uintS9IVwc, {from: accounts[4]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addresstO63bWV, addresso09ZZmn, uintTQILbuE, {from: accounts[0]});
		const boolSYI9BmS = await Ledgis4oTMYY.transferWithLockAfter.call(addressIXw1F8d, uintJiRPngi, uintuQIMj84, {from: accounts[0]});
		const boolPMGXxg5 = await Ledgis4oTMYY.isFrozen.call(addressTqXbOPL, {from: accounts[5]});
		const addressOvGVKkX = await Ledgis4oTMYY.unlock.call(addresse7LRbTY, uintUoqsKyP, {from: accounts[2]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256bN7MdQ, BigInt("0"))
		await expect(Ledgis4oTMYY.burn.call(addressbSSFJwn, uintS9IVwc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4oTMYY = await Ledgis.new({from: accounts[4]});
		const addressKcABLZv = accounts[3]
		const addressXN3vHig = accounts[1]
		const uintvwslMN7 = BigInt("1223")
		const uintWbSL7dQ = BigInt("1319")
		const addressCLNpMmf = accounts[4]
		const uintJeuqWxE = BigInt("1415")
		const addressxKZnLvc = "0x0000000000000000000000000000000000000001"
		const addressZrSOC97 = accounts[3]
		const uintshTF5To = BigInt("1137")
		const address1rthpL = accounts[3]
		const addressxTuNwRm = accounts[4]
		const uintWO9eCa = BigInt("331")
		const uintFs3lYXl = BigInt("1713")
		const addressG5QFMJ2 = accounts[5]
		const uintXjuDzs = BigInt("723")
		const uintjQEDfaP = BigInt("1813")
		const addressryq5f7X = accounts[0]
		const uintPjCR5qF = BigInt("1161")
		const addressRTB0ybz = accounts[2]
		const addressxn8q5Z = accounts[0]
		const uintqALTUJ = BigInt("307")
		const uintGFdfQa = BigInt("1795")
		const addresswuTi9Zo = accounts[4]
		const uintTm7xtjo = BigInt("1487")
		const addressYHGYOga = accounts[1]
		const addressne6yMdG = accounts[1]
		const uintV0phVdo = BigInt("936")
		const addressq40iY45 = accounts[1]
		const addressJ4SYt2 = await Ledgis4oTMYY.transferOwnership.call(addressKcABLZv, {from: accounts[4]});
		const uint256bN7MdQ = await Ledgis4oTMYY.balanceOf.call(addressXN3vHig, {from: "0x0000000000000000000000000000000000000001"});
		const addressp40AxZj = await Ledgis4oTMYY.lock.call(addressCLNpMmf, uintWbSL7dQ, uintvwslMN7, {from: accounts[4]});
		const boolzdVxmF = await Ledgis4oTMYY.transferFrom.call(addressZrSOC97, addressxKZnLvc, uintJeuqWxE, {from: accounts[3]});
		const boolIn0xrBI = await Ledgis4oTMYY.transferFrom.call(addressxTuNwRm, address1rthpL, uintshTF5To, {from: accounts[0]});
		const boolHJxxzVl = await Ledgis4oTMYY.transferWithLock.call(addressG5QFMJ2, uintFs3lYXl, uintWO9eCa, {from: "0x0000000000000000000000000000000000000001"});
		const addressO40gXd = await Ledgis4oTMYY.lockAfter.call(addressryq5f7X, uintjQEDfaP, uintXjuDzs, {from: accounts[5]});
		const boolPnyBAvV = await Ledgis4oTMYY.transferFrom.call(addressxn8q5Z, addressRTB0ybz, uintPjCR5qF, {from: accounts[4]});
		const boolSYI9BmS = await Ledgis4oTMYY.transferWithLockAfter.call(addresswuTi9Zo, uintGFdfQa, uintqALTUJ, {from: accounts[0]});
		await Ledgis4oTMYY.whenNotFrozen.call({from: accounts[4]});
		const boolNhJ1TjE = await Ledgis4oTMYY.approve.call(addressYHGYOga, uintTm7xtjo, {from: accounts[3]});
		const boolPMGXxg5 = await Ledgis4oTMYY.isFrozen.call(addressne6yMdG, {from: accounts[5]});
		const addressci70hup = await Ledgis4oTMYY.burn.call(addressq40iY45, uintV0phVdo, {from: accounts[3]});
		await Ledgis4oTMYY.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256bN7MdQ, BigInt("0"))
		await expect(Ledgis4oTMYY.transferFrom.call(addressZrSOC97, addressxKZnLvc, uintJeuqWxE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintiT83u92 = BigInt("679")
		const uinthmyGZLJ = BigInt("1650")
		const addressjiW3ao = accounts[2]
		const addressqdpq2KD = accounts[7]
		const uintFxGpwSG = BigInt("1601")
		const addressWok1k1b = accounts[3]
		const booljJ3cKxd = await Ledgisk0aRPOz.transferWithLockAfter.call(addressjiW3ao, uinthmyGZLJ, uintiT83u92, {from: accounts[0]});
		const uint256WMYxjRg = await Ledgisk0aRPOz.balanceOf.call(addressqdpq2KD, {from: accounts[4]});
		const addressggjUN8X = await Ledgisk0aRPOz.unlock.call(addressWok1k1b, uintFxGpwSG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljJ3cKxd, true)
		assert.equal(uint256WMYxjRg, BigInt("0"))
		await expect(Ledgisk0aRPOz.unlock.call(addressWok1k1b, uintFxGpwSG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintcX4oCDe = BigInt("1536")
		const addressyxdI5tS = accounts[0]
		const uintK394zrP = BigInt("678")
		const addressqM5BMIA = accounts[2]
		const uintA2olSIU = BigInt("1665")
		const uinto81ggf0 = BigInt("172")
		const addressqZZq4ro = accounts[2]
		const addressMebenEp = await Ledgisk0aRPOz.burn.call(addressyxdI5tS, uintcX4oCDe, {from: accounts[0]});
		const addressM49pbH = await Ledgisk0aRPOz.unlock.call(addressqM5BMIA, uintK394zrP, {from: accounts[0]});
		const boolTdn4hre = await Ledgisk0aRPOz.transferWithLock.call(addressqZZq4ro, uinto81ggf0, uintA2olSIU, {from: accounts[1]});

		await expect(Ledgisk0aRPOz.unlock.call(addressqM5BMIA, uintK394zrP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisk0aRPOz = await Ledgis.new({from: accounts[0]});
		const uintP7olNa7 = BigInt("678")
		const addressyOhwjvt = accounts[2]
		await Ledgisk0aRPOz.unpause.call({from: accounts[0]});
		const addressM49pbH = await Ledgisk0aRPOz.unlock.call(addressyOhwjvt, uintP7olNa7, {from: accounts[0]});

		await expect(Ledgisk0aRPOz.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})