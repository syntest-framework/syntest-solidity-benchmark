const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressuiJTQH2 = accounts[2]
		const addresseH0sUEB = accounts[4]
		const addressWGoleB0 = accounts[1]
		const GardenContractV2pfUPiCa = await GardenContractV2.new(addressuiJTQH2, addresseH0sUEB, addressWGoleB0, {from: accounts[1]});
		const uintsDvURim = BigInt("205")
		const stringIEkkvAg = "OmJBVs1yKpxf800r9U1hpTPPbOrTr7pA5fa7jGhw7oTsqB4Ksfi"
		const uintYtikYu7 = BigInt("3")
		const uintO2J6bD = BigInt("21")
		const stringVJyjla7 = "CmOxkY7XYyupS6zDNgTTk19HuTOnijH8k2qxMSsi9VyrhRWc1COcH0"
		const stringm4058Cy = await GardenContractV2pfUPiCa.claimDecompose.call(stringIEkkvAg, uintsDvURim, {from: accounts[3]});
		const uint256AEZcVID = await GardenContractV2pfUPiCa.getTotalsTLPHarvest.call(uintYtikYu7, {from: accounts[0]});
		const stringap8GOo4 = await GardenContractV2pfUPiCa.withdraw.call(stringVJyjla7, uintO2J6bD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2pfUPiCa.claimDecompose.call(stringIEkkvAg, uintsDvURim, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressarrjgyT = accounts[0]
		const addresszsALCt9 = "0x0000000000000000000000000000000000000001"
		const addressnt72od7 = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addressarrjgyT, addresszsALCt9, addressnt72od7, {from: accounts[0]});
		const addressfBV0WDk = accounts[0]
		const uintRE0Dhpr = BigInt("35")
		const uintV1ZBaHm = BigInt("43")
		const stringymaGqrv = "OjWs"
		const addressQWBEkI = await GardenContractV2q1APxkn.changeBenefitiary.call(addressfBV0WDk, {from: accounts[0]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintRE0Dhpr, {from: accounts[2]});
		const stringjAimRfD = await GardenContractV2q1APxkn.claimDecompose.call(stringymaGqrv, uintV1ZBaHm, {from: accounts[0]});

		await expect(GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintRE0Dhpr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressftK6x76 = accounts[3]
		const addressFEfHSN = accounts[5]
		const addresst3mvyGy = accounts[0]
		const GardenContractV2KCQY9ml = await GardenContractV2.new(addressftK6x76, addressFEfHSN, addresst3mvyGy, {from: accounts[4]});
		const boolwh3Lkrx = false
		const uintgluOb1T = BigInt("224")
		const stringtoOhems = "mVAsMHPpMe3ji7iq5NyJCYlaasnkcuVlGrt1skdmIPLthadAh5HM43ezWdW5ZuJNqBcVTIkbP9fenB7sh"
		const uintCdGIa1 = BigInt("1233")
		const stringQkwugJi = "LkOSun13ubXGwW3a61PzQvyA3DmDMoqhLGqqg8k4prhi8bSG0dAYNfwexakjE96K6KsdqexVg03n4r1gujA3hrWwkQwRSAG"
		const stringAi2tTUy = "q7pqePoW0cTyFM02A1OtkoQfJAyuM4az32cPU0axk7kkWDXsnHHQaestY"
		const addressAE7EFGy = accounts[0]
		const uint256MtPJDCl = await GardenContractV2KCQY9ml.plant.call(uintCdGIa1, stringtoOhems, uintgluOb1T, boolwh3Lkrx, {from: accounts[3]});
		const uint256WK74p7 = await GardenContractV2KCQY9ml.totalTLPBurnt.call(stringQkwugJi, {from: accounts[0]});
		const uint256O4DRQlW = await GardenContractV2KCQY9ml.balanceOf.call(addressAE7EFGy, stringAi2tTUy, {from: accounts[3]});

		await expect(GardenContractV2KCQY9ml.plant.call(uintCdGIa1, stringtoOhems, uintgluOb1T, boolwh3Lkrx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgSg84o3 = accounts[4]
		const addresstnAFeex = "0x0000000000000000000000000000000000000001"
		const addressjL8UBr = accounts[1]
		const GardenContractV2wz0bjWN = await GardenContractV2.new(addressgSg84o3, addresstnAFeex, addressjL8UBr, {from: accounts[0]});
		const addresswu1GkrS = accounts[3]
		const addressG2lpQpg = accounts[3]
		const uintD5VoRuU = BigInt("164")
		const stringL8bJKPS = "tA3ZS1c0ui5yB"
		const stringU86xSdf = "X35LpgQ8hzfnaszdsYvcpEh2C0nruKFpBrGCCpQhbAUskjK6KYVX4JBkHUBqRxzzYl"
		const addressHjlIKhL = accounts[1]
		const addressuIVl8O = await GardenContractV2wz0bjWN.addTokenOwner.call(addressG2lpQpg, addresswu1GkrS, {from: accounts[1]});
		await GardenContractV2wz0bjWN.totalBedSupply.call(stringL8bJKPS, uintD5VoRuU, {from: accounts[1]});
		const uint256cNjsCnK = await GardenContractV2wz0bjWN.balanceOf.call(addressHjlIKhL, stringU86xSdf, {from: accounts[4]});

		await expect(GardenContractV2wz0bjWN.addTokenOwner.call(addressG2lpQpg, addresswu1GkrS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressibQdXek = accounts[1]
		const addressLuFGCEW = accounts[4]
		const addressl4AvttN = accounts[0]
		const GardenContractV2Kbwhuo = await GardenContractV2.new(addressibQdXek, addressLuFGCEW, addressl4AvttN, {from: accounts[3]});
		const stringnQs2s5o = "3EkkU3dDRsVfoKJTEjsU0W7Bn276HABJTfhrKE2WEEscf2Qot"
		const stringJ9xbe4 = "fl9pnIxyfL2IiJadY95zX29VkfR2A2Ur9pjYLH6KeGaay1y3nUm2hpYaIf64RM4634h"
		const addressQu59Q60 = accounts[0]
		const stringQ13UMr = "LLO9CqgsFpJ8C5Wof7QiKJMIaAs6"
		const uint256msAkMdc = await GardenContractV2Kbwhuo.totalTLPGrown.call(stringnQs2s5o, {from: accounts[3]});
		const uint256EhvdtT5 = await GardenContractV2Kbwhuo.balanceOf.call(addressQu59Q60, stringJ9xbe4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256P1uGjeV = await GardenContractV2Kbwhuo.totalTLPGrown.call(stringQ13UMr, {from: accounts[0]});

		await expect(GardenContractV2Kbwhuo.totalTLPGrown.call(stringnQs2s5o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHV705Sy = accounts[0]
		const addressrocARRg = accounts[1]
		const addresslOjUOg5 = accounts[1]
		const GardenContractV2aTaVhGU = await GardenContractV2.new(addressHV705Sy, addressrocARRg, addresslOjUOg5, {from: accounts[2]});
		const uintixMcMdR = BigInt("115")
		const stringgMyBWD = "7lncqEmWttENtMqLtKL8ZmUYdWD535GvdGxnMJa3UZrDyEJcVlCB897PqUGYwY3kTFCSBIxM3y2KS4EPvlMpD3xbVvvm"
		const uintj9pgrt0 = BigInt("214")
		const stringACF8lbg = "TSqp46eoaA9uVdgxNqDbZJaIwdhrhTlVOo69z7oHqwz"
		const stringbRwYoWN = "FXeT9urEAM"
		const stringftH2qss = "Bd"
		await GardenContractV2aTaVhGU.totalBedSupply.call(stringgMyBWD, uintixMcMdR, {from: accounts[1]});
		const stringDoqFxV = await GardenContractV2aTaVhGU.withdraw.call(stringACF8lbg, uintj9pgrt0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KpTkIZ7 = await GardenContractV2aTaVhGU.totalTLPBurnt.call(stringbRwYoWN, {from: accounts[2]});
		const uint256UZdAgFK = await GardenContractV2aTaVhGU.totalTLPGrown.call(stringftH2qss, {from: accounts[4]});

		await expect(GardenContractV2aTaVhGU.totalBedSupply.call(stringgMyBWD, uintixMcMdR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskI5dly = accounts[3]
		const addressPZ7tp8V = accounts[0]
		const addressWrxFONI = accounts[2]
		const GardenContractV2MCe2ryp = await GardenContractV2.new(addresskI5dly, addressPZ7tp8V, addressWrxFONI, {from: accounts[3]});
		const uintWzwymSA = BigInt("1001")
		const uintSljOXpi = BigInt("34")
		const stringBPpmFHj = "kqbeI7QS2J9fyqRXbFLWkKWG1yXyHMWxcADzWejkgoTXeyBxKsu3rOqoQxF1vP3zP6fpI2NnYcyOQBmwaWMwlZeNTRAH"
		const stringrBvlcdV = "qChKlgf7MguaPBNP3mTtWTrBiFOOEpUR8WE6qzB2WAAQuG6LfnjhuXWCBBdNqBM"
		const uintLhSYu0v = BigInt("1439")
		const uintz7dkVCY = BigInt("55")
		const uintbHqTML8 = BigInt("211")
		const uintL21RBwD = BigInt("12")
		const string9IZ3hF = "DyGlObdAvY5XYwGTIXhsDUYndoniPkAharhiF0YankOzt8DdrVOhj"
		const stringIkldTcj = await GardenContractV2MCe2ryp.decompose.call(stringBPpmFHj, uintSljOXpi, uintWzwymSA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VhYr2rN = await GardenContractV2MCe2ryp.totalGardenSupply.call(stringrBvlcdV, {from: accounts[3]});
		const uint8DqkFGjS = await GardenContractV2MCe2ryp.operationBurnMint.call(uintbHqTML8, uintz7dkVCY, uintLhSYu0v, {from: accounts[4]});
		await GardenContractV2MCe2ryp.totalBedSupply.call(string9IZ3hF, uintL21RBwD, {from: accounts[2]});

		await expect(GardenContractV2MCe2ryp.decompose.call(stringBPpmFHj, uintSljOXpi, uintWzwymSA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgGY71Vj = accounts[3]
		const addressntBDHcD = accounts[2]
		const addressGYFQWEV = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(addressgGY71Vj, addressntBDHcD, addressGYFQWEV, {from: accounts[1]});
		const stringH8J3y4w = "g8eT"
		const stringKeB0YMe = "2pTnH"
		const uintT0PeyhX = BigInt("287")
		const uinthrflr99 = BigInt("21")
		const stringvdxUv9x = "U4IXPGhQ2DZzrDaCG1Wup6WToCtl4u0Tgv9MPfzJjAMLHxwytmU72OorNVth37DCPpOcWgWNRlUh7vY"
		const uint256xklECwU = await GardenContractV2SbJSbTV.totalTLPDecomposed.call(stringH8J3y4w, {from: accounts[0]});
		const uint256xyNDUqN = await GardenContractV2SbJSbTV.totalGardenSupply.call(stringKeB0YMe, {from: "0x0000000000000000000000000000000000000001"});
		const stringTxLHecc = await GardenContractV2SbJSbTV.decompose.call(stringvdxUv9x, uinthrflr99, uintT0PeyhX, {from: accounts[2]});

		await expect(GardenContractV2SbJSbTV.totalTLPDecomposed.call(stringH8J3y4w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address1PUY05 = accounts[3]
		const addressWtsoIPu = accounts[2]
		const addressWDOt8t = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(address1PUY05, addressWtsoIPu, addressWDOt8t, {from: accounts[1]});
		const uintIqBfjFG = BigInt("140")
		const stringGCGmyTR = "C9Cv32I3yCHbSI"
		const uint256dn8cpSS = await GardenContractV2SbJSbTV.timeUntilNextTLP.call(stringGCGmyTR, uintIqBfjFG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2SbJSbTV.timeUntilNextTLP.call(stringGCGmyTR, uintIqBfjFG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssbldIwq = accounts[0]
		const addressU40MH2 = "0x0000000000000000000000000000000000000001"
		const addressbb3p3zj = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addresssbldIwq, addressU40MH2, addressbb3p3zj, {from: accounts[0]});
		const uintvS1WVP4 = BigInt("4")
		const stringDmSRWzZ = "4YcFKm22AwAKUurMsiftu6pQTk9uF9wqf3ZjFzvyEc8HyGeAUnP6laN7tJP8MAY4Fdwg"
		const uintnW7fP7j = BigInt("250")
		const stringLy7VCa9 = "4qTcQ1KUVhjb3kTm4AzQ3oIbJHaAFmC13GPYzZjPx6oAQwfsu9fJMc9QwsSOkNSLcKSzEb4bTOMkvp"
		const uintT9Q5IRI = BigInt("103")
		const stringfOYwnSr = "jzMFay3Nw1UyeZ7Uen6LqzUjQAQ4g6fYzkhe1ycmoBDPbmo2UAX5sXs7oixe4vES1CuzphNAGReBfTyGTIW3nak"
		const uintqp7Uduu = BigInt("43")
		const stringymaGqrv = "OjWs"
		const addressAyHrcD = accounts[3]
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintvS1WVP4, {from: accounts[2]});
		const uint256OEOSO3a = await GardenContractV2q1APxkn.totalTLPBurnt.call(stringDmSRWzZ, {from: accounts[5]});
		await GardenContractV2q1APxkn.totalBedSupply.call(stringLy7VCa9, uintnW7fP7j, {from: accounts[0]});
		await GardenContractV2q1APxkn.totalBedSupply.call(stringfOYwnSr, uintT9Q5IRI, {from: "0x0000000000000000000000000000000000000001"});
		const stringjAimRfD = await GardenContractV2q1APxkn.claimDecompose.call(stringymaGqrv, uintqp7Uduu, {from: accounts[0]});
		const addressnx3gJu = await GardenContractV2q1APxkn.renounceTokenOwner.call(addressAyHrcD, {from: accounts[3]});

		await expect(GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintvS1WVP4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZPTtRwv = accounts[3]
		const addresstOK9HDo = accounts[2]
		const addressBHeH9cb = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(addressZPTtRwv, addresstOK9HDo, addressBHeH9cb, {from: accounts[1]});
		const stringzKc1CnY = "xweX6prdu7wTaamyiM2xda8dAdt7IdqLbj0KobcM1zEPj1u7T5wdWsAOctQgPQ9jRQzqStBKHJSxu2et"
		const uinth8jKIRq = BigInt("140")
		const stringGCGmyTR = "C9Cv32I3yCHbSI"
		const uint256V4rqKRL = await GardenContractV2SbJSbTV.totalGardenSupply.call(stringzKc1CnY, {from: accounts[3]});
		const uint256dn8cpSS = await GardenContractV2SbJSbTV.timeUntilNextTLP.call(stringGCGmyTR, uinth8jKIRq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2SbJSbTV.totalGardenSupply.call(stringzKc1CnY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPwG4IOV = accounts[3]
		const addressBb9p2uE = accounts[2]
		const address6FoJk5 = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(addressPwG4IOV, addressBb9p2uE, address6FoJk5, {from: accounts[1]});
		const stringldBnivT = "wTM8Cm2mVDfhX45R0usvO5MxFi0WxVzS8a3ClupRIoFrestEa3bYnFIp8M9mI73LMnk3Mmh"
		const uintvfktvBm = BigInt("139")
		const stringGCGmyTR = "C9Cv32I3yCHbSI"
		const stringIfK7hAP = await GardenContractV2SbJSbTV.harvestAllBeds.call(stringldBnivT, {from: accounts[0]});
		const uint256dn8cpSS = await GardenContractV2SbJSbTV.timeUntilNextTLP.call(stringGCGmyTR, uintvfktvBm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2SbJSbTV.harvestAllBeds.call(stringldBnivT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressH8Qc9LS = accounts[3]
		const addressHs5JJ0y = accounts[2]
		const addressBhaVCMF = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(addressH8Qc9LS, addressHs5JJ0y, addressBhaVCMF, {from: accounts[1]});
		const stringHmUXR3 = "FWXYHb7HDNtq7pke83dFW7ws7avDXEClLAQajFn6DasbkYq31SXlET94"
		const addressGT6djNz = accounts[3]
		const uintL84Zpv = BigInt("140")
		const stringGCGmyTR = "C9Cv32I3yCHbSI"
		const uintt59ZZDA = BigInt("187")
		const uint256ECkDXsN = await GardenContractV2SbJSbTV.balanceOf.call(addressGT6djNz, stringHmUXR3, {from: accounts[4]});
		const uint256dn8cpSS = await GardenContractV2SbJSbTV.timeUntilNextTLP.call(stringGCGmyTR, uintL84Zpv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NBfLTYe = await GardenContractV2SbJSbTV.getTotalrTLPHarvest.call(uintt59ZZDA, {from: accounts[0]});

		await expect(GardenContractV2SbJSbTV.balanceOf.call(addressGT6djNz, stringHmUXR3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHuJK7Zw = accounts[3]
		const addressKJPri9o = accounts[2]
		const addressdbjvI2z = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(addressHuJK7Zw, addressKJPri9o, addressdbjvI2z, {from: accounts[1]});
		const uintXIX3KHz = BigInt("34")
		const uinthdJYpOj = BigInt("38")
		const uintXj18lsN = BigInt("140")
		const stringGCGmyTR = "C9Cv3I3yCHbSI"
		const uint8GdRqbcb = await GardenContractV2SbJSbTV.setTimeStamp.call(uinthdJYpOj, uintXIX3KHz, {from: accounts[3]});
		const uint256dn8cpSS = await GardenContractV2SbJSbTV.timeUntilNextTLP.call(stringGCGmyTR, uintXj18lsN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2SbJSbTV.setTimeStamp.call(uinthdJYpOj, uintXIX3KHz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressI5xexRa = accounts[0]
		const addressyowKaA7 = "0x0000000000000000000000000000000000000001"
		const addressBr1dYY = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addressI5xexRa, addressyowKaA7, addressBr1dYY, {from: accounts[0]});
		const stringqpt9nKP = "eU4Aue"
		const stringPzwd3mX = "V6nPqqL4B0yUdZusHEpTGo654RCqzU5HdkQ34pIfh9mWP1QkvM1Oxbyvauevk2UaZ5mXZZD7gXEUHzztoCVixXhSQrfNxGlO"
		const stringHx47Es0 = "jxOiJsZI8368Ug7K6Lq0uU7lGJldOuk2I9DDGgx2RoVF"
		const uintF3VY6Ub = BigInt("245")
		const uint256TwHzHIP = await GardenContractV2q1APxkn.totalTLPGrowing.call(stringqpt9nKP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wVDnjjD = await GardenContractV2q1APxkn.totalTLPGrowing.call(stringPzwd3mX, {from: "0x0000000000000000000000000000000000000001"});
		const stringilihFSX = await GardenContractV2q1APxkn.harvestAllBeds.call(stringHx47Es0, {from: accounts[3]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintF3VY6Ub, {from: accounts[2]});

		await expect(GardenContractV2q1APxkn.totalTLPGrowing.call(stringqpt9nKP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGkqcBG3 = accounts[4]
		const addressIamEYY = accounts[1]
		const addressy3d3SNt = accounts[3]
		const GardenContractV2wkHTyhY = await GardenContractV2.new(addressGkqcBG3, addressIamEYY, addressy3d3SNt, {from: accounts[4]});
		const uintv0UOtg3 = BigInt("141")
		const stringXv0zeGc = "iyql"
		const uintN4UrDxp = BigInt("26")
		const uintOA9gbzp = BigInt("140")
		const addressTOzFUy = accounts[1]
		const addressE8zpzaQ = accounts[4]
		const uintKJDHVSY = BigInt("270")
		const uinthpadYlt = BigInt("89")
		const stringeqSOngD = "BnK6dYrLE7oC9JoRb7WQvPAIkP9zUeQaZUMHfayCEEHxSpXOrh77AdtU7VTo"
		const uintCZfmsbN = BigInt("58")
		const stringGl3C9uN = await GardenContractV2wkHTyhY.withdraw.call(stringXv0zeGc, uintv0UOtg3, {from: accounts[0]});
		const uint8mw1wqrr = await GardenContractV2wkHTyhY.setTimeStamp.call(uintOA9gbzp, uintN4UrDxp, {from: accounts[1]});
		const addressfcvbamP = await GardenContractV2wkHTyhY.changeBenefitiary.call(addressTOzFUy, {from: accounts[4]});
		const addressyY1sRw = await GardenContractV2wkHTyhY.changeOwner.call(addressE8zpzaQ, {from: accounts[2]});
		const stringktqg9uB = await GardenContractV2wkHTyhY.decompose.call(stringeqSOngD, uinthpadYlt, uintKJDHVSY, {from: accounts[2]});
		const uint256pIlJ3dU = await GardenContractV2wkHTyhY.getTotalsTLPHarvest.call(uintCZfmsbN, {from: accounts[4]});

		await expect(GardenContractV2wkHTyhY.withdraw.call(stringXv0zeGc, uintv0UOtg3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPFwg789 = accounts[3]
		const addressfVakkab = accounts[2]
		const addresscmCqnF8 = accounts[0]
		const GardenContractV2SbJSbTV = await GardenContractV2.new(addressPFwg789, addressfVakkab, addresscmCqnF8, {from: accounts[1]});
		const uintPqNrpId = BigInt("13")
		const stringCN0CuBU = "M1qIeTKlvpLPrxmr6nfQxKMLqNqQ2zk4obO251cIwXR2i2vWgcQfO9vjsny4K8dtfauBXT7qcx"
		const addresszgPEkWW = accounts[4]
		const stringHmUXR3 = "FWXYHb7HDNtq7pke83dFW7ws7avDXEClLAQajFn6DasbkYq31SXlET94"
		const address3n3htm = accounts[3]
		const uintkiaN8x0 = BigInt("13")
		const stringgA0nVYP = "2bmxfoMTCImpdGaRDzNT"
		const uintXvq9Xfx = BigInt("187")
		const uint256vTzGwe7 = await GardenContractV2SbJSbTV.growthRemaining.call(addresszgPEkWW, stringCN0CuBU, uintPqNrpId, {from: accounts[0]});
		const uint256ECkDXsN = await GardenContractV2SbJSbTV.balanceOf.call(address3n3htm, stringHmUXR3, {from: accounts[4]});
		const stringoLKQRi9 = await GardenContractV2SbJSbTV.claimDecompose.call(stringgA0nVYP, uintkiaN8x0, {from: accounts[2]});
		const uint256NBfLTYe = await GardenContractV2SbJSbTV.getTotalrTLPHarvest.call(uintXvq9Xfx, {from: accounts[0]});

		await expect(GardenContractV2SbJSbTV.growthRemaining.call(addresszgPEkWW, stringCN0CuBU, uintPqNrpId, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXpnw19 = accounts[0]
		const addressIarX1lP = "0x0000000000000000000000000000000000000001"
		const addressvwbZmDj = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addressXpnw19, addressIarX1lP, addressvwbZmDj, {from: accounts[0]});
		const uintcswo6wl = BigInt("135")
		const stringP5iuQV = "ufUekHiutPL6qbiiwlMEVz7HL5MMsPSkjgUNFgSdwQeIi8a9eMDUcF3GyCwG47S5EhXhdLgyGGdLF6ixWTAXHM"
		const stringjrKxBrm = "syxQoAzJcQibVG1UAJTtm2JC4jQqhZYT8rNmzuXI7qxPb7IPvoAqR4S4IONSYTWZ29Rx1lO5XvhLtTjkW5bcFKUviwbYNug9n"
		const uinthTH8fQi = BigInt("16")
		const uintnv93egg = BigInt("525")
		const uintHJu5BFr = BigInt("91")
		const uinteAhh7o = BigInt("227")
		const stringlI9gLiG = await GardenContractV2q1APxkn.harvest.call(stringP5iuQV, uintcswo6wl, {from: accounts[5]});
		const stringAM9IZ5Q = await GardenContractV2q1APxkn.harvestAllBeds.call(stringjrKxBrm, {from: accounts[3]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uinthTH8fQi, {from: accounts[2]});
		const uint8pzkMHBP = await GardenContractV2q1APxkn.operationBurnMint.call(uinteAhh7o, uintHJu5BFr, uintnv93egg, {from: accounts[1]});

		await expect(GardenContractV2q1APxkn.harvest.call(stringP5iuQV, uintcswo6wl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressi2RS7SG = accounts[0]
		const addressKezBCzF = "0x0000000000000000000000000000000000000001"
		const addressI6zIRvJ = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addressi2RS7SG, addressKezBCzF, addressI6zIRvJ, {from: accounts[0]});
		const stringyqeCjZF = "JenloONwfiPYsHekdIUSWNWwub1B0F"
		const uintak7JlvR = BigInt("16")
		const uint256tB1LMbQ = await GardenContractV2q1APxkn.totalTLPBurnt.call(stringyqeCjZF, {from: accounts[3]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintak7JlvR, {from: accounts[2]});

		await expect(GardenContractV2q1APxkn.totalTLPBurnt.call(stringyqeCjZF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskoovdfQ = accounts[0]
		const addressmBYyiYL = "0x0000000000000000000000000000000000000001"
		const addressCNCZrqU = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addresskoovdfQ, addressmBYyiYL, addressCNCZrqU, {from: accounts[0]});
		const addressbq0lCs = accounts[0]
		const uintP7r2xLM = BigInt("24")
		const addressvuTUAKF = await GardenContractV2q1APxkn.renounceTokenOwner.call(addressbq0lCs, {from: accounts[0]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintP7r2xLM, {from: accounts[2]});

		await expect(GardenContractV2q1APxkn.renounceTokenOwner.call(addressbq0lCs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxjbjcdv = accounts[0]
		const addressdetPYYo = "0x0000000000000000000000000000000000000001"
		const addressdDl9wCe = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addressxjbjcdv, addressdetPYYo, addressdDl9wCe, {from: accounts[0]});
		const uintS1Bsk6y = BigInt("63")
		const uintgz4Qscg = BigInt("3")
		const uint256Kz6Uukw = await GardenContractV2q1APxkn.getTotalsTLPHarvest.call(uintS1Bsk6y, {from: accounts[4]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintgz4Qscg, {from: accounts[2]});

		await expect(GardenContractV2q1APxkn.getTotalsTLPHarvest.call(uintS1Bsk6y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfx180v = accounts[0]
		const addressbDQdz5 = "0x0000000000000000000000000000000000000001"
		const addressTFhq0Qe = accounts[0]
		const GardenContractV2q1APxkn = await GardenContractV2.new(addressfx180v, addressbDQdz5, addressTFhq0Qe, {from: accounts[0]});
		const addresslKCqmb = accounts[5]
		const addressAv3sveu = accounts[1]
		const uintwYcFt7 = BigInt("19")
		const addressxRpL3Jl = await GardenContractV2q1APxkn.addTokenOwner.call(addressAv3sveu, addresslKCqmb, {from: accounts[0]});
		const uint256DaCyNYm = await GardenContractV2q1APxkn.getTotalrTLPHarvest.call(uintwYcFt7, {from: accounts[2]});

		await expect(GardenContractV2q1APxkn.addTokenOwner.call(addressAv3sveu, addresslKCqmb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressbkUSuoO = accounts[3]
		const addressd0WkzGk = accounts[0]
		const addressQXhnQgb = accounts[2]
		const GardenContractV2L2C8qpD = await GardenContractV2.new(addressbkUSuoO, addressd0WkzGk, addressQXhnQgb, {from: accounts[4]});
		const addressnjrYa2 = accounts[1]
		const uintNWVcuKV = BigInt("172")
		const strings24vFfa = "LbYcN6WIIh4UUZqEu5g"
		const addressel6ZT5U = await GardenContractV2L2C8qpD.changeOwner.call(addressnjrYa2, {from: accounts[4]});
		const uint256YCC0kh = await GardenContractV2L2C8qpD.getTotalsTLPHarvest.call(uintNWVcuKV, {from: accounts[2]});
		const uint256D5PZZ2t = await GardenContractV2L2C8qpD.totalTLPDecomposed.call(strings24vFfa, {from: accounts[2]});

		await expect(GardenContractV2L2C8qpD.getTotalsTLPHarvest.call(uintNWVcuKV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOvae0Dd = "0x0000000000000000000000000000000000000001"
		const addresslJ9W5A = accounts[0]
		const addressgGugZhn = accounts[3]
		const GardenContractV2l3HZYrP = await GardenContractV2.new(addressOvae0Dd, addresslJ9W5A, addressgGugZhn, {from: "0x0000000000000000000000000000000000000001"});
		const uintgOn3pD9 = BigInt("251")
		const stringIZC37RU = "4e1H1BYaoRy6WAfp4fUIGle3QjNDwT"
		const uintSbhIphE = BigInt("161")
		const uintv9xOq1q = BigInt("206")
		const uintRBto3kQ = BigInt("1126")
		const uintVyKJkah = BigInt("26")
		const stringdMeyRWk = "rALFcFvZ6NqDjyEzs8wuN1slXlmxBpnGgG"
		const uintwSVks7e = BigInt("133")
		const uintnVaWeW1 = BigInt("189")
		const stringHA5hVZ8 = "JJxdfhuJ"
		const addresst2U1Nsi = accounts[0]
		const stringyPsBrlb = await GardenContractV2l3HZYrP.claimDecompose.call(stringIZC37RU, uintgOn3pD9, {from: accounts[5]});
		const uint8Dnuk0BJ = await GardenContractV2l3HZYrP.zeroHoldings.call(uintv9xOq1q, uintSbhIphE, {from: accounts[4]});
		const stringbRFGT3 = await GardenContractV2l3HZYrP.decompose.call(stringdMeyRWk, uintVyKJkah, uintRBto3kQ, {from: accounts[0]});
		const uint8X2ZxC4q = await GardenContractV2l3HZYrP.setTimeStamp.call(uintnVaWeW1, uintwSVks7e, {from: accounts[1]});
		const uint256SqEaPlH = await GardenContractV2l3HZYrP.balanceOf.call(addresst2U1Nsi, stringHA5hVZ8, {from: accounts[3]});
	});
})