const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsDG61bbq = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc7gb8Lx = BigInt("69")
		const uintOc7zt24 = BigInt("1694")
		const uint256ihlPdQP = await SSTRewardsDG61bbq.notifyRewardAmount.call(uintc7gb8Lx, {from: accounts[0]});
		const uint256hXo2qs = await SSTRewardsDG61bbq.withdraw.call(uintOc7zt24, {from: accounts[0]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsttRftpD = await SSTRewards.new({from: accounts[5]});
		const uintuO6P0E = BigInt("1508")
		const uintplScQzD = BigInt("206")
//		const uint256FtRjklM = await SSTRewardsttRftpD.stake.call(uintuO6P0E, {from: accounts[0]});
//		const uint256z7VG4bR = await SSTRewardsttRftpD.lastTimeRewardApplicable.call({from: accounts[0]});
//		await SSTRewardsttRftpD.exit.call({from: accounts[0]});
//		const uint256lrdIGHK = await SSTRewardsttRftpD.stake.call(uintplScQzD, {from: accounts[4]});

		await expect(SSTRewardsttRftpD.stake.call(uintuO6P0E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsCFq2Wyz = await SSTRewards.new({from: accounts[0]});
		const addressKhlNcaa = accounts[5]
		const addressLdapvoB = accounts[2]
//		await SSTRewardsCFq2Wyz.checkStart.call({from: accounts[1]});
//		const uint256wPSWHDK = await SSTRewardsCFq2Wyz.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256IkBxoYo = await SSTRewardsCFq2Wyz.totalSupply.call({from: accounts[3]});
//		const uint256LS83ghc = await SSTRewardsCFq2Wyz.earned.call(addressKhlNcaa, {from: accounts[1]});
//		const uint256pbrYCrV = await SSTRewardsCFq2Wyz.balanceOf.call(addressLdapvoB, {from: accounts[0]});

		await expect(SSTRewardsCFq2Wyz.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgJoNEar = await SSTRewards.new({from: accounts[0]});
		const uintYgnWOUl = BigInt("737")
		const uintJ2q5cE = BigInt("1135")
		const addressGJ80tBC = accounts[4]
//		const uint256YauslX8 = await SSTRewardsgJoNEar.withdraw.call(uintYgnWOUl, {from: accounts[3]});
//		const uint256JEMZdtU = await SSTRewardsgJoNEar.withdraw.call(uintJ2q5cE, {from: accounts[2]});
//		const uint256LAyhlqR = await SSTRewardsgJoNEar.earned.call(addressGJ80tBC, {from: accounts[2]});

		await expect(SSTRewardsgJoNEar.withdraw.call(uintYgnWOUl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardszKpkjg = await SSTRewards.new({from: accounts[3]});
		const addressB1jCDm8 = accounts[2]
		const uintWPlu6Dq = BigInt("355")
		const uintXFdW5Qv = BigInt("240")
//		await SSTRewardszKpkjg.exit.call({from: accounts[1]});
//		const uint256yUq8Hif = await SSTRewardszKpkjg.balanceOf.call(addressB1jCDm8, {from: accounts[0]});
//		const uint256r23H1Yr = await SSTRewardszKpkjg.withdraw.call(uintWPlu6Dq, {from: accounts[3]});
//		const uint256bm9rAb8 = await SSTRewardszKpkjg.withdraw.call(uintXFdW5Qv, {from: accounts[2]});
//		const uint256ChjgxzI = await SSTRewardszKpkjg.totalSupply.call({from: accounts[2]});

		await expect(SSTRewardszKpkjg.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsFiUf9vX = await SSTRewards.new({from: accounts[2]});
		const uintAtUZ5ir = BigInt("1248")
//		await SSTRewardsFiUf9vX.getReward.call({from: accounts[0]});
//		const uint256TCp26gZ = await SSTRewardsFiUf9vX.stake.call(uintAtUZ5ir, {from: accounts[3]});

		await expect(SSTRewardsFiUf9vX.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgJoNEar = await SSTRewards.new({from: accounts[0]});
		const uinteZlZJB = BigInt("1430")
		const uintBxE665H = BigInt("737")
		const uintPvY944K = BigInt("1135")
		const addressp6PUzFU = accounts[4]
		const addressgwErohO = accounts[4]
		const addressamwb0NN = accounts[4]
//		await SSTRewardsgJoNEar.getReward.call({from: accounts[1]});
//		const uint256LJhtp8K = await SSTRewardsgJoNEar.notifyRewardAmount.call(uinteZlZJB, {from: accounts[4]});
//		const uint256YauslX8 = await SSTRewardsgJoNEar.withdraw.call(uintBxE665H, {from: accounts[3]});
//		await SSTRewardsgJoNEar.getReward.call({from: accounts[5]});
//		const uint256JEMZdtU = await SSTRewardsgJoNEar.withdraw.call(uintPvY944K, {from: accounts[2]});
//		const addressTiA8Qmm = await SSTRewardsgJoNEar.updateReward.call(addressp6PUzFU, {from: accounts[5]});
//		const uint256J3yVIzo = await SSTRewardsgJoNEar.earned.call(addressgwErohO, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsgJoNEar.exit.call({from: accounts[4]});
//		const uint256LAyhlqR = await SSTRewardsgJoNEar.earned.call(addressamwb0NN, {from: accounts[2]});

		await expect(SSTRewardsgJoNEar.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})