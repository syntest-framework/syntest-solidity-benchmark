const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressIWxichQ = accounts[1]
		const addressVYdYjU2 = accounts[0]
		const StakingDextokenmcdRXa6 = await StakingDextoken.new(addressIWxichQ, addressVYdYjU2, {from: accounts[4]});
		const addressLJpyC7 = accounts[3]
		const uintUvr8O59 = await StakingDextokenmcdRXa6.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpT44h5m = await StakingDextokenmcdRXa6.unfreezeAccount.call(addressLJpyC7, {from: accounts[5]});

		assert.equal(uintUvr8O59, BigInt("0"))
		await expect(StakingDextokenmcdRXa6.unfreezeAccount.call(addressLJpyC7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address7Yr2uy = accounts[5]
		const addressxvSbMFp = accounts[0]
		const StakingDextokenkUYFy5P = await StakingDextoken.new(address7Yr2uy, addressxvSbMFp, {from: accounts[2]});
		const uintanxq2W = BigInt("1178")
		const addressoUsJo0L = accounts[0]
		await StakingDextokenkUYFy5P.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenkUYFy5P.claim.call({from: accounts[4]});
		const uinth1Vvrb0 = await StakingDextokenkUYFy5P.deposit.call(uintanxq2W, {from: "0x0000000000000000000000000000000000000001"});
		const addressjBa5pl9 = await StakingDextokenkUYFy5P.notFrozen.call(addressoUsJo0L, {from: accounts[4]});

		await expect(StakingDextokenkUYFy5P.claim.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressq4Wyli8 = accounts[0]
		const addresslgQhBV = accounts[3]
		const StakingDextokenmQWjPdG = await StakingDextoken.new(addressq4Wyli8, addresslgQhBV, {from: accounts[5]});
		const addresstFg6N55 = accounts[0]
		const addressMzFagr = accounts[2]
		const uintJlqhZka = await StakingDextokenmQWjPdG.getWithdrawalOf.call(addresstFg6N55, {from: accounts[4]});
		const uintQqbQfyX = await StakingDextokenmQWjPdG.getEndTimestamp.call({from: accounts[0]});
		const addressbn9hFxP = await StakingDextokenmQWjPdG.updateReward.call(addressMzFagr, {from: accounts[0]});

		assert.equal(uintJlqhZka, BigInt("0"))
		assert.equal(uintQqbQfyX, BigInt("0"))
		await expect(StakingDextokenmQWjPdG.updateReward.call(addressMzFagr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressiOBQk5E = accounts[3]
		const addresspnLcOIH = accounts[2]
		const StakingDextokenjxbRGJt = await StakingDextoken.new(addressiOBQk5E, addresspnLcOIH, {from: "0x0000000000000000000000000000000000000001"});
		const addressJt4qU4 = accounts[3]
		const addressxKt84Qc = accounts[2]
		const uintZ1IWes5 = BigInt("1718")
		const addressejLtq5d = accounts[1]
		const boolsel84j1 = await StakingDextokenjxbRGJt.unfreezeAccount.call(addressJt4qU4, {from: accounts[2]});
		await StakingDextokenjxbRGJt.claim.call({from: accounts[2]});
		const boolxSSIX2x = await StakingDextokenjxbRGJt.freezeAccount.call(addressxKt84Qc, {from: accounts[2]});
		const uintFafGQZo = await StakingDextokenjxbRGJt.withdraw.call(uintZ1IWes5, {from: accounts[2]});
		const uintum8SMyc = await StakingDextokenjxbRGJt.earned.call(addressejLtq5d, {from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenjxbRGJt.claim.call({from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressdWmUFGo = accounts[1]
		const addressAocWH7c = accounts[3]
		const StakingDextokenH9EoVH = await StakingDextoken.new(addressdWmUFGo, addressAocWH7c, {from: accounts[2]});
		const uintQVjLaaL = BigInt("1431")
		const addresslHDhFnF = accounts[1]
		const uintAaBq1yk = BigInt("1578")
		const addressDgPa8JV = accounts[0]
		const uintM7ApJ73 = await StakingDextokenH9EoVH.deposit.call(uintQVjLaaL, {from: accounts[0]});
		await StakingDextokenH9EoVH.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const addressQ7adYgt = await StakingDextokenH9EoVH.notFrozen.call(addresslHDhFnF, {from: "0x0000000000000000000000000000000000000001"});
		const uintw61oeQ8 = await StakingDextokenH9EoVH.getTotalStakes.call({from: accounts[0]});
		const addressfZZ6iBC = await StakingDextokenH9EoVH.capture.call(addressDgPa8JV, uintAaBq1yk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenH9EoVH.deposit.call(uintQVjLaaL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressX9Lwgt = accounts[3]
		const addresslFlL0Gy = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressX9Lwgt, addresslFlL0Gy, {from: accounts[3]});
		const addressb0E15Eo = accounts[3]
		const uintPkH1Tdd = await StakingDextokenlhsQ1l1.totalRewards.call({from: accounts[4]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});
		const uintLiXHvRq = await StakingDextokenlhsQ1l1.stakeOf.call(addressb0E15Eo, {from: accounts[5]});

		assert.equal(uintLiXHvRq, BigInt("0"))
		assert.equal(uintNIFAsH0, BigInt("0"))
		assert.equal(uintPkH1Tdd, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressoqJTYrQ = accounts[0]
		const addressW7GKHHw = accounts[1]
		const StakingDextokenbxYPq4a = await StakingDextoken.new(addressoqJTYrQ, addressW7GKHHw, {from: accounts[5]});
		const addressHGWMaYd = accounts[0]
		const uintu0U39I = await StakingDextokenbxYPq4a.getClaimOf.call(addressHGWMaYd, {from: accounts[0]});
		const uintDsNywSU = await StakingDextokenbxYPq4a.getEndTimestamp.call({from: accounts[3]});

		assert.equal(uintDsNywSU, BigInt("0"))
		assert.equal(uintu0U39I, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressQnKJ7Ai = accounts[1]
		const addressllfIj4 = accounts[1]
		const StakingDextokenW22syWy = await StakingDextoken.new(addressQnKJ7Ai, addressllfIj4, {from: accounts[0]});
		const uintvc7PAvh = BigInt("243")
		const addressuJJmKQQ = accounts[3]
		const addressKd9DzXt = accounts[4]
		const uintOcPGUgG = BigInt("356")
		const uintFTJTTJ5 = await StakingDextokenW22syWy.withdraw.call(uintvc7PAvh, {from: accounts[4]});
		const addressZicbM2h = await StakingDextokenW22syWy.updateReward.call(addressuJJmKQQ, {from: accounts[3]});
		const uintATvWqPn = await StakingDextokenW22syWy.stakeOf.call(addressKd9DzXt, {from: accounts[1]});
		const uintJZasg3E = await StakingDextokenW22syWy.withdraw.call(uintOcPGUgG, {from: accounts[3]});

		await expect(StakingDextokenW22syWy.withdraw.call(uintvc7PAvh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWjJ5loA = accounts[3]
		const addressAswLpW1 = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressWjJ5loA, addressAswLpW1, {from: accounts[3]});
		const addressFV73NOl = accounts[3]
		const addressuz6T7E7 = accounts[4]
		const uinteEwrwQ3 = BigInt("500")
		const addressa4Skxz6 = accounts[0]
		const uintPkH1Tdd = await StakingDextokenlhsQ1l1.totalRewards.call({from: accounts[4]});
		const booljXS7F3 = await StakingDextokenlhsQ1l1.unfreezeAccount.call(addressFV73NOl, {from: accounts[3]});
		const uintLiXHvRq = await StakingDextokenlhsQ1l1.stakeOf.call(addressuz6T7E7, {from: accounts[5]});
		const addresstakIJZC = await StakingDextokenlhsQ1l1.capture.call(addressa4Skxz6, uinteEwrwQ3, {from: accounts[3]});

		assert.equal(uintPkH1Tdd, BigInt("0"))
		await expect(StakingDextokenlhsQ1l1.unfreezeAccount.call(addressFV73NOl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbiwpbsZ = accounts[3]
		const address9cz2k7 = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressbiwpbsZ, address9cz2k7, {from: accounts[3]});
		const addressT0rmXan = accounts[1]
		const addressi2Aeehy = accounts[4]
		const uintnpm65fV = await StakingDextokenlhsQ1l1.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintFcIKQvl = await StakingDextokenlhsQ1l1.rewardOf.call(addressT0rmXan, {from: accounts[2]});
		const uintLiXHvRq = await StakingDextokenlhsQ1l1.stakeOf.call(addressi2Aeehy, {from: accounts[5]});

		assert.equal(uintFcIKQvl, BigInt("0"))
		assert.equal(uintLiXHvRq, BigInt("0"))
		assert.equal(uintnpm65fV, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresshKtsatm = accounts[3]
		const addressRnKXNlt = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addresshKtsatm, addressRnKXNlt, {from: accounts[3]});
		const addressSxjqTL9 = accounts[2]
		const addressDHTrtzg = accounts[2]
		const boolycgAmeE = await StakingDextokenlhsQ1l1.freezeAccount.call(addressSxjqTL9, {from: accounts[3]});
		const uintBIq53DM = await StakingDextokenlhsQ1l1.getClaimOf.call(addressDHTrtzg, {from: accounts[1]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolycgAmeE, true)
		assert.equal(uintBIq53DM, BigInt("0"))
		assert.equal(uintNIFAsH0, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressa74gWbX = accounts[3]
		const addressGih4L1X = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressa74gWbX, addressGih4L1X, {from: accounts[3]});
		const uintQ7JUfk = await StakingDextokenlhsQ1l1.remainingRewards.call({from: accounts[2]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});

		assert.equal(uintNIFAsH0, BigInt("0"))
		assert.equal(uintQ7JUfk, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressKPPJ5gR = accounts[3]
		const addressmTxj9UK = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressKPPJ5gR, addressmTxj9UK, {from: accounts[3]});
		const addressYf9b90v = accounts[4]
		const uintFE8OI1h = await StakingDextokenlhsQ1l1.getStartTimestamp.call({from: accounts[5]});
		const uintLiXHvRq = await StakingDextokenlhsQ1l1.stakeOf.call(addressYf9b90v, {from: accounts[5]});

		assert.equal(uintFE8OI1h, BigInt("0"))
		assert.equal(uintLiXHvRq, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressFHcSYlH = accounts[3]
		const addressG3XDV6R = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressFHcSYlH, addressG3XDV6R, {from: accounts[3]});
		const addressVipExdr = accounts[4]
		const addresspF6sSjv = await StakingDextokenlhsQ1l1.setBeneficial.call(addressVipExdr, {from: accounts[3]});
		const uintJM5giMj = await StakingDextokenlhsQ1l1.getStartTimestamp.call({from: accounts[3]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});

		assert.equal(uintJM5giMj, BigInt("0"))
		assert.equal(uintNIFAsH0, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressNEYNYc = accounts[3]
		const addressckB4ur8 = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressNEYNYc, addressckB4ur8, {from: accounts[3]});
		const uintHrXx5ql = BigInt("364")
		const uinthxvx6O = BigInt("1961")
		const uintdmTgnO = BigInt("1139")
		const uintAsSRq21 = BigInt("1400")
		const uintspUxmiX = await StakingDextokenlhsQ1l1.getStartTimestamp.call({from: accounts[2]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});
		const uintEbyod4X = await StakingDextokenlhsQ1l1.setRewardRound.call(uintAsSRq21, uintdmTgnO, uinthxvx6O, uintHrXx5ql, {from: accounts[3]});

		assert.equal(uintNIFAsH0, BigInt("0"))
		assert.equal(uintspUxmiX, BigInt("0"))
		await expect(StakingDextokenlhsQ1l1.setRewardRound.call(uintAsSRq21, uintdmTgnO, uinthxvx6O, uintHrXx5ql, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTXPVjYl = accounts[3]
		const addresshpe3HS3 = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressTXPVjYl, addresshpe3HS3, {from: accounts[3]});
		const uintcUDTL5z = BigInt("1209")
		const addressfvOB9Pb = accounts[0]
		const addressb6Wwl1 = await StakingDextokenlhsQ1l1.capture.call(addressfvOB9Pb, uintcUDTL5z, {from: accounts[3]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});
		const uintQ76Indg = await StakingDextokenlhsQ1l1.totalRewards.call({from: accounts[4]});

		await expect(StakingDextokenlhsQ1l1.capture.call(addressfvOB9Pb, uintcUDTL5z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressj3KVIh8 = accounts[3]
		const addressprvIDtR = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressj3KVIh8, addressprvIDtR, {from: accounts[3]});
		const addressm0szbd = accounts[5]
		const uintPa4W6Aj = BigInt("434")
		const addressHa024SB = accounts[3]
		const uintciSO1ON = await StakingDextokenlhsQ1l1.rewardOf.call(addressm0szbd, {from: accounts[3]});
		const addressOXJiZ59 = await StakingDextokenlhsQ1l1.capture.call(addressHa024SB, uintPa4W6Aj, {from: accounts[3]});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});

		assert.equal(uintciSO1ON, BigInt("0"))
		await expect(StakingDextokenlhsQ1l1.capture.call(addressHa024SB, uintPa4W6Aj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCg9sz9y = accounts[3]
		const addressclHnNpd = accounts[3]
		const StakingDextokenlhsQ1l1 = await StakingDextoken.new(addressCg9sz9y, addressclHnNpd, {from: accounts[3]});
		const addressofQdek3 = accounts[2]
		const uintPYESPNR = await StakingDextokenlhsQ1l1.getWithdrawalOf.call(addressofQdek3, {from: "0x0000000000000000000000000000000000000001"});
		const uintKKjwe8W = await StakingDextokenlhsQ1l1.getEndTimestamp.call({from: accounts[1]});
		await StakingDextokenlhsQ1l1.notifyRewards.call({from: accounts[3]});
		const uintWQezIR6 = await StakingDextokenlhsQ1l1.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNIFAsH0 = await StakingDextokenlhsQ1l1.rewardPerToken.call({from: accounts[0]});

		assert.equal(uintKKjwe8W, BigInt("0"))
		assert.equal(uintPYESPNR, BigInt("0"))
		await expect(StakingDextokenlhsQ1l1.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})