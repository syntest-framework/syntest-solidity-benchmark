const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressvnhfgd4 = accounts[3]
		const addressRHFdMrz = accounts[1]
		const StakingDextokenKhqm8Eo = await StakingDextoken.new(addressvnhfgd4, addressRHFdMrz, {from: accounts[4]});
		const addressCjOGRyY = accounts[2]
		const addressqZQmGpd = accounts[1]
		const uintIW4x8rh = await StakingDextokenKhqm8Eo.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintnk3KjIF = await StakingDextokenKhqm8Eo.getWithdrawalOf.call(addressCjOGRyY, {from: accounts[2]});
		const uintgzNoNMS = await StakingDextokenKhqm8Eo.remainingRewards.call({from: accounts[5]});
//		const addressVh9dZAN = await StakingDextokenKhqm8Eo.notFrozen.call(addressqZQmGpd, {from: accounts[3]});
//		const uintevzNOX = await StakingDextokenKhqm8Eo.remainingRewards.call({from: accounts[3]});

		assert.equal(uintIW4x8rh, BigInt("0"))
		assert.equal(uintgzNoNMS, BigInt("0"))
		assert.equal(uintnk3KjIF, BigInt("0"))
		await expect(StakingDextokenKhqm8Eo.notFrozen.call(addressqZQmGpd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressO0viFY5 = accounts[5]
		const addressYSd3DKZ = "0x0000000000000000000000000000000000000001"
		const StakingDextokenjWNFbkc = await StakingDextoken.new(addressO0viFY5, addressYSd3DKZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressI4MGKn = accounts[0]
		const addressyXMYAwi = accounts[3]
		const addressCHI6eL = accounts[2]
		const uintqKWSgr4 = await StakingDextokenjWNFbkc.remainingRewards.call({from: accounts[4]});
		const addressQpSvSDc = await StakingDextokenjWNFbkc.updateReward.call(addressI4MGKn, {from: accounts[0]});
		const uintSPhppmv = await StakingDextokenjWNFbkc.totalRewards.call({from: accounts[1]});
		const addressxgnBYd4 = await StakingDextokenjWNFbkc.updateReward.call(addressyXMYAwi, {from: accounts[3]});
		const addressrsBRf6m = await StakingDextokenjWNFbkc.setBeneficial.call(addressCHI6eL, {from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressEbFUKi = accounts[4]
		const addressInbSY2J = accounts[1]
		const StakingDextokenRC3HHdx = await StakingDextoken.new(addressEbFUKi, addressInbSY2J, {from: accounts[1]});
		const addresstT1v5M7 = accounts[1]
		const addressFvCVHy = accounts[2]
		const uintEW1ONs9 = BigInt("984")
		const uintRJlXIeP = await StakingDextokenRC3HHdx.getWithdrawalOf.call(addresstT1v5M7, {from: accounts[4]});
//		const boolfeHDUq6 = await StakingDextokenRC3HHdx.freezeAccount.call(addressFvCVHy, {from: accounts[5]});
//		const uintBcFvA6d = await StakingDextokenRC3HHdx.withdraw.call(uintEW1ONs9, {from: accounts[3]});
//		const uinty8Yxcup = await StakingDextokenRC3HHdx.remainingRewards.call({from: accounts[2]});
//		const uintd4XnKv = await StakingDextokenRC3HHdx.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintRJlXIeP, BigInt("0"))
		await expect(StakingDextokenRC3HHdx.freezeAccount.call(addressFvCVHy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRGvdJSt = accounts[0]
		const addressBt5UNOt = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressRGvdJSt, addressBt5UNOt, {from: accounts[0]});
		const addressJBqLLKh = accounts[4]
		const uintECMto36 = BigInt("1283")
		const uintWcHTD0E = BigInt("1220")
		const uinthjz9gBP = BigInt("1347")
		const uintfJWGJaF = BigInt("455")
		const uintqaMx7Lt = await StakingDextokenWR8Q4ER.rewardOf.call(addressJBqLLKh, {from: accounts[4]});
		const uintqhHSr0c = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[2]});
//		const uintNXPVFWU = await StakingDextokenWR8Q4ER.setRewardRound.call(uintfJWGJaF, uinthjz9gBP, uintWcHTD0E, uintECMto36, {from: accounts[2]});

		assert.equal(uintqaMx7Lt, BigInt("0"))
		assert.equal(uintqhHSr0c, BigInt("0"))
		await expect(StakingDextokenWR8Q4ER.setRewardRound.call(uintfJWGJaF, uinthjz9gBP, uintWcHTD0E, uintECMto36, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbfAtAIG = accounts[2]
		const addressNJONmqK = accounts[4]
		const StakingDextokenpDV8M6k = await StakingDextoken.new(addressbfAtAIG, addressNJONmqK, {from: accounts[4]});
		const uintlWBmIE1 = BigInt("1706")
		const addresseYdtfXK = accounts[4]
		const addressgIqtXjK = accounts[3]
//		const address18E6C0 = await StakingDextokenpDV8M6k.capture.call(addresseYdtfXK, uintlWBmIE1, {from: accounts[4]});
//		await StakingDextokenpDV8M6k.notifyRewards.call({from: accounts[1]});
//		const uintRT36F2U = await StakingDextokenpDV8M6k.getWithdrawalOf.call(addressgIqtXjK, {from: accounts[2]});

		await expect(StakingDextokenpDV8M6k.capture.call(addresseYdtfXK, uintlWBmIE1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFVfS3J3 = accounts[1]
		const addresscoZUVEX = accounts[3]
		const StakingDextokenQpj8Ctl = await StakingDextoken.new(addressFVfS3J3, addresscoZUVEX, {from: accounts[2]});
		const uintytH5ol0 = await StakingDextokenQpj8Ctl.getEndTimestamp.call({from: accounts[4]});
		const uintty5W66 = await StakingDextokenQpj8Ctl.getStartTimestamp.call({from: accounts[5]});

		assert.equal(uintty5W66, BigInt("0"))
		assert.equal(uintytH5ol0, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressZLswSQv = accounts[3]
		const addressVaGMoKc = accounts[4]
		const StakingDextokenPugPeBr = await StakingDextoken.new(addressZLswSQv, addressVaGMoKc, {from: accounts[0]});
		const addressa3Ie4SH = accounts[2]
		const uintNPxugGA = BigInt("299")
		const uintE5aW1R = BigInt("1001")
		const uintIcg4ooO = BigInt("537")
		const uintSh8lu0N = BigInt("71")
		const addressT8ZRHhN = accounts[1]
		const address0Yn8ta = accounts[3]
		const uintHxnse0p = await StakingDextokenPugPeBr.rewardPerToken.call({from: accounts[0]});
		const uintJwrVmU = await StakingDextokenPugPeBr.stakeOf.call(addressa3Ie4SH, {from: accounts[1]});
//		const uintYEC35P = await StakingDextokenPugPeBr.setRewardRound.call(uintSh8lu0N, uintIcg4ooO, uintE5aW1R, uintNPxugGA, {from: accounts[2]});
//		const uintoFTkL2F = await StakingDextokenPugPeBr.stakeOf.call(addressT8ZRHhN, {from: accounts[3]});
//		const addressOIh8Xye = await StakingDextokenPugPeBr.setBeneficial.call(address0Yn8ta, {from: accounts[2]});

		assert.equal(uintHxnse0p, BigInt("0"))
		assert.equal(uintJwrVmU, BigInt("0"))
		await expect(StakingDextokenPugPeBr.setRewardRound.call(uintSh8lu0N, uintIcg4ooO, uintE5aW1R, uintNPxugGA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSbpXLdm = accounts[2]
		const addressbCtyt88 = accounts[4]
		const StakingDextokenpDV8M6k = await StakingDextoken.new(addressSbpXLdm, addressbCtyt88, {from: accounts[4]});
		const uintj1t28T = BigInt("1706")
		const addressb4IxzP9 = accounts[5]
		const addresstUeHbmi = accounts[2]
		const addressZIhdRLh = accounts[3]
//		const address18E6C0 = await StakingDextokenpDV8M6k.capture.call(addressb4IxzP9, uintj1t28T, {from: accounts[4]});
//		const uintwYPa0hj = await StakingDextokenpDV8M6k.balanceOf.call(addresstUeHbmi, {from: accounts[1]});
//		const uintBpoCHH8 = await StakingDextokenpDV8M6k.totalRewards.call({from: accounts[1]});
//		await StakingDextokenpDV8M6k.notifyRewards.call({from: accounts[1]});
//		const uintRT36F2U = await StakingDextokenpDV8M6k.getWithdrawalOf.call(addressZIhdRLh, {from: accounts[2]});

		await expect(StakingDextokenpDV8M6k.capture.call(addressb4IxzP9, uintj1t28T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfJ7zi3n = accounts[0]
		const addressSRGyk69 = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressfJ7zi3n, addressSRGyk69, {from: accounts[0]});
		const addresssop38J = accounts[5]
		const addressLYjKYfC = accounts[0]
		const addresstmfmeGm = accounts[2]
		const uintuQ3d1Aq = BigInt("1283")
		const uintE8m85yu = BigInt("1220")
		const uintiSc476P = BigInt("1347")
		const uinthN7F4n = BigInt("455")
		const uintqaMx7Lt = await StakingDextokenWR8Q4ER.rewardOf.call(addresssop38J, {from: accounts[4]});
		const uintX9TAIB = await StakingDextokenWR8Q4ER.rewardOf.call(addressLYjKYfC, {from: accounts[0]});
		const uinth5uS5p = await StakingDextokenWR8Q4ER.getClaimOf.call(addresstmfmeGm, {from: accounts[4]});
		const uintqhHSr0c = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[2]});
		const uintaXu0PjK = await StakingDextokenWR8Q4ER.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uintNXPVFWU = await StakingDextokenWR8Q4ER.setRewardRound.call(uinthN7F4n, uintiSc476P, uintE8m85yu, uintuQ3d1Aq, {from: accounts[2]});

		assert.equal(uintX9TAIB, BigInt("0"))
		assert.equal(uintaXu0PjK, BigInt("0"))
		assert.equal(uinth5uS5p, BigInt("0"))
		assert.equal(uintqaMx7Lt, BigInt("0"))
		assert.equal(uintqhHSr0c, BigInt("0"))
		await expect(StakingDextokenWR8Q4ER.setRewardRound.call(uinthN7F4n, uintiSc476P, uintE8m85yu, uintuQ3d1Aq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUknjBTb = accounts[1]
		const addresslOUmSwU = accounts[0]
		const StakingDextokenl7Q5jBr = await StakingDextoken.new(addressUknjBTb, addresslOUmSwU, {from: accounts[4]});
		const addressPprQxmz = accounts[0]
		const addressX6foXIk = accounts[4]
		const uintMIJhhhl = BigInt("1550")
		const uintoSLlWdY = await StakingDextokenl7Q5jBr.getWithdrawalOf.call(addressPprQxmz, {from: accounts[0]});
		const uintsAkZEF9 = await StakingDextokenl7Q5jBr.totalRewards.call({from: accounts[4]});
		const uintZX0JUPf = await StakingDextokenl7Q5jBr.balanceOf.call(addressX6foXIk, {from: accounts[4]});
//		const uintwMlzO5C = await StakingDextokenl7Q5jBr.deposit.call(uintMIJhhhl, {from: accounts[1]});

		assert.equal(uintZX0JUPf, BigInt("0"))
		assert.equal(uintoSLlWdY, BigInt("0"))
		assert.equal(uintsAkZEF9, BigInt("0"))
		await expect(StakingDextokenl7Q5jBr.deposit.call(uintMIJhhhl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressO5I3izP = accounts[0]
		const addressMIbN94b = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressO5I3izP, addressMIbN94b, {from: accounts[0]});
		const addresscb8WWDo = accounts[4]
		const uintmQIPMD = BigInt("1985")
		const uintVRTFpVE = BigInt("1283")
		const uinte87XEuc = BigInt("1220")
		const uintkdwPiy = BigInt("1347")
		const uintUhzNfa = BigInt("455")
		const uintqaMx7Lt = await StakingDextokenWR8Q4ER.rewardOf.call(addresscb8WWDo, {from: accounts[4]});
//		const uintId6zxHR = await StakingDextokenWR8Q4ER.withdraw.call(uintmQIPMD, {from: accounts[1]});
//		const uintKAqLbQ0 = await StakingDextokenWR8Q4ER.remainingRewards.call({from: accounts[3]});
//		const uintqhHSr0c = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[2]});
//		const uintNXPVFWU = await StakingDextokenWR8Q4ER.setRewardRound.call(uintUhzNfa, uintkdwPiy, uinte87XEuc, uintVRTFpVE, {from: accounts[2]});
//		const uintHnIyn0o = await StakingDextokenWR8Q4ER.getEndTimestamp.call({from: accounts[4]});

		assert.equal(uintqaMx7Lt, BigInt("0"))
		await expect(StakingDextokenWR8Q4ER.withdraw.call(uintmQIPMD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxI9W2ZY = accounts[0]
		const address72im57 = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressxI9W2ZY, address72im57, {from: accounts[0]});
//		await StakingDextokenWR8Q4ER.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintqhHSr0c = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[2]});
//		const uintllWxnx6 = await StakingDextokenWR8Q4ER.getTotalStakes.call({from: accounts[5]});

		await expect(StakingDextokenWR8Q4ER.claim.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKIArwIf = accounts[4]
		const addressiyIVusj = accounts[3]
		const StakingDextokenDr2OSWr = await StakingDextoken.new(addressKIArwIf, addressiyIVusj, {from: accounts[0]});
		const uintrEEuCXd = BigInt("1992")
		const uintrf4PsXK = BigInt("1968")
		const uintEaCrqha = BigInt("1145")
		const uintxcEAyGW = BigInt("384")
		const uintKocS727 = await StakingDextokenDr2OSWr.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uintQmiqdn7 = await StakingDextokenDr2OSWr.setRewardRound.call(uintxcEAyGW, uintEaCrqha, uintrf4PsXK, uintrEEuCXd, {from: accounts[0]});

		assert.equal(uintKocS727, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressvddIYYr = accounts[0]
		const addressKElbJ0 = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressvddIYYr, addressKElbJ0, {from: accounts[0]});
		const addressplo0xK8 = accounts[0]
		const uintAhiRuBP = BigInt("1605")
		const boolfM4Y7b = await StakingDextokenWR8Q4ER.freezeAccount.call(addressplo0xK8, {from: accounts[0]});
//		const uintotyjB6i = await StakingDextokenWR8Q4ER.withdraw.call(uintAhiRuBP, {from: accounts[4]});

		assert.equal(boolfM4Y7b, true)
		await expect(StakingDextokenWR8Q4ER.withdraw.call(uintAhiRuBP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyz4AOL9 = accounts[0]
		const addressI4JWeM = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressyz4AOL9, addressI4JWeM, {from: accounts[0]});
		const uintqzMDIHc = BigInt("716")
		const uintMhwwrQ = BigInt("1601")
//		await StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]});
//		const uintYwU8qUI = await StakingDextokenWR8Q4ER.withdraw.call(uintqzMDIHc, {from: "0x0000000000000000000000000000000000000001"});
//		const uintotyjB6i = await StakingDextokenWR8Q4ER.withdraw.call(uintMhwwrQ, {from: accounts[4]});
//		const uintA6J9bpk = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[4]});

		await expect(StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressg8jx0TA = accounts[0]
		const addressFdRN8D3 = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressg8jx0TA, addressFdRN8D3, {from: accounts[0]});
		const addresshozua1K = accounts[2]
		const uintRefVgV2 = BigInt("716")
		const uintXdEx99y = BigInt("1601")
//		await StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]});
//		const addressUaJl6OT = await StakingDextokenWR8Q4ER.setBeneficial.call(addresshozua1K, {from: accounts[0]});
//		const uintYwU8qUI = await StakingDextokenWR8Q4ER.withdraw.call(uintRefVgV2, {from: "0x0000000000000000000000000000000000000001"});
//		const uintA5bA0ap = await StakingDextokenWR8Q4ER.getTotalStakes.call({from: accounts[3]});
//		const uintotyjB6i = await StakingDextokenWR8Q4ER.withdraw.call(uintXdEx99y, {from: accounts[4]});
		await StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]});
//		const uintA6J9bpk = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[4]});

		await expect(StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressDkx8fyJ = accounts[0]
		const addressl7LFas7 = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressDkx8fyJ, addressl7LFas7, {from: accounts[0]});
		const addressDWtvt1A = accounts[2]
		const uintmFNQBQ = BigInt("27")
		const uintb7Hk0Dn = BigInt("1589")
//		await StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]});
//		const boolnOxUp6I = await StakingDextokenWR8Q4ER.unfreezeAccount.call(addressDWtvt1A, {from: accounts[0]});
//		const uintYwU8qUI = await StakingDextokenWR8Q4ER.withdraw.call(uintmFNQBQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintotyjB6i = await StakingDextokenWR8Q4ER.withdraw.call(uintb7Hk0Dn, {from: accounts[4]});

		await expect(StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVHY7MfD = accounts[0]
		const addressX8jUJSy = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressVHY7MfD, addressX8jUJSy, {from: accounts[0]});
		const uint1EO5PO = BigInt("153")
		const uintpanQI8R = BigInt("1334")
		const uintGAwcwk8 = BigInt("1049")
		const uintZyT5JN0 = BigInt("1672")
		const uintMzCf3ud = BigInt("715")
		const uintj8SCpwe = BigInt("1601")
//		const uintTF1LBvK = await StakingDextokenWR8Q4ER.setRewardRound.call(uintZyT5JN0, uintGAwcwk8, uintpanQI8R, uint1EO5PO, {from: accounts[0]});
//		const uintYwU8qUI = await StakingDextokenWR8Q4ER.withdraw.call(uintMzCf3ud, {from: "0x0000000000000000000000000000000000000001"});
//		const uintnHWOV5D = await StakingDextokenWR8Q4ER.getEndTimestamp.call({from: accounts[0]});
//		const uintotyjB6i = await StakingDextokenWR8Q4ER.withdraw.call(uintj8SCpwe, {from: accounts[4]});
//		await StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]});
//		const uintA6J9bpk = await StakingDextokenWR8Q4ER.totalRewards.call({from: accounts[4]});
//		await StakingDextokenWR8Q4ER.claim.call({from: accounts[3]});

		await expect(StakingDextokenWR8Q4ER.setRewardRound.call(uintZyT5JN0, uintGAwcwk8, uintpanQI8R, uint1EO5PO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWqtsTy = accounts[0]
		const addressAP1LnIq = accounts[4]
		const StakingDextokenWR8Q4ER = await StakingDextoken.new(addressWqtsTy, addressAP1LnIq, {from: accounts[0]});
		const uint9cGS2h = BigInt("1141")
		const addresss6itJzT = accounts[0]
		const addressRZtOL7W = accounts[0]
		const uintWTc7L7y = await StakingDextokenWR8Q4ER.getEndTimestamp.call({from: accounts[4]});
//		const addressWOCQXMy = await StakingDextokenWR8Q4ER.capture.call(addresss6itJzT, uint9cGS2h, {from: accounts[0]});
//		const uintR5IyIXF = await StakingDextokenWR8Q4ER.getClaimOf.call(addressRZtOL7W, {from: accounts[4]});
//		await StakingDextokenWR8Q4ER.notifyRewards.call({from: accounts[0]});

		assert.equal(uintWTc7L7y, BigInt("0"))
		await expect(StakingDextokenWR8Q4ER.capture.call(addresss6itJzT, uint9cGS2h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})