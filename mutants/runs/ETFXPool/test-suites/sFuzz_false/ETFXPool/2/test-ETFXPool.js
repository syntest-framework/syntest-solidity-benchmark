const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolhHfLvkE = await ETFXPool.new({from: accounts[0]});
		const uintQbANGMy = BigInt("157")
		const addressH7OK0h = accounts[5]
		const uintIdp2XA4 = BigInt("1691")
		const addressTmMgVcm = accounts[3]
		const addressUy3aIZd = accounts[2]
		const uintAUUFgHK = BigInt("1559")
		const addressuvThump = accounts[3]
		const addressKvsEoNM = accounts[0]
		const addressHNctRzj = accounts[1]
		const boolSMZJMe = await ETFXPoolhHfLvkE.transfer.call(addressH7OK0h, uintQbANGMy, {from: accounts[2]});
		const boolLHNBdRQ = await ETFXPoolhHfLvkE.transferFrom.call(addressUy3aIZd, addressTmMgVcm, uintIdp2XA4, {from: accounts[0]});
		const boolTvNkLeX = await ETFXPoolhHfLvkE.transferFrom.call(addressKvsEoNM, addressuvThump, uintAUUFgHK, {from: accounts[2]});
		const stringSOYtN4V = await ETFXPoolhHfLvkE.name.call({from: accounts[3]});
		const uint256klWWR5y = await ETFXPoolhHfLvkE.earned.call(addressHNctRzj, {from: accounts[2]});

		await expect(ETFXPoolhHfLvkE.transfer.call(addressH7OK0h, uintQbANGMy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintXYvHsp1 = BigInt("1882")
		const uintgo7Fz25 = BigInt("1619")
		const addressf2KofMh = "0x0000000000000000000000000000000000000001"
		const uint256T5kw7wj = await ETFXPoolJok90EY.stake.call(uintXYvHsp1, {from: accounts[4]});
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressf2KofMh, uintgo7Fz25, {from: accounts[3]});

		await expect(ETFXPoolJok90EY.stake.call(uintXYvHsp1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJnv4Akx = await ETFXPool.new({from: accounts[5]});
		const addressg4guqxB = accounts[0]
		const addressgbX8xL3 = accounts[3]
		const addressgUI7mqO = accounts[5]
		await ETFXPoolJnv4Akx.nonReentrant.call({from: accounts[2]});
		await ETFXPoolJnv4Akx.getReward.call({from: accounts[3]});
		const addressHcMVdtf = await ETFXPoolJnv4Akx.owner.call({from: accounts[2]});
		const uint256Ctefz1 = await ETFXPoolJnv4Akx.allowance.call(addressgbX8xL3, addressg4guqxB, {from: accounts[3]});
		const addressAYb2x86 = await ETFXPoolJnv4Akx.transferOwnership.call(addressgUI7mqO, {from: accounts[4]});
		await ETFXPoolJnv4Akx.exit.call({from: accounts[4]});

		await expect(ETFXPoolJnv4Akx.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltylEor = await ETFXPool.new({from: accounts[3]});
		const uintLU16UaC = BigInt("1122")
		const addressLKNGZPv = accounts[1]
		await ETFXPooltylEor.renounceOwnership.call({from: accounts[0]});
		const stringTs4k7nR = await ETFXPooltylEor.symbol.call({from: accounts[0]});
		const uint256yI5thQL = await ETFXPooltylEor.stake.call(uintLU16UaC, {from: accounts[1]});
		const addressCIlMKyt = await ETFXPooltylEor.transferOwnership.call(addressLKNGZPv, {from: accounts[3]});
		await ETFXPooltylEor.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPooltylEor.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRQ9Oe8E = await ETFXPool.new({from: accounts[2]});
		const addressG7OV66e = await ETFXPoolRQ9Oe8E.owner.call({from: accounts[1]});
		await ETFXPoolRQ9Oe8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressG7OV66e, 0xA7116aDea7917bD7e922045Af760CA275249f2Af)
		await expect(ETFXPoolRQ9Oe8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAvicTQ = await ETFXPool.new({from: accounts[3]});
		const addressmtqHloY = accounts[4]
		const stringINFHXl = await ETFXPoolAvicTQ.symbol.call({from: accounts[3]});
		const addressfzTP70S = await ETFXPoolAvicTQ.transferOwnership.call(addressmtqHloY, {from: accounts[3]});
		await ETFXPoolAvicTQ.onlyOwner.call({from: accounts[1]});

		assert.equal(stringINFHXl, "FETFX")
		await expect(ETFXPoolAvicTQ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgnIUvg = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressg6Azgj = await ETFXPoolgnIUvg.owner.call({from: accounts[5]});
		const uint8b3Hlkm = await ETFXPoolgnIUvg.decimals.call({from: accounts[0]});
		const uint8hC1rtUT = await ETFXPoolgnIUvg.decimals.call({from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRQ9Oe8E = await ETFXPool.new({from: accounts[2]});
		const uintINEfneZ = BigInt("564")
		const addressel41vpA = accounts[0]
		const addressG7OV66e = await ETFXPoolRQ9Oe8E.owner.call({from: accounts[1]});
		const boolZpL59vC = await ETFXPoolRQ9Oe8E.increaseAllowance.call(addressel41vpA, uintINEfneZ, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolRQ9Oe8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressG7OV66e, 0xA7116aDea7917bD7e922045Af760CA275249f2Af)
		assert.equal(boolZpL59vC, true)
		await expect(ETFXPoolRQ9Oe8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRQ9Oe8E = await ETFXPool.new({from: accounts[2]});
		const uintuCt3Vj = BigInt("323")
		const addressVNLvx8Z = accounts[4]
		const uintf6WbZXx = BigInt("1450")
		const boolk9hKTeC = await ETFXPoolRQ9Oe8E.approve.call(addressVNLvx8Z, uintuCt3Vj, {from: accounts[3]});
		const addressG7OV66e = await ETFXPoolRQ9Oe8E.owner.call({from: accounts[1]});
		const uint256LYFI5ao = await ETFXPoolRQ9Oe8E.withdraw.call(uintf6WbZXx, {from: accounts[1]});
		await ETFXPoolRQ9Oe8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressG7OV66e, 0xA7116aDea7917bD7e922045Af760CA275249f2Af)
		assert.equal(boolk9hKTeC, true)
		await expect(ETFXPoolRQ9Oe8E.withdraw.call(uintf6WbZXx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintfIjn7Yr = BigInt("1619")
		const addressULwDAyN = "0x0000000000000000000000000000000000000001"
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressULwDAyN, uintfIjn7Yr, {from: accounts[3]});

		await expect(ETFXPoolJok90EY.decreaseAllowance.call(addressULwDAyN, uintfIjn7Yr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRQ9Oe8E = await ETFXPool.new({from: accounts[2]});
		const uintTDY0QUa = BigInt("42")
		const addressFuXhdsg = accounts[1]
		const addressZeHY7gw = accounts[4]
		const addressuKnHK4J = accounts[0]
		const boolzoDb7Yu = await ETFXPoolRQ9Oe8E.transferFrom.call(addressZeHY7gw, addressFuXhdsg, uintTDY0QUa, {from: "0x0000000000000000000000000000000000000001"});
		const addressG7OV66e = await ETFXPoolRQ9Oe8E.owner.call({from: accounts[1]});
		await ETFXPoolRQ9Oe8E.getReward.call({from: accounts[4]});
		await ETFXPoolRQ9Oe8E.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jL0ucfe = await ETFXPoolRQ9Oe8E.balanceOf.call(addressuKnHK4J, {from: accounts[0]});

		await expect(ETFXPoolRQ9Oe8E.transferFrom.call(addressZeHY7gw, addressFuXhdsg, uintTDY0QUa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringjLi9FFR = "DVIgkiMQCs5xHW5Cj6cILFerhJiKweNEAt9lUvepJr1m"
		const stringtTZnXKs = "ARsxXkkyiyeP3zA6BDBGtBJH7c7PAFqMO9U1DutkRG3nIBcbMSHTbtUgPT"
		const uintPOtm3mO = BigInt("21")
		const ETFXPoolEEfKbg6 = await ETFXPool.new(stringjLi9FFR, stringtTZnXKs, uintPOtm3mO, {from: accounts[1]});
		const uint256JsoKg2z = await ETFXPoolEEfKbg6.totalSupply.call({from: accounts[1]});
		const uint8UgguIf5 = await ETFXPoolEEfKbg6.decimals.call({from: accounts[4]});
		const uint256i9J8Or = await ETFXPoolEEfKbg6.totalSupply.call({from: accounts[0]});
		const stringB14wB2v = await ETFXPoolEEfKbg6.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const addresslj5F9P9 = accounts[5]
		const uintgkKT1DT = BigInt("1882")
		const uintG3EjY1W = BigInt("635")
		const addressC4YiPT5 = "0x0000000000000000000000000000000000000001"
		await ETFXPoolJok90EY.getReward.call({from: accounts[0]});
		await ETFXPoolJok90EY.renounceOwnership.call({from: accounts[4]});
		const addressHz3QD9f = await ETFXPoolJok90EY.transferOwnership.call(addresslj5F9P9, {from: accounts[5]});
		const uint256T5kw7wj = await ETFXPoolJok90EY.stake.call(uintgkKT1DT, {from: accounts[4]});
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressC4YiPT5, uintG3EjY1W, {from: accounts[3]});

		await expect(ETFXPoolJok90EY.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintMQDaAVP = BigInt("1882")
		await ETFXPoolJok90EY.renounceOwnership.call({from: accounts[2]});
		const stringUiyDoIt = await ETFXPoolJok90EY.symbol.call({from: accounts[1]});
		const uint256T5kw7wj = await ETFXPoolJok90EY.stake.call(uintMQDaAVP, {from: accounts[4]});

		await expect(ETFXPoolJok90EY.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintj4zY3r = BigInt("1619")
		const addressvdgsm71 = "0x0000000000000000000000000000000000000001"
		const uint8whjx1S = await ETFXPoolJok90EY.decimals.call({from: accounts[0]});
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressvdgsm71, uintj4zY3r, {from: accounts[3]});

		assert.equal(uint8whjx1S, BigInt("8"))
		await expect(ETFXPoolJok90EY.decreaseAllowance.call(addressvdgsm71, uintj4zY3r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintiKIJ1NH = BigInt("1882")
		await ETFXPoolJok90EY.exit.call({from: accounts[1]});
		await ETFXPoolJok90EY.onlyOwner.call({from: accounts[0]});
		const uint256T5kw7wj = await ETFXPoolJok90EY.stake.call(uintiKIJ1NH, {from: accounts[4]});

		await expect(ETFXPoolJok90EY.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const addressRT8kNem = accounts[0]
		const addressOOtHfgv = accounts[0]
		const addressfcn0mf = accounts[4]
		const addresssm0E0K1 = accounts[1]
		const uintnNI0oR = BigInt("1619")
		const addressDztijIn = "0x0000000000000000000000000000000000000002"
		const uint256dko2lCC = await ETFXPoolJok90EY.allowance.call(addressOOtHfgv, addressRT8kNem, {from: accounts[3]});
		const uint256vc7k82e = await ETFXPoolJok90EY.allowance.call(addresssm0E0K1, addressfcn0mf, {from: accounts[4]});
		await ETFXPoolJok90EY.getReward.call({from: accounts[1]});
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressDztijIn, uintnNI0oR, {from: accounts[3]});

		assert.equal(uint256dko2lCC, BigInt("0"))
		assert.equal(uint256vc7k82e, BigInt("0"))
		await expect(ETFXPoolJok90EY.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintIQQZdV4 = BigInt("1615")
		const addressazd6OfP = "0x0000000000000000000000000000000000000001"
		const addresstMbZJ4s = accounts[5]
		const uint256xj0HjZg = await ETFXPoolJok90EY.rewardPerToken.call({from: accounts[1]});
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressazd6OfP, uintIQQZdV4, {from: accounts[3]});
		const addressYuKult5 = await ETFXPoolJok90EY.transferOwnership.call(addresstMbZJ4s, {from: accounts[1]});

		assert.equal(uint256xj0HjZg, BigInt("0"))
		await expect(ETFXPoolJok90EY.decreaseAllowance.call(addressazd6OfP, uintIQQZdV4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJok90EY = await ETFXPool.new({from: accounts[2]});
		const uintdp5rRcK = BigInt("1619")
		const addressX1uyYKq = "0x0000000000000000000000000000000000000001"
		const stringak0Etna = await ETFXPoolJok90EY.name.call({from: accounts[4]});
		const boolsvBKwke = await ETFXPoolJok90EY.decreaseAllowance.call(addressX1uyYKq, uintdp5rRcK, {from: accounts[3]});

		assert.equal(stringak0Etna, "ETFX-FARM")
		await expect(ETFXPoolJok90EY.decreaseAllowance.call(addressX1uyYKq, uintdp5rRcK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})