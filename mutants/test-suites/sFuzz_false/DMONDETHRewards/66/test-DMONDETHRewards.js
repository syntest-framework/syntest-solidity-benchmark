const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQ4iJTQH = await DMONDETHRewards.new({from: accounts[4]});
		const addresscWyhT8H = accounts[2]
		const addressoleB0z = accounts[2]
//		const addressy8ieZ3G = await DMONDETHRewardsQ4iJTQH.updateReward.call(addresscWyhT8H, {from: accounts[2]});
//		const addressVUPiCaT = await DMONDETHRewardsQ4iJTQH.setRewardDistribution.call(addressoleB0z, {from: accounts[3]});

		await expect(DMONDETHRewardsQ4iJTQH.updateReward.call(addresscWyhT8H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsRR17MAm = await DMONDETHRewards.new({from: accounts[4]});
		const addressYtikYu7 = accounts[2]
		const uintxBO2J6b = BigInt("102")
		const addressbJ5BRZ = await DMONDETHRewardsRR17MAm.owner.call({from: accounts[4]});
//		await DMONDETHRewardsRR17MAm.onlyOwner.call({from: accounts[2]});
//		const addressKEZcVI = await DMONDETHRewardsRR17MAm.updateReward.call(addressYtikYu7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256kp8GOo = await DMONDETHRewardsRR17MAm.withdraw.call(uintxBO2J6b, {from: accounts[4]});

		assert.equal(addressbJ5BRZ, 0xc473d8AF63a3ea5b571BdAD66beA0d43E6d92CEC)
		await expect(DMONDETHRewardsRR17MAm.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsISEkkvA = await DMONDETHRewards.new({from: accounts[2]});
		const addresseLrCyT6 = accounts[1]
		const uintu058Cyq = BigInt("716")
//		const addressS8maGqr = await DMONDETHRewardsISEkkvA.transferOwnership.call(addresseLrCyT6, {from: accounts[4]});
//		await DMONDETHRewardsISEkkvA.getReward.call({from: accounts[4]});
//		const uint256WyTB9sA = await DMONDETHRewardsISEkkvA.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256hvWYrNh = await DMONDETHRewardsISEkkvA.totalSupply.call({from: accounts[4]});
//		const uint256wxMKajw = await DMONDETHRewardsISEkkvA.withdraw.call(uintu058Cyq, {from: accounts[4]});

		await expect(DMONDETHRewardsISEkkvA.transferOwnership.call(addresseLrCyT6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const boolaIKgSmc = await DMONDETHRewardsXprINaC.isOwner.call({from: accounts[5]});
		const uint256J42MpBV = await DMONDETHRewardsXprINaC.rewardPerToken.call({from: accounts[4]});

		assert.equal(boolaIKgSmc, false)
		assert.equal(uint256J42MpBV, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsn766EFE = await DMONDETHRewards.new({from: accounts[2]});
		const addressd8cXrr0 = accounts[5]
		const uintEzY6AM4 = BigInt("1128")
		const uint256AOcd9Ki = await DMONDETHRewardsn766EFE.balanceOf.call(addressd8cXrr0, {from: accounts[4]});
//		await DMONDETHRewardsn766EFE.checkStart.call({from: accounts[4]});
//		const uint256fwABlAy = await DMONDETHRewardsn766EFE.withdraw.call(uintEzY6AM4, {from: accounts[2]});
//		await DMONDETHRewardsn766EFE.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsn766EFE.exit.call({from: accounts[3]});

		assert.equal(uint256AOcd9Ki, BigInt("0"))
		await expect(DMONDETHRewardsn766EFE.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardseL7qg6 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGADXDbB = BigInt("530")
		const uint256UTkDRb7 = await DMONDETHRewardseL7qg6.notifyRewardAmount.call(uintGADXDbB, {from: accounts[2]});
		await DMONDETHRewardseL7qg6.onlyRewardDistribution.call({from: accounts[3]});
		await DMONDETHRewardseL7qg6.onlyOwner.call({from: accounts[3]});
		const uint256nWowYa = await DMONDETHRewardseL7qg6.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsNfACdGI = await DMONDETHRewards.new({from: accounts[2]});
		const uintKL0JPOX = BigInt("1229")
		const addressaRErwDD = accounts[0]
		const addressPwODSSG = accounts[4]
//		await DMONDETHRewardsNfACdGI.getReward.call({from: accounts[3]});
//		const uint256cQ3oOh = await DMONDETHRewardsNfACdGI.stake.call(uintKL0JPOX, {from: accounts[2]});
//		const addressEj7N7F9 = await DMONDETHRewardsNfACdGI.transferOwnership.call(addressaRErwDD, {from: accounts[2]});
//		await DMONDETHRewardsNfACdGI.checkStart.call({from: accounts[1]});
//		const uint256IaExitm = await DMONDETHRewardsNfACdGI.earned.call(addressPwODSSG, {from: accounts[5]});

		await expect(DMONDETHRewardsNfACdGI.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const boolaIKgSmc = await DMONDETHRewardsXprINaC.isOwner.call({from: accounts[5]});
//		await DMONDETHRewardsXprINaC.exit.call({from: accounts[1]});

		assert.equal(boolaIKgSmc, false)
		await expect(DMONDETHRewardsXprINaC.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const boolaIKgSmc = await DMONDETHRewardsXprINaC.isOwner.call({from: accounts[5]});
//		await DMONDETHRewardsXprINaC.getReward.call({from: accounts[5]});
//		const uint256J42MpBV = await DMONDETHRewardsXprINaC.rewardPerToken.call({from: accounts[4]});
//		const uint256OckCX9s = await DMONDETHRewardsXprINaC.remainingReward.call({from: accounts[4]});

		assert.equal(boolaIKgSmc, false)
		await expect(DMONDETHRewardsXprINaC.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQ4iJTQH = await DMONDETHRewards.new({from: accounts[4]});
		const uintBnJzVOj = BigInt("559")
		const uintrkFZJgs = BigInt("300")
		const uintOEOSO3a = BigInt("1906")
		const addressKjhoXEB = accounts[4]
//		const uint256mVOUmB5 = await DMONDETHRewardsQ4iJTQH.withdraw.call(uintBnJzVOj, {from: accounts[1]});
//		const uint256KIV263k = await DMONDETHRewardsQ4iJTQH.stake.call(uintrkFZJgs, {from: accounts[0]});
//		const uint256VcNkYg = await DMONDETHRewardsQ4iJTQH.withdraw.call(uintOEOSO3a, {from: accounts[4]});
//		const addressVUPiCaT = await DMONDETHRewardsQ4iJTQH.setRewardDistribution.call(addressKjhoXEB, {from: accounts[3]});

		await expect(DMONDETHRewardsQ4iJTQH.withdraw.call(uintBnJzVOj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const uintv7zueJL = BigInt("50")
		const uintewXMfp9 = BigInt("302")
		const uintXb4KvkX = BigInt("1878")
//		const uint256Unc30I = await DMONDETHRewardsXprINaC.notifyRewardAmount.call(uintv7zueJL, {from: accounts[2]});
//		const uint256LzM8zND = await DMONDETHRewardsXprINaC.withdraw.call(uintewXMfp9, {from: accounts[0]});
//		const uint256Z0MojJW = await DMONDETHRewardsXprINaC.totalSupply.call({from: accounts[2]});
//		const uint256BnBlmX1 = await DMONDETHRewardsXprINaC.stake.call(uintXb4KvkX, {from: accounts[1]});

		await expect(DMONDETHRewardsXprINaC.notifyRewardAmount.call(uintv7zueJL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const uintR7qypth = BigInt("441")
		const uint256J42MpBV = await DMONDETHRewardsXprINaC.rewardPerToken.call({from: accounts[4]});
		const uint256hEkpHbc = await DMONDETHRewardsXprINaC.notifyRewardAmount.call(uintR7qypth, {from: accounts[4]});

		assert.equal(uint256J42MpBV, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const addressNVS2jGL = accounts[3]
		const addressIuP5Jra = await DMONDETHRewardsXprINaC.setRewardDistribution.call(addressNVS2jGL, {from: accounts[4]});
		const boolaIKgSmc = await DMONDETHRewardsXprINaC.isOwner.call({from: accounts[5]});
//		await DMONDETHRewardsXprINaC.onlyOwner.call({from: accounts[1]});
//		await DMONDETHRewardsXprINaC.getReward.call({from: accounts[2]});
//		const uint256J42MpBV = await DMONDETHRewardsXprINaC.rewardPerToken.call({from: accounts[4]});

		assert.equal(boolaIKgSmc, false)
		await expect(DMONDETHRewardsXprINaC.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const addressxgfglo = accounts[1]
		const addressXwzoYP7 = accounts[2]
		const uintnYJfIEZ = BigInt("1883")
		const addresstOq6sE7 = await DMONDETHRewardsXprINaC.transferOwnership.call(addressxgfglo, {from: accounts[4]});
		const uint256aUY7ucA = await DMONDETHRewardsXprINaC.earned.call(addressXwzoYP7, {from: accounts[2]});
//		const uint256BnBlmX1 = await DMONDETHRewardsXprINaC.stake.call(uintnYJfIEZ, {from: accounts[1]});

		assert.equal(uint256aUY7ucA, BigInt("0"))
		await expect(DMONDETHRewardsXprINaC.stake.call(uintnYJfIEZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const uintX51PtBr = BigInt("1876")
//		await DMONDETHRewardsXprINaC.renounceOwnership.call({from: accounts[4]});
//		const uint256BnBlmX1 = await DMONDETHRewardsXprINaC.stake.call(uintX51PtBr, {from: accounts[1]});

		await expect(DMONDETHRewardsXprINaC.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXprINaC = await DMONDETHRewards.new({from: accounts[4]});
		const addressofovxC0 = accounts[5]
		const addressrlf185d = await DMONDETHRewardsXprINaC.setStakeAddress.call(addressofovxC0, {from: accounts[4]});
		const uint256J42MpBV = await DMONDETHRewardsXprINaC.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256J42MpBV, BigInt("0"))
	});
})