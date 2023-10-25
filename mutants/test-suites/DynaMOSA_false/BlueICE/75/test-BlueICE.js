const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEk3Y6H6l = await BlueICE.new({from: accounts[1]});
		const uintP4i7k5O = BigInt("239")
		const uinthgnfHmT = BigInt("837")
		const addressNWz1g9 = accounts[0]
//		const uint256sX4HXF1 = await BlueICEk3Y6H6l.notifyRewardAmount.call(uintP4i7k5O, {from: accounts[3]});
//		const uint256R4q0DSf = await BlueICEk3Y6H6l.unstake.call(uinthgnfHmT, {from: accounts[4]});
//		const addresspU3EOjH = await BlueICEk3Y6H6l.updateReward.call(addressNWz1g9, {from: accounts[0]});

		await expect(BlueICEk3Y6H6l.notifyRewardAmount.call(uintP4i7k5O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEt4gOLgp = await BlueICE.new({from: accounts[0]});
		const addresskQhsqZ = accounts[4]
		const addressw5SnQQK = accounts[5]
//		const address5PBbUX = await BlueICEt4gOLgp.updateReward.call(addresskQhsqZ, {from: accounts[4]});
//		await BlueICEt4gOLgp.renounceOwnership.call({from: accounts[3]});
//		const addressarraygnTiApd = await BlueICEt4gOLgp.getCommunity.call({from: accounts[1]});
//		const uint256bQFTwbe = await BlueICEt4gOLgp.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256EcrjIUG = await BlueICEt4gOLgp.earned.call(addressw5SnQQK, {from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEt4gOLgp.onlyOwner.call({from: accounts[1]});

		await expect(BlueICEt4gOLgp.updateReward.call(addresskQhsqZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICExpJEJue = await BlueICE.new({from: accounts[0]});
//		await BlueICExpJEJue.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICExpJEJue.exit.call({from: accounts[2]});
//		const addressCkLLbm = await BlueICExpJEJue.owner.call({from: accounts[5]});

		await expect(BlueICExpJEJue.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEx6rbIjt = await BlueICE.new({from: accounts[0]});
		const uintL7vBqXS = BigInt("1778")
		const uintYAMVdUr = BigInt("833")
		const addressarray6B052l = await BlueICEx6rbIjt.getCommunity.call({from: accounts[2]});
//		const uint256zjlrddY = await BlueICEx6rbIjt.stake.call(uintL7vBqXS, {from: accounts[2]});
//		const uint256hyLPaNS = await BlueICEx6rbIjt.stake.call(uintYAMVdUr, {from: accounts[3]});
//		const addressarrayVhC069W = await BlueICEx6rbIjt.getCommunity.call({from: accounts[2]});

		assert.equal(addressarray6B052l, )
		await expect(BlueICEx6rbIjt.stake.call(uintL7vBqXS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEkmQa1F1 = await BlueICE.new({from: accounts[1]});
		const addressOKWG50 = accounts[1]
		const uint256wp00zZt = await BlueICEkmQa1F1.getCurrentRewardReserve.call({from: accounts[3]});
		const addressarrayDuUOdBa = await BlueICEkmQa1F1.getCommunity.call({from: accounts[3]});
		const uint256Thxup8J = await BlueICEkmQa1F1.earned.call(addressOKWG50, {from: accounts[5]});
//		await BlueICEkmQa1F1.exit.call({from: accounts[3]});

		assert.equal(addressarrayDuUOdBa, )
		assert.equal(uint256Thxup8J, BigInt("0"))
		assert.equal(uint256wp00zZt, BigInt("500000000000000000000"))
		await expect(BlueICEkmQa1F1.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEhL9SgU1 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgLgOp0E = accounts[3]
		const uint256ZFxFpsg = await BlueICEhL9SgU1.lastTimeRewardApplicable.call({from: accounts[4]});
		const addresssambS0u = await BlueICEhL9SgU1.owner.call({from: accounts[0]});
		await BlueICEhL9SgU1.claimRewards.call({from: accounts[3]});
		const addressE0zMSu5 = await BlueICEhL9SgU1.updateReward.call(addressgLgOp0E, {from: accounts[0]});
	});

	it('test for BlueICE', async () => {
		const BlueICECQQqTEX = await BlueICE.new({from: accounts[4]});
		const addressQYyxIdN = await BlueICECQQqTEX.owner.call({from: accounts[2]});
//		await BlueICECQQqTEX.claimRewards.call({from: accounts[3]});
//		await BlueICECQQqTEX.checkhalv.call({from: accounts[3]});

		assert.equal(addressQYyxIdN, 0x397F879f0a68254667068E87Ab46a4B1BE25c885)
		await expect(BlueICECQQqTEX.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEk3Y6H6l = await BlueICE.new({from: accounts[1]});
		const uinttmMfm9p = BigInt("837")
		const addressrvlh2Xc = accounts[0]
//		const uint256R4q0DSf = await BlueICEk3Y6H6l.unstake.call(uinttmMfm9p, {from: accounts[4]});
//		const addresspU3EOjH = await BlueICEk3Y6H6l.updateReward.call(addressrvlh2Xc, {from: accounts[0]});

		await expect(BlueICEk3Y6H6l.unstake.call(uinttmMfm9p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECQQqTEX = await BlueICE.new({from: accounts[4]});
		const uintaJD57eU = BigInt("213")
//		const uint256SeRZNlJ = await BlueICECQQqTEX.notifyRewardAmount.call(uintaJD57eU, {from: accounts[4]});
//		const addressQYyxIdN = await BlueICECQQqTEX.owner.call({from: accounts[2]});
//		await BlueICECQQqTEX.claimRewards.call({from: accounts[3]});
//		await BlueICECQQqTEX.onlyOwner.call({from: accounts[2]});
//		await BlueICECQQqTEX.checkhalv.call({from: accounts[3]});

		await expect(BlueICECQQqTEX.notifyRewardAmount.call(uintaJD57eU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECQQqTEX = await BlueICE.new({from: accounts[4]});
		const addressu48K7lY = accounts[0]
		const uintPCdjzOX = BigInt("218")
		const addresssnciAaH = await BlueICECQQqTEX.transferOwnership.call(addressu48K7lY, {from: accounts[4]});
//		const uint256SeRZNlJ = await BlueICECQQqTEX.notifyRewardAmount.call(uintPCdjzOX, {from: accounts[4]});

		await expect(BlueICECQQqTEX.notifyRewardAmount.call(uintPCdjzOX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECQQqTEX = await BlueICE.new({from: accounts[4]});
		const uintcB9xeC8 = BigInt("213")
		const addressDN3CrcF = accounts[0]
//		await BlueICECQQqTEX.renounceOwnership.call({from: accounts[4]});
//		const uint256SeRZNlJ = await BlueICECQQqTEX.notifyRewardAmount.call(uintcB9xeC8, {from: accounts[4]});
//		const addresspO3BzWT = await BlueICECQQqTEX.updateReward.call(addressDN3CrcF, {from: accounts[1]});
//		const addresssjUOdg = await BlueICECQQqTEX.owner.call({from: accounts[3]});
//		await BlueICECQQqTEX.onlyOwner.call({from: accounts[2]});

		await expect(BlueICECQQqTEX.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECQQqTEX = await BlueICE.new({from: accounts[4]});
		const addressm4Z8CWn = "0x00000000000000000000000000000000000000-1"
		const uint2wBpkh = BigInt("56")
		const addresszTV4GeI = accounts[1]
		const uint2q7JWr = BigInt("1441")
		const addressZ4g685H = accounts[2]
		const uint256M6tCQaR = await BlueICECQQqTEX.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256VShkawU = await BlueICECQQqTEX.rewardPerToken.call({from: accounts[0]});
//		const uint256no3uq7 = await BlueICECQQqTEX.earned.call(addressm4Z8CWn, {from: accounts[4]});
//		const uint256m5Atc7y = await BlueICECQQqTEX.stake.call(uint2wBpkh, {from: accounts[4]});
//		const addressJbsDW9c = await BlueICECQQqTEX.owner.call({from: accounts[1]});
//		const addressK9axJ4w = await BlueICECQQqTEX.transferOwnership.call(addresszTV4GeI, {from: accounts[0]});
//		const addressarrayuqkavvk = await BlueICECQQqTEX.getCommunity.call({from: accounts[0]});
//		const addressarrayLJxO7IA = await BlueICECQQqTEX.getCommunity.call({from: accounts[1]});
//		const uint256rW9i5fR = await BlueICECQQqTEX.getCurrentRewardReserve.call({from: accounts[3]});
//		await BlueICECQQqTEX.checkhalv.call({from: accounts[3]});
//		const uint256O31RXci = await BlueICECQQqTEX.unstake.call(uint2q7JWr, {from: accounts[2]});
//		await BlueICECQQqTEX.checkhalv.call({from: accounts[3]});
//		const addressxTxGO2 = await BlueICECQQqTEX.updateReward.call(addressZ4g685H, {from: accounts[2]});
//		const uint256KsaIQiV = await BlueICECQQqTEX.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256M6tCQaR, BigInt("500000000000000000000"))
		assert.equal(uint256VShkawU, BigInt("0"))
		await expect(BlueICECQQqTEX.earned.call(addressm4Z8CWn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})