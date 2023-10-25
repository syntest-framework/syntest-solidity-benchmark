const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressyoJ1AVo = accounts[2]
		const BAEPnQsyUM = await BAE.new(addressyoJ1AVo, {from: accounts[3]});
		const uintxb5tgbR = BigInt("50")
		const uintp9Mrlu = BigInt("1727")
		const uintd3qNXoW = BigInt("193")
		const uintWF5iNrR = BigInt("1678")
		const uintH36SDRJ = BigInt("1141")
		const uinty83R8sg = BigInt("302")
		const uintuqUkvWI = BigInt("1139")
		const uinteJHLsVj = BigInt("1262")
		const uintEpmfkVM = BigInt("583")
		const uintNqPMD1j = BigInt("1499")
		const uintQ3m7tLc = BigInt("155")
		const uinthHvFZG = BigInt("1914")
		const uintlLPj6jI = BigInt("332")
		const uintcB2VQmi = BigInt("684")
		const uint256L8OTRgU = await BAEPnQsyUM.createAuction.call(uintWF5iNrR, uintd3qNXoW, uintp9Mrlu, uintxb5tgbR, {from: accounts[1]});
		const uint256bcG5VyA = await BAEPnQsyUM.createAuction.call(uinteJHLsVj, uintuqUkvWI, uinty83R8sg, uintH36SDRJ, {from: accounts[2]});
		const uint256idRrNgA = await BAEPnQsyUM.createAuction.call(uinthHvFZG, uintQ3m7tLc, uintNqPMD1j, uintEpmfkVM, {from: accounts[0]});
		const uint256LvPKBeh = await BAEPnQsyUM.setAuctionFee.call(uintlLPj6jI, {from: accounts[2]});
		const uint256XUR6O2W = await BAEPnQsyUM.changePrintFee.call(uintcB2VQmi, {from: accounts[4]});

		await expect(BAEPnQsyUM.createAuction.call(uintWF5iNrR, uintd3qNXoW, uintp9Mrlu, uintxb5tgbR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresswNqNVi = accounts[2]
		const BAEMOz7WAb = await BAE.new(addresswNqNVi, {from: "0x0000000000000000000000000000000000000001"});
		const uintNiu7qvn = BigInt("1577")
		const uintXhb7lVA = BigInt("482")
		const uintsE88m1c = BigInt("793")
		const uintDubBnci = BigInt("307")
		const uintCITmNt = BigInt("254")
		const uintJPlp9zX = BigInt("1696")
		const uintnx0UL53 = BigInt("1934")
		const uintSraeajv = BigInt("1703")
		const uintY5LerBO = BigInt("1867")
		const uint8DH5Kh = BigInt("1442")
		const uint256n1GsaP = await BAEMOz7WAb.bid.call(uintNiu7qvn, {from: accounts[4]});
		const uint256MVxE2QZ = await BAEMOz7WAb.createAuction.call(uintCITmNt, uintDubBnci, uintsE88m1c, uintXhb7lVA, {from: accounts[3]});
		const uint256Ro0MxpC = await BAEMOz7WAb.buy.call(uintJPlp9zX, {from: accounts[1]});
		const uint256USanWu = await BAEMOz7WAb.createAuction.call(uint8DH5Kh, uintY5LerBO, uintSraeajv, uintnx0UL53, {from: accounts[2]});
	});

	it('test for BAE', async () => {
		const addressBUGlvef = "0x0000000000000000000000000000000000000001"
		const BAEGQ89Sr1 = await BAE.new(addressBUGlvef, {from: accounts[2]});
		const uintLPIgSJ = BigInt("195")
		const uintlqZTiYb = BigInt("434")
		const uinteANeg9t = BigInt("1980")
		const uintXS6isus = BigInt("535")
		const uintFbNpmJ = BigInt("452")
		const uintpcGA77F = BigInt("52")
		const uintn1yDqJb = BigInt("777")
		const uintFa4RNgY = BigInt("1232")
		const uintOqKzJXu = BigInt("932")
		const uintvMEC9XO = BigInt("1814")
		const uintn99lLGQ = BigInt("1225")
		const uintKdSWvSO = BigInt("1434")
		const uintKWfUxXL = BigInt("605")
		const uintkt8xIXn = BigInt("1951")
		const uintKXisfQa = BigInt("1920")
		const uint256QJcBx4G = await BAEGQ89Sr1.buy.call(uintLPIgSJ, {from: accounts[5]});
		const uint256nqI5eLK = await BAEGQ89Sr1.createAuction.call(uintFbNpmJ, uintXS6isus, uinteANeg9t, uintlqZTiYb, {from: accounts[3]});
		const uint256RZUDVYH = await BAEGQ89Sr1.resetAuction.call(uintFa4RNgY, uintn1yDqJb, uintpcGA77F, {from: accounts[1]});
		const uint256JSFkiS0 = await BAEGQ89Sr1.resetAuction.call(uintn99lLGQ, uintvMEC9XO, uintOqKzJXu, {from: accounts[3]});
		const uint256yBc4orN = await BAEGQ89Sr1.setAuctionFee.call(uintKdSWvSO, {from: accounts[2]});
		const uint256iF7ZTnr = await BAEGQ89Sr1.resetAuction.call(uintKXisfQa, uintkt8xIXn, uintKWfUxXL, {from: accounts[0]});

		await expect(BAEGQ89Sr1.buy.call(uintLPIgSJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressLqnsbNQ = accounts[4]
		const BAEdgvfnYI = await BAE.new(addressLqnsbNQ, {from: accounts[4]});
		const uintnhEWKWK = BigInt("189")
		const uintEL41WVE = BigInt("1361")
		const uintivvGOr1 = BigInt("1957")
		const uintmaay7mL = BigInt("1675")
		const uintFMQLkQh = BigInt("1316")
		const uintSHAbJw1 = BigInt("867")
		const uintEW8B9MX = BigInt("1983")
		const uinty7hTY38 = BigInt("1677")
		const uintc4aDZPh = BigInt("1253")
		const uintOHRIPtk = BigInt("1791")
		const uint256mJF0UA = await BAEdgvfnYI.concludeAuction.call(uintnhEWKWK, {from: accounts[3]});
		const uint256kOv447a = await BAEdgvfnYI.createAuction.call(uintFMQLkQh, uintmaay7mL, uintivvGOr1, uintEL41WVE, {from: accounts[0]});
		const uint256weC9cf9 = await BAEdgvfnYI.bid.call(uintSHAbJw1, {from: accounts[2]});
		const uint256ctU6Ifo = await BAEdgvfnYI.buy.call(uintEW8B9MX, {from: accounts[4]});
		const uint256FcKKQTq = await BAEdgvfnYI.resetAuction.call(uintOHRIPtk, uintc4aDZPh, uinty7hTY38, {from: accounts[4]});

		await expect(BAEdgvfnYI.concludeAuction.call(uintnhEWKWK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressy5iscI = accounts[0]
		const BAEfMlZ4xG = await BAE.new(addressy5iscI, {from: accounts[5]});
		const uintwiz8UWI = BigInt("1828")
		const uintgIYVgHJ = BigInt("808")
		const uinturFztrc = BigInt("1534")
		const uintxUdXJqU = BigInt("958")
		const uintMHWqWJf = BigInt("1106")
		const uintc68Irh7 = BigInt("1198")
		const uint256chTKQ3 = await BAEfMlZ4xG.setAuctionFee.call(uintwiz8UWI, {from: accounts[0]});
		const uint256EwlJgn = await BAEfMlZ4xG.createAuction.call(uintMHWqWJf, uintxUdXJqU, uinturFztrc, uintgIYVgHJ, {from: accounts[4]});
		const uint256KScadPL = await BAEfMlZ4xG.buy.call(uintc68Irh7, {from: accounts[2]});

		await expect(BAEfMlZ4xG.setAuctionFee.call(uintwiz8UWI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressYvMju5r = accounts[3]
		const BAEP0rnsk = await BAE.new(addressYvMju5r, {from: accounts[2]});
		const uintJ87hOa = BigInt("1149")
		const uintlilL6BD = BigInt("356")
		const uinttsbDrBv = BigInt("172")
		const uint256BAkXCHr = await BAEP0rnsk.bid.call(uintJ87hOa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256A4aLYKM = await BAEP0rnsk.changePrintFee.call(uintlilL6BD, {from: accounts[2]});
		const uint256ulWk4rE = await BAEP0rnsk.setAuctionFee.call(uinttsbDrBv, {from: accounts[3]});

		await expect(BAEP0rnsk.bid.call(uintJ87hOa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressZckKcyi = accounts[2]
		const BAEH9tgaRu = await BAE.new(addressZckKcyi, {from: accounts[1]});
		const uintjNCyjYm = BigInt("1564")
		const uintKHZ0XVu = BigInt("227")
		const uintLrnDnRF = BigInt("1212")
		const uintLVyWhA = BigInt("56")
		const uinteaVwHJ4 = BigInt("1255")
		const uintM2mTlqN = BigInt("885")
		const uintBNDuWfr = BigInt("1467")
		const uintNXYg4Qo = BigInt("1011")
		const uintLi7szID = BigInt("147")
		const uintDwbSuk9 = BigInt("1894")
		const uint256vz8Q6Wb = await BAEH9tgaRu.resetAuction.call(uintLrnDnRF, uintKHZ0XVu, uintjNCyjYm, {from: accounts[3]});
		const uint256hTo39S = await BAEH9tgaRu.createAuction.call(uintBNDuWfr, uintM2mTlqN, uinteaVwHJ4, uintLVyWhA, {from: accounts[0]});
		const uint256Fj1LQF = await BAEH9tgaRu.setAuctionFee.call(uintNXYg4Qo, {from: accounts[3]});
		const uint256fCEfWVR = await BAEH9tgaRu.setAuctionFee.call(uintLi7szID, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mYcr95R = await BAEH9tgaRu.bid.call(uintDwbSuk9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEH9tgaRu.resetAuction.call(uintLrnDnRF, uintKHZ0XVu, uintjNCyjYm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})