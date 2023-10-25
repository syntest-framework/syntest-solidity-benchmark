const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintXEuetL3 = BigInt("745")
		const stringJGg4aSU = "XEkqUWEGCxOeR4FZRofWJOiYYDjVxvFFC7N4wRRqem6ohN0M2fUJN32debwOBIbz77uemdMTVdHS2XsPPIv8bQIRlH"
		const stringHDee0P7 = "fkI2jRVnq6LEgR1Sm2ojgMDMxjk0Yb1IFUhYoxpB"
		const uintA32OoJ9 = BigInt("1375")
		const TetherToken4CUMvi = await TetherToken.new(uintXEuetL3, stringJGg4aSU, stringHDee0P7, uintA32OoJ9, {from: accounts[3]});
		const uintLFOfPu9 = BigInt("580")
		const uintBvIzjgb = BigInt("288")
		const addresstjAaL6B = accounts[1]
		const addressoobKVqt = accounts[1]
		const uintFobK5aX = BigInt("631")
		const uintC1h5wv0 = await TetherToken4CUMvi.totalSupply.call({from: accounts[2]});
//		const uintZmZyGZH = await TetherToken4CUMvi.redeem.call(uintLFOfPu9, {from: accounts[4]});
//		const uintxWUGnit = await TetherToken4CUMvi.totalSupply.call({from: accounts[4]});
//		const addressglDBZ1w = await TetherToken4CUMvi.transferFrom.call(addressoobKVqt, addresstjAaL6B, uintBvIzjgb, {from: accounts[1]});
//		const uintlOoD9Og = await TetherToken4CUMvi.issue.call(uintFobK5aX, {from: accounts[1]});

		assert.equal(uintC1h5wv0, BigInt("745"))
		await expect(TetherToken4CUMvi.redeem.call(uintLFOfPu9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqYfaYb9 = BigInt("1621")
		const stringuWgvrJa = "Y8sx2LPQEgoeEnHAe5sO7Eu2JeXYo"
		const stringKdKPLyR = "A38WOhha9PPW2HdQUTDp2kystaUVr1eqevBwXYvP59RYOZnxxTcI8lIULdfSUYf"
		const uintKaHJbZ8 = BigInt("381")
		const TetherTokenDDPZPxm = await TetherToken.new(uintqYfaYb9, stringuWgvrJa, stringKdKPLyR, uintKaHJbZ8, {from: accounts[1]});
		const addressBSXWU42 = accounts[3]
		const uintD5PedlX = BigInt("721")
		const uintJGTidzE = BigInt("1814")
		const addresswVi9SdE = accounts[1]
		const uinttFTw4Ef = await TetherTokenDDPZPxm.balanceOf.call(addressBSXWU42, {from: accounts[2]});
		const uintqqAfjC7 = await TetherTokenDDPZPxm.totalSupply.call({from: accounts[0]});
//		const uintbMOIrLW = await TetherTokenDDPZPxm.redeem.call(uintD5PedlX, {from: accounts[5]});
//		const addressshf1Nwu = await TetherTokenDDPZPxm.approve.call(addresswVi9SdE, uintJGTidzE, {from: accounts[1]});

		assert.equal(uintqqAfjC7, BigInt("1621"))
		assert.equal(uinttFTw4Ef, BigInt("0"))
		await expect(TetherTokenDDPZPxm.redeem.call(uintD5PedlX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintdaTDBNC = BigInt("820")
		const stringK4R4IIT = "NXZyUdDK"
		const stringb6guszR = "VLf8PuUXVZj6eHlYnaiPKZCQUgBbrMBauGopp7a5lKXQWuhJ2kMom8fC"
		const uintfqeTfoy = BigInt("856")
		const TetherTokenWweEFEk = await TetherToken.new(uintdaTDBNC, stringK4R4IIT, stringb6guszR, uintfqeTfoy, {from: accounts[5]});
		const addressRuJZLOQ = accounts[4]
		const uintN0XpLuO = BigInt("1265")
		const address3Ky1jd = accounts[4]
		const uinta6rWKWn = BigInt("71")
		const uintwXkcUpR = BigInt("614")
		const addressA7QlPWj = accounts[4]
//		const addresstpWfeD = await TetherTokenWweEFEk.deprecate.call(addressRuJZLOQ, {from: accounts[1]});
//		const addressjvlfTJ7 = await TetherTokenWweEFEk.approve.call(address3Ky1jd, uintN0XpLuO, {from: accounts[4]});
//		const uintqBEB1tg = await TetherTokenWweEFEk.issue.call(uinta6rWKWn, {from: accounts[0]});
//		const addressjOBAGJS = await TetherTokenWweEFEk.transfer.call(addressA7QlPWj, uintwXkcUpR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenWweEFEk.deprecate.call(addressRuJZLOQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintwOhvxvr = BigInt("1098")
		const stringSIElUXD = "0YHi5uHQaVT"
		const stringOvIju2j = "7mKU4cWAoEnEblWp3q95fhyx1yoq9NxiyqnKU3mXYw3iz8dHI44qBRC9KN6s3QwDQz8tTC8v3cixhodhNtwtgKq66C"
		const uintyz6wqUA = BigInt("1879")
		const TetherTokenXivG963 = await TetherToken.new(uintwOhvxvr, stringSIElUXD, stringOvIju2j, uintyz6wqUA, {from: accounts[1]});
		const uintvieMjhV = BigInt("143")
		const uintyKEaT6 = BigInt("881")
		const uintw3Hvlno = BigInt("572")
		const addressZycT4hW = accounts[3]
		const uints1gDnGU = BigInt("1715")
		const addressvXSks75 = accounts[2]
		const addressASdlibs = accounts[0]
		const uintMI67OxW = BigInt("1255")
		const uintEeXnbmA = BigInt("1517")
//		const uintrxed22q = await TetherTokenXivG963.setParams.call(uintyKEaT6, uintvieMjhV, {from: accounts[4]});
//		const uintbBks5wO = await TetherTokenXivG963.redeem.call(uintw3Hvlno, {from: accounts[3]});
//		const addresseybumN6 = await TetherTokenXivG963.deprecate.call(addressZycT4hW, {from: accounts[1]});
//		const addressOujB1yw = await TetherTokenXivG963.transferFrom.call(addressASdlibs, addressvXSks75, uints1gDnGU, {from: accounts[2]});
//		const uinthjAJH7 = await TetherTokenXivG963.setParams.call(uintEeXnbmA, uintMI67OxW, {from: accounts[1]});

		await expect(TetherTokenXivG963.setParams.call(uintyKEaT6, uintvieMjhV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintvB1AqLa = BigInt("1055")
		const stringFyUGzLI = "7fXdBVXV7Sc5WHWgE8i"
		const stringC3pNyD8 = "f67oeBcKeVQPkxxTB4xuabWOiHL4sMspdIPFhNsWd1ZEaRWBEXjbDjaQx2wRbiImMv788qvCNcqIhc"
		const uintF8SqbsZ = BigInt("1857")
		const TetherTokenlBLUKa6 = await TetherToken.new(uintvB1AqLa, stringFyUGzLI, stringC3pNyD8, uintF8SqbsZ, {from: accounts[5]});
		const addressafrNGe7 = accounts[0]
		const addressPOhqTG4 = accounts[5]
		const addressf6OOGd1 = accounts[2]
		const addressLRi3dO6 = accounts[1]
		const uintwMSs5i = await TetherTokenlBLUKa6.allowance.call(addressPOhqTG4, addressafrNGe7, {from: accounts[3]});
		const uintQOKnhfz = await TetherTokenlBLUKa6.balanceOf.call(addressf6OOGd1, {from: accounts[0]});
		const uintUO1CzWQ = await TetherTokenlBLUKa6.balanceOf.call(addressLRi3dO6, {from: accounts[1]});

		assert.equal(uintQOKnhfz, BigInt("0"))
		assert.equal(uintUO1CzWQ, BigInt("0"))
		assert.equal(uintwMSs5i, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintpM6H6E8 = BigInt("574")
		const stringVub91I = "buwIbrfHnWcjd2uRC3BiJru2"
		const stringEYDVqVg = "vfVL0kGcJ"
		const uint4hg47c = BigInt("1806")
		const TetherTokenIdB1eKU = await TetherToken.new(uintpM6H6E8, stringVub91I, stringEYDVqVg, uint4hg47c, {from: accounts[0]});
		const uintaqEZ1wj = BigInt("1981")
		const addressZuHewv = accounts[1]
		const addressT4HxWFE = accounts[3]
		const uintNJONSWP = BigInt("766")
		const addressEpqST5Q = accounts[1]
		const uintkcufcIR = BigInt("2008")
		const uintHZjHzCI = await TetherTokenIdB1eKU.totalSupply.call({from: accounts[2]});
//		const addressCnM0V3 = await TetherTokenIdB1eKU.transferFrom.call(addressT4HxWFE, addressZuHewv, uintaqEZ1wj, {from: accounts[1]});
//		const addressdCBr4nY = await TetherTokenIdB1eKU.approve.call(addressEpqST5Q, uintNJONSWP, {from: accounts[2]});
//		const uintudF2iDW = await TetherTokenIdB1eKU.issue.call(uintkcufcIR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHZjHzCI, BigInt("574"))
		await expect(TetherTokenIdB1eKU.transferFrom.call(addressT4HxWFE, addressZuHewv, uintaqEZ1wj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintdG8TXG8 = BigInt("1212")
		const stringLUayLkz = "9hmCtJtAAcji0IxuLn4PaMTzhJBXMWMLjwRqiLQVHgu"
		const stringbIPcOAS = "Qw4PjK5bsYRAbMGrATDpL8HcS5QNOGwKoI"
		const uintdq7gjJH = BigInt("1484")
		const TetherTokenJ2NapVA = await TetherToken.new(uintdG8TXG8, stringLUayLkz, stringbIPcOAS, uintdq7gjJH, {from: accounts[2]});
		const addressj5AMKzI = accounts[0]
		const uintusTNZ42 = BigInt("1375")
		const addressrqtNc5C = accounts[4]
		const uintYnF1RxJ = BigInt("1825")
		const uintA76yqfa = BigInt("957")
		const uintLIEGSo = await TetherTokenJ2NapVA.balanceOf.call(addressj5AMKzI, {from: accounts[4]});
		const addressHO78TP = await TetherTokenJ2NapVA.approve.call(addressrqtNc5C, uintusTNZ42, {from: accounts[3]});
//		const uintjbxSkQH = await TetherTokenJ2NapVA.redeem.call(uintYnF1RxJ, {from: accounts[4]});
//		const uintsESHatI = await TetherTokenJ2NapVA.totalSupply.call({from: accounts[2]});
//		const uintp2pS73G = await TetherTokenJ2NapVA.redeem.call(uintA76yqfa, {from: accounts[2]});

		assert.equal(uintLIEGSo, BigInt("0"))
		await expect(TetherTokenJ2NapVA.redeem.call(uintYnF1RxJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlPZ1xFS = BigInt("1216")
		const stringeKGsXZl = "UXVp2nHXyb8doqH2"
		const stringC8CdzsG = "2clLpXTyLLpFtzKQD7HVYRIJTn2LouJgpvxvGdAzC3m1U9aLVNlCFLaD5OM7MGBCOcc7uupnwyjQPw0LFCK9pDtE4KN6LJS9rM"
		const uints4ijAI2 = BigInt("305")
		const TetherToken713jVC = await TetherToken.new(uintlPZ1xFS, stringeKGsXZl, stringC8CdzsG, uints4ijAI2, {from: accounts[1]});
		const uintt01KoQ = BigInt("1056")
		const addressSNoUKan = "0x0000000000000000000000000000000000000001"
//		const uintVZit4o = await TetherToken713jVC.issue.call(uintt01KoQ, {from: accounts[4]});
//		const uintHg5saqc = await TetherToken713jVC.balanceOf.call(addressSNoUKan, {from: accounts[1]});

		await expect(TetherToken713jVC.issue.call(uintt01KoQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintIGepOU0 = BigInt("1216")
		const stringeKGsXZl = "UXVp2nHXyb8doqH2"
		const stringC8CdzsG = "2clLpXTyLLpFtzKQD7HVYRIJTn2LouJgpvxvGdAzC3m1U9aLVNlCFLaD5OM7MGBCOcc7uupnwyjQPw0LFCK9pDtE4KN6LJS9rM"
		const uinthXkN4C5 = BigInt("305")
		const TetherToken713jVC = await TetherToken.new(uintIGepOU0, stringeKGsXZl, stringC8CdzsG, uinthXkN4C5, {from: accounts[1]});
		const uintk72w7Cn = BigInt("256")
		const addressKYOjSDW = "0x0000000000000000000000000000000000000001"
		const addressiHoaqS4 = "0x0000000000000000000000000000000000000001"
		const uintipliIAs = BigInt("1506")
//		const addressNELddAw = await TetherToken713jVC.transfer.call(addressKYOjSDW, uintk72w7Cn, {from: accounts[3]});
//		const uintHg5saqc = await TetherToken713jVC.balanceOf.call(addressiHoaqS4, {from: accounts[1]});
//		const uintgOrv12 = await TetherToken713jVC.redeem.call(uintipliIAs, {from: accounts[4]});

		await expect(TetherToken713jVC.transfer.call(addressKYOjSDW, uintk72w7Cn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJ5hNXz3 = BigInt("1216")
		const stringeKGsXZl = "UXVp2nHXyb8doqH2"
		const stringC8CdzsG = "2clLpXTyLLpFtzKQD7HVYRIJTn2LouJgpvxvGdAzC3m1U9aLVNlCFLaD5OM7MGBCOcc7uupnwyjQPw0LFCK9pDtE4KN6LJS9rM"
		const uintHc1Rr7P = BigInt("305")
		const TetherToken713jVC = await TetherToken.new(uintJ5hNXz3, stringeKGsXZl, stringC8CdzsG, uintHc1Rr7P, {from: accounts[1]});
		const addressATYxrC2 = "0x00000000000000000000000000000000000000-1"
		const uintFw3OlC = BigInt("810")
		const addressfdi5drZ = accounts[0]
		const uintf1RBkwE = BigInt("1475")
		const addressRkOHXQm = accounts[0]
//		const uintHg5saqc = await TetherToken713jVC.balanceOf.call(addressATYxrC2, {from: accounts[1]});
//		const addressA3tuyM = await TetherToken713jVC.approve.call(addressfdi5drZ, uintFw3OlC, {from: accounts[0]});
//		const addressD0GLxt = await TetherToken713jVC.approve.call(addressRkOHXQm, uintf1RBkwE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherToken713jVC.balanceOf.call(addressATYxrC2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uints4xG1VL = BigInt("964")
		const stringlOIPKrc = "VIs1Uj3kshzKCqnjTp7oCqMMXV"
		const stringSDaoSzN = "Givzc3ylXoGqv5RUg7mlQ5yEaEMr"
		const uintqH9PRj5 = BigInt("1654")
		const TetherTokenvMGFHtA = await TetherToken.new(uints4xG1VL, stringlOIPKrc, stringSDaoSzN, uintqH9PRj5, {from: "0x0000000000000000000000000000000000000001"});
		const uintav2J9E4 = BigInt("1454")
		const uintDQC20Yy = BigInt("804")
		const uintAs5lRhq = await TetherTokenvMGFHtA.totalSupply.call({from: accounts[3]});
		const uintQI6EHfV = await TetherTokenvMGFHtA.setParams.call(uintDQC20Yy, uintav2J9E4, {from: accounts[1]});
	});
})