const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingiSBSWa7 = await SLTDStaking.new({from: accounts[2]});
		const addressUqFh7nF = accounts[1]
		const uint256xTCvRE2 = await SLTDStakingiSBSWa7.totalSupply.call({from: accounts[0]});
		await SLTDStakingiSBSWa7.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingiSBSWa7.onlyOwner.call({from: accounts[2]});
		const addressg0vjcKX = await SLTDStakingiSBSWa7.setRewardDistribution.call(addressUqFh7nF, {from: accounts[0]});

		assert.equal(uint256xTCvRE2, BigInt("0"))
		await expect(SLTDStakingiSBSWa7.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingshjkB1Z = await SLTDStaking.new({from: accounts[0]});
		const addressPhwfTlf = accounts[3]
		const addressRaUWz0e = accounts[4]
		const addresssFi7MEP = accounts[0]
		const addressucjO4jb = await SLTDStakingshjkB1Z.setSLTD.call(addressRaUWz0e, addressPhwfTlf, {from: accounts[2]});
		const uint256vf7dxxR = await SLTDStakingshjkB1Z.rewardPerToken.call({from: accounts[1]});
		const uint256th8ONl1 = await SLTDStakingshjkB1Z.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Jtd62LP = await SLTDStakingshjkB1Z.earned.call(addresssFi7MEP, {from: accounts[4]});

		await expect(SLTDStakingshjkB1Z.setSLTD.call(addressRaUWz0e, addressPhwfTlf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSNvVSwn = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNBL0nrU = accounts[1]
		const addressiZBGfWD = accounts[2]
		const uintHqZmImh = BigInt("1362")
		const addressvX0esCa = await SLTDStakingSNvVSwn.setSLTD.call(addressiZBGfWD, addressNBL0nrU, {from: accounts[0]});
		await SLTDStakingSNvVSwn.exit.call({from: accounts[2]});
		const uint256SD5qo1 = await SLTDStakingSNvVSwn.withdraw.call(uintHqZmImh, {from: accounts[0]});
		const uint256BeoDwqd = await SLTDStakingSNvVSwn.totalSupply.call({from: accounts[0]});
		const uint256q0z1qM4 = await SLTDStakingSNvVSwn.totalSupply.call({from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingr1P1saj = await SLTDStaking.new({from: accounts[1]});
		const uintS0pMc5 = BigInt("1069")
		const uint256QIW08EL = await SLTDStakingr1P1saj.lastTimeRewardApplicable.call({from: accounts[0]});
		await SLTDStakingr1P1saj.renounceOwnership.call({from: accounts[2]});
		const uint256QN6CPjq = await SLTDStakingr1P1saj.withdraw.call(uintS0pMc5, {from: accounts[4]});

		assert.equal(uint256QIW08EL, BigInt("0"))
		await expect(SLTDStakingr1P1saj.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const addressS9A7VbP = accounts[0]
		const uintUQ7wHZn = BigInt("1550")
		const uintGeUWeEW = BigInt("1291")
		const uint256UbpFdc = await SLTDStakingrHdqt0R.balanceOf.call(addressS9A7VbP, {from: accounts[0]});
		const uint256e24eneo = await SLTDStakingrHdqt0R.stake.call(uintUQ7wHZn, {from: accounts[3]});
		const uint256hCtIkDM = await SLTDStakingrHdqt0R.stake.call(uintGeUWeEW, {from: accounts[4]});

		assert.equal(uint256UbpFdc, BigInt("0"))
		await expect(SLTDStakingrHdqt0R.stake.call(uintUQ7wHZn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const addressrbRp8vq = accounts[0]
		const uintRzoIt11 = BigInt("1524")
		const uintvAYuXDl = BigInt("1291")
		await SLTDStakingrHdqt0R.getReward.call({from: accounts[3]});
		const uint256UbpFdc = await SLTDStakingrHdqt0R.balanceOf.call(addressrbRp8vq, {from: accounts[0]});
		const uint256e24eneo = await SLTDStakingrHdqt0R.stake.call(uintRzoIt11, {from: accounts[3]});
		const uint256hCtIkDM = await SLTDStakingrHdqt0R.stake.call(uintvAYuXDl, {from: accounts[4]});

		await expect(SLTDStakingrHdqt0R.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const uintpicSx0 = BigInt("1884")
		const addressknlCpR7 = accounts[3]
		const addresstgREtvi = accounts[0]
		const addressTrmSvCg = accounts[0]
		const uintT0r6596 = BigInt("1550")
		const uintkM47Vep = BigInt("1291")
		const uint256yXyQvxD = await SLTDStakingrHdqt0R.rewardPerToken.call({from: accounts[2]});
		const uint256LGOEdk = await SLTDStakingrHdqt0R.withdraw.call(uintpicSx0, {from: accounts[2]});
		const addresspMhD0HQ = await SLTDStakingrHdqt0R.setSLTD.call(addresstgREtvi, addressknlCpR7, {from: accounts[4]});
		const uint256UbpFdc = await SLTDStakingrHdqt0R.balanceOf.call(addressTrmSvCg, {from: accounts[0]});
		const uint256e24eneo = await SLTDStakingrHdqt0R.stake.call(uintT0r6596, {from: accounts[3]});
		const uint256hCtIkDM = await SLTDStakingrHdqt0R.stake.call(uintkM47Vep, {from: accounts[4]});

		assert.equal(uint256yXyQvxD, BigInt("0"))
		await expect(SLTDStakingrHdqt0R.withdraw.call(uintpicSx0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const addresszdyY55e = accounts[1]
		const uintI4AwlSs = BigInt("1524")
		const uint256UbpFdc = await SLTDStakingrHdqt0R.balanceOf.call(addresszdyY55e, {from: accounts[0]});
		await SLTDStakingrHdqt0R.exit.call({from: accounts[3]});
		const uint256e24eneo = await SLTDStakingrHdqt0R.stake.call(uintI4AwlSs, {from: accounts[3]});

		assert.equal(uint256UbpFdc, BigInt("0"))
		await expect(SLTDStakingrHdqt0R.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const addressQOVOHta = accounts[3]
		const uintRDkYW0D = BigInt("1833")
		const uintfgzE8Ax = BigInt("88")
		const addressNopHfO5 = await SLTDStakingrHdqt0R.transferOwnership.call(addressQOVOHta, {from: accounts[4]});
		const uint256hCtIkDM = await SLTDStakingrHdqt0R.stake.call(uintRDkYW0D, {from: accounts[4]});
		const uint256MZysi0S = await SLTDStakingrHdqt0R.notifyRewardAmount.call(uintfgzE8Ax, {from: accounts[2]});
		const boolqeQ1ad6 = await SLTDStakingrHdqt0R.isOwner.call({from: accounts[3]});

		await expect(SLTDStakingrHdqt0R.stake.call(uintRDkYW0D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const addresseFy71j7 = accounts[1]
		const addressbfyaVHO = await SLTDStakingrHdqt0R.owner.call({from: accounts[4]});
		const addressqDkXbeb = await SLTDStakingrHdqt0R.setRewardDistribution.call(addresseFy71j7, {from: accounts[3]});
		await SLTDStakingrHdqt0R.getReward.call({from: accounts[3]});

		assert.equal(addressbfyaVHO, 0xEA35e05923AFC4d97680c00255004FA8Ae9D847f)
		await expect(SLTDStakingrHdqt0R.setRewardDistribution.call(addresseFy71j7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrHdqt0R = await SLTDStaking.new({from: accounts[4]});
		const uintP7WK8pc = BigInt("1822")
		const uintF2Tb5S4 = BigInt("1499")
		await SLTDStakingrHdqt0R.renounceOwnership.call({from: accounts[4]});
		const uint256hCtIkDM = await SLTDStakingrHdqt0R.stake.call(uintP7WK8pc, {from: accounts[4]});
		const uint256QUJCv38 = await SLTDStakingrHdqt0R.withdraw.call(uintF2Tb5S4, {from: accounts[0]});

		await expect(SLTDStakingrHdqt0R.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaXf7KNM = await SLTDStaking.new({from: accounts[3]});
		const addresslCTMkhk = accounts[0]
		const addressTO68lwm = accounts[0]
		const addressylmuMsw = accounts[4]
		const addressDI45rPf = await SLTDStakingaXf7KNM.setRewardDistribution.call(addresslCTMkhk, {from: accounts[3]});
		const addressbGsZNDa = await SLTDStakingaXf7KNM.updateReward.call(addressTO68lwm, {from: accounts[3]});
		const addressAQmiMRS = await SLTDStakingaXf7KNM.updateReward.call(addressylmuMsw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingaXf7KNM.updateReward.call(addressTO68lwm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})