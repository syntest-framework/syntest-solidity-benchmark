const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpHxf4n4 = await LIBERAPAY.new({from: accounts[0]});
		const addressgBx8sdj = accounts[0]
//		await LIBERAPAYpHxf4n4.pause.call({from: accounts[3]});
//		const boolQuxVfM = await LIBERAPAYpHxf4n4.freezeAccount.call(addressgBx8sdj, {from: accounts[0]});

		await expect(LIBERAPAYpHxf4n4.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcZRjKCB = await LIBERAPAY.new({from: accounts[4]});
		const addressoERw0QW = accounts[5]
		const addressEXclmV1 = accounts[3]
		const uintlqMl0uN = BigInt("1217")
		const addressv2gdKVU = accounts[0]
		const addressEz1G2wx = accounts[5]
		const uintkBUoNos = BigInt("1980")
		const addressQqOBbQA = accounts[5]
		const uint256lMduFDI = await LIBERAPAYcZRjKCB.allowance.call(addressEXclmV1, addressoERw0QW, {from: accounts[2]});
//		const boolfxLtwf = await LIBERAPAYcZRjKCB.burn.call(uintlqMl0uN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqmTy4bj = await LIBERAPAYcZRjKCB.unfreezeAccount.call(addressv2gdKVU, {from: accounts[4]});
//		const addressdEvgSMT = await LIBERAPAYcZRjKCB.transferOwnership.call(addressEz1G2wx, {from: accounts[4]});
//		const boolvMq6mhz = await LIBERAPAYcZRjKCB.decreaseAllowance.call(addressQqOBbQA, uintkBUoNos, {from: accounts[1]});

		assert.equal(uint256lMduFDI, BigInt("0"))
		await expect(LIBERAPAYcZRjKCB.burn.call(uintlqMl0uN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfU6R70 = await LIBERAPAY.new({from: accounts[1]});
		const uintogtDd4G = BigInt("589")
		const addressWF4w3A9 = accounts[3]
		const addressaPuTTDs = accounts[4]
		const addressYWCSnr6 = accounts[1]
		const uintStg3ezL = BigInt("1890")
		const addressFxafrFQ = accounts[2]
		const addresswRw59Fz = accounts[4]
//		const booliZpi4A = await LIBERAPAYfU6R70.transferFrom.call(addressaPuTTDs, addressWF4w3A9, uintogtDd4G, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYfU6R70.onlyOwner.call({from: accounts[1]});
//		const uint256JbOVwf = await LIBERAPAYfU6R70.currentBalanceOf.call(addressYWCSnr6, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tM6H0xz = await LIBERAPAYfU6R70.getNowTime.call({from: accounts[0]});
//		const booliIftV1c = await LIBERAPAYfU6R70.transferFrom.call(addresswRw59Fz, addressFxafrFQ, uintStg3ezL, {from: accounts[3]});

		await expect(LIBERAPAYfU6R70.transferFrom.call(addressaPuTTDs, addressWF4w3A9, uintogtDd4G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkNrXFaK = await LIBERAPAY.new({from: accounts[5]});
		const uintTa2jugW = BigInt("1838")
		const addressv4L7jA = accounts[2]
		const uintk5BOyZC = BigInt("581")
		const addressvJx6njj = accounts[3]
		const uintHmmLzRm = BigInt("1456")
		const addressMAtW4F = accounts[4]
		const addressFkjOtX4 = accounts[2]
		const uint256urozDe7 = await LIBERAPAYkNrXFaK.getNowTime.call({from: accounts[5]});
		const uint256wUnkE0y = await LIBERAPAYkNrXFaK.getNowTime.call({from: accounts[5]});
//		const boolVO0Jge2 = await LIBERAPAYkNrXFaK.unlock.call(addressv4L7jA, uintTa2jugW, {from: accounts[4]});
//		const boolb3msm6S = await LIBERAPAYkNrXFaK.transfer.call(addressvJx6njj, uintk5BOyZC, {from: accounts[3]});
//		const boolcv0YQ8w = await LIBERAPAYkNrXFaK.increaseAllowance.call(addressMAtW4F, uintHmmLzRm, {from: accounts[4]});
//		const uint256ltmpHFP = await LIBERAPAYkNrXFaK.balanceOf.call(addressFkjOtX4, {from: accounts[2]});

		assert.equal(uint256urozDe7, BigInt("1630231027"))
		assert.equal(uint256wUnkE0y, BigInt("1630231027"))
		await expect(LIBERAPAYkNrXFaK.unlock.call(addressv4L7jA, uintTa2jugW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcO9nWhn = await LIBERAPAY.new({from: accounts[1]});
		const uintvWKTnDd = BigInt("311")
		const uintG4yuOe7 = BigInt("1666")
		const uintYM8ghkw = BigInt("165")
		const addressaEaonc = accounts[2]
//		await LIBERAPAYcO9nWhn.whenNotPaused.call({from: accounts[2]});
//		const boolkDV24UE = await LIBERAPAYcO9nWhn.acceptOwnership.call({from: accounts[0]});
//		const boolMZMwOgm = await LIBERAPAYcO9nWhn.burn.call(uintvWKTnDd, {from: accounts[2]});
//		const boolUzsARwq = await LIBERAPAYcO9nWhn.burn.call(uintG4yuOe7, {from: accounts[2]});
//		await LIBERAPAYcO9nWhn.showLockState.call(addressaEaonc, uintYM8ghkw, {from: accounts[1]});

		await expect(LIBERAPAYcO9nWhn.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHIy7If = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswbJz327 = accounts[0]
		await LIBERAPAYHIy7If.onlyNewOwner.call({from: accounts[0]});
		await LIBERAPAYHIy7If.f.call({from: accounts[5]});
		const addressqqLqhZ6 = await LIBERAPAYHIy7If.upgradeTo.call(addresswbJz327, {from: accounts[0]});
		await LIBERAPAYHIy7If.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256r7vfBWt = await LIBERAPAYHIy7If.totalSupply.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const addressBfrVsZr = accounts[4]
		const uintU3e3ryW = BigInt("510")
		const addressprWDVXk = accounts[5]
		const addressgrUDtow = accounts[1]
		const addresscg7Ymbw = accounts[0]
		const addressDQ7Q565 = accounts[2]
		const addresspDKrSR = accounts[2]
		const uint256IZKCdVm = await LIBERAPAYdioLsu0.balanceOf.call(addressBfrVsZr, {from: accounts[4]});
//		const boolpfax7LO = await LIBERAPAYdioLsu0.transferFrom.call(addressgrUDtow, addressprWDVXk, uintU3e3ryW, {from: accounts[4]});
//		const boolKOHqeTy = await LIBERAPAYdioLsu0.unfreezeAccount.call(addresscg7Ymbw, {from: accounts[0]});
//		const booloFVzAMX = await LIBERAPAYdioLsu0.unfreezeAccount.call(addressDQ7Q565, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKB6eSuQ = await LIBERAPAYdioLsu0.upgradeTo.call(addresspDKrSR, {from: accounts[1]});

		assert.equal(uint256IZKCdVm, BigInt("0"))
		await expect(LIBERAPAYdioLsu0.transferFrom.call(addressgrUDtow, addressprWDVXk, uintU3e3ryW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYa4oYoGM = await LIBERAPAY.new({from: accounts[3]});
		const uintdTrNTaH = BigInt("882")
		const addressJMrUjrW = accounts[4]
		const uintBEt0TKM = BigInt("1845")
		const addressGiYu33M = accounts[5]
		const boolS3TQ2t = await LIBERAPAYa4oYoGM.increaseAllowance.call(addressJMrUjrW, uintdTrNTaH, {from: accounts[0]});
//		await LIBERAPAYa4oYoGM.whenNotPaused.call({from: accounts[0]});
//		const boolPsPBQO = await LIBERAPAYa4oYoGM.unlock.call(addressGiYu33M, uintBEt0TKM, {from: accounts[4]});

		assert.equal(boolS3TQ2t, true)
		await expect(LIBERAPAYa4oYoGM.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const uintpin1AgB = BigInt("1001")
		const addressQX6RosS = accounts[0]
		const addressq62pJjp = accounts[3]
//		await LIBERAPAYdioLsu0.showLockState.call(addressQX6RosS, uintpin1AgB, {from: accounts[4]});
//		const booloFVzAMX = await LIBERAPAYdioLsu0.unfreezeAccount.call(addressq62pJjp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYdioLsu0.showLockState.call(addressQX6RosS, uintpin1AgB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const address9OxEGv = accounts[3]
		const addressQzM6Qnq = accounts[4]
		const addressdgcC9rU = accounts[0]
		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(address9OxEGv, {from: accounts[1]});
		const uint256Uhksgl0 = await LIBERAPAYBvN6WL.allowance.call(addressdgcC9rU, addressQzM6Qnq, {from: accounts[2]});
//		await LIBERAPAYBvN6WL.pause.call({from: accounts[1]});
//		const boolNlEFWaZ = await LIBERAPAYBvN6WL.acceptOwnership.call({from: accounts[1]});

		assert.equal(uint256Uhksgl0, BigInt("0"))
		assert.equal(uint256ecWJpAc, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const uintPA0r3h5 = BigInt("163")
		const addresszbI9WYZ = accounts[2]
		const uint0ANgGA = BigInt("772")
		const addressq1IW0mz = accounts[5]
		const addresspRwCbNF = accounts[1]
		const addressITUXKvK = accounts[2]
		const uintUYoZOJq = BigInt("955")
		const addressZ6yoPHW = accounts[2]
//		const boolO4iGOFP = await LIBERAPAYdioLsu0.burnFrom.call(addresszbI9WYZ, uintPA0r3h5, {from: accounts[0]});
//		const boolpfax7LO = await LIBERAPAYdioLsu0.transferFrom.call(addresspRwCbNF, addressq1IW0mz, uint0ANgGA, {from: accounts[4]});
//		const addressKB6eSuQ = await LIBERAPAYdioLsu0.upgradeTo.call(addressITUXKvK, {from: accounts[1]});
//		const booleORYjL = await LIBERAPAYdioLsu0.decreaseAllowance.call(addressZ6yoPHW, uintUYoZOJq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYdioLsu0.burnFrom.call(addresszbI9WYZ, uintPA0r3h5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const addresssIChtx0 = accounts[3]
		const addressFQGsxzQ = accounts[4]
		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addresssIChtx0, {from: accounts[1]});
		const uint256V1CB43D = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressFQGsxzQ, {from: accounts[0]});
//		const boolNlEFWaZ = await LIBERAPAYBvN6WL.acceptOwnership.call({from: accounts[1]});

		assert.equal(uint256V1CB43D, BigInt("0"))
		assert.equal(uint256ecWJpAc, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.acceptOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const uintkS9Qjd = BigInt("1010")
		const addressstVQA2h = accounts[0]
		const uintFSUECeB = BigInt("296")
		const uintSePalHr = BigInt("1829")
//		await LIBERAPAYdioLsu0.showLockState.call(addressstVQA2h, uintkS9Qjd, {from: accounts[4]});
//		const boolH3251AS = await LIBERAPAYdioLsu0.burn.call(uintFSUECeB, {from: accounts[0]});
//		await LIBERAPAYdioLsu0.onlyOwner.call({from: accounts[2]});
//		const boolRUxeaWC = await LIBERAPAYdioLsu0.acceptOwnership.call({from: accounts[3]});
//		const boolkSGPk6H = await LIBERAPAYdioLsu0.burn.call(uintSePalHr, {from: accounts[3]});

		await expect(LIBERAPAYdioLsu0.showLockState.call(addressstVQA2h, uintkS9Qjd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const uintobMwcpC = BigInt("474")
		const addressqVeYvJM = accounts[5]
		const addressKPUr3Xj = accounts[4]
		const addressWvT8vh7 = accounts[4]
		const uintRlB6mWd = BigInt("510")
		const addressUZAfCe = accounts[5]
		const addressrB7lFxC = accounts[1]
		const addressoa0pkf6 = accounts[3]
		const addressYQ3C9ZH = accounts[2]
//		const boolFs2F2FK = await LIBERAPAYdioLsu0.decreaseAllowance.call(addressqVeYvJM, uintobMwcpC, {from: accounts[2]});
//		const boolezZjL3I = await LIBERAPAYdioLsu0.unfreezeAccount.call(addressKPUr3Xj, {from: accounts[2]});
//		const uint256IZKCdVm = await LIBERAPAYdioLsu0.balanceOf.call(addressWvT8vh7, {from: accounts[4]});
//		const boolpfax7LO = await LIBERAPAYdioLsu0.transferFrom.call(addressrB7lFxC, addressUZAfCe, uintRlB6mWd, {from: accounts[4]});
//		const boolM8xzl3k = await LIBERAPAYdioLsu0.acceptOwnership.call({from: accounts[4]});
//		const booloFVzAMX = await LIBERAPAYdioLsu0.unfreezeAccount.call(addressoa0pkf6, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKB6eSuQ = await LIBERAPAYdioLsu0.upgradeTo.call(addressYQ3C9ZH, {from: accounts[1]});

		await expect(LIBERAPAYdioLsu0.decreaseAllowance.call(addressqVeYvJM, uintobMwcpC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const addressTYUgHvG = accounts[5]
		const uintRnjcwPZ = BigInt("1174")
		const addressk8ybpr1 = accounts[5]
		const addressk4DeX5p = accounts[2]
		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addressTYUgHvG, {from: accounts[1]});
//		await LIBERAPAYBvN6WL.f.call({from: accounts[1]});
//		await LIBERAPAYBvN6WL.showLockState.call(addressk8ybpr1, uintRnjcwPZ, {from: accounts[2]});
//		const uint256hVgdzSY = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressk4DeX5p, {from: accounts[2]});

		assert.equal(uint256ecWJpAc, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const uintIHXNcKF = BigInt("987")
		const addresssudqX82 = accounts[2]
		const addressPXUVeRU = accounts[1]
		const uintvKiKArJ = BigInt("783")
		const addressSvwtNEX = accounts[5]
		const addressqjKPbYC = accounts[3]
		const addressTmBPzlG = accounts[5]
//		const boolTo6j6AP = await LIBERAPAYBvN6WL.transferFrom.call(addressPXUVeRU, addresssudqX82, uintIHXNcKF, {from: accounts[4]});
//		const booltwbPk2r = await LIBERAPAYBvN6WL.burnFrom.call(addressSvwtNEX, uintvKiKArJ, {from: accounts[5]});
//		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addressqjKPbYC, {from: accounts[1]});
//		const uint256V1CB43D = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressTmBPzlG, {from: accounts[0]});
//		const boolNlEFWaZ = await LIBERAPAYBvN6WL.acceptOwnership.call({from: accounts[1]});

		await expect(LIBERAPAYBvN6WL.transferFrom.call(addressPXUVeRU, addresssudqX82, uintIHXNcKF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYEuIUAF = await LIBERAPAY.new({from: accounts[4]});
		const uintRSiNZrx = BigInt("1141")
		const addressL4aaAz4 = accounts[2]
		const addressQfPrdN = accounts[1]
		const uintcB4xEK6 = BigInt("1336")
		const addressPNSbvBF = accounts[5]
//		const boolQT8wYlb = await LIBERAPAYEuIUAF.transfer.call(addressL4aaAz4, uintRSiNZrx, {from: accounts[1]});
//		const addressZMcJ1pq = await LIBERAPAYEuIUAF.transferOwnership.call(addressQfPrdN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZxhkmai = await LIBERAPAYEuIUAF.burnFrom.call(addressPNSbvBF, uintcB4xEK6, {from: accounts[2]});

		await expect(LIBERAPAYEuIUAF.transfer.call(addressL4aaAz4, uintRSiNZrx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const uintKAyTRK = BigInt("1704")
		const addresszPFfDRT = accounts[3]
		const uintAtaNKM7 = BigInt("1021")
		const addresseiA9NJT = accounts[0]
		const boolfp1EtME = await LIBERAPAYdioLsu0.approve.call(addresszPFfDRT, uintKAyTRK, {from: accounts[4]});
//		await LIBERAPAYdioLsu0.showLockState.call(addresseiA9NJT, uintAtaNKM7, {from: accounts[4]});

		assert.equal(boolfp1EtME, true)
		await expect(LIBERAPAYdioLsu0.showLockState.call(addresseiA9NJT, uintAtaNKM7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const addresslYmqwp7 = accounts[3]
		const addressEkCuUW0 = accounts[5]
		const addressuNgYEK = accounts[0]
		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addresslYmqwp7, {from: accounts[1]});
		const uint256Pgc17LY = await LIBERAPAYBvN6WL.totalSupply.call({from: accounts[2]});
		const uint256V1CB43D = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressEkCuUW0, {from: accounts[0]});
//		const booloJwwZfl = await LIBERAPAYBvN6WL.unfreezeAccount.call(addressuNgYEK, {from: accounts[2]});
//		const boolNlEFWaZ = await LIBERAPAYBvN6WL.acceptOwnership.call({from: accounts[1]});

		assert.equal(uint256Pgc17LY, BigInt("3000000000000000000000000000"))
		assert.equal(uint256V1CB43D, BigInt("0"))
		assert.equal(uint256ecWJpAc, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.unfreezeAccount.call(addressuNgYEK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHIqrQGS = await LIBERAPAY.new({from: accounts[4]});
		const uintekOVat1 = BigInt("2023")
		const addressidHrW9C = accounts[0]
		const addressm549D7R = accounts[0]
//		const boolhVxqGQ = await LIBERAPAYHIqrQGS.unlock.call(addressidHrW9C, uintekOVat1, {from: accounts[4]});
//		await LIBERAPAYHIqrQGS.unpause.call({from: accounts[0]});
//		const uint256l0v4Kqj = await LIBERAPAYHIqrQGS.getNowTime.call({from: accounts[2]});
//		const addressK0nZGN4 = await LIBERAPAYHIqrQGS.upgradeTo.call(addressm549D7R, {from: accounts[1]});

		await expect(LIBERAPAYHIqrQGS.unlock.call(addressidHrW9C, uintekOVat1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const addressFCeyZd = accounts[4]
		const uintPdd04my = BigInt("733")
		const uintPkerc3 = BigInt("312")
		const addresszgmYtVD = accounts[2]
		const addressp9rOD9a = accounts[4]
		const uint256V1CB43D = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressFCeyZd, {from: accounts[0]});
//		const boolJofOaAw = await LIBERAPAYBvN6WL.lock.call(addresszgmYtVD, uintPkerc3, uintPdd04my, {from: accounts[1]});
//		const uint256Q7Kq1VC = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressp9rOD9a, {from: accounts[5]});
//		const boolNlEFWaZ = await LIBERAPAYBvN6WL.acceptOwnership.call({from: accounts[1]});

		assert.equal(uint256V1CB43D, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.lock.call(addresszgmYtVD, uintPkerc3, uintPdd04my, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIoXyo0v = await LIBERAPAY.new({from: accounts[1]});
		const uintzC5tdV1 = BigInt("1786")
		const addressl2w6VIV = accounts[2]
		const addressPCy9kbi = accounts[3]
		const boolsKyZNBp = await LIBERAPAYIoXyo0v.transfer.call(addressl2w6VIV, uintzC5tdV1, {from: accounts[1]});
		const boolEiLtW7T = await LIBERAPAYIoXyo0v.freezeAccount.call(addressPCy9kbi, {from: accounts[1]});

		assert.equal(boolEiLtW7T, true)
		assert.equal(boolsKyZNBp, true)
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAGjRiJ2 = await LIBERAPAY.new({from: accounts[3]});
		const addresstQmYYl6 = accounts[4]
		const uint256swfjh5h = await LIBERAPAYAGjRiJ2.getNowTime.call({from: accounts[4]});
		const address5mG8HK = await LIBERAPAYAGjRiJ2.transferOwnership.call(addresstQmYYl6, {from: accounts[3]});
//		await LIBERAPAYAGjRiJ2.unpause.call({from: accounts[0]});

		assert.equal(uint256swfjh5h, BigInt("1630231020"))
		await expect(LIBERAPAYAGjRiJ2.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const addressE5RxZ6n = accounts[5]
		const addressI1de8K0 = accounts[2]
		const uintZtzU4zB = BigInt("414")
		const addresspBMqJWs = accounts[4]
		const uintaRbYh6 = BigInt("1174")
		const addressr08AzU8 = accounts[5]
		const addressH3l9NE0 = accounts[2]
		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addressE5RxZ6n, {from: accounts[1]});
		const addressIZ3xhM6 = await LIBERAPAYBvN6WL.upgradeTo.call(addressI1de8K0, {from: accounts[1]});
//		const boolyrpIXcM = await LIBERAPAYBvN6WL.decreaseAllowance.call(addresspBMqJWs, uintZtzU4zB, {from: accounts[5]});
//		await LIBERAPAYBvN6WL.showLockState.call(addressr08AzU8, uintaRbYh6, {from: accounts[2]});
//		const uint256hVgdzSY = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressH3l9NE0, {from: accounts[2]});

		assert.equal(uint256ecWJpAc, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.decreaseAllowance.call(addresspBMqJWs, uintZtzU4zB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdioLsu0 = await LIBERAPAY.new({from: accounts[0]});
		const uinta7m1IzY = BigInt("339")
		const addresspSA5fz1 = accounts[2]
		const uintcef9ngX = BigInt("510")
		const addresshZ1FFuJ = accounts[5]
		const addresszdyv25z = accounts[2]
		const uints7qR1lI = BigInt("1914")
		const addressDNTmv8y = accounts[1]
		const boolYB5bkvD = await LIBERAPAYdioLsu0.distribute.call(addresspSA5fz1, uinta7m1IzY, {from: accounts[0]});
//		const boolpfax7LO = await LIBERAPAYdioLsu0.transferFrom.call(addresszdyv25z, addresshZ1FFuJ, uintcef9ngX, {from: accounts[4]});
//		const boolClFYIVP = await LIBERAPAYdioLsu0.burnFrom.call(addressDNTmv8y, uints7qR1lI, {from: accounts[3]});

		assert.equal(boolYB5bkvD, true)
		await expect(LIBERAPAYdioLsu0.transferFrom.call(addresszdyv25z, addresshZ1FFuJ, uintcef9ngX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const uintouDt5cd = BigInt("1286")
		const addressQ4yXvui = accounts[5]
		const addressKKI6ZGF = accounts[4]
		const uintyYmSWMF = BigInt("1174")
		const addressB4TLJtT = accounts[5]
		const uintw6jbJDK = BigInt("457")
		const addressITlhoeF = accounts[0]
		const uintu34yfL = BigInt("1177")
		const addressemYoSA = accounts[0]
		const addressMWZ0IkX = accounts[3]
//		const boolHEDxysl = await LIBERAPAYBvN6WL.mint.call(addressQ4yXvui, uintouDt5cd, {from: accounts[1]});
//		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addressKKI6ZGF, {from: accounts[1]});
//		await LIBERAPAYBvN6WL.showLockState.call(addressB4TLJtT, uintyYmSWMF, {from: accounts[2]});
//		const boolaY8EiDy = await LIBERAPAYBvN6WL.transfer.call(addressITlhoeF, uintw6jbJDK, {from: accounts[1]});
//		const boollBsfZp1 = await LIBERAPAYBvN6WL.unlock.call(addressemYoSA, uintu34yfL, {from: accounts[1]});
//		const uint256hVgdzSY = await LIBERAPAYBvN6WL.currentBalanceOf.call(addressMWZ0IkX, {from: accounts[2]});

		await expect(LIBERAPAYBvN6WL.mint.call(addressQ4yXvui, uintouDt5cd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBvN6WL = await LIBERAPAY.new({from: accounts[1]});
		const addressAsMu1xu = accounts[3]
		const addressjDmKNCO = accounts[1]
		const addresstahQAGS = accounts[1]
		const uintmIHGec1 = BigInt("769")
		const addressar34spN = accounts[3]
		const addresst353AEK = accounts[3]
		const addressCXQJ1JV = "0x0000000000000000000000000000000000000001"
		const uint256ecWJpAc = await LIBERAPAYBvN6WL.balanceOf.call(addressAsMu1xu, {from: accounts[1]});
//		const bool32xtvt = await LIBERAPAYBvN6WL.unfreezeAccount.call(addressjDmKNCO, {from: accounts[1]});
//		const addressC0iuA4N = await LIBERAPAYBvN6WL.upgradeTo.call(addresstahQAGS, {from: accounts[0]});
//		const boolezzqh31 = await LIBERAPAYBvN6WL.unlock.call(addressar34spN, uintmIHGec1, {from: accounts[1]});
//		const uint256DoscTf = await LIBERAPAYBvN6WL.allowance.call(addressCXQJ1JV, addresst353AEK, {from: accounts[3]});

		assert.equal(uint256ecWJpAc, BigInt("0"))
		await expect(LIBERAPAYBvN6WL.unfreezeAccount.call(addressjDmKNCO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})