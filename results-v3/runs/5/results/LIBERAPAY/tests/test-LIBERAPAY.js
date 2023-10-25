const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYRH0xOvG = await LIBERAPAY.new({from: accounts[2]});
		const uintkNDrc2F = BigInt("1829")
		const addressB4hONKd = accounts[0]
		const uintQlzMpT9 = BigInt("1633")
		const addressvQARUt4 = "0x0000000000000000000000000000000000000001"
		const addressyJvEvhj = accounts[0]
		const addressrBdQCtx = accounts[4]
		const boolngZAhc7 = await LIBERAPAYRH0xOvG.burnFrom.call(addressB4hONKd, uintkNDrc2F, {from: accounts[1]});
		const boolObrYoO = await LIBERAPAYRH0xOvG.distribute.call(addressvQARUt4, uintQlzMpT9, {from: accounts[1]});
		await LIBERAPAYRH0xOvG.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256b4UNWBH = await LIBERAPAYRH0xOvG.allowance.call(addressrBdQCtx, addressyJvEvhj, {from: accounts[3]});
		const uint256Tis5YCD = await LIBERAPAYRH0xOvG.totalSupply.call({from: accounts[0]});

		await expect(LIBERAPAYRH0xOvG.burnFrom.call(addressB4hONKd, uintkNDrc2F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintuReyIHS = BigInt("803")
		const addresshkxMDg = accounts[3]
		const uinthTa7Nog = BigInt("1923")
		const addressFpZCn2t = accounts[1]
		const boolPbB42a = await LIBERAPAYfOhiQns.increaseAllowance.call(addresshkxMDg, uintuReyIHS, {from: accounts[5]});
		await LIBERAPAYfOhiQns.showLockState.call(addressFpZCn2t, uinthTa7Nog, {from: accounts[3]});

		assert.equal(boolPbB42a, true)
		await expect(LIBERAPAYfOhiQns.showLockState.call(addressFpZCn2t, uinthTa7Nog, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuFmXmuC = await LIBERAPAY.new({from: accounts[3]});
		const addressRtygJxe = accounts[0]
		const addressbfGQp36 = accounts[1]
		const uintNZyo5ny = BigInt("370")
		const addresskEOemQH = accounts[0]
		const addressJyjqtO = accounts[3]
		await LIBERAPAYuFmXmuC.whenNotPaused.call({from: accounts[2]});
		const uint256MYMB9st = await LIBERAPAYuFmXmuC.allowance.call(addressbfGQp36, addressRtygJxe, {from: accounts[0]});
		const boolh9VWJZY = await LIBERAPAYuFmXmuC.burnFrom.call(addresskEOemQH, uintNZyo5ny, {from: accounts[1]});
		const boolzUs9n7h = await LIBERAPAYuFmXmuC.unfreezeAccount.call(addressJyjqtO, {from: accounts[4]});
		await LIBERAPAYuFmXmuC.unpause.call({from: accounts[2]});

		await expect(LIBERAPAYuFmXmuC.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsrySf4J = await LIBERAPAY.new({from: accounts[3]});
		const uintn8UpRK4 = BigInt("1075")
		const boolLCx11pr = await LIBERAPAYsrySf4J.burn.call(uintn8UpRK4, {from: accounts[3]});
		await LIBERAPAYsrySf4J.whenNotPaused.call({from: accounts[4]});

		assert.equal(boolLCx11pr, true)
		await expect(LIBERAPAYsrySf4J.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwTcDw6R = await LIBERAPAY.new({from: accounts[5]});
		const address9Ox0kr = accounts[4]
		const addressr8lnVix = accounts[1]
		const uintbThRnN5 = BigInt("447")
		const addressnIfCEX1 = accounts[2]
		const addressGXkEa1w = await LIBERAPAYwTcDw6R.upgradeTo.call(address9Ox0kr, {from: accounts[2]});
		const uint256sm3IQlV = await LIBERAPAYwTcDw6R.balanceOf.call(addressr8lnVix, {from: accounts[0]});
		const uint256j9xC60u = await LIBERAPAYwTcDw6R.getNowTime.call({from: accounts[0]});
		const boolgmn60L = await LIBERAPAYwTcDw6R.increaseAllowance.call(addressnIfCEX1, uintbThRnN5, {from: accounts[1]});

		await expect(LIBERAPAYwTcDw6R.upgradeTo.call(address9Ox0kr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSG39zuC = await LIBERAPAY.new({from: accounts[0]});
		const uintlNEeozn = BigInt("1358")
		const addressIr1kfcB = accounts[3]
		const addressKvjJzYy = accounts[0]
		const addressozDofxB = accounts[3]
		const boolUJ6gvzj = await LIBERAPAYSG39zuC.transferFrom.call(addressKvjJzYy, addressIr1kfcB, uintlNEeozn, {from: accounts[2]});
		await LIBERAPAYSG39zuC.pause.call({from: accounts[3]});
		const boolGtHfl0m = await LIBERAPAYSG39zuC.freezeAccount.call(addressozDofxB, {from: accounts[5]});
		const uint256NkcFjoh = await LIBERAPAYSG39zuC.getNowTime.call({from: accounts[4]});

		await expect(LIBERAPAYSG39zuC.transferFrom.call(addressKvjJzYy, addressIr1kfcB, uintlNEeozn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYyLLb7yT = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVWhGmbx = accounts[1]
		const addresswl5VcXT = accounts[0]
		const addresslrTMsm5 = accounts[0]
		const addressRjNrrqN = accounts[0]
		const uintgljUM4X = BigInt("1074")
		const addressr6mIw17 = accounts[3]
		const addressUblEXK = await LIBERAPAYyLLb7yT.transferOwnership.call(addressVWhGmbx, {from: accounts[3]});
		const uint256Joj1AOM = await LIBERAPAYyLLb7yT.allowance.call(addresslrTMsm5, addresswl5VcXT, {from: accounts[0]});
		await LIBERAPAYyLLb7yT.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRvW2hkD = await LIBERAPAYyLLb7yT.notFrozen.call(addressRjNrrqN, {from: accounts[0]});
		await LIBERAPAYyLLb7yT.whenPaused.call({from: accounts[0]});
		await LIBERAPAYyLLb7yT.showLockState.call(addressr6mIw17, uintgljUM4X, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintCE47uO = BigInt("1932")
		const addressnV3mos8 = accounts[2]
		await LIBERAPAYfOhiQns.f.call({from: accounts[2]});
		await LIBERAPAYfOhiQns.showLockState.call(addressnV3mos8, uintCE47uO, {from: accounts[3]});

		await expect(LIBERAPAYfOhiQns.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintfXOFP8i = BigInt("93")
		const addressLMiqyty = accounts[0]
		const uintuIDW0RW = BigInt("277")
		const addresssRNAxm = accounts[1]
		const boolzrAL7hb = await LIBERAPAYfOhiQns.transfer.call(addressLMiqyty, uintfXOFP8i, {from: accounts[1]});
		await LIBERAPAYfOhiQns.showLockState.call(addresssRNAxm, uintuIDW0RW, {from: accounts[3]});

		await expect(LIBERAPAYfOhiQns.transfer.call(addressLMiqyty, uintfXOFP8i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintOUPesuJ = BigInt("386")
		const addressHjxgRCc = accounts[4]
		const uintbbbNunD = BigInt("1943")
		const addressTZhgVRC = accounts[1]
		await LIBERAPAYfOhiQns.pause.call({from: accounts[3]});
		const boolFTYMy2h = await LIBERAPAYfOhiQns.approve.call(addressHjxgRCc, uintOUPesuJ, {from: accounts[4]});
		await LIBERAPAYfOhiQns.onlyOwner.call({from: accounts[3]});
		await LIBERAPAYfOhiQns.showLockState.call(addressTZhgVRC, uintbbbNunD, {from: accounts[3]});

		await expect(LIBERAPAYfOhiQns.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintfwRFQbA = BigInt("229")
		const addressXwLyz1V = accounts[2]
		const uintDYe7VF = BigInt("1127")
		const addressAOgfmvp = accounts[3]
		const uintOr1E93 = BigInt("1932")
		const addressfI6b9q3 = accounts[1]
		await LIBERAPAYfOhiQns.showLockState.call(addressXwLyz1V, uintfwRFQbA, {from: accounts[0]});
		const boolR3pPELG = await LIBERAPAYfOhiQns.transfer.call(addressAOgfmvp, uintDYe7VF, {from: accounts[3]});
		await LIBERAPAYfOhiQns.showLockState.call(addressfI6b9q3, uintOr1E93, {from: accounts[3]});

		await expect(LIBERAPAYfOhiQns.showLockState.call(addressXwLyz1V, uintfwRFQbA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressCnozYeN = accounts[1]
		const uinthSlbmxN = BigInt("1932")
		const addressYg6SRLp = accounts[2]
		const addressT4elYZ = accounts[2]
		const uint256VYuK810 = await LIBERAPAYfOhiQns.balanceOf.call(addressCnozYeN, {from: accounts[0]});
		await LIBERAPAYfOhiQns.showLockState.call(addressYg6SRLp, uinthSlbmxN, {from: accounts[3]});
		const boolR450c5a = await LIBERAPAYfOhiQns.freezeAccount.call(addressT4elYZ, {from: accounts[4]});

		assert.equal(uint256VYuK810, BigInt("0"))
		await expect(LIBERAPAYfOhiQns.showLockState.call(addressYg6SRLp, uinthSlbmxN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSG39zuC = await LIBERAPAY.new({from: accounts[0]});
		const uintnffEHmO = BigInt("1377")
		const addressOGjSGQ5 = accounts[4]
		const addressa5ARV1C = accounts[0]
		const uintQdOkzxX = BigInt("1825")
		const addresszwn5Vpr = accounts[1]
		const addresswh0zyL6 = accounts[2]
		const uint256pHgVuqa = await LIBERAPAYSG39zuC.getNowTime.call({from: accounts[4]});
		await LIBERAPAYSG39zuC.whenNotPaused.call({from: accounts[1]});
		const boolUJ6gvzj = await LIBERAPAYSG39zuC.transferFrom.call(addressa5ARV1C, addressOGjSGQ5, uintnffEHmO, {from: accounts[2]});
		await LIBERAPAYSG39zuC.pause.call({from: accounts[3]});
		const uint256NkcFjoh = await LIBERAPAYSG39zuC.getNowTime.call({from: accounts[4]});
		const booldML63hQ = await LIBERAPAYSG39zuC.transferFrom.call(addresswh0zyL6, addresszwn5Vpr, uintQdOkzxX, {from: accounts[1]});

		assert.equal(uint256pHgVuqa, BigInt("1630231485"))
		await expect(LIBERAPAYSG39zuC.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressncAfg6H = accounts[0]
		const uintrFhEUdv = BigInt("93")
		const addressGq0Iwbl = accounts[0]
		const uint256vBNI8fM = await LIBERAPAYfOhiQns.currentBalanceOf.call(addressncAfg6H, {from: accounts[2]});
		const boolzrAL7hb = await LIBERAPAYfOhiQns.transfer.call(addressGq0Iwbl, uintrFhEUdv, {from: accounts[1]});

		assert.equal(uint256vBNI8fM, BigInt("0"))
		await expect(LIBERAPAYfOhiQns.transfer.call(addressGq0Iwbl, uintrFhEUdv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYc6NRCq = await LIBERAPAY.new({from: accounts[0]});
		const uintqUKkCMn = BigInt("1786")
		const addressEQVtIYa = accounts[5]
		const uintx8ZRxLE = BigInt("104")
		const uinteCA7MdX = BigInt("32")
		const addressAGQw929 = accounts[1]
		const boolveleWpF = await LIBERAPAYc6NRCq.approve.call(addressEQVtIYa, uintqUKkCMn, {from: accounts[3]});
		const boolmXL5CsH = await LIBERAPAYc6NRCq.lock.call(addressAGQw929, uinteCA7MdX, uintx8ZRxLE, {from: accounts[0]});

		assert.equal(boolveleWpF, true)
		await expect(LIBERAPAYc6NRCq.lock.call(addressAGQw929, uinteCA7MdX, uintx8ZRxLE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressC3y6kir = accounts[1]
		const addressssS8yUZ = accounts[0]
		const addressnurCbQv = await LIBERAPAYfOhiQns.transferOwnership.call(addressC3y6kir, {from: accounts[3]});
		const uint256vBNI8fM = await LIBERAPAYfOhiQns.currentBalanceOf.call(addressssS8yUZ, {from: accounts[2]});
		await LIBERAPAYfOhiQns.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256vBNI8fM, BigInt("0"))
		await expect(LIBERAPAYfOhiQns.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressvbskBfO = accounts[1]
		const uint256l84FJDE = await LIBERAPAYfOhiQns.totalSupply.call({from: accounts[1]});
		const uint256vBNI8fM = await LIBERAPAYfOhiQns.currentBalanceOf.call(addressvbskBfO, {from: accounts[2]});

		assert.equal(uint256l84FJDE, BigInt("3000000000000000000000000000"))
		assert.equal(uint256vBNI8fM, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintmZ65dRb = BigInt("214")
		const addresswvk5Uo = accounts[0]
		const uintfMGKxRA = BigInt("630")
		const addressT1BymLZ = accounts[4]
		const uintuoXIKCI = BigInt("1932")
		const addresskGAhxD6 = accounts[2]
		const boolv3ScmZy = await LIBERAPAYfOhiQns.decreaseAllowance.call(addresswvk5Uo, uintmZ65dRb, {from: accounts[2]});
		const boolFDxQol = await LIBERAPAYfOhiQns.decreaseAllowance.call(addressT1BymLZ, uintfMGKxRA, {from: accounts[4]});
		await LIBERAPAYfOhiQns.showLockState.call(addresskGAhxD6, uintuoXIKCI, {from: accounts[3]});

		await expect(LIBERAPAYfOhiQns.decreaseAllowance.call(addresswvk5Uo, uintmZ65dRb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintwiajLoK = BigInt("1628")
		const addressiWMObi3 = accounts[3]
		const uintyIoJHyG = BigInt("1945")
		const addressem0zINc = accounts[0]
		const boolrCDYtfW = await LIBERAPAYfOhiQns.distribute.call(addressiWMObi3, uintwiajLoK, {from: accounts[3]});
		const boolzrAL7hb = await LIBERAPAYfOhiQns.transfer.call(addressem0zINc, uintyIoJHyG, {from: accounts[1]});

		assert.equal(boolrCDYtfW, true)
		await expect(LIBERAPAYfOhiQns.transfer.call(addressem0zINc, uintyIoJHyG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSG39zuC = await LIBERAPAY.new({from: accounts[0]});
		const uintHgNNot9 = BigInt("1193")
		const addressueYx2UO = accounts[1]
		const addressTrNHWSr = accounts[3]
		const addressBsNzOw = accounts[2]
		const uintGgWemv4 = BigInt("1377")
		const addressbq5a16 = accounts[4]
		const addresseAw5Ls = accounts[0]
		const boolWLHLYl9 = await LIBERAPAYSG39zuC.mint.call(addressueYx2UO, uintHgNNot9, {from: accounts[0]});
		const uint256OdA6wE = await LIBERAPAYSG39zuC.allowance.call(addressBsNzOw, addressTrNHWSr, {from: accounts[2]});
		const boolUJ6gvzj = await LIBERAPAYSG39zuC.transferFrom.call(addresseAw5Ls, addressbq5a16, uintGgWemv4, {from: accounts[2]});

		await expect(LIBERAPAYSG39zuC.mint.call(addressueYx2UO, uintHgNNot9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressXlUbuCp = accounts[1]
		const addressb0GNjEV = accounts[3]
		const uint256VYuK810 = await LIBERAPAYfOhiQns.balanceOf.call(addressXlUbuCp, {from: accounts[0]});
		const boolXA2JD41 = await LIBERAPAYfOhiQns.freezeAccount.call(addressb0GNjEV, {from: accounts[3]});

		assert.equal(boolXA2JD41, true)
		assert.equal(uint256VYuK810, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const uintH2yRrS = BigInt("1985")
		const addresspGVC6lV = accounts[0]
		const uintc5BxBTn = BigInt("1929")
		const addressV3kQLpX = accounts[1]
		const boolaTf8IeQ = await LIBERAPAYfOhiQns.unlock.call(addresspGVC6lV, uintH2yRrS, {from: accounts[3]});
		await LIBERAPAYfOhiQns.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYfOhiQns.showLockState.call(addressV3kQLpX, uintc5BxBTn, {from: accounts[3]});

		await expect(LIBERAPAYfOhiQns.unlock.call(addresspGVC6lV, uintH2yRrS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressp8TCEdQ = accounts[1]
		const addresshylD6nH = accounts[3]
		const addressztPJmnr = accounts[0]
		const addresseG2zWVP = accounts[1]
		const uint256vBNI8fM = await LIBERAPAYfOhiQns.currentBalanceOf.call(addressp8TCEdQ, {from: accounts[2]});
		const uint256GcAtMlb = await LIBERAPAYfOhiQns.allowance.call(addressztPJmnr, addresshylD6nH, {from: accounts[0]});
		const boolQjqTCUe = await LIBERAPAYfOhiQns.unfreezeAccount.call(addresseG2zWVP, {from: accounts[3]});

		assert.equal(uint256GcAtMlb, BigInt("0"))
		assert.equal(uint256vBNI8fM, BigInt("0"))
		await expect(LIBERAPAYfOhiQns.unfreezeAccount.call(addresseG2zWVP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfOhiQns = await LIBERAPAY.new({from: accounts[3]});
		const addressShuyK3i = accounts[2]
		const address7oFObo = accounts[5]
		const uint256VYuK810 = await LIBERAPAYfOhiQns.balanceOf.call(addressShuyK3i, {from: accounts[0]});
		const addressXnxaDhh = await LIBERAPAYfOhiQns.upgradeTo.call(address7oFObo, {from: accounts[3]});
		await LIBERAPAYfOhiQns.pause.call({from: accounts[4]});

		assert.equal(uint256VYuK810, BigInt("0"))
		await expect(LIBERAPAYfOhiQns.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})