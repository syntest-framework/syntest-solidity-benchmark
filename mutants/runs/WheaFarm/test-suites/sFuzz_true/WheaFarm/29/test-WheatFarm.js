const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringvq33XlN = "MuEb1C18D162SqTA5ZGO2c8fkeGULfRsHeJhpDmECTqw"
		const stringZy9arRE = "Scr6aMDxvBeIuqkCCYaQzQoNe89eQeJCwa5e3yh"
		const uintVSWEmmo = BigInt("74")
		const WheatFarmKqCcHXf = await WheatFarm.new(stringvq33XlN, stringZy9arRE, uintVSWEmmo, {from: accounts[2]});
		const uint8PbhFvJz = await WheatFarmKqCcHXf.decimals.call({from: accounts[4]});
		const uint8504IsM = await WheatFarmKqCcHXf.decimals.call({from: accounts[3]});

		assert.equal(uint8504IsM, BigInt("18"))
		assert.equal(uint8PbhFvJz, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const stringY07xreR = "EAIgKyQ9dOrfjSSJgpBWDxm7gN3FkPV1CfAM4GA8MwvHOZbLgGFM9YNS9Xk31V85mSuMO4zCkTMoVsj1Ev7dlMIoCsD9BEALK3"
		const stringe67TwE = "HtC7PbTI46ONq"
		const uinta2ji7pr = BigInt("229")
		const WheatFarmkhEwk1 = await WheatFarm.new(stringY07xreR, stringe67TwE, uinta2ji7pr, {from: accounts[1]});
		const uintN1B3hoJ = BigInt("1572")
		const addressXHidhBn = accounts[1]
		const addressDLrqSMP = accounts[1]
		const uintUwZpiq5 = BigInt("1698")
		const addressPF4iPbC = accounts[0]
		const addresseexjK6Z = accounts[2]
		const uintb7HTv2 = BigInt("471")
		const addressRvkIq7S = accounts[1]
		const uint8Mc1qKhn = await WheatFarmkhEwk1.decimals.call({from: accounts[0]});
		const booljYDWb8L = await WheatFarmkhEwk1.transferFrom.call(addressDLrqSMP, addressXHidhBn, uintN1B3hoJ, {from: accounts[1]});
		const boolI9dNWiK = await WheatFarmkhEwk1.transferFrom.call(addresseexjK6Z, addressPF4iPbC, uintUwZpiq5, {from: accounts[2]});
		const boolzU3bHa = await WheatFarmkhEwk1.approveAndCall.call(addressRvkIq7S, uintb7HTv2, {from: accounts[4]});

		assert.equal(booljYDWb8L, true)
		assert.equal(uint8Mc1qKhn, BigInt("18"))
		await expect(WheatFarmkhEwk1.transferFrom.call(addresseexjK6Z, addressPF4iPbC, uintUwZpiq5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringlhOjU4t = "nVsi2KTgnnDWiFpm6DzxsUffMA5OuSXs"
		const stringtGPKNY5 = "xkMBv"
		const uintTa51WfG = BigInt("229")
		const WheatFarmU9LHj6b = await WheatFarm.new(stringlhOjU4t, stringtGPKNY5, uintTa51WfG, {from: accounts[0]});
		const uintdmHcFnx = BigInt("1909")
		const addressWqUv1t = accounts[1]
		const uintssneZ9 = BigInt("386")
		const address59Mv3j = accounts[2]
		const addressSt94hO = accounts[0]
		const boolioU2RmT = await WheatFarmU9LHj6b.approve.call(addressWqUv1t, uintdmHcFnx, {from: accounts[5]});
		const boolhe5THOf = await WheatFarmU9LHj6b.increaseAllowance.call(address59Mv3j, uintssneZ9, {from: accounts[0]});
		const boolbrFuhNk = await WheatFarmU9LHj6b.transferownership.call(addressSt94hO, {from: accounts[2]});

		assert.equal(boolioU2RmT, true)
		await expect(WheatFarmU9LHj6b.increaseAllowance.call(address59Mv3j, uintssneZ9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringW6XUObm = "7pVdWAqLb9ZlK1KJCRKunSKn1LD7hc9gnPoTpeI2xOZjkXhauN1qihcwdD382pqFGS2QBC5JemCNX9LQOcz2pk9e"
		const stringusBP5Ka = "4ke83jEDMmQO91mEUBGa0fCFtVqTxtTPn0F8rSTM9iudhvuFUDxZ5B6nEEvRYAJ0Ccrp6s68REmTCnxkNRLvzdgAojal"
		const uintzQRW1lS = BigInt("187")
		const WheatFarmYt58ZNm = await WheatFarm.new(stringW6XUObm, stringusBP5Ka, uintzQRW1lS, {from: accounts[3]});
		const uintgsRB2OC = BigInt("766")
		const addressGVhGO3w = accounts[3]
		const uintbKMkwe = BigInt("2029")
		const addressGIwdPd = accounts[4]
		const addressjeru8GW = accounts[0]
		const addressx7rhqv = accounts[3]
		const uintHrSgHkv = await WheatFarmYt58ZNm.totalSupply.call({from: accounts[0]});
		const boolb48pwvM = await WheatFarmYt58ZNm.approve.call(addressGVhGO3w, uintgsRB2OC, {from: accounts[3]});
		const stringz5oK1ZE = await WheatFarmYt58ZNm.symbol.call({from: accounts[1]});
		const booltBDeehQ = await WheatFarmYt58ZNm.transfer.call(addressGIwdPd, uintbKMkwe, {from: accounts[3]});
		const uintFPEHS45 = await WheatFarmYt58ZNm.allowance.call(addressx7rhqv, addressjeru8GW, {from: accounts[2]});

		assert.equal(boolb48pwvM, true)
		assert.equal(booltBDeehQ, true)
		assert.equal(stringz5oK1ZE, "4ke83jEDMmQO91mEUBGa0fCFtVqTxtTPn0F8rSTM9iudhvuFUDxZ5B6nEEvRYAJ0Ccrp6s68REmTCnxkNRLvzdgAojal")
		assert.equal(uintFPEHS45, BigInt("0"))
		assert.equal(uintHrSgHkv, BigInt("187000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringQix7Ax = "Ww1pJRndEHVPVcW6rouy9tHLAbgeH5QcNoxrCyIexQgUq5NbrtgrGoCI328gQLU3P5YC1lIBXkoRv3Fz"
		const stringnecdTX = "UF6jLd5QbAmtURL5KjWPwNJwKBjvR"
		const uintVf2X1gx = BigInt("112")
		const WheatFarmMut7JxJ = await WheatFarm.new(stringQix7Ax, stringnecdTX, uintVf2X1gx, {from: accounts[4]});
		const uintLfteHxg = BigInt("1942")
		const addressl7QnOt = accounts[1]
		const addressqGak6Kd = accounts[1]
		const uintb4k05D6 = BigInt("1258")
		const addressuIMySbD = accounts[3]
		const stringmiMcKmF = await WheatFarmMut7JxJ.name.call({from: accounts[2]});
		const boolzQGzDy = await WheatFarmMut7JxJ.transferFrom.call(addressqGak6Kd, addressl7QnOt, uintLfteHxg, {from: accounts[0]});
		const bool02vYfy = await WheatFarmMut7JxJ.approveAndCall.call(addressuIMySbD, uintb4k05D6, {from: accounts[3]});

		assert.equal(stringmiMcKmF, "Ww1pJRndEHVPVcW6rouy9tHLAbgeH5QcNoxrCyIexQgUq5NbrtgrGoCI328gQLU3P5YC1lIBXkoRv3Fz")
		await expect(WheatFarmMut7JxJ.transferFrom.call(addressqGak6Kd, addressl7QnOt, uintLfteHxg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringetrVc4q = "K"
		const stringsbXTKJk = "umoAUDQUxRm1teQGcoiZveLgsvoLrXLJzEnwymve7mHMbOlvMoVuxo"
		const uinthD7EkRX = BigInt("88")
		const WheatFarmnJm3TWQ = await WheatFarm.new(stringetrVc4q, stringsbXTKJk, uinthD7EkRX, {from: "0x0000000000000000000000000000000000000001"});
		const uinti5bsZbz = BigInt("402")
		const addressjzENvVR = accounts[4]
		const uintGQvgR5 = BigInt("1662")
		const addressY6TfdQ = accounts[3]
		const addressL1WXrdx = "0x0000000000000000000000000000000000000001"
		const addresscc6KcM = accounts[3]
		const boolAKoqYfU = await WheatFarmnJm3TWQ.approveAndCall.call(addressjzENvVR, uinti5bsZbz, {from: accounts[2]});
		const boolcFUGOFc = await WheatFarmnJm3TWQ.transfer.call(addressY6TfdQ, uintGQvgR5, {from: accounts[4]});
		const uintNmXZK20 = await WheatFarmnJm3TWQ.allowance.call(addresscc6KcM, addressL1WXrdx, {from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringvq33XlN = "MuEb1C18D162SqTA5ZGO2c8fkeGULfRsHeJhpDmECTqw"
		const stringZy9arRE = "Scr6aMDxvBeIuqkCCYaQzQoNe89eQeJCwa5e3yh"
		const uintRjGsRIc = BigInt("74")
		const WheatFarmKqCcHXf = await WheatFarm.new(stringvq33XlN, stringZy9arRE, uintRjGsRIc, {from: accounts[2]});
		const addressycublou = "0x0000000000000000000000000000000000000001"
		const addressaryeTUD = accounts[0]
		const uintkRHfKGt = BigInt("519")
		const addressc2euHfl = accounts[4]
		const boolnijvPPB = await WheatFarmKqCcHXf.transferownership.call(addressycublou, {from: accounts[5]});
		const uint8PbhFvJz = await WheatFarmKqCcHXf.decimals.call({from: accounts[4]});
		const boolOAbZLVE = await WheatFarmKqCcHXf.transferownership.call(addressaryeTUD, {from: accounts[1]});
		const boolQw6ddxG = await WheatFarmKqCcHXf.approveAndCall.call(addressc2euHfl, uintkRHfKGt, {from: accounts[2]});

		await expect(WheatFarmKqCcHXf.transferownership.call(addressycublou, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringY07xreR = "EAIgKyQ9dOrfjSSJgpBWDxm7gN3FkPV1CfAM4GA8MwvHOZbLgGFM9YNS9Xk31V85mSuMO4zCkTMoVsj1Ev7dlMIoCsD9BEALK3"
		const stringe67TwE = "HtC7PbTI46ONq"
		const uintTaQEZWr = BigInt("229")
		const WheatFarmkhEwk1 = await WheatFarm.new(stringY07xreR, stringe67TwE, uintTaQEZWr, {from: accounts[1]});
		const uintntiJvj = BigInt("1572")
		const addressrrNw7X = accounts[1]
		const addresszeLZrkS = accounts[1]
		const uintFkzvwCl = BigInt("1837")
		const address3vEEyw = accounts[3]
		const uintJwoW6r4 = BigInt("1700")
		const addressWOladc7 = accounts[0]
		const addressccGdDog = accounts[2]
		const uint8Mc1qKhn = await WheatFarmkhEwk1.decimals.call({from: accounts[0]});
		const uint8cCPRxzz = await WheatFarmkhEwk1.decimals.call({from: accounts[3]});
		const booljYDWb8L = await WheatFarmkhEwk1.transferFrom.call(addresszeLZrkS, addressrrNw7X, uintntiJvj, {from: accounts[1]});
		const boolGc37oD = await WheatFarmkhEwk1.approveAndCall.call(address3vEEyw, uintFkzvwCl, {from: accounts[2]});
		const boolI9dNWiK = await WheatFarmkhEwk1.transferFrom.call(addressccGdDog, addressWOladc7, uintJwoW6r4, {from: accounts[2]});

		assert.equal(booljYDWb8L, true)
		assert.equal(uint8Mc1qKhn, BigInt("18"))
		assert.equal(uint8cCPRxzz, BigInt("18"))
		await expect(WheatFarmkhEwk1.approveAndCall.call(address3vEEyw, uintFkzvwCl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvq33XlN = "MuEb1C18D162SqTA5ZGO2c8fkeGULfRsHeJhpDmECTqw"
		const stringZy9arRE = "Scr6aMDxvBeIuqkCCYaQzQoNe89eQeJCwa5e3yh"
		const uinttpcQAmC = BigInt("74")
		const WheatFarmKqCcHXf = await WheatFarm.new(stringvq33XlN, stringZy9arRE, uinttpcQAmC, {from: accounts[2]});
		const uintZRWs7fD = BigInt("519")
		const addressWZY7O0c = accounts[4]
		const boolQw6ddxG = await WheatFarmKqCcHXf.approveAndCall.call(addressWZY7O0c, uintZRWs7fD, {from: accounts[2]});
		const stringUPNas2 = await WheatFarmKqCcHXf.symbol.call({from: accounts[0]});

		assert.equal(boolQw6ddxG, true)
		assert.equal(stringUPNas2, "Scr6aMDxvBeIuqkCCYaQzQoNe89eQeJCwa5e3yh")
	});

	it('test for WheatFarm', async () => {
		const stringY07xreR = "EAIgKyQ9dOrfjSSJgpBWDxm7gN3FkPV1CfAM4GA8MwvHOZbLgGFM9YNS9Xk31V85mSuMO4zCkTMoVsj1Ev7dlMIoCsD9BEALK3"
		const stringe67TwE = "HtC7PbTI46ONq"
		const uintuedzwMw = BigInt("229")
		const WheatFarmkhEwk1 = await WheatFarm.new(stringY07xreR, stringe67TwE, uintuedzwMw, {from: accounts[1]});
		const uintAI2tZ9I = BigInt("28")
		const addressB8KK7ON = "0x0000000000000000000000000000000000000001"
		const uintax3Hfv0 = BigInt("0")
		const addressJz5iVf = accounts[0]
		const addressuDXTA3d = accounts[2]
		const uintSuylG72 = BigInt("717")
		const addresscGR6LBE = accounts[1]
		const booleCT1dOD = await WheatFarmkhEwk1.approve.call(addressB8KK7ON, uintAI2tZ9I, {from: accounts[2]});
		const boolI9dNWiK = await WheatFarmkhEwk1.transferFrom.call(addressuDXTA3d, addressJz5iVf, uintax3Hfv0, {from: accounts[2]});
		const boolB7Cchd8 = await WheatFarmkhEwk1.approve.call(addresscGR6LBE, uintSuylG72, {from: accounts[2]});

		assert.equal(boolB7Cchd8, true)
		assert.equal(boolI9dNWiK, true)
		assert.equal(booleCT1dOD, true)
	});

	it('test for WheatFarm', async () => {
		const stringvq33XlN = "MuEb1C18D162SqTA5ZGO2c8fkeGULfRsHeJhpDmECTqw"
		const stringZy9arRE = "Scr6aMDxvBeIuqkCCYaQzQoNe89eQeJCwa5e3yh"
		const uintEsxyddj = BigInt("74")
		const WheatFarmKqCcHXf = await WheatFarm.new(stringvq33XlN, stringZy9arRE, uintEsxyddj, {from: accounts[2]});
		const addresssVas1At = accounts[2]
		const addressGAA9La6 = "0x0000000000000000000000000000000000000002"
		const booltHibnHx = await WheatFarmKqCcHXf.transferownership.call(addresssVas1At, {from: accounts[2]});
		const boolnijvPPB = await WheatFarmKqCcHXf.transferownership.call(addressGAA9La6, {from: accounts[5]});

		assert.equal(booltHibnHx, true)
		await expect(WheatFarmKqCcHXf.transferownership.call(addressGAA9La6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})