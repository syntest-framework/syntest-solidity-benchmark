const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEEayJPkZ = await BlueICE.new({from: accounts[2]});
		const addresszCRwG2w = accounts[4]
		const uint256oluAJEe = await BlueICEEayJPkZ.earned.call(addresszCRwG2w, {from: accounts[0]});
		const boolU1tryyA = await BlueICEEayJPkZ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEEayJPkZ.claimRewards.call({from: accounts[1]});
		const addressByihbuL = await BlueICEEayJPkZ.owner.call({from: accounts[3]});
		const addressarrayLqWlK5O = await BlueICEEayJPkZ.getCommunity.call({from: accounts[1]});

		assert.equal(boolU1tryyA, false)
		assert.equal(uint256oluAJEe, BigInt("0"))
		await expect(BlueICEEayJPkZ.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEpVa0N4g = await BlueICE.new({from: accounts[4]});
		const uintobK7oNi = BigInt("1564")
		const uintKkA31L = BigInt("262")
		const uintSfS9NoS = BigInt("1278")
		const addressa1VcBnu = await BlueICEpVa0N4g.owner.call({from: accounts[0]});
		const uint256g9H7oH = await BlueICEpVa0N4g.notifyRewardAmount.call(uintobK7oNi, {from: accounts[0]});
		const uint256Juze4ik = await BlueICEpVa0N4g.notifyRewardAmount.call(uintKkA31L, {from: accounts[3]});
		const uint256RQjoPkX = await BlueICEpVa0N4g.notifyRewardAmount.call(uintSfS9NoS, {from: accounts[1]});

		assert.equal(addressa1VcBnu, 0xab414b4e422616f272cFF0CD3aA70970F0C71bD0)
		await expect(BlueICEpVa0N4g.notifyRewardAmount.call(uintobK7oNi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEtHgtu7r = await BlueICE.new({from: accounts[0]});
		const uintiSO9K4k = BigInt("1311")
		const uint2569kZF7J = await BlueICEtHgtu7r.unstake.call(uintiSO9K4k, {from: accounts[5]});
		const addressPCksduV = await BlueICEtHgtu7r.owner.call({from: accounts[5]});

		await expect(BlueICEtHgtu7r.unstake.call(uintiSO9K4k, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERigVtIc = await BlueICE.new({from: accounts[2]});
		const uintLPQWJLB = BigInt("845")
		const addresswBxHKou = accounts[2]
		await BlueICERigVtIc.onlyOwner.call({from: accounts[2]});
		const boolwa5I1lB = await BlueICERigVtIc.isOwner.call({from: accounts[3]});
		const uint256CwLdBL = await BlueICERigVtIc.notifyRewardAmount.call(uintLPQWJLB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ozk0MF = await BlueICERigVtIc.earned.call(addresswBxHKou, {from: accounts[4]});

		await expect(BlueICERigVtIc.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEkNFRbnU = await BlueICE.new({from: accounts[4]});
		const boolbI5TBpY = await BlueICEkNFRbnU.isOwner.call({from: accounts[3]});
		const uint256NH39hGW = await BlueICEkNFRbnU.lastTimeRewardApplicable.call({from: accounts[2]});
		await BlueICEkNFRbnU.exit.call({from: accounts[1]});

		assert.equal(boolbI5TBpY, false)
		assert.equal(uint256NH39hGW, BigInt("0"))
		await expect(BlueICEkNFRbnU.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEcdjId2v = await BlueICE.new({from: accounts[5]});
		const addressdbTiEMP = accounts[1]
		const uintzqEBInH = BigInt("1239")
		await BlueICEcdjId2v.renounceOwnership.call({from: accounts[5]});
		const uint256OA2gRlR = await BlueICEcdjId2v.earned.call(addressdbTiEMP, {from: accounts[4]});
		await BlueICEcdjId2v.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256tcfJTY8 = await BlueICEcdjId2v.notifyRewardAmount.call(uintzqEBInH, {from: accounts[4]});

		await expect(BlueICEcdjId2v.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEMmvgXkN = await BlueICE.new({from: accounts[4]});
		const addressJp3GHer = accounts[4]
		const uinttV3yIiR = BigInt("1680")
		const addressarrayUtvTEWN = await BlueICEMmvgXkN.getCommunity.call({from: accounts[0]});
		const addressqxVD7Xq = await BlueICEMmvgXkN.updateReward.call(addressJp3GHer, {from: accounts[4]});
		const uint256GKPQhQY = await BlueICEMmvgXkN.rewardPerToken.call({from: accounts[4]});
		const uint25613QllQ = await BlueICEMmvgXkN.notifyRewardAmount.call(uinttV3yIiR, {from: accounts[5]});
		const addressOangurG = await BlueICEMmvgXkN.owner.call({from: accounts[0]});

		assert.equal(addressarrayUtvTEWN, )
		await expect(BlueICEMmvgXkN.updateReward.call(addressJp3GHer, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEtHgtu7r = await BlueICE.new({from: accounts[0]});
		const addressdekY4d = accounts[4]
		const uintUrxEYwC = BigInt("1299")
		const uint256e1PuzcH = await BlueICEtHgtu7r.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressrNFZzSx = await BlueICEtHgtu7r.transferOwnership.call(addressdekY4d, {from: accounts[0]});
		const uint2569kZF7J = await BlueICEtHgtu7r.unstake.call(uintUrxEYwC, {from: accounts[5]});

		assert.equal(uint256e1PuzcH, BigInt("0"))
		await expect(BlueICEtHgtu7r.unstake.call(uintUrxEYwC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEtHgtu7r = await BlueICE.new({from: accounts[0]});
		const uintSUcx8oV = BigInt("1450")
		const uintNUZIck5 = BigInt("135")
		const addressarrayyDsOJE5 = await BlueICEtHgtu7r.getCommunity.call({from: accounts[1]});
		const uint256WwbnUSm = await BlueICEtHgtu7r.notifyRewardAmount.call(uintSUcx8oV, {from: accounts[0]});
		const uint2569kZF7J = await BlueICEtHgtu7r.unstake.call(uintNUZIck5, {from: accounts[5]});
		await BlueICEtHgtu7r.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayyDsOJE5, )
		await expect(BlueICEtHgtu7r.notifyRewardAmount.call(uintSUcx8oV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEtHgtu7r = await BlueICE.new({from: accounts[0]});
		const uintMYTUoz = BigInt("1121")
		await BlueICEtHgtu7r.renounceOwnership.call({from: accounts[0]});
		const uint256Hb2PNcI = await BlueICEtHgtu7r.getCurrentRewardReserve.call({from: accounts[1]});
		const uint2569kZF7J = await BlueICEtHgtu7r.unstake.call(uintMYTUoz, {from: accounts[5]});

		await expect(BlueICEtHgtu7r.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEm9aY8RM = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFQ4hNb = BigInt("290")
		await BlueICEm9aY8RM.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEm9aY8RM.claimRewards.call({from: accounts[1]});
		const uint256WgowtB9 = await BlueICEm9aY8RM.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256n8cBaHD = await BlueICEm9aY8RM.stake.call(uintFQ4hNb, {from: accounts[4]});
		const uint256NOYv2Bd = await BlueICEm9aY8RM.getCurrentRewardReserve.call({from: accounts[4]});
	});

	it('test for BlueICE', async () => {
		const BlueICEtHgtu7r = await BlueICE.new({from: accounts[0]});
		const uinto8v9th1 = BigInt("629")
		const uintL4eCWiz = BigInt("1274")
		const uint256ZBejihA = await BlueICEtHgtu7r.stake.call(uinto8v9th1, {from: accounts[5]});
		const uint2569kZF7J = await BlueICEtHgtu7r.unstake.call(uintL4eCWiz, {from: accounts[5]});

		await expect(BlueICEtHgtu7r.stake.call(uinto8v9th1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})