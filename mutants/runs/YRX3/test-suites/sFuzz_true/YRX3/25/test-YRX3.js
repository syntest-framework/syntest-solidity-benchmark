const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3NdnM8EY = await YRX3.new({from: accounts[5]});
		const uinta4LSYx1 = BigInt("1834")
		const uint256pGOz6hr = await YRX3NdnM8EY.withdraw.call(uinta4LSYx1, {from: accounts[2]});
		const uint256d8A0H6q = await YRX3NdnM8EY.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmYY5mmL = await YRX3NdnM8EY.owner.call({from: accounts[0]});
		await YRX3NdnM8EY.onlyOwner.call({from: accounts[4]});

		await expect(YRX3NdnM8EY.withdraw.call(uinta4LSYx1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NIa2cNw = await YRX3.new({from: accounts[0]});
		const addressuC3tXLd = accounts[5]
		await YRX3NIa2cNw.getReward.call({from: accounts[2]});
		const addressCLqEbHz = await YRX3NIa2cNw.updateReward.call(addressuC3tXLd, {from: accounts[1]});
		await YRX3NIa2cNw.onlyOwner.call({from: accounts[1]});
		await YRX3NIa2cNw.getReward.call({from: accounts[4]});

		await expect(YRX3NIa2cNw.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tv9dxO0 = await YRX3.new({from: accounts[2]});
		const addressw5CYECM = accounts[3]
		const address9T7Tcl = accounts[4]
		const addressiPHFu9R = await YRX3tv9dxO0.emergencyDrain.call(addressw5CYECM, {from: accounts[1]});
		const boolKbzsFbr = await YRX3tv9dxO0.isOwner.call({from: accounts[4]});
		const addressCe1V8Ak = await YRX3tv9dxO0.setRewardDistribution.call(address9T7Tcl, {from: accounts[3]});

		await expect(YRX3tv9dxO0.emergencyDrain.call(addressw5CYECM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tWHcVj4 = await YRX3.new({from: accounts[5]});
		const uintVdnr4mG = BigInt("448")
		const uintvWH1roh = BigInt("2005")
		const uint256fpsbkac = await YRX3tWHcVj4.stake.call(uintVdnr4mG, {from: accounts[4]});
		const uint256JzAQFO = await YRX3tWHcVj4.stake.call(uintvWH1roh, {from: accounts[5]});
		const boolf96sdAJ = await YRX3tWHcVj4.isOwner.call({from: accounts[2]});

		await expect(YRX3tWHcVj4.stake.call(uintVdnr4mG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uFWO8Zv = await YRX3.new({from: accounts[1]});
		const addresstp7CuNa = accounts[3]
		const addressmot29PI = accounts[1]
		await YRX3uFWO8Zv.renounceOwnership.call({from: accounts[3]});
		const addressZtZ55n3 = await YRX3uFWO8Zv.updateReward.call(addresstp7CuNa, {from: accounts[1]});
		const addressbi77X0P = await YRX3uFWO8Zv.updateReward.call(addressmot29PI, {from: accounts[3]});

		await expect(YRX3uFWO8Zv.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3P2ysFk = await YRX3.new({from: accounts[4]});
		const uintoZtS8zl = BigInt("451")
		const addresswyalsZG = accounts[4]
		const addresskP6xTtd = await YRX3P2ysFk.owner.call({from: accounts[1]});
		const uint256U6roXQp = await YRX3P2ysFk.stake.call(uintoZtS8zl, {from: accounts[2]});
		const addressNN1HrZT = await YRX3P2ysFk.updateReward.call(addresswyalsZG, {from: accounts[5]});

		assert.equal(addresskP6xTtd, 0xB59E6c38f88cc21ef3f031a587a124A6805211Cb)
		await expect(YRX3P2ysFk.stake.call(uintoZtS8zl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vREORjR = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressywFU4Nu = accounts[0]
		const addressOTvxHus = accounts[3]
		const addressfkleyX = await YRX3vREORjR.transferOwnership.call(addressywFU4Nu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pONkLri = await YRX3vREORjR.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Pu6yazO = await YRX3vREORjR.totalSupply.call({from: accounts[1]});
		const uint256i1xFq1 = await YRX3vREORjR.balanceOf.call(addressOTvxHus, {from: accounts[4]});
	});

	it('test for YRX3', async () => {
		const YRX3tv9dxO0 = await YRX3.new({from: accounts[2]});
		const addressKHMdmzM = accounts[3]
		const addresspcYe7Uy = accounts[4]
		await YRX3tv9dxO0.exit.call({from: accounts[4]});
		await YRX3tv9dxO0.onlyOwner.call({from: accounts[4]});
		const addressiPHFu9R = await YRX3tv9dxO0.emergencyDrain.call(addressKHMdmzM, {from: accounts[1]});
		const boolKbzsFbr = await YRX3tv9dxO0.isOwner.call({from: accounts[4]});
		const addressCe1V8Ak = await YRX3tv9dxO0.setRewardDistribution.call(addresspcYe7Uy, {from: accounts[3]});

		await expect(YRX3tv9dxO0.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tWHcVj4 = await YRX3.new({from: accounts[5]});
		const addressKsR4UGt = accounts[5]
		const uintecb9tR2 = BigInt("506")
		const addressJtRQ5B3 = await YRX3tWHcVj4.transferOwnership.call(addressKsR4UGt, {from: accounts[5]});
		const uint256fpsbkac = await YRX3tWHcVj4.stake.call(uintecb9tR2, {from: accounts[4]});

		await expect(YRX3tWHcVj4.stake.call(uintecb9tR2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NIa2cNw = await YRX3.new({from: accounts[0]});
		const addresszElmZx = accounts[0]
		await YRX3NIa2cNw.getReward.call({from: accounts[2]});
		const addressQ7VEV9U = await YRX3NIa2cNw.setRewardDistribution.call(addresszElmZx, {from: accounts[0]});

		await expect(YRX3NIa2cNw.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tWHcVj4 = await YRX3.new({from: accounts[5]});
		const addresszG5T0LJ = accounts[5]
		const uintvkIOsHs = BigInt("1895")
		const uint256DRD3GD = await YRX3tWHcVj4.balanceOf.call(addresszG5T0LJ, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3tWHcVj4.renounceOwnership.call({from: accounts[5]});
		await YRX3tWHcVj4.checkStart.call({from: accounts[0]});
		const uint256fpsbkac = await YRX3tWHcVj4.stake.call(uintvkIOsHs, {from: accounts[4]});

		assert.equal(uint256DRD3GD, BigInt("0"))
		await expect(YRX3tWHcVj4.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})