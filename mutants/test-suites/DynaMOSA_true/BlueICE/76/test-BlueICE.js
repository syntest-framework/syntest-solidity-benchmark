const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEg8K0wCC = await BlueICE.new({from: accounts[2]});
		const uintug1lQzQ = BigInt("173")
		const uint256qCLiVl7 = await BlueICEg8K0wCC.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256fgRDSQ = await BlueICEg8K0wCC.notifyRewardAmount.call(uintug1lQzQ, {from: accounts[1]});
//		const uint256BKmJ4h = await BlueICEg8K0wCC.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256qCLiVl7, BigInt("500000000000000000000"))
		await expect(BlueICEg8K0wCC.notifyRewardAmount.call(uintug1lQzQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEW39NAIi = await BlueICE.new({from: accounts[5]});
//		await BlueICEW39NAIi.claimRewards.call({from: accounts[2]});
//		const uint256V3CIVgb = await BlueICEW39NAIi.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256nl2QCx = await BlueICEW39NAIi.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256vifvaFr = await BlueICEW39NAIi.rewardPerToken.call({from: accounts[5]});
//		await BlueICEW39NAIi.exit.call({from: accounts[2]});

		await expect(BlueICEW39NAIi.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEkKJNwsP = await BlueICE.new({from: accounts[1]});
		const uintNSde6j = BigInt("1313")
		const addressYdKq7sA = accounts[2]
		const uint256cv1Y3xw = await BlueICEkKJNwsP.getCurrentRewardReserve.call({from: accounts[2]});
//		await BlueICEkKJNwsP.onlyOwner.call({from: accounts[4]});
//		const uint256pBFXNP = await BlueICEkKJNwsP.unstake.call(uintNSde6j, {from: accounts[4]});
//		const addresstfJUilS = await BlueICEkKJNwsP.transferOwnership.call(addressYdKq7sA, {from: accounts[2]});
//		await BlueICEkKJNwsP.claimRewards.call({from: accounts[1]});

		assert.equal(uint256cv1Y3xw, BigInt("500000000000000000000"))
		await expect(BlueICEkKJNwsP.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEWkuZRcK = await BlueICE.new({from: accounts[4]});
		const uintqH9SazN = BigInt("1395")
//		const uint256Td5KPiA = await BlueICEWkuZRcK.unstake.call(uintqH9SazN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qE0gepd = await BlueICEWkuZRcK.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256DAmxNd = await BlueICEWkuZRcK.getCurrentRewardReserve.call({from: accounts[4]});
//		const addressarraybuPJdrT = await BlueICEWkuZRcK.getCommunity.call({from: accounts[1]});
//		const addressvMSE4fR = await BlueICEWkuZRcK.owner.call({from: accounts[2]});
//		await BlueICEWkuZRcK.claimRewards.call({from: accounts[3]});

		await expect(BlueICEWkuZRcK.unstake.call(uintqH9SazN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBOPEcEH = await BlueICE.new({from: accounts[1]});
		const addressDa4qXO1 = "0x0000000000000000000000000000000000000001"
		const addressuFsqrcq = await BlueICEBOPEcEH.transferOwnership.call(addressDa4qXO1, {from: accounts[1]});
//		await BlueICEBOPEcEH.claimRewards.call({from: accounts[3]});
//		const uint256gOGeqbY = await BlueICEBOPEcEH.getCurrentRewardReserve.call({from: accounts[0]});
//		await BlueICEBOPEcEH.claimRewards.call({from: accounts[0]});
//		await BlueICEBOPEcEH.onlyOwner.call({from: accounts[0]});

		await expect(BlueICEBOPEcEH.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEg8K0wCC = await BlueICE.new({from: accounts[2]});
		const uintMl9wvub = BigInt("1596")
		const uintuIaYgB6 = BigInt("173")
//		const uint256D5oVKoM = await BlueICEg8K0wCC.stake.call(uintMl9wvub, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256fgRDSQ = await BlueICEg8K0wCC.notifyRewardAmount.call(uintuIaYgB6, {from: accounts[1]});
//		const uint256BKmJ4h = await BlueICEg8K0wCC.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(BlueICEg8K0wCC.stake.call(uintMl9wvub, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBe30iSZ = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCbTH6hs = "0x0000000000000000000000000000000000000001"
		const uint256KdzSD4k = await BlueICEBe30iSZ.earned.call(addressCbTH6hs, {from: "0x0000000000000000000000000000000000000001"});
		await BlueICEBe30iSZ.claimRewards.call({from: accounts[0]});
		const uint256wO0rTF = await BlueICEBe30iSZ.getCurrentRewardReserve.call({from: accounts[5]});
	});

	it('test for BlueICE', async () => {
		const BlueICEg8K0wCC = await BlueICE.new({from: accounts[2]});
		const uintYojufNy = BigInt("173")
		const uint256qCLiVl7 = await BlueICEg8K0wCC.getCurrentRewardReserve.call({from: accounts[4]});
		const addressarraykPri6P7 = await BlueICEg8K0wCC.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256fgRDSQ = await BlueICEg8K0wCC.notifyRewardAmount.call(uintYojufNy, {from: accounts[1]});

		assert.equal(addressarraykPri6P7, )
		assert.equal(uint256qCLiVl7, BigInt("500000000000000000000"))
		await expect(BlueICEg8K0wCC.notifyRewardAmount.call(uintYojufNy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEaraYF5 = await BlueICE.new({from: accounts[0]});
		const addressnkVA4gn = accounts[1]
		const addresspxGPeJ2 = accounts[3]
		const uint256LfCiTqN = await BlueICEaraYF5.earned.call(addressnkVA4gn, {from: accounts[3]});
//		await BlueICEaraYF5.exit.call({from: accounts[0]});
//		const addressgZCYavi = await BlueICEaraYF5.transferOwnership.call(addresspxGPeJ2, {from: accounts[1]});

		assert.equal(uint256LfCiTqN, BigInt("0"))
		await expect(BlueICEaraYF5.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEP18GMnX = await BlueICE.new({from: accounts[3]});
		const addressYKulVqC = await BlueICEP18GMnX.owner.call({from: accounts[2]});
		const uint256niGVbQE = await BlueICEP18GMnX.rewardPerToken.call({from: accounts[3]});
//		await BlueICEP18GMnX.claimRewards.call({from: accounts[2]});

		assert.equal(addressYKulVqC, 0x4a3bF57Ef083e57CDa81D3CcA942C8B3C02587D0)
		assert.equal(uint256niGVbQE, BigInt("0"))
		await expect(BlueICEP18GMnX.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEkCsiItl = await BlueICE.new({from: accounts[2]});
		const uintkJzJw2M = BigInt("808")
		const addressDXo9IO3 = accounts[0]
		const uintPU9okk = BigInt("879")
//		await BlueICEkCsiItl.renounceOwnership.call({from: accounts[2]});
//		const bool039i48 = await BlueICEkCsiItl.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KG40lh = await BlueICEkCsiItl.stake.call(uintkJzJw2M, {from: "0x0000000000000000000000000000000000000001"});
//		const addressmwL7Hl = await BlueICEkCsiItl.transferOwnership.call(addressDXo9IO3, {from: accounts[0]});
//		const uint256jerOckv = await BlueICEkCsiItl.unstake.call(uintPU9okk, {from: accounts[4]});
//		const uint256L5oDQlo = await BlueICEkCsiItl.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEkCsiItl.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEaraYF5 = await BlueICE.new({from: accounts[0]});
		const uintglXEgol = BigInt("230")
		const boolAqkACaS = await BlueICEaraYF5.isOwner.call({from: accounts[2]});
//		const uint256cDPmWVh = await BlueICEaraYF5.notifyRewardAmount.call(uintglXEgol, {from: accounts[0]});
//		await BlueICEaraYF5.claimRewards.call({from: accounts[4]});

		assert.equal(boolAqkACaS, false)
		await expect(BlueICEaraYF5.notifyRewardAmount.call(uintglXEgol, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})