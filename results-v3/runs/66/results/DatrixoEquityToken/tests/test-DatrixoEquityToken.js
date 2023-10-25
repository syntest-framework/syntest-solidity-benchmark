const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressmbawV7n = "0x0000000000000000000000000000000000000001"
		const uintuNl9ack = BigInt("1037")
		const DatrixoEquityTokenvHRiop6 = await DatrixoEquityToken.new(addressmbawV7n, uintuNl9ack, {from: accounts[5]});
		const uintUJ0r85S = BigInt("548")
		const address2BlB6r = accounts[0]
		const addressVfW3YlP = accounts[5]
		const uintCH2VpFu = BigInt("840")
		const addresskAEhJdn = "0x0000000000000000000000000000000000000001"
		const addressr0Cwrm = accounts[4]
		const uintdzdV0aZ = BigInt("737")
		const addressNmfHqBD = accounts[1]
		const addresstuowNQV = accounts[1]
		await DatrixoEquityTokenvHRiop6.afterStartTime.call({from: accounts[0]});
		const boolhdyeAf4 = await DatrixoEquityTokenvHRiop6.transferFrom.call(addressVfW3YlP, address2BlB6r, uintUJ0r85S, {from: accounts[0]});
		const bool4ZAkhT = await DatrixoEquityTokenvHRiop6.transfer.call(addresskAEhJdn, uintCH2VpFu, {from: accounts[3]});
		const boolEV9SpPe = await DatrixoEquityTokenvHRiop6.removeShareholder.call(addressr0Cwrm, {from: accounts[0]});
		const addressarrayKmJ7koD = await DatrixoEquityTokenvHRiop6.getShareholdersArray.call({from: accounts[0]});
		const boolo3Tni2 = await DatrixoEquityTokenvHRiop6.transferFrom.call(addresstuowNQV, addressNmfHqBD, uintdzdV0aZ, {from: accounts[3]});

		await expect(DatrixoEquityTokenvHRiop6.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressidY5mdz = accounts[1]
		const uintRuNXdM = BigInt("1833")
		const DatrixoEquityTokenvd1CjJE = await DatrixoEquityToken.new(addressidY5mdz, uintRuNXdM, {from: "0x0000000000000000000000000000000000000001"});
		const uintKafk6hf = BigInt("389")
		const addressFyU1goy = accounts[3]
		await DatrixoEquityTokenvd1CjJE.afterStartTime.call({from: accounts[4]});
		const addressarrayIQ9vPV = await DatrixoEquityTokenvd1CjJE.getShareholdersArray.call({from: accounts[0]});
		const boolJ8J6KKO = await DatrixoEquityTokenvd1CjJE.transfer.call(addressFyU1goy, uintKafk6hf, {from: accounts[5]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressygmsv17 = accounts[3]
		const uintJHhqOpV = BigInt("1123")
		const DatrixoEquityTokenjZjSJHD = await DatrixoEquityToken.new(addressygmsv17, uintJHhqOpV, {from: accounts[0]});
		const uintiGa5AgM = BigInt("1320")
		const addressZkcZdbb = accounts[2]
		const addressarrayAR22RgE = await DatrixoEquityTokenjZjSJHD.getShareholdersArray.call({from: accounts[4]});
		const boolQozaC8o = await DatrixoEquityTokenjZjSJHD.transfer.call(addressZkcZdbb, uintiGa5AgM, {from: accounts[4]});
		const addressarrayeNr1Xxn = await DatrixoEquityTokenjZjSJHD.getShareholdersArray.call({from: accounts[4]});

		assert.equal(addressarrayAR22RgE, )
		await expect(DatrixoEquityTokenjZjSJHD.transfer.call(addressZkcZdbb, uintiGa5AgM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslY3qBCJ = accounts[1]
		const uintlEQSEuN = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addresslY3qBCJ, uintlEQSEuN, {from: accounts[0]});
		const uintrYQPZhU = BigInt("650")
		const addressU60lT4C = accounts[0]
		const addressg4y0Hbq = accounts[4]
		const boolMyHZXa = await DatrixoEquityTokenXQlPYb.transfer.call(addressU60lT4C, uintrYQPZhU, {from: accounts[1]});
		const boolBXr0tGf = await DatrixoEquityTokenXQlPYb.removeShareholder.call(addressg4y0Hbq, {from: accounts[0]});

		assert.equal(boolMyHZXa, true)
		await expect(DatrixoEquityTokenXQlPYb.removeShareholder.call(addressg4y0Hbq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressMR9LzLx = accounts[1]
		const uintmnVpDc = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addressMR9LzLx, uintmnVpDc, {from: accounts[0]});
		const addressWVsG88A = accounts[5]
		const addressarbvdlB = accounts[5]
		const uintfvFoZDe = BigInt("114")
		const boolV3D8uSp = await DatrixoEquityTokenXQlPYb.removeShareholder.call(addressWVsG88A, {from: accounts[1]});
		const boolBXr0tGf = await DatrixoEquityTokenXQlPYb.removeShareholder.call(addressarbvdlB, {from: accounts[0]});
		const uinte9TfA40 = await DatrixoEquityTokenXQlPYb.setStart.call(uintfvFoZDe, {from: accounts[2]});

		await expect(DatrixoEquityTokenXQlPYb.removeShareholder.call(addressWVsG88A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresseGXRedj = accounts[1]
		const uintb4ZgVf = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addresseGXRedj, uintb4ZgVf, {from: accounts[0]});
		const uintNCVVOg2 = BigInt("650")
		const addressyCyYhc4 = accounts[1]
		const uintkmyyKwU = BigInt("1417")
		const addressNUWfOKy = accounts[1]
		const addresslTiNUXE = accounts[5]
		const uintILzQFtO = BigInt("1189")
		const addressirjlYWa = accounts[0]
		const boolMyHZXa = await DatrixoEquityTokenXQlPYb.transfer.call(addressyCyYhc4, uintNCVVOg2, {from: accounts[1]});
		const boolKlTYFaj = await DatrixoEquityTokenXQlPYb.transfer.call(addressNUWfOKy, uintkmyyKwU, {from: accounts[2]});
		const boolBXr0tGf = await DatrixoEquityTokenXQlPYb.removeShareholder.call(addresslTiNUXE, {from: accounts[0]});
		const boolGZ8yuCT = await DatrixoEquityTokenXQlPYb.transfer.call(addressirjlYWa, uintILzQFtO, {from: accounts[5]});

		await expect(DatrixoEquityTokenXQlPYb.transfer.call(addressyCyYhc4, uintNCVVOg2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressJx0vnf0 = accounts[1]
		const uintGspULgQ = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addressJx0vnf0, uintGspULgQ, {from: accounts[0]});
		const uints7pt7b = BigInt("721")
		const addresse6Hkmiq = accounts[2]
		const addressPt8NEGC = accounts[0]
		const boolEPEFbHI = await DatrixoEquityTokenXQlPYb.transferFrom.call(addressPt8NEGC, addresse6Hkmiq, uints7pt7b, {from: accounts[1]});

		await expect(DatrixoEquityTokenXQlPYb.transferFrom.call(addressPt8NEGC, addresse6Hkmiq, uints7pt7b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslO3HsSN = accounts[1]
		const uintJU3byv1 = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addresslO3HsSN, uintJU3byv1, {from: accounts[0]});
		const uintPTGe1qi = BigInt("721")
		const addressnMFUejh = accounts[3]
		const addresssulqFcn = accounts[1]
		const boolEPEFbHI = await DatrixoEquityTokenXQlPYb.transferFrom.call(addresssulqFcn, addressnMFUejh, uintPTGe1qi, {from: accounts[1]});

		assert.equal(boolEPEFbHI, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrc8RQLT = accounts[1]
		const uintouLggWO = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addressrc8RQLT, uintouLggWO, {from: accounts[0]});
		const uintIMtoWu9 = BigInt("663")
		const addressbfjUU3 = accounts[0]
		const uintdbz6VCy = BigInt("1754")
		const boolMyHZXa = await DatrixoEquityTokenXQlPYb.transfer.call(addressbfjUU3, uintIMtoWu9, {from: accounts[1]});
		const uintP1yRAx = await DatrixoEquityTokenXQlPYb.setStart.call(uintdbz6VCy, {from: accounts[1]});

		assert.equal(boolMyHZXa, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addresscs5YSkn = accounts[1]
		const uintvrXzYyC = BigInt("1790")
		const DatrixoEquityTokenXQlPYb = await DatrixoEquityToken.new(addresscs5YSkn, uintvrXzYyC, {from: accounts[0]});
		const uintyMfqogH = BigInt("1958")
		const addresshT1InE = accounts[5]
		const uintVJKQw05 = await DatrixoEquityTokenXQlPYb.setStart.call(uintyMfqogH, {from: accounts[1]});
		const boolBXr0tGf = await DatrixoEquityTokenXQlPYb.removeShareholder.call(addresshT1InE, {from: accounts[0]});

		await expect(DatrixoEquityTokenXQlPYb.setStart.call(uintyMfqogH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})