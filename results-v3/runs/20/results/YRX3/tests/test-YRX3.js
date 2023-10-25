const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX31ytVDB = await YRX3.new({from: accounts[4]});
		const uintODjVojG = BigInt("1404")
		const uintS2BJNrU = BigInt("986")
		const uint256pgEWU63 = await YRX31ytVDB.withdraw.call(uintODjVojG, {from: accounts[3]});
		const boolOY1Ryri = await YRX31ytVDB.isOwner.call({from: accounts[0]});
		const uint256UzJTGU = await YRX31ytVDB.withdraw.call(uintS2BJNrU, {from: accounts[2]});

		await expect(YRX31ytVDB.withdraw.call(uintODjVojG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3g2T2bP = await YRX3.new({from: accounts[4]});
		const addressFxkW8Hx = accounts[3]
		const uintT2wjso = BigInt("479")
		const boolBg8uUS5 = await YRX3g2T2bP.isOwner.call({from: accounts[1]});
		const boolLXAWihk = await YRX3g2T2bP.isOwner.call({from: accounts[0]});
		const uint256CFEglsm = await YRX3g2T2bP.balanceOf.call(addressFxkW8Hx, {from: accounts[1]});
		await YRX3g2T2bP.onlyRewardDistribution.call({from: accounts[3]});
		await YRX3g2T2bP.onlyOwner.call({from: accounts[0]});
		const uint256PB2VRXK = await YRX3g2T2bP.withdraw.call(uintT2wjso, {from: accounts[2]});

		assert.equal(boolBg8uUS5, false)
		assert.equal(boolLXAWihk, false)
		assert.equal(uint256CFEglsm, BigInt("0"))
		await expect(YRX3g2T2bP.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3aYHGOd = await YRX3.new({from: accounts[1]});
		const addresse3pR5gd = accounts[5]
		const addressKl3NtUf = accounts[0]
		const uintjUzFPUC = BigInt("1574")
		const addressQBpzFlU = await YRX3aYHGOd.emergencyDrain.call(addresse3pR5gd, {from: accounts[4]});
		const uint256icUYl6y = await YRX3aYHGOd.totalSupply.call({from: accounts[5]});
		const uint256pE0YcjI = await YRX3aYHGOd.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256cscg2xw = await YRX3aYHGOd.earned.call(addressKl3NtUf, {from: accounts[0]});
		await YRX3aYHGOd.exit.call({from: accounts[4]});
		const uint256EDRyA5 = await YRX3aYHGOd.stake.call(uintjUzFPUC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3aYHGOd.emergencyDrain.call(addresse3pR5gd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3PQKElL = await YRX3.new({from: accounts[1]});
		const uintS3uKExu = BigInt("904")
		const uintOJLmSdv = BigInt("306")
		const uint256X0osMW7 = await YRX3PQKElL.stake.call(uintS3uKExu, {from: accounts[1]});
		const uint256TCTQvfR = await YRX3PQKElL.rewardPerToken.call({from: accounts[4]});
		const uint256IuzaiPl = await YRX3PQKElL.withdraw.call(uintOJLmSdv, {from: accounts[0]});
		await YRX3PQKElL.checkNextEpoch.call({from: accounts[3]});
		await YRX3PQKElL.onlyOwner.call({from: accounts[0]});

		await expect(YRX3PQKElL.stake.call(uintS3uKExu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3j3jCVyK = await YRX3.new({from: accounts[3]});
		const addressIgOZcVp = accounts[3]
		const addressXfXYc6C = accounts[3]
		const addressttbrN7h = accounts[3]
		const addressCbEjSX3 = await YRX3j3jCVyK.setRewardDistribution.call(addressIgOZcVp, {from: accounts[3]});
		const boolCsxTMrS = await YRX3j3jCVyK.isOwner.call({from: accounts[0]});
		const uint256DR7EcYM = await YRX3j3jCVyK.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256NRNP516 = await YRX3j3jCVyK.balanceOf.call(addressXfXYc6C, {from: accounts[5]});
		const uint256C7liY8s = await YRX3j3jCVyK.balanceOf.call(addressttbrN7h, {from: accounts[4]});

		assert.equal(boolCsxTMrS, false)
		assert.equal(uint256C7liY8s, BigInt("0"))
		assert.equal(uint256DR7EcYM, BigInt("0"))
		assert.equal(uint256NRNP516, BigInt("0"))
	});

	it('test for YRX3', async () => {
		const YRX3np6ejOv = await YRX3.new({from: accounts[3]});
		const uint256XJ7iJoa = await YRX3np6ejOv.totalSupply.call({from: accounts[0]});
		const addressPBUf3az = await YRX3np6ejOv.owner.call({from: accounts[0]});
		await YRX3np6ejOv.checkNextEpoch.call({from: accounts[1]});

		assert.equal(addressPBUf3az, 0xcE85B1cCCF2fF2C160c94E9B15bf80F827851D15)
		assert.equal(uint256XJ7iJoa, BigInt("0"))
		await expect(YRX3np6ejOv.checkNextEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3wC4hIvr = await YRX3.new({from: accounts[3]});
		const addressGcRdlXI = accounts[0]
		const addressj3W31nz = accounts[3]
		await YRX3wC4hIvr.exit.call({from: accounts[2]});
		await YRX3wC4hIvr.exit.call({from: accounts[1]});
		const uint256q9r4joQ = await YRX3wC4hIvr.earned.call(addressGcRdlXI, {from: accounts[1]});
		const uint256ymi73Y = await YRX3wC4hIvr.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256k5doeA = await YRX3wC4hIvr.balanceOf.call(addressj3W31nz, {from: accounts[3]});

		await expect(YRX3wC4hIvr.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3PQKElL = await YRX3.new({from: accounts[1]});
		const addressTLCYF1d = accounts[1]
		const uintyl1Apg = BigInt("904")
		const addressMShTNrS = accounts[4]
		const uintR9nfQwv = BigInt("306")
		const addressQMDKoMN = await YRX3PQKElL.transferOwnership.call(addressTLCYF1d, {from: accounts[4]});
		const uint256X0osMW7 = await YRX3PQKElL.stake.call(uintyl1Apg, {from: accounts[1]});
		const addressMzTmHJf = await YRX3PQKElL.transferOwnership.call(addressMShTNrS, {from: accounts[3]});
		const uint256IuzaiPl = await YRX3PQKElL.withdraw.call(uintR9nfQwv, {from: accounts[0]});
		await YRX3PQKElL.checkNextEpoch.call({from: accounts[3]});
		await YRX3PQKElL.onlyOwner.call({from: accounts[0]});

		await expect(YRX3PQKElL.transferOwnership.call(addressTLCYF1d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Dagfnfz = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		await YRX3Dagfnfz.notifyRewardAmount.call({from: accounts[4]});
		await YRX3Dagfnfz.exit.call({from: accounts[0]});
		const addresswwL9XIt = await YRX3Dagfnfz.owner.call({from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX3PQKElL = await YRX3.new({from: accounts[1]});
		const address4JAwls = accounts[2]
		const uintwjpLjWc = BigInt("904")
		const uinttLxE7Qg = BigInt("306")
		const uintHlHp5NT = BigInt("2028")
		const uintfLWtXy = BigInt("974")
		const addressZxwUKoS = await YRX3PQKElL.transferOwnership.call(address4JAwls, {from: accounts[1]});
		const uint256X0osMW7 = await YRX3PQKElL.stake.call(uintwjpLjWc, {from: accounts[1]});
		await YRX3PQKElL.checkNextEpoch.call({from: accounts[2]});
		const uint256TCTQvfR = await YRX3PQKElL.rewardPerToken.call({from: accounts[4]});
		const uint256IuzaiPl = await YRX3PQKElL.withdraw.call(uinttLxE7Qg, {from: accounts[0]});
		const uint256PpfjESz = await YRX3PQKElL.stake.call(uintHlHp5NT, {from: accounts[2]});
		const uint256mktjZE = await YRX3PQKElL.withdraw.call(uintfLWtXy, {from: accounts[4]});
		await YRX3PQKElL.checkNextEpoch.call({from: accounts[3]});
		await YRX3PQKElL.exit.call({from: accounts[1]});
		await YRX3PQKElL.onlyOwner.call({from: accounts[0]});

		await expect(YRX3PQKElL.stake.call(uintwjpLjWc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3w1yTkL7 = await YRX3.new({from: accounts[4]});
		const addressMp5XHPP = accounts[1]
		const addressHY2nttf = accounts[2]
		const uint256x5HKDyx = await YRX3w1yTkL7.earned.call(addressMp5XHPP, {from: accounts[3]});
		await YRX3w1yTkL7.getReward.call({from: accounts[4]});
		await YRX3w1yTkL7.exit.call({from: accounts[2]});
		const addressNohnjK = await YRX3w1yTkL7.emergencyDrain.call(addressHY2nttf, {from: accounts[1]});

		assert.equal(uint256x5HKDyx, BigInt("0"))
		await expect(YRX3w1yTkL7.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3w1yTkL7 = await YRX3.new({from: accounts[4]});
		await YRX3w1yTkL7.renounceOwnership.call({from: accounts[4]});
		await YRX3w1yTkL7.getReward.call({from: accounts[4]});

		await expect(YRX3w1yTkL7.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})