const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressw7ccTbE = accounts[1]
		const addressqAM5lpL = accounts[5]
		const StakingDextokenShJmTOy = await StakingDextoken.new(addressw7ccTbE, addressqAM5lpL, {from: accounts[1]});
		const addressg0jhl9 = accounts[4]
		const uintHDapdsX = await StakingDextokenShJmTOy.earned.call(addressg0jhl9, {from: accounts[1]});
		await StakingDextokenShJmTOy.notifyRewards.call({from: accounts[3]});
		await StakingDextokenShJmTOy.notifyRewards.call({from: accounts[3]});
		const uintlAAbaZs = await StakingDextokenShJmTOy.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHDapdsX, BigInt("0"))
		await expect(StakingDextokenShJmTOy.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUCLczVj = "0x0000000000000000000000000000000000000001"
		const addressw7UY6WZ = "0x0000000000000000000000000000000000000001"
		const StakingDextokenRwOFsbU = await StakingDextoken.new(addressUCLczVj, addressw7UY6WZ, {from: accounts[2]});
		const uintROHzveJ = BigInt("1840")
		const addressVcHQDZS = accounts[3]
		const addressvnjNyEo = accounts[1]
		const addresse0BtyB1 = accounts[3]
		await StakingDextokenRwOFsbU.claim.call({from: accounts[0]});
		const addressR2o01xD = await StakingDextokenRwOFsbU.capture.call(addressVcHQDZS, uintROHzveJ, {from: accounts[3]});
		const boolINV77y = await StakingDextokenRwOFsbU.unfreezeAccount.call(addressvnjNyEo, {from: accounts[2]});
		const uintjh3iRoB = await StakingDextokenRwOFsbU.rewardOf.call(addresse0BtyB1, {from: accounts[2]});
		await StakingDextokenRwOFsbU.claim.call({from: accounts[3]});
		await StakingDextokenRwOFsbU.notifyRewards.call({from: accounts[4]});

		await expect(StakingDextokenRwOFsbU.claim.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslgt9xPn = accounts[2]
		const addresssaw1kAr = accounts[3]
		const StakingDextokenZjYZcQU = await StakingDextoken.new(addresslgt9xPn, addresssaw1kAr, {from: accounts[1]});
		const addressnhDSTd2 = accounts[0]
		const uintJZbY6Sl = await StakingDextokenZjYZcQU.getWithdrawalOf.call(addressnhDSTd2, {from: accounts[4]});
		await StakingDextokenZjYZcQU.claim.call({from: accounts[3]});

		assert.equal(uintJZbY6Sl, BigInt("0"))
		await expect(StakingDextokenZjYZcQU.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZPyHqua = accounts[5]
		const addressHqxKerK = accounts[0]
		const StakingDextokenYF3Kw8j = await StakingDextoken.new(addressZPyHqua, addressHqxKerK, {from: accounts[0]});
		const addressterwF1G = accounts[5]
		const addressfC8cVxN = accounts[0]
		const uintC5qtIpa = await StakingDextokenYF3Kw8j.earned.call(addressterwF1G, {from: accounts[2]});
		const uintRdYTHeQ = await StakingDextokenYF3Kw8j.totalRewards.call({from: accounts[2]});
		const addressH0Xf0hT = await StakingDextokenYF3Kw8j.updateReward.call(addressfC8cVxN, {from: accounts[0]});

		assert.equal(uintC5qtIpa, BigInt("0"))
		assert.equal(uintRdYTHeQ, BigInt("0"))
		await expect(StakingDextokenYF3Kw8j.updateReward.call(addressfC8cVxN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyRd6egE = accounts[1]
		const addressMzeSuPd = accounts[2]
		const StakingDextokenTz4oQ7 = await StakingDextoken.new(addressyRd6egE, addressMzeSuPd, {from: accounts[0]});
		const addressoO40xuh = accounts[5]
		const addressiyAHLBO = accounts[3]
		const uintTm3r6B = BigInt("1042")
		const addressDsbB5S9 = accounts[4]
		const uintYHmpsaT = await StakingDextokenTz4oQ7.balanceOf.call(addressoO40xuh, {from: accounts[2]});
		const uintImWlR6p = await StakingDextokenTz4oQ7.getWithdrawalOf.call(addressiyAHLBO, {from: accounts[2]});
		const uintAkCEyX = await StakingDextokenTz4oQ7.deposit.call(uintTm3r6B, {from: accounts[1]});
		const uintiSC2dnC = await StakingDextokenTz4oQ7.getWithdrawalOf.call(addressDsbB5S9, {from: accounts[5]});
		const uintaQxHV5 = await StakingDextokenTz4oQ7.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uintImWlR6p, BigInt("0"))
		assert.equal(uintYHmpsaT, BigInt("0"))
		await expect(StakingDextokenTz4oQ7.deposit.call(uintTm3r6B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressufgDefU = accounts[2]
		const addresspxJ1QI = accounts[4]
		const StakingDextokenWd4WYLO = await StakingDextoken.new(addressufgDefU, addresspxJ1QI, {from: accounts[4]});
		const uint8CQkpL = BigInt("815")
		const addresssPZT2hH = accounts[2]
		const addresscM8dy4t = accounts[3]
		const uintwuVCjJE = await StakingDextokenWd4WYLO.totalRewards.call({from: accounts[1]});
		const uintq3MF0a8 = await StakingDextokenWd4WYLO.withdraw.call(uint8CQkpL, {from: accounts[2]});
		const uintKvZJWOL = await StakingDextokenWd4WYLO.getWithdrawalOf.call(addresssPZT2hH, {from: accounts[3]});
		const uintYEXnyVl = await StakingDextokenWd4WYLO.getClaimOf.call(addresscM8dy4t, {from: accounts[1]});

		assert.equal(uintwuVCjJE, BigInt("0"))
		await expect(StakingDextokenWd4WYLO.withdraw.call(uint8CQkpL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressL5F6N6k = "0x0000000000000000000000000000000000000001"
		const addressX87DzcI = accounts[0]
		const StakingDextokenUjYqgWn = await StakingDextoken.new(addressL5F6N6k, addressX87DzcI, {from: accounts[3]});
		const addressy0wTaou = accounts[0]
		const addressj6RaNhd = accounts[3]
		const addressjVs1Pde = accounts[4]
		const addressCkbHE7t = accounts[2]
		const uintjLZySJi = await StakingDextokenUjYqgWn.rewardOf.call(addressy0wTaou, {from: accounts[2]});
		const addressONajf1N = await StakingDextokenUjYqgWn.setBeneficial.call(addressj6RaNhd, {from: "0x0000000000000000000000000000000000000001"});
		const uintDieiJS4 = await StakingDextokenUjYqgWn.totalRewards.call({from: accounts[3]});
		const uintp4pJNIB = await StakingDextokenUjYqgWn.getWithdrawalOf.call(addressjVs1Pde, {from: accounts[0]});
		const addressdDCxXpS = await StakingDextokenUjYqgWn.setBeneficial.call(addressCkbHE7t, {from: accounts[1]});

		assert.equal(uintjLZySJi, BigInt("0"))
		await expect(StakingDextokenUjYqgWn.setBeneficial.call(addressj6RaNhd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBB9TO93 = accounts[1]
		const addresslFUYQuo = accounts[2]
		const StakingDextokenTz4oQ7 = await StakingDextoken.new(addressBB9TO93, addresslFUYQuo, {from: accounts[0]});
		const addressAKeiEsO = accounts[5]
		const addressfU3Hhqq = accounts[0]
		const addressZCiOyUu = accounts[3]
		const uintVUsGfa3 = BigInt("1042")
		const addresswbM6AzJ = accounts[5]
		const addressesj5vD5 = accounts[1]
		const uintYHmpsaT = await StakingDextokenTz4oQ7.balanceOf.call(addressAKeiEsO, {from: accounts[2]});
		const uintJDxiDxs = await StakingDextokenTz4oQ7.getClaimOf.call(addressfU3Hhqq, {from: accounts[4]});
		const uintImWlR6p = await StakingDextokenTz4oQ7.getWithdrawalOf.call(addressZCiOyUu, {from: accounts[2]});
		const uintAkCEyX = await StakingDextokenTz4oQ7.deposit.call(uintVUsGfa3, {from: accounts[1]});
		const uintiSC2dnC = await StakingDextokenTz4oQ7.getWithdrawalOf.call(addresswbM6AzJ, {from: accounts[5]});
		const addresssZXKupQ = await StakingDextokenTz4oQ7.setBeneficial.call(addressesj5vD5, {from: accounts[4]});
		const uintaQxHV5 = await StakingDextokenTz4oQ7.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uintImWlR6p, BigInt("0"))
		assert.equal(uintJDxiDxs, BigInt("0"))
		assert.equal(uintYHmpsaT, BigInt("0"))
		await expect(StakingDextokenTz4oQ7.deposit.call(uintVUsGfa3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVSQPnQY = accounts[4]
		const addresshRBr0tH = "0x0000000000000000000000000000000000000001"
		const StakingDextokenBgwyTgp = await StakingDextoken.new(addressVSQPnQY, addresshRBr0tH, {from: accounts[0]});
		const addressnloBx1m = accounts[4]
		const addressRF9o7UU = accounts[3]
		const uintnmdM8Q2 = BigInt("650")
		const uintQclZMfU = BigInt("1505")
		const addressle8IpK = "0x0000000000000000000000000000000000000001"
		const uintsNay4GR = await StakingDextokenBgwyTgp.getWithdrawalOf.call(addressnloBx1m, {from: accounts[0]});
		const uintjG66CX1 = await StakingDextokenBgwyTgp.totalRewards.call({from: accounts[2]});
		const uintJEf2Blz = await StakingDextokenBgwyTgp.stakeOf.call(addressRF9o7UU, {from: accounts[2]});
		const uint0bdWkB = await StakingDextokenBgwyTgp.withdraw.call(uintnmdM8Q2, {from: accounts[1]});
		const addressJgxCxhx = await StakingDextokenBgwyTgp.capture.call(addressle8IpK, uintQclZMfU, {from: accounts[4]});

		assert.equal(uintJEf2Blz, BigInt("0"))
		assert.equal(uintjG66CX1, BigInt("0"))
		assert.equal(uintsNay4GR, BigInt("0"))
		await expect(StakingDextokenBgwyTgp.withdraw.call(uintnmdM8Q2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressG5AOfb = accounts[1]
		const addressGQdrNCD = accounts[0]
		const StakingDextokenHWflDfv = await StakingDextoken.new(addressG5AOfb, addressGQdrNCD, {from: accounts[3]});
		const uinttpHJeZL = BigInt("364")
		const addressgFYRgw4 = accounts[5]
		const addressGWLXikV = accounts[0]
		const addressoEpsdlz = accounts[1]
		const addressg2g4a2q = accounts[2]
		const addressKHdsaxJ = accounts[2]
		const addressQ0sBDbW = accounts[2]
		const addressHTOiYOY = await StakingDextokenHWflDfv.capture.call(addressgFYRgw4, uinttpHJeZL, {from: accounts[3]});
		const addressuWmuM6m = await StakingDextokenHWflDfv.setBeneficial.call(addressGWLXikV, {from: accounts[4]});
		const uintIoizdUt = await StakingDextokenHWflDfv.earned.call(addressoEpsdlz, {from: accounts[5]});
		const boolarHUFL4 = await StakingDextokenHWflDfv.unfreezeAccount.call(addressg2g4a2q, {from: accounts[4]});
		const uintcpCDv9u = await StakingDextokenHWflDfv.getWithdrawalOf.call(addressKHdsaxJ, {from: accounts[0]});
		const uintQ7eCTAj = await StakingDextokenHWflDfv.stakeOf.call(addressQ0sBDbW, {from: accounts[1]});

		await expect(StakingDextokenHWflDfv.capture.call(addressgFYRgw4, uinttpHJeZL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNPXbvtO = accounts[2]
		const addressWq6SpP = accounts[2]
		const StakingDextokenjKSzNCQ = await StakingDextoken.new(addressNPXbvtO, addressWq6SpP, {from: accounts[2]});
		const addressQICr2V1 = accounts[0]
		const uintLYkMloB = await StakingDextokenjKSzNCQ.getStartTimestamp.call({from: accounts[4]});
		const uintKFdGl4 = await StakingDextokenjKSzNCQ.rewardPerToken.call({from: accounts[2]});
		const uintTlBBWSg = await StakingDextokenjKSzNCQ.rewardOf.call(addressQICr2V1, {from: accounts[1]});

		assert.equal(uintKFdGl4, BigInt("0"))
		assert.equal(uintLYkMloB, BigInt("0"))
		assert.equal(uintTlBBWSg, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressl9I3cIk = accounts[1]
		const addressDEusj3 = accounts[0]
		const StakingDextokenHWflDfv = await StakingDextoken.new(addressl9I3cIk, addressDEusj3, {from: accounts[3]});
		const uintfvJJ3Dq = BigInt("364")
		const addressi2vBqeH = accounts[0]
		const addressgQ8JgPf = accounts[0]
		const addressGqymbWu = accounts[5]
		const addressSYhTtNG = accounts[1]
		const address4orvEK = accounts[5]
		const addressoqUDUL3 = accounts[2]
		const addressHTOiYOY = await StakingDextokenHWflDfv.capture.call(addressi2vBqeH, uintfvJJ3Dq, {from: accounts[3]});
		const addressuWmuM6m = await StakingDextokenHWflDfv.setBeneficial.call(addressgQ8JgPf, {from: accounts[4]});
		const boolO2BY2q = await StakingDextokenHWflDfv.unfreezeAccount.call(addressGqymbWu, {from: accounts[4]});
		const uintIoizdUt = await StakingDextokenHWflDfv.earned.call(addressSYhTtNG, {from: accounts[5]});
		const boolXcJaHov = await StakingDextokenHWflDfv.freezeAccount.call(address4orvEK, {from: accounts[4]});
		const uintcpCDv9u = await StakingDextokenHWflDfv.getWithdrawalOf.call(addressoqUDUL3, {from: accounts[0]});

		await expect(StakingDextokenHWflDfv.capture.call(addressi2vBqeH, uintfvJJ3Dq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKPzfLXl = accounts[2]
		const addressaVym3xm = accounts[3]
		const StakingDextokenZjYZcQU = await StakingDextoken.new(addressKPzfLXl, addressaVym3xm, {from: accounts[1]});
		const addresseqOHxlr = accounts[1]
		const uintUNDKN2R = BigInt("838")
		const addressK3VCTXU = await StakingDextokenZjYZcQU.setBeneficial.call(addresseqOHxlr, {from: accounts[1]});
		const uintD3BXcjq = await StakingDextokenZjYZcQU.withdraw.call(uintUNDKN2R, {from: accounts[1]});
		await StakingDextokenZjYZcQU.claim.call({from: accounts[3]});
		await StakingDextokenZjYZcQU.claim.call({from: accounts[0]});

		await expect(StakingDextokenZjYZcQU.withdraw.call(uintUNDKN2R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfvc4MVy = accounts[2]
		const addressAmYrpM = accounts[5]
		const StakingDextokenBoD9MDi = await StakingDextoken.new(addressfvc4MVy, addressAmYrpM, {from: accounts[3]});
		const addressqIz3osW = accounts[0]
		const addressKlBNksj = accounts[1]
		const uintFGnWfmE = await StakingDextokenBoD9MDi.remainingRewards.call({from: accounts[2]});
		const uintmMRPn1G = await StakingDextokenBoD9MDi.earned.call(addressqIz3osW, {from: "0x0000000000000000000000000000000000000001"});
		const uintEevF4T3 = await StakingDextokenBoD9MDi.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});
		const boolJ13PDN3 = await StakingDextokenBoD9MDi.unfreezeAccount.call(addressKlBNksj, {from: accounts[4]});

		assert.equal(uintEevF4T3, BigInt("0"))
		assert.equal(uintFGnWfmE, BigInt("0"))
		assert.equal(uintmMRPn1G, BigInt("0"))
		await expect(StakingDextokenBoD9MDi.unfreezeAccount.call(addressKlBNksj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLjMrK0y = accounts[2]
		const addressfPf3Q6R = accounts[4]
		const StakingDextokenno4N8Eg = await StakingDextoken.new(addressLjMrK0y, addressfPf3Q6R, {from: "0x0000000000000000000000000000000000000001"});
		const uintofVyS5z = BigInt("1239")
		const addressAnnlu0a = accounts[0]
		const addressFEeIMG = accounts[2]
		const addressEDdKpxm = accounts[4]
		const addressVIBLW3x = await StakingDextokenno4N8Eg.capture.call(addressAnnlu0a, uintofVyS5z, {from: accounts[0]});
		await StakingDextokenno4N8Eg.claim.call({from: accounts[3]});
		const uintFB2hmYY = await StakingDextokenno4N8Eg.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressXhWlUUH = await StakingDextokenno4N8Eg.setBeneficial.call(addressFEeIMG, {from: accounts[0]});
		const uint48ZGUY = await StakingDextokenno4N8Eg.getWithdrawalOf.call(addressEDdKpxm, {from: accounts[5]});
	});

	it('test for StakingDextoken', async () => {
		const addressWwHNSkw = accounts[1]
		const addressSvAYDcy = accounts[0]
		const StakingDextokenHWflDfv = await StakingDextoken.new(addressWwHNSkw, addressSvAYDcy, {from: accounts[3]});
		const uintgVNAeXV = BigInt("364")
		const addresskNUOCTZ = accounts[1]
		const addressFS6FHh6 = accounts[3]
		const addresslAvrxdn = accounts[1]
		const addressZfmurE4 = accounts[1]
		const addressOGyU60h = accounts[2]
		const addressGOj5BeW = accounts[2]
		const addresstkMYKd = accounts[3]
		const addressHTOiYOY = await StakingDextokenHWflDfv.capture.call(addresskNUOCTZ, uintgVNAeXV, {from: accounts[3]});
		const uintwQWgKOU = await StakingDextokenHWflDfv.getClaimOf.call(addressFS6FHh6, {from: accounts[3]});
		const addressuWmuM6m = await StakingDextokenHWflDfv.setBeneficial.call(addresslAvrxdn, {from: accounts[4]});
		const uintgRDwb2A = await StakingDextokenHWflDfv.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintRz76oOg = await StakingDextokenHWflDfv.balanceOf.call(addressZfmurE4, {from: "0x0000000000000000000000000000000000000001"});
		const uintbTbpE6t = await StakingDextokenHWflDfv.getTotalStakes.call({from: accounts[5]});
		const uintIoizdUt = await StakingDextokenHWflDfv.earned.call(addressOGyU60h, {from: accounts[5]});
		const boolarHUFL4 = await StakingDextokenHWflDfv.unfreezeAccount.call(addressGOj5BeW, {from: accounts[4]});
		const uintQ7eCTAj = await StakingDextokenHWflDfv.stakeOf.call(addresstkMYKd, {from: accounts[1]});

		await expect(StakingDextokenHWflDfv.capture.call(addresskNUOCTZ, uintgVNAeXV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresseIBtZJY = accounts[2]
		const addressds6j2kA = accounts[3]
		const StakingDextokenZjYZcQU = await StakingDextoken.new(addresseIBtZJY, addressds6j2kA, {from: accounts[1]});
		const uintE8eRpxg = await StakingDextokenZjYZcQU.remainingRewards.call({from: accounts[2]});
		await StakingDextokenZjYZcQU.notifyRewards.call({from: accounts[1]});
		await StakingDextokenZjYZcQU.claim.call({from: accounts[3]});
		const uintGVnex0j = await StakingDextokenZjYZcQU.getTotalStakes.call({from: accounts[4]});

		assert.equal(uintE8eRpxg, BigInt("0"))
		await expect(StakingDextokenZjYZcQU.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRfBmtE5 = accounts[2]
		const addressPmgc5EA = accounts[3]
		const StakingDextokenZjYZcQU = await StakingDextoken.new(addressRfBmtE5, addressPmgc5EA, {from: accounts[1]});
		const addressytN3huv = accounts[3]
		const uintphLmndY = BigInt("852")
		const boolZE8f95v = await StakingDextokenZjYZcQU.freezeAccount.call(addressytN3huv, {from: accounts[1]});
		const uintD3BXcjq = await StakingDextokenZjYZcQU.withdraw.call(uintphLmndY, {from: accounts[1]});

		assert.equal(boolZE8f95v, true)
		await expect(StakingDextokenZjYZcQU.withdraw.call(uintphLmndY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressp1OB1C = accounts[4]
		const addressHG9nILi = accounts[0]
		const StakingDextokenA4KkX74 = await StakingDextoken.new(addressp1OB1C, addressHG9nILi, {from: accounts[0]});
		const uintcUAiggt = BigInt("1905")
		const uintdZwPwDV = BigInt("2032")
		const uintJvj9jJT = BigInt("922")
		const uintxuxg5zr = BigInt("1020")
		const uintb745BWx = await StakingDextokenA4KkX74.remainingRewards.call({from: accounts[0]});
		const uintqEYDEBB = await StakingDextokenA4KkX74.setRewardRound.call(uintxuxg5zr, uintJvj9jJT, uintdZwPwDV, uintcUAiggt, {from: accounts[0]});
		const uintAB3TqCl = await StakingDextokenA4KkX74.rewardPerToken.call({from: accounts[2]});

		assert.equal(uintb745BWx, BigInt("0"))
		await expect(StakingDextokenA4KkX74.setRewardRound.call(uintxuxg5zr, uintJvj9jJT, uintdZwPwDV, uintcUAiggt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresspXy6Kld = accounts[1]
		const addressBn5Se7 = accounts[0]
		const StakingDextokenHWflDfv = await StakingDextoken.new(addresspXy6Kld, addressBn5Se7, {from: accounts[3]});
		const addressHbJE6R4 = accounts[4]
		const uinthe1XjHo = BigInt("364")
		const addressdOb3AD = accounts[5]
		const boolIzUrmBT = await StakingDextokenHWflDfv.unfreezeAccount.call(addressHbJE6R4, {from: accounts[3]});
		const addressHTOiYOY = await StakingDextokenHWflDfv.capture.call(addressdOb3AD, uinthe1XjHo, {from: accounts[3]});

		await expect(StakingDextokenHWflDfv.unfreezeAccount.call(addressHbJE6R4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})