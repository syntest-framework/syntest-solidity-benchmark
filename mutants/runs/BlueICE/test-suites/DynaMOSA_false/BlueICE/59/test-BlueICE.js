const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEYxcGlm9 = await BlueICE.new({from: accounts[1]});
		const uintovAxh5O = BigInt("270")
		const addressz8AVEQE = accounts[4]
		const uint256DUzwY6U = await BlueICEYxcGlm9.notifyRewardAmount.call(uintovAxh5O, {from: accounts[4]});
		const uint256HsNF2Yw = await BlueICEYxcGlm9.earned.call(addressz8AVEQE, {from: accounts[4]});
		await BlueICEYxcGlm9.onlyOwner.call({from: accounts[4]});
		const uint256Jv2gWER = await BlueICEYxcGlm9.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256hUYW43C = await BlueICEYxcGlm9.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(BlueICEYxcGlm9.notifyRewardAmount.call(uintovAxh5O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEC7BMtc3 = await BlueICE.new({from: accounts[4]});
		const uintrdmXrtF = BigInt("1741")
		const booldS91Tfl = await BlueICEC7BMtc3.isOwner.call({from: accounts[0]});
		const uint256Cd7dVx = await BlueICEC7BMtc3.stake.call(uintrdmXrtF, {from: accounts[2]});

		assert.equal(booldS91Tfl, false)
		await expect(BlueICEC7BMtc3.stake.call(uintrdmXrtF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnXj8k0 = await BlueICE.new({from: accounts[0]});
		const addresscxahnEW = accounts[3]
		const addressdJ256Ij = accounts[4]
		const address7gXMMg = accounts[4]
		const uint256TUecaFv = await BlueICEnXj8k0.earned.call(addresscxahnEW, {from: accounts[1]});
		const uint256OrxxYGN = await BlueICEnXj8k0.earned.call(addressdJ256Ij, {from: accounts[0]});
		const addressxFQWllk = await BlueICEnXj8k0.updateReward.call(address7gXMMg, {from: accounts[3]});
		await BlueICEnXj8k0.exit.call({from: accounts[0]});

		assert.equal(uint256OrxxYGN, BigInt("0"))
		assert.equal(uint256TUecaFv, BigInt("0"))
		await expect(BlueICEnXj8k0.updateReward.call(address7gXMMg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgnP7Kwu = await BlueICE.new({from: accounts[5]});
		const addressRxkUiqH = accounts[0]
		const addressxT0CmFm = accounts[0]
		const addressXDGaHI7 = accounts[0]
		const uintdMOsxiI = BigInt("544")
		const uint256YMnpiej = await BlueICEgnP7Kwu.earned.call(addressRxkUiqH, {from: accounts[4]});
		const uint256zO1qslY = await BlueICEgnP7Kwu.earned.call(addressxT0CmFm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OokVfi4 = await BlueICEgnP7Kwu.earned.call(addressXDGaHI7, {from: accounts[0]});
		const uint256fBSbSnj = await BlueICEgnP7Kwu.unstake.call(uintdMOsxiI, {from: accounts[2]});
		await BlueICEgnP7Kwu.exit.call({from: accounts[0]});

		assert.equal(uint256OokVfi4, BigInt("0"))
		assert.equal(uint256YMnpiej, BigInt("0"))
		assert.equal(uint256zO1qslY, BigInt("0"))
		await expect(BlueICEgnP7Kwu.unstake.call(uintdMOsxiI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEPNARmh7 = await BlueICE.new({from: accounts[1]});
		const addressAhgffKR = accounts[3]
		await BlueICEPNARmh7.exit.call({from: accounts[3]});
		await BlueICEPNARmh7.onlyOwner.call({from: accounts[0]});
		const addressYkyyAz = await BlueICEPNARmh7.transferOwnership.call(addressAhgffKR, {from: accounts[4]});

		await expect(BlueICEPNARmh7.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnxw3ko7 = await BlueICE.new({from: accounts[0]});
		const uintK9upraa = BigInt("1745")
		const uintaUGdqKo = BigInt("699")
		await BlueICEnxw3ko7.claimRewards.call({from: accounts[2]});
		const boolUVyQAD8 = await BlueICEnxw3ko7.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zZOUVN = await BlueICEnxw3ko7.notifyRewardAmount.call(uintK9upraa, {from: accounts[1]});
		const uint256SoPjZf = await BlueICEnxw3ko7.notifyRewardAmount.call(uintaUGdqKo, {from: accounts[1]});

		await expect(BlueICEnxw3ko7.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdJERBw6 = await BlueICE.new({from: accounts[1]});
		const uintKGoSapF = BigInt("1873")
		const addresspOxwBY = accounts[3]
		const uint256V4Yvn7r = await BlueICEdJERBw6.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GbVxPsG = await BlueICEdJERBw6.stake.call(uintKGoSapF, {from: accounts[0]});
		const uint256n4QiKYP = await BlueICEdJERBw6.getCurrentRewardReserve.call({from: accounts[1]});
		const addressRAWXLgo = await BlueICEdJERBw6.updateReward.call(addresspOxwBY, {from: accounts[2]});

		assert.equal(uint256V4Yvn7r, BigInt("500000000000000000000"))
		await expect(BlueICEdJERBw6.stake.call(uintKGoSapF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdJERBw6 = await BlueICE.new({from: accounts[1]});
		const uintV1GRMuq = BigInt("982")
		const uintzAwGphk = BigInt("1873")
		const addressVg4qDO = accounts[3]
		const uint256V4Yvn7r = await BlueICEdJERBw6.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EzxMe1J = await BlueICEdJERBw6.rewardPerToken.call({from: accounts[4]});
		const uint256aDRIYMZ = await BlueICEdJERBw6.notifyRewardAmount.call(uintV1GRMuq, {from: accounts[1]});
		const uint256GbVxPsG = await BlueICEdJERBw6.stake.call(uintzAwGphk, {from: accounts[0]});
		const uint256n4QiKYP = await BlueICEdJERBw6.getCurrentRewardReserve.call({from: accounts[1]});
		const addressRAWXLgo = await BlueICEdJERBw6.updateReward.call(addressVg4qDO, {from: accounts[2]});

		assert.equal(uint256EzxMe1J, BigInt("0"))
		assert.equal(uint256V4Yvn7r, BigInt("500000000000000000000"))
		await expect(BlueICEdJERBw6.notifyRewardAmount.call(uintV1GRMuq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEj9bdD8q = await BlueICE.new({from: accounts[4]});
		const addressaEKZbOD = accounts[2]
		const addressarraySzi6lGY = await BlueICEj9bdD8q.getCommunity.call({from: accounts[2]});
		const addressWdCmL0f = await BlueICEj9bdD8q.owner.call({from: accounts[0]});
		const uint256Kau2uci = await BlueICEj9bdD8q.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressrqYR5Tu = await BlueICEj9bdD8q.transferOwnership.call(addressaEKZbOD, {from: accounts[5]});

		assert.equal(addressWdCmL0f, 0x78a4F757DAc768fD2fc1c75EE59FEE923a2828f3)
		assert.equal(addressarraySzi6lGY, )
		assert.equal(uint256Kau2uci, BigInt("0"))
		await expect(BlueICEj9bdD8q.transferOwnership.call(addressaEKZbOD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED5JOm0 = await BlueICE.new({from: accounts[3]});
		const addresslnBK9VM = accounts[4]
		const addressarraykMYfS3u = await BlueICED5JOm0.getCommunity.call({from: accounts[1]});
		const addressW6gymTD = await BlueICED5JOm0.transferOwnership.call(addresslnBK9VM, {from: accounts[3]});
		const uint256yWsQ0pJ = await BlueICED5JOm0.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(addressarraykMYfS3u, )
		assert.equal(uint256yWsQ0pJ, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEoQfn8I5 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJxNHFRU = BigInt("1653")
		const uint256Qt18MSd = await BlueICEoQfn8I5.rewardPerToken.call({from: accounts[3]});
		const uint256dVNG8Yq = await BlueICEoQfn8I5.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256MHxiQkY = await BlueICEoQfn8I5.notifyRewardAmount.call(uintJxNHFRU, {from: accounts[0]});
	});

	it('test for BlueICE', async () => {
		const BlueICEC7BMtc3 = await BlueICE.new({from: accounts[4]});
		const uintXGCndzh = BigInt("63")
		const uint256wj0VTUX = await BlueICEC7BMtc3.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayS9ByTdA = await BlueICEC7BMtc3.getCommunity.call({from: accounts[2]});
		await BlueICEC7BMtc3.renounceOwnership.call({from: accounts[4]});
		const uint256Cd7dVx = await BlueICEC7BMtc3.stake.call(uintXGCndzh, {from: accounts[2]});

		assert.equal(addressarrayS9ByTdA, )
		assert.equal(uint256wj0VTUX, BigInt("0"))
		await expect(BlueICEC7BMtc3.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})