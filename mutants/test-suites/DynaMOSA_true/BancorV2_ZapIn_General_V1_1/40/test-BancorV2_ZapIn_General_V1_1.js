const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintf6fqU2z = BigInt("1246")
		const BancorV2_ZapIn_General_V1_1n8lPBg = await BancorV2_ZapIn_General_V1_1.new(uintf6fqU2z, {from: accounts[0]});
		const byteb33SZCv = "0x1b0d111f"
		const addressEQ2OJwD = accounts[4]
		const addresszWWI42g = accounts[0]
		const uintZHZuJ1 = BigInt("214")
		const uintiWkEvg = BigInt("586")
		const addressxhpFhaF = accounts[0]
		const addressid5hjyQ = accounts[2]
		const addressML0LgSN = accounts[0]
//		await BancorV2_ZapIn_General_V1_1n8lPBg.toggleContractActive.call({from: accounts[3]});
//		const uint256P8nZqWl = await BancorV2_ZapIn_General_V1_1n8lPBg.ZapInSingleSided.call(addressML0LgSN, addressid5hjyQ, addressxhpFhaF, uintiWkEvg, uintZHZuJ1, addresszWWI42g, addressEQ2OJwD, byteb33SZCv, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1n8lPBg.toggleContractActive.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1n8lPBg.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintnICzuhB = BigInt("467")
		const BancorV2_ZapIn_General_V1_1ebDG8kF = await BancorV2_ZapIn_General_V1_1.new(uintnICzuhB, {from: "0x0000000000000000000000000000000000000001"});
		const addressVSd9qrE = accounts[5]
		const addressEFFfVGZ = accounts[1]
		const addressixLd052 = await BancorV2_ZapIn_General_V1_1ebDG8kF.owner.call({from: accounts[1]});
		const addressG95JkmR = await BancorV2_ZapIn_General_V1_1ebDG8kF.owner.call({from: accounts[0]});
		const addressGLPX4b = await BancorV2_ZapIn_General_V1_1ebDG8kF.transferOwnership.call(addressVSd9qrE, {from: accounts[2]});
		const addresszPGHhOW = await BancorV2_ZapIn_General_V1_1ebDG8kF.transferOwnership.call(addressEFFfVGZ, {from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQLZ9wjA = BigInt("412")
		const BancorV2_ZapIn_General_V1_10xB6dK = await BancorV2_ZapIn_General_V1_1.new(uintQLZ9wjA, {from: accounts[2]});
		const addressdAbpBbF = accounts[1]
		const addressiDB7nAb = await BancorV2_ZapIn_General_V1_10xB6dK.owner.call({from: accounts[1]});
//		const addressXLKFpI9 = await BancorV2_ZapIn_General_V1_10xB6dK.inCaseTokengetsStuck.call(addressdAbpBbF, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_10xB6dK.onlyOwner.call({from: accounts[5]});

		assert.equal(addressiDB7nAb, 0x3dC999447cc57Fb8a2289244ac2A89D9af8Cc192)
		await expect(BancorV2_ZapIn_General_V1_10xB6dK.inCaseTokengetsStuck.call(addressdAbpBbF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintVcYLVyU = BigInt("1223")
		const BancorV2_ZapIn_General_V1_1hwRGqjS = await BancorV2_ZapIn_General_V1_1.new(uintVcYLVyU, {from: accounts[2]});
		const addressORYeZrw = accounts[0]
		const addressCQop57 = await BancorV2_ZapIn_General_V1_1hwRGqjS.transferOwnership.call(addressORYeZrw, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1hwRGqjS.nonReentrant.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1hwRGqjS.renounceOwnership.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1hwRGqjS.toggleContractActive.call({from: accounts[1]});
//		const addressuWjNxpJ = await BancorV2_ZapIn_General_V1_1hwRGqjS.owner.call({from: accounts[2]});
//		const addressmAihH2S = await BancorV2_ZapIn_General_V1_1hwRGqjS.owner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1hwRGqjS.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYAyJWdc = BigInt("1331")
		const BancorV2_ZapIn_General_V1_161pvwp = await BancorV2_ZapIn_General_V1_1.new(uintYAyJWdc, {from: accounts[4]});
		const bytekU92f5l = "0x000b15050e110c1a1b1d0418200101081c181a051316"
		const addressF64175E = accounts[3]
		const addressY7KHcfN = accounts[1]
		const uintwY4EHG4 = BigInt("1965")
		const uintJQZ5qY3 = BigInt("1894")
		const addressSawo98 = accounts[1]
		const addressLYYmYn = accounts[2]
		const addressoHWjLap = accounts[1]
		const addresskW7Afq2 = accounts[2]
		const boolbTwyv64 = await BancorV2_ZapIn_General_V1_161pvwp.isOwner.call({from: accounts[0]});
//		const uint256VYmmqO = await BancorV2_ZapIn_General_V1_161pvwp.ZapInSingleSided.call(addressoHWjLap, addressLYYmYn, addressSawo98, uintJQZ5qY3, uintwY4EHG4, addressY7KHcfN, addressF64175E, bytekU92f5l, {from: accounts[4]});
//		const addressCiMxC54 = await BancorV2_ZapIn_General_V1_161pvwp.transferOwnership.call(addresskW7Afq2, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_161pvwp.renounceOwnership.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_161pvwp.stopInEmergency.call({from: accounts[4]});

		assert.equal(boolbTwyv64, false)
		await expect(BancorV2_ZapIn_General_V1_161pvwp.ZapInSingleSided.call(addressoHWjLap, addressLYYmYn, addressSawo98, uintJQZ5qY3, uintwY4EHG4, addressY7KHcfN, addressF64175E, bytekU92f5l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint2AVAii = BigInt("1374")
		const BancorV2_ZapIn_General_V1_1jL8e5tv = await BancorV2_ZapIn_General_V1_1.new(uint2AVAii, {from: accounts[3]});
		const boolgdfHGRr = await BancorV2_ZapIn_General_V1_1jL8e5tv.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1jL8e5tv.renounceOwnership.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1jL8e5tv.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolgdfHGRr, true)
		await expect(BancorV2_ZapIn_General_V1_1jL8e5tv.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDtuWfma = BigInt("1690")
		const BancorV2_ZapIn_General_V1_1b8dcam = await BancorV2_ZapIn_General_V1_1.new(uintDtuWfma, {from: accounts[0]});
		const addressfC3idwZ = accounts[0]
		const addressKrZlcMj = accounts[3]
//		const addressxoIdO64 = await BancorV2_ZapIn_General_V1_1b8dcam.inCaseTokengetsStuck.call(addressfC3idwZ, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1b8dcam.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1b8dcam.withdraw.call({from: accounts[1]});
//		const addresskSIHP0L = await BancorV2_ZapIn_General_V1_1b8dcam.transferOwnership.call(addressKrZlcMj, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1b8dcam.inCaseTokengetsStuck.call(addressfC3idwZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYFhC452 = BigInt("1331")
		const BancorV2_ZapIn_General_V1_161pvwp = await BancorV2_ZapIn_General_V1_1.new(uintYFhC452, {from: accounts[4]});
		const byteOLpnXO6 = "0x18061a130207"
		const addressvsTKswq = accounts[0]
		const addressPkAgwp = accounts[3]
		const uintD4dTQv7 = BigInt("538")
		const uintWR1r2k1 = BigInt("909")
		const addressnUcflmR = "0x0000000000000000000000000000000000000001"
		const addresshsVYfWt = "0x0000000000000000000000000000000000000001"
		const addressXE0g5wB = accounts[5]
		const addresswhjbevu = accounts[2]
		const address9sA8BG = accounts[0]
//		await BancorV2_ZapIn_General_V1_161pvwp.withdraw.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_161pvwp.onlyOwner.call({from: accounts[0]});
//		const uint2566LZ850 = await BancorV2_ZapIn_General_V1_161pvwp.ZapInSingleSided.call(addressXE0g5wB, addresshsVYfWt, addressnUcflmR, uintWR1r2k1, uintD4dTQv7, addressPkAgwp, addressvsTKswq, byteOLpnXO6, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_161pvwp.onlyOwner.call({from: accounts[3]});
//		const boolbTwyv64 = await BancorV2_ZapIn_General_V1_161pvwp.isOwner.call({from: accounts[0]});
//		const addressCiMxC54 = await BancorV2_ZapIn_General_V1_161pvwp.transferOwnership.call(addresswhjbevu, {from: accounts[2]});
//		const addressQGdQfK = await BancorV2_ZapIn_General_V1_161pvwp.toPayable.call(address9sA8BG, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_161pvwp.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintCLWdUur = BigInt("1331")
		const BancorV2_ZapIn_General_V1_161pvwp = await BancorV2_ZapIn_General_V1_1.new(uintCLWdUur, {from: accounts[4]});
		const uintqAEmlsa = BigInt("594")
		const byteoRIpsQ2 = "0x18061a130207"
		const addressO03uVXD = accounts[0]
		const addressftoi3x3 = accounts[3]
		const uintQOaxDzo = BigInt("538")
		const uints8Ec7QR = BigInt("909")
		const addressWswDWjx = "0x0000000000000000000000000000000000000001"
		const addressIn9bc7j = "0x0000000000000000000000000000000000000001"
		const addressiHaGfW = accounts[6]
		const addressVQjMIUR = accounts[2]
		const addresspc0JZdj = accounts[1]
		const uint16Yt60ivq = await BancorV2_ZapIn_General_V1_161pvwp.set_new_goodwill.call(uintqAEmlsa, {from: accounts[4]});
//		const uint2566LZ850 = await BancorV2_ZapIn_General_V1_161pvwp.ZapInSingleSided.call(addressiHaGfW, addressIn9bc7j, addressWswDWjx, uints8Ec7QR, uintQOaxDzo, addressftoi3x3, addressO03uVXD, byteoRIpsQ2, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_161pvwp.onlyOwner.call({from: accounts[3]});
//		const boolbTwyv64 = await BancorV2_ZapIn_General_V1_161pvwp.isOwner.call({from: accounts[0]});
//		const addressCiMxC54 = await BancorV2_ZapIn_General_V1_161pvwp.transferOwnership.call(addressVQjMIUR, {from: accounts[2]});
//		const addressccEVaKH = await BancorV2_ZapIn_General_V1_161pvwp.inCaseTokengetsStuck.call(addresspc0JZdj, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_161pvwp.ZapInSingleSided.call(addressiHaGfW, addressIn9bc7j, addressWswDWjx, uints8Ec7QR, uintQOaxDzo, addressftoi3x3, addressO03uVXD, byteoRIpsQ2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZKB5MVY = BigInt("1538")
		const BancorV2_ZapIn_General_V1_1PJ4XzYw = await BancorV2_ZapIn_General_V1_1.new(uintZKB5MVY, {from: accounts[4]});
		const boolqjXMumS = await BancorV2_ZapIn_General_V1_1PJ4XzYw.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1PJ4XzYw.toggleContractActive.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1PJ4XzYw.stopInEmergency.call({from: accounts[5]});

		assert.equal(boolqjXMumS, false)
		await expect(BancorV2_ZapIn_General_V1_1PJ4XzYw.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})