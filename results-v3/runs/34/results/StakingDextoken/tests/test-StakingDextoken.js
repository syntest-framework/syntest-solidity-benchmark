const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressenkBMdu = accounts[1]
		const addressk1eB424 = accounts[2]
		const StakingDextokenfIzSFrx = await StakingDextoken.new(addressenkBMdu, addressk1eB424, {from: accounts[0]});
		const uinthgd8z5V = BigInt("681")
		const addressLuifugh = accounts[1]
		const addressn8Px0jx = accounts[0]
		await StakingDextokenfIzSFrx.notifyRewards.call({from: accounts[3]});
		const uintuGg88xZ = await StakingDextokenfIzSFrx.withdraw.call(uinthgd8z5V, {from: accounts[4]});
		const uintbt2pds = await StakingDextokenfIzSFrx.remainingRewards.call({from: accounts[3]});
		const uintCeVwvxh = await StakingDextokenfIzSFrx.stakeOf.call(addressLuifugh, {from: accounts[3]});
		const uintaq7qtuf = await StakingDextokenfIzSFrx.stakeOf.call(addressn8Px0jx, {from: accounts[3]});

		await expect(StakingDextokenfIzSFrx.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZgrUKsm = "0x0000000000000000000000000000000000000001"
		const addresslSr5Ofh = accounts[2]
		const StakingDextokenNy6EXwq = await StakingDextoken.new(addressZgrUKsm, addresslSr5Ofh, {from: accounts[3]});
		const addressRIYRkqL = accounts[3]
		const uinti0iCaWq = await StakingDextokenNy6EXwq.getEndTimestamp.call({from: accounts[3]});
		const addressoRRVBUH = await StakingDextokenNy6EXwq.updateReward.call(addressRIYRkqL, {from: "0x0000000000000000000000000000000000000001"});
		const uintDFMDF9j = await StakingDextokenNy6EXwq.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uintqtGJbkl = await StakingDextokenNy6EXwq.remainingRewards.call({from: accounts[0]});

		assert.equal(uinti0iCaWq, BigInt("0"))
		await expect(StakingDextokenNy6EXwq.updateReward.call(addressRIYRkqL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGncDGMw = accounts[2]
		const addressfi98hji = accounts[3]
		const StakingDextokenLsi3Gea = await StakingDextoken.new(addressGncDGMw, addressfi98hji, {from: accounts[2]});
		const addressImrkQ6V = "0x0000000000000000000000000000000000000001"
		const uinteyd7PXw = BigInt("318")
		const uintOfhLQi3 = BigInt("743")
		const uintwApWkvM = BigInt("1758")
		const uintb3CYbhe = BigInt("897")
		const addressJ0If7rY = accounts[0]
		const uinth8SERcn = await StakingDextokenLsi3Gea.getEndTimestamp.call({from: accounts[0]});
		const uintFntFV3y = await StakingDextokenLsi3Gea.earned.call(addressImrkQ6V, {from: accounts[2]});
		const uintbtADIt = await StakingDextokenLsi3Gea.setRewardRound.call(uintb3CYbhe, uintwApWkvM, uintOfhLQi3, uinteyd7PXw, {from: accounts[1]});
		const uintWwpq9tO = await StakingDextokenLsi3Gea.rewardOf.call(addressJ0If7rY, {from: accounts[3]});

		assert.equal(uintFntFV3y, BigInt("0"))
		assert.equal(uinth8SERcn, BigInt("0"))
		await expect(StakingDextokenLsi3Gea.setRewardRound.call(uintb3CYbhe, uintwApWkvM, uintOfhLQi3, uinteyd7PXw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBBdCAPf = accounts[3]
		const addressrGkQKAz = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressBBdCAPf, addressrGkQKAz, {from: accounts[5]});
		const addressrYS5nj8 = accounts[0]
		const addressfOeGCU1 = accounts[3]
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressrYS5nj8, {from: accounts[3]});
		const boolBnbKtHh = await StakingDextokenhAgpa3R.unfreezeAccount.call(addressfOeGCU1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintqsV3MC, BigInt("0"))
		await expect(StakingDextokenhAgpa3R.unfreezeAccount.call(addressfOeGCU1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNCO3AvD = accounts[0]
		const addressHjctI5 = accounts[1]
		const StakingDextokendpUDIKi = await StakingDextoken.new(addressNCO3AvD, addressHjctI5, {from: accounts[1]});
		const uintp7de2Ve = BigInt("231")
		const addressgDj0sar = accounts[3]
		const addressXrK7P7W = accounts[4]
		const uintpLWaldx = await StakingDextokendpUDIKi.getStartTimestamp.call({from: accounts[4]});
		const addressHoqqtV = await StakingDextokendpUDIKi.capture.call(addressgDj0sar, uintp7de2Ve, {from: accounts[1]});
		const addressNick4N = await StakingDextokendpUDIKi.setBeneficial.call(addressXrK7P7W, {from: accounts[5]});
		const uintxz6ZiJ9 = await StakingDextokendpUDIKi.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintpLWaldx, BigInt("0"))
		await expect(StakingDextokendpUDIKi.capture.call(addressgDj0sar, uintp7de2Ve, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressQAVja5 = accounts[2]
		const addressjr8oGqO = accounts[4]
		const StakingDextokenrN0QBtJ = await StakingDextoken.new(addressQAVja5, addressjr8oGqO, {from: accounts[2]});
		const addressNo2LW6h = accounts[0]
		const uintDLXiUkE = BigInt("571")
		const uintS7LfvKU = BigInt("1216")
		const uintlrXlNi8 = BigInt("1944")
		const uinticAxNvL = BigInt("1710")
		const uintjdelSNG = await StakingDextokenrN0QBtJ.stakeOf.call(addressNo2LW6h, {from: accounts[4]});
		const uintzVVdI0G = await StakingDextokenrN0QBtJ.setRewardRound.call(uinticAxNvL, uintlrXlNi8, uintS7LfvKU, uintDLXiUkE, {from: accounts[4]});

		assert.equal(uintjdelSNG, BigInt("0"))
		await expect(StakingDextokenrN0QBtJ.setRewardRound.call(uinticAxNvL, uintlrXlNi8, uintS7LfvKU, uintDLXiUkE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuEO6kuo = accounts[3]
		const addressleBbtQ = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressuEO6kuo, addressleBbtQ, {from: accounts[5]});
		const uintCsptaZ = BigInt("1930")
		const uintrGx21hZ = BigInt("1731")
		const uintuCjH3c = BigInt("1194")
		const uintcvWLbFc = BigInt("996")
		const addressH16I1Cj = accounts[1]
		const addressapjzPKn = accounts[3]
		const uintHnwTyes = await StakingDextokenhAgpa3R.setRewardRound.call(uintcvWLbFc, uintuCjH3c, uintrGx21hZ, uintCsptaZ, {from: accounts[5]});
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressH16I1Cj, {from: accounts[3]});
		const boolBnbKtHh = await StakingDextokenhAgpa3R.unfreezeAccount.call(addressapjzPKn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintqsV3MC, BigInt("0"))
		await expect(StakingDextokenhAgpa3R.unfreezeAccount.call(addressapjzPKn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKLT0vbw = accounts[3]
		const addressQbPIKRq = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressKLT0vbw, addressQbPIKRq, {from: accounts[5]});
		const address7mhz1P = accounts[1]
		const uintLRwO1j2 = BigInt("526")
		const uintRYpFcCj = BigInt("1659")
		const uintAvFdUrw = BigInt("597")
		const uintzUCCII = BigInt("1851")
		const addressA6F3oxW = accounts[3]
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(address7mhz1P, {from: accounts[3]});
		const uintLjboso = await StakingDextokenhAgpa3R.remainingRewards.call({from: accounts[3]});
		const uintWoD7McC = await StakingDextokenhAgpa3R.setRewardRound.call(uintzUCCII, uintAvFdUrw, uintRYpFcCj, uintLRwO1j2, {from: accounts[4]});
		const boolBnbKtHh = await StakingDextokenhAgpa3R.unfreezeAccount.call(addressA6F3oxW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintLjboso, BigInt("0"))
		assert.equal(uintqsV3MC, BigInt("0"))
		await expect(StakingDextokenhAgpa3R.setRewardRound.call(uintzUCCII, uintAvFdUrw, uintRYpFcCj, uintLRwO1j2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressrP91VL = accounts[2]
		const addressLOJofVD = accounts[3]
		const StakingDextokenLsi3Gea = await StakingDextoken.new(addressrP91VL, addressLOJofVD, {from: accounts[2]});
		const addressZxZu0X = "0x0000000000000000000000000000000000000001"
		const addressxGInXbR = accounts[1]
		const uinth8SERcn = await StakingDextokenLsi3Gea.getEndTimestamp.call({from: accounts[0]});
		const uintFntFV3y = await StakingDextokenLsi3Gea.earned.call(addressZxZu0X, {from: accounts[2]});
		const uintWwpq9tO = await StakingDextokenLsi3Gea.rewardOf.call(addressxGInXbR, {from: accounts[3]});

		assert.equal(uintFntFV3y, BigInt("0"))
		assert.equal(uintWwpq9tO, BigInt("0"))
		assert.equal(uinth8SERcn, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresssyhtpU4 = accounts[2]
		const addressAseFSNq = accounts[0]
		const StakingDextokenZNxD2Z = await StakingDextoken.new(addresssyhtpU4, addressAseFSNq, {from: accounts[2]});
		const uintXWGbFzN = BigInt("1792")
		const addressFmak8Xh = accounts[1]
		const addressxx09P7M = accounts[3]
		const uintx78h2Ay = await StakingDextokenZNxD2Z.totalRewards.call({from: accounts[5]});
		const uintsjHw53r = await StakingDextokenZNxD2Z.withdraw.call(uintXWGbFzN, {from: accounts[5]});
		const uintcFnPXkj = await StakingDextokenZNxD2Z.balanceOf.call(addressFmak8Xh, {from: accounts[3]});
		const uintXuVxKL3 = await StakingDextokenZNxD2Z.getWithdrawalOf.call(addressxx09P7M, {from: accounts[2]});

		assert.equal(uintx78h2Ay, BigInt("0"))
		await expect(StakingDextokenZNxD2Z.withdraw.call(uintXWGbFzN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address5vXcAE = accounts[3]
		const addressNBezVJ6 = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(address5vXcAE, addressNBezVJ6, {from: accounts[5]});
		const uintKp39DKe = BigInt("1045")
		const addressoYAigN6 = accounts[3]
		const uintOeYK1Uq = await StakingDextokenhAgpa3R.deposit.call(uintKp39DKe, {from: accounts[4]});
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressoYAigN6, {from: accounts[3]});

		await expect(StakingDextokenhAgpa3R.deposit.call(uintKp39DKe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address9VDgMT = accounts[0]
		const addressLgVPmV6 = accounts[3]
		const StakingDextokendI5dIx = await StakingDextoken.new(address9VDgMT, addressLgVPmV6, {from: accounts[2]});
		const addressUxlprS7 = accounts[1]
		const addressRRCyLnR = accounts[4]
		const boolrkzOHUP = await StakingDextokendI5dIx.unfreezeAccount.call(addressUxlprS7, {from: accounts[2]});
		const uintkoctzSD = await StakingDextokendI5dIx.remainingRewards.call({from: accounts[3]});
		const uintL236rj7 = await StakingDextokendI5dIx.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressBiBZk7R = await StakingDextokendI5dIx.updateReward.call(addressRRCyLnR, {from: accounts[3]});

		await expect(StakingDextokendI5dIx.unfreezeAccount.call(addressUxlprS7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFSaJY4 = accounts[3]
		const addressafEJTkp = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressFSaJY4, addressafEJTkp, {from: accounts[5]});
		const addressMkui76 = accounts[5]
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressMkui76, {from: accounts[3]});
		await StakingDextokenhAgpa3R.claim.call({from: accounts[2]});

		assert.equal(uintqsV3MC, BigInt("0"))
		await expect(StakingDextokenhAgpa3R.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKMfVbdc = accounts[3]
		const addressQW0Li2a = accounts[4]
		const StakingDextokenoegf6em = await StakingDextoken.new(addressKMfVbdc, addressQW0Li2a, {from: accounts[1]});
		const addressiZkAr5l = accounts[5]
		const addressbk4YTjA = accounts[1]
		const uintmxKMrU = await StakingDextokenoegf6em.getClaimOf.call(addressiZkAr5l, {from: accounts[4]});
		const uintonJFhLi = await StakingDextokenoegf6em.getClaimOf.call(addressbk4YTjA, {from: accounts[1]});

		assert.equal(uintmxKMrU, BigInt("0"))
		assert.equal(uintonJFhLi, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressxOaMJx = accounts[3]
		const addressaqeSaTi = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressxOaMJx, addressaqeSaTi, {from: accounts[5]});
		const addressF40GtlO = accounts[1]
		const addressyQokszR = accounts[5]
		const addresstkapIyY = await StakingDextokenhAgpa3R.setBeneficial.call(addressF40GtlO, {from: accounts[5]});
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressyQokszR, {from: accounts[3]});

		assert.equal(uintqsV3MC, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressiuOJ79U = accounts[4]
		const addressBWYSCee = accounts[3]
		const StakingDextokenKqvN8RU = await StakingDextoken.new(addressiuOJ79U, addressBWYSCee, {from: "0x0000000000000000000000000000000000000001"});
		const addressDsVsLz7 = accounts[2]
		const addressLRUa8R = accounts[0]
		const addressSCYmURG = accounts[4]
		const addressCRiE7sz = accounts[3]
		const uintxbrrryA = BigInt("911")
		const uintfy0mvrl = await StakingDextokenKqvN8RU.stakeOf.call(addressDsVsLz7, {from: accounts[0]});
		const uintsIg3mOu = await StakingDextokenKqvN8RU.balanceOf.call(addressLRUa8R, {from: accounts[2]});
		const uintGPm0VwH = await StakingDextokenKqvN8RU.earned.call(addressSCYmURG, {from: accounts[5]});
		const booleC9Qdw = await StakingDextokenKqvN8RU.unfreezeAccount.call(addressCRiE7sz, {from: accounts[3]});
		const uintSazB1i1 = await StakingDextokenKqvN8RU.withdraw.call(uintxbrrryA, {from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const address8szrQW = accounts[3]
		const addressuMLW9Dm = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(address8szrQW, addressuMLW9Dm, {from: accounts[5]});
		const uintIdPhXB = BigInt("378")
		const addressAg9rd76 = accounts[1]
		await StakingDextokenhAgpa3R.notifyRewards.call({from: accounts[5]});
		const uintOeYK1Uq = await StakingDextokenhAgpa3R.deposit.call(uintIdPhXB, {from: accounts[4]});
		const uintRGLxNiU = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressAg9rd76, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenhAgpa3R.notifyRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSns6nrg = accounts[3]
		const addressiR6xldE = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressSns6nrg, addressiR6xldE, {from: accounts[5]});
		const addresskCW45jN = accounts[1]
		const addressMI9nV1w = accounts[5]
		const boolyFhiHiR = await StakingDextokenhAgpa3R.freezeAccount.call(addresskCW45jN, {from: accounts[5]});
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressMI9nV1w, {from: accounts[3]});

		assert.equal(boolyFhiHiR, true)
		assert.equal(uintqsV3MC, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressIkuJ40S = accounts[3]
		const addressRYAsYQL = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addressIkuJ40S, addressRYAsYQL, {from: accounts[5]});
		const uintp04yf4u = BigInt("414")
		const addressB6NtIuv = accounts[1]
		const uintwAuaqo4 = BigInt("1104")
		const addressYjLDTHW = await StakingDextokenhAgpa3R.capture.call(addressB6NtIuv, uintp04yf4u, {from: accounts[5]});
		const uintOeYK1Uq = await StakingDextokenhAgpa3R.deposit.call(uintwAuaqo4, {from: accounts[4]});

		await expect(StakingDextokenhAgpa3R.capture.call(addressB6NtIuv, uintp04yf4u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresseAQatjj = accounts[3]
		const addressszXjhfr = accounts[1]
		const StakingDextokenhAgpa3R = await StakingDextoken.new(addresseAQatjj, addressszXjhfr, {from: accounts[5]});
		const uintZrWlXo9 = BigInt("258")
		const uintIUXc9ri = BigInt("497")
		const uintfhHBrMM = BigInt("748")
		const uintdtm8NgE = BigInt("594")
		const addressHpDeydK = accounts[5]
		const uintdv4MXHj = await StakingDextokenhAgpa3R.setRewardRound.call(uintdtm8NgE, uintfhHBrMM, uintIUXc9ri, uintZrWlXo9, {from: accounts[5]});
		const uintqsV3MC = await StakingDextokenhAgpa3R.getWithdrawalOf.call(addressHpDeydK, {from: accounts[3]});

		await expect(StakingDextokenhAgpa3R.setRewardRound.call(uintdtm8NgE, uintfhHBrMM, uintIUXc9ri, uintZrWlXo9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})