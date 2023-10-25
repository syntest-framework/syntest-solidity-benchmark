const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyjX1EY0y = await HungryHoody.new({from: accounts[3]});
		const addressODsfQce = accounts[3]
		const addressGUZPVn = accounts[3]
		const uintzZArZPK = BigInt("1079")
		const addressARPxONO = accounts[1]
		const uintcRNE4gk = BigInt("153")
		const uintPLO3rvQ = BigInt("1845")
		const uintLgVtv1Q = await HungryHoodyjX1EY0y.allowance.call(addressGUZPVn, addressODsfQce, {from: accounts[4]});
		const boolqJoDKeI = await HungryHoodyjX1EY0y.approve.call(addressARPxONO, uintzZArZPK, {from: accounts[2]});
		const uintc63tsB7 = await HungryHoodyjX1EY0y.safeAdd.call(uintPLO3rvQ, uintcRNE4gk, {from: accounts[4]});

		assert.equal(boolqJoDKeI, true)
		assert.equal(uintLgVtv1Q, BigInt("0"))
		assert.equal(uintc63tsB7, BigInt("1998"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyQZsowL = await HungryHoody.new({from: accounts[2]});
		const uintRnLqcDj = BigInt("1480")
		const addresslqU9l18 = accounts[2]
		const uintDT3jrEH = BigInt("804")
		const addressIZUdMq = accounts[4]
		const uintqMZIg0m = BigInt("672")
		const address8p0mGO = accounts[2]
		const addressITVs33P = accounts[1]
		const uintV6aJKCr = BigInt("1573")
		const addressqIaBPvT = accounts[1]
//		const boolo8BUBFh = await HungryHoodyQZsowL.transfer.call(addresslqU9l18, uintRnLqcDj, {from: accounts[5]});
//		const boolakHI9hQ = await HungryHoodyQZsowL.transfer.call(addressIZUdMq, uintDT3jrEH, {from: accounts[1]});
//		const boolE2VkLAK = await HungryHoodyQZsowL.transferFrom.call(addressITVs33P, address8p0mGO, uintqMZIg0m, {from: accounts[2]});
//		const boolstNpsR9 = await HungryHoodyQZsowL.approve.call(addressqIaBPvT, uintV6aJKCr, {from: accounts[0]});

		await expect(HungryHoodyQZsowL.transfer.call(addresslqU9l18, uintRnLqcDj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyxrAUMOS = await HungryHoody.new({from: accounts[2]});
		const uintkCa6Yuq = BigInt("1469")
		const addressyy0xBHN = accounts[4]
		const addressn6wo9VX = accounts[3]
		const uintgpNp8Ow = BigInt("910")
		const uintEQa6eDG = BigInt("1671")
		const uinte0wKEa0 = await HungryHoodyxrAUMOS.totalSupply.call({from: accounts[4]});
//		const boolr5LDmy8 = await HungryHoodyxrAUMOS.transferFrom.call(addressn6wo9VX, addressyy0xBHN, uintkCa6Yuq, {from: accounts[0]});
//		const uintx08nklX = await HungryHoodyxrAUMOS.safeMul.call(uintEQa6eDG, uintgpNp8Ow, {from: accounts[2]});

		assert.equal(uinte0wKEa0, BigInt("25000000000000000000"))
		await expect(HungryHoodyxrAUMOS.transferFrom.call(addressn6wo9VX, addressyy0xBHN, uintkCa6Yuq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodySEyDb1X = await HungryHoody.new({from: accounts[2]});
		const uintwaeJod5 = BigInt("2004")
		const uintjsPsXbK = BigInt("469")
		const addressAW7yD7 = accounts[5]
		const uintKKEqZwT = BigInt("695")
		const addresszRmhwwS = accounts[4]
		const addresscBDxTAK = accounts[3]
		const uintv6FRt29 = await HungryHoodySEyDb1X.safeAdd.call(uintjsPsXbK, uintwaeJod5, {from: accounts[4]});
		const uintLgUoJLV = await HungryHoodySEyDb1X.balanceOf.call(addressAW7yD7, {from: accounts[1]});
		const boolzuB3YXy = await HungryHoodySEyDb1X.approve.call(addresszRmhwwS, uintKKEqZwT, {from: accounts[0]});
		const uintT3mGLCv = await HungryHoodySEyDb1X.balanceOf.call(addresscBDxTAK, {from: accounts[3]});

		assert.equal(boolzuB3YXy, true)
		assert.equal(uintLgUoJLV, BigInt("0"))
		assert.equal(uintT3mGLCv, BigInt("0"))
		assert.equal(uintv6FRt29, BigInt("2473"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyBNnP3Lg = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHR5BBkG = BigInt("511")
		const uinti4nfMTk = BigInt("830")
		const addressNdTeHsK = accounts[2]
		const addresshE6UZtu = accounts[2]
		const uintnrsDuHv = BigInt("1655")
		const uintxOLIqdu = BigInt("412")
		const uintzOSDk7S = BigInt("190")
		const uintnIqsw97 = BigInt("1273")
		const uintS9RPspo = await HungryHoodyBNnP3Lg.safeMul.call(uinti4nfMTk, uintHR5BBkG, {from: accounts[2]});
		const uintgdjbn4G = await HungryHoodyBNnP3Lg.allowance.call(addresshE6UZtu, addressNdTeHsK, {from: accounts[0]});
		const uintjxcwpp3 = await HungryHoodyBNnP3Lg.safeSub.call(uintxOLIqdu, uintnrsDuHv, {from: accounts[4]});
		const uint3JVqEq = await HungryHoodyBNnP3Lg.safeAdd.call(uintnIqsw97, uintzOSDk7S, {from: accounts[3]});
	});
})