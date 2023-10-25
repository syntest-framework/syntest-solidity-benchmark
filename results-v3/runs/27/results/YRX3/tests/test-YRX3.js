const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3ea6SFOY = await YRX3.new({from: accounts[5]});
		const boollJ3Dmm7 = await YRX3ea6SFOY.isOwner.call({from: accounts[2]});
		const addressXWqxxNZ = await YRX3ea6SFOY.owner.call({from: accounts[0]});
		await YRX3ea6SFOY.exit.call({from: accounts[5]});

		assert.equal(addressXWqxxNZ, 0x5bD9cB804b025977A5c45F077658485DE10020F6)
		assert.equal(boollJ3Dmm7, false)
		await expect(YRX3ea6SFOY.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Zvrh7gH = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwNcFwkE = BigInt("1289")
		const uintgiClPpL = BigInt("592")
		const uint256cFXd0xu = await YRX3Zvrh7gH.stake.call(uintwNcFwkE, {from: accounts[3]});
		await YRX3Zvrh7gH.onlyRewardDistribution.call({from: accounts[0]});
		const uint256FAZqkrn = await YRX3Zvrh7gH.stake.call(uintgiClPpL, {from: accounts[2]});
		await YRX3Zvrh7gH.checkStart.call({from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3mLcxD6S = await YRX3.new({from: accounts[3]});
		const uintZ86udRG = BigInt("1392")
		const addressBI8nWPx = accounts[5]
		const uint256DLisV0c = await YRX3mLcxD6S.stake.call(uintZ86udRG, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3mLcxD6S.checkNextEpoch.call({from: accounts[3]});
		const addressTfHEddC = await YRX3mLcxD6S.emergencyDrain.call(addressBI8nWPx, {from: accounts[5]});
		const uint256GvT7dW7 = await YRX3mLcxD6S.totalSupply.call({from: accounts[4]});
		const boolmFq7t8K = await YRX3mLcxD6S.isOwner.call({from: accounts[5]});

		await expect(YRX3mLcxD6S.stake.call(uintZ86udRG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3brDVDqG = await YRX3.new({from: accounts[5]});
		const uintAnyxU8u = BigInt("1928")
		const addressBAk1IW2 = accounts[4]
		const uintxcvxA3 = BigInt("1915")
		await YRX3brDVDqG.checkStart.call({from: accounts[1]});
		const uint256cPk2eIL = await YRX3brDVDqG.stake.call(uintAnyxU8u, {from: accounts[2]});
		const uint256upyjjiH = await YRX3brDVDqG.earned.call(addressBAk1IW2, {from: accounts[0]});
		const uint256kq1DOq = await YRX3brDVDqG.withdraw.call(uintxcvxA3, {from: accounts[0]});

		await expect(YRX3brDVDqG.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3au8bOVi = await YRX3.new({from: accounts[4]});
		const uintQObxH5f = BigInt("809")
		const uintPO9kH2X = BigInt("1465")
		const addressM8nqOWT = accounts[5]
		const addressQBZqgcr = accounts[4]
		await YRX3au8bOVi.getReward.call({from: accounts[0]});
		const uint256U6vHK8E = await YRX3au8bOVi.withdraw.call(uintQObxH5f, {from: accounts[1]});
		const uint256blLZGll = await YRX3au8bOVi.withdraw.call(uintPO9kH2X, {from: accounts[5]});
		const addressbA6axXK = await YRX3au8bOVi.setRewardDistribution.call(addressM8nqOWT, {from: accounts[5]});
		const addressdMWWPMQ = await YRX3au8bOVi.setRewardDistribution.call(addressQBZqgcr, {from: accounts[2]});

		await expect(YRX3au8bOVi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tqnH28e = await YRX3.new({from: accounts[1]});
		const addressBa8aVQH = accounts[0]
		const uintCC6k5ho = BigInt("1970")
		await YRX3tqnH28e.notifyRewardAmount.call({from: accounts[1]});
		const addresshFDKxOs = await YRX3tqnH28e.transferOwnership.call(addressBa8aVQH, {from: accounts[1]});
		await YRX3tqnH28e.getReward.call({from: accounts[4]});
		const uint256yFFBLzm = await YRX3tqnH28e.withdraw.call(uintCC6k5ho, {from: accounts[2]});

		await expect(YRX3tqnH28e.notifyRewardAmount.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3au8bOVi = await YRX3.new({from: accounts[4]});
		const addresseqGgzFx = accounts[2]
		const addressE5dHhLk = "0x0000000000000000000000000000000000000001"
		const uintiQjx3R = BigInt("809")
		const uintgLnwXu = BigInt("1465")
		const addressEduMnNY = accounts[5]
		const addressH74AcoC = accounts[4]
		const addressQNS2FR8 = await YRX3au8bOVi.transferOwnership.call(addresseqGgzFx, {from: accounts[2]});
		await YRX3au8bOVi.getReward.call({from: accounts[0]});
		const addressyKmXKwf = await YRX3au8bOVi.transferOwnership.call(addressE5dHhLk, {from: accounts[0]});
		const uint256U6vHK8E = await YRX3au8bOVi.withdraw.call(uintiQjx3R, {from: accounts[1]});
		const uint256blLZGll = await YRX3au8bOVi.withdraw.call(uintgLnwXu, {from: accounts[5]});
		const addressbA6axXK = await YRX3au8bOVi.setRewardDistribution.call(addressEduMnNY, {from: accounts[5]});
		const addressdMWWPMQ = await YRX3au8bOVi.setRewardDistribution.call(addressH74AcoC, {from: accounts[2]});

		await expect(YRX3au8bOVi.transferOwnership.call(addresseqGgzFx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ea6SFOY = await YRX3.new({from: accounts[5]});
		const addressQUohH0T = accounts[0]
		const addresspoAiVtn = await YRX3ea6SFOY.transferOwnership.call(addressQUohH0T, {from: accounts[5]});
		const addressXWqxxNZ = await YRX3ea6SFOY.owner.call({from: accounts[0]});
		const uint256X9AfJ1r = await YRX3ea6SFOY.rewardPerToken.call({from: accounts[1]});
		await YRX3ea6SFOY.exit.call({from: accounts[5]});

		assert.equal(addressXWqxxNZ, 0x5bD9cB804b025977A5c45F077658485DE10020F6)
		assert.equal(uint256X9AfJ1r, BigInt("0"))
		await expect(YRX3ea6SFOY.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3au8bOVi = await YRX3.new({from: accounts[4]});
		const addressyRsnlnw = accounts[4]
		const uinthiEceqc = BigInt("1818")
		const uintnbsuJfY = BigInt("1487")
		const addressMMVC3Uj = accounts[4]
		await YRX3au8bOVi.getReward.call({from: accounts[0]});
		const addressRUiSo3a = await YRX3au8bOVi.setRewardDistribution.call(addressyRsnlnw, {from: accounts[4]});
		const uint256U6vHK8E = await YRX3au8bOVi.withdraw.call(uinthiEceqc, {from: accounts[1]});
		const uint256blLZGll = await YRX3au8bOVi.withdraw.call(uintnbsuJfY, {from: accounts[5]});
		const addressdMWWPMQ = await YRX3au8bOVi.setRewardDistribution.call(addressMMVC3Uj, {from: accounts[2]});

		await expect(YRX3au8bOVi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3mLcxD6S = await YRX3.new({from: accounts[3]});
		const uintdK0uEV = BigInt("1392")
		await YRX3mLcxD6S.renounceOwnership.call({from: accounts[3]});
		const uint256DLisV0c = await YRX3mLcxD6S.stake.call(uintdK0uEV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3mLcxD6S.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})