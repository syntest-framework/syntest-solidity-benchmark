const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringAINHids = "k3CRa3lKl998wAfEAg3Shsrazn4YsvGMdXUSgYwRd9QVqHBfDkuQ7ExlhCoaLRJPKQdLzQ67j"
		const stringUCY1l9U = "IouoWfeyUO7HijK8JuDf5BAA2KW364IUBrlRVKEc1Pg11WOVOPLkVAy3EfhuIXLIey"
		const uintIqF2KNE = BigInt("551")
		const FinaljJdN7A8 = await Final.new(stringAINHids, stringUCY1l9U, uintIqF2KNE, {from: accounts[2]});
		const addressJWG6skL = accounts[1]
		const uintHT9cuJh = BigInt("169")
		const addresswKINpSm = accounts[4]
		const uintMNoAuXR = BigInt("1572")
		const addressbmBd1Hf = accounts[4]
		const uintx5swvp = await FinaljJdN7A8.balanceOf.call(addressJWG6skL, {from: accounts[3]});
//		const booltdGunVL = await FinaljJdN7A8.transfer.call(addresswKINpSm, uintHT9cuJh, {from: accounts[5]});
//		const stringFDVBhoM = await FinaljJdN7A8.name.call({from: accounts[0]});
//		const boolEQ29AD1 = await FinaljJdN7A8.decreaseAllowance.call(addressbmBd1Hf, uintMNoAuXR, {from: accounts[4]});

		assert.equal(uintx5swvp, BigInt("0"))
		await expect(FinaljJdN7A8.transfer.call(addresswKINpSm, uintHT9cuJh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringlhQLysA = "KjVEoYuWpzEJrNCA"
		const stringvBAKGNJ = "x4tsowgNmFRsT8naWoarJA7Q32UEXdhc"
		const uintyWgy5CX = BigInt("217")
		const FinalaZ3frIh = await Final.new(stringlhQLysA, stringvBAKGNJ, uintyWgy5CX, {from: "0x0000000000000000000000000000000000000001"});
		const uintA208nUv = BigInt("692")
		const addressEe3vZJS = accounts[2]
		const addressNK9sYRc = accounts[3]
		const addressjPJfIX = accounts[3]
		const addressloaUGRe = accounts[3]
		const stringHZjhvLD = await FinalaZ3frIh.name.call({from: accounts[4]});
		const uintmn0IZmo = await FinalaZ3frIh.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolis6rQ3F = await FinalaZ3frIh.transferFrom.call(addressNK9sYRc, addressEe3vZJS, uintA208nUv, {from: accounts[0]});
		const boolereQEam = await FinalaZ3frIh.transferownership.call(addressjPJfIX, {from: accounts[3]});
		const uintJwgIIV = await FinalaZ3frIh.balanceOf.call(addressloaUGRe, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringMDbMCeL = "TxGs8GQfeeK16smX"
		const stringwrDzblu = "uKEkEV8Ur7zjXRuUp7"
		const uintWlqeJJm = BigInt("1683")
		const Finalflg7KU0 = await Final.new(stringMDbMCeL, stringwrDzblu, uintWlqeJJm, {from: accounts[0]});
		const uintzxawTYa = BigInt("1862")
		const addressqGJsAaJ = accounts[3]
		const uintBbJNQKz = BigInt("1862")
		const addressfzXeuvF = accounts[3]
		const addressFVwumzi = accounts[2]
//		const booltcYgkL2 = await Finalflg7KU0.approveAndCall.call(addressqGJsAaJ, uintzxawTYa, {from: accounts[2]});
//		const stringuvfc4LS = await Finalflg7KU0.symbol.call({from: accounts[0]});
//		const stringTxaXMz3 = await Finalflg7KU0.symbol.call({from: accounts[1]});
//		const booldGBGnxT = await Finalflg7KU0.transferFrom.call(addressFVwumzi, addressfzXeuvF, uintBbJNQKz, {from: accounts[1]});

		await expect(Finalflg7KU0.approveAndCall.call(addressqGJsAaJ, uintzxawTYa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringatZkRpD = "qBFUESf7pbCAEsG7wq7iWCB3Ml"
		const stringeeGiW5t = "Wq9fX6p5LzquexNgj9WKdCAfyrmDoq0aSNTL1RlnaCSHm4yhOxedzdBTrA"
		const uintkyKKrO = BigInt("227")
		const Finalfmn43YQ = await Final.new(stringatZkRpD, stringeeGiW5t, uintkyKKrO, {from: accounts[1]});
		const addressCs6TrqF = accounts[3]
		const addressA2eVg0 = accounts[4]
		const uintxxhvoo4 = BigInt("729")
		const addressZw9tt5Z = accounts[5]
		const addressilp94aG = accounts[1]
		const uintcPVSt1t = BigInt("1701")
		const addressj3tsrGp = accounts[2]
		const addressMd2YSlg = accounts[3]
		const uintkNlLYZt = BigInt("171")
		const addressV2f4cg0 = accounts[2]
		const uintQlccECY = await Finalfmn43YQ.allowance.call(addressA2eVg0, addressCs6TrqF, {from: accounts[3]});
//		const boolxLlUzOj = await Finalfmn43YQ.transferFrom.call(addressilp94aG, addressZw9tt5Z, uintxxhvoo4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTCWw2pS = await Finalfmn43YQ.transferFrom.call(addressMd2YSlg, addressj3tsrGp, uintcPVSt1t, {from: "0x0000000000000000000000000000000000000001"});
//		const boolo583WjZ = await Finalfmn43YQ.decreaseAllowance.call(addressV2f4cg0, uintkNlLYZt, {from: accounts[0]});
//		const stringK6s0maD = await Finalfmn43YQ.symbol.call({from: accounts[5]});

		assert.equal(uintQlccECY, BigInt("0"))
		await expect(Finalfmn43YQ.transferFrom.call(addressilp94aG, addressZw9tt5Z, uintxxhvoo4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringmFH3KMc = "ZmSbYrv2EldnAVQB7n6Q1i30ocWaKYqTCk99EdUXf1jzBNUgqAMncmRM71Gtwm"
		const stringS5DMZK8 = "IkG95n3R7GwNQORRM2T7lfOU6w9wHnvcuKdc9gvV"
		const uintnRUFqV4 = BigInt("37")
		const FinalCUYvUQN = await Final.new(stringmFH3KMc, stringS5DMZK8, uintnRUFqV4, {from: accounts[1]});
		const uintWjNa7IR = BigInt("1932")
		const addressk7ep54z = accounts[3]
		const uint2kL8z9 = BigInt("1107")
		const addressPPlr1z7 = accounts[1]
		const uintd2bLiHS = BigInt("132")
		const addressJ06Q5i = accounts[5]
//		const boolUSKm62X = await FinalCUYvUQN.increaseAllowance.call(addressk7ep54z, uintWjNa7IR, {from: accounts[4]});
//		const boola3yXhXQ = await FinalCUYvUQN.increaseAllowance.call(addressPPlr1z7, uint2kL8z9, {from: accounts[0]});
//		const uintQL9icPA = await FinalCUYvUQN.totalSupply.call({from: accounts[0]});
//		const stringEUFsHv = await FinalCUYvUQN.symbol.call({from: accounts[3]});
//		const boolCUL3Rxg = await FinalCUYvUQN.approve.call(addressJ06Q5i, uintd2bLiHS, {from: accounts[2]});

		await expect(FinalCUYvUQN.increaseAllowance.call(addressk7ep54z, uintWjNa7IR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringXr34hSI = "S9uehVFG8HeODQfmeVqcjuAbzJXIvtqTJm1y6iefzPrgl6aepVu9vVnyPSbhCmG9vMaqBCOoQJQaK"
		const stringN2i7lfX = "DKGVEQJrdnPIGCPlA35fcqa3oX13UD0DkNLhon447iFMo8MST89TV"
		const uinthmcvQNG = BigInt("241")
		const FinalmoxadF2 = await Final.new(stringXr34hSI, stringN2i7lfX, uinthmcvQNG, {from: accounts[1]});
		const addressGoScyol = accounts[2]
		const addressixLmQBM = accounts[4]
		const addresslVQgaBy = accounts[0]
		const addressRCbQU5y = accounts[1]
		const uintwxv6iEA = await FinalmoxadF2.balanceOf.call(addressGoScyol, {from: accounts[3]});
		const stringLmBYqnL = await FinalmoxadF2.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uintGvmy2VD = await FinalmoxadF2.allowance.call(addresslVQgaBy, addressixLmQBM, {from: accounts[3]});
//		const boolVlqxg2n = await FinalmoxadF2.transferownership.call(addressRCbQU5y, {from: accounts[3]});

		assert.equal(stringLmBYqnL, "DKGVEQJrdnPIGCPlA35fcqa3oX13UD0DkNLhon447iFMo8MST89TV")
		assert.equal(uintGvmy2VD, BigInt("0"))
		assert.equal(uintwxv6iEA, BigInt("0"))
		await expect(FinalmoxadF2.transferownership.call(addressRCbQU5y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBT4VrQq = "4sqCHDcGbAWaAaGPUzsVyNkeMnOvRdkx"
		const stringQUVuzZ = "VckJRRQX5ScslWIOpMxIKsKHJ6OjzZOjHEphLn3m0tP4F8ioGhuiwezUFC1NIaFQDIrahRxPRt889fSyDyYoGDIwdo8"
		const uintYLBAM5m = BigInt("1828")
		const FinaleS6MXoz = await Final.new(stringBT4VrQq, stringQUVuzZ, uintYLBAM5m, {from: accounts[0]});
		const uintUn5LjsR = BigInt("1984")
		const addressmlPx1ob = accounts[4]
		const uintndF10s9 = BigInt("10")
		const addresstXMY3xb = accounts[3]
		const uintBgBYaDs = await FinaleS6MXoz.totalSupply.call({from: accounts[1]});
		const stringj7WeX0d = await FinaleS6MXoz.name.call({from: accounts[2]});
		const boolOrKNzxc = await FinaleS6MXoz.approve.call(addressmlPx1ob, uintUn5LjsR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIiUcble = await FinaleS6MXoz.transfer.call(addresstXMY3xb, uintndF10s9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOrKNzxc, true)
		assert.equal(stringj7WeX0d, "4sqCHDcGbAWaAaGPUzsVyNkeMnOvRdkx")
		assert.equal(uintBgBYaDs, BigInt("1828000000000000000000"))
		await expect(FinaleS6MXoz.transfer.call(addresstXMY3xb, uintndF10s9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringk7o05QZ = "MuDr1F5WfUzPDUjvBfdFxirzt9B68cROojABqicIszR4fAAgosU8PqkVHvhrWeVOHSRAPO4"
		const stringbw1emJI = "nPORuzolwoxa7EupqtKxzcjkZkuZLadEJ0S1I2wWEUTNpq2zetm0AzmuId84gA668SMEthduO27wun1e0t"
		const uintYUiAaXB = BigInt("1635")
		const FinaldkPJflr = await Final.new(stringk7o05QZ, stringbw1emJI, uintYUiAaXB, {from: accounts[4]});
		const uintQsWteMR = BigInt("1171")
		const addressPQxD6LJ = accounts[2]
		const addressVQZZQOR = accounts[3]
		const addressVd4vbKD = accounts[2]
		const uintidhluj = BigInt("950")
		const addressodp2yUD = accounts[4]
		const addressrmpARzk = accounts[4]
		const addressPyHLubQ = accounts[1]
		const booluu3XnM = await FinaldkPJflr.approve.call(addressPQxD6LJ, uintQsWteMR, {from: accounts[4]});
		const uintiJ9ZEDg = await FinaldkPJflr.allowance.call(addressVd4vbKD, addressVQZZQOR, {from: accounts[3]});
		const boolnIPRnep = await FinaldkPJflr.transferFrom.call(addressrmpARzk, addressodp2yUD, uintidhluj, {from: accounts[4]});
		const uintu8W9HsJ = await FinaldkPJflr.balanceOf.call(addressPyHLubQ, {from: accounts[3]});

		assert.equal(boolnIPRnep, true)
		assert.equal(booluu3XnM, true)
		assert.equal(uintiJ9ZEDg, BigInt("0"))
		assert.equal(uintu8W9HsJ, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringBT4VrQq = "4sqCHDcGbAWaAaGPUzsVyNkeMnOvRdkx"
		const stringQUVuzZ = "VckJRRQX5ScslWIOpMxIKsKHJ6OjzZOjHEphLn3m0tP4F8ioGhuiwezUFC1NIaFQDIrahRxPRt889fSyDyYoGDIwdo8"
		const uintWz3gkzl = BigInt("1828")
		const FinaleS6MXoz = await Final.new(stringBT4VrQq, stringQUVuzZ, uintWz3gkzl, {from: accounts[0]});
		const uintqsES2en = BigInt("1984")
		const addressA6IXnE = accounts[4]
		const uintdSB2sjd = BigInt("0")
		const addresshX9kM34 = accounts[4]
		const boolOrKNzxc = await FinaleS6MXoz.approve.call(addressA6IXnE, uintqsES2en, {from: "0x0000000000000000000000000000000000000001"});
		const boolIiUcble = await FinaleS6MXoz.transfer.call(addresshX9kM34, uintdSB2sjd, {from: "0x0000000000000000000000000000000000000001"});
		const strings0cv2im = await FinaleS6MXoz.name.call({from: accounts[0]});

		assert.equal(boolIiUcble, true)
		assert.equal(boolOrKNzxc, true)
		assert.equal(strings0cv2im, "4sqCHDcGbAWaAaGPUzsVyNkeMnOvRdkx")
	});

	it('test for Final', async () => {
		const stringXr34hSI = "S9uehVFG8HeODQfmeVqcjuAbzJXIvtqTJm1y6iefzPrgl6aepVu9vVnyPSbhCmG9vMaqBCOoQJQaK"
		const stringN2i7lfX = "DKGVEQJrdnPIGCPlA35fcqa3oX13UD0DkNLhon447iFMo8MST89TV"
		const uintIN4boCb = BigInt("241")
		const FinalmoxadF2 = await Final.new(stringXr34hSI, stringN2i7lfX, uintIN4boCb, {from: accounts[1]});
		const addressAvVz8J6 = accounts[5]
		const addressDVD66TO = accounts[2]
		const boolGwGmdah = await FinalmoxadF2.transferownership.call(addressAvVz8J6, {from: accounts[1]});
//		const boolVlqxg2n = await FinalmoxadF2.transferownership.call(addressDVD66TO, {from: accounts[3]});

		assert.equal(boolGwGmdah, true)
		await expect(FinalmoxadF2.transferownership.call(addressDVD66TO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringMDbMCeL = "TxGs8GQfeeK16smX"
		const stringwrDzblu = "uKEkEV8Ur7zjXRuUp7"
		const uintGp1Mi0F = BigInt("1683")
		const Finalflg7KU0 = await Final.new(stringMDbMCeL, stringwrDzblu, uintGp1Mi0F, {from: accounts[0]});
		const uintJ5L0UYF = BigInt("305")
		const addressIU5zJnw = "0x0000000000000000000000000000000000000001"
		const uintWw4kF84 = BigInt("1878")
		const addressvMRYjt6 = accounts[4]
		const boolvkTJA9 = await Finalflg7KU0.approveAndCall.call(addressIU5zJnw, uintJ5L0UYF, {from: accounts[0]});
//		const booltcYgkL2 = await Finalflg7KU0.approveAndCall.call(addressvMRYjt6, uintWw4kF84, {from: accounts[2]});

		assert.equal(boolvkTJA9, true)
		await expect(Finalflg7KU0.approveAndCall.call(addressvMRYjt6, uintWw4kF84, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringMDbMCeL = "TxGs8GQfeeK16smX"
		const stringwrDzblu = "uKEkEV8Ur7zjXRuUp7"
		const uintY6Licm7 = BigInt("1683")
		const Finalflg7KU0 = await Final.new(stringMDbMCeL, stringwrDzblu, uintY6Licm7, {from: accounts[0]});
		const uintS4TQ31K = BigInt("244")
		const addressrsYe8j3 = "0x00000000000000000000000000000000000000-1"
//		const boolvkTJA9 = await Finalflg7KU0.approveAndCall.call(addressrsYe8j3, uintS4TQ31K, {from: accounts[0]});

		await expect(Finalflg7KU0.approveAndCall.call(addressrsYe8j3, uintS4TQ31K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})