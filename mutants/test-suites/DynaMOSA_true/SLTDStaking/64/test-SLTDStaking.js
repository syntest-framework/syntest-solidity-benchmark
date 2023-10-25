const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingL3FJhrb = await SLTDStaking.new({from: accounts[0]});
		const addressrnMxeYF = accounts[0]
		const uintsBcTL3W = BigInt("633")
		const uinti9AXcNR = BigInt("2044")
		const uint256oHs5r5v = await SLTDStakingL3FJhrb.earned.call(addressrnMxeYF, {from: accounts[0]});
//		const uint256z7OErOU = await SLTDStakingL3FJhrb.stake.call(uintsBcTL3W, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FA7o6Ow = await SLTDStakingL3FJhrb.stake.call(uinti9AXcNR, {from: accounts[1]});
//		const uint256LbEzkS = await SLTDStakingL3FJhrb.totalSupply.call({from: accounts[1]});
//		const boolNUn76aT = await SLTDStakingL3FJhrb.isOwner.call({from: accounts[4]});

		assert.equal(uint256oHs5r5v, BigInt("0"))
		await expect(SLTDStakingL3FJhrb.stake.call(uintsBcTL3W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking3cRYKN = await SLTDStaking.new({from: accounts[4]});
		const addresss9t9Rk = accounts[2]
		const addressJWi67Nc = accounts[2]
		const addressKoKoCYx = accounts[4]
		const uintEJbscEY = BigInt("943")
		const uint256isowU0 = await SLTDStaking3cRYKN.lastTimeRewardApplicable.call({from: accounts[5]});
//		const addresszq3lj60 = await SLTDStaking3cRYKN.setSLTD.call(addressJWi67Nc, addresss9t9Rk, {from: accounts[4]});
//		const addresskxefzU8 = await SLTDStaking3cRYKN.setRewardDistribution.call(addressKoKoCYx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FHO5sXM = await SLTDStaking3cRYKN.stake.call(uintEJbscEY, {from: accounts[0]});
//		const boolLvWidoe = await SLTDStaking3cRYKN.isOwner.call({from: accounts[4]});

		assert.equal(uint256isowU0, BigInt("0"))
		await expect(SLTDStaking3cRYKN.setSLTD.call(addressJWi67Nc, addresss9t9Rk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsxzA1BG = await SLTDStaking.new({from: accounts[2]});
		const addresslGTpDDa = accounts[0]
		const uintX8ro5CC = BigInt("2028")
		const uintsjqaXbQ = BigInt("719")
//		const addressMfiayDe = await SLTDStakingsxzA1BG.transferOwnership.call(addresslGTpDDa, {from: accounts[4]});
//		const uint256D819PhW = await SLTDStakingsxzA1BG.withdraw.call(uintX8ro5CC, {from: accounts[2]});
//		const uint256hYe70aZ = await SLTDStakingsxzA1BG.stake.call(uintsjqaXbQ, {from: accounts[0]});

		await expect(SLTDStakingsxzA1BG.transferOwnership.call(addresslGTpDDa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyGAQCl = await SLTDStaking.new({from: accounts[0]});
		const addressU1PSTQN = accounts[1]
		const uint256sHuiO9c = await SLTDStakingyGAQCl.totalSupply.call({from: accounts[5]});
//		await SLTDStakingyGAQCl.exit.call({from: accounts[2]});
//		const addresshGNuir5 = await SLTDStakingyGAQCl.transferOwnership.call(addressU1PSTQN, {from: accounts[4]});

		assert.equal(uint256sHuiO9c, BigInt("0"))
		await expect(SLTDStakingyGAQCl.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiEc3G9m = await SLTDStaking.new({from: accounts[4]});
//		await SLTDStakingiEc3G9m.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDStakingiEc3G9m.onlyOwner.call({from: accounts[1]});

		await expect(SLTDStakingiEc3G9m.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingp7zX34Q = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstZnf6hO = "0x0000000000000000000000000000000000000001"
		const addressNAQanmm = accounts[4]
		await SLTDStakingp7zX34Q.exit.call({from: accounts[3]});
		const addressRlDhcEW = await SLTDStakingp7zX34Q.transferOwnership.call(addresstZnf6hO, {from: accounts[2]});
		await SLTDStakingp7zX34Q.onlyOwner.call({from: accounts[4]});
		const uint256gOGBrMf = await SLTDStakingp7zX34Q.balanceOf.call(addressNAQanmm, {from: accounts[1]});
		const uint256ffwv5We = await SLTDStakingp7zX34Q.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolaqWNC7u = await SLTDStakingp7zX34Q.isOwner.call({from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingKTDkvcU = await SLTDStaking.new({from: accounts[1]});
		const uint7mnvdX = BigInt("1859")
		const uintvTJeHhm = BigInt("956")
//		const uint256FyZcW1J = await SLTDStakingKTDkvcU.withdraw.call(uint7mnvdX, {from: accounts[0]});
//		const uint256p88UGSv = await SLTDStakingKTDkvcU.withdraw.call(uintvTJeHhm, {from: accounts[5]});
//		const addressVOqIAub = await SLTDStakingKTDkvcU.owner.call({from: accounts[1]});
//		const boolgI8RhiH = await SLTDStakingKTDkvcU.isOwner.call({from: accounts[5]});

		await expect(SLTDStakingKTDkvcU.withdraw.call(uint7mnvdX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyGAQCl = await SLTDStaking.new({from: accounts[0]});
		const addressLCSmS1I = accounts[4]
		const addresszPkFPlv = accounts[1]
		const uint256sHuiO9c = await SLTDStakingyGAQCl.totalSupply.call({from: accounts[5]});
		const addressfCAwPN = await SLTDStakingyGAQCl.setRewardDistribution.call(addressLCSmS1I, {from: accounts[0]});
//		await SLTDStakingyGAQCl.exit.call({from: accounts[2]});
//		const addresshGNuir5 = await SLTDStakingyGAQCl.transferOwnership.call(addresszPkFPlv, {from: accounts[4]});
//		await SLTDStakingyGAQCl.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(uint256sHuiO9c, BigInt("0"))
		await expect(SLTDStakingyGAQCl.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyGAQCl = await SLTDStaking.new({from: accounts[0]});
		const addressj1CkwwR = accounts[2]
		const addressFO97nsV = accounts[4]
		const addressRP2qKW0 = accounts[1]
//		await SLTDStakingyGAQCl.getReward.call({from: accounts[0]});
//		await SLTDStakingyGAQCl.exit.call({from: accounts[2]});
//		const address1p0iCQ = await SLTDStakingyGAQCl.setSLTD.call(addressFO97nsV, addressj1CkwwR, {from: accounts[3]});
//		const addresshGNuir5 = await SLTDStakingyGAQCl.transferOwnership.call(addressRP2qKW0, {from: accounts[4]});

		await expect(SLTDStakingyGAQCl.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyGAQCl = await SLTDStaking.new({from: accounts[0]});
		const addressgM2U0di = accounts[4]
		const addressGoWFsb = accounts[2]
		const addressXQ0yE4 = accounts[4]
		const addressQySYvWT = "0x0000000000000000000000000000000000000001"
		const addressBwHGXX = accounts[2]
		const addressvYKj5JP = await SLTDStakingyGAQCl.owner.call({from: accounts[5]});
//		await SLTDStakingyGAQCl.getReward.call({from: accounts[0]});
//		await SLTDStakingyGAQCl.exit.call({from: accounts[2]});
//		const addressSoJdolF = await SLTDStakingyGAQCl.transferOwnership.call(addressgM2U0di, {from: accounts[0]});
//		const address1p0iCQ = await SLTDStakingyGAQCl.setSLTD.call(addressXQ0yE4, addressGoWFsb, {from: accounts[3]});
//		const uint256HOadpAM = await SLTDStakingyGAQCl.rewardPerToken.call({from: accounts[3]});
//		const addressfsIpsG = await SLTDStakingyGAQCl.updateReward.call(addressQySYvWT, {from: accounts[1]});
//		const addresshGNuir5 = await SLTDStakingyGAQCl.transferOwnership.call(addressBwHGXX, {from: accounts[4]});

		assert.equal(addressvYKj5JP, 0x06b09Cd19B50A7B8B78c93302051C5EEADd681DA)
		await expect(SLTDStakingyGAQCl.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyGAQCl = await SLTDStaking.new({from: accounts[0]});
		const addressf6nsMQt = accounts[4]
		const addressayHiga7 = accounts[2]
		const addressSJTTtoo = accounts[4]
		const addresstXSwVc7 = "0x0000000000000000000000000000000000000001"
		const addresslVtWXi = "0x0000000000000000000000000000000000000001"
		const addressxaot0Qp = accounts[2]
		const addressUk3dFsx = "0x0000000000000000000000000000000000000001"
//		await SLTDStakingyGAQCl.getReward.call({from: accounts[0]});
//		const addressSoJdolF = await SLTDStakingyGAQCl.transferOwnership.call(addressf6nsMQt, {from: accounts[0]});
//		const address1p0iCQ = await SLTDStakingyGAQCl.setSLTD.call(addressSJTTtoo, addressayHiga7, {from: accounts[3]});
//		const uint256HOadpAM = await SLTDStakingyGAQCl.rewardPerToken.call({from: accounts[3]});
//		const addressfsIpsG = await SLTDStakingyGAQCl.updateReward.call(addresstXSwVc7, {from: accounts[1]});
//		const addressrWIOFVM = await SLTDStakingyGAQCl.setRewardDistribution.call(addresslVtWXi, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshGNuir5 = await SLTDStakingyGAQCl.transferOwnership.call(addressxaot0Qp, {from: accounts[4]});
//		const addressPvaWhqH = await SLTDStakingyGAQCl.updateReward.call(addressUk3dFsx, {from: accounts[3]});

		await expect(SLTDStakingyGAQCl.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyGAQCl = await SLTDStaking.new({from: accounts[0]});
		const uinteW1GmLE = BigInt("706")
		const addresseICssqt = accounts[1]
//		await SLTDStakingyGAQCl.getReward.call({from: accounts[0]});
//		await SLTDStakingyGAQCl.renounceOwnership.call({from: accounts[0]});
//		const uint256O5ZsBDJ = await SLTDStakingyGAQCl.stake.call(uinteW1GmLE, {from: accounts[0]});
//		const addresshGNuir5 = await SLTDStakingyGAQCl.transferOwnership.call(addresseICssqt, {from: accounts[4]});

		await expect(SLTDStakingyGAQCl.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})