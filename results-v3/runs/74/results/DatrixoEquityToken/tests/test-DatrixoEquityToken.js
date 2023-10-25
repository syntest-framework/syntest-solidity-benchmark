const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressOaixzPd = accounts[4]
		const uintGcRVLAx = BigInt("819")
		const DatrixoEquityTokenJMVoEVz = await DatrixoEquityToken.new(addressOaixzPd, uintGcRVLAx, {from: accounts[2]});
		const addressGAq1ddU = accounts[1]
		const uintBcP5tHK = BigInt("129")
		const addressAdeS8kF = accounts[0]
		const uintLPCfx1 = BigInt("663")
		const addresszotjHER = "0x0000000000000000000000000000000000000001"
		const addressi7ZHNVi = accounts[4]
		const uintICc2qT2 = BigInt("676")
		const addresskDWIgh = accounts[2]
		const boolDimS0Sx = await DatrixoEquityTokenJMVoEVz.removeShareholder.call(addressGAq1ddU, {from: accounts[4]});
		const boolA3uBVoI = await DatrixoEquityTokenJMVoEVz.transfer.call(addressAdeS8kF, uintBcP5tHK, {from: accounts[3]});
		const boolReJTjH = await DatrixoEquityTokenJMVoEVz.transferFrom.call(addressi7ZHNVi, addresszotjHER, uintLPCfx1, {from: accounts[3]});
		const boolsz3kvMW = await DatrixoEquityTokenJMVoEVz.transfer.call(addresskDWIgh, uintICc2qT2, {from: accounts[2]});

		await expect(DatrixoEquityTokenJMVoEVz.removeShareholder.call(addressGAq1ddU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressyQrCid2 = accounts[5]
		const uintxusM9yF = BigInt("1440")
		const DatrixoEquityTokenaum1aLU = await DatrixoEquityToken.new(addressyQrCid2, uintxusM9yF, {from: accounts[4]});
		const addressImeMgWe = accounts[4]
		const addressqbDww0H = accounts[2]
		const addressWRgzz3A = accounts[2]
		const addressUiPmUJt = accounts[4]
		await DatrixoEquityTokenaum1aLU.afterStartTime.call({from: accounts[5]});
		const boolfkADuon = await DatrixoEquityTokenaum1aLU.removeShareholder.call(addressImeMgWe, {from: accounts[4]});
		const boolirBt4L = await DatrixoEquityTokenaum1aLU.removeShareholder.call(addressqbDww0H, {from: accounts[4]});
		const boolwXugmkJ = await DatrixoEquityTokenaum1aLU.removeShareholder.call(addressWRgzz3A, {from: accounts[4]});
		const boolFOlmJFi = await DatrixoEquityTokenaum1aLU.removeShareholder.call(addressUiPmUJt, {from: accounts[2]});

		await expect(DatrixoEquityTokenaum1aLU.afterStartTime.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressdHF87fu = accounts[1]
		const uintMbeEoa5 = BigInt("1169")
		const DatrixoEquityTokenuvA2GsG = await DatrixoEquityToken.new(addressdHF87fu, uintMbeEoa5, {from: accounts[3]});
		const addressLHHHY6v = accounts[0]
		const uintfNWlsz = BigInt("1967")
		const addresskkrkr07 = accounts[4]
		const addressPOHyGtU = accounts[1]
		const uintQAbsUBo = BigInt("1656")
		const addressd7myVtv = accounts[2]
		const addressSLY5dEm = accounts[1]
		const addressarrayRLsQ3NI = await DatrixoEquityTokenuvA2GsG.getShareholdersArray.call({from: accounts[0]});
		const boolqvAc9x6 = await DatrixoEquityTokenuvA2GsG.removeShareholder.call(addressLHHHY6v, {from: accounts[3]});
		const bool7R93K4 = await DatrixoEquityTokenuvA2GsG.transferFrom.call(addressPOHyGtU, addresskkrkr07, uintfNWlsz, {from: accounts[0]});
		const boolmMHfh9o = await DatrixoEquityTokenuvA2GsG.transferFrom.call(addressSLY5dEm, addressd7myVtv, uintQAbsUBo, {from: accounts[3]});

		assert.equal(addressarrayRLsQ3NI, )
		await expect(DatrixoEquityTokenuvA2GsG.removeShareholder.call(addressLHHHY6v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressGx7lSQL = accounts[0]
		const uintyIaALw4 = BigInt("1063")
		const DatrixoEquityTokenOchGggu = await DatrixoEquityToken.new(addressGx7lSQL, uintyIaALw4, {from: accounts[0]});
		const uintjY9yxkW = BigInt("86")
		const addresstOBM6Wg = accounts[0]
		const addressarrayMM2G4eb = await DatrixoEquityTokenOchGggu.getShareholdersArray.call({from: accounts[3]});
		const booloNsrvF2 = await DatrixoEquityTokenOchGggu.transfer.call(addresstOBM6Wg, uintjY9yxkW, {from: accounts[0]});
		await DatrixoEquityTokenOchGggu.afterStartTime.call({from: accounts[4]});
		const addressarraynjZ1eSq = await DatrixoEquityTokenOchGggu.getShareholdersArray.call({from: accounts[1]});

		assert.equal(addressarrayMM2G4eb, )
		await expect(DatrixoEquityTokenOchGggu.transfer.call(addresstOBM6Wg, uintjY9yxkW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgSDLZRR = accounts[4]
		const uintQaHSG7k = BigInt("1262")
		const DatrixoEquityTokenLmToYM2 = await DatrixoEquityToken.new(addressgSDLZRR, uintQaHSG7k, {from: accounts[3]});
		const uintDN4BXlK = BigInt("948")
		const uinttYwf4iY = BigInt("43")
		const addresszomuYX7 = accounts[2]
		const uintIP4JcT = BigInt("1918")
		const addressTsRLKZS = accounts[4]
		const addressKsyb2J = accounts[4]
		const uinti0fClW = await DatrixoEquityTokenLmToYM2.setStart.call(uintDN4BXlK, {from: accounts[4]});
		const boola7PAhHe = await DatrixoEquityTokenLmToYM2.transfer.call(addresszomuYX7, uinttYwf4iY, {from: accounts[1]});
		const booll8zzkm = await DatrixoEquityTokenLmToYM2.transfer.call(addressTsRLKZS, uintIP4JcT, {from: "0x0000000000000000000000000000000000000001"});
		const booltOcQlSj = await DatrixoEquityTokenLmToYM2.removeShareholder.call(addressKsyb2J, {from: accounts[4]});

		await expect(DatrixoEquityTokenLmToYM2.transfer.call(addresszomuYX7, uinttYwf4iY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresse3mJYLd = accounts[4]
		const uintJClZwOa = BigInt("1262")
		const DatrixoEquityTokenLmToYM2 = await DatrixoEquityToken.new(addresse3mJYLd, uintJClZwOa, {from: accounts[3]});
		const uintvHy4hEN = BigInt("1869")
		const addresswclXt1q = accounts[1]
		const uintGJeNf8n = BigInt("318")
		const addressnXuV2p5 = accounts[2]
		const addressq0XZBKK = "0x0000000000000000000000000000000000000001"
		const addressA0paFzi = accounts[1]
		const boolr1cNCOl = await DatrixoEquityTokenLmToYM2.transfer.call(addresswclXt1q, uintvHy4hEN, {from: accounts[4]});
		const booltwz5uU = await DatrixoEquityTokenLmToYM2.transferFrom.call(addressq0XZBKK, addressnXuV2p5, uintGJeNf8n, {from: "0x0000000000000000000000000000000000000001"});
		const boolY8CXlI2 = await DatrixoEquityTokenLmToYM2.removeShareholder.call(addressA0paFzi, {from: accounts[4]});

		assert.equal(boolr1cNCOl, true)
		await expect(DatrixoEquityTokenLmToYM2.transferFrom.call(addressq0XZBKK, addressnXuV2p5, uintGJeNf8n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressD9tFEiw = accounts[4]
		const uintuiIp6W9 = BigInt("1262")
		const DatrixoEquityTokenLmToYM2 = await DatrixoEquityToken.new(addressD9tFEiw, uintuiIp6W9, {from: accounts[3]});
		const uintBb4rrE3 = BigInt("955")
		const addressxPMs8w = accounts[3]
		const addressH2an2O = accounts[2]
		const addressBxQuANz = accounts[2]
		const addressarraycmpqtmr = await DatrixoEquityTokenLmToYM2.getShareholdersArray.call({from: accounts[3]});
		const boolRvxBra = await DatrixoEquityTokenLmToYM2.transferFrom.call(addressH2an2O, addressxPMs8w, uintBb4rrE3, {from: accounts[4]});
		const boolY8CXlI2 = await DatrixoEquityTokenLmToYM2.removeShareholder.call(addressBxQuANz, {from: accounts[4]});

		assert.equal(addressarraycmpqtmr, )
		await expect(DatrixoEquityTokenLmToYM2.transferFrom.call(addressH2an2O, addressxPMs8w, uintBb4rrE3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLijreJ = accounts[2]
		const uintM9oz8zE = BigInt("755")
		const DatrixoEquityTokenKA6dHO = await DatrixoEquityToken.new(addressLijreJ, uintM9oz8zE, {from: "0x0000000000000000000000000000000000000001"});
		const uintNxuG6PJ = BigInt("1691")
		const addressddIje0I = accounts[2]
		await DatrixoEquityTokenKA6dHO.afterStartTime.call({from: accounts[2]});
		const addressarraya7sL8v7 = await DatrixoEquityTokenKA6dHO.getShareholdersArray.call({from: accounts[3]});
		const boolZ5rOkU = await DatrixoEquityTokenKA6dHO.transfer.call(addressddIje0I, uintNxuG6PJ, {from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressM5AxmQJ = accounts[0]
		const uintXazZzlw = BigInt("712")
		const DatrixoEquityTokenRMSLSHl = await DatrixoEquityToken.new(addressM5AxmQJ, uintXazZzlw, {from: accounts[0]});
		const uintU3ZDqMn = BigInt("1946")
		const uintO6HbUb = await DatrixoEquityTokenRMSLSHl.setStart.call(uintU3ZDqMn, {from: accounts[0]});
		const addressarraycbos7On = await DatrixoEquityTokenRMSLSHl.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenRMSLSHl.afterStartTime.call({from: accounts[1]});

		await expect(DatrixoEquityTokenRMSLSHl.setStart.call(uintU3ZDqMn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressSdeRGBF = accounts[4]
		const uintt36Ayyt = BigInt("179")
		const DatrixoEquityTokenMPTcA6q = await DatrixoEquityToken.new(addressSdeRGBF, uintt36Ayyt, {from: accounts[2]});
		const uintI6Kcqfh = BigInt("1098")
		const addressKq1K10u = accounts[1]
		const addressCYLiLs9 = accounts[4]
		const uintvADjWPO = BigInt("1430")
		const addressmwi1qQ7 = accounts[2]
		const addressAvBaZnQ = accounts[2]
		const boollO65Mf0 = await DatrixoEquityTokenMPTcA6q.transferFrom.call(addressCYLiLs9, addressKq1K10u, uintI6Kcqfh, {from: accounts[4]});
		const bool468ybt = await DatrixoEquityTokenMPTcA6q.transferFrom.call(addressAvBaZnQ, addressmwi1qQ7, uintvADjWPO, {from: accounts[0]});

		assert.equal(boollO65Mf0, true)
		await expect(DatrixoEquityTokenMPTcA6q.transferFrom.call(addressAvBaZnQ, addressmwi1qQ7, uintvADjWPO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})