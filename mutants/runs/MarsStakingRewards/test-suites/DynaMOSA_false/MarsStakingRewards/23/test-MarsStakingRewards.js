const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressMPU97fR = accounts[2]
		const addressbdx6GCg = accounts[3]
		const addressTtL9La = accounts[1]
		const MarsStakingRewardssgmf2dL = await MarsStakingRewards.new(addressMPU97fR, addressbdx6GCg, addressTtL9La, {from: accounts[3]});
		const addresslj0xiB = accounts[3]
		const addressc7I28H5 = await MarsStakingRewardssgmf2dL.transferOwnership.call(addresslj0xiB, {from: accounts[5]});
		await MarsStakingRewardssgmf2dL.onlyRewardsDistribution.call({from: accounts[3]});

		await expect(MarsStakingRewardssgmf2dL.transferOwnership.call(addresslj0xiB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYEQFMF = accounts[2]
		const addresspYK0p2g = "0x0000000000000000000000000000000000000001"
		const addressAzHXbIn = accounts[1]
		const MarsStakingRewardsS3uaM9C = await MarsStakingRewards.new(addressYEQFMF, addresspYK0p2g, addressAzHXbIn, {from: accounts[2]});
		const bytefJHPMaM = "0x06150a1d16061e1e121a17080a090a02171c0e14091b0c111a1c1e070a0d0c17"
		const bytenjDiwr7 = "0x1f1c120b02091a1c0f04000115001a1702082003080e190f001b0304100f1f15"
		const uintP9DQ4Uc = BigInt("166")
		const uintBcEbd1D = BigInt("116")
		const uintVSE9OTb = BigInt("586")
		const addressSotKNww = accounts[3]
		await MarsStakingRewardsS3uaM9C.exit.call({from: accounts[3]});
		const uint256PnpJdJG = await MarsStakingRewardsS3uaM9C.stakeWithPermit.call(uintVSE9OTb, uintBcEbd1D, uintP9DQ4Uc, bytenjDiwr7, bytefJHPMaM, {from: accounts[3]});
		const uint256oSb1lX = await MarsStakingRewardsS3uaM9C.balanceOf.call(addressSotKNww, {from: accounts[0]});

		await expect(MarsStakingRewardsS3uaM9C.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUHArAYy = accounts[0]
		const addressBlOLzwg = accounts[4]
		const addressPYOz9FE = accounts[5]
		const MarsStakingRewardsJGWJCpx = await MarsStakingRewards.new(addressUHArAYy, addressBlOLzwg, addressPYOz9FE, {from: "0x0000000000000000000000000000000000000001"});
		const addressnGYChyD = "0x0000000000000000000000000000000000000001"
		const addressbIaqoTc = accounts[5]
		await MarsStakingRewardsJGWJCpx.getReward.call({from: accounts[4]});
		const uint256TScnff = await MarsStakingRewardsJGWJCpx.balanceOf.call(addressnGYChyD, {from: accounts[2]});
		const uint256t7AunYm = await MarsStakingRewardsJGWJCpx.earned.call(addressbIaqoTc, {from: accounts[5]});
		const boolEVCkZlb = await MarsStakingRewardsJGWJCpx.isOwner.call({from: accounts[5]});
		const uint256kttYWzP = await MarsStakingRewardsJGWJCpx.rewardPerToken.call({from: accounts[5]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresspF5AM51 = accounts[0]
		const addresssdDT94 = accounts[1]
		const addressVR493o = accounts[2]
		const MarsStakingRewardsc58HYcZ = await MarsStakingRewards.new(addresspF5AM51, addresssdDT94, addressVR493o, {from: accounts[0]});
		const addressMGezwcM = accounts[4]
		const uintHII1uN4 = BigInt("1947")
		await MarsStakingRewardsc58HYcZ.onlyRewardsDistribution.call({from: accounts[0]});
		await MarsStakingRewardsc58HYcZ.renounceOwnership.call({from: accounts[2]});
		const addressYgJj9Sg = await MarsStakingRewardsc58HYcZ.transferOwnership.call(addressMGezwcM, {from: accounts[1]});
		await MarsStakingRewardsc58HYcZ.nonReentrant.call({from: accounts[4]});
		const uint256teE454P = await MarsStakingRewardsc58HYcZ.withdraw.call(uintHII1uN4, {from: accounts[1]});

		await expect(MarsStakingRewardsc58HYcZ.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstmQMEBR = accounts[3]
		const addressZUgd38u = accounts[2]
		const addressPmgvo0 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardshVLIzRY = await MarsStakingRewards.new(addresstmQMEBR, addressZUgd38u, addressPmgvo0, {from: accounts[1]});
		const uintsQw9h0i = BigInt("1238")
		const uintRecZ1ge = BigInt("688")
		const addressxGWy8vo = accounts[1]
		const uint256F9AeeRV = await MarsStakingRewardshVLIzRY.notifyRewardAmount.call(uintRecZ1ge, uintsQw9h0i, {from: accounts[4]});
		const boolrNsfBO = await MarsStakingRewardshVLIzRY.isOwner.call({from: accounts[0]});
		await MarsStakingRewardshVLIzRY.exit.call({from: accounts[4]});
		const uint256P93AvS0 = await MarsStakingRewardshVLIzRY.earned.call(addressxGWy8vo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pjuCjcZ = await MarsStakingRewardshVLIzRY.getRewardForDuration.call({from: accounts[3]});

		await expect(MarsStakingRewardshVLIzRY.notifyRewardAmount.call(uintRecZ1ge, uintsQw9h0i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYnyxtWl = accounts[0]
		const addressdBUS6SD = accounts[2]
		const addressdeIeWPx = accounts[4]
		const MarsStakingRewardsdmMMp7f = await MarsStakingRewards.new(addressYnyxtWl, addressdBUS6SD, addressdeIeWPx, {from: accounts[2]});
		const uintDXvakvr = BigInt("1345")
		const addressHAKZU9N = accounts[1]
		const uint256jx8J8YP = await MarsStakingRewardsdmMMp7f.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressbxcossz = await MarsStakingRewardsdmMMp7f.inCaseTokensGetStuck.call(addressHAKZU9N, uintDXvakvr, {from: accounts[1]});
		await MarsStakingRewardsdmMMp7f.onlyOwner.call({from: accounts[4]});
		await MarsStakingRewardsdmMMp7f.nonReentrant.call({from: accounts[2]});
		const addressk50MqKe = await MarsStakingRewardsdmMMp7f.owner.call({from: accounts[3]});

		assert.equal(uint256jx8J8YP, BigInt("0"))
		await expect(MarsStakingRewardsdmMMp7f.inCaseTokensGetStuck.call(addressHAKZU9N, uintDXvakvr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresssPlVX4W = accounts[2]
		const addressQuHAyLB = accounts[2]
		const addressX1zc2e = accounts[0]
		const MarsStakingRewardsswsuRUz = await MarsStakingRewards.new(addresssPlVX4W, addressQuHAyLB, addressX1zc2e, {from: accounts[5]});
		const byteLTYeZGG = "0x1b1f191611050b170c131a060b14111f08171c1c010d1c14080a061b021f061f"
		const byteSREDKw = "0x0603011e0b1808180b2001081c1c1b0d0218181d03110a071d1d10040a1e0c1d"
		const uintNace0wb = BigInt("144")
		const uintwnips3t = BigInt("202")
		const uinteeCBYLm = BigInt("1948")
		await MarsStakingRewardsswsuRUz.renounceOwnership.call({from: accounts[5]});
		const uint256gzFggbw = await MarsStakingRewardsswsuRUz.stakeWithPermit.call(uinteeCBYLm, uintwnips3t, uintNace0wb, byteSREDKw, byteLTYeZGG, {from: accounts[4]});
		await MarsStakingRewardsswsuRUz.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pz9o3R = await MarsStakingRewardsswsuRUz.totalSupply.call({from: accounts[2]});
		await MarsStakingRewardsswsuRUz.nonReentrant.call({from: accounts[1]});

		await expect(MarsStakingRewardsswsuRUz.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresshQlFzNJ = accounts[4]
		const addressl6lRnTp = accounts[0]
		const addresswEzhPzK = accounts[2]
		const MarsStakingRewards7pf1AN = await MarsStakingRewards.new(addresshQlFzNJ, addressl6lRnTp, addresswEzhPzK, {from: accounts[3]});
		const uintwOTPYno = BigInt("1347")
		const addressmKH73JV = accounts[1]
		const uintdGy3B7Q = BigInt("1228")
		const uintHMEhcbu = BigInt("806")
		const addressrWqALD = await MarsStakingRewards7pf1AN.owner.call({from: accounts[1]});
		const addressP3cAOe6 = await MarsStakingRewards7pf1AN.inCaseTokensGetStuck.call(addressmKH73JV, uintwOTPYno, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewards7pf1AN.renounceOwnership.call({from: accounts[4]});
		const uint256hLXqS13 = await MarsStakingRewards7pf1AN.notifyRewardAmount.call(uintHMEhcbu, uintdGy3B7Q, {from: accounts[1]});
		await MarsStakingRewards7pf1AN.onlyOwner.call({from: accounts[3]});

		assert.equal(addressrWqALD, 0x09801454a1018b614F5Ab48E5ED7A3Ef44294b3B)
		await expect(MarsStakingRewards7pf1AN.inCaseTokensGetStuck.call(addressmKH73JV, uintwOTPYno, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressu8qpsx = accounts[5]
		const addressDlyTUJ = accounts[0]
		const addressTMo0oGx = accounts[2]
		const MarsStakingRewardsEgp6NKN = await MarsStakingRewards.new(addressu8qpsx, addressDlyTUJ, addressTMo0oGx, {from: accounts[2]});
		const addressOnrmYWy = accounts[0]
		const addresslwbXOhb = accounts[3]
		const addressh11OevU = "0x0000000000000000000000000000000000000001"
		const uint256ISHtRg6 = await MarsStakingRewardsEgp6NKN.earned.call(addressOnrmYWy, {from: accounts[4]});
		const addresseP4ELgw = await MarsStakingRewardsEgp6NKN.transferOwnership.call(addresslwbXOhb, {from: accounts[0]});
		const addressmTxKAvP = await MarsStakingRewardsEgp6NKN.setRewardsDistribution.call(addressh11OevU, {from: accounts[4]});
		const uint256w3GUXH0 = await MarsStakingRewardsEgp6NKN.totalSupply.call({from: accounts[2]});
		await MarsStakingRewardsEgp6NKN.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256ISHtRg6, BigInt("0"))
		await expect(MarsStakingRewardsEgp6NKN.transferOwnership.call(addresslwbXOhb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskT0P23B = accounts[4]
		const addressfhaZrIk = accounts[0]
		const addressDBLHuOG = accounts[2]
		const MarsStakingRewards7pf1AN = await MarsStakingRewards.new(addresskT0P23B, addressfhaZrIk, addressDBLHuOG, {from: accounts[3]});
		const uint256iFf2oDk = await MarsStakingRewards7pf1AN.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewards7pf1AN.renounceOwnership.call({from: accounts[4]});
		await MarsStakingRewards7pf1AN.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256iFf2oDk, BigInt("0"))
		await expect(MarsStakingRewards7pf1AN.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresshPSpwKt = accounts[4]
		const addressakJaonx = accounts[0]
		const addressgUi0CrP = accounts[2]
		const MarsStakingRewards7pf1AN = await MarsStakingRewards.new(addresshPSpwKt, addressakJaonx, addressgUi0CrP, {from: accounts[3]});
		const uintHng14vj = BigInt("35")
		const addressTAsAf7K = accounts[2]
		const addresszUTlOlB = await MarsStakingRewards7pf1AN.inCaseTokensGetStuck.call(addressTAsAf7K, uintHng14vj, {from: accounts[3]});
		await MarsStakingRewards7pf1AN.renounceOwnership.call({from: accounts[4]});

		await expect(MarsStakingRewards7pf1AN.inCaseTokensGetStuck.call(addressTAsAf7K, uintHng14vj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfvj7pjC = accounts[5]
		const addressr4faxIT = accounts[0]
		const addressMISkF12 = accounts[2]
		const MarsStakingRewardsEgp6NKN = await MarsStakingRewards.new(addressfvj7pjC, addressr4faxIT, addressMISkF12, {from: accounts[2]});
		const addressg3rttWk = accounts[0]
		const uint256ISHtRg6 = await MarsStakingRewardsEgp6NKN.earned.call(addressg3rttWk, {from: accounts[4]});
		const uint256w3GUXH0 = await MarsStakingRewardsEgp6NKN.totalSupply.call({from: accounts[2]});
		await MarsStakingRewardsEgp6NKN.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256ISHtRg6, BigInt("0"))
		assert.equal(uint256w3GUXH0, BigInt("0"))
		await expect(MarsStakingRewardsEgp6NKN.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressdeBQYxo = accounts[5]
		const addressA6RT9pM = accounts[0]
		const addresssy9jaE = accounts[2]
		const MarsStakingRewardsEgp6NKN = await MarsStakingRewards.new(addressdeBQYxo, addressA6RT9pM, addresssy9jaE, {from: accounts[2]});
		const addressYgbFTOe = accounts[0]
		const addressB6WXjig = accounts[0]
		const addressrMSA3wG = "0x0000000000000000000000000000000000000002"
		const uint256ISHtRg6 = await MarsStakingRewardsEgp6NKN.earned.call(addressYgbFTOe, {from: accounts[4]});
		const uint256olPA6zG = await MarsStakingRewardsEgp6NKN.balanceOf.call(addressB6WXjig, {from: accounts[5]});
		const addressmTxKAvP = await MarsStakingRewardsEgp6NKN.setRewardsDistribution.call(addressrMSA3wG, {from: accounts[4]});
		const uint256w3GUXH0 = await MarsStakingRewardsEgp6NKN.totalSupply.call({from: accounts[2]});
		await MarsStakingRewardsEgp6NKN.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256ISHtRg6, BigInt("0"))
		assert.equal(uint256olPA6zG, BigInt("0"))
		await expect(MarsStakingRewardsEgp6NKN.setRewardsDistribution.call(addressrMSA3wG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressi6GtSjY = accounts[5]
		const addressoglrwsD = accounts[0]
		const addressbdq9RRz = accounts[2]
		const MarsStakingRewardsEgp6NKN = await MarsStakingRewards.new(addressi6GtSjY, addressoglrwsD, addressbdq9RRz, {from: accounts[2]});
		const addresspMposrD = accounts[0]
		const addressLVqRHe = accounts[0]
		const addressZMFEcS1 = accounts[1]
		const addressECIqxMC = "0x0000000000000000000000000000000000000001"
		const uint256mtlzufv = await MarsStakingRewardsEgp6NKN.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressiWYDEh = await MarsStakingRewardsEgp6NKN.transferOwnership.call(addresspMposrD, {from: accounts[2]});
		const uint256ISHtRg6 = await MarsStakingRewardsEgp6NKN.earned.call(addressLVqRHe, {from: accounts[4]});
		const addresseP4ELgw = await MarsStakingRewardsEgp6NKN.transferOwnership.call(addressZMFEcS1, {from: accounts[0]});
		const addressmTxKAvP = await MarsStakingRewardsEgp6NKN.setRewardsDistribution.call(addressECIqxMC, {from: accounts[4]});
		const uint256w3GUXH0 = await MarsStakingRewardsEgp6NKN.totalSupply.call({from: accounts[2]});
		await MarsStakingRewardsEgp6NKN.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256ISHtRg6, BigInt("0"))
		assert.equal(uint256mtlzufv, BigInt("0"))
		await expect(MarsStakingRewardsEgp6NKN.transferOwnership.call(addressZMFEcS1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslEEp3VM = accounts[4]
		const addresstgIRQbI = accounts[0]
		const addressKYqo3zS = accounts[2]
		const MarsStakingRewards7pf1AN = await MarsStakingRewards.new(addresslEEp3VM, addresstgIRQbI, addressKYqo3zS, {from: accounts[3]});
		const uintMx8VwN = BigInt("1067")
		const addressNmihSse = "0x0000000000000000000000000000000000000001"
		const addressv6qkehN = await MarsStakingRewards7pf1AN.inCaseTokensGetStuck.call(addressNmihSse, uintMx8VwN, {from: accounts[3]});
		await MarsStakingRewards7pf1AN.renounceOwnership.call({from: accounts[4]});
		const uint256YBoSQZZ = await MarsStakingRewards7pf1AN.getRewardForDuration.call({from: accounts[1]});

		await expect(MarsStakingRewards7pf1AN.inCaseTokensGetStuck.call(addressNmihSse, uintMx8VwN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})