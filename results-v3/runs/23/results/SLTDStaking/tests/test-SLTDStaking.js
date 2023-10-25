const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingZSxMsfV = await SLTDStaking.new({from: accounts[4]});
		const uintmOCu2AW = BigInt("303")
		await SLTDStakingZSxMsfV.onlyOwner.call({from: accounts[0]});
		await SLTDStakingZSxMsfV.onlyRewardDistribution.call({from: accounts[0]});
		const uint256bjEwIBx = await SLTDStakingZSxMsfV.withdraw.call(uintmOCu2AW, {from: accounts[4]});

		await expect(SLTDStakingZSxMsfV.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingW5poLU = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLy7iXkV = accounts[1]
		const uintuv01gdr = BigInt("595")
		const addresswn6DsyY = await SLTDStakingW5poLU.setRewardDistribution.call(addressLy7iXkV, {from: accounts[0]});
		await SLTDStakingW5poLU.renounceOwnership.call({from: accounts[0]});
		const uint256wpStp8H = await SLTDStakingW5poLU.stake.call(uintuv01gdr, {from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOQ71Xy2 = await SLTDStaking.new({from: accounts[3]});
		const addresslirmHSO = accounts[3]
		const addressLjfcRSb = accounts[1]
		const addressvF778Fq = accounts[3]
		await SLTDStakingOQ71Xy2.getReward.call({from: accounts[5]});
		const addressgLlaSy = await SLTDStakingOQ71Xy2.setSLTD.call(addressLjfcRSb, addresslirmHSO, {from: "0x0000000000000000000000000000000000000001"});
		const addressbMYl5oJ = await SLTDStakingOQ71Xy2.updateReward.call(addressvF778Fq, {from: accounts[2]});
		await SLTDStakingOQ71Xy2.getReward.call({from: accounts[0]});

		await expect(SLTDStakingOQ71Xy2.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakings2Bh3Lv = await SLTDStaking.new({from: accounts[3]});
		const addresscwbNLJL = accounts[2]
		await SLTDStakings2Bh3Lv.getReward.call({from: accounts[1]});
		const uint256Q2VM8BX = await SLTDStakings2Bh3Lv.totalSupply.call({from: accounts[2]});
		const addressdxQVl2p = await SLTDStakings2Bh3Lv.setRewardDistribution.call(addresscwbNLJL, {from: accounts[1]});
		await SLTDStakings2Bh3Lv.onlyOwner.call({from: accounts[1]});
		const boolF7XetGZ = await SLTDStakings2Bh3Lv.isOwner.call({from: accounts[1]});

		await expect(SLTDStakings2Bh3Lv.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyq399wD = await SLTDStaking.new({from: accounts[0]});
		const addressh6lB8Gs = accounts[0]
		const addressHJGAWto = accounts[1]
		const addressMGZrQsQ = await SLTDStakingyq399wD.setRewardDistribution.call(addressh6lB8Gs, {from: accounts[0]});
		const booleRx1oMF = await SLTDStakingyq399wD.isOwner.call({from: accounts[2]});
		const uint256Y7LWpO = await SLTDStakingyq399wD.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressTzff9H = await SLTDStakingyq399wD.updateReward.call(addressHJGAWto, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingyq399wD.onlyOwner.call({from: accounts[0]});

		assert.equal(booleRx1oMF, false)
		assert.equal(uint256Y7LWpO, BigInt("0"))
		await expect(SLTDStakingyq399wD.updateReward.call(addressHJGAWto, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakings2Bh3Lv = await SLTDStaking.new({from: accounts[3]});
		const uintRtK7jPK = BigInt("649")
		const addressbcqeHuY = accounts[3]
		await SLTDStakings2Bh3Lv.getReward.call({from: accounts[1]});
		const uint256Q2VM8BX = await SLTDStakings2Bh3Lv.totalSupply.call({from: accounts[2]});
		const uint256KCvcaD7 = await SLTDStakings2Bh3Lv.withdraw.call(uintRtK7jPK, {from: accounts[3]});
		const addressdxQVl2p = await SLTDStakings2Bh3Lv.setRewardDistribution.call(addressbcqeHuY, {from: accounts[1]});
		await SLTDStakings2Bh3Lv.onlyOwner.call({from: accounts[1]});
		const boolF7XetGZ = await SLTDStakings2Bh3Lv.isOwner.call({from: accounts[1]});

		await expect(SLTDStakings2Bh3Lv.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZSxMsfV = await SLTDStaking.new({from: accounts[4]});
		const uintjwDVAqC = BigInt("654")
		const uintmKCWQXH = BigInt("303")
		const addressKLy37pM = accounts[3]
		const uint256xFweKn = await SLTDStakingZSxMsfV.stake.call(uintjwDVAqC, {from: accounts[0]});
		await SLTDStakingZSxMsfV.onlyOwner.call({from: accounts[0]});
		const uint256bjEwIBx = await SLTDStakingZSxMsfV.withdraw.call(uintmKCWQXH, {from: accounts[4]});
		const addressJw5KeQ = await SLTDStakingZSxMsfV.updateReward.call(addressKLy37pM, {from: accounts[3]});

		await expect(SLTDStakingZSxMsfV.stake.call(uintjwDVAqC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingpWbpgnd = await SLTDStaking.new({from: accounts[3]});
		const uinteZ6CAO = BigInt("700")
		const addressG4Rk9Fl = "0x0000000000000000000000000000000000000001"
		const addressWfIUHSD = accounts[2]
		const uint256Q2iqlJz = await SLTDStakingpWbpgnd.rewardPerToken.call({from: accounts[5]});
		await SLTDStakingpWbpgnd.renounceOwnership.call({from: accounts[3]});
		const uint256l0SGyav = await SLTDStakingpWbpgnd.withdraw.call(uinteZ6CAO, {from: "0x0000000000000000000000000000000000000001"});
		const addressDNicMmx = await SLTDStakingpWbpgnd.updateReward.call(addressG4Rk9Fl, {from: accounts[4]});
		const uint256IqPx92d = await SLTDStakingpWbpgnd.balanceOf.call(addressWfIUHSD, {from: accounts[0]});

		assert.equal(uint256Q2iqlJz, BigInt("0"))
		await expect(SLTDStakingpWbpgnd.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakings2Bh3Lv = await SLTDStaking.new({from: accounts[3]});
		const addressdcKkgmj = accounts[2]
		await SLTDStakings2Bh3Lv.getReward.call({from: accounts[1]});
		await SLTDStakings2Bh3Lv.exit.call({from: accounts[3]});
		const uint256Q2VM8BX = await SLTDStakings2Bh3Lv.totalSupply.call({from: accounts[2]});
		const addressdxQVl2p = await SLTDStakings2Bh3Lv.setRewardDistribution.call(addressdcKkgmj, {from: accounts[1]});
		await SLTDStakings2Bh3Lv.onlyOwner.call({from: accounts[1]});
		const boolF7XetGZ = await SLTDStakings2Bh3Lv.isOwner.call({from: accounts[1]});

		await expect(SLTDStakings2Bh3Lv.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWWw7M6m = await SLTDStaking.new({from: accounts[3]});
		const addressp9LvuGF = accounts[3]
		const addressDJR96H0 = accounts[1]
		const uint256NnRkrs = await SLTDStakingWWw7M6m.earned.call(addressp9LvuGF, {from: "0x0000000000000000000000000000000000000001"});
		const addressW0jCb66 = await SLTDStakingWWw7M6m.transferOwnership.call(addressDJR96H0, {from: accounts[3]});
		const uint256gQpDCLm = await SLTDStakingWWw7M6m.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256NnRkrs, BigInt("0"))
		assert.equal(uint256gQpDCLm, BigInt("0"))
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOQ71Xy2 = await SLTDStaking.new({from: accounts[3]});
		const uintKNqPlyK = BigInt("353")
		const addressTMP9MN = accounts[3]
		const addressoOFMyyo = accounts[1]
		const addressmqeOzyh = accounts[3]
		const addressbaljKaR = accounts[1]
		const addresst5KJPSt = accounts[1]
		await SLTDStakingOQ71Xy2.getReward.call({from: accounts[5]});
		const addressCmQZJz = await SLTDStakingOQ71Xy2.owner.call({from: accounts[0]});
		const uint2566WPkRw = await SLTDStakingOQ71Xy2.withdraw.call(uintKNqPlyK, {from: accounts[0]});
		await SLTDStakingOQ71Xy2.onlyRewardDistribution.call({from: accounts[3]});
		const addressgLlaSy = await SLTDStakingOQ71Xy2.setSLTD.call(addressoOFMyyo, addressTMP9MN, {from: "0x0000000000000000000000000000000000000001"});
		const addressbMYl5oJ = await SLTDStakingOQ71Xy2.updateReward.call(addressmqeOzyh, {from: accounts[2]});
		const addressA06OB2m = await SLTDStakingOQ71Xy2.setSLTD.call(addresst5KJPSt, addressbaljKaR, {from: accounts[0]});
		await SLTDStakingOQ71Xy2.onlyRewardDistribution.call({from: accounts[3]});
		await SLTDStakingOQ71Xy2.getReward.call({from: accounts[0]});

		await expect(SLTDStakingOQ71Xy2.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})