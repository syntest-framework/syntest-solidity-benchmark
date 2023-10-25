const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addresseHC35ev = accounts[2]
		const uintBTZgldS = BigInt("951")
		const DatrixoEquityTokenUgjRu7 = await DatrixoEquityToken.new(addresseHC35ev, uintBTZgldS, {from: accounts[3]});
		const addressVNndnJ8 = accounts[5]
		const uintr0O0fHG = BigInt("2001")
		const addressKnEFYu = accounts[1]
		const uintC19rd7o = BigInt("207")
		const addressl38k03p = accounts[4]
		const addressOksruAb = accounts[4]
		const booltUhAraB = await DatrixoEquityTokenUgjRu7.removeShareholder.call(addressVNndnJ8, {from: "0x0000000000000000000000000000000000000001"});
		const boolrrTQ068 = await DatrixoEquityTokenUgjRu7.transfer.call(addressKnEFYu, uintr0O0fHG, {from: accounts[1]});
		const addressarrayjrywtgf = await DatrixoEquityTokenUgjRu7.getShareholdersArray.call({from: accounts[2]});
		const boolbgCQnoF = await DatrixoEquityTokenUgjRu7.transferFrom.call(addressOksruAb, addressl38k03p, uintC19rd7o, {from: accounts[0]});
		await DatrixoEquityTokenUgjRu7.afterStartTime.call({from: accounts[1]});

		await expect(DatrixoEquityTokenUgjRu7.removeShareholder.call(addressVNndnJ8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressasp4zct = accounts[2]
		const uintSP7Qv5 = BigInt("1481")
		const DatrixoEquityTokenXBbmZ7 = await DatrixoEquityToken.new(addressasp4zct, uintSP7Qv5, {from: accounts[2]});
		const uintsrYrmDe = BigInt("1921")
		const addressrmdCG4w = accounts[3]
		const uintghoJtY0 = BigInt("987")
		await DatrixoEquityTokenXBbmZ7.afterStartTime.call({from: accounts[1]});
		const uintlJ0PSC7 = await DatrixoEquityTokenXBbmZ7.setStart.call(uintsrYrmDe, {from: accounts[5]});
		const boolcpNxrQ = await DatrixoEquityTokenXBbmZ7.removeShareholder.call(addressrmdCG4w, {from: accounts[2]});
		const uintecQP9nq = await DatrixoEquityTokenXBbmZ7.setStart.call(uintghoJtY0, {from: accounts[0]});

		await expect(DatrixoEquityTokenXBbmZ7.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressySAW7RT = accounts[2]
		const uintXA6cXMM = BigInt("306")
		const DatrixoEquityTokenBOgrRDy = await DatrixoEquityToken.new(addressySAW7RT, uintXA6cXMM, {from: accounts[5]});
		const addressUG4VstH = accounts[3]
		const addressarrayY18eZM = await DatrixoEquityTokenBOgrRDy.getShareholdersArray.call({from: accounts[0]});
		const addressarrayRvuSlyz = await DatrixoEquityTokenBOgrRDy.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const boolqvxDXDN = await DatrixoEquityTokenBOgrRDy.removeShareholder.call(addressUG4VstH, {from: accounts[4]});

		assert.equal(addressarrayRvuSlyz, )
		assert.equal(addressarrayY18eZM, )
		await expect(DatrixoEquityTokenBOgrRDy.removeShareholder.call(addressUG4VstH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressEc2gzK1 = accounts[5]
		const uintARumUh6 = BigInt("90")
		const DatrixoEquityTokenwHbAM3u = await DatrixoEquityToken.new(addressEc2gzK1, uintARumUh6, {from: "0x0000000000000000000000000000000000000001"});
		const addresshmUlPBJ = accounts[3]
		const addressH16sNS0 = accounts[1]
		const uintewTwZHr = BigInt("1974")
		const addressmqNiKIc = accounts[3]
		const boolXmol0CG = await DatrixoEquityTokenwHbAM3u.removeShareholder.call(addresshmUlPBJ, {from: accounts[4]});
		const boolRP1K3jx = await DatrixoEquityTokenwHbAM3u.removeShareholder.call(addressH16sNS0, {from: accounts[3]});
		await DatrixoEquityTokenwHbAM3u.afterStartTime.call({from: accounts[0]});
		await DatrixoEquityTokenwHbAM3u.afterStartTime.call({from: accounts[3]});
		const boolFrdOH5Y = await DatrixoEquityTokenwHbAM3u.transfer.call(addressmqNiKIc, uintewTwZHr, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbhB34Dj = accounts[4]
		const uintfCsHW3x = BigInt("1167")
		const DatrixoEquityTokenwXAQh7K = await DatrixoEquityToken.new(addressbhB34Dj, uintfCsHW3x, {from: accounts[2]});
		const uintGbQ2CUj = BigInt("1613")
		const addressTKHqw7D = accounts[1]
		const boolrp2gI9j = await DatrixoEquityTokenwXAQh7K.transfer.call(addressTKHqw7D, uintGbQ2CUj, {from: accounts[4]});
		await DatrixoEquityTokenwXAQh7K.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrp2gI9j, true)
		await expect(DatrixoEquityTokenwXAQh7K.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqj7YI6R = accounts[4]
		const uintdjBCzyd = BigInt("1167")
		const DatrixoEquityTokenwXAQh7K = await DatrixoEquityToken.new(addressqj7YI6R, uintdjBCzyd, {from: accounts[2]});
		const uintfHi3oee = BigInt("1613")
		const addressfC6BWJ = accounts[4]
		const boolrp2gI9j = await DatrixoEquityTokenwXAQh7K.transfer.call(addressfC6BWJ, uintfHi3oee, {from: accounts[4]});
		await DatrixoEquityTokenwXAQh7K.afterStartTime.call({from: accounts[2]});
		await DatrixoEquityTokenwXAQh7K.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarraypULd5Kh = await DatrixoEquityTokenwXAQh7K.getShareholdersArray.call({from: accounts[0]});

		await expect(DatrixoEquityTokenwXAQh7K.transfer.call(addressfC6BWJ, uintfHi3oee, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTbHdNn = accounts[4]
		const uintTWp7ZfX = BigInt("1167")
		const DatrixoEquityTokenwXAQh7K = await DatrixoEquityToken.new(addressTbHdNn, uintTWp7ZfX, {from: accounts[2]});
		const addressqzCF9d4 = accounts[5]
		const uintBI8eW8k = BigInt("1574")
		const addressyU0ed0A = accounts[5]
		const addressarrayYCtxWq4 = await DatrixoEquityTokenwXAQh7K.getShareholdersArray.call({from: accounts[2]});
		const boolSY4ECpS = await DatrixoEquityTokenwXAQh7K.removeShareholder.call(addressqzCF9d4, {from: accounts[4]});
		const boolrp2gI9j = await DatrixoEquityTokenwXAQh7K.transfer.call(addressyU0ed0A, uintBI8eW8k, {from: accounts[4]});

		assert.equal(addressarrayYCtxWq4, )
		await expect(DatrixoEquityTokenwXAQh7K.removeShareholder.call(addressqzCF9d4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresszjbrzhj = accounts[4]
		const uintrdfACHj = BigInt("1167")
		const DatrixoEquityTokenwXAQh7K = await DatrixoEquityToken.new(addresszjbrzhj, uintrdfACHj, {from: accounts[2]});
		const uintV2EqZyb = BigInt("1605")
		const addresstcVequ1 = accounts[5]
		const uinttf9RSOd = BigInt("428")
		const addressCHmLAZJ = accounts[4]
		const addresszY3kGoI = accounts[3]
		const boolrp2gI9j = await DatrixoEquityTokenwXAQh7K.transfer.call(addresstcVequ1, uintV2EqZyb, {from: accounts[4]});
		const addressarraylspnQL8 = await DatrixoEquityTokenwXAQh7K.getShareholdersArray.call({from: accounts[1]});
		const boolKiRT6ex = await DatrixoEquityTokenwXAQh7K.transferFrom.call(addresszY3kGoI, addressCHmLAZJ, uinttf9RSOd, {from: accounts[4]});

		assert.equal(addressarraylspnQL8, )
		assert.equal(boolrp2gI9j, true)
		await expect(DatrixoEquityTokenwXAQh7K.transferFrom.call(addresszY3kGoI, addressCHmLAZJ, uinttf9RSOd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressWTWUZZv = accounts[4]
		const uintWSrwoSp = BigInt("1167")
		const DatrixoEquityTokenwXAQh7K = await DatrixoEquityToken.new(addressWTWUZZv, uintWSrwoSp, {from: accounts[2]});
		const uintJPhZLfQ = BigInt("1514")
		const uintjKow453 = BigInt("1407")
		const addressLYaMmwk = accounts[5]
		const uintMHktnpT = await DatrixoEquityTokenwXAQh7K.setStart.call(uintJPhZLfQ, {from: accounts[4]});
		const boolrp2gI9j = await DatrixoEquityTokenwXAQh7K.transfer.call(addressLYaMmwk, uintjKow453, {from: accounts[4]});

		await expect(DatrixoEquityTokenwXAQh7K.setStart.call(uintJPhZLfQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresscx5nni0 = accounts[4]
		const uintZBwLHpY = BigInt("827")
		const DatrixoEquityTokenQal1m6u = await DatrixoEquityToken.new(addresscx5nni0, uintZBwLHpY, {from: accounts[3]});
		const uint8iGLL0 = BigInt("631")
		const addressTyq5YM9 = accounts[0]
		const addressbT5vz1P = accounts[4]
		const uintVWtNYVF = BigInt("496")
		const addressRwMwsaI = accounts[3]
		const addressyklkl69 = accounts[2]
		const boolHyXiFnr = await DatrixoEquityTokenQal1m6u.transferFrom.call(addressbT5vz1P, addressTyq5YM9, uint8iGLL0, {from: accounts[4]});
		const boolmeNoSAR = await DatrixoEquityTokenQal1m6u.transferFrom.call(addressyklkl69, addressRwMwsaI, uintVWtNYVF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHyXiFnr, true)
		await expect(DatrixoEquityTokenQal1m6u.transferFrom.call(addressyklkl69, addressRwMwsaI, uintVWtNYVF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})