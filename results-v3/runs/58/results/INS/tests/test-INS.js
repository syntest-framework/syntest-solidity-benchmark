const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintmzAjut = BigInt("905")
		const stringTGqTuRq = "AvhtgFhOr96TVbhN1ASFAkcuF5yxFxlw4oDdRMpG4Nx1O55ncc6jnWsOHvYxUYryI6HrPQC3Me4Ch7ccyeXcw3X2vYMaB"
		const stringTRxfaKW = "d7sULn5aOuf0wvP0y5svoWIw2N2zSQZGhDa1VFRR7Yc2Cr3JLYjOCayK"
		const INSsobW7fo = await INS.new(uintmzAjut, stringTGqTuRq, stringTRxfaKW, {from: accounts[4]});
		const uintjJmnWAY = BigInt("1210")
		const uintAldZjmh = BigInt("1243")
		const addressB7N1BEx = accounts[3]
		const uintqswV8f8 = BigInt("1877")
		const addressVB4GjLX = accounts[4]
		const uintlkW6hC0 = BigInt("664")
		const addressCbDYsAh = accounts[1]
		const bytezxNx3Gn = "0x11010b021b1801000c140a0f1c0816131e0e1d111f0e011a1211021f01"
		const uinti3cT1Vn = BigInt("2043")
		const addressRMcZoGT = "0x0000000000000000000000000000000000000001"
		const uintyWPKwkk = BigInt("1368")
		const address8A54nb = accounts[4]
		const boolswGKcd = await INSsobW7fo.burn.call(uintjJmnWAY, {from: accounts[4]});
		const boolzGwU7r4 = await INSsobW7fo.burnFrom.call(addressB7N1BEx, uintAldZjmh, {from: accounts[1]});
		const boolpwfTEXO = await INSsobW7fo.approve.call(addressVB4GjLX, uintqswV8f8, {from: accounts[0]});
		const boolFEkun2v = await INSsobW7fo.approve.call(addressCbDYsAh, uintlkW6hC0, {from: accounts[1]});
		const boolGNrGaTp = await INSsobW7fo.approveAndCall.call(addressRMcZoGT, uinti3cT1Vn, bytezxNx3Gn, {from: accounts[0]});
		const boolrXuEGus = await INSsobW7fo.transfer.call(address8A54nb, uintyWPKwkk, {from: accounts[2]});

		assert.equal(boolswGKcd, true)
		await expect(INSsobW7fo.burnFrom.call(addressB7N1BEx, uintAldZjmh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintd2q8nT = BigInt("707")
		const stringunZAZOa = "d8HMJ8ilnNSQ0T0GR1R6iPcoo6ejRQ7MWlkcmBkylywJuhP7IOphheCTqmR9Wkug5y2ta1g5hyfmk1NFyRR1VgK5HRm9"
		const stringaB1nXL = "lr24cvOUAKjHnbKE86DNBSRPYxH5ffSZBqhTh0GIiW0ohllWcKKOtyEduQjIBlqokaPH0EePSOOczzQTwJrRAWw"
		const INSicy3mYv = await INS.new(uintd2q8nT, stringunZAZOa, stringaB1nXL, {from: accounts[0]});
		const uintWL3uJjc = BigInt("1713")
		const uintGc88p9 = BigInt("556")
		const addressGJwMgKz = accounts[2]
		const byteXX14mwH = "0x1f171d1d1710060c1717150219"
		const uintme4pfcV = BigInt("495")
		const addressa0GlrNo = accounts[4]
		const boolCzi137G = await INSicy3mYv.burn.call(uintWL3uJjc, {from: accounts[0]});
		const boolXQlipuE = await INSicy3mYv.approve.call(addressGJwMgKz, uintGc88p9, {from: accounts[0]});
		const boolN8EyRvP = await INSicy3mYv.approveAndCall.call(addressa0GlrNo, uintme4pfcV, byteXX14mwH, {from: accounts[0]});

		assert.equal(boolCzi137G, true)
		assert.equal(boolXQlipuE, true)
		await expect(INSicy3mYv.approveAndCall.call(addressa0GlrNo, uintme4pfcV, byteXX14mwH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintR5akrzI = BigInt("2008")
		const stringZZ9kuyB = "jFIetLoFKw3N6v4cHxj5gBCJo6xMtlWsey0xIGB9fHkAbC5rogKuSAoVTiH960yqQwySrRVkgorUFBrJERAnlp"
		const stringCC9G36U = "qmDqS8TtLcxYtLaGBwu"
		const INSfC7MVf1 = await INS.new(uintR5akrzI, stringZZ9kuyB, stringCC9G36U, {from: accounts[2]});
		const uinthLEiCDD = BigInt("1018")
		const addressFIqUFA = accounts[0]
		const addressdyxAgdl = accounts[0]
		const uinth56eHMS = BigInt("1568")
		const addressiliV2Vr = accounts[0]
		const uintI6MS39 = BigInt("269")
		const addressegoaN6n = accounts[4]
		const uintF4gpM0G = BigInt("371")
		const address1Co6kq = accounts[2]
		const addressHIp6lnG = accounts[0]
		const uintg7xu21M = BigInt("1266")
		const addressujj75H = "0x0000000000000000000000000000000000000001"
		const uinthJgN6zq = BigInt("111")
		const boolvHQFReW = await INSfC7MVf1.transferFrom.call(addressdyxAgdl, addressFIqUFA, uinthLEiCDD, {from: accounts[5]});
		const boolT1ktAnv = await INSfC7MVf1.approve.call(addressiliV2Vr, uinth56eHMS, {from: accounts[0]});
		const boolino2jla = await INSfC7MVf1.transfer.call(addressegoaN6n, uintI6MS39, {from: "0x0000000000000000000000000000000000000001"});
		const boolUieOpJ = await INSfC7MVf1.transferFrom.call(addressHIp6lnG, address1Co6kq, uintF4gpM0G, {from: accounts[1]});
		const boolDqzxJqK = await INSfC7MVf1.burnFrom.call(addressujj75H, uintg7xu21M, {from: accounts[4]});
		const boolamZaLw = await INSfC7MVf1.burn.call(uinthJgN6zq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSfC7MVf1.transferFrom.call(addressdyxAgdl, addressFIqUFA, uinthLEiCDD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintRf0TRAb = BigInt("930")
		const stringvYfyWI = "Pka2A1LXGhMDBblgTEskGMBGIGWx6vyLfXdJVvORxSRarn5U4JzDvL1KJdM16hg1W8rcqDITZKzoBPPURbTaswu"
		const stringEmQPYyv = "fJquS0btP3EXOaJQnhYT5qnPYC0WWzhLpSDiGvIY4"
		const INSPYxZel1 = await INS.new(uintRf0TRAb, stringvYfyWI, stringEmQPYyv, {from: accounts[3]});
		const uintfUdW1bb = BigInt("1122")
		const addressSo7WfM8 = accounts[2]
		const uinttGfzYNa = BigInt("1946")
		const addressgBSyVKZ = accounts[0]
		const bytetZxfs7h = "0x1d1c0b080604161e01021e01080908121f0e0e090f1e"
		const uintVT5Q0ld = BigInt("1383")
		const addressd1nbLum = accounts[4]
		const boolXWYjy9D = await INSPYxZel1.approve.call(addressSo7WfM8, uintfUdW1bb, {from: accounts[0]});
		const boolsROveFX = await INSPYxZel1.transfer.call(addressgBSyVKZ, uinttGfzYNa, {from: accounts[0]});
		const boolckswXFX = await INSPYxZel1.approveAndCall.call(addressd1nbLum, uintVT5Q0ld, bytetZxfs7h, {from: accounts[0]});

		assert.equal(boolXWYjy9D, true)
		await expect(INSPYxZel1.transfer.call(addressgBSyVKZ, uinttGfzYNa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSSmPC5b = BigInt("317")
		const stringM4Guyz8 = "68XkLZFR2lkiR62WIqliJKmGQS9KgwQRHoXp6VFH6PpgYmeoMxcapcx6vAsP2IRg4ndDDslz5qdtEIKYDb2R2rVkLUf7"
		const stringnhsfOV1 = "IgopJ87eG07g6VcaYeLyBKdfKyBnYXGGuHr1J2aKwdu"
		const INSMGoed8d = await INS.new(uintSSmPC5b, stringM4Guyz8, stringnhsfOV1, {from: "0x0000000000000000000000000000000000000001"});
		const uintFTMoCKJ = BigInt("1369")
		const addresssX48rO = accounts[0]
		const byterh1nCgN = "0x1013031e13201a1e171709130a110b"
		const uintbfweY1V = BigInt("1746")
		const addressaPLDJM5 = accounts[4]
		const uintEb7fZQK = BigInt("785")
		const addressNS5xNIe = accounts[0]
		const boolffynMKZ = await INSMGoed8d.burnFrom.call(addresssX48rO, uintFTMoCKJ, {from: accounts[5]});
		const boolJGwDd2 = await INSMGoed8d.approveAndCall.call(addressaPLDJM5, uintbfweY1V, byterh1nCgN, {from: accounts[3]});
		const boolkTVe2kQ = await INSMGoed8d.burnFrom.call(addressNS5xNIe, uintEb7fZQK, {from: accounts[0]});
	});
})