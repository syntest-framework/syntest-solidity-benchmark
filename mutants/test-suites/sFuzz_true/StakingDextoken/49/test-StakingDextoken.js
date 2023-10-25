const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressQSLvI87 = accounts[2]
		const addressS6pJUA = accounts[4]
		const StakingDextokenbfmqWkJ = await StakingDextoken.new(addressQSLvI87, addressS6pJUA, {from: accounts[0]});
		const addressibt4zA = accounts[4]
		const addressv6Ubsh5 = accounts[0]
		const uintMMDkB2g = await StakingDextokenbfmqWkJ.getClaimOf.call(addressibt4zA, {from: accounts[2]});
		const uintmJYjkbb = await StakingDextokenbfmqWkJ.rewardOf.call(addressv6Ubsh5, {from: accounts[2]});
		const uint5vUY1y = await StakingDextokenbfmqWkJ.getStartTimestamp.call({from: accounts[1]});

		assert.equal(uint5vUY1y, BigInt("0"))
		assert.equal(uintMMDkB2g, BigInt("0"))
		assert.equal(uintmJYjkbb, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressFurlesR = accounts[4]
		const addressprnVC3y = "0x0000000000000000000000000000000000000001"
		const StakingDextoken4wlIas = await StakingDextoken.new(addressFurlesR, addressprnVC3y, {from: accounts[1]});
		const addressP8FzI3L = accounts[4]
		const uintlOUoJUo = await StakingDextoken4wlIas.totalRewards.call({from: accounts[2]});
		const uintZnrJux = await StakingDextoken4wlIas.stakeOf.call(addressP8FzI3L, {from: accounts[2]});
		const uintuD7JXun = await StakingDextoken4wlIas.getTotalStakes.call({from: accounts[2]});
//		await StakingDextoken4wlIas.claim.call({from: accounts[1]});
//		const uinteD2sAj = await StakingDextoken4wlIas.getEndTimestamp.call({from: accounts[0]});

		assert.equal(uintZnrJux, BigInt("0"))
		assert.equal(uintlOUoJUo, BigInt("0"))
		assert.equal(uintuD7JXun, BigInt("0"))
		await expect(StakingDextoken4wlIas.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYBIeviE = accounts[2]
		const addressrnS3GkZ = accounts[4]
		const StakingDextokenkyGEm3B = await StakingDextoken.new(addressYBIeviE, addressrnS3GkZ, {from: accounts[0]});
		const addressgRqmEnk = accounts[5]
		const uintxOtKwGr = BigInt("367")
		const uintvEUfJiF = BigInt("224")
		const uintNraoZzA = BigInt("1697")
		const uintbdEGMZ4 = BigInt("2034")
		const addressuwRuJLD = accounts[1]
		const uintnAngiJN = BigInt("1155")
		const addressq7ka2Je = accounts[3]
		const addressv6tZ1pX = accounts[1]
		const uintpzz0hq6 = await StakingDextokenkyGEm3B.getWithdrawalOf.call(addressgRqmEnk, {from: accounts[2]});
//		const uintaLStgzN = await StakingDextokenkyGEm3B.setRewardRound.call(uintbdEGMZ4, uintNraoZzA, uintvEUfJiF, uintxOtKwGr, {from: accounts[1]});
//		const uintGqWlIOg = await StakingDextokenkyGEm3B.getWithdrawalOf.call(addressuwRuJLD, {from: accounts[3]});
//		const addressfos6kb = await StakingDextokenkyGEm3B.capture.call(addressq7ka2Je, uintnAngiJN, {from: accounts[1]});
//		const uintqtabNrv = await StakingDextokenkyGEm3B.stakeOf.call(addressv6tZ1pX, {from: "0x0000000000000000000000000000000000000001"});
//		const uintS40dhRQ = await StakingDextokenkyGEm3B.totalRewards.call({from: accounts[1]});

		assert.equal(uintpzz0hq6, BigInt("0"))
		await expect(StakingDextokenkyGEm3B.setRewardRound.call(uintbdEGMZ4, uintNraoZzA, uintvEUfJiF, uintxOtKwGr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgtSe9td = accounts[5]
		const addressG3IXuAf = accounts[2]
		const StakingDextokenctz0ygk = await StakingDextoken.new(addressgtSe9td, addressG3IXuAf, {from: accounts[3]});
		const addresspstolks = accounts[4]
		const addressmEGoEF1 = "0x0000000000000000000000000000000000000001"
		const addressJhSLpA = accounts[3]
		const addressPS92Vhj = accounts[2]
//		await StakingDextokenctz0ygk.notifyRewards.call({from: accounts[3]});
//		const boolMVR6Zg3 = await StakingDextokenctz0ygk.freezeAccount.call(addresspstolks, {from: accounts[4]});
//		const uintSXM5fjd = await StakingDextokenctz0ygk.getTotalStakes.call({from: accounts[4]});
//		const boolEeNNAp = await StakingDextokenctz0ygk.freezeAccount.call(addressmEGoEF1, {from: accounts[1]});
//		const uintCP20czO = await StakingDextokenctz0ygk.getWithdrawalOf.call(addressJhSLpA, {from: accounts[3]});
//		const boolDvK6yV0 = await StakingDextokenctz0ygk.freezeAccount.call(addressPS92Vhj, {from: accounts[0]});

		await expect(StakingDextokenctz0ygk.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBI5rXKF = accounts[2]
		const addresslmskdR = accounts[0]
		const StakingDextokenKnrfPUa = await StakingDextoken.new(addressBI5rXKF, addresslmskdR, {from: accounts[5]});
		const uintRxmFu4Z = BigInt("270")
		const uintAbxUije = BigInt("2043")
		const uintqvdLxYE = await StakingDextokenKnrfPUa.getStartTimestamp.call({from: accounts[0]});
//		const uintaqH3eT = await StakingDextokenKnrfPUa.withdraw.call(uintRxmFu4Z, {from: accounts[2]});
//		const uintFNEybUl = await StakingDextokenKnrfPUa.deposit.call(uintAbxUije, {from: accounts[2]});

		assert.equal(uintqvdLxYE, BigInt("0"))
		await expect(StakingDextokenKnrfPUa.withdraw.call(uintRxmFu4Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressX7fpMS9 = accounts[5]
		const addressDlnwIrq = accounts[0]
		const StakingDextokenf4MjrSi = await StakingDextoken.new(addressX7fpMS9, addressDlnwIrq, {from: accounts[4]});
		const uinteoBItLh = BigInt("1241")
		const addressoOdH5Jf = accounts[3]
		const addresshlae8RN = accounts[0]
		const addresstzwueN = accounts[0]
		const uintHd4H5gs = await StakingDextokenf4MjrSi.rewardPerToken.call({from: accounts[1]});
//		const addressk1iDEG6 = await StakingDextokenf4MjrSi.capture.call(addressoOdH5Jf, uinteoBItLh, {from: accounts[4]});
//		await StakingDextokenf4MjrSi.claim.call({from: accounts[5]});
//		const uintxqRtfF3 = await StakingDextokenf4MjrSi.totalRewards.call({from: accounts[2]});
//		const uintmVmQrFd = await StakingDextokenf4MjrSi.earned.call(addresshlae8RN, {from: accounts[0]});
//		const boolDWxF8CW = await StakingDextokenf4MjrSi.freezeAccount.call(addresstzwueN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHd4H5gs, BigInt("0"))
		await expect(StakingDextokenf4MjrSi.capture.call(addressoOdH5Jf, uinteoBItLh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressjFuo1Xf = accounts[2]
		const addressLXvS2DX = accounts[0]
		const StakingDextokenKnrfPUa = await StakingDextoken.new(addressjFuo1Xf, addressLXvS2DX, {from: accounts[5]});
		const uintfyX8gl = BigInt("276")
		const uintRqOBiWi = BigInt("2043")
		const uintqvdLxYE = await StakingDextokenKnrfPUa.getStartTimestamp.call({from: accounts[0]});
		const uintb9qm3s = await StakingDextokenKnrfPUa.remainingRewards.call({from: accounts[0]});
//		const uintaqH3eT = await StakingDextokenKnrfPUa.withdraw.call(uintfyX8gl, {from: accounts[2]});
//		const uintFNEybUl = await StakingDextokenKnrfPUa.deposit.call(uintRqOBiWi, {from: accounts[2]});

		assert.equal(uintb9qm3s, BigInt("0"))
		assert.equal(uintqvdLxYE, BigInt("0"))
		await expect(StakingDextokenKnrfPUa.withdraw.call(uintfyX8gl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressN6lranG = accounts[4]
		const addressprqjbI = accounts[3]
		const StakingDextokenuCCp255 = await StakingDextoken.new(addressN6lranG, addressprqjbI, {from: accounts[1]});
		const addressibSP55S = accounts[2]
//		const addressnGHpPJo = await StakingDextokenuCCp255.updateReward.call(addressibSP55S, {from: accounts[3]});

		await expect(StakingDextokenuCCp255.updateReward.call(addressibSP55S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressoLLdGq = accounts[3]
		const addressm9xrlyU = accounts[2]
		const StakingDextokenWizeXFN = await StakingDextoken.new(addressoLLdGq, addressm9xrlyU, {from: "0x0000000000000000000000000000000000000001"});
		const address3B5u3A = accounts[2]
		const addresscndSiNj = accounts[3]
		const addressJPWZVnW = accounts[0]
		const uintJkYgDQg = await StakingDextokenWizeXFN.stakeOf.call(address3B5u3A, {from: accounts[0]});
		const boolO3aBjUT = await StakingDextokenWizeXFN.freezeAccount.call(addresscndSiNj, {from: accounts[0]});
		const uinte4c5R0l = await StakingDextokenWizeXFN.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintoIdboUc = await StakingDextokenWizeXFN.getWithdrawalOf.call(addressJPWZVnW, {from: "0x0000000000000000000000000000000000000001"});
		const uintZw7b33R = await StakingDextokenWizeXFN.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for StakingDextoken', async () => {
		const addressk9cwaa = accounts[3]
		const addressDf1FFMt = "0x0000000000000000000000000000000000000001"
		const StakingDextokenZuGPPx9 = await StakingDextoken.new(addressk9cwaa, addressDf1FFMt, {from: accounts[2]});
		const addresszy8rZbK = accounts[5]
		const uintqmKVIgg = BigInt("2005")
		const uintp99SpXl = await StakingDextokenZuGPPx9.getStartTimestamp.call({from: accounts[3]});
		const uintfvxzKYk = await StakingDextokenZuGPPx9.getStartTimestamp.call({from: accounts[0]});
		const uintrGhpeSJ = await StakingDextokenZuGPPx9.rewardOf.call(addresszy8rZbK, {from: accounts[5]});
//		const uintLJmkROd = await StakingDextokenZuGPPx9.deposit.call(uintqmKVIgg, {from: accounts[4]});

		assert.equal(uintfvxzKYk, BigInt("0"))
		assert.equal(uintp99SpXl, BigInt("0"))
		assert.equal(uintrGhpeSJ, BigInt("0"))
		await expect(StakingDextokenZuGPPx9.deposit.call(uintqmKVIgg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAb0ydok = accounts[5]
		const addressM2ne3sh = accounts[2]
		const StakingDextokenctz0ygk = await StakingDextoken.new(addressAb0ydok, addressM2ne3sh, {from: accounts[3]});
		const addressIFFGRrt = accounts[1]
		const addressyL2BnNN = accounts[5]
		const boolRmMupin = await StakingDextokenctz0ygk.freezeAccount.call(addressIFFGRrt, {from: accounts[3]});
//		const boolMVR6Zg3 = await StakingDextokenctz0ygk.freezeAccount.call(addressyL2BnNN, {from: accounts[4]});
//		const uintrN6cRHz = await StakingDextokenctz0ygk.totalRewards.call({from: accounts[2]});

		assert.equal(boolRmMupin, true)
		await expect(StakingDextokenctz0ygk.freezeAccount.call(addressyL2BnNN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIDq45Gw = accounts[4]
		const addressGojy9tZ = accounts[3]
		const StakingDextokenuCCp255 = await StakingDextoken.new(addressIDq45Gw, addressGojy9tZ, {from: accounts[1]});
		const uintcn3YoXG = BigInt("86")
		const uinttD7nIDU = BigInt("492")
		const uintNqoqoKp = BigInt("1885")
		const uintgqFyd7b = BigInt("591")
//		const uintcIjCnJc = await StakingDextokenuCCp255.setRewardRound.call(uintgqFyd7b, uintNqoqoKp, uinttD7nIDU, uintcn3YoXG, {from: accounts[1]});
//		const uintPPRKHWq = await StakingDextokenuCCp255.totalRewards.call({from: accounts[4]});
//		await StakingDextokenuCCp255.claim.call({from: accounts[5]});

		await expect(StakingDextokenuCCp255.setRewardRound.call(uintgqFyd7b, uintNqoqoKp, uinttD7nIDU, uintcn3YoXG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresspKS6X7h = accounts[5]
		const addresshxGPFvt = accounts[2]
		const StakingDextokenctz0ygk = await StakingDextoken.new(addresspKS6X7h, addresshxGPFvt, {from: accounts[3]});
		const addressQcJhGpd = accounts[3]
//		const boolzX6mOA7 = await StakingDextokenctz0ygk.unfreezeAccount.call(addressQcJhGpd, {from: accounts[3]});
//		const uintSJXwj6X = await StakingDextokenctz0ygk.lastTimeRewardApplicable.call({from: accounts[2]});
//		await StakingDextokenctz0ygk.notifyRewards.call({from: accounts[3]});
//		const uintnYCPJho = await StakingDextokenctz0ygk.remainingRewards.call({from: accounts[1]});

		await expect(StakingDextokenctz0ygk.unfreezeAccount.call(addressQcJhGpd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCloGBsJ = accounts[4]
		const addressvv6CTA0 = accounts[3]
		const StakingDextokenuCCp255 = await StakingDextoken.new(addressCloGBsJ, addressvv6CTA0, {from: accounts[1]});
		const addressLtcj8A = accounts[4]
		const addresshGA4nGe = accounts[4]
		const addressq3iiSeS = await StakingDextokenuCCp255.setBeneficial.call(addressLtcj8A, {from: accounts[1]});
//		const addressnGHpPJo = await StakingDextokenuCCp255.updateReward.call(addresshGA4nGe, {from: accounts[3]});

		await expect(StakingDextokenuCCp255.updateReward.call(addresshGA4nGe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})