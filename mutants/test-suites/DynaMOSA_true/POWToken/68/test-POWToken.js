const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokendB92Kc6 = await POWToken.new({from: accounts[5]});
		const address5pAGJZ = accounts[3]
		const uintgMCXH23 = BigInt("377")
		const uintWx2dXSk = BigInt("996")
//		const addressFGOMg6 = await POWTokendB92Kc6.setParamSetter.call(address5pAGJZ, {from: accounts[4]});
//		const uint256IM27fr = await POWTokendB92Kc6.setStartMiningTime.call(uintgMCXH23, {from: accounts[3]});
//		const uint256PSPWrRP = await POWTokendB92Kc6.setStartMiningTime.call(uintWx2dXSk, {from: accounts[5]});
//		await POWTokendB92Kc6.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BWsFEqM = await POWTokendB92Kc6.stakingRewardRate.call({from: accounts[0]});

		await expect(POWTokendB92Kc6.setParamSetter.call(address5pAGJZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDLeyg8c = await POWToken.new({from: accounts[3]});
		const uintIjsY3fC = BigInt("1600")
		const uintmdU9Eo = BigInt("226")
		const uintic9edYA = BigInt("1086")
		const addressUuGjZeA = accounts[2]
		const uint9XbNri = BigInt("1312")
		const uintO4QdSVz = BigInt("1893")
//		const uint256IXLe1Kt = await POWTokenDLeyg8c.addHashRate.call(uintIjsY3fC, {from: accounts[2]});
//		const uint256iEUQlRj = await POWTokenDLeyg8c.lpStakingRewardRate.call({from: accounts[2]});
//		const uint256e8HflEc = await POWTokenDLeyg8c.setStartMiningTime.call(uintmdU9Eo, {from: accounts[3]});
//		const addressyYDboDJ = await POWTokenDLeyg8c.mint.call(addressUuGjZeA, uintic9edYA, {from: accounts[2]});
//		const uint256nkJy6OT = await POWTokenDLeyg8c.setStakingRewardRatio.call(uint9XbNri, {from: accounts[2]});
//		const uint256q7JnDXt = await POWTokenDLeyg8c.addHashRate.call(uintO4QdSVz, {from: accounts[4]});

		await expect(POWTokenDLeyg8c.addHashRate.call(uintIjsY3fC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfefE1Li = await POWToken.new({from: accounts[0]});
		const bytecklIqJj = "0x0218110b1c10190e0420091e11021b02001c1d0c0a050c1b05161d0e0f041e12"
		const bytevA30kMV = "0x0617181a131a100b0e1f0e03110a18091e0b01160b050c06100f0305160a1808"
		const uintJMHmJf = BigInt("187")
		const uintHu2zcqG = BigInt("743")
		const uintkX8C4Fw = BigInt("221")
		const addressoqGNVnH = accounts[2]
		const addressJdHfqAc = accounts[0]
//		const addressPlbl1r = await POWTokenfefE1Li.permit.call(addressJdHfqAc, addressoqGNVnH, uintkX8C4Fw, uintHu2zcqG, uintJMHmJf, bytevA30kMV, bytecklIqJj, {from: accounts[0]});
//		await POWTokenfefE1Li.unpause.call({from: accounts[3]});
//		const uint256q2KaKb8 = await POWTokenfefE1Li.lpStakingRewardRate.call({from: accounts[5]});
//		await POWTokenfefE1Li.unpause.call({from: accounts[2]});
//		const uint256sGshbMu = await POWTokenfefE1Li.getHistoryWorkingRate.call({from: accounts[1]});
//		await POWTokenfefE1Li.pause.call({from: accounts[4]});

		await expect(POWTokenfefE1Li.permit.call(addressJdHfqAc, addressoqGNVnH, uintkX8C4Fw, uintHu2zcqG, uintJMHmJf, bytevA30kMV, bytecklIqJj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokens5wyiry = await POWToken.new({from: accounts[1]});
		const addressSBETAFc = accounts[4]
		const uintJlx16Iz = BigInt("242")
		const addresso0539dm = accounts[0]
		const boolk8eKlj7 = await POWTokens5wyiry.paused.call({from: accounts[3]});
//		await POWTokens5wyiry.whenNotPaused.call({from: accounts[2]});
//		const addresspwcR8k8 = await POWTokens5wyiry.setParamSetter.call(addressSBETAFc, {from: accounts[5]});
//		const addressDr4pL15 = await POWTokens5wyiry.mint.call(addresso0539dm, uintJlx16Iz, {from: accounts[2]});

		assert.equal(boolk8eKlj7, false)
		await expect(POWTokens5wyiry.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIb8DAZ = await POWToken.new({from: accounts[4]});
		const uintzyUQupb = BigInt("942")
		const addressb28K1J5 = accounts[4]
		const uintrTdzuxJ = BigInt("1558")
		const boolOgMGwqL = await POWTokenIb8DAZ.approve.call(addressb28K1J5, uintzyUQupb, {from: accounts[5]});
//		await POWTokenIb8DAZ.onlyOwner.call({from: accounts[1]});
//		const uint256GEa7Sap = await POWTokenIb8DAZ.setElectricCharge.call(uintrTdzuxJ, {from: accounts[2]});

		assert.equal(boolOgMGwqL, true)
		await expect(POWTokenIb8DAZ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenU4RgVJ9 = await POWToken.new({from: accounts[2]});
		const uintEr1CT6b = BigInt("371")
		const addressoCJdN6r = accounts[1]
		const addressn7qA0kX = accounts[0]
//		const addressU04dP91 = await POWTokenU4RgVJ9.claimReward.call(addressoCJdN6r, uintEr1CT6b, {from: accounts[3]});
//		const addressRjwwPtS = await POWTokenU4RgVJ9.transferOwnership.call(addressn7qA0kX, {from: accounts[0]});
//		const uint256XLY1iNf = await POWTokenU4RgVJ9.remainingAmount.call({from: accounts[1]});
//		const uint256sE1oLF = await POWTokenU4RgVJ9.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		await POWTokenU4RgVJ9.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenU4RgVJ9.claimReward.call(addressoCJdN6r, uintEr1CT6b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencJQEtU3 = await POWToken.new({from: accounts[2]});
		const uintTtS5xfY = BigInt("1808")
		const addressIPbK4WI = accounts[4]
		const addressyHE5ONM = accounts[3]
		const addressnImebai = accounts[2]
//		const boolT6Aippp = await POWTokencJQEtU3.transferFrom.call(addressyHE5ONM, addressIPbK4WI, uintTtS5xfY, {from: accounts[0]});
//		const addressBgUhpv0 = await POWTokencJQEtU3.transferOwnership.call(addressnImebai, {from: accounts[0]});

		await expect(POWTokencJQEtU3.transferFrom.call(addressyHE5ONM, addressIPbK4WI, uintTtS5xfY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencJQEtU3 = await POWToken.new({from: accounts[2]});
		const addresseL61BB4 = accounts[3]
		const uint256zAqwGga = await POWTokencJQEtU3.lpStakingRewardRate.call({from: accounts[3]});
//		const uint256DoWfSv7 = await POWTokencJQEtU3.getHistoryWorkingRate.call({from: accounts[2]});
//		const addressBgUhpv0 = await POWTokencJQEtU3.transferOwnership.call(addresseL61BB4, {from: accounts[0]});

		assert.equal(uint256zAqwGga, BigInt("0"))
		await expect(POWTokencJQEtU3.getHistoryWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGIJw1xl = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK5RXLGM = BigInt("305")
		const uintfSJt9qj = BigInt("635")
		const uintSCpctXe = BigInt("1202")
		const uintDE061c9 = BigInt("1843")
		const uintGgJrrz = BigInt("185")
		const addressCdkQ8w = "0x0000000000000000000000000000000000000001"
		const addressc79UFKf = accounts[2]
		const addressmDM5T2N = accounts[4]
		const addressfAg5qHK = accounts[1]
		const addressevEq3Q7 = accounts[4]
		const addressseF1jQd = accounts[1]
		const addressvpjB21N = accounts[2]
		const addressL0REhk = accounts[3]
		const stringC7KiflN = "2aCvSYAn6UzLOa4DaFYRe2YJSHo6XtCYMY2b2ORYh6A6fhg37sNEmGzPuLuCJQlPbkTQgzQ26LmtNUfaGxUuhg9"
		const stringW2yH6JH = "1QNxU8uRmmvX1IHE8KiQCknTrwyNuaRtChwgPsPh7CZzEDI52sWTxq7z2Na89DkyBYxBqUljlPEYO526eKpZhr"
		const uintwRWuz1C = BigInt("754")
		const addressOcKcBDd = accounts[0]
		const addressfi1yVsE = accounts[0]
		const stringySnqWj = await POWTokenGIJw1xl.initialize.call(stringW2yH6JH, stringC7KiflN, addressL0REhk, addressvpjB21N, addressseF1jQd, addressevEq3Q7, addressfAg5qHK, addressmDM5T2N, addressc79UFKf, addressCdkQ8w, uintGgJrrz, uintDE061c9, uintSCpctXe, uintfSJt9qj, uintK5RXLGM, {from: accounts[0]});
		const boolvf5SEGe = await POWTokenGIJw1xl.transferFrom.call(addressfi1yVsE, addressOcKcBDd, uintwRWuz1C, {from: accounts[2]});
		const uint256RL7Joq = await POWTokenGIJw1xl.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256wAyvCfQ = await POWTokenGIJw1xl.remainingAmount.call({from: accounts[1]});
		await POWTokenGIJw1xl.unpause.call({from: accounts[2]});
	});

	it('test for POWToken', async () => {
		const POWTokenU4RgVJ9 = await POWToken.new({from: accounts[2]});
		const uintE1W1zOB = BigInt("816")
		const uintasvTtqf = BigInt("950")
		const uintb0s8o0E = BigInt("1805")
		const uintGAAWXA7 = BigInt("1457")
		const uintpUw0f9I = BigInt("164")
		const addressbOiRdf4 = accounts[2]
		const addressJS2OHXb = "0x0000000000000000000000000000000000000001"
		const addressbYmqFUo = accounts[3]
		const addressuoTcai6 = accounts[1]
		const addressaSPm6gm = accounts[3]
		const addresshP8nGH9 = accounts[0]
		const addressMAtCJQl = accounts[5]
		const addressBxuiEdy = accounts[0]
		const stringXnvrwVS = "3X5HQre3zHXorU8noHSptd1NmpD1CkUy"
		const stringTmwYGt0 = "RA4UqcbyPaVGMrzSgzF8g8Wb32JwsDGpIiS48NGdFqiw6q1zsTzESAECXfKFja"
		const uintdxja11S = BigInt("371")
		const addressTDqELU5 = accounts[1]
//		const stringdwDdZYr = await POWTokenU4RgVJ9.initialize.call(stringTmwYGt0, stringXnvrwVS, addressBxuiEdy, addressMAtCJQl, addresshP8nGH9, addressaSPm6gm, addressuoTcai6, addressbYmqFUo, addressJS2OHXb, addressbOiRdf4, uintpUw0f9I, uintGAAWXA7, uintb0s8o0E, uintasvTtqf, uintE1W1zOB, {from: accounts[1]});
//		const addressU04dP91 = await POWTokenU4RgVJ9.claimReward.call(addressTDqELU5, uintdxja11S, {from: accounts[3]});
//		const uint256XLY1iNf = await POWTokenU4RgVJ9.remainingAmount.call({from: accounts[1]});
//		const uint256sE1oLF = await POWTokenU4RgVJ9.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		await POWTokenU4RgVJ9.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenU4RgVJ9.initialize.call(stringTmwYGt0, stringXnvrwVS, addressBxuiEdy, addressMAtCJQl, addresshP8nGH9, addressaSPm6gm, addressuoTcai6, addressbYmqFUo, addressJS2OHXb, addressbOiRdf4, uintpUw0f9I, uintGAAWXA7, uintb0s8o0E, uintasvTtqf, uintE1W1zOB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencJQEtU3 = await POWToken.new({from: accounts[2]});
		const addressKHZDAzn = accounts[2]
//		const uint256t9UP3L2 = await POWTokencJQEtU3.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressBgUhpv0 = await POWTokencJQEtU3.transferOwnership.call(addressKHZDAzn, {from: accounts[0]});

		await expect(POWTokencJQEtU3.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencJQEtU3 = await POWToken.new({from: accounts[2]});
		const uintewx7dFZ = BigInt("391")
		const addressSDveDmU = accounts[1]
		const uint256zAqwGga = await POWTokencJQEtU3.lpStakingRewardRate.call({from: accounts[3]});
//		const addresscNXKiQT = await POWTokencJQEtU3.claimIncome.call(addressSDveDmU, uintewx7dFZ, {from: accounts[3]});
//		const uint256DoWfSv7 = await POWTokencJQEtU3.getHistoryWorkingRate.call({from: accounts[2]});
//		const uint256KLcx8jh = await POWTokencJQEtU3.remainingAmount.call({from: accounts[0]});

		assert.equal(uint256zAqwGga, BigInt("0"))
		await expect(POWTokencJQEtU3.claimIncome.call(addressSDveDmU, uintewx7dFZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencJQEtU3 = await POWToken.new({from: accounts[2]});
		const uint256zAqwGga = await POWTokencJQEtU3.lpStakingRewardRate.call({from: accounts[3]});
//		await POWTokencJQEtU3.updateIncomeRate.call({from: accounts[0]});
//		const uint256DoWfSv7 = await POWTokencJQEtU3.getHistoryWorkingRate.call({from: accounts[2]});

		assert.equal(uint256zAqwGga, BigInt("0"))
		await expect(POWTokencJQEtU3.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenU4RgVJ9 = await POWToken.new({from: accounts[2]});
		const uintQ3tkS9v = BigInt("555")
		const addressps4s0uX = accounts[5]
		const uintLzuZk5U = BigInt("371")
		const addressa6yzWGu = accounts[2]
//		const booluX5Wx48 = await POWTokenU4RgVJ9.transfer.call(addressps4s0uX, uintQ3tkS9v, {from: accounts[1]});
//		const addressU04dP91 = await POWTokenU4RgVJ9.claimReward.call(addressa6yzWGu, uintLzuZk5U, {from: accounts[3]});
//		await POWTokenU4RgVJ9.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenU4RgVJ9.transfer.call(addressps4s0uX, uintQ3tkS9v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfefE1Li = await POWToken.new({from: accounts[0]});
		const byteqXpAFd8 = "0x0814141015100d0f0b0706120e12031610110f10040f16061f1d17131b140012"
		const byte8ZMtVV = "0x1407131b1e1b1b1d16200d0b0a03180c05010413171b0906161a090d1b03160e"
		const uintAFen0Sf = BigInt("164")
		const uintxnOuR3A = BigInt("1904")
		const uintTjDmGZQ = BigInt("1292")
		const addresstKoU3da = accounts[0]
		const addressy6KKXEh = accounts[0]
		const bytemDDnvUi = "0x0218110b1c10190e0420091e11021b02001c1d0c0a050c1b05161d0e0f041e12"
		const bytecbBSeqm = "0x0617181a131a100b0e1f0e03110a18091e0b01160b050c06100f0305160a1808"
		const uintpwRWUrh = BigInt("187")
		const uintjJvo1Gm = BigInt("743")
		const uintqBgImkT = BigInt("221")
		const addressIWJzOX5 = accounts[2]
		const addressZMqjA8c = accounts[0]
		const uint256OOkpVJA = await POWTokenfefE1Li.remainingAmount.call({from: accounts[4]});
//		const addressPlBFE4E = await POWTokenfefE1Li.permit.call(addressy6KKXEh, addresstKoU3da, uintTjDmGZQ, uintxnOuR3A, uintAFen0Sf, byte8ZMtVV, byteqXpAFd8, {from: accounts[4]});
//		const addressPlbl1r = await POWTokenfefE1Li.permit.call(addressZMqjA8c, addressIWJzOX5, uintqBgImkT, uintjJvo1Gm, uintpwRWUrh, bytecbBSeqm, bytemDDnvUi, {from: accounts[0]});
//		const uint256q2KaKb8 = await POWTokenfefE1Li.lpStakingRewardRate.call({from: accounts[5]});
//		await POWTokenfefE1Li.unpause.call({from: accounts[2]});

		assert.equal(uint256OOkpVJA, BigInt("0"))
		await expect(POWTokenfefE1Li.permit.call(addressy6KKXEh, addresstKoU3da, uintTjDmGZQ, uintxnOuR3A, uintAFen0Sf, byte8ZMtVV, byteqXpAFd8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencJQEtU3 = await POWToken.new({from: accounts[2]});
		const uintjzCQ2IZ = BigInt("1427")
		const addressz7Hr4bZ = accounts[4]
		const uintgxd2G0 = BigInt("434")
		const addressUP5V2C7 = accounts[5]
		const uint256zAqwGga = await POWTokencJQEtU3.lpStakingRewardRate.call({from: accounts[3]});
		const boolveCb4hM = await POWTokencJQEtU3.approve.call(addressz7Hr4bZ, uintjzCQ2IZ, {from: accounts[4]});
//		const addressIFb2kF8 = await POWTokencJQEtU3.mint.call(addressUP5V2C7, uintgxd2G0, {from: accounts[4]});
//		const uint256DoWfSv7 = await POWTokencJQEtU3.getHistoryWorkingRate.call({from: accounts[2]});

		assert.equal(boolveCb4hM, true)
		assert.equal(uint256zAqwGga, BigInt("0"))
		await expect(POWTokencJQEtU3.mint.call(addressUP5V2C7, uintgxd2G0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})