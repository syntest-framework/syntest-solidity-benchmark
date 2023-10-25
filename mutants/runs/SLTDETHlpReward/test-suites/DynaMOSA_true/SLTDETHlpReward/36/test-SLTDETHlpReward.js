const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRH0xOvG = await SLTDETHlpReward.new({from: accounts[2]});
		const addressPSYOIL8 = accounts[1]
		const uint5QARUt = BigInt("1872")
		const uintB8JvEvh = BigInt("1174")
		const uintTis5YCD = BigInt("504")
		const uint256CL4hONK = await SLTDETHlpRewardRH0xOvG.balanceOf.call(addressPSYOIL8, {from: accounts[2]});
		const uint256QlzMpT9 = await SLTDETHlpRewardRH0xOvG.notifyRewardAmount.call(uint5QARUt, {from: accounts[4]});
		await SLTDETHlpRewardRH0xOvG.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256b4UNWBH = await SLTDETHlpRewardRH0xOvG.withdraw.call(uintB8JvEvh, {from: accounts[3]});
		const uint256vqEF9W2 = await SLTDETHlpRewardRH0xOvG.stake.call(uintTis5YCD, {from: accounts[3]});

		assert.equal(uint256CL4hONK, BigInt("0"))
		await expect(SLTDETHlpRewardRH0xOvG.notifyRewardAmount.call(uint5QARUt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQO6ABcE = await SLTDETHlpReward.new({from: accounts[1]});
		const uinthTa7Nog = BigInt("1923")
		const addressXiQnsp9 = accounts[0]
		const uint256d6teK0b = await SLTDETHlpRewardQO6ABcE.stake.call(uinthTa7Nog, {from: accounts[3]});
		const uint256mF2awLF = await SLTDETHlpRewardQO6ABcE.earned.call(addressXiQnsp9, {from: accounts[4]});

		await expect(SLTDETHlpRewardQO6ABcE.stake.call(uinthTa7Nog, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardu2a537q = await SLTDETHlpReward.new({from: accounts[3]});
		const addressAnYjCHx = "0x0000000000000000000000000000000000000001"
		const uintnxZsMIJ = BigInt("1643")
		await SLTDETHlpRewardu2a537q.renounceOwnership.call({from: accounts[0]});
		await SLTDETHlpRewardu2a537q.getReward.call({from: accounts[5]});
		const addresscCJyjqt = await SLTDETHlpRewardu2a537q.updateReward.call(addressAnYjCHx, {from: accounts[0]});
		await SLTDETHlpRewardu2a537q.exit.call({from: accounts[0]});
		const uint256T5GzOPn = await SLTDETHlpRewardu2a537q.withdraw.call(uintnxZsMIJ, {from: accounts[4]});

		await expect(SLTDETHlpRewardu2a537q.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWJxeWYM = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJuKrNSE = accounts[0]
		await SLTDETHlpRewardWJxeWYM.getReward.call({from: accounts[3]});
		const addressicj9e5d = await SLTDETHlpRewardWJxeWYM.setRewardDistribution.call(addressJuKrNSE, {from: accounts[0]});
		await SLTDETHlpRewardWJxeWYM.exit.call({from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardB4tKtos = await SLTDETHlpReward.new({from: accounts[3]});
		const uintpTde1tW = BigInt("681")
		const boolubGAuLC = await SLTDETHlpRewardB4tKtos.isOwner.call({from: accounts[0]});
		const addressue1NYkj = await SLTDETHlpRewardB4tKtos.owner.call({from: accounts[2]});
		const uint256zVSJDV6 = await SLTDETHlpRewardB4tKtos.setStartTime.call(uintpTde1tW, {from: accounts[1]});
		const addressVDlCgEd = await SLTDETHlpRewardB4tKtos.owner.call({from: accounts[0]});

		assert.equal(addressue1NYkj, 0x400b1687C1066F5E472726951517c7F5E774cdD7)
		assert.equal(boolubGAuLC, false)
		await expect(SLTDETHlpRewardB4tKtos.setStartTime.call(uintpTde1tW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardHK4gVCx = await SLTDETHlpReward.new({from: accounts[4]});
		const uintIVkOyUd = BigInt("1395")
		const addressGzuj9N = accounts[1]
		const uintDxyVvDX = BigInt("708")
		const uint256d6omiMq = await SLTDETHlpRewardHK4gVCx.withdraw.call(uintIVkOyUd, {from: accounts[2]});
		const addressJcDw6R7 = await SLTDETHlpRewardHK4gVCx.setRewardDistribution.call(addressGzuj9N, {from: "0x0000000000000000000000000000000000000001"});
		const uint256M6PcBm = await SLTDETHlpRewardHK4gVCx.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256ngPV1sK = await SLTDETHlpRewardHK4gVCx.stake.call(uintDxyVvDX, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardHK4gVCx.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDETHlpRewardHK4gVCx.withdraw.call(uintIVkOyUd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRH0xOvG = await SLTDETHlpReward.new({from: accounts[2]});
		const addresskR7rUyo = accounts[1]
		const uintTYwlZfw = BigInt("1174")
		const address6cjQiM = "0x0000000000000000000000000000000000000001"
		const uintzC1Hk84 = BigInt("504")
		const uint256CL4hONK = await SLTDETHlpRewardRH0xOvG.balanceOf.call(addresskR7rUyo, {from: accounts[2]});
		await SLTDETHlpRewardRH0xOvG.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256b4UNWBH = await SLTDETHlpRewardRH0xOvG.withdraw.call(uintTYwlZfw, {from: accounts[3]});
		const uint256mki85Am = await SLTDETHlpRewardRH0xOvG.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressAiyAL94 = await SLTDETHlpRewardRH0xOvG.updateReward.call(address6cjQiM, {from: accounts[4]});
		const uint256vqEF9W2 = await SLTDETHlpRewardRH0xOvG.stake.call(uintzC1Hk84, {from: accounts[3]});

		assert.equal(uint256CL4hONK, BigInt("0"))
		await expect(SLTDETHlpRewardRH0xOvG.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwRABcxw = await SLTDETHlpReward.new({from: accounts[4]});
		const addressIMfliGg = accounts[4]
		const addressqVeqafo = "0x0000000000000000000000000000000000000001"
		await SLTDETHlpRewardwRABcxw.getReward.call({from: accounts[4]});
		const uint256O7l4AIZ = await SLTDETHlpRewardwRABcxw.earned.call(addressIMfliGg, {from: accounts[1]});
		await SLTDETHlpRewardwRABcxw.getReward.call({from: accounts[0]});
		const addressG2ObnS3 = await SLTDETHlpRewardwRABcxw.updateReward.call(addressqVeqafo, {from: accounts[1]});

		await expect(SLTDETHlpRewardwRABcxw.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardw0LTxtc = await SLTDETHlpReward.new({from: accounts[5]});
		await SLTDETHlpRewardw0LTxtc.getReward.call({from: accounts[3]});
		const uint256Yx3O4GM = await SLTDETHlpRewardw0LTxtc.totalSupply.call({from: accounts[3]});
		const uint256A3HQPIo = await SLTDETHlpRewardw0LTxtc.remainingReward.call({from: accounts[3]});

		await expect(SLTDETHlpRewardw0LTxtc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddUQNQu5 = await SLTDETHlpReward.new({from: accounts[4]});
		await SLTDETHlpRewarddUQNQu5.exit.call({from: accounts[1]});
		await SLTDETHlpRewarddUQNQu5.onlyOwner.call({from: accounts[0]});

		await expect(SLTDETHlpRewarddUQNQu5.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwRABcxw = await SLTDETHlpReward.new({from: accounts[4]});
		const addressAuziRSb = accounts[1]
		const addressmelsip3 = accounts[2]
		const addresseIuuwn6 = accounts[4]
		const addressITQkq0x = "0x0000000000000000000000000000000000000000"
		await SLTDETHlpRewardwRABcxw.getReward.call({from: accounts[4]});
		const addressXSyhywJ = await SLTDETHlpRewardwRABcxw.transferOwnership.call(addressAuziRSb, {from: accounts[4]});
		const addressZONp4b = await SLTDETHlpRewardwRABcxw.setRewardDistribution.call(addressmelsip3, {from: accounts[1]});
		const uint256O7l4AIZ = await SLTDETHlpRewardwRABcxw.earned.call(addresseIuuwn6, {from: accounts[1]});
		await SLTDETHlpRewardwRABcxw.getReward.call({from: accounts[0]});
		const addressG2ObnS3 = await SLTDETHlpRewardwRABcxw.updateReward.call(addressITQkq0x, {from: accounts[1]});

		await expect(SLTDETHlpRewardwRABcxw.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQO6ABcE = await SLTDETHlpReward.new({from: accounts[1]});
		const addressmRz6yNs = accounts[1]
		const addressXQTsIfz = accounts[2]
		const uint256CPUF46f = await SLTDETHlpRewardQO6ABcE.totalSupply.call({from: accounts[3]});
		const address4y6Pe8 = await SLTDETHlpRewardQO6ABcE.setRewardDistribution.call(addressmRz6yNs, {from: accounts[1]});
		const boolgif1Sy = await SLTDETHlpRewardQO6ABcE.isOwner.call({from: accounts[0]});
		await SLTDETHlpRewardQO6ABcE.onlyRewardDistribution.call({from: accounts[0]});
		const addresshnfSMaI = await SLTDETHlpRewardQO6ABcE.transferOwnership.call(addressXQTsIfz, {from: accounts[3]});

		assert.equal(boolgif1Sy, false)
		assert.equal(uint256CPUF46f, BigInt("0"))
		await expect(SLTDETHlpRewardQO6ABcE.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQO6ABcE = await SLTDETHlpReward.new({from: accounts[1]});
		const uintouvZDLy = BigInt("6")
		const uintT9gJna = BigInt("1926")
		const uintZUzDNjV = BigInt("932")
		const uint256ThDj0Fy = await SLTDETHlpRewardQO6ABcE.notifyRewardAmount.call(uintouvZDLy, {from: accounts[1]});
		const uint256d6teK0b = await SLTDETHlpRewardQO6ABcE.stake.call(uintT9gJna, {from: accounts[3]});
		const uint256trCo2Ij = await SLTDETHlpRewardQO6ABcE.withdraw.call(uintZUzDNjV, {from: accounts[4]});

		await expect(SLTDETHlpRewardQO6ABcE.stake.call(uintT9gJna, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQO6ABcE = await SLTDETHlpReward.new({from: accounts[1]});
		const uinttpEQPx1 = BigInt("6")
		const addressc7fgL7 = accounts[5]
		const uintsI9j544 = BigInt("1926")
		const uintkUJkXs = BigInt("959")
		const uinteyt7Pkw = BigInt("1858")
		const addressX7UZnrI = accounts[5]
		const uint256HHZ4laZ = await SLTDETHlpRewardQO6ABcE.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ThDj0Fy = await SLTDETHlpRewardQO6ABcE.notifyRewardAmount.call(uinttpEQPx1, {from: accounts[1]});
		await SLTDETHlpRewardQO6ABcE.getReward.call({from: accounts[5]});
		const addressi2XmQHc = await SLTDETHlpRewardQO6ABcE.setStakeAddress.call(addressc7fgL7, {from: accounts[1]});
		const uint256d6teK0b = await SLTDETHlpRewardQO6ABcE.stake.call(uintsI9j544, {from: accounts[3]});
		const uint256trCo2Ij = await SLTDETHlpRewardQO6ABcE.withdraw.call(uintkUJkXs, {from: accounts[4]});
		const uint256XbaMNZ3 = await SLTDETHlpRewardQO6ABcE.withdraw.call(uinteyt7Pkw, {from: accounts[0]});
		await SLTDETHlpRewardQO6ABcE.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const addresslSv7evu = await SLTDETHlpRewardQO6ABcE.updateReward.call(addressX7UZnrI, {from: accounts[2]});
		await SLTDETHlpRewardQO6ABcE.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256HHZ4laZ, BigInt("0"))
		await expect(SLTDETHlpRewardQO6ABcE.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})