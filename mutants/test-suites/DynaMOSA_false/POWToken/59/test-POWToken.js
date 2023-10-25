const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenu69GpFU = await POWToken.new({from: accounts[2]});
		const uintpmB1IRl = BigInt("504")
//		const uint256fwWZvHh = await POWTokenu69GpFU.setStartMiningTime.call(uintpmB1IRl, {from: accounts[0]});
//		await POWTokenu69GpFU.onlyParamSetter.call({from: accounts[2]});
//		await POWTokenu69GpFU.unpause.call({from: accounts[3]});

		await expect(POWTokenu69GpFU.setStartMiningTime.call(uintpmB1IRl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenid7fz5C = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint1xLlGL = BigInt("195")
		const uintuZo0TLN = BigInt("1827")
		const uintvubZcs6 = BigInt("292")
		const addresseh5vgIJ = accounts[2]
		const uint256nLIt9T5 = await POWTokenid7fz5C.notifyRewardAmount.call(uint1xLlGL, {from: accounts[4]});
		const uint256RxbJQd = await POWTokenid7fz5C.setStartMiningTime.call(uintuZo0TLN, {from: accounts[0]});
		await POWTokenid7fz5C.whenNotPaused.call({from: accounts[4]});
		const addressdmf1eI = await POWTokenid7fz5C.inCaseTokensGetStuck.call(addresseh5vgIJ, uintvubZcs6, {from: accounts[2]});
	});

	it('test for POWToken', async () => {
		const POWTokenJsdcE1X = await POWToken.new({from: accounts[0]});
		const uintPtFNaFz = BigInt("652")
		const addressrUBHI0m = "0x0000000000000000000000000000000000000001"
		const uintgtHqDEK = BigInt("1543")
		const addressf5tbdd4 = accounts[4]
		const addressDLRKmQP = accounts[5]
		const uintxKGFYe8 = BigInt("1195")
		const addressc8jbKU = accounts[3]
		const bools9PYRyd = await POWTokenJsdcE1X.paused.call({from: accounts[1]});
//		const boolpqD8Cb = await POWTokenJsdcE1X.transfer.call(addressrUBHI0m, uintPtFNaFz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIX4hfgA = await POWTokenJsdcE1X.transferFrom.call(addressDLRKmQP, addressf5tbdd4, uintgtHqDEK, {from: accounts[4]});
//		const addressRpO8gDL = await POWTokenJsdcE1X.claimIncome.call(addressc8jbKU, uintxKGFYe8, {from: accounts[1]});

		assert.equal(bools9PYRyd, false)
		await expect(POWTokenJsdcE1X.transfer.call(addressrUBHI0m, uintPtFNaFz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintga2G0GY = BigInt("637")
		const uintRAe7cKh = BigInt("831")
		const addressBwmZGy1 = accounts[0]
		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const uint256rwb3rN = await POWTokeneiY1ch6.setWorkingHashRate.call(uintga2G0GY, {from: accounts[1]});
//		const address9Y0ND1 = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addressBwmZGy1, uintRAe7cKh, {from: accounts[3]});
//		const uint256OGbpAvA = await POWTokeneiY1ch6.remainingAmount.call({from: accounts[3]});

		assert.equal(uint256HaT8DTc, BigInt("0"))
		await expect(POWTokeneiY1ch6.setWorkingHashRate.call(uintga2G0GY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenr756HWw = await POWToken.new({from: accounts[4]});
		const uintzcWe8t = BigInt("1512")
		const addressQ2gIyZ = accounts[2]
		const uintX0cW8dz = BigInt("594")
		const uintR70CnWP = BigInt("576")
		const addresseBxEm9G = accounts[5]
		const boolUlrDCos = await POWTokenr756HWw.approve.call(addressQ2gIyZ, uintzcWe8t, {from: accounts[4]});
//		await POWTokenr756HWw.unpause.call({from: accounts[1]});
//		const uint256bAPx1y = await POWTokenr756HWw.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
//		const uint256WmG5ptS = await POWTokenr756HWw.setStartMiningTime.call(uintX0cW8dz, {from: accounts[1]});
//		const addressQqbdzX = await POWTokenr756HWw.inCaseTokensGetStuck.call(addresseBxEm9G, uintR70CnWP, {from: accounts[0]});

		assert.equal(boolUlrDCos, true)
		await expect(POWTokenr756HWw.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlfN9w6w = await POWToken.new({from: accounts[2]});
		const uintab24HXJ = BigInt("1769")
		const uintxNV21aI = BigInt("821")
		const uintMpsHPnn = BigInt("517")
		const uintsuNSo7P = BigInt("42")
		const uintY7Y6vMN = BigInt("245")
		const addressFTNpx6 = accounts[1]
		const addressh6UryFu = accounts[4]
		const addressOi1vkNT = accounts[1]
		const addressBiEFh4I = accounts[2]
		const addressr6oigzQ = "0x0000000000000000000000000000000000000001"
		const address68RU4t = accounts[0]
		const addressA5vIzTO = "0x0000000000000000000000000000000000000001"
		const addressRsWvjmU = accounts[0]
		const stringpYr6NT = "Cw7R2554KajUtFYqWPWnKPNnANaUMwQqPcdRpAlk3cW1qq"
		const strings69mV4o = "5vZvvA4ZKzyqmhG3bMgOF35aSGrpXjr"
		const uintncXY74z = BigInt("1343")
		const addressfnYpZyV = accounts[2]
		const addressuHAaOh3 = "0x0000000000000000000000000000000000000001"
		const uintxVr6chU = BigInt("746")
		const addressm7exEVx = "0x0000000000000000000000000000000000000001"
		const addressZwTo3tx = accounts[0]
//		const stringtwSD9N6 = await POWTokenlfN9w6w.initialize.call(strings69mV4o, stringpYr6NT, addressRsWvjmU, addressA5vIzTO, address68RU4t, addressr6oigzQ, addressBiEFh4I, addressOi1vkNT, addressh6UryFu, addressFTNpx6, uintY7Y6vMN, uintsuNSo7P, uintMpsHPnn, uintxNV21aI, uintab24HXJ, {from: accounts[5]});
//		await POWTokenlfN9w6w.whenNotPaused.call({from: accounts[5]});
//		const addresssm0Uv69 = await POWTokenlfN9w6w.claimReward.call(addressfnYpZyV, uintncXY74z, {from: accounts[0]});
//		const addressTnYvd8 = await POWTokenlfN9w6w.transferOwnership.call(addressuHAaOh3, {from: accounts[4]});
//		const boolYDBFXFu = await POWTokenlfN9w6w.transferFrom.call(addressZwTo3tx, addressm7exEVx, uintxVr6chU, {from: accounts[2]});
//		await POWTokenlfN9w6w.pause.call({from: accounts[5]});

		await expect(POWTokenlfN9w6w.initialize.call(strings69mV4o, stringpYr6NT, addressRsWvjmU, addressA5vIzTO, address68RU4t, addressr6oigzQ, addressBiEFh4I, addressOi1vkNT, addressh6UryFu, addressFTNpx6, uintY7Y6vMN, uintsuNSo7P, uintMpsHPnn, uintxNV21aI, uintab24HXJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQVSKpsV = await POWToken.new({from: accounts[3]});
		const byteBvHvXq8 = "0x051b09121514191d100f1c1303150c0b0e10030d0b15021b0e0c0d1c01090c02"
		const bytezniuJ5T = "0x0402030504041b151d111a02091215001f011217080119151f130e0a1d111112"
		const uintdNkREm9 = BigInt("10")
		const uintvvsMfI = BigInt("589")
		const uintKUww6ZU = BigInt("1249")
		const addressjdGjjAZ = accounts[2]
		const addressz7Mtglc = accounts[2]
		const uintqXQR0U1 = BigInt("469")
		const address1vDoh6 = "0x0000000000000000000000000000000000000001"
		const addresseCHzvrr = accounts[3]
//		const addresshoFcpWG = await POWTokenQVSKpsV.permit.call(addressz7Mtglc, addressjdGjjAZ, uintKUww6ZU, uintvvsMfI, uintdNkREm9, bytezniuJ5T, byteBvHvXq8, {from: accounts[4]});
//		await POWTokenQVSKpsV.onlyOwner.call({from: accounts[4]});
//		const boolkmS1cWy = await POWTokenQVSKpsV.approve.call(address1vDoh6, uintqXQR0U1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Tge5x0Q = await POWTokenQVSKpsV.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
//		const addresskarRgQz = await POWTokenQVSKpsV.setParamSetter.call(addresseCHzvrr, {from: accounts[1]});
//		const uint256nyvnpGc = await POWTokenQVSKpsV.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenQVSKpsV.permit.call(addressz7Mtglc, addressjdGjjAZ, uintKUww6ZU, uintvvsMfI, uintdNkREm9, bytezniuJ5T, byteBvHvXq8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenr756HWw = await POWToken.new({from: accounts[4]});
		const uintIg2hThd = BigInt("1512")
		const addressqkFHKaC = accounts[2]
		const uintlq23Ghh = BigInt("594")
		const uinttE1mtBe = BigInt("576")
		const addresse8FKLM1 = accounts[5]
//		await POWTokenr756HWw.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolUlrDCos = await POWTokenr756HWw.approve.call(addressqkFHKaC, uintIg2hThd, {from: accounts[4]});
//		await POWTokenr756HWw.unpause.call({from: accounts[1]});
//		const uint256bAPx1y = await POWTokenr756HWw.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
//		const uint256Qv4XFjA = await POWTokenr756HWw.lpStakingRewardRate.call({from: accounts[2]});
//		const uint256WmG5ptS = await POWTokenr756HWw.setStartMiningTime.call(uintlq23Ghh, {from: accounts[1]});
//		const addressQqbdzX = await POWTokenr756HWw.inCaseTokensGetStuck.call(addresse8FKLM1, uinttE1mtBe, {from: accounts[0]});

		await expect(POWTokenr756HWw.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintIsZbXl7 = BigInt("904")
		const addresskZDgXWJ = accounts[2]
		const addressiy8IJcx = accounts[2]
		const uintyirDcyC = BigInt("637")
		const uintglYPtli = BigInt("831")
		const addressMUTtlEI = accounts[0]
//		const boolJQ3VQRn = await POWTokeneiY1ch6.transferFrom.call(addressiy8IJcx, addresskZDgXWJ, uintIsZbXl7, {from: accounts[3]});
//		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const uint256rwb3rN = await POWTokeneiY1ch6.setWorkingHashRate.call(uintyirDcyC, {from: accounts[1]});
//		const address9Y0ND1 = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addressMUTtlEI, uintglYPtli, {from: accounts[3]});
//		await POWTokeneiY1ch6.pause.call({from: accounts[3]});
//		const uint256OGbpAvA = await POWTokeneiY1ch6.remainingAmount.call({from: accounts[3]});

		await expect(POWTokeneiY1ch6.transferFrom.call(addressiy8IJcx, addresskZDgXWJ, uintIsZbXl7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintRgYR68Y = BigInt("158")
		const addressPKI1BAT = accounts[0]
		const uintVxaxHr5 = BigInt("1676")
		const addressmQjHetG = accounts[1]
		const uinthvr0tIi = BigInt("422")
		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const addresspPI0NQ3 = await POWTokeneiY1ch6.claimIncome.call(addressPKI1BAT, uintRgYR68Y, {from: accounts[2]});
//		const address9Y0ND1 = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addressmQjHetG, uintVxaxHr5, {from: accounts[3]});
//		const uint256sSajOK = await POWTokeneiY1ch6.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
//		const uint256U8CLem = await POWTokeneiY1ch6.notifyRewardAmount.call(uinthvr0tIi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OGbpAvA = await POWTokeneiY1ch6.remainingAmount.call({from: accounts[3]});

		assert.equal(uint256HaT8DTc, BigInt("0"))
		await expect(POWTokeneiY1ch6.claimIncome.call(addressPKI1BAT, uintRgYR68Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintwk04fCY = BigInt("831")
		const addressj7c8taI = accounts[2]
		const byteOVFiB9L = "0x01160a0a131d0103011a0e0b040d120b0d0a1502061015091509051714100e03"
		const bytexNL8b6C = "0x1a0717061a190e080f12071a120d1a0e1809140020011d130b171004061b1201"
		const uintveLRDD = BigInt("255")
		const uintUcKMiZQ = BigInt("1193")
		const uintexuGmZu = BigInt("1168")
		const addressD6QtrCW = accounts[4]
		const addressTuj9PP = accounts[3]
		const uintbQbWQI = BigInt("40")
		const addresstSaO9cQ = accounts[1]
//		const uint256zOBf1rk = await POWTokeneiY1ch6.getHistoryWorkingRate.call({from: accounts[3]});
//		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const address9Y0ND1 = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addressj7c8taI, uintwk04fCY, {from: accounts[3]});
//		const addressiBUspu4 = await POWTokeneiY1ch6.permit.call(addressTuj9PP, addressD6QtrCW, uintexuGmZu, uintUcKMiZQ, uintveLRDD, bytexNL8b6C, byteOVFiB9L, {from: accounts[3]});
//		const uint256vZo8HwB = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[0]});
//		const addressJ7GtLvi = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addresstSaO9cQ, uintbQbWQI, {from: accounts[2]});
//		const uint256OGbpAvA = await POWTokeneiY1ch6.remainingAmount.call({from: accounts[3]});

		await expect(POWTokeneiY1ch6.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintaKPd3HB = BigInt("229")
		const uintCnrfUk = BigInt("1313")
		const uintXXBEcQc = BigInt("829")
		const addressZGm00tn = accounts[0]
		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const uint256wd8WLyw = await POWTokeneiY1ch6.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
//		const uint256MrSsJgK = await POWTokeneiY1ch6.addHashRate.call(uintaKPd3HB, {from: accounts[0]});
//		const uint256GJ92HGp = await POWTokeneiY1ch6.setDepreciationNumerator.call(uintCnrfUk, {from: accounts[2]});
//		const address9Y0ND1 = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addressZGm00tn, uintXXBEcQc, {from: accounts[3]});
//		const uint256OGbpAvA = await POWTokeneiY1ch6.remainingAmount.call({from: accounts[3]});

		assert.equal(uint256HaT8DTc, BigInt("0"))
		await expect(POWTokeneiY1ch6.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
		const uint256OGbpAvA = await POWTokeneiY1ch6.remainingAmount.call({from: accounts[3]});

		assert.equal(uint256HaT8DTc, BigInt("0"))
		assert.equal(uint256OGbpAvA, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintGaxBV1L = BigInt("831")
		const addressPhqMexu = accounts[3]
		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		await POWTokeneiY1ch6.updateIncomeRate.call({from: accounts[2]});
//		const address9Y0ND1 = await POWTokeneiY1ch6.inCaseTokensGetStuck.call(addressPhqMexu, uintGaxBV1L, {from: accounts[3]});

		assert.equal(uint256HaT8DTc, BigInt("0"))
		await expect(POWTokeneiY1ch6.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintjEcPW9E = BigInt("31")
		const uint256nkjvX7t = await POWTokeneiY1ch6.lpStakingRewardRate.call({from: accounts[5]});
		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const uint256b5XPBd7 = await POWTokeneiY1ch6.setDepreciationNumerator.call(uintjEcPW9E, {from: accounts[3]});

		assert.equal(uint256HaT8DTc, BigInt("0"))
		assert.equal(uint256nkjvX7t, BigInt("0"))
		await expect(POWTokeneiY1ch6.setDepreciationNumerator.call(uintjEcPW9E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintwJVHAx4 = BigInt("496")
		const addresswTOMqO6 = accounts[1]
		const uintEYkYK8 = BigInt("1307")
		const uintEfnIGiR = BigInt("244")
		const uintQtiOsck = BigInt("358")
		const uintjV19YqC = BigInt("1360")
		const uintDVy8ZZY = BigInt("1466")
		const addressq5u1Gb = accounts[3]
		const addressJJoJSRI = accounts[3]
		const addressv6nxfsT = accounts[2]
		const addressixPhBPv = accounts[2]
		const addressoPC0cu = accounts[1]
		const addressDzfqGmt = accounts[0]
		const addressI1oOV8f = accounts[4]
		const addressVMkJfoP = "0x0000000000000000000000000000000000000001"
		const stringmQWsBt = "g1w0xjkqWBEeW71nmiSt6CXOTcI74UoBRTc886hAha2cb3TZ79ws3UK26Jfw3oAeLvbQeaTTrXr1oUV6W3RJK"
		const stringYVvhU3y = "CrMsXuOToQIlU29QQjwAUwgj78kCGTYqhSQqPAkKMfPWt8QvgJoPFQADii293VfHWve9"
//		const addressHEni7m7 = await POWTokeneiY1ch6.mint.call(addresswTOMqO6, uintwJVHAx4, {from: accounts[5]});
//		const stringa6UhAj = await POWTokeneiY1ch6.initialize.call(stringYVvhU3y, stringmQWsBt, addressVMkJfoP, addressI1oOV8f, addressDzfqGmt, addressoPC0cu, addressixPhBPv, addressv6nxfsT, addressJJoJSRI, addressq5u1Gb, uintDVy8ZZY, uintjV19YqC, uintQtiOsck, uintEfnIGiR, uintEYkYK8, {from: accounts[4]});
//		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokeneiY1ch6.mint.call(addresswTOMqO6, uintwJVHAx4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeneiY1ch6 = await POWToken.new({from: accounts[0]});
		const uintRM2m6jm = BigInt("1739")
		const addressdRTHsoM = "0x0000000000000000000000000000000000000001"
		const uintbkjNpru = BigInt("557")
		const addressbeLtcoF = "0x0000000000000000000000000000000000000001"
//		const addressqFUBaDV = await POWTokeneiY1ch6.claimReward.call(addressdRTHsoM, uintRM2m6jm, {from: accounts[4]});
//		const boolUDFrO0U = await POWTokeneiY1ch6.paused.call({from: accounts[4]});
//		const uint256HaT8DTc = await POWTokeneiY1ch6.stakingRewardRate.call({from: accounts[2]});
//		const boolGNdAieJ = await POWTokeneiY1ch6.approve.call(addressbeLtcoF, uintbkjNpru, {from: accounts[5]});

		await expect(POWTokeneiY1ch6.claimReward.call(addressdRTHsoM, uintRM2m6jm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})