const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressIG4S0Jz = accounts[2]
		const addressMqM4lSe = accounts[1]
		const StakingDextokenXC1Ng7F = await StakingDextoken.new(addressIG4S0Jz, addressMqM4lSe, {from: accounts[2]});
		const addressmusXiEI = accounts[2]
		const addresszfhBkW = accounts[5]
		const uintEI14iS = await StakingDextokenXC1Ng7F.rewardOf.call(addressmusXiEI, {from: accounts[5]});
//		await StakingDextokenXC1Ng7F.claim.call({from: accounts[4]});
//		const addresspXU8GRw = await StakingDextokenXC1Ng7F.setBeneficial.call(addresszfhBkW, {from: accounts[3]});

		assert.equal(uintEI14iS, BigInt("0"))
		await expect(StakingDextokenXC1Ng7F.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyyb1DUY = accounts[1]
		const addressHAl8VbU = accounts[1]
		const StakingDextokenDoWw9CH = await StakingDextoken.new(addressyyb1DUY, addressHAl8VbU, {from: "0x0000000000000000000000000000000000000001"});
		const addressU5Gbjc5 = accounts[3]
		const uintrMMZfK4 = await StakingDextokenDoWw9CH.earned.call(addressU5Gbjc5, {from: accounts[4]});
		const uintqpSy1l7 = await StakingDextokenDoWw9CH.getStartTimestamp.call({from: accounts[5]});
		const uintJKAtOFB = await StakingDextokenDoWw9CH.getStartTimestamp.call({from: accounts[1]});
	});

	it('test for StakingDextoken', async () => {
		const addressLxnfgK = accounts[2]
		const addressWoJqr8R = accounts[2]
		const StakingDextokenWyZfEnc = await StakingDextoken.new(addressLxnfgK, addressWoJqr8R, {from: accounts[0]});
		const addressxCnNEua = accounts[3]
		const uint5bDsGA = await StakingDextokenWyZfEnc.stakeOf.call(addressxCnNEua, {from: accounts[0]});
		const uintgi34Gym = await StakingDextokenWyZfEnc.rewardPerToken.call({from: accounts[3]});
		const uintjtFbFKX = await StakingDextokenWyZfEnc.totalRewards.call({from: accounts[3]});

		assert.equal(uint5bDsGA, BigInt("0"))
		assert.equal(uintgi34Gym, BigInt("0"))
		assert.equal(uintjtFbFKX, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressCJFZsjQ = accounts[2]
		const addressMRjN30q = accounts[1]
		const StakingDextokenZvVgyKn = await StakingDextoken.new(addressCJFZsjQ, addressMRjN30q, {from: accounts[0]});
		const addressbyLWN7y = "0x0000000000000000000000000000000000000001"
		const addressKBUW2NB = accounts[0]
		const addresszQIxTOR = accounts[3]
		const addressdqlM220 = accounts[4]
//		const addresscQehqJS = await StakingDextokenZvVgyKn.updateReward.call(addressbyLWN7y, {from: accounts[3]});
//		const uintngpo0DI = await StakingDextokenZvVgyKn.balanceOf.call(addressKBUW2NB, {from: accounts[5]});
//		const uintRaCdkuN = await StakingDextokenZvVgyKn.getWithdrawalOf.call(addresszQIxTOR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX0otTbL = await StakingDextokenZvVgyKn.freezeAccount.call(addressdqlM220, {from: accounts[5]});

		await expect(StakingDextokenZvVgyKn.updateReward.call(addressbyLWN7y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvWhH1BU = accounts[1]
		const addressQkqLwPZ = accounts[3]
		const StakingDextokene5yS1C = await StakingDextoken.new(addressvWhH1BU, addressQkqLwPZ, {from: accounts[4]});
		const addressB3Wuizg = accounts[4]
		const uintCLPYjTS = BigInt("403")
		const uinttFukglF = BigInt("1878")
		const uintk7R1KuC = BigInt("50")
		const uinthiZEqLd = BigInt("0")
		const uintarC22Rf = await StakingDextokene5yS1C.rewardPerToken.call({from: accounts[3]});
		const uinttZetHOU = await StakingDextokene5yS1C.getClaimOf.call(addressB3Wuizg, {from: accounts[0]});
//		const uintf5zq5n5 = await StakingDextokene5yS1C.setRewardRound.call(uinthiZEqLd, uintk7R1KuC, uinttFukglF, uintCLPYjTS, {from: accounts[0]});

		assert.equal(uintarC22Rf, BigInt("0"))
		assert.equal(uinttZetHOU, BigInt("0"))
		await expect(StakingDextokene5yS1C.setRewardRound.call(uinthiZEqLd, uintk7R1KuC, uinttFukglF, uintCLPYjTS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVEuWviw = accounts[1]
		const addressJUnXthG = accounts[3]
		const StakingDextokene5yS1C = await StakingDextoken.new(addressVEuWviw, addressJUnXthG, {from: accounts[4]});
		const uintLL0bQZK = BigInt("576")
		const uintRrFsE5p = BigInt("403")
		const uintsfqKX7 = BigInt("1908")
		const uintbMdKPfZ = BigInt("50")
		const uintF0bSdSq = BigInt("0")
		const addresstSPskOd = accounts[2]
//		const uintMgvXhYE = await StakingDextokene5yS1C.deposit.call(uintLL0bQZK, {from: "0x0000000000000000000000000000000000000001"});
//		const uintf5zq5n5 = await StakingDextokene5yS1C.setRewardRound.call(uintF0bSdSq, uintbMdKPfZ, uintsfqKX7, uintRrFsE5p, {from: accounts[0]});
//		const uintpoOy89 = await StakingDextokene5yS1C.earned.call(addresstSPskOd, {from: accounts[2]});

		await expect(StakingDextokene5yS1C.deposit.call(uintLL0bQZK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNTpCsGo = accounts[1]
		const addressoq2QHen = accounts[3]
		const StakingDextokene5yS1C = await StakingDextoken.new(addressNTpCsGo, addressoq2QHen, {from: accounts[4]});
		const uintrgt1w7 = BigInt("1193")
		const uintnVtEB8S = BigInt("403")
		const uintBMxqAEA = BigInt("1908")
		const uintkjbwMa9 = BigInt("50")
		const uintkB482to = BigInt("0")
//		const uintmlQw0cU = await StakingDextokene5yS1C.withdraw.call(uintrgt1w7, {from: accounts[2]});
//		const uint3B4OI1 = await StakingDextokene5yS1C.rewardPerToken.call({from: accounts[4]});
//		const uintf5zq5n5 = await StakingDextokene5yS1C.setRewardRound.call(uintkB482to, uintkjbwMa9, uintBMxqAEA, uintnVtEB8S, {from: accounts[0]});

		await expect(StakingDextokene5yS1C.withdraw.call(uintrgt1w7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresssT5gmIq = accounts[5]
		const addressBhDhiu = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addresssT5gmIq, addressBhDhiu, {from: accounts[0]});
		const addressqRl10L4 = accounts[2]
		const addressaoMuiun = accounts[3]
		const addresslebHCat = accounts[4]
		const uintE24wmg = await StakingDextokenOlnWLX.rewardOf.call(addressqRl10L4, {from: "0x0000000000000000000000000000000000000001"});
		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(addressaoMuiun, {from: accounts[3]});
		const uintZuxMmQ = await StakingDextokenOlnWLX.getWithdrawalOf.call(addresslebHCat, {from: accounts[3]});

		assert.equal(uintE24wmg, BigInt("0"))
		assert.equal(uintIF86nFK, BigInt("0"))
		assert.equal(uintZuxMmQ, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressejHP2cm = accounts[5]
		const addressqYGEMQ1 = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressejHP2cm, addressqYGEMQ1, {from: accounts[0]});
		const addressG6cV3Ww = accounts[4]
		const addressscMT3bX = accounts[1]
		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(addressG6cV3Ww, {from: accounts[3]});
		const uintmeDCTay = await StakingDextokenOlnWLX.earned.call(addressscMT3bX, {from: accounts[1]});
		const uints3Hv3kT = await StakingDextokenOlnWLX.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintIF86nFK, BigInt("0"))
		assert.equal(uintmeDCTay, BigInt("0"))
		assert.equal(uints3Hv3kT, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressuZdRTpm = accounts[5]
		const addressjNrrMOS = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressuZdRTpm, addressjNrrMOS, {from: accounts[0]});
		const addressqtHTeql = accounts[4]
		const uintgKohjQe = await StakingDextokenOlnWLX.remainingRewards.call({from: accounts[3]});
		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(addressqtHTeql, {from: accounts[3]});
//		await StakingDextokenOlnWLX.claim.call({from: accounts[2]});

		assert.equal(uintIF86nFK, BigInt("0"))
		assert.equal(uintgKohjQe, BigInt("0"))
		await expect(StakingDextokenOlnWLX.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCywAyIt = accounts[5]
		const addressQe126Mx = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressCywAyIt, addressQe126Mx, {from: accounts[0]});
		const addresstXb8SAz = accounts[1]
		const address8785tl = accounts[3]
//		await StakingDextokenOlnWLX.notifyRewards.call({from: accounts[0]});
//		const addressyS8EaLv = await StakingDextokenOlnWLX.setBeneficial.call(addresstXb8SAz, {from: accounts[2]});
//		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(address8785tl, {from: accounts[3]});

		await expect(StakingDextokenOlnWLX.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTAJP2ZL = accounts[5]
		const addressCY01Rdp = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressTAJP2ZL, addressCY01Rdp, {from: accounts[0]});
		const addresstUoL6eK = accounts[5]
		const addressFAgxOxU = accounts[4]
		const addressz8zdB7o = accounts[3]
		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(addresstUoL6eK, {from: accounts[3]});
//		const boolEjvHanr = await StakingDextokenOlnWLX.unfreezeAccount.call(addressFAgxOxU, {from: accounts[0]});
//		const addressnga55Wm = await StakingDextokenOlnWLX.notFrozen.call(addressz8zdB7o, {from: accounts[1]});

		assert.equal(uintIF86nFK, BigInt("0"))
		await expect(StakingDextokenOlnWLX.unfreezeAccount.call(addressFAgxOxU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressS3K5aIe = accounts[5]
		const addressC2hLSCx = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressS3K5aIe, addressC2hLSCx, {from: accounts[0]});
		const addresst49ffcT = "0x0000000000000000000000000000000000000001"
		const uintnVM3da = BigInt("1246")
		const uintnrmCY9I = BigInt("1538")
		const uintrMSqF7l = BigInt("658")
		const uintKkA8swZ = BigInt("375")
		const addressTe6dtcR = accounts[5]
		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(addresst49ffcT, {from: accounts[3]});
//		const uintnzHpaQg = await StakingDextokenOlnWLX.setRewardRound.call(uintKkA8swZ, uintrMSqF7l, uintnrmCY9I, uintnVM3da, {from: accounts[0]});
//		const uintIHOeWgT = await StakingDextokenOlnWLX.stakeOf.call(addressTe6dtcR, {from: accounts[1]});

		assert.equal(uintIF86nFK, BigInt("0"))
		await expect(StakingDextokenOlnWLX.setRewardRound.call(uintKkA8swZ, uintrMSqF7l, uintnrmCY9I, uintnVM3da, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressChNG4tL = accounts[5]
		const addressMeIXrzF = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressChNG4tL, addressMeIXrzF, {from: accounts[0]});
		const addressXjajcSN = accounts[3]
		const uintypwPHnz = await StakingDextokenOlnWLX.totalRewards.call({from: accounts[5]});
		const addressbLsWtXN = await StakingDextokenOlnWLX.setBeneficial.call(addressXjajcSN, {from: accounts[0]});
		const uintPFby6EK = await StakingDextokenOlnWLX.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextokenOlnWLX.notifyRewards.call({from: accounts[0]});

		assert.equal(uintPFby6EK, BigInt("0"))
		assert.equal(uintypwPHnz, BigInt("0"))
		await expect(StakingDextokenOlnWLX.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFF1RZMZ = accounts[5]
		const addressKSAXiTY = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressFF1RZMZ, addressKSAXiTY, {from: accounts[0]});
		const addressvXZMY9N = accounts[4]
		const addressdhYiGiB = accounts[5]
		const uintIF86nFK = await StakingDextokenOlnWLX.rewardOf.call(addressvXZMY9N, {from: accounts[3]});
		const boolVbbNcpn = await StakingDextokenOlnWLX.freezeAccount.call(addressdhYiGiB, {from: accounts[0]});

		assert.equal(boolVbbNcpn, true)
		assert.equal(uintIF86nFK, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressNDWi4qE = accounts[1]
		const addressdQbHLpg = accounts[3]
		const StakingDextokenslZedo = await StakingDextoken.new(addressNDWi4qE, addressdQbHLpg, {from: accounts[2]});
		const uintwK0x6oF = BigInt("1139")
		const addressUFeY8KF = accounts[4]
		const addresspor41lw = accounts[1]
		const uintlFf94cN = await StakingDextokenslZedo.remainingRewards.call({from: accounts[4]});
//		const addressJVBNfd = await StakingDextokenslZedo.capture.call(addressUFeY8KF, uintwK0x6oF, {from: accounts[2]});
//		const uintJnJMDTd = await StakingDextokenslZedo.getClaimOf.call(addresspor41lw, {from: accounts[1]});

		assert.equal(uintlFf94cN, BigInt("0"))
		await expect(StakingDextokenslZedo.capture.call(addressUFeY8KF, uintwK0x6oF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbHAjKF = accounts[5]
		const addresszONOVvP = accounts[3]
		const StakingDextokenOlnWLX = await StakingDextoken.new(addressbHAjKF, addresszONOVvP, {from: accounts[0]});
		const addressZHvoB9M = accounts[0]
		const uinthDWDfD = BigInt("1359")
		const addressUZHcjE = accounts[3]
		const uinti6VboA = BigInt("1187")
		const uinthgoNJJG = await StakingDextokenOlnWLX.getWithdrawalOf.call(addressZHvoB9M, {from: accounts[5]});
//		const addressZsLmjh = await StakingDextokenOlnWLX.capture.call(addressUZHcjE, uinthDWDfD, {from: accounts[0]});
//		const uintPC9RdMr = await StakingDextokenOlnWLX.withdraw.call(uinti6VboA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinthgoNJJG, BigInt("0"))
		await expect(StakingDextokenOlnWLX.capture.call(addressUZHcjE, uinthDWDfD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})