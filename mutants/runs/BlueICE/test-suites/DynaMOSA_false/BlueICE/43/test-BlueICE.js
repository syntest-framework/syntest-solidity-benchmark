const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEEKDI9NE = await BlueICE.new({from: accounts[3]});
		const uintKDTmJTx = BigInt("1474")
		const uintJNIKquO = BigInt("271")
		const addresswOsxPH8 = accounts[2]
		await BlueICEEKDI9NE.onlyOwner.call({from: accounts[3]});
		const uint256de7l0id = await BlueICEEKDI9NE.unstake.call(uintKDTmJTx, {from: accounts[3]});
		const uint256AmopEpj = await BlueICEEKDI9NE.unstake.call(uintJNIKquO, {from: accounts[3]});
		const uint256UVoBTt6 = await BlueICEEKDI9NE.earned.call(addresswOsxPH8, {from: accounts[1]});
		await BlueICEEKDI9NE.checkhalv.call({from: accounts[2]});

		await expect(BlueICEEKDI9NE.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnVWWYA6 = await BlueICE.new({from: accounts[5]});
		const addresszdXDfgv = accounts[0]
		const addressdlYrbDt = accounts[0]
		const addressLpZP2ys = await BlueICEnVWWYA6.transferOwnership.call(addresszdXDfgv, {from: accounts[5]});
		await BlueICEnVWWYA6.claimRewards.call({from: accounts[2]});
		const addressFgscNik = await BlueICEnVWWYA6.owner.call({from: accounts[3]});
		const addresscKiUxC6 = await BlueICEnVWWYA6.updateReward.call(addressdlYrbDt, {from: accounts[3]});
		const uint256dsSpI1W = await BlueICEnVWWYA6.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEnVWWYA6.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECKxrxYC = await BlueICE.new({from: accounts[0]});
		const uintoXX110k = BigInt("1589")
		const addressarrayf2oNbV = await BlueICECKxrxYC.getCommunity.call({from: accounts[5]});
		const addressarraybYNMGTb = await BlueICECKxrxYC.getCommunity.call({from: accounts[0]});
		const uint256dcRFgjc = await BlueICECKxrxYC.getCurrentRewardReserve.call({from: accounts[4]});
		await BlueICECKxrxYC.onlyOwner.call({from: accounts[1]});
		const uint256gEWKiHK = await BlueICECKxrxYC.unstake.call(uintoXX110k, {from: accounts[3]});
		const addressm3lH6Nw = await BlueICECKxrxYC.owner.call({from: accounts[0]});

		assert.equal(addressarraybYNMGTb, )
		assert.equal(addressarrayf2oNbV, )
		assert.equal(uint256dcRFgjc, BigInt("500000000000000000000"))
		await expect(BlueICECKxrxYC.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEqM5KSfl = await BlueICE.new({from: accounts[3]});
		const uintSFaA4wD = BigInt("1640")
		const uint256m0fKNSg = await BlueICEqM5KSfl.notifyRewardAmount.call(uintSFaA4wD, {from: accounts[0]});
		await BlueICEqM5KSfl.onlyOwner.call({from: accounts[1]});
		await BlueICEqM5KSfl.exit.call({from: accounts[5]});
		const uint256YDRMgkl = await BlueICEqM5KSfl.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BlueICEqM5KSfl.notifyRewardAmount.call(uintSFaA4wD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEDpO9qMO = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressajbHO2 = await BlueICEDpO9qMO.owner.call({from: accounts[5]});
		const addressowKvtPQ = await BlueICEDpO9qMO.owner.call({from: accounts[0]});
		const addresstNh1cwh = await BlueICEDpO9qMO.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ISsZ9GJ = await BlueICEDpO9qMO.lastTimeRewardApplicable.call({from: accounts[3]});
		await BlueICEDpO9qMO.exit.call({from: accounts[4]});
	});

	it('test for BlueICE', async () => {
		const BlueICEctMvJ5X = await BlueICE.new({from: accounts[1]});
		const boolf09TSCp = await BlueICEctMvJ5X.isOwner.call({from: accounts[2]});
		await BlueICEctMvJ5X.exit.call({from: accounts[4]});
		const addressarrayGctKTj7 = await BlueICEctMvJ5X.getCommunity.call({from: accounts[0]});

		assert.equal(boolf09TSCp, false)
		await expect(BlueICEctMvJ5X.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnVWWYA6 = await BlueICE.new({from: accounts[5]});
		const uintF5pND6J = BigInt("1902")
		const addressCDGHqHr = accounts[0]
		const addressxxx7iRI = accounts[4]
		const addressTpka2T = accounts[0]
		const uint256dQz6JhX = await BlueICEnVWWYA6.stake.call(uintF5pND6J, {from: accounts[2]});
		await BlueICEnVWWYA6.exit.call({from: accounts[1]});
		const addressLpZP2ys = await BlueICEnVWWYA6.transferOwnership.call(addressCDGHqHr, {from: accounts[5]});
		await BlueICEnVWWYA6.claimRewards.call({from: accounts[2]});
		const addresszeYGIWu = await BlueICEnVWWYA6.updateReward.call(addressxxx7iRI, {from: accounts[1]});
		const addresscKiUxC6 = await BlueICEnVWWYA6.updateReward.call(addressTpka2T, {from: accounts[3]});
		const uint256dsSpI1W = await BlueICEnVWWYA6.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEnVWWYA6.stake.call(uintF5pND6J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEctMvJ5X = await BlueICE.new({from: accounts[1]});
		const uint256yDbkSQF = await BlueICEctMvJ5X.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256TNtOR05 = await BlueICEctMvJ5X.getCurrentRewardReserve.call({from: accounts[4]});
		const boolf09TSCp = await BlueICEctMvJ5X.isOwner.call({from: accounts[2]});
		const addresst1AAWHs = await BlueICEctMvJ5X.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayGctKTj7 = await BlueICEctMvJ5X.getCommunity.call({from: accounts[0]});

		assert.equal(addressarrayGctKTj7, )
		assert.equal(addresst1AAWHs, 0x532b65075781d2D3482DF8C2d33C1a4Afada6e26)
		assert.equal(boolf09TSCp, false)
		assert.equal(uint256TNtOR05, BigInt("500000000000000000000"))
		assert.equal(uint256yDbkSQF, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEnVWWYA6 = await BlueICE.new({from: accounts[5]});
		const uintyjqPuGW = BigInt("55")
		const addressX1Vqq4U = accounts[0]
		const uint256QjLTKes = await BlueICEnVWWYA6.unstake.call(uintyjqPuGW, {from: accounts[1]});
		const addressLpZP2ys = await BlueICEnVWWYA6.transferOwnership.call(addressX1Vqq4U, {from: accounts[5]});
		await BlueICEnVWWYA6.claimRewards.call({from: accounts[2]});
		const addressFgscNik = await BlueICEnVWWYA6.owner.call({from: accounts[3]});
		const uint256dsSpI1W = await BlueICEnVWWYA6.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEnVWWYA6.unstake.call(uintyjqPuGW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEctMvJ5X = await BlueICE.new({from: accounts[1]});
		const uintLNZdvCg = BigInt("403")
		const boolf09TSCp = await BlueICEctMvJ5X.isOwner.call({from: accounts[2]});
		const uint256QiUTXAh = await BlueICEctMvJ5X.notifyRewardAmount.call(uintLNZdvCg, {from: accounts[1]});
		const addressarrayGctKTj7 = await BlueICEctMvJ5X.getCommunity.call({from: accounts[0]});

		assert.equal(boolf09TSCp, false)
		await expect(BlueICEctMvJ5X.notifyRewardAmount.call(uintLNZdvCg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEctMvJ5X = await BlueICE.new({from: accounts[1]});
		const uintl29s03 = BigInt("1288")
		const addressbG6oQmC = accounts[2]
		const uintuvFAz5d = BigInt("1927")
		const addressuRXsc1s = accounts[2]
		await BlueICEctMvJ5X.renounceOwnership.call({from: accounts[1]});
		const uint256iHJePt = await BlueICEctMvJ5X.rewardPerToken.call({from: accounts[1]});
		const uint256QiUTXAh = await BlueICEctMvJ5X.notifyRewardAmount.call(uintl29s03, {from: accounts[1]});
		const uint256i899yD3 = await BlueICEctMvJ5X.rewardPerToken.call({from: accounts[0]});
		const addressarrayTg6ZwjH = await BlueICEctMvJ5X.getCommunity.call({from: accounts[2]});
		const uint256XKYnF5 = await BlueICEctMvJ5X.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256gS9r4z9 = await BlueICEctMvJ5X.earned.call(addressbG6oQmC, {from: accounts[4]});
		const uint256MqsmBke = await BlueICEctMvJ5X.notifyRewardAmount.call(uintuvFAz5d, {from: accounts[0]});
		await BlueICEctMvJ5X.exit.call({from: accounts[0]});
		const uint256iHpZSWw = await BlueICEctMvJ5X.earned.call(addressuRXsc1s, {from: accounts[4]});

		await expect(BlueICEctMvJ5X.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})