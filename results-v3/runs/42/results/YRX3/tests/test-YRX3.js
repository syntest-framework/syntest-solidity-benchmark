const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3Vilrf3C = await YRX3.new({from: accounts[0]});
		const addresshMuGHrh = accounts[3]
		const uintZ0FvpwK = BigInt("299")
		const uint256z7x8WNO = await YRX3Vilrf3C.earned.call(addresshMuGHrh, {from: accounts[2]});
		const boolqeTT9uH = await YRX3Vilrf3C.isOwner.call({from: accounts[2]});
		await YRX3Vilrf3C.checkNextEpoch.call({from: accounts[1]});
		await YRX3Vilrf3C.getReward.call({from: accounts[0]});
		const uint256iAmedDt = await YRX3Vilrf3C.stake.call(uintZ0FvpwK, {from: accounts[0]});

		assert.equal(boolqeTT9uH, false)
		assert.equal(uint256z7x8WNO, BigInt("0"))
		await expect(YRX3Vilrf3C.checkNextEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jzPOxr = await YRX3.new({from: accounts[0]});
		const address0v67mb = accounts[5]
		const uint256j2VdLLz = await YRX3jzPOxr.totalSupply.call({from: accounts[4]});
		const addressYajaN5W = await YRX3jzPOxr.emergencyDrain.call(address0v67mb, {from: accounts[4]});
		const addressVS23aPD = await YRX3jzPOxr.owner.call({from: accounts[5]});
		await YRX3jzPOxr.checkNextEpoch.call({from: accounts[4]});

		assert.equal(uint256j2VdLLz, BigInt("0"))
		await expect(YRX3jzPOxr.emergencyDrain.call(address0v67mb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3r5BqJvn = await YRX3.new({from: accounts[1]});
		const uint256SZoKoJK = await YRX3r5BqJvn.totalSupply.call({from: accounts[1]});
		const uint256fJyjBIx = await YRX3r5BqJvn.rewardPerToken.call({from: accounts[5]});
		const uint256U8dSDXd = await YRX3r5BqJvn.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256SZoKoJK, BigInt("0"))
		assert.equal(uint256U8dSDXd, BigInt("0"))
		assert.equal(uint256fJyjBIx, BigInt("0"))
	});

	it('test for YRX3', async () => {
		const YRX3O9Vd50 = await YRX3.new({from: accounts[3]});
		const uintZMDl4z = BigInt("1981")
		const addresswjhRupP = accounts[4]
		const uint256PGKIvki = await YRX3O9Vd50.withdraw.call(uintZMDl4z, {from: accounts[1]});
		await YRX3O9Vd50.checkNextEpoch.call({from: accounts[5]});
		const uint256MKYvplW = await YRX3O9Vd50.earned.call(addresswjhRupP, {from: accounts[2]});
		await YRX3O9Vd50.checkNextEpoch.call({from: accounts[5]});

		await expect(YRX3O9Vd50.withdraw.call(uintZMDl4z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3dVM7eMB = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPkdGaYb = BigInt("948")
		const uintet99fi = BigInt("756")
		const addressGlUarij = accounts[2]
		const uint256tgbcJpH = await YRX3dVM7eMB.stake.call(uintPkdGaYb, {from: accounts[0]});
		const uint256xAqdDok = await YRX3dVM7eMB.stake.call(uintet99fi, {from: accounts[3]});
		await YRX3dVM7eMB.renounceOwnership.call({from: accounts[2]});
		const addressG5iOhBj = await YRX3dVM7eMB.transferOwnership.call(addressGlUarij, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YRX3', async () => {
		const YRX3IMOclq = await YRX3.new({from: accounts[1]});
		const addressn6KdTH5 = "0x0000000000000000000000000000000000000001"
		const addressHViSy4U = accounts[3]
		const addresslUYD1Pd = await YRX3IMOclq.transferOwnership.call(addressn6KdTH5, {from: accounts[3]});
		const addressh2Aqk5x = await YRX3IMOclq.toPayable.call(addressHViSy4U, {from: accounts[4]});

		await expect(YRX3IMOclq.transferOwnership.call(addressn6KdTH5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zpYt3Iq = await YRX3.new({from: accounts[0]});
		const uintJh9NFZa = BigInt("659")
		const addressa3Avhve = accounts[3]
		const uint256JF4RJqE = await YRX3zpYt3Iq.stake.call(uintJh9NFZa, {from: accounts[1]});
		await YRX3zpYt3Iq.checkNextEpoch.call({from: accounts[3]});
		const uint256qUekz3p = await YRX3zpYt3Iq.earned.call(addressa3Avhve, {from: accounts[4]});

		await expect(YRX3zpYt3Iq.stake.call(uintJh9NFZa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zpYt3Iq = await YRX3.new({from: accounts[0]});
		const addressluYgnZG = accounts[3]
		await YRX3zpYt3Iq.getReward.call({from: accounts[0]});
		await YRX3zpYt3Iq.renounceOwnership.call({from: accounts[3]});
		const uint256htw5djQ = await YRX3zpYt3Iq.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256qUekz3p = await YRX3zpYt3Iq.earned.call(addressluYgnZG, {from: accounts[4]});

		await expect(YRX3zpYt3Iq.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zpYt3Iq = await YRX3.new({from: accounts[0]});
		const addresspPlimIQ = accounts[3]
		const uintENDFgqg = BigInt("2045")
		await YRX3zpYt3Iq.getReward.call({from: accounts[1]});
		await YRX3zpYt3Iq.exit.call({from: accounts[2]});
		const uint256qUekz3p = await YRX3zpYt3Iq.earned.call(addresspPlimIQ, {from: accounts[4]});
		const uint256dyjNTPf = await YRX3zpYt3Iq.stake.call(uintENDFgqg, {from: accounts[0]});
		await YRX3zpYt3Iq.checkNextEpoch.call({from: accounts[0]});

		await expect(YRX3zpYt3Iq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zpYt3Iq = await YRX3.new({from: accounts[0]});
		const addressLkzUim3 = accounts[1]
		const uintmjSLhqe = BigInt("530")
		const addresszFXd36 = accounts[4]
		const addressNeR2z8H = await YRX3zpYt3Iq.owner.call({from: accounts[2]});
		const uint256KglVjx = await YRX3zpYt3Iq.earned.call(addressLkzUim3, {from: accounts[0]});
		const uint256CUHyw4p = await YRX3zpYt3Iq.stake.call(uintmjSLhqe, {from: accounts[1]});
		await YRX3zpYt3Iq.exit.call({from: accounts[2]});
		const uint256qUekz3p = await YRX3zpYt3Iq.earned.call(addresszFXd36, {from: accounts[4]});

		assert.equal(addressNeR2z8H, 0xdA3b8FCC8CBDD5BB3d31af7cb69B0BeeFeCE765d)
		assert.equal(uint256KglVjx, BigInt("0"))
		await expect(YRX3zpYt3Iq.stake.call(uintmjSLhqe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uAOkCmD = await YRX3.new({from: accounts[2]});
		const addressAZxDryY = accounts[3]
		const addressNCxl1Vp = accounts[4]
		const uint256EWK0HPQ = await YRX3uAOkCmD.balanceOf.call(addressAZxDryY, {from: accounts[4]});
		const addressRlsVCp4 = await YRX3uAOkCmD.setRewardDistribution.call(addressNCxl1Vp, {from: accounts[2]});

		assert.equal(uint256EWK0HPQ, BigInt("0"))
	});

	it('test for YRX3', async () => {
		const YRX3zpYt3Iq = await YRX3.new({from: accounts[0]});
		const addressrvQgSHZ = accounts[5]
		const addresstAPpRkq = await YRX3zpYt3Iq.transferOwnership.call(addressrvQgSHZ, {from: accounts[0]});
		await YRX3zpYt3Iq.getReward.call({from: accounts[1]});

		await expect(YRX3zpYt3Iq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zpYt3Iq = await YRX3.new({from: accounts[0]});
		await YRX3zpYt3Iq.renounceOwnership.call({from: accounts[0]});
		await YRX3zpYt3Iq.getReward.call({from: accounts[1]});

		await expect(YRX3zpYt3Iq.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})