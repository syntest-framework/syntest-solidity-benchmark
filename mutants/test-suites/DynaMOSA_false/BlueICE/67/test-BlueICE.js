const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEQFaniRK = await BlueICE.new({from: accounts[1]});
		const addressEQ2WPoN = accounts[3]
		const addressPTmQ5hl = accounts[3]
//		const addresstYPbNNP = await BlueICEQFaniRK.transferOwnership.call(addressEQ2WPoN, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshKROxXP = await BlueICEQFaniRK.updateReward.call(addressPTmQ5hl, {from: accounts[0]});
//		await BlueICEQFaniRK.exit.call({from: accounts[2]});

		await expect(BlueICEQFaniRK.transferOwnership.call(addressEQ2WPoN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmeWYrTC = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressa97fb4h = accounts[4]
		const uintnkqbl9k = BigInt("1207")
		const uintuO1y32 = BigInt("2011")
		const uint256g0czI5S = await BlueICEmeWYrTC.rewardPerToken.call({from: accounts[4]});
		const uint256aAxOQGn = await BlueICEmeWYrTC.earned.call(addressa97fb4h, {from: accounts[2]});
		const uint256WVzmNZI = await BlueICEmeWYrTC.stake.call(uintnkqbl9k, {from: accounts[3]});
		const uint256sKx4OrM = await BlueICEmeWYrTC.stake.call(uintuO1y32, {from: accounts[5]});
	});

	it('test for BlueICE', async () => {
		const BlueICEZ7z5NY = await BlueICE.new({from: accounts[1]});
		const addressPVGcmt7 = "0x0000000000000000000000000000000000000001"
		const uinte23iqf1 = BigInt("293")
		const uint256rNWqBfL = await BlueICEZ7z5NY.earned.call(addressPVGcmt7, {from: accounts[3]});
//		const uint256te7nz1z = await BlueICEZ7z5NY.stake.call(uinte23iqf1, {from: accounts[4]});

		assert.equal(uint256rNWqBfL, BigInt("0"))
		await expect(BlueICEZ7z5NY.stake.call(uinte23iqf1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICElEGQQPX = await BlueICE.new({from: accounts[0]});
		const addressyb1VN8U = accounts[3]
		const addressdXBxWcn = accounts[2]
//		await BlueICElEGQQPX.claimRewards.call({from: accounts[4]});
//		const uint256qr3JEaj = await BlueICElEGQQPX.rewardPerToken.call({from: accounts[4]});
//		const uint256w70muOI = await BlueICElEGQQPX.earned.call(addressyb1VN8U, {from: accounts[4]});
//		const uint256hA5MYP = await BlueICElEGQQPX.earned.call(addressdXBxWcn, {from: accounts[0]});
//		const uint256h7scPIT = await BlueICElEGQQPX.getCurrentRewardReserve.call({from: accounts[0]});

		await expect(BlueICElEGQQPX.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEP8ruGLo = await BlueICE.new({from: accounts[1]});
		const uintYIqKaxf = BigInt("1266")
		const uintlPcf4k = BigInt("1414")
		const uint256XKmVte1 = await BlueICEP8ruGLo.getCurrentRewardReserve.call({from: accounts[1]});
//		const uint256sln0bJ6 = await BlueICEP8ruGLo.unstake.call(uintYIqKaxf, {from: accounts[2]});
//		const uint256HQRsoG7 = await BlueICEP8ruGLo.stake.call(uintlPcf4k, {from: accounts[2]});
//		const uint256WXClwgT = await BlueICEP8ruGLo.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XKmVte1, BigInt("500000000000000000000"))
		await expect(BlueICEP8ruGLo.unstake.call(uintYIqKaxf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEucRD9Yw = await BlueICE.new({from: accounts[1]});
		const addressJBBQ0NS = accounts[2]
		const uint256VoVu5XL = await BlueICEucRD9Yw.earned.call(addressJBBQ0NS, {from: accounts[2]});
//		await BlueICEucRD9Yw.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolM7FvPFV = await BlueICEucRD9Yw.isOwner.call({from: accounts[4]});
//		await BlueICEucRD9Yw.checkhalv.call({from: accounts[4]});

		assert.equal(uint256VoVu5XL, BigInt("0"))
		await expect(BlueICEucRD9Yw.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICESGsHrg9 = await BlueICE.new({from: accounts[2]});
		const addressqiWj5gS = accounts[2]
		const addressvkNdfsX = accounts[5]
//		const addressFYYXkC2 = await BlueICESGsHrg9.updateReward.call(addressqiWj5gS, {from: accounts[5]});
//		const uint256FHgr68q = await BlueICESGsHrg9.earned.call(addressvkNdfsX, {from: accounts[2]});
//		await BlueICESGsHrg9.renounceOwnership.call({from: accounts[0]});
//		const boolantvIc6 = await BlueICESGsHrg9.isOwner.call({from: accounts[1]});

		await expect(BlueICESGsHrg9.updateReward.call(addressqiWj5gS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEx52WZH = await BlueICE.new({from: accounts[1]});
		const uintJnnAp2t = BigInt("671")
		const addressooB0LF2 = accounts[3]
//		const uint256BpGrtHk = await BlueICEx52WZH.notifyRewardAmount.call(uintJnnAp2t, {from: accounts[1]});
//		const uint256c1u8niY = await BlueICEx52WZH.earned.call(addressooB0LF2, {from: accounts[5]});
//		await BlueICEx52WZH.renounceOwnership.call({from: accounts[3]});

		await expect(BlueICEx52WZH.notifyRewardAmount.call(uintJnnAp2t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZ7z5NY = await BlueICE.new({from: accounts[1]});
		const uintIAlTa7 = BigInt("270")
		const uint256mp0dtK2 = await BlueICEZ7z5NY.rewardPerToken.call({from: accounts[1]});
		const addressarrayUDKLCfO = await BlueICEZ7z5NY.getCommunity.call({from: accounts[0]});
//		await BlueICEZ7z5NY.exit.call({from: accounts[3]});
//		const uint256OytjBd = await BlueICEZ7z5NY.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256te7nz1z = await BlueICEZ7z5NY.stake.call(uintIAlTa7, {from: accounts[4]});

		assert.equal(addressarrayUDKLCfO, )
		assert.equal(uint256mp0dtK2, BigInt("0"))
		await expect(BlueICEZ7z5NY.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZ7z5NY = await BlueICE.new({from: accounts[1]});
		const uintVe9guoB = BigInt("1063")
		const addressLt9Yhl = "0x0000000000000000000000000000000000000001"
		const addressyCG3VMg = await BlueICEZ7z5NY.owner.call({from: accounts[3]});
//		const uint256XH74oge = await BlueICEZ7z5NY.unstake.call(uintVe9guoB, {from: accounts[4]});
//		await BlueICEZ7z5NY.renounceOwnership.call({from: accounts[4]});
//		const uint256rNWqBfL = await BlueICEZ7z5NY.earned.call(addressLt9Yhl, {from: accounts[3]});
//		const uint256Wbx6Ke = await BlueICEZ7z5NY.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressyCG3VMg, 0xf69E4dAa27b9b5407d9Ab2417e6B8090314f5477)
		await expect(BlueICEZ7z5NY.unstake.call(uintVe9guoB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEx52WZH = await BlueICE.new({from: accounts[1]});
		const addressZrTXZyr = accounts[2]
		const addressC5INDI9 = accounts[2]
		const uintjnT6nNx = BigInt("680")
		const uint2566QZVg7 = await BlueICEx52WZH.earned.call(addressZrTXZyr, {from: accounts[4]});
		const addressn40bISv = await BlueICEx52WZH.transferOwnership.call(addressC5INDI9, {from: accounts[1]});
//		const uint256BpGrtHk = await BlueICEx52WZH.notifyRewardAmount.call(uintjnT6nNx, {from: accounts[1]});

		assert.equal(uint2566QZVg7, BigInt("0"))
		await expect(BlueICEx52WZH.notifyRewardAmount.call(uintjnT6nNx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICELlv1Ry = await BlueICE.new({from: accounts[4]});
		const uintlZf72gh = BigInt("11")
//		await BlueICELlv1Ry.renounceOwnership.call({from: accounts[4]});
//		const uint2560qxxH1 = await BlueICELlv1Ry.notifyRewardAmount.call(uintlZf72gh, {from: accounts[5]});
//		const uint256gA9YYwr = await BlueICELlv1Ry.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(BlueICELlv1Ry.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})