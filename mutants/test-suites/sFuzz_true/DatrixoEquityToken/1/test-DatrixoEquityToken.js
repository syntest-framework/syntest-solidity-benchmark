const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressfVGTRfJ = accounts[0]
		const uinths2w4Ia = BigInt("1138")
		const DatrixoEquityTokeniHHgD9p = await DatrixoEquityToken.new(addressfVGTRfJ, uinths2w4Ia, {from: "0x0000000000000000000000000000000000000001"});
		const addressuhp5bkR = accounts[3]
		const uintne3om3 = BigInt("1247")
		const addressRP4qYFx = accounts[5]
		const addressNdBBIgt = accounts[0]
		const uintPQBHy9J = BigInt("631")
		const addressOZCXl3C = accounts[0]
		const addressskuzT3Z = accounts[2]
		await DatrixoEquityTokeniHHgD9p.afterStartTime.call({from: accounts[0]});
		await DatrixoEquityTokeniHHgD9p.afterStartTime.call({from: accounts[0]});
		const booloOlsbw7 = await DatrixoEquityTokeniHHgD9p.removeShareholder.call(addressuhp5bkR, {from: "0x0000000000000000000000000000000000000001"});
		const boolmx2kEVl = await DatrixoEquityTokeniHHgD9p.transferFrom.call(addressNdBBIgt, addressRP4qYFx, uintne3om3, {from: accounts[4]});
		const boolR546nNl = await DatrixoEquityTokeniHHgD9p.transferFrom.call(addressskuzT3Z, addressOZCXl3C, uintPQBHy9J, {from: accounts[3]});
		await DatrixoEquityTokeniHHgD9p.afterStartTime.call({from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressILI9kNm = accounts[2]
		const uint1pcQJD = BigInt("1457")
		const DatrixoEquityTokenw6HKB5c = await DatrixoEquityToken.new(addressILI9kNm, uint1pcQJD, {from: accounts[4]});
		const uintd8Tz1Df = BigInt("1979")
		const addressbrWT8dM = accounts[4]
		const addressB1ZZJxO = accounts[2]
		const uintZY5Vayn = BigInt("313")
//		const boolVocdsrr = await DatrixoEquityTokenw6HKB5c.transferFrom.call(addressB1ZZJxO, addressbrWT8dM, uintd8Tz1Df, {from: accounts[4]});
//		await DatrixoEquityTokenw6HKB5c.onlyOwner.call({from: accounts[2]});
//		const addressarrayL1VeZrt = await DatrixoEquityTokenw6HKB5c.getShareholdersArray.call({from: accounts[2]});
//		const uintljwVliy = await DatrixoEquityTokenw6HKB5c.setStart.call(uintZY5Vayn, {from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenw6HKB5c.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenw6HKB5c.transferFrom.call(addressB1ZZJxO, addressbrWT8dM, uintd8Tz1Df, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBXbiuaq = accounts[1]
		const uintFzVQp1h = BigInt("523")
		const DatrixoEquityTokeno5vCmeB = await DatrixoEquityToken.new(addressBXbiuaq, uintFzVQp1h, {from: accounts[3]});
		const addressarraydwkHkUs = await DatrixoEquityTokeno5vCmeB.getShareholdersArray.call({from: accounts[2]});
//		await DatrixoEquityTokeno5vCmeB.afterStartTime.call({from: accounts[1]});

		assert.equal(addressarraydwkHkUs, )
		await expect(DatrixoEquityTokeno5vCmeB.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressdEaVhY4 = accounts[2]
		const uintwrw4lb = BigInt("39")
		const DatrixoEquityTokenoRDMfMK = await DatrixoEquityToken.new(addressdEaVhY4, uintwrw4lb, {from: accounts[5]});
		const uintvPwlcn6 = BigInt("1219")
		const addressUp0IR0T = "0x0000000000000000000000000000000000000001"
		const boolxGZV63L = await DatrixoEquityTokenoRDMfMK.transfer.call(addressUp0IR0T, uintvPwlcn6, {from: accounts[2]});
//		await DatrixoEquityTokenoRDMfMK.onlyOwner.call({from: accounts[5]});
//		await DatrixoEquityTokenoRDMfMK.afterStartTime.call({from: accounts[2]});
//		await DatrixoEquityTokenoRDMfMK.afterStartTime.call({from: accounts[3]});

		assert.equal(boolxGZV63L, true)
		await expect(DatrixoEquityTokenoRDMfMK.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLpLj3LV = accounts[2]
		const uintbxaKGvs = BigInt("39")
		const DatrixoEquityTokenoRDMfMK = await DatrixoEquityToken.new(addressLpLj3LV, uintbxaKGvs, {from: accounts[5]});
		const uinty9gHWco = BigInt("1219")
		const addresshJkDxFs = accounts[2]
//		const boolxGZV63L = await DatrixoEquityTokenoRDMfMK.transfer.call(addresshJkDxFs, uinty9gHWco, {from: accounts[2]});
//		await DatrixoEquityTokenoRDMfMK.afterStartTime.call({from: accounts[2]});
//		await DatrixoEquityTokenoRDMfMK.afterStartTime.call({from: accounts[3]});
//		await DatrixoEquityTokenoRDMfMK.afterStartTime.call({from: accounts[5]});

		await expect(DatrixoEquityTokenoRDMfMK.transfer.call(addresshJkDxFs, uinty9gHWco, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressGKhifqn = accounts[1]
		const uintqkfalP = BigInt("523")
		const DatrixoEquityTokeno5vCmeB = await DatrixoEquityToken.new(addressGKhifqn, uintqkfalP, {from: accounts[3]});
		const uintD87a0GD = BigInt("1497")
//		const uintY3S30l = await DatrixoEquityTokeno5vCmeB.setStart.call(uintD87a0GD, {from: accounts[1]});
//		const addressarraydwkHkUs = await DatrixoEquityTokeno5vCmeB.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokeno5vCmeB.setStart.call(uintD87a0GD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressihGIEk4 = accounts[1]
		const uintWlixB6T = BigInt("523")
		const DatrixoEquityTokeno5vCmeB = await DatrixoEquityToken.new(addressihGIEk4, uintWlixB6T, {from: accounts[3]});
		const uintT5IELv3 = BigInt("886")
		const addresstkeFIPe = "0x0000000000000000000000000000000000000001"
		const addressqSX6nat = accounts[4]
//		const boolAhLzsOs = await DatrixoEquityTokeno5vCmeB.transferFrom.call(addressqSX6nat, addresstkeFIPe, uintT5IELv3, {from: accounts[1]});
//		const addressarraydwkHkUs = await DatrixoEquityTokeno5vCmeB.getShareholdersArray.call({from: accounts[2]});
//		await DatrixoEquityTokeno5vCmeB.afterStartTime.call({from: accounts[1]});

		await expect(DatrixoEquityTokeno5vCmeB.transferFrom.call(addressqSX6nat, addresstkeFIPe, uintT5IELv3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressGE2oPsv = accounts[1]
		const uintBNkLOlp = BigInt("523")
		const DatrixoEquityTokeno5vCmeB = await DatrixoEquityToken.new(addressGE2oPsv, uintBNkLOlp, {from: accounts[3]});
		const uintUCBrtDa = BigInt("583")
		const addressh5HBWbZ = "0x0000000000000000000000000000000000000000"
//		const boolMkjknsO = await DatrixoEquityTokeno5vCmeB.transfer.call(addressh5HBWbZ, uintUCBrtDa, {from: accounts[1]});

		await expect(DatrixoEquityTokeno5vCmeB.transfer.call(addressh5HBWbZ, uintUCBrtDa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressriqVEN = accounts[1]
		const uintwpqb5EC = BigInt("523")
		const DatrixoEquityTokeno5vCmeB = await DatrixoEquityToken.new(addressriqVEN, uintwpqb5EC, {from: accounts[3]});
		const uintifwyzgv = BigInt("1611")
		const addressji3C2Qu = accounts[0]
		const address2NlJhy = accounts[1]
		const addressarrayZKLJU1d = await DatrixoEquityTokeno5vCmeB.getShareholdersArray.call({from: accounts[4]});
		const addressarraydwkHkUs = await DatrixoEquityTokeno5vCmeB.getShareholdersArray.call({from: accounts[2]});
		const boolcdizs6g = await DatrixoEquityTokeno5vCmeB.transferFrom.call(address2NlJhy, addressji3C2Qu, uintifwyzgv, {from: accounts[1]});

		assert.equal(addressarrayZKLJU1d, )
		assert.equal(addressarraydwkHkUs, )
		assert.equal(boolcdizs6g, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressW0KPfOv = accounts[1]
		const uint5FzuVS = BigInt("523")
		const DatrixoEquityTokeno5vCmeB = await DatrixoEquityToken.new(addressW0KPfOv, uint5FzuVS, {from: accounts[3]});
		const uintgx2Fcw5 = BigInt("583")
		const address8yWz7g = "0x0000000000000000000000000000000000000001"
		const addressxy1fwJF = accounts[1]
		const boolMkjknsO = await DatrixoEquityTokeno5vCmeB.transfer.call(address8yWz7g, uintgx2Fcw5, {from: accounts[1]});
//		const boolcYKJbHw = await DatrixoEquityTokeno5vCmeB.removeShareholder.call(addressxy1fwJF, {from: accounts[1]});
//		const addressarraydwkHkUs = await DatrixoEquityTokeno5vCmeB.getShareholdersArray.call({from: accounts[2]});

		assert.equal(boolMkjknsO, true)
		await expect(DatrixoEquityTokeno5vCmeB.removeShareholder.call(addressxy1fwJF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})