const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEd75qvf = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNp4F6VL = accounts[5]
		const addressNiy6GvI = accounts[5]
		const uint256HOz7Amt = await BlueICEd75qvf.earned.call(addressNp4F6VL, {from: accounts[2]});
		await BlueICEd75qvf.renounceOwnership.call({from: accounts[3]});
		await BlueICEd75qvf.checkhalv.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEd75qvf.onlyOwner.call({from: accounts[3]});
		const uint256dCgeOAu = await BlueICEd75qvf.earned.call(addressNiy6GvI, {from: accounts[2]});
		const uint256IWxRALg = await BlueICEd75qvf.getCurrentRewardReserve.call({from: accounts[2]});
	});

	it('test for BlueICE', async () => {
		const BlueICEOeflmkA = await BlueICE.new({from: accounts[4]});
		const addressyoaw8me = "0x0000000000000000000000000000000000000001"
		const uintfwPoypK = BigInt("1043")
		const addressZQtv1Ox = accounts[2]
		const addressDcjDbR3 = await BlueICEOeflmkA.updateReward.call(addressyoaw8me, {from: accounts[0]});
		const uint256fcAaYDe = await BlueICEOeflmkA.stake.call(uintfwPoypK, {from: "0x0000000000000000000000000000000000000001"});
		const addressEtm7emN = await BlueICEOeflmkA.updateReward.call(addressZQtv1Ox, {from: accounts[1]});

		await expect(BlueICEOeflmkA.updateReward.call(addressyoaw8me, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEestzsu = await BlueICE.new({from: accounts[4]});
		const uint82MivK = BigInt("1848")
		const uintg8PEDZ = BigInt("990")
		const uintSXbpWNa = BigInt("333")
		const uintJoGCZwb = BigInt("323")
		const uint256fJ2r1jd = await BlueICEestzsu.notifyRewardAmount.call(uint82MivK, {from: accounts[4]});
		const uint256S2AAmCR = await BlueICEestzsu.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEestzsu.renounceOwnership.call({from: accounts[3]});
		const uint256Ju3kFA9 = await BlueICEestzsu.unstake.call(uintg8PEDZ, {from: accounts[0]});
		const uint256mVZaCCc = await BlueICEestzsu.notifyRewardAmount.call(uintSXbpWNa, {from: accounts[2]});
		const uint256Ncb36D9 = await BlueICEestzsu.unstake.call(uintJoGCZwb, {from: accounts[1]});

		await expect(BlueICEestzsu.notifyRewardAmount.call(uint82MivK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfmjqjZ9 = await BlueICE.new({from: accounts[0]});
		const addressskxQPx9 = accounts[5]
		await BlueICEfmjqjZ9.exit.call({from: accounts[4]});
		const uint256XbtSZxn = await BlueICEfmjqjZ9.rewardPerToken.call({from: accounts[1]});
		const addresshxWxeO = await BlueICEfmjqjZ9.transferOwnership.call(addressskxQPx9, {from: accounts[2]});
		const addressarrayMtZkKI5 = await BlueICEfmjqjZ9.getCommunity.call({from: accounts[3]});
		const addressQ9XE5d6 = await BlueICEfmjqjZ9.owner.call({from: accounts[1]});

		await expect(BlueICEfmjqjZ9.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmuXw2OV = await BlueICE.new({from: accounts[2]});
		const addressI97IAnS = accounts[0]
		const uint256EeuuUU = await BlueICEmuXw2OV.rewardPerToken.call({from: accounts[1]});
		await BlueICEmuXw2OV.claimRewards.call({from: accounts[3]});
		const uint256LrfIXCs = await BlueICEmuXw2OV.earned.call(addressI97IAnS, {from: accounts[4]});
		await BlueICEmuXw2OV.exit.call({from: accounts[3]});

		assert.equal(uint256EeuuUU, BigInt("0"))
		await expect(BlueICEmuXw2OV.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEJxwgnXM = await BlueICE.new({from: accounts[0]});
		const addressd8l5ktl = accounts[1]
		const uintMV1ojlE = BigInt("417")
		const address4zVOIY = accounts[1]
		const addressvEh80bk = await BlueICEJxwgnXM.transferOwnership.call(addressd8l5ktl, {from: accounts[2]});
		const uint256SFGolBY = await BlueICEJxwgnXM.rewardPerToken.call({from: accounts[1]});
		const uint256qymd3GL = await BlueICEJxwgnXM.unstake.call(uintMV1ojlE, {from: accounts[5]});
		const addressPqKHZLP = await BlueICEJxwgnXM.updateReward.call(address4zVOIY, {from: accounts[4]});

		await expect(BlueICEJxwgnXM.transferOwnership.call(addressd8l5ktl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const addressliDrp1z = "0x0000000000000000000000000000000000000001"
		const uintT1IRFKL = BigInt("1732")
		const uint256PZz0Y4 = await BlueICED8AgObr.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256btXmQqa = await BlueICED8AgObr.earned.call(addressliDrp1z, {from: accounts[0]});
		const uint256T0tjhHb = await BlueICED8AgObr.notifyRewardAmount.call(uintT1IRFKL, {from: accounts[4]});

		assert.equal(uint256PZz0Y4, BigInt("500000000000000000000"))
		assert.equal(uint256btXmQqa, BigInt("0"))
		await expect(BlueICED8AgObr.notifyRewardAmount.call(uintT1IRFKL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const addressgDskOJ = accounts[4]
		const addressBmSEpMj = "0x0000000000000000000000000000000000000000"
		const uintkowKiTx = BigInt("1638")
		const uint256WlvS7nq = await BlueICED8AgObr.earned.call(addressgDskOJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PZz0Y4 = await BlueICED8AgObr.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256btXmQqa = await BlueICED8AgObr.earned.call(addressBmSEpMj, {from: accounts[0]});
		const uint256jGrRHbv = await BlueICED8AgObr.unstake.call(uintkowKiTx, {from: accounts[4]});
		await BlueICED8AgObr.exit.call({from: accounts[2]});

		assert.equal(uint256PZz0Y4, BigInt("500000000000000000000"))
		assert.equal(uint256WlvS7nq, BigInt("0"))
		assert.equal(uint256btXmQqa, BigInt("0"))
		await expect(BlueICED8AgObr.unstake.call(uintkowKiTx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfmjqjZ9 = await BlueICE.new({from: accounts[0]});
		const addressyxa7Oqi = accounts[5]
		const addressujhLA9Z = await BlueICEfmjqjZ9.owner.call({from: accounts[3]});
		await BlueICEfmjqjZ9.exit.call({from: accounts[4]});
		const uint256XbtSZxn = await BlueICEfmjqjZ9.rewardPerToken.call({from: accounts[1]});
		await BlueICEfmjqjZ9.onlyOwner.call({from: accounts[4]});
		await BlueICEfmjqjZ9.onlyOwner.call({from: accounts[2]});
		const addresshxWxeO = await BlueICEfmjqjZ9.transferOwnership.call(addressyxa7Oqi, {from: accounts[2]});
		const addressarrayMtZkKI5 = await BlueICEfmjqjZ9.getCommunity.call({from: accounts[3]});
		const addressQ9XE5d6 = await BlueICEfmjqjZ9.owner.call({from: accounts[1]});

		assert.equal(addressujhLA9Z, 0xf48Cf6794a7E924B46FAe4282C3Af34235798CB4)
		await expect(BlueICEfmjqjZ9.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const uintc8iHdjo = BigInt("214")
		const uint256aKDjArY = await BlueICED8AgObr.stake.call(uintc8iHdjo, {from: accounts[4]});
		const uint256PZz0Y4 = await BlueICED8AgObr.getCurrentRewardReserve.call({from: accounts[4]});
		await BlueICED8AgObr.renounceOwnership.call({from: accounts[2]});

		await expect(BlueICED8AgObr.stake.call(uintc8iHdjo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const addressprdnMT = "0x0000000000000000000000000000000000000001"
		const uintAijTt1m = BigInt("1741")
		const addressarrayRLHpYJA = await BlueICED8AgObr.getCommunity.call({from: accounts[4]});
		await BlueICED8AgObr.claimRewards.call({from: accounts[1]});
		const uint256btXmQqa = await BlueICED8AgObr.earned.call(addressprdnMT, {from: accounts[0]});
		const uint256T0tjhHb = await BlueICED8AgObr.notifyRewardAmount.call(uintAijTt1m, {from: accounts[4]});

		assert.equal(addressarrayRLHpYJA, )
		await expect(BlueICED8AgObr.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const addresscdWkqWw = accounts[5]
		const addresssZ0BKGU = await BlueICED8AgObr.transferOwnership.call(addresscdWkqWw, {from: accounts[4]});
		const uint256PZz0Y4 = await BlueICED8AgObr.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(uint256PZz0Y4, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const addressOvcq9cU = accounts[4]
		const address9LiKgC = "0x00000000000000000000000000000000000000-1"
		const uintj6Srm0B = BigInt("1638")
		const address2mvg0e = accounts[2]
		const addressYcTJOds = accounts[3]
		const uint256WlvS7nq = await BlueICED8AgObr.earned.call(addressOvcq9cU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256btXmQqa = await BlueICED8AgObr.earned.call(address9LiKgC, {from: accounts[0]});
		const uint256jGrRHbv = await BlueICED8AgObr.unstake.call(uintj6Srm0B, {from: accounts[4]});
		const addressY4XmxiV = await BlueICED8AgObr.updateReward.call(address2mvg0e, {from: accounts[3]});
		const uint256rqJ8Nly = await BlueICED8AgObr.earned.call(addressYcTJOds, {from: accounts[1]});
		await BlueICED8AgObr.exit.call({from: accounts[2]});

		assert.equal(uint256WlvS7nq, BigInt("0"))
		await expect(BlueICED8AgObr.earned.call(address9LiKgC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICED8AgObr = await BlueICE.new({from: accounts[4]});
		const uintCekh0P = BigInt("1702")
		await BlueICED8AgObr.renounceOwnership.call({from: accounts[4]});
		const boolppaMJdG = await BlueICED8AgObr.isOwner.call({from: accounts[0]});
		const uint256T0tjhHb = await BlueICED8AgObr.notifyRewardAmount.call(uintCekh0P, {from: accounts[4]});

		await expect(BlueICED8AgObr.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})