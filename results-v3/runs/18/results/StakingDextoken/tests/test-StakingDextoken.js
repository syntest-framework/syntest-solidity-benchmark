const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressw8I0mi = accounts[0]
		const addresslSrTKSb = accounts[2]
		const StakingDextokenVqiHKX8 = await StakingDextoken.new(addressw8I0mi, addresslSrTKSb, {from: accounts[2]});
		const addressxsjYwFj = accounts[1]
		const addressez7GTRx = "0x0000000000000000000000000000000000000001"
		const addressmpDM1w = await StakingDextokenVqiHKX8.notFrozen.call(addressxsjYwFj, {from: accounts[4]});
		const addressXEF8BYi = await StakingDextokenVqiHKX8.updateReward.call(addressez7GTRx, {from: accounts[5]});
		const uintv6Fbiza = await StakingDextokenVqiHKX8.getTotalStakes.call({from: accounts[3]});
		await StakingDextokenVqiHKX8.claim.call({from: accounts[1]});

		await expect(StakingDextokenVqiHKX8.notFrozen.call(addressxsjYwFj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBbx5oGF = accounts[2]
		const addressBmt3fu0 = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressBbx5oGF, addressBmt3fu0, {from: accounts[2]});
		const addressCxkDLMt = accounts[3]
		const addressbWOQE9j = accounts[2]
		const boolqllDnrq = await StakingDextokenKRNTnQJ.unfreezeAccount.call(addressCxkDLMt, {from: accounts[0]});
		const addressFwzMvKH = await StakingDextokenKRNTnQJ.updateReward.call(addressbWOQE9j, {from: accounts[4]});

		await expect(StakingDextokenKRNTnQJ.unfreezeAccount.call(addressCxkDLMt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFFPSNZL = accounts[4]
		const addressfUlGwc7 = accounts[1]
		const StakingDextokenazgaj1Q = await StakingDextoken.new(addressFFPSNZL, addressfUlGwc7, {from: accounts[4]});
		const address1LMrc5 = accounts[0]
		const uintk0wKyVK = await StakingDextokenazgaj1Q.totalRewards.call({from: accounts[0]});
		const uintOvFmdpZ = await StakingDextokenazgaj1Q.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolt6Zt3sb = await StakingDextokenazgaj1Q.freezeAccount.call(address1LMrc5, {from: accounts[0]});
		const uintWbxVCLD = await StakingDextokenazgaj1Q.rewardPerToken.call({from: accounts[2]});
		await StakingDextokenazgaj1Q.claim.call({from: accounts[2]});

		assert.equal(uintOvFmdpZ, BigInt("0"))
		assert.equal(uintk0wKyVK, BigInt("0"))
		await expect(StakingDextokenazgaj1Q.freezeAccount.call(address1LMrc5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCaHuXvK = accounts[3]
		const addresssKfdqp3 = accounts[5]
		const StakingDextokenVk5rqmc = await StakingDextoken.new(addressCaHuXvK, addresssKfdqp3, {from: accounts[2]});
		const addressXYsXNzR = accounts[2]
		const address0GIqh9 = accounts[5]
		const addressyDaqt0G = accounts[0]
		const uintdNTzgd = await StakingDextokenVk5rqmc.stakeOf.call(addressXYsXNzR, {from: accounts[2]});
		const uintgJvEpvH = await StakingDextokenVk5rqmc.rewardPerToken.call({from: accounts[2]});
		const boolf4OLVp4 = await StakingDextokenVk5rqmc.unfreezeAccount.call(address0GIqh9, {from: accounts[4]});
		const uintRq2wEf = await StakingDextokenVk5rqmc.getClaimOf.call(addressyDaqt0G, {from: accounts[0]});

		assert.equal(uintdNTzgd, BigInt("0"))
		assert.equal(uintgJvEpvH, BigInt("0"))
		await expect(StakingDextokenVk5rqmc.unfreezeAccount.call(address0GIqh9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIVaKJ99 = accounts[5]
		const addressIWA8wor = accounts[3]
		const StakingDextokenfLeIjK1 = await StakingDextoken.new(addressIVaKJ99, addressIWA8wor, {from: accounts[0]});
		const uinthapii55 = BigInt("884")
		const uinttcrsCdp = BigInt("836")
		const uinth0yROlP = BigInt("1014")
		const uintwFDO98 = BigInt("974")
		const addressOQgL93T = accounts[1]
		const uintHBZyxvJ = await StakingDextokenfLeIjK1.setRewardRound.call(uintwFDO98, uinth0yROlP, uinttcrsCdp, uinthapii55, {from: accounts[0]});
		const addressuNnEU6W = await StakingDextokenfLeIjK1.updateReward.call(addressOQgL93T, {from: accounts[4]});
		await StakingDextokenfLeIjK1.notifyRewards.call({from: accounts[3]});

		await expect(StakingDextokenfLeIjK1.updateReward.call(addressOQgL93T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEmNz9tR = "0x0000000000000000000000000000000000000001"
		const addresssTHX44A = accounts[1]
		const StakingDextokenhaisQC = await StakingDextoken.new(addressEmNz9tR, addresssTHX44A, {from: accounts[3]});
		const addressPQwIew5 = accounts[5]
		const uintqnTc9xT = await StakingDextokenhaisQC.getStartTimestamp.call({from: accounts[1]});
		const uintOlsZvIl = await StakingDextokenhaisQC.getStartTimestamp.call({from: accounts[3]});
		const uintu4YFJ43 = await StakingDextokenhaisQC.balanceOf.call(addressPQwIew5, {from: accounts[2]});

		assert.equal(uintOlsZvIl, BigInt("0"))
		assert.equal(uintqnTc9xT, BigInt("0"))
		assert.equal(uintu4YFJ43, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressjZ0WRRJ = accounts[3]
		const addressBnubIFa = accounts[4]
		const StakingDextokeneCriif1 = await StakingDextoken.new(addressjZ0WRRJ, addressBnubIFa, {from: accounts[3]});
		const uintRmPLxNz = BigInt("660")
		const uintfOIrAeX = await StakingDextokeneCriif1.totalRewards.call({from: accounts[5]});
		const uintfgXIgML = await StakingDextokeneCriif1.withdraw.call(uintRmPLxNz, {from: accounts[3]});
		const uintBTG5qme = await StakingDextokeneCriif1.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uintfOIrAeX, BigInt("0"))
		await expect(StakingDextokeneCriif1.withdraw.call(uintRmPLxNz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressiWihII0 = accounts[2]
		const addressRpLUOFv = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressiWihII0, addressRpLUOFv, {from: accounts[2]});
		const addresszGVFNCV = accounts[0]
		const addressgGUZUDU = accounts[4]
		const uintJsEZpeL = await StakingDextokenKRNTnQJ.getWithdrawalOf.call(addresszGVFNCV, {from: accounts[4]});
		const boolqllDnrq = await StakingDextokenKRNTnQJ.unfreezeAccount.call(addressgGUZUDU, {from: accounts[0]});

		assert.equal(uintJsEZpeL, BigInt("0"))
		await expect(StakingDextokenKRNTnQJ.unfreezeAccount.call(addressgGUZUDU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTQsFn2T = accounts[2]
		const addressQMK7DCY = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressTQsFn2T, addressQMK7DCY, {from: accounts[2]});
		const addressQE6mXFt = accounts[4]
		const addressUVx06xv = "0x0000000000000000000000000000000000000001"
		const uintQdWjlHb = await StakingDextokenKRNTnQJ.getClaimOf.call(addressQE6mXFt, {from: accounts[4]});
		const addresspnmuctF = await StakingDextokenKRNTnQJ.setBeneficial.call(addressUVx06xv, {from: accounts[5]});
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});

		assert.equal(uintQdWjlHb, BigInt("0"))
		await expect(StakingDextokenKRNTnQJ.setBeneficial.call(addressUVx06xv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKg2rRRo = accounts[2]
		const addressaqkssr = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressKg2rRRo, addressaqkssr, {from: accounts[2]});
		const uintgxxV6bx = BigInt("471")
		const addressT3viCPK = accounts[4]
		const uintAZgzcWn = await StakingDextokenKRNTnQJ.deposit.call(uintgxxV6bx, {from: accounts[5]});
		const boolqllDnrq = await StakingDextokenKRNTnQJ.unfreezeAccount.call(addressT3viCPK, {from: accounts[0]});

		await expect(StakingDextokenKRNTnQJ.deposit.call(uintgxxV6bx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressobaZ6Ur = accounts[2]
		const addressc2Cy1hp = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressobaZ6Ur, addressc2Cy1hp, {from: accounts[2]});
		const addressbaPFvq4 = accounts[4]
		const uintckNb0xT = await StakingDextokenKRNTnQJ.remainingRewards.call({from: accounts[0]});
		await StakingDextokenKRNTnQJ.claim.call({from: accounts[4]});
		const boolqllDnrq = await StakingDextokenKRNTnQJ.unfreezeAccount.call(addressbaPFvq4, {from: accounts[0]});

		assert.equal(uintckNb0xT, BigInt("0"))
		await expect(StakingDextokenKRNTnQJ.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBrbIXq = accounts[2]
		const addressWGrC39w = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressBrbIXq, addressWGrC39w, {from: accounts[2]});
		const addressCcQlJV6 = "0x0000000000000000000000000000000000000001"
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});
		const uintUqem7BN = await StakingDextokenKRNTnQJ.rewardOf.call(addressCcQlJV6, {from: accounts[3]});

		assert.equal(uintUqem7BN, BigInt("0"))
		assert.equal(uintj5tIIk3, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressKxajoe = accounts[4]
		const addressQJ5j7zM = accounts[5]
		const StakingDextokennuTxiz = await StakingDextoken.new(addressKxajoe, addressQJ5j7zM, {from: "0x0000000000000000000000000000000000000001"});
		const addressP1hEY25 = accounts[2]
		const addressMDZxzHE = accounts[3]
		const addressbUXsswm = await StakingDextokennuTxiz.updateReward.call(addressP1hEY25, {from: accounts[4]});
		const uintK2mgThv = await StakingDextokennuTxiz.lastTimeRewardApplicable.call({from: accounts[1]});
		const boolVoUKuCv = await StakingDextokennuTxiz.unfreezeAccount.call(addressMDZxzHE, {from: accounts[4]});
		await StakingDextokennuTxiz.notifyRewards.call({from: accounts[4]});
		await StakingDextokennuTxiz.notifyRewards.call({from: accounts[3]});
	});

	it('test for StakingDextoken', async () => {
		const addressoACtjg8 = accounts[2]
		const addressCf7Ozt5 = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressoACtjg8, addressCf7Ozt5, {from: accounts[2]});
		const addressuPqh65 = accounts[4]
		const addressRq8YeB3 = accounts[2]
		const boolyeIJObH = await StakingDextokenKRNTnQJ.unfreezeAccount.call(addressuPqh65, {from: accounts[2]});
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});
		const uintes86Rqh = await StakingDextokenKRNTnQJ.rewardOf.call(addressRq8YeB3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenKRNTnQJ.unfreezeAccount.call(addressuPqh65, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstV8otCy = accounts[2]
		const addresso64ijoe = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addresstV8otCy, addresso64ijoe, {from: accounts[2]});
		const uintZkykqq7 = BigInt("2039")
		const addressPiNIErJ = accounts[3]
		const addressTsqsYQ = accounts[2]
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});
		const addresspkfsJzf = await StakingDextokenKRNTnQJ.capture.call(addressPiNIErJ, uintZkykqq7, {from: accounts[2]});
		const addressLcpAAXy = await StakingDextokenKRNTnQJ.setBeneficial.call(addressTsqsYQ, {from: accounts[2]});

		assert.equal(uintj5tIIk3, BigInt("0"))
		await expect(StakingDextokenKRNTnQJ.capture.call(addressPiNIErJ, uintZkykqq7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgSQ76Vc = accounts[2]
		const addressxTJ1aJ = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressgSQ76Vc, addressxTJ1aJ, {from: accounts[2]});
		await StakingDextokenKRNTnQJ.notifyRewards.call({from: accounts[2]});
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});

		await expect(StakingDextokenKRNTnQJ.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEYZHOC = accounts[2]
		const addressAunnr8J = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressEYZHOC, addressAunnr8J, {from: accounts[2]});
		const addressOjbIiFK = accounts[4]
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});
		const boolOslvZfJ = await StakingDextokenKRNTnQJ.freezeAccount.call(addressOjbIiFK, {from: accounts[2]});

		assert.equal(boolOslvZfJ, true)
		assert.equal(uintj5tIIk3, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressjFuAhu = accounts[0]
		const addressd3x5QpQ = accounts[1]
		const StakingDextokenD0qXO6L = await StakingDextoken.new(addressjFuAhu, addressd3x5QpQ, {from: accounts[3]});
		const addressuLuA0O0 = accounts[2]
		const addressQq82NpM = accounts[2]
		const addressOXKvN7j = await StakingDextokenD0qXO6L.setBeneficial.call(addressuLuA0O0, {from: accounts[3]});
		const addressHQVY2Uw = await StakingDextokenD0qXO6L.notFrozen.call(addressQq82NpM, {from: accounts[4]});

		await expect(StakingDextokenD0qXO6L.notFrozen.call(addressQq82NpM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressprdshvO = accounts[2]
		const addressmojEkXP = accounts[3]
		const StakingDextokenKRNTnQJ = await StakingDextoken.new(addressprdshvO, addressmojEkXP, {from: accounts[2]});
		const uintoDMruj3 = BigInt("1566")
		const addressV4NBKK5 = accounts[0]
		const uintj5tIIk3 = await StakingDextokenKRNTnQJ.rewardPerToken.call({from: accounts[0]});
		const address6FiIrP = await StakingDextokenKRNTnQJ.capture.call(addressV4NBKK5, uintoDMruj3, {from: accounts[2]});

		assert.equal(uintj5tIIk3, BigInt("0"))
		await expect(StakingDextokenKRNTnQJ.capture.call(addressV4NBKK5, uintoDMruj3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressDPeoSrd = accounts[0]
		const addressgk1oBb = accounts[4]
		const StakingDextokendPNt9w6 = await StakingDextoken.new(addressDPeoSrd, addressgk1oBb, {from: accounts[2]});
		const addressGgF5oLo = accounts[0]
		const uintdIEDp0d = BigInt("1235")
		const uintj7kEpAK = BigInt("1965")
		const uintkttTwGX = BigInt("431")
		const uintE7uLMzp = BigInt("810")
		const uintBjKUCZ = BigInt("970")
		const addressQZgXEzF = accounts[1]
		const uintRj2RM1u = BigInt("1196")
		const uinti40Wqb1 = BigInt("1025")
		const uintxMgbP8 = BigInt("1004")
		const uintEnkTztj = await StakingDextokendPNt9w6.getWithdrawalOf.call(addressGgF5oLo, {from: accounts[2]});
		const uintblIyFK4 = await StakingDextokendPNt9w6.setRewardRound.call(uintE7uLMzp, uintkttTwGX, uintj7kEpAK, uintdIEDp0d, {from: accounts[2]});
		const addressgoyBg7V = await StakingDextokendPNt9w6.capture.call(addressQZgXEzF, uintBjKUCZ, {from: accounts[5]});
		const uintZRNe0n9 = await StakingDextokendPNt9w6.deposit.call(uintRj2RM1u, {from: accounts[3]});
		const uintsNI2Rs5 = await StakingDextokendPNt9w6.deposit.call(uinti40Wqb1, {from: "0x0000000000000000000000000000000000000001"});
		const uintoz6DiXs = await StakingDextokendPNt9w6.withdraw.call(uintxMgbP8, {from: accounts[0]});

		assert.equal(uintEnkTztj, BigInt("0"))
		await expect(StakingDextokendPNt9w6.setRewardRound.call(uintE7uLMzp, uintkttTwGX, uintj7kEpAK, uintdIEDp0d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})