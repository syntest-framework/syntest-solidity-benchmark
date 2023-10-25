const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3q0ewRcJ = await YRX3.new({from: accounts[2]});
		const addressD2LBYmb = accounts[4]
		const addressJDE8nN5 = accounts[4]
		const uintvb4DRPF = BigInt("1434")
		const addressNoFkteM = accounts[5]
//		await YRX3q0ewRcJ.onlyOwner.call({from: accounts[2]});
//		const boolBixhkWY = await YRX3q0ewRcJ.isOwner.call({from: accounts[0]});
//		const uint256yyWwTGe = await YRX3q0ewRcJ.earned.call(addressD2LBYmb, {from: accounts[1]});
//		const addressldXMDjr = await YRX3q0ewRcJ.transferOwnership.call(addressJDE8nN5, {from: accounts[3]});
//		const uint256XLlVDK = await YRX3q0ewRcJ.withdraw.call(uintvb4DRPF, {from: accounts[5]});
//		const addresslZjePeq = await YRX3q0ewRcJ.toPayable.call(addressNoFkteM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3q0ewRcJ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3amE039c = await YRX3.new({from: accounts[5]});
		const uint256QH6AfuG = await YRX3amE039c.totalSupply.call({from: accounts[2]});
		const uint256osZoStm = await YRX3amE039c.rewardPerToken.call({from: accounts[0]});
		const uint256wpf8DOi = await YRX3amE039c.totalSupply.call({from: accounts[1]});

		assert.equal(uint256QH6AfuG, BigInt("0"))
		assert.equal(uint256osZoStm, BigInt("0"))
		assert.equal(uint256wpf8DOi, BigInt("0"))
	});

	it('test for YRX3', async () => {
		const YRX3OsfmtxJ = await YRX3.new({from: accounts[0]});
		const addressUlarIbN = accounts[1]
		const uint256KZNK2Ec = await YRX3OsfmtxJ.earned.call(addressUlarIbN, {from: accounts[0]});
//		await YRX3OsfmtxJ.onlyRewardDistribution.call({from: accounts[2]});
//		await YRX3OsfmtxJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KZNK2Ec, BigInt("0"))
		await expect(YRX3OsfmtxJ.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Srz869G = await YRX3.new({from: accounts[4]});
		const uintmSyWbbA = BigInt("1030")
//		const uint256pIW0n7u = await YRX3Srz869G.stake.call(uintmSyWbbA, {from: accounts[2]});
//		const uint256bQNtHgf = await YRX3Srz869G.rewardPerToken.call({from: accounts[2]});

		await expect(YRX3Srz869G.stake.call(uintmSyWbbA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OnC0au1 = await YRX3.new({from: accounts[5]});
		const uintUt5l6Di = BigInt("1670")
//		const uint256Z78skP8 = await YRX3OnC0au1.withdraw.call(uintUt5l6Di, {from: accounts[0]});
//		await YRX3OnC0au1.onlyRewardDistribution.call({from: accounts[0]});
//		const boolva3Yb52 = await YRX3OnC0au1.isOwner.call({from: accounts[2]});

		await expect(YRX3OnC0au1.withdraw.call(uintUt5l6Di, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tcas8In = await YRX3.new({from: accounts[1]});
		const addressJ5UaDRz = accounts[4]
		const addressn4mNTGr = accounts[3]
//		await YRX3tcas8In.notifyRewardAmount.call({from: accounts[0]});
//		const addressmGQv5IB = await YRX3tcas8In.updateReward.call(addressJ5UaDRz, {from: accounts[2]});
//		const addressqWVwt3i = await YRX3tcas8In.setRewardDistribution.call(addressn4mNTGr, {from: accounts[3]});

		await expect(YRX3tcas8In.notifyRewardAmount.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX357Yksg = await YRX3.new({from: accounts[1]});
		const addressrWu5Wpx = accounts[1]
//		const addresswsfPmT = await YRX357Yksg.transferOwnership.call(addressrWu5Wpx, {from: accounts[2]});
//		await YRX357Yksg.onlyRewardDistribution.call({from: accounts[0]});

		await expect(YRX357Yksg.transferOwnership.call(addressrWu5Wpx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SfDYr2B = await YRX3.new({from: accounts[4]});
		const addressFrnsJ14 = accounts[4]
		const addressgf3RNaR = accounts[4]
		const addressWJx77xS = await YRX3SfDYr2B.owner.call({from: accounts[2]});
//		await YRX3SfDYr2B.checkNextEpoch.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oG8Qmvu = await YRX3SfDYr2B.earned.call(addressFrnsJ14, {from: accounts[2]});
//		const addressksVcjyx = await YRX3SfDYr2B.transferOwnership.call(addressgf3RNaR, {from: accounts[4]});
//		const uint256LbhnbMD = await YRX3SfDYr2B.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressWJx77xS, 0x9A28700865CA96C46D92FF17eBf2d785AE7F0c5B)
		await expect(YRX3SfDYr2B.checkNextEpoch.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Srz869G = await YRX3.new({from: accounts[4]});
		const addressRNhLPT = accounts[3]
		const uintA5eqhrU = BigInt("1740")
		const uint256oOf3JAu = await YRX3Srz869G.earned.call(addressRNhLPT, {from: accounts[1]});
//		await YRX3Srz869G.exit.call({from: accounts[3]});
//		const uint256pIW0n7u = await YRX3Srz869G.stake.call(uintA5eqhrU, {from: accounts[2]});
//		const uint256bQNtHgf = await YRX3Srz869G.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256oOf3JAu, BigInt("0"))
		await expect(YRX3Srz869G.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pCBUEq = await YRX3.new({from: accounts[1]});
		const uintPx5TBa = BigInt("394")
		const uintH4b0bj = BigInt("503")
		const uint256tsgWX5r = await YRX3pCBUEq.lastTimeRewardApplicable.call({from: accounts[2]});
//		await YRX3pCBUEq.getReward.call({from: accounts[3]});
//		const uint256nt50x69 = await YRX3pCBUEq.stake.call(uintPx5TBa, {from: accounts[1]});
//		const uint256HOxQdM = await YRX3pCBUEq.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256vPydNeW = await YRX3pCBUEq.withdraw.call(uintH4b0bj, {from: accounts[1]});

		assert.equal(uint256tsgWX5r, BigInt("0"))
		await expect(YRX3pCBUEq.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pCBUEq = await YRX3.new({from: accounts[1]});
		const addressgu4rbVu = accounts[4]
		const uintPKidmoS = BigInt("394")
		const uintivzmQ7K = BigInt("503")
//		await YRX3pCBUEq.getReward.call({from: accounts[3]});
//		const addressy9rqxLl = await YRX3pCBUEq.setRewardDistribution.call(addressgu4rbVu, {from: accounts[1]});
//		const uint256nt50x69 = await YRX3pCBUEq.stake.call(uintPKidmoS, {from: accounts[1]});
//		const uint256HOxQdM = await YRX3pCBUEq.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256vPydNeW = await YRX3pCBUEq.withdraw.call(uintivzmQ7K, {from: accounts[1]});
//		await YRX3pCBUEq.renounceOwnership.call({from: accounts[1]});

		await expect(YRX3pCBUEq.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3gg4zCey = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressf3WaGuJ = accounts[3]
		const addressVd1BtRb = accounts[1]
		const addressLFqTEuN = await YRX3gg4zCey.toPayable.call(addressf3WaGuJ, {from: accounts[1]});
		await YRX3gg4zCey.checkStart.call({from: accounts[3]});
		await YRX3gg4zCey.notifyRewardAmount.call({from: accounts[0]});
		const addresstqEfvhh = await YRX3gg4zCey.emergencyDrain.call(addressVd1BtRb, {from: accounts[4]});
	});

	it('test for YRX3', async () => {
		const YRX3pCBUEq = await YRX3.new({from: accounts[1]});
		const addressvQbcj6Z = accounts[5]
		const uintbuW4phu = BigInt("394")
		const uintTBwVhvQ = BigInt("503")
//		await YRX3pCBUEq.getReward.call({from: accounts[3]});
//		await YRX3pCBUEq.renounceOwnership.call({from: accounts[1]});
//		const addressy9rqxLl = await YRX3pCBUEq.setRewardDistribution.call(addressvQbcj6Z, {from: accounts[1]});
//		const uint256nt50x69 = await YRX3pCBUEq.stake.call(uintbuW4phu, {from: accounts[1]});
//		const uint256HOxQdM = await YRX3pCBUEq.lastTimeRewardApplicable.call({from: accounts[5]});
//		await YRX3pCBUEq.checkNextEpoch.call({from: accounts[2]});
//		const uint256vPydNeW = await YRX3pCBUEq.withdraw.call(uintTBwVhvQ, {from: accounts[1]});
//		await YRX3pCBUEq.renounceOwnership.call({from: accounts[1]});

		await expect(YRX3pCBUEq.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3MlMU5B = await YRX3.new({from: accounts[0]});
		const addresswt1E7Fg = accounts[3]
		const addressyrELy5N = accounts[4]
		const addressDCYJ7tO = accounts[1]
		const addressHDpa5ZP = await YRX3MlMU5B.transferOwnership.call(addresswt1E7Fg, {from: accounts[0]});
		const uint256NjLOkLh = await YRX3MlMU5B.totalSupply.call({from: accounts[0]});
//		const address8PnV4w = await YRX3MlMU5B.emergencyDrain.call(addressyrELy5N, {from: accounts[3]});
//		const addressm0B37Ln = await YRX3MlMU5B.toPayable.call(addressDCYJ7tO, {from: accounts[0]});
//		const address4J41VW = await YRX3MlMU5B.owner.call({from: accounts[4]});

		assert.equal(uint256NjLOkLh, BigInt("0"))
		await expect(YRX3MlMU5B.emergencyDrain.call(addressyrELy5N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})