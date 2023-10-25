const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOWzxybow = await FrogDAO.new({from: accounts[4]});
		const uints5Cxh8M = BigInt("1110")
		const uintMChIW2 = BigInt("1654")
		const uinto5G6RpC = BigInt("1013")
		const uintGTHK2DG = BigInt("34")
		const uintl2J3FX9 = BigInt("1857")
		const uintiZ0hJDC = BigInt("365")
		const uintHHPKMFF = BigInt("1505")
		const uintSDsu8J = BigInt("12")
		const uintPd9B1eJ = await FrogDAOWzxybow.safeSub.call(uintMChIW2, uints5Cxh8M, {from: accounts[1]});
		const uintp03pa1a = await FrogDAOWzxybow.safeDiv.call(uintGTHK2DG, uinto5G6RpC, {from: accounts[3]});
		const uintNyb8X8 = await FrogDAOWzxybow.safeMul.call(uintiZ0hJDC, uintl2J3FX9, {from: accounts[4]});
//		const uintEegfYx4 = await FrogDAOWzxybow.safeSub.call(uintSDsu8J, uintHHPKMFF, {from: accounts[3]});

		assert.equal(uintNyb8X8, BigInt("677805"))
		assert.equal(uintPd9B1eJ, BigInt("544"))
		assert.equal(uintp03pa1a, BigInt("0"))
		await expect(FrogDAOWzxybow.safeSub.call(uintSDsu8J, uintHHPKMFF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOtJJN36 = await FrogDAO.new({from: accounts[0]});
		const uintBOqvPd1 = BigInt("1883")
		const addressw1kKKo4 = accounts[1]
		const uintR5xT4X = BigInt("1059")
		const uintcLwu4BR = BigInt("1327")
		const uintthkX0kA = BigInt("281")
		const uintAE4c90f = BigInt("1155")
		const addressJyfzVLW = accounts[2]
		const addressPt0mRht = accounts[2]
		const addressG2uZ1jv = accounts[1]
		const address1oMEmS = accounts[3]
		const boola7y4FqP = await FrogDAOtJJN36.approve.call(addressw1kKKo4, uintBOqvPd1, {from: accounts[3]});
		const uintzb9zf7i = await FrogDAOtJJN36.safeMul.call(uintcLwu4BR, uintR5xT4X, {from: accounts[1]});
		const uintfi3ZqNJ = await FrogDAOtJJN36.safeMul.call(uintAE4c90f, uintthkX0kA, {from: accounts[3]});
		const uintvfC7Ade = await FrogDAOtJJN36.allowance.call(addressPt0mRht, addressJyfzVLW, {from: "0x0000000000000000000000000000000000000001"});
		const uintoZkSdHm = await FrogDAOtJJN36.allowance.call(address1oMEmS, addressG2uZ1jv, {from: accounts[1]});

		assert.equal(boola7y4FqP, true)
		assert.equal(uintfi3ZqNJ, BigInt("324555"))
		assert.equal(uintoZkSdHm, BigInt("0"))
		assert.equal(uintvfC7Ade, BigInt("0"))
		assert.equal(uintzb9zf7i, BigInt("1405293"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOheNfQW = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlceyYm = BigInt("1731")
		const uintWyMrfgD = BigInt("1775")
		const uintozlmgJm = BigInt("1651")
		const addressBZyDxiG = accounts[0]
		const uintd108vh = BigInt("469")
		const uintEPL913N = BigInt("1217")
		const uintMRhnaYL = await FrogDAOheNfQW.safeMul.call(uintWyMrfgD, uintlceyYm, {from: accounts[2]});
		const boolgZJaedN = await FrogDAOheNfQW.transfer.call(addressBZyDxiG, uintozlmgJm, {from: accounts[3]});
		const uintmMu0ezq = await FrogDAOheNfQW.safeSub.call(uintEPL913N, uintd108vh, {from: accounts[5]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOQAJVg8f = await FrogDAO.new({from: accounts[4]});
		const uintbTHniee = BigInt("1278")
		const uintw6QKOIb = BigInt("2000")
		const uintmaGHZI = BigInt("42")
		const addressIiPub7 = accounts[3]
		const uintd5kMJz = BigInt("886")
		const uintsvGAnPr = BigInt("497")
		const uintYJOglUR = BigInt("693")
		const uintmMxA8I = BigInt("1693")
		const uintCUCYRcq = await FrogDAOQAJVg8f.safeSub.call(uintw6QKOIb, uintbTHniee, {from: accounts[0]});
//		const boolF9MKLpF = await FrogDAOQAJVg8f.transfer.call(addressIiPub7, uintmaGHZI, {from: accounts[3]});
//		const uintfsbSwV = await FrogDAOQAJVg8f.safeMul.call(uintsvGAnPr, uintd5kMJz, {from: accounts[0]});
//		const uintJKfRX9e = await FrogDAOQAJVg8f.safeMul.call(uintmMxA8I, uintYJOglUR, {from: accounts[3]});

		assert.equal(uintCUCYRcq, BigInt("722"))
		await expect(FrogDAOQAJVg8f.transfer.call(addressIiPub7, uintmaGHZI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOHprJNEM = await FrogDAO.new({from: accounts[0]});
		const uintVdODBW8 = BigInt("522")
		const addressTgQpXhe = accounts[5]
		const addressw1Nuq6r = accounts[0]
		const addressrkElKF = accounts[1]
		const addressPLZLH7 = accounts[1]
		const uintIZD32jP = BigInt("1979")
		const uintIEyirvp = BigInt("147")
		const uintIgW9cWE = BigInt("1465")
		const uintwyBkPZw = BigInt("1467")
//		const boolvHIMBiQ = await FrogDAOHprJNEM.transferFrom.call(addressw1Nuq6r, addressTgQpXhe, uintVdODBW8, {from: accounts[4]});
//		const uintyUw1mOC = await FrogDAOHprJNEM.allowance.call(addressPLZLH7, addressrkElKF, {from: accounts[0]});
//		const uintBLdHX9p = await FrogDAOHprJNEM.safeMul.call(uintIEyirvp, uintIZD32jP, {from: "0x0000000000000000000000000000000000000001"});
//		const uintRV57yP9 = await FrogDAOHprJNEM.safeAdd.call(uintwyBkPZw, uintIgW9cWE, {from: accounts[5]});

		await expect(FrogDAOHprJNEM.transferFrom.call(addressw1Nuq6r, addressTgQpXhe, uintVdODBW8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOCla6agc = await FrogDAO.new({from: accounts[4]});
		const uintKrNr4F3 = BigInt("1656")
		const addresslZKM3eP = accounts[0]
		const addressLQhg20U = accounts[1]
		const addresskszGj8Z = accounts[1]
		const uintUnPGONR = BigInt("740")
		const uintLfqvNt = BigInt("689")
		const uintkBpq03P = BigInt("422")
		const uintUiNbZ1x = BigInt("2007")
		const uinthWKENVj = BigInt("1641")
		const uintXjtLMqb = BigInt("12")
		const boola0mA279 = await FrogDAOCla6agc.approve.call(addresslZKM3eP, uintKrNr4F3, {from: accounts[2]});
		const uintoOvEqNy = await FrogDAOCla6agc.allowance.call(addresskszGj8Z, addressLQhg20U, {from: accounts[3]});
		const uintT2HefGO = await FrogDAOCla6agc.safeMul.call(uintLfqvNt, uintUnPGONR, {from: accounts[2]});
		const uintxiWKrte = await FrogDAOCla6agc.safeAdd.call(uintUiNbZ1x, uintkBpq03P, {from: accounts[4]});
		const uintYqsVEJf = await FrogDAOCla6agc.safeDiv.call(uintXjtLMqb, uinthWKENVj, {from: accounts[2]});

		assert.equal(boola0mA279, true)
		assert.equal(uintT2HefGO, BigInt("509860"))
		assert.equal(uintYqsVEJf, BigInt("0"))
		assert.equal(uintoOvEqNy, BigInt("0"))
		assert.equal(uintxiWKrte, BigInt("2429"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOT6HoHxR = await FrogDAO.new({from: accounts[5]});
		const uintRhrWsWl = BigInt("29")
		const uintomYsPCn = BigInt("1206")
		const addressaT5gH4h = accounts[0]
		const uintzumJFb = BigInt("1445")
		const uintnzBa0d7 = BigInt("1873")
		const uintf6YPd5T = BigInt("1257")
		const uintMW8FzJv = BigInt("200")
		const uintQ6yrcif = await FrogDAOT6HoHxR.safeAdd.call(uintomYsPCn, uintRhrWsWl, {from: accounts[0]});
		const uintoUzrWif = await FrogDAOT6HoHxR.totalSupply.call({from: accounts[5]});
		const uintCsojqlH = await FrogDAOT6HoHxR.balanceOf.call(addressaT5gH4h, {from: accounts[3]});
		const uintYaWh1jI = await FrogDAOT6HoHxR.safeMul.call(uintnzBa0d7, uintzumJFb, {from: accounts[0]});
		const uintk5WTS5n = await FrogDAOT6HoHxR.safeMul.call(uintMW8FzJv, uintf6YPd5T, {from: accounts[4]});

		assert.equal(uintCsojqlH, BigInt("0"))
		assert.equal(uintQ6yrcif, BigInt("1235"))
		assert.equal(uintYaWh1jI, BigInt("2706485"))
		assert.equal(uintk5WTS5n, BigInt("251400"))
		assert.equal(uintoUzrWif, BigInt("1000000000000000000000000"))
	});
})