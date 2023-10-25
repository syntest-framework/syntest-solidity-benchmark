const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEPErXN3Q = await BlueICE.new({from: accounts[5]});
		const addressjrGRNvY = accounts[1]
		const addressRNibTt = accounts[4]
		const uint256JQNYgpW = await BlueICEPErXN3Q.earned.call(addressjrGRNvY, {from: accounts[3]});
		await BlueICEPErXN3Q.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AAgGq15 = await BlueICEPErXN3Q.lastTimeRewardApplicable.call({from: accounts[4]});
		await BlueICEPErXN3Q.onlyOwner.call({from: accounts[5]});
		const uint256JsS7GAz = await BlueICEPErXN3Q.earned.call(addressRNibTt, {from: accounts[0]});

		assert.equal(uint256JQNYgpW, BigInt("0"))
		await expect(BlueICEPErXN3Q.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKHJKMuR = await BlueICE.new({from: accounts[5]});
		const uint256QO9VI6u = await BlueICEKHJKMuR.rewardPerToken.call({from: accounts[3]});
		const addressarrayfDxwRc4 = await BlueICEKHJKMuR.getCommunity.call({from: accounts[4]});

		assert.equal(addressarrayfDxwRc4, )
		assert.equal(uint256QO9VI6u, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEIqhjG5j = await BlueICE.new({from: accounts[3]});
		const uintx4nwTYr = BigInt("1829")
		await BlueICEIqhjG5j.onlyOwner.call({from: accounts[3]});
		await BlueICEIqhjG5j.exit.call({from: accounts[1]});
		const uint256ddmltxc = await BlueICEIqhjG5j.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256GjW790v = await BlueICEIqhjG5j.notifyRewardAmount.call(uintx4nwTYr, {from: accounts[5]});

		await expect(BlueICEIqhjG5j.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEzKZffcD = await BlueICE.new({from: accounts[1]});
		const addressarrayzuOXxQ = await BlueICEzKZffcD.getCommunity.call({from: accounts[5]});
		const uint256yilSjiQ = await BlueICEzKZffcD.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256cd2equN = await BlueICEzKZffcD.rewardPerToken.call({from: accounts[2]});
		const uint256j4B8yLu = await BlueICEzKZffcD.rewardPerToken.call({from: accounts[1]});

		assert.equal(addressarrayzuOXxQ, )
		assert.equal(uint256cd2equN, BigInt("0"))
		assert.equal(uint256j4B8yLu, BigInt("0"))
		assert.equal(uint256yilSjiQ, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEhep78Me = await BlueICE.new({from: accounts[4]});
		const addressP8wEHwN = accounts[2]
		const uintmgADIcJ = BigInt("1768")
		await BlueICEhep78Me.exit.call({from: accounts[3]});
		const addressI0MS1vJ = await BlueICEhep78Me.transferOwnership.call(addressP8wEHwN, {from: accounts[3]});
		const addressarrayBQ8RDJU = await BlueICEhep78Me.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qtjTBIc = await BlueICEhep78Me.rewardPerToken.call({from: accounts[4]});
		const uint256agb7GOU = await BlueICEhep78Me.stake.call(uintmgADIcJ, {from: accounts[4]});

		await expect(BlueICEhep78Me.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEzKLPvT = await BlueICE.new({from: accounts[1]});
		const uintCwrIzX = BigInt("1193")
		const addressarrayamXOAzb = await BlueICEzKLPvT.getCommunity.call({from: accounts[0]});
		const uint256yTJ0fQ3 = await BlueICEzKLPvT.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256Qaj07Te = await BlueICEzKLPvT.stake.call(uintCwrIzX, {from: accounts[3]});
		await BlueICEzKLPvT.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressarrayamXOAzb, )
		assert.equal(uint256yTJ0fQ3, BigInt("500000000000000000000"))
		await expect(BlueICEzKLPvT.stake.call(uintCwrIzX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHcVdvuo = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTXPvKmd = accounts[5]
		const uint2568CRGfM = await BlueICEHcVdvuo.earned.call(addressTXPvKmd, {from: "0x0000000000000000000000000000000000000001"});
		const addressarraydFpLwhZ = await BlueICEHcVdvuo.getCommunity.call({from: accounts[1]});
		await BlueICEHcVdvuo.claimRewards.call({from: accounts[3]});
	});

	it('test for BlueICE', async () => {
		const BlueICEY5T8Erp = await BlueICE.new({from: accounts[4]});
		const addressYsOJX6r = accounts[1]
		const boolfNEYUhU = await BlueICEY5T8Erp.isOwner.call({from: accounts[1]});
		await BlueICEY5T8Erp.claimRewards.call({from: accounts[2]});
		const address7aP1lk = await BlueICEY5T8Erp.updateReward.call(addressYsOJX6r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfNEYUhU, false)
		await expect(BlueICEY5T8Erp.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEzKZffcD = await BlueICE.new({from: accounts[1]});
		const uintVuy166p = BigInt("814")
		const uintVoli5jr = BigInt("705")
		const addressarrayzuOXxQ = await BlueICEzKZffcD.getCommunity.call({from: accounts[5]});
		const uint256yilSjiQ = await BlueICEzKZffcD.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256cd2equN = await BlueICEzKZffcD.rewardPerToken.call({from: accounts[2]});
		const uint256P0Cg8OE = await BlueICEzKZffcD.unstake.call(uintVuy166p, {from: accounts[4]});
		const uint256NDd3rt5 = await BlueICEzKZffcD.notifyRewardAmount.call(uintVoli5jr, {from: accounts[1]});
		const uint256j4B8yLu = await BlueICEzKZffcD.rewardPerToken.call({from: accounts[1]});

		assert.equal(addressarrayzuOXxQ, )
		assert.equal(uint256cd2equN, BigInt("0"))
		assert.equal(uint256yilSjiQ, BigInt("500000000000000000000"))
		await expect(BlueICEzKZffcD.unstake.call(uintVuy166p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKHJKMuR = await BlueICE.new({from: accounts[5]});
		const addressocSx6Zh = accounts[3]
		const addressk0eTuF = accounts[0]
		const addressogaqByX = await BlueICEKHJKMuR.transferOwnership.call(addressocSx6Zh, {from: accounts[5]});
		const uint256QO9VI6u = await BlueICEKHJKMuR.rewardPerToken.call({from: accounts[3]});
		const addressQ6seCjH = await BlueICEKHJKMuR.transferOwnership.call(addressk0eTuF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QO9VI6u, BigInt("0"))
		await expect(BlueICEKHJKMuR.transferOwnership.call(addressk0eTuF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKHJKMuR = await BlueICE.new({from: accounts[5]});
		const uintS879uzI = BigInt("1542")
		const boolgtwtiDQ = await BlueICEKHJKMuR.isOwner.call({from: accounts[0]});
		const uint256AY03Azd = await BlueICEKHJKMuR.notifyRewardAmount.call(uintS879uzI, {from: accounts[5]});
		const addressarrayfDxwRc4 = await BlueICEKHJKMuR.getCommunity.call({from: accounts[4]});

		assert.equal(boolgtwtiDQ, false)
		await expect(BlueICEKHJKMuR.notifyRewardAmount.call(uintS879uzI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKHJKMuR = await BlueICE.new({from: accounts[5]});
		const uintb3fXmIR = BigInt("1443")
		const uintcFDxYOQ = BigInt("51")
		const uintNEpUNlD = BigInt("1554")
		const boolgtwtiDQ = await BlueICEKHJKMuR.isOwner.call({from: accounts[0]});
		const uint256eAqana4 = await BlueICEKHJKMuR.getCurrentRewardReserve.call({from: accounts[2]});
		const address4bGIjj = await BlueICEKHJKMuR.owner.call({from: accounts[3]});
		const uint256serlz10 = await BlueICEKHJKMuR.notifyRewardAmount.call(uintb3fXmIR, {from: accounts[0]});
		const uint256alW2gw = await BlueICEKHJKMuR.unstake.call(uintcFDxYOQ, {from: accounts[0]});
		const uint256AY03Azd = await BlueICEKHJKMuR.notifyRewardAmount.call(uintNEpUNlD, {from: accounts[5]});
		const addressarrayfDxwRc4 = await BlueICEKHJKMuR.getCommunity.call({from: accounts[4]});

		assert.equal(address4bGIjj, 0xBee08b24A209313cdb1437FBC6FA35244C277329)
		assert.equal(boolgtwtiDQ, false)
		assert.equal(uint256eAqana4, BigInt("500000000000000000000"))
		await expect(BlueICEKHJKMuR.notifyRewardAmount.call(uintb3fXmIR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICErNTagoK = await BlueICE.new({from: accounts[3]});
		const uintgwEjEVm = BigInt("117")
		await BlueICErNTagoK.renounceOwnership.call({from: accounts[3]});
		const addressarraygHh93aH = await BlueICErNTagoK.getCommunity.call({from: accounts[4]});
		const uint256eeq0lTC = await BlueICErNTagoK.rewardPerToken.call({from: accounts[4]});
		const uint256cP2tDmG = await BlueICErNTagoK.stake.call(uintgwEjEVm, {from: accounts[4]});

		await expect(BlueICErNTagoK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})