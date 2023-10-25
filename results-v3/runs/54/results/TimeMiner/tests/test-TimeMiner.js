const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerveCvlSz = await TimeMiner.new({from: accounts[1]});
		const uinteYu50RS = BigInt("1705")
		const addressndQLU6Y = accounts[2]
		const addressaOyZ03U = accounts[5]
		const uintILvKi96 = BigInt("713")
		const uint256bISd0Xa = await TimeMinerveCvlSz.changePreSalePriceIfToHigh.call(uinteYu50RS, {from: accounts[2]});
		const uint256XnToVNm = await TimeMinerveCvlSz.balanceOf.call(addressndQLU6Y, {from: accounts[2]});
		const uint256xrCXoof = await TimeMinerveCvlSz.tokensToClaim.call(addressaOyZ03U, {from: accounts[0]});
		const uint256CoI7lks = await TimeMinerveCvlSz.totalSupply.call({from: accounts[1]});
		const uintvLc1KI5 = await TimeMinerveCvlSz.preSale.call(uintILvKi96, {from: accounts[2]});

		await expect(TimeMinerveCvlSz.changePreSalePriceIfToHigh.call(uinteYu50RS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineraNAlw4 = await TimeMiner.new({from: accounts[3]});
		const uintocrlyhf = BigInt("1720")
		const addressnB0xSrW = accounts[0]
		const uintAyT85KD = BigInt("1578")
		const addressLaFrI9a = accounts[1]
		const addressyWgENrO = accounts[4]
		const addressnSd9km = accounts[5]
		const addressnwCsd8Z = accounts[4]
		const boolVeancm3 = await TimeMineraNAlw4.transfer.call(addressnB0xSrW, uintocrlyhf, {from: accounts[5]});
		const boolpxERIQ = await TimeMineraNAlw4.transferFrom.call(addressyWgENrO, addressLaFrI9a, uintAyT85KD, {from: accounts[3]});
		const boolQccZhSR = await TimeMineraNAlw4.isWhitelisted.call(addressnSd9km, {from: accounts[1]});
		const uint256fnZ0MvH = await TimeMineraNAlw4.tokensToClaim.call(addressnwCsd8Z, {from: accounts[1]});

		await expect(TimeMineraNAlw4.transfer.call(addressnB0xSrW, uintocrlyhf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOBVmTSf = await TimeMiner.new({from: accounts[4]});
		const uintGGKIya = BigInt("934")
		const addressu5zARHv = accounts[0]
		const addresshKD6uZS = accounts[2]
		const addressvpiSD55 = accounts[0]
		const uintX7sNCk5 = BigInt("1708")
		const addressU09vUQf = "0x0000000000000000000000000000000000000001"
		const boolB0qXUUK = await TimeMinerOBVmTSf.transferFrom.call(addresshKD6uZS, addressu5zARHv, uintGGKIya, {from: accounts[1]});
		const uint256Oix4JOt = await TimeMinerOBVmTSf.allInfoFor.call(addressvpiSD55, {from: accounts[3]});
		const boolCHicmyP = await TimeMinerOBVmTSf.transfer.call(addressU09vUQf, uintX7sNCk5, {from: accounts[3]});
		const uint256qD2h5to = await TimeMinerOBVmTSf.totalSupply.call({from: accounts[4]});
		await TimeMinerOBVmTSf.preSaleFinished.call({from: accounts[5]});

		await expect(TimeMinerOBVmTSf.transferFrom.call(addresshKD6uZS, addressu5zARHv, uintGGKIya, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineriTjPRz0 = await TimeMiner.new({from: accounts[2]});
		const addressAnZgKM4 = accounts[2]
		const uint256HDXJOtd = await TimeMineriTjPRz0.balanceOfTokenCirculation.call(addressAnZgKM4, {from: accounts[3]});
		const uint256KmDFWZt = await TimeMineriTjPRz0.totalSupply.call({from: accounts[2]});
		const boolpoVt6lJ = await TimeMineriTjPRz0.infoStableSystem.call({from: accounts[2]});

		assert.equal(uint256HDXJOtd, BigInt("24000000"))
		assert.equal(uint256KmDFWZt, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJPebTYy = await TimeMiner.new({from: accounts[1]});
		const addressZG7dKDT = accounts[1]
		const address4To3YI = accounts[4]
		const addressy6puXvj = accounts[0]
		const boolwwokoZw = await TimeMinerJPebTYy.isWhitelisted.call(addressZG7dKDT, {from: accounts[5]});
		const uint256q8BhViv = await TimeMinerJPebTYy.balanceOf.call(address4To3YI, {from: accounts[4]});
		const uint256ftl3xg6 = await TimeMinerJPebTYy.balanceOfTokenCirculation.call(addressy6puXvj, {from: accounts[1]});

		assert.equal(boolwwokoZw, true)
		assert.equal(uint256ftl3xg6, BigInt("0"))
		assert.equal(uint256q8BhViv, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerafHVDWn = await TimeMiner.new({from: accounts[2]});
		const boolaofpMa0 = false
		const addressCLYY7iL = accounts[1]
		const addressjwavu2t = accounts[0]
		const uint256TWEqSTq = await TimeMinerafHVDWn.totalSupply.call({from: accounts[0]});
		const addressYU53zh = await TimeMinerafHVDWn.whitelist.call(addressCLYY7iL, boolaofpMa0, {from: accounts[1]});
		const uint256xqQAstB = await TimeMinerafHVDWn.balanceOf.call(addressjwavu2t, {from: accounts[0]});

		assert.equal(uint256TWEqSTq, BigInt("24000000"))
		await expect(TimeMinerafHVDWn.whitelist.call(addressCLYY7iL, boolaofpMa0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTC4VCZv = await TimeMiner.new({from: accounts[4]});
		const addressnxevlFh = accounts[4]
		const uint256sCpeBAR = await TimeMinerTC4VCZv.totalSupply.call({from: accounts[2]});
		const uint256oyOUcMB = await TimeMinerTC4VCZv.tokensToClaim.call(addressnxevlFh, {from: accounts[0]});

		assert.equal(uint256oyOUcMB, BigInt("12000000"))
		assert.equal(uint256sCpeBAR, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const addressyr9UxX0 = accounts[4]
		const uintHTgi6o4 = BigInt("358")
		const uintNzVuekA = BigInt("1263")
		const boolkhMMkLE = false
		const address7xiCzn = accounts[1]
		const addressuCVGOX0 = accounts[4]
		const uint256i7BKqBd = await TimeMinerCEE30vk.tokensToClaim.call(addressyr9UxX0, {from: accounts[5]});
		const uint256dJa47e3 = await TimeMinerCEE30vk.setPrizeFromNewAddress.call(uintNzVuekA, uintHTgi6o4, {from: accounts[2]});
		const addressHwiB5g = await TimeMinerCEE30vk.whitelist.call(address7xiCzn, boolkhMMkLE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YtAHYRo = await TimeMinerCEE30vk.tokensToClaim.call(addressuCVGOX0, {from: accounts[0]});

		await expect(TimeMinerCEE30vk.tokensToClaim.call(addressyr9UxX0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const booltexPAT = false
		const uintjXB6hbh = BigInt("962")
		const addressaFo78M0 = accounts[4]
		const boolkhMMkLE = false
		const addressXvV9scw = accounts[0]
		const boolSsGMySy = await TimeMinerCEE30vk.setStableCoinSystem.call(booltexPAT, {from: accounts[0]});
		const boolM5xlo06 = await TimeMinerCEE30vk.transfer.call(addressaFo78M0, uintjXB6hbh, {from: accounts[1]});
		const addressHwiB5g = await TimeMinerCEE30vk.whitelist.call(addressXvV9scw, boolkhMMkLE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerCEE30vk.setStableCoinSystem.call(booltexPAT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const boolkhMMkLE = true
		const addressenNRWS = accounts[0]
		const addressrlCb885 = accounts[4]
		await TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]});
		const addressHwiB5g = await TimeMinerCEE30vk.whitelist.call(addressenNRWS, boolkhMMkLE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YtAHYRo = await TimeMinerCEE30vk.tokensToClaim.call(addressrlCb885, {from: accounts[0]});

		await expect(TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineruxjWwAp = await TimeMiner.new({from: accounts[2]});
		const addresspBxAfH = accounts[2]
		const addressXnwoynH = accounts[4]
		const addressDjrgdc = accounts[4]
		const uint256zVNkeSn = await TimeMineruxjWwAp.totalSupply.call({from: accounts[4]});
		const uint256McwhhAh = await TimeMineruxjWwAp.allInfoFor.call(addresspBxAfH, {from: accounts[3]});
		const uint256inTLSs0 = await TimeMineruxjWwAp.tokensToClaim.call(addressXnwoynH, {from: accounts[4]});
		const uint256HB2YEPq = await TimeMineruxjWwAp.tokensToClaim.call(addressDjrgdc, {from: accounts[1]});

		assert.equal(uint256zVNkeSn, BigInt("24000000"))
		await expect(TimeMineruxjWwAp.tokensToClaim.call(addressXnwoynH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const addressBHfIBOo = accounts[3]
		const addressIWzHgYk = accounts[3]
		const addressPevToGg = accounts[5]
		await TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]});
		const uint256GPk3dhB = await TimeMinerCEE30vk.allowance.call(addressIWzHgYk, addressBHfIBOo, {from: accounts[0]});
		const uint256YtAHYRo = await TimeMinerCEE30vk.tokensToClaim.call(addressPevToGg, {from: accounts[0]});

		await expect(TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const uintinCXwsM = BigInt("660")
		const addressN0SUjjd = accounts[5]
		const uintmSe2w0C = await TimeMinerCEE30vk.preSale.call(uintinCXwsM, {from: accounts[5]});
		await TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]});
		const uint256Juhzdc2 = await TimeMinerCEE30vk.totalSupply.call({from: accounts[5]});
		const uint256YtAHYRo = await TimeMinerCEE30vk.tokensToClaim.call(addressN0SUjjd, {from: accounts[0]});

		await expect(TimeMinerCEE30vk.preSale.call(uintinCXwsM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinertAO7Kat = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressajmPCv = accounts[4]
		const uintifBTp8H = BigInt("283")
		const addressXasw9k4 = accounts[3]
		const uintbJzCePm = BigInt("832")
		const uint256K6rcUzc = await TimeMinertAO7Kat.tokensToClaim.call(addressajmPCv, {from: accounts[1]});
		const boolRqSkP1Z = await TimeMinertAO7Kat.transfer.call(addressXasw9k4, uintifBTp8H, {from: accounts[3]});
		const uint256lzzWiC0 = await TimeMinertAO7Kat.changePreSalePriceIfToHigh.call(uintbJzCePm, {from: accounts[3]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const addressqQEZVzN = accounts[1]
		const uintZgUwqPO = BigInt("1760")
		const uint6kPCUl = BigInt("1441")
		await TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]});
		const uint256DgIYPJB = await TimeMinerCEE30vk.balanceOf.call(addressqQEZVzN, {from: accounts[5]});
		const uint256zgxswTo = await TimeMinerCEE30vk.setPrizeFromNewAddress.call(uint6kPCUl, uintZgUwqPO, {from: accounts[5]});

		await expect(TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const uinthA8ACn = BigInt("700")
		const addressN8T445U = accounts[1]
		const booluS8rXy = await TimeMinerCEE30vk.approve.call(addressN8T445U, uinthA8ACn, {from: accounts[0]});
		await TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]});

		assert.equal(booluS8rXy, true)
		await expect(TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCEE30vk = await TimeMiner.new({from: accounts[2]});
		const uintgExPESX = BigInt("1910")
		const addressoj1oSQA = "0x0000000000000000000000000000000000000001"
		const boolaTllo1v = true
		const boolaxE0xH6 = await TimeMinerCEE30vk.transfer.call(addressoj1oSQA, uintgExPESX, {from: accounts[2]});
		const boolOg8EUCi = await TimeMinerCEE30vk.setStableCoinSystem.call(boolaTllo1v, {from: accounts[1]});
		await TimeMinerCEE30vk.preSaleFinished.call({from: accounts[2]});

		assert.equal(boolaxE0xH6, true)
		await expect(TimeMinerCEE30vk.setStableCoinSystem.call(boolaTllo1v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})