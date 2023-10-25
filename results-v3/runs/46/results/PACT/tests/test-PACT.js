const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTUKsFFc = await PACT.new({from: accounts[3]});
		const addressOaoaHY1 = accounts[2]
		const uintofSXHgk = BigInt("1742")
		const addressCOhldm8 = accounts[0]
		const addressqWZ6Tof = accounts[0]
		const uintci1qRsZ = BigInt("1739")
		const addressPEL9OMG = accounts[1]
		const addressX6nLF0Q = accounts[0]
		const uintNExKcDR = await PACTUKsFFc.balanceOf.call(addressOaoaHY1, {from: "0x0000000000000000000000000000000000000001"});
		const boolCEBxZIw = await PACTUKsFFc.burn.call(addressCOhldm8, uintofSXHgk, {from: accounts[1]});
		const uintiA36YB3 = await PACTUKsFFc.balanceOf.call(addressqWZ6Tof, {from: accounts[1]});
		const boolcq3U4tQ = await PACTUKsFFc.transferFrom.call(addressX6nLF0Q, addressPEL9OMG, uintci1qRsZ, {from: accounts[2]});

		assert.equal(uintNExKcDR, BigInt("0"))
		await expect(PACTUKsFFc.burn.call(addressCOhldm8, uintofSXHgk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTdTSxThA = await PACT.new({from: accounts[2]});
		const addressOQAsns9 = accounts[2]
		const addressGM4q1g = accounts[0]
		const uintojD7VJu = BigInt("282")
		const addressc5acgTU = accounts[0]
		const uinttENw54J = BigInt("532")
		const addressyzoR44y = accounts[2]
		const addresssZRVnXC = accounts[1]
		const booliod10Yg = await PACTdTSxThA.setupBasePool.call(addressOQAsns9, {from: "0x0000000000000000000000000000000000000001"});
		const boolXZAeRJ2 = await PACTdTSxThA.setupTeam.call(addressGM4q1g, {from: accounts[0]});
		const boolBxuWBXP = await PACTdTSxThA.approve.call(addressc5acgTU, uintojD7VJu, {from: accounts[4]});
		const boole7CEqUV = await PACTdTSxThA.transferFrom.call(addresssZRVnXC, addressyzoR44y, uinttENw54J, {from: accounts[1]});
		const stringfC3siBq = await PACTdTSxThA.symbol.call({from: accounts[0]});

		await expect(PACTdTSxThA.setupBasePool.call(addressOQAsns9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTaBgMnRL = await PACT.new({from: accounts[2]});
		const uintSVjK91w = BigInt("1414")
		const addressGrfzDkt = accounts[4]
		const addressYs9fwX3 = "0x0000000000000000000000000000000000000001"
		const uintc9BoaZA = BigInt("877")
		const addresshGGxqmQ = accounts[4]
		const uintBPzsv4U = await PACTaBgMnRL.totalSupply.call({from: accounts[0]});
		const boolEuVgXjF = await PACTaBgMnRL.transferFrom.call(addressYs9fwX3, addressGrfzDkt, uintSVjK91w, {from: accounts[1]});
		const boolATClwYJ = await PACTaBgMnRL.transfer.call(addresshGGxqmQ, uintc9BoaZA, {from: accounts[1]});

		assert.equal(uintBPzsv4U, BigInt("1000000000000000000000000000"))
		await expect(PACTaBgMnRL.transferFrom.call(addressYs9fwX3, addressGrfzDkt, uintSVjK91w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTCTm6nxP = await PACT.new({from: accounts[4]});
		const uintewmhFy3 = BigInt("298")
		const addressBbwasJf = accounts[0]
		const uintiXlfpgC = BigInt("1581")
		const addressh5Sdof = accounts[5]
		const addresszVO6hps = accounts[4]
		const uintVLVDNxD = BigInt("2025")
		const addresszIDzMrI = accounts[5]
		const uintVew4D7R = await PACTCTm6nxP.totalSupply.call({from: accounts[3]});
		const boolPNUBkI = await PACTCTm6nxP.approve.call(addressBbwasJf, uintewmhFy3, {from: accounts[2]});
		const boolTDjoisx = await PACTCTm6nxP.transferFrom.call(addresszVO6hps, addressh5Sdof, uintiXlfpgC, {from: accounts[3]});
		const uintJp1onQu = await PACTCTm6nxP.totalSupply.call({from: accounts[2]});
		const boolPdBRe9r = await PACTCTm6nxP.transfer.call(addresszIDzMrI, uintVLVDNxD, {from: accounts[4]});

		assert.equal(boolPNUBkI, true)
		assert.equal(uintVew4D7R, BigInt("1000000000000000000000000000"))
		await expect(PACTCTm6nxP.transferFrom.call(addresszVO6hps, addressh5Sdof, uintiXlfpgC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMfHyjdx = await PACT.new({from: accounts[4]});
		const uintSBNK0Z = BigInt("661")
		const addressno1zmJ = accounts[2]
		const addressCMtmhml = accounts[1]
		const boolRUWsjMt = await PACTMfHyjdx.transfer.call(addressno1zmJ, uintSBNK0Z, {from: accounts[0]});
		const stringAHudTr = await PACTMfHyjdx.name.call({from: accounts[5]});
		const stringCTxI5SD = await PACTMfHyjdx.symbol.call({from: accounts[3]});
		const boolH6DLafS = await PACTMfHyjdx.setupReserve.call(addressCMtmhml, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTMfHyjdx.transfer.call(addressno1zmJ, uintSBNK0Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKnSkPrs = await PACT.new({from: accounts[4]});
		const addressWShYtKc = accounts[4]
		const uintFhJd1bJ = BigInt("46")
		const addressyZgc19C = accounts[2]
		const addressh53QXLM = accounts[3]
		const addressvYFTji7 = accounts[3]
		const uintTlklTOD = BigInt("483")
		const addresssvHuU2G = accounts[2]
		const boolvy9aagZ = await PACTKnSkPrs.setupRewards.call(addressWShYtKc, {from: accounts[4]});
		const boolqj5YMeI = await PACTKnSkPrs.transferFrom.call(addressh53QXLM, addressyZgc19C, uintFhJd1bJ, {from: accounts[2]});
		const boollDXdTGa = await PACTKnSkPrs.setupReserve.call(addressvYFTji7, {from: accounts[3]});
		const boolrM0kXHb = await PACTKnSkPrs.transfer.call(addresssvHuU2G, uintTlklTOD, {from: accounts[4]});

		await expect(PACTKnSkPrs.setupRewards.call(addressWShYtKc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKEovNN = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOLdEuf9 = "0x0000000000000000000000000000000000000001"
		const addresscIZv1B1 = accounts[2]
		const uintDrSNIJb = BigInt("1246")
		const addressWxw9qiy = accounts[1]
		const uintlHPNKFw = await PACTKEovNN.balanceOf.call(addressOLdEuf9, {from: accounts[3]});
		const uintenAXXL0 = await PACTKEovNN.totalSupply.call({from: accounts[2]});
		const booldHOEcL5 = await PACTKEovNN.setupBasePool.call(addresscIZv1B1, {from: "0x0000000000000000000000000000000000000001"});
		const uintiBBcD9P = await PACTKEovNN.totalSupply.call({from: accounts[2]});
		const boolt4X9tSv = await PACTKEovNN.transfer.call(addressWxw9qiy, uintDrSNIJb, {from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTDVYSI29 = await PACT.new({from: accounts[3]});
		const addressdLMWYmz = accounts[1]
		const addressdXdXyhX = accounts[0]
		const addressSsSK3eH = accounts[5]
		const addressWyqrk5 = accounts[3]
		const uintoIesHJG = BigInt("1319")
		const addressYHZaRKV = accounts[1]
		const uintf6yO18S = await PACTDVYSI29.allowance.call(addressdXdXyhX, addressdLMWYmz, {from: accounts[2]});
		const boolgAw0b5H = await PACTDVYSI29.setupReserve.call(addressSsSK3eH, {from: accounts[0]});
		const boolvk1QdE = await PACTDVYSI29.setupTeam.call(addressWyqrk5, {from: accounts[1]});
		const boolX3niB5D = await PACTDVYSI29.transfer.call(addressYHZaRKV, uintoIesHJG, {from: accounts[0]});

		assert.equal(uintf6yO18S, BigInt("0"))
		await expect(PACTDVYSI29.setupReserve.call(addressSsSK3eH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT8EBfFq = await PACT.new({from: accounts[5]});
		const addressvChviJR = accounts[3]
		const uintZlk5WwI = BigInt("1728")
		const addressGiFj3S = accounts[1]
		const boolRfz5Su9 = await PACT8EBfFq.setupTeam.call(addressvChviJR, {from: accounts[1]});
		const boolnHYmq0I = await PACT8EBfFq.transfer.call(addressGiFj3S, uintZlk5WwI, {from: accounts[3]});
		const uint8lyMZLlL = await PACT8EBfFq.decimals.call({from: accounts[1]});

		await expect(PACT8EBfFq.setupTeam.call(addressvChviJR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT8EBfFq = await PACT.new({from: accounts[5]});
		const uints6V5Mj = BigInt("1378")
		const addressBYxpH8R = accounts[1]
		const uintO1osSie = BigInt("1622")
		const addressTvuD2Id = accounts[0]
		const stringFWinTh = await PACT8EBfFq.name.call({from: accounts[5]});
		const boolnHYmq0I = await PACT8EBfFq.transfer.call(addressBYxpH8R, uints6V5Mj, {from: accounts[3]});
		const boolkgJ70ku = await PACT8EBfFq.approve.call(addressTvuD2Id, uintO1osSie, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringFWinTh, "P2PB2B community token")
		await expect(PACT8EBfFq.transfer.call(addressBYxpH8R, uints6V5Mj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT8EBfFq = await PACT.new({from: accounts[5]});
		const uintXC87qmE = BigInt("712")
		const addressN51u6At = accounts[2]
		const uintoj0mdMl = BigInt("1762")
		const addressG6K6TlL = accounts[3]
		const addressHHjK84n = accounts[0]
		const uintiNx37yz = BigInt("2009")
		const addressWJPgjGl = accounts[2]
		const uint8z50P9t = await PACT8EBfFq.decimals.call({from: accounts[3]});
		const boolSLpJOSt = await PACT8EBfFq.transfer.call(addressN51u6At, uintXC87qmE, {from: accounts[0]});
		const boolQmcDREr = await PACT8EBfFq.transferFrom.call(addressHHjK84n, addressG6K6TlL, uintoj0mdMl, {from: accounts[1]});
		const boolnHYmq0I = await PACT8EBfFq.transfer.call(addressWJPgjGl, uintiNx37yz, {from: accounts[3]});

		assert.equal(uint8z50P9t, BigInt("18"))
		await expect(PACT8EBfFq.transfer.call(addressN51u6At, uintXC87qmE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT8EBfFq = await PACT.new({from: accounts[5]});
		const uintJYvVnEA = BigInt("2009")
		const addressqCTjCu7 = accounts[1]
		const stringXR34tBZ = await PACT8EBfFq.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnHYmq0I = await PACT8EBfFq.transfer.call(addressqCTjCu7, uintJYvVnEA, {from: accounts[3]});

		assert.equal(stringXR34tBZ, "PACT")
		await expect(PACT8EBfFq.transfer.call(addressqCTjCu7, uintJYvVnEA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT8EBfFq = await PACT.new({from: accounts[5]});
		const addressKTENzWl = accounts[5]
		const addressaFoDKuR = accounts[5]
		const uintTWJWgE = BigInt("1992")
		const addresscuvHQvV = accounts[1]
		const uintDxzrF0q = await PACT8EBfFq.balanceOf.call(addressKTENzWl, {from: accounts[3]});
		const boolTBuUNz6 = await PACT8EBfFq.setupFarming.call(addressaFoDKuR, {from: accounts[2]});
		const boolnHYmq0I = await PACT8EBfFq.transfer.call(addresscuvHQvV, uintTWJWgE, {from: accounts[3]});

		assert.equal(uintDxzrF0q, BigInt("0"))
		await expect(PACT8EBfFq.setupFarming.call(addressaFoDKuR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})