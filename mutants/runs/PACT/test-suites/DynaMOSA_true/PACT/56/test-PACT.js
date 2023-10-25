const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTIlhxe19 = await PACT.new({from: accounts[2]});
		const address9kFhtE = "0x0000000000000000000000000000000000000001"
		const addressw9sF87s = accounts[2]
		const addressyr2HDlT = accounts[2]
		const addressHwH7hq = accounts[1]
		const boolWBMWXTX = await PACTIlhxe19.setupTeam.call(address9kFhtE, {from: accounts[3]});
		const uintyOaz54q = await PACTIlhxe19.balanceOf.call(addressw9sF87s, {from: accounts[2]});
		const uintC9vvH2P = await PACTIlhxe19.balanceOf.call(addressyr2HDlT, {from: accounts[0]});
		const booll3bVIpw = await PACTIlhxe19.setupFarming.call(addressHwH7hq, {from: accounts[3]});
		const stringXQYm96G = await PACTIlhxe19.name.call({from: accounts[3]});

		await expect(PACTIlhxe19.setupTeam.call(address9kFhtE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTz3iqq9 = await PACT.new({from: accounts[0]});
		const addressG7jooDa = accounts[0]
		const addressPbXJdUR = accounts[5]
		const addressvqTb0Gv = accounts[5]
		const addressZ8pNkmW = accounts[2]
		const stringObtAr4I = await PACTz3iqq9.name.call({from: accounts[1]});
		const boolnyJF8Ce = await PACTz3iqq9.setupRewards.call(addressG7jooDa, {from: accounts[2]});
		const stringzHoIQ5T = await PACTz3iqq9.name.call({from: accounts[0]});
		const uintsfDckB = await PACTz3iqq9.balanceOf.call(addressPbXJdUR, {from: accounts[3]});
		const uintJovqe6x = await PACTz3iqq9.allowance.call(addressZ8pNkmW, addressvqTb0Gv, {from: accounts[4]});

		assert.equal(stringObtAr4I, "P2PB2B community token")
		await expect(PACTz3iqq9.setupRewards.call(addressG7jooDa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTm1iutN5 = await PACT.new({from: accounts[3]});
		const addressPVssqvu = accounts[2]
		const addressBjDmqLK = accounts[5]
		const uintD9n7U7G = BigInt("1911")
		const addressUD1HOWb = accounts[3]
		const addressKA7YPDN = accounts[3]
		const addressOIV8BJw = accounts[2]
		const stringlTi0f04 = await PACTm1iutN5.symbol.call({from: accounts[1]});
		const uintLUL7oN = await PACTm1iutN5.allowance.call(addressBjDmqLK, addressPVssqvu, {from: accounts[5]});
		const booloP4Oeyj = await PACTm1iutN5.burn.call(addressUD1HOWb, uintD9n7U7G, {from: accounts[1]});
		const uintq1whKt = await PACTm1iutN5.allowance.call(addressOIV8BJw, addressKA7YPDN, {from: accounts[3]});

		assert.equal(stringlTi0f04, "PACT")
		assert.equal(uintLUL7oN, BigInt("0"))
		await expect(PACTm1iutN5.burn.call(addressUD1HOWb, uintD9n7U7G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTY827n79 = await PACT.new({from: accounts[4]});
		const uint8MkhXt = BigInt("884")
		const addressCAObJnh = accounts[3]
		const address93F8bE = accounts[5]
		const uint9Sizc8 = BigInt("622")
		const addressCSKKw7S = "0x0000000000000000000000000000000000000001"
		const addresswVz2nJ7 = accounts[0]
		const addressj0mZ90E = accounts[4]
		const boolNWB2Qsh = await PACTY827n79.transfer.call(addressCAObJnh, uint8MkhXt, {from: accounts[3]});
		const stringLjnayck = await PACTY827n79.name.call({from: accounts[4]});
		const booluv8pdI6 = await PACTY827n79.setupReserve.call(address93F8bE, {from: accounts[3]});
		const boolCeAaEEj = await PACTY827n79.approve.call(addressCSKKw7S, uint9Sizc8, {from: accounts[3]});
		const uintO4SaDGh = await PACTY827n79.allowance.call(addressj0mZ90E, addresswVz2nJ7, {from: accounts[0]});

		await expect(PACTY827n79.transfer.call(addressCAObJnh, uint8MkhXt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMjJi3co = await PACT.new({from: accounts[1]});
		const addressAh4Gdhm = accounts[4]
		const uintwlYFt1r = BigInt("1298")
		const addressGYNbtkU = accounts[3]
		const addressdUMns2h = accounts[2]
		const boolpBehjhM = await PACTMjJi3co.setupBasePool.call(addressAh4Gdhm, {from: accounts[3]});
		const boollDidmaE = await PACTMjJi3co.transferFrom.call(addressdUMns2h, addressGYNbtkU, uintwlYFt1r, {from: accounts[1]});

		await expect(PACTMjJi3co.setupBasePool.call(addressAh4Gdhm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTm1iutN5 = await PACT.new({from: accounts[3]});
		const addresskqPBiTe = accounts[2]
		const addressaBbHKex = accounts[2]
		const addressdubKniN = accounts[5]
		const addressqqu9xeC = accounts[3]
		const addresssEPdeT = accounts[2]
		const uint41o8Xm = await PACTm1iutN5.totalSupply.call({from: accounts[1]});
		const stringlTi0f04 = await PACTm1iutN5.symbol.call({from: accounts[1]});
		const boolFEhmb6S = await PACTm1iutN5.setupReserve.call(addresskqPBiTe, {from: accounts[3]});
		const uintLUL7oN = await PACTm1iutN5.allowance.call(addressdubKniN, addressaBbHKex, {from: accounts[5]});
		const uintq1whKt = await PACTm1iutN5.allowance.call(addresssEPdeT, addressqqu9xeC, {from: accounts[3]});

		assert.equal(stringlTi0f04, "PACT")
		assert.equal(uint41o8Xm, BigInt("1000000000000000000000000000"))
		await expect(PACTm1iutN5.setupReserve.call(addresskqPBiTe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTqOPSPRm = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfOXaB9a = accounts[5]
		const uintD3mhDW = BigInt("614")
		const addresspzXvvu = accounts[2]
		const addressCD4FNm0 = accounts[2]
		const uintUUIlU6S = BigInt("112")
		const addressnNGaGAp = accounts[0]
		const boolyj3veWW = await PACTqOPSPRm.setupTeam.call(addressfOXaB9a, {from: accounts[3]});
		const stringaOBBGGg = await PACTqOPSPRm.symbol.call({from: accounts[5]});
		const boolco3kdO = await PACTqOPSPRm.transfer.call(addresspzXvvu, uintD3mhDW, {from: accounts[4]});
		const uintAxwFRgK = await PACTqOPSPRm.balanceOf.call(addressCD4FNm0, {from: accounts[2]});
		const boolw6DKptl = await PACTqOPSPRm.approve.call(addressnNGaGAp, uintUUIlU6S, {from: accounts[1]});
	});

	it('test for PACT', async () => {
		const PACTm1iutN5 = await PACT.new({from: accounts[3]});
		const addressu1yCjBy = accounts[0]
		const addressiWzEEUe = accounts[0]
		const uinta7t92NY = BigInt("1911")
		const addresslCum0DD = accounts[3]
		const uintKU3wa9e = BigInt("885")
		const addressTNpEONl = accounts[0]
		const addressGkTfNFl = accounts[3]
		const addressjTvnPWn = accounts[2]
		const uints4vTHvp = await PACTm1iutN5.balanceOf.call(addressu1yCjBy, {from: "0x0000000000000000000000000000000000000001"});
		const stringlTi0f04 = await PACTm1iutN5.symbol.call({from: accounts[1]});
		const bool9vUmLd = await PACTm1iutN5.setupTeam.call(addressiWzEEUe, {from: accounts[1]});
		const booloP4Oeyj = await PACTm1iutN5.burn.call(addresslCum0DD, uinta7t92NY, {from: accounts[1]});
		const stringxY6dEMg = await PACTm1iutN5.symbol.call({from: accounts[5]});
		const boolsuJeuqr = await PACTm1iutN5.approve.call(addressTNpEONl, uintKU3wa9e, {from: accounts[0]});
		const uintq1whKt = await PACTm1iutN5.allowance.call(addressjTvnPWn, addressGkTfNFl, {from: accounts[3]});

		assert.equal(stringlTi0f04, "PACT")
		assert.equal(uints4vTHvp, BigInt("0"))
		await expect(PACTm1iutN5.setupTeam.call(addressiWzEEUe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMjJi3co = await PACT.new({from: accounts[1]});
		const uintb0Yer2D = BigInt("1298")
		const addressuWm93bj = accounts[3]
		const addressVnDCYIZ = accounts[2]
		const boollDidmaE = await PACTMjJi3co.transferFrom.call(addressVnDCYIZ, addressuWm93bj, uintb0Yer2D, {from: accounts[1]});

		await expect(PACTMjJi3co.transferFrom.call(addressVnDCYIZ, addressuWm93bj, uintb0Yer2D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTffTTWhF = await PACT.new({from: accounts[3]});
		const addressMAcBomw = accounts[1]
		const addressx6QmKKT = accounts[1]
		const stringGNtZlpc = await PACTffTTWhF.name.call({from: accounts[3]});
		const uint8nQR1fiL = await PACTffTTWhF.decimals.call({from: accounts[5]});
		const boolfgM6gX = await PACTffTTWhF.setupRewards.call(addressMAcBomw, {from: accounts[5]});
		const boolZYYVcXm = await PACTffTTWhF.setupFarming.call(addressx6QmKKT, {from: accounts[0]});

		assert.equal(stringGNtZlpc, "P2PB2B community token")
		assert.equal(uint8nQR1fiL, BigInt("18"))
		await expect(PACTffTTWhF.setupRewards.call(addressMAcBomw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTK8IPoaJ = await PACT.new({from: accounts[2]});
		const uintcc4d88 = BigInt("1559")
		const addressxxYSaWM = accounts[0]
		const uint8sx3Hxcj = await PACTK8IPoaJ.decimals.call({from: accounts[4]});
		const stringAIzjwzA = await PACTK8IPoaJ.name.call({from: accounts[4]});
		const boolgBklT5L = await PACTK8IPoaJ.approve.call(addressxxYSaWM, uintcc4d88, {from: accounts[3]});

		assert.equal(boolgBklT5L, true)
		assert.equal(stringAIzjwzA, "P2PB2B community token")
		assert.equal(uint8sx3Hxcj, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTMjJi3co = await PACT.new({from: accounts[1]});
		const addresstRFoEi2 = accounts[4]
		const uintJuiN7Yn = BigInt("1298")
		const addresswNrtrrd = accounts[3]
		const addresssNwd8C6 = accounts[3]
		const boolRdEgXTh = await PACTMjJi3co.setupFarming.call(addresstRFoEi2, {from: accounts[4]});
		const boollDidmaE = await PACTMjJi3co.transferFrom.call(addresssNwd8C6, addresswNrtrrd, uintJuiN7Yn, {from: accounts[1]});

		await expect(PACTMjJi3co.setupFarming.call(addresstRFoEi2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})