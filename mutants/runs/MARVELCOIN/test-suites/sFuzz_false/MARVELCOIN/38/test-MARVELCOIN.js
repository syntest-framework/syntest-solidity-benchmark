const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintBeJSqm = BigInt("1940")
		const stringlxIfnT = "hWwwQNghumbwJHIENvk3EUBkkM3M5Tr1WctXfUe2G25iRMVBnk207"
		const stringNxfLtMU = "8hmRjkPb"
		const MARVELCOINDFnerAb = await MARVELCOIN.new(uintBeJSqm, stringlxIfnT, stringNxfLtMU, {from: accounts[3]});
		const byteTRIfNEA = "0x1c14101704120a"
		const uintEojeWel = BigInt("1973")
		const addressIG21U9x = accounts[5]
		const byteDcMczzF = "0x1c1e"
		const uintZqyDZ8p = BigInt("1779")
		const addressNs0VkrE = "0x0000000000000000000000000000000000000001"
		const uintNM4BfeO = BigInt("100")
		const addressvoABqWZ = accounts[4]
		const uintT57NcHD = BigInt("682")
		const addressH4YelPA = accounts[1]
		const uintJS9SfR = BigInt("1286")
		const addressKkLeVAg = accounts[3]
		const uintkgedvrZ = BigInt("1810")
		const addressWxyyyTk = accounts[2]
		const boolEq5l4y9 = await MARVELCOINDFnerAb.approveAndCall.call(addressIG21U9x, uintEojeWel, byteTRIfNEA, {from: accounts[1]});
		const boolaAxIYXW = await MARVELCOINDFnerAb.approveAndCall.call(addressNs0VkrE, uintZqyDZ8p, byteDcMczzF, {from: accounts[4]});
		const boolbUmMDBU = await MARVELCOINDFnerAb.approve.call(addressvoABqWZ, uintNM4BfeO, {from: "0x0000000000000000000000000000000000000001"});
		const boolDAiwJhm = await MARVELCOINDFnerAb.burnFrom.call(addressH4YelPA, uintT57NcHD, {from: accounts[1]});
		const boolJC7J9HO = await MARVELCOINDFnerAb.approve.call(addressKkLeVAg, uintJS9SfR, {from: accounts[0]});
		const boolEBd2IAa = await MARVELCOINDFnerAb.approve.call(addressWxyyyTk, uintkgedvrZ, {from: accounts[4]});

		await expect(MARVELCOINDFnerAb.approveAndCall.call(addressIG21U9x, uintEojeWel, byteTRIfNEA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintEgpRhc = BigInt("39")
		const stringfSsrppQ = "uEEhfrJnGoy76tNYHU5NvLlYfZzmLGr6mLIXxoFlFrv8FO0QtdM9yqEfRJCY"
		const stringpkGjPSK = "hMPBq5xLFS2cuSD7QzAMxXY9iXtNR89uRmFvRotSdlbEoOmLVFSgS1N4LCSC0X55UvlQD6q3fA9RPAnx0ADwyvJeEJ"
		const MARVELCOINZxU6RH1 = await MARVELCOIN.new(uintEgpRhc, stringfSsrppQ, stringpkGjPSK, {from: accounts[3]});
		const uintPRel5dQ = BigInt("672")
		const uintDciG03U = BigInt("613")
		const addressNgbIUNE = accounts[4]
		const uintumzfyTz = BigInt("508")
		const addressxRwkq2Q = "0x0000000000000000000000000000000000000001"
		const uintDTgUa3D = BigInt("193")
		const addressuZ94rG = accounts[2]
		const addressz3P2JdX = accounts[5]
		const uintxrURu77 = BigInt("830")
		const addressLpNTPCS = accounts[1]
		const addressbghAK9L = "0x0000000000000000000000000000000000000001"
		const boolD2CAwK = await MARVELCOINZxU6RH1.burn.call(uintPRel5dQ, {from: accounts[3]});
		const boolZhKj5Y8 = await MARVELCOINZxU6RH1.approve.call(addressNgbIUNE, uintDciG03U, {from: accounts[4]});
		const boolot2rdZe = await MARVELCOINZxU6RH1.transfer.call(addressxRwkq2Q, uintumzfyTz, {from: accounts[5]});
		const boolyQxyssi = await MARVELCOINZxU6RH1.transferFrom.call(addressz3P2JdX, addressuZ94rG, uintDTgUa3D, {from: accounts[1]});
		const boolXvqrkY = await MARVELCOINZxU6RH1.transferFrom.call(addressbghAK9L, addressLpNTPCS, uintxrURu77, {from: accounts[1]});

		assert.equal(boolD2CAwK, true)
		assert.equal(boolZhKj5Y8, true)
		await expect(MARVELCOINZxU6RH1.transfer.call(addressxRwkq2Q, uintumzfyTz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintulZdpPU = BigInt("1711")
		const stringhZU9jyO = "8ZrH1niZ4aqSeaYgR3exc36Ve89CSWh3DWm2tRuKaeYoKfGF6Z2lGJMjw8c8OkQm"
		const stringyMa8xI = "98poOmCa"
		const MARVELCOINwz8mV8l = await MARVELCOIN.new(uintulZdpPU, stringhZU9jyO, stringyMa8xI, {from: accounts[0]});
		const uintbSANLrB = BigInt("1599")
		const addressKcdLPj = accounts[3]
		const uintCcU9lAO = BigInt("1172")
		const addressCRLAgue = accounts[2]
		const uintfYcX76H = BigInt("877")
		const addressyIAqOBU = accounts[0]
		const addressEH4AiGD = accounts[4]
		const uintGB1TJ4Y = BigInt("687")
		const addresse66mnQX = accounts[3]
		const uintFRjd8z9 = BigInt("490")
		const addressDGFFO7z = accounts[3]
		const addressUgjQZ0T = accounts[3]
		const uintb95CZIZ = BigInt("799")
		const addressYZ64awj = accounts[1]
		const boolyMIvOVm = await MARVELCOINwz8mV8l.approve.call(addressKcdLPj, uintbSANLrB, {from: accounts[4]});
		const boolzjmolSA = await MARVELCOINwz8mV8l.approve.call(addressCRLAgue, uintCcU9lAO, {from: accounts[1]});
		const booli7pTBli = await MARVELCOINwz8mV8l.transferFrom.call(addressEH4AiGD, addressyIAqOBU, uintfYcX76H, {from: accounts[4]});
		const boolGM9HNsT = await MARVELCOINwz8mV8l.transfer.call(addresse66mnQX, uintGB1TJ4Y, {from: accounts[1]});
		const boolds8IoaE = await MARVELCOINwz8mV8l.transferFrom.call(addressUgjQZ0T, addressDGFFO7z, uintFRjd8z9, {from: accounts[0]});
		const boolvic3itr = await MARVELCOINwz8mV8l.burnFrom.call(addressYZ64awj, uintb95CZIZ, {from: accounts[4]});

		assert.equal(boolyMIvOVm, true)
		assert.equal(boolzjmolSA, true)
		await expect(MARVELCOINwz8mV8l.transferFrom.call(addressEH4AiGD, addressyIAqOBU, uintfYcX76H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintyEkKfX = BigInt("1810")
		const stringzisz2iE = "nBFV1fWS9QslkFpkLeDq8h252C0Jxqr1zqu8U99Fra"
		const stringFxklpNg = "wKUCxCA38vDX1SHFPi5tlH8UgcLSQ4Si5LmfkmrUHgU0vFFTmqSamou29fsfnH4ILlXW2q"
		const MARVELCOINzWAVnM = await MARVELCOIN.new(uintyEkKfX, stringzisz2iE, stringFxklpNg, {from: accounts[0]});
		const uinthgWPm5 = BigInt("249")
		const addressQTxqk9S = accounts[1]
		const uintOkDPySq = BigInt("1438")
		const address5OUxYF = accounts[4]
		const addressBZ8Y8jH = accounts[1]
		const boolGJamRV = await MARVELCOINzWAVnM.burnFrom.call(addressQTxqk9S, uinthgWPm5, {from: accounts[4]});
		const boolSz3sJm3 = await MARVELCOINzWAVnM.transferFrom.call(addressBZ8Y8jH, address5OUxYF, uintOkDPySq, {from: accounts[3]});

		await expect(MARVELCOINzWAVnM.burnFrom.call(addressQTxqk9S, uinthgWPm5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintsUNDYYv = BigInt("1840")
		const stringYdMlPPi = "rvWtCCkgCpLt8vsIg6OFvKtDetTrweF3kTIUIJyGVNlqLeOVNN8k2WXn0PlCufNNyCRQbz"
		const stringQmgjZI = "5z1cGwoccQOF9KeEJbRN8rKSO6Fcj0zvbMGDsTRdWBbJmQvlFbrnweJSNTB2uBT"
		const MARVELCOINGbVotM0 = await MARVELCOIN.new(uintsUNDYYv, stringYdMlPPi, stringQmgjZI, {from: "0x0000000000000000000000000000000000000001"});
		const uintlAztFJt = BigInt("1865")
		const uintViC2pOV = BigInt("229")
		const addressirKxT1Q = accounts[2]
		const addressPhGmAmn = accounts[2]
		const uintqdgpsL = BigInt("58")
		const addresstQpGPYo = accounts[0]
		const uintQc2jUKh = BigInt("180")
		const addressgfShKfo = accounts[4]
		const uintjj9tAsp = BigInt("1903")
		const uintKxYXeTY = BigInt("1277")
		const boolIZN8yIZ = await MARVELCOINGbVotM0.burn.call(uintlAztFJt, {from: accounts[3]});
		const bool1idWIC = await MARVELCOINGbVotM0.transferFrom.call(addressPhGmAmn, addressirKxT1Q, uintViC2pOV, {from: "0x0000000000000000000000000000000000000001"});
		const boolzScsygY = await MARVELCOINGbVotM0.approve.call(addresstQpGPYo, uintqdgpsL, {from: accounts[0]});
		const boolDP2SfKP = await MARVELCOINGbVotM0.transfer.call(addressgfShKfo, uintQc2jUKh, {from: accounts[4]});
		const boolxMSycbo = await MARVELCOINGbVotM0.burn.call(uintjj9tAsp, {from: accounts[2]});
		const boolFp7ioS7 = await MARVELCOINGbVotM0.burn.call(uintKxYXeTY, {from: accounts[4]});
	});
})