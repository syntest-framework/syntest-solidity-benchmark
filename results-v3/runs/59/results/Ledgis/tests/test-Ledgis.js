const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisOeaPH7I = await Ledgis.new({from: accounts[4]});
		const uinttUdGpfo = BigInt("738")
		const uintgHcxYNx = BigInt("181")
		const addressIqgcgt = accounts[4]
		const uintbfkuTw5 = BigInt("788")
		const addressA91CDVP = accounts[5]
		const uintkuN2tnY = BigInt("1923")
		const addressPqYqRk0 = accounts[3]
		const uintA2OPsgF = BigInt("1555")
		const addressffWdO29 = accounts[2]
		const addressFDmhKHG = accounts[3]
		const boolD2aOhhH = await LedgisOeaPH7I.transferWithLock.call(addressIqgcgt, uintgHcxYNx, uinttUdGpfo, {from: accounts[0]});
		const boolXEbriEZ = await LedgisOeaPH7I.transfer.call(addressA91CDVP, uintbfkuTw5, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisOeaPH7I.lockState.call(addressPqYqRk0, uintkuN2tnY, {from: accounts[5]});
		const boolOzyjWZT = await LedgisOeaPH7I.approve.call(addressffWdO29, uintA2OPsgF, {from: accounts[1]});
		const boolTfkpPFn = await LedgisOeaPH7I.isFrozen.call(addressFDmhKHG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisOeaPH7I.transferWithLock.call(addressIqgcgt, uintgHcxYNx, uinttUdGpfo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbA1As1r = await Ledgis.new({from: accounts[0]});
		const uintp3579X7 = BigInt("980")
		const addressbWTbZMa = accounts[1]
		const uintVPa8Th = BigInt("1531")
		const addresszSgOEPU = accounts[0]
		const addresspJDoYFl = accounts[3]
		const addressHfvCWc = accounts[0]
		const boolEYEg0Z = await LedgisbA1As1r.increaseAllowance.call(addressbWTbZMa, uintp3579X7, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisbA1As1r.whenNotFrozen.call({from: accounts[1]});
		const bool6wqJV0 = await LedgisbA1As1r.transfer.call(addresszSgOEPU, uintVPa8Th, {from: accounts[0]});
		const addressnsMxA3w = await LedgisbA1As1r.transferOwnership.call(addresspJDoYFl, {from: accounts[2]});
		const addressuhTmBi = await LedgisbA1As1r.unfreeze.call(addressHfvCWc, {from: accounts[2]});

		assert.equal(boolEYEg0Z, true)
		await expect(LedgisbA1As1r.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUFCDBkX = await Ledgis.new({from: accounts[5]});
		const addressnKJMdm5 = accounts[4]
		const addressFIKmk5z = accounts[2]
		const uintLlDu3x = BigInt("1666")
		const uintNBbYi3G = BigInt("532")
		const addressFPjNH6R = accounts[4]
		const uint256fcreFhw = await LedgisUFCDBkX.balanceOf.call(addressnKJMdm5, {from: accounts[5]});
		await LedgisUFCDBkX.unpause.call({from: accounts[1]});
		await LedgisUFCDBkX.renounceOwnership.call({from: accounts[4]});
		const addressoyXr2L9 = await LedgisUFCDBkX.unfreeze.call(addressFIKmk5z, {from: accounts[5]});
		const boolA1ensh = await LedgisUFCDBkX.transferWithLockAfter.call(addressFPjNH6R, uintNBbYi3G, uintLlDu3x, {from: accounts[3]});

		assert.equal(uint256fcreFhw, BigInt("0"))
		await expect(LedgisUFCDBkX.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHn7FReM = await Ledgis.new({from: accounts[3]});
		const uintquHzH08 = BigInt("1450")
		const addressybJQfYr = accounts[2]
		const boolpprtfKJ = await LedgisHn7FReM.approve.call(addressybJQfYr, uintquHzH08, {from: accounts[1]});
		await LedgisHn7FReM.whenPaused.call({from: accounts[4]});

		assert.equal(boolpprtfKJ, true)
		await expect(LedgisHn7FReM.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiszHBvktH = await Ledgis.new({from: accounts[4]});
		const uintFxgOKOl = BigInt("373")
		const addressjALqjC7 = accounts[3]
		const addressLj8YlVw = accounts[0]
		const addressuJCukVx = accounts[1]
		const addressiBDUitP = accounts[4]
		const uintLAxJVNK = BigInt("2039")
		const addressJklMo98 = accounts[4]
		const addressiOWVTgQ = accounts[2]
		const bool0qfyNu = await LedgiszHBvktH.transferFrom.call(addressLj8YlVw, addressjALqjC7, uintFxgOKOl, {from: accounts[2]});
		await LedgiszHBvktH.pause.call({from: accounts[1]});
		const addressQ9B6Io = await LedgiszHBvktH.transferOwnership.call(addressuJCukVx, {from: accounts[2]});
		const addressuA3mbQw = await LedgiszHBvktH.unfreeze.call(addressiBDUitP, {from: accounts[1]});
		const boolDs9uERQ = await LedgiszHBvktH.approve.call(addressJklMo98, uintLAxJVNK, {from: accounts[0]});
		const boolJPELnx = await LedgiszHBvktH.isFrozen.call(addressiOWVTgQ, {from: accounts[0]});

		await expect(LedgiszHBvktH.transferFrom.call(addressLj8YlVw, addressjALqjC7, uintFxgOKOl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHn7FReM = await Ledgis.new({from: accounts[3]});
		const uintoatCFn = BigInt("1424")
		const addressuv1RYFN = accounts[2]
		const uintzAR0cqf = BigInt("711")
		const addressAt5oWO = accounts[1]
		const uintIoeHUoE = BigInt("1061")
		const addressYtISYMK = accounts[4]
		const boolpprtfKJ = await LedgisHn7FReM.approve.call(addressuv1RYFN, uintoatCFn, {from: accounts[1]});
		const boolzwDP8iK = await LedgisHn7FReM.transfer.call(addressAt5oWO, uintzAR0cqf, {from: accounts[1]});
		const addressA3mD4z = await LedgisHn7FReM.unlock.call(addressYtISYMK, uintIoeHUoE, {from: accounts[0]});
		await LedgisHn7FReM.whenPaused.call({from: accounts[4]});

		assert.equal(boolpprtfKJ, true)
		await expect(LedgisHn7FReM.transfer.call(addressAt5oWO, uintzAR0cqf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHn7FReM = await Ledgis.new({from: accounts[3]});
		const addresskfmsFyv = accounts[0]
		const uintTpaggHj = BigInt("1424")
		const addressqjFNWra = accounts[2]
		const uintdR287Gg = BigInt("711")
		const addressx39b7i = accounts[1]
		const uintb16PX4y = BigInt("1060")
		const addressceKNOKN = accounts[4]
		const uintmcO6NQf = BigInt("503")
		const uinttp249rG = BigInt("1423")
		const addressL7d3p6N = accounts[1]
		const boolpdOkRLN = await LedgisHn7FReM.isFrozen.call(addresskfmsFyv, {from: accounts[1]});
		const boolpprtfKJ = await LedgisHn7FReM.approve.call(addressqjFNWra, uintTpaggHj, {from: accounts[1]});
		const boolzwDP8iK = await LedgisHn7FReM.transfer.call(addressx39b7i, uintdR287Gg, {from: accounts[1]});
		const addressA3mD4z = await LedgisHn7FReM.unlock.call(addressceKNOKN, uintb16PX4y, {from: accounts[0]});
		const addressl0ZkDlo = await LedgisHn7FReM.lock.call(addressL7d3p6N, uinttp249rG, uintmcO6NQf, {from: accounts[3]});
		await LedgisHn7FReM.whenPaused.call({from: accounts[4]});

		assert.equal(boolpdOkRLN, false)
		assert.equal(boolpprtfKJ, true)
		await expect(LedgisHn7FReM.transfer.call(addressx39b7i, uintdR287Gg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbA1As1r = await Ledgis.new({from: accounts[0]});
		const uintvF4XiEn = BigInt("980")
		const addressInc8VZW = accounts[1]
		const uintAd1yyjL = BigInt("1531")
		const addressKfxOp3L = accounts[0]
		const uintod2za7X = BigInt("208")
		const addressirEgr4W = accounts[4]
		const addressP7irYod = accounts[0]
		const boolEYEg0Z = await LedgisbA1As1r.increaseAllowance.call(addressInc8VZW, uintvF4XiEn, {from: "0x0000000000000000000000000000000000000001"});
		const bool6wqJV0 = await LedgisbA1As1r.transfer.call(addressKfxOp3L, uintAd1yyjL, {from: accounts[0]});
		const uint256H915mF2 = await LedgisbA1As1r.afterTime.call(uintod2za7X, {from: accounts[2]});
		const addressnsMxA3w = await LedgisbA1As1r.transferOwnership.call(addressirEgr4W, {from: accounts[2]});
		await LedgisbA1As1r.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressuhTmBi = await LedgisbA1As1r.unfreeze.call(addressP7irYod, {from: accounts[2]});

		assert.equal(bool6wqJV0, true)
		assert.equal(boolEYEg0Z, true)
		assert.equal(uint256H915mF2, BigInt("1630233112"))
		await expect(LedgisbA1As1r.transferOwnership.call(addressirEgr4W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisODzG7AJ = await Ledgis.new({from: accounts[2]});
		const addressAADtgMV = accounts[2]
		const addresswHpqSmP = accounts[0]
		const addressAqXygY9 = accounts[3]
		const addressgIGPbSC = accounts[4]
		const uintHTNdAPF = BigInt("1129")
		const uintNrGzwn7 = BigInt("1985")
		const addressF9J3uWG = accounts[2]
		const uintB9LmtTv = BigInt("1787")
		const uintyniYAmd = BigInt("112")
		const addressQGJKBu = accounts[1]
		const uint256wSv4ZHA = await LedgisODzG7AJ.allowance.call(addresswHpqSmP, addressAADtgMV, {from: accounts[1]});
		await LedgisODzG7AJ.whenNotPaused.call({from: accounts[4]});
		const uint256aB6LIGT = await LedgisODzG7AJ.allowance.call(addressgIGPbSC, addressAqXygY9, {from: accounts[1]});
		await LedgisODzG7AJ.renounceOwnership.call({from: accounts[5]});
		const boolpK5mLx8 = await LedgisODzG7AJ.transferWithLock.call(addressF9J3uWG, uintNrGzwn7, uintHTNdAPF, {from: accounts[3]});
		const addressTfvO0jQ = await LedgisODzG7AJ.lockAfter.call(addressQGJKBu, uintyniYAmd, uintB9LmtTv, {from: accounts[3]});

		assert.equal(uint256wSv4ZHA, BigInt("0"))
		await expect(LedgisODzG7AJ.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisnQS3qvK = await Ledgis.new({from: accounts[4]});
		const uintzT7DTqs = BigInt("1776")
		const addressfDrwmkr = accounts[2]
		const uintPGw8Y8Q = BigInt("514")
		const addressgHmsuPd = accounts[0]
		const addressC2dfEF0 = accounts[1]
		const boolIZfXePu = await LedgisnQS3qvK.decreaseAllowance.call(addressfDrwmkr, uintzT7DTqs, {from: accounts[1]});
		const boolSXTTqzv = await LedgisnQS3qvK.transferFrom.call(addressC2dfEF0, addressgHmsuPd, uintPGw8Y8Q, {from: accounts[2]});
		await LedgisnQS3qvK.onlyOwner.call({from: accounts[1]});

		await expect(LedgisnQS3qvK.decreaseAllowance.call(addressfDrwmkr, uintzT7DTqs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisjILHTNG = await Ledgis.new({from: accounts[2]});
		const uintE7NJpYd = BigInt("211")
		const addressNT3DasL = accounts[3]
		const addresskjeENPn = accounts[4]
		await LedgisjILHTNG.lockState.call(addressNT3DasL, uintE7NJpYd, {from: accounts[2]});
		await LedgisjILHTNG.unpause.call({from: accounts[4]});
		const uint256CtRkusm = await LedgisjILHTNG.balanceOf.call(addresskjeENPn, {from: accounts[1]});

		await expect(LedgisjILHTNG.lockState.call(addressNT3DasL, uintE7NJpYd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const addresszO5m1rm = accounts[1]
		const uintcitP7aY = BigInt("1247")
		const addresstmxM8x = accounts[0]
		const addressd4GX6Oh = accounts[8]
		const uint256kkf2Tsp = await LedgisyvfH6tD.lockCount.call(addresszO5m1rm, {from: "0x0000000000000000000000000000000000000001"});
		const boolpbk2wLu = await LedgisyvfH6tD.approve.call(addresstmxM8x, uintcitP7aY, {from: accounts[0]});
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressd4GX6Oh, {from: accounts[2]});

		assert.equal(boolpbk2wLu, true)
		assert.equal(uint256a4u1DqO, BigInt("0"))
		assert.equal(uint256kkf2Tsp, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const addressUrJK5Hl = accounts[8]
		const uint256ynqCvs = await LedgisyvfH6tD.currentTime.call({from: accounts[2]});
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressUrJK5Hl, {from: accounts[2]});

		assert.equal(uint256a4u1DqO, BigInt("0"))
		assert.equal(uint256ynqCvs, BigInt("1630232914"))
	});

	it('test for Ledgis', async () => {
		const LedgisbDpl8G7 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addressK2jWmry = "0x0000000000000000000000000000000000000001"
		await LedgisbDpl8G7.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await LedgisbDpl8G7.whenNotFrozen.call({from: accounts[3]});
		const addressobXnVx = await LedgisbDpl8G7.freeze.call(addressK2jWmry, {from: accounts[2]});
	});

	it('test for Ledgis', async () => {
		const LedgisUFCDBkX = await Ledgis.new({from: accounts[5]});
		const uintmGNDrBM = BigInt("133")
		const addresstklIJzD = accounts[4]
		const addressV396WG9 = accounts[0]
		const addressR7p8pRG = accounts[4]
		const uintime9V22 = BigInt("1821")
		const address9c1Ox2 = accounts[2]
		const addressz432xND = accounts[2]
		const uintgP5IWw1 = BigInt("1650")
		const uintaQNEFIO = BigInt("532")
		const addressy1bIu6P = accounts[4]
		const uintW6ots57 = BigInt("44")
		const addressxuRdVD5 = "0x0000000000000000000000000000000000000001"
		const boolyoQGn1a = await LedgisUFCDBkX.increaseAllowance.call(addresstklIJzD, uintmGNDrBM, {from: accounts[1]});
		const addressqqoG3if = await LedgisUFCDBkX.freeze.call(addressV396WG9, {from: accounts[5]});
		await LedgisUFCDBkX.whenNotFrozen.call({from: accounts[0]});
		const uint256fcreFhw = await LedgisUFCDBkX.balanceOf.call(addressR7p8pRG, {from: accounts[5]});
		const boolSHaQtZW = await LedgisUFCDBkX.transferFrom.call(addressz432xND, address9c1Ox2, uintime9V22, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisUFCDBkX.unpause.call({from: accounts[1]});
		await LedgisUFCDBkX.renounceOwnership.call({from: accounts[4]});
		const boolA1ensh = await LedgisUFCDBkX.transferWithLockAfter.call(addressy1bIu6P, uintaQNEFIO, uintgP5IWw1, {from: accounts[3]});
		const addressJPGk7Ew = await LedgisUFCDBkX.unlock.call(addressxuRdVD5, uintW6ots57, {from: accounts[2]});

		assert.equal(boolyoQGn1a, true)
		await expect(LedgisUFCDBkX.whenNotFrozen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const uintIg2ma6o = BigInt("1740")
		const addressjh3dwnZ = accounts[2]
		const addressiAL1RhQ = accounts[5]
		const uintPbmIkKo = BigInt("778")
		const addressLeuk1nC = accounts[1]
		const uintC1vBoQN = BigInt("1501")
		const addressXGpjJ1Q = accounts[1]
		const addressEv0zXZ = accounts[4]
		const boolhWcKQh1 = await LedgisyvfH6tD.mint.call(addressjh3dwnZ, uintIg2ma6o, {from: accounts[5]});
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressiAL1RhQ, {from: accounts[2]});
		const boolhhQsXh4 = await LedgisyvfH6tD.decreaseAllowance.call(addressLeuk1nC, uintPbmIkKo, {from: accounts[4]});
		const boolklztv2 = await LedgisyvfH6tD.transferFrom.call(addressEv0zXZ, addressXGpjJ1Q, uintC1vBoQN, {from: accounts[3]});

		assert.equal(boolhWcKQh1, true)
		assert.equal(uint256a4u1DqO, BigInt("10000000000000"))
		await expect(LedgisyvfH6tD.decreaseAllowance.call(addressLeuk1nC, uintPbmIkKo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBELYo32 = await Ledgis.new({from: accounts[1]});
		const uintopZQBnD = BigInt("1807")
		const addressiQJe4FL = accounts[5]
		const uintIUE4Bn2 = BigInt("218")
		const uintRysGYYE = BigInt("1448")
		const addressuPCF0xb = accounts[4]
		const uintqpWhnPE = BigInt("1146")
		const uintL3t3A1 = BigInt("1031")
		const addressOSptdU = accounts[0]
		const boolA0Ggmyi = await LedgisBELYo32.approve.call(addressiQJe4FL, uintopZQBnD, {from: accounts[4]});
		const boolLWMlEu4 = await LedgisBELYo32.transferWithLock.call(addressuPCF0xb, uintRysGYYE, uintIUE4Bn2, {from: accounts[1]});
		const boolAAzPWn = await LedgisBELYo32.transferWithLock.call(addressOSptdU, uintL3t3A1, uintqpWhnPE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolA0Ggmyi, true)
		assert.equal(boolLWMlEu4, true)
		await expect(LedgisBELYo32.transferWithLock.call(addressOSptdU, uintL3t3A1, uintqpWhnPE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const addressu8E8kVk = accounts[5]
		const uintj9lBC9V = BigInt("1501")
		const addressNHDBVqs = accounts[1]
		const addressYJynomC = accounts[4]
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressu8E8kVk, {from: accounts[2]});
		const uint256vGNsOgq = await LedgisyvfH6tD.totalSupply.call({from: accounts[4]});
		const boolklztv2 = await LedgisyvfH6tD.transferFrom.call(addressYJynomC, addressNHDBVqs, uintj9lBC9V, {from: accounts[3]});

		assert.equal(uint256a4u1DqO, BigInt("10000000000000"))
		assert.equal(uint256vGNsOgq, BigInt("10000000000000"))
		await expect(LedgisyvfH6tD.transferFrom.call(addressYJynomC, addressNHDBVqs, uintj9lBC9V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUFCDBkX = await Ledgis.new({from: accounts[5]});
		const addressEzR76vy = accounts[4]
		const uintOvXajv3 = BigInt("1821")
		const addressOEovWQs = accounts[2]
		const addressqsgIFX2 = accounts[2]
		const uintjBmSynI = BigInt("1666")
		const uintXMf9qVS = BigInt("532")
		const addressK3k9cZI = accounts[4]
		const addressgIkMBk = accounts[5]
		const uintlPaIxkP = BigInt("44")
		const addressTRkR1Pr = "0x0000000000000000000000000000000000000001"
		const uint256fcreFhw = await LedgisUFCDBkX.balanceOf.call(addressEzR76vy, {from: accounts[5]});
		await LedgisUFCDBkX.pause.call({from: accounts[5]});
		const boolSHaQtZW = await LedgisUFCDBkX.transferFrom.call(addressqsgIFX2, addressOEovWQs, uintOvXajv3, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisUFCDBkX.unpause.call({from: accounts[1]});
		const boolA1ensh = await LedgisUFCDBkX.transferWithLockAfter.call(addressK3k9cZI, uintXMf9qVS, uintjBmSynI, {from: accounts[3]});
		const uint256uaZulOS = await LedgisUFCDBkX.lockCount.call(addressgIkMBk, {from: accounts[3]});
		const addressJPGk7Ew = await LedgisUFCDBkX.unlock.call(addressTRkR1Pr, uintlPaIxkP, {from: accounts[2]});

		assert.equal(uint256fcreFhw, BigInt("0"))
		await expect(LedgisUFCDBkX.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisoYZ6dB = await Ledgis.new({from: accounts[0]});
		const addressHdAWZIU = accounts[4]
		const uintXrJEl1D = BigInt("1389")
		const addressn71Ak8D = accounts[2]
		const uintIhr2cfD = BigInt("1995")
		const addressBACAKh = accounts[4]
		const uint256hsPq6DX = await LedgisoYZ6dB.balanceOf.call(addressHdAWZIU, {from: accounts[1]});
		const addressxGB7X8Z = await LedgisoYZ6dB.unlock.call(addressn71Ak8D, uintXrJEl1D, {from: accounts[0]});
		const uint256xICSxXh = await LedgisoYZ6dB.totalSupply.call({from: accounts[3]});
		await LedgisoYZ6dB.whenNotPaused.call({from: accounts[3]});
		await LedgisoYZ6dB.onlyOwner.call({from: accounts[2]});
		const addressMGvAXz = await LedgisoYZ6dB.burn.call(addressBACAKh, uintIhr2cfD, {from: accounts[2]});

		assert.equal(uint256hsPq6DX, BigInt("0"))
		await expect(LedgisoYZ6dB.unlock.call(addressn71Ak8D, uintXrJEl1D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const addressmKthvjb = accounts[5]
		const uintnFpjEca = BigInt("1501")
		const addressJ5ZtMea = accounts[1]
		const addressV1DJOT = accounts[4]
		const uintErzmQoD = BigInt("478")
		const addressyHjRUXf = "0x0000000000000000000000000000000000000001"
		const addressPt0HSxf = accounts[0]
		const addresst2h6Q8g = accounts[2]
		await LedgisyvfH6tD.unpause.call({from: accounts[5]});
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressmKthvjb, {from: accounts[2]});
		const boolklztv2 = await LedgisyvfH6tD.transferFrom.call(addressV1DJOT, addressJ5ZtMea, uintnFpjEca, {from: accounts[3]});
		const boolayESyA = await LedgisyvfH6tD.transferFrom.call(addressPt0HSxf, addressyHjRUXf, uintErzmQoD, {from: accounts[3]});
		const addressreceTeu = await LedgisyvfH6tD.unfreeze.call(addresst2h6Q8g, {from: accounts[2]});

		await expect(LedgisyvfH6tD.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisoYZ6dB = await Ledgis.new({from: accounts[0]});
		const addresshcmcVo6 = accounts[4]
		const uintM7UOM5h = BigInt("1161")
		const addressBAegbF2 = accounts[3]
		const uintJnVXKUO = BigInt("970")
		const addressC1w1LOd = accounts[2]
		const addressgIfuSff = accounts[4]
		const uintNHxO7Z8 = BigInt("1389")
		const addressdRFqUpR = accounts[2]
		const uintFDscKyw = BigInt("1533")
		const addressFEeUAHT = accounts[0]
		const uintb2fLcNa = BigInt("1995")
		const addressRnCT1e4 = accounts[4]
		const uint256hsPq6DX = await LedgisoYZ6dB.balanceOf.call(addresshcmcVo6, {from: accounts[1]});
		const boolTEdsMbW = await LedgisoYZ6dB.transfer.call(addressBAegbF2, uintM7UOM5h, {from: accounts[0]});
		const addresseBHLJKq = await LedgisoYZ6dB.burn.call(addressC1w1LOd, uintJnVXKUO, {from: accounts[0]});
		const uint256aMhN7Vm = await LedgisoYZ6dB.balanceOf.call(addressgIfuSff, {from: "0x0000000000000000000000000000000000000001"});
		const addressxGB7X8Z = await LedgisoYZ6dB.unlock.call(addressdRFqUpR, uintNHxO7Z8, {from: accounts[0]});
		const boolLSDFlCe = await LedgisoYZ6dB.mint.call(addressFEeUAHT, uintFDscKyw, {from: accounts[4]});
		const addressMGvAXz = await LedgisoYZ6dB.burn.call(addressRnCT1e4, uintb2fLcNa, {from: accounts[2]});

		assert.equal(boolTEdsMbW, true)
		assert.equal(uint256hsPq6DX, BigInt("0"))
		await expect(LedgisoYZ6dB.burn.call(addressC1w1LOd, uintJnVXKUO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const uintrFoeTo8 = BigInt("1552")
		const uintFa1JNh6 = BigInt("1627")
		const addressoAhITCV = accounts[3]
		const uintNqjetz = BigInt("1510")
		const address3qoCSX = accounts[1]
		const addressKBdAx8T = accounts[4]
		const addressNddKgDc = await LedgisyvfH6tD.lock.call(addressoAhITCV, uintFa1JNh6, uintrFoeTo8, {from: accounts[5]});
		const boolklztv2 = await LedgisyvfH6tD.transferFrom.call(addressKBdAx8T, address3qoCSX, uintNqjetz, {from: accounts[3]});

		await expect(LedgisyvfH6tD.lock.call(addressoAhITCV, uintFa1JNh6, uintrFoeTo8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const uintXpzGjJi = BigInt("1690")
		const addressqK8yp4K = accounts[0]
		const addressUQUiBaQ = "0x0000000000000000000000000000000000000001"
		const addressK6FpdTc = accounts[7]
		const booleaTqAac = await LedgisyvfH6tD.approve.call(addressqK8yp4K, uintXpzGjJi, {from: accounts[4]});
		const addressLQL5FBq = await LedgisyvfH6tD.transferOwnership.call(addressUQUiBaQ, {from: accounts[5]});
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressK6FpdTc, {from: accounts[2]});

		assert.equal(booleaTqAac, true)
		assert.equal(uint256a4u1DqO, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisoYZ6dB = await Ledgis.new({from: accounts[0]});
		const addresspT1qyyb = accounts[4]
		const uinttboUdUR = BigInt("1547")
		const addressypgl3GF = accounts[3]
		const uintvjnUg6g = BigInt("1825")
		const uintkTa7o3 = BigInt("355")
		const addressY8gxk81 = accounts[3]
		const addresswER2ls = accounts[2]
		const uintD1HWt8d = BigInt("109")
		const uintPSnOLjl = BigInt("292")
		const addressqf8Wouo = accounts[1]
		const uintr5BKNcE = BigInt("1995")
		const addressFsq4df = accounts[4]
		const uint256hsPq6DX = await LedgisoYZ6dB.balanceOf.call(addresspT1qyyb, {from: accounts[1]});
		const boolTEdsMbW = await LedgisoYZ6dB.transfer.call(addressypgl3GF, uinttboUdUR, {from: accounts[0]});
		const booljo62q9y = await LedgisoYZ6dB.transferWithLock.call(addressY8gxk81, uintkTa7o3, uintvjnUg6g, {from: accounts[0]});
		const addressy2qjCp = await LedgisoYZ6dB.unfreeze.call(addresswER2ls, {from: accounts[0]});
		const uint256Rq3yMqC = await LedgisoYZ6dB.totalSupply.call({from: accounts[0]});
		const uint256xICSxXh = await LedgisoYZ6dB.totalSupply.call({from: accounts[3]});
		const boolo5NjeF = await LedgisoYZ6dB.transferWithLock.call(addressqf8Wouo, uintPSnOLjl, uintD1HWt8d, {from: accounts[3]});
		const addressMGvAXz = await LedgisoYZ6dB.burn.call(addressFsq4df, uintr5BKNcE, {from: accounts[2]});

		assert.equal(boolTEdsMbW, true)
		assert.equal(booljo62q9y, true)
		assert.equal(uint256Rq3yMqC, BigInt("10000000000000"))
		assert.equal(uint256hsPq6DX, BigInt("0"))
		assert.equal(uint256xICSxXh, BigInt("10000000000000"))
		await expect(LedgisoYZ6dB.transferWithLock.call(addressqf8Wouo, uintPSnOLjl, uintD1HWt8d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyvfH6tD = await Ledgis.new({from: accounts[5]});
		const uinta9RaYbt = BigInt("413")
		const addresslroLuVM = accounts[3]
		const uintyQVVV6u = BigInt("1799")
		const uintjAksESE = BigInt("927")
		const addressJ9DLdu6 = "0x0000000000000000000000000000000000000001"
		const addressjAgcc1x = accounts[7]
		const boolPl0JxhL = await LedgisyvfH6tD.increaseAllowance.call(addresslroLuVM, uinta9RaYbt, {from: accounts[3]});
		const boolmAnEFx9 = await LedgisyvfH6tD.transferWithLockAfter.call(addressJ9DLdu6, uintjAksESE, uintyQVVV6u, {from: accounts[5]});
		const uint256a4u1DqO = await LedgisyvfH6tD.balanceOf.call(addressjAgcc1x, {from: accounts[2]});

		assert.equal(boolPl0JxhL, true)
		assert.equal(boolmAnEFx9, true)
		assert.equal(uint256a4u1DqO, BigInt("0"))
	});
})