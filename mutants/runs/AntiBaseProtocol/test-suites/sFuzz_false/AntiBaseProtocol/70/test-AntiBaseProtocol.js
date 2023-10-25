const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringnGhQNTb = "fPgEnfWDDb"
		const stringrzdDRM4 = "Bfuoxz8QDUxZnlJBPiV4RqK"
		const uintbIil6nq = BigInt("207")
		const AntiBaseProtocolw88mGxC = await AntiBaseProtocol.new(stringnGhQNTb, stringrzdDRM4, uintbIil6nq, {from: accounts[5]});
		const uintWhRicEo = BigInt("1862")
		const addressRitpbDt = accounts[4]
		const uintDX8w3cs = BigInt("924")
		const addressXf1YYdg = await AntiBaseProtocolw88mGxC.burnFrom.call(addressRitpbDt, uintWhRicEo, {from: accounts[4]});
		const uint256elHMiys = await AntiBaseProtocolw88mGxC.burn.call(uintDX8w3cs, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEbWGRo = await AntiBaseProtocol.new({from: accounts[4]});
		const uintF2l7AsC = BigInt("1919")
		const addressrROk6l = accounts[0]
		const uintZ52ClXA = BigInt("1555")
		const addressfndEOHb = accounts[0]
		const addressAEajuCu = accounts[2]
		const uintl50XuLz = BigInt("1632")
		const uint8ycnmax5 = await AntiBaseProtocolEbWGRo.decimals.call({from: accounts[0]});
		const addressB9ZOgVE = await AntiBaseProtocolEbWGRo._burnFrom.call(addressrROk6l, uintF2l7AsC, {from: accounts[2]});
		const addressl7PE7ZP = await AntiBaseProtocolEbWGRo._burn.call(addressfndEOHb, uintZ52ClXA, {from: accounts[1]});
		const uint256wv5I3ZB = await AntiBaseProtocolEbWGRo.balanceOf.call(addressAEajuCu, {from: accounts[0]});
		const uint256kXTe9Ic = await AntiBaseProtocolEbWGRo.findRewardFee.call(uintl50XuLz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8ycnmax5, BigInt("18"))
		await expect(AntiBaseProtocolEbWGRo._burnFrom.call(addressrROk6l, uintF2l7AsC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolH38vvPZ = await AntiBaseProtocol.new({from: accounts[3]});
		const addressxLZtCXF = accounts[1]
		const uintCAks43E = BigInt("1210")
		const addressmzARcPt = accounts[4]
		const addresso8uwOiD = await AntiBaseProtocolH38vvPZ.transferOwnership.call(addressxLZtCXF, {from: accounts[0]});
		const boolL57Nsxg = await AntiBaseProtocolH38vvPZ.increaseAllowance.call(addressmzARcPt, uintCAks43E, {from: accounts[5]});
		const stringxPLIuDH = await AntiBaseProtocolH38vvPZ.name.call({from: accounts[4]});
		await AntiBaseProtocolH38vvPZ.onlyOwner.call({from: accounts[2]});

		await expect(AntiBaseProtocolH38vvPZ.transferOwnership.call(addressxLZtCXF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCZ33gyc = await AntiBaseProtocol.new({from: accounts[1]});
		const uintTbovKBY = BigInt("978")
		const addressCqDAD5T = accounts[2]
		const uintB4iFnkq = BigInt("1701")
		const addressnBAtdDA = accounts[2]
		const uint256ohOIWS = await AntiBaseProtocolCZ33gyc.burn.call(uintTbovKBY, {from: accounts[4]});
		const addressPWPvc8s = await AntiBaseProtocolCZ33gyc.transferOwnership.call(addressCqDAD5T, {from: accounts[1]});
		const boolpZkgtPc = await AntiBaseProtocolCZ33gyc.decreaseAllowance.call(addressnBAtdDA, uintB4iFnkq, {from: accounts[4]});

		await expect(AntiBaseProtocolCZ33gyc.burn.call(uintTbovKBY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolo9QnDO = await AntiBaseProtocol.new({from: accounts[0]});
		const uintQPtPyYS = BigInt("1137")
		const addresskz4DyRa = accounts[0]
		const uintc13WyIi = BigInt("1059")
		const addressBDb76bZ = accounts[4]
		const addressRSA8uhq = accounts[2]
		const uintOnhV0vF = BigInt("1243")
		const boolgJZbm5N = await AntiBaseProtocolo9QnDO.decreaseAllowance.call(addresskz4DyRa, uintQPtPyYS, {from: accounts[4]});
		const addressWrcvp8F = await AntiBaseProtocolo9QnDO._approve.call(addressRSA8uhq, addressBDb76bZ, uintc13WyIi, {from: accounts[0]});
		const uint256i9R7dn1 = await AntiBaseProtocolo9QnDO.findRewardFee.call(uintOnhV0vF, {from: accounts[3]});

		await expect(AntiBaseProtocolo9QnDO.decreaseAllowance.call(addresskz4DyRa, uintQPtPyYS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolXcC4Lz9 = await AntiBaseProtocol.new({from: accounts[3]});
		const addressEtX6sL0 = await AntiBaseProtocolXcC4Lz9.owner.call({from: accounts[5]});
		await AntiBaseProtocolXcC4Lz9.renounceOwnership.call({from: accounts[2]});
		await AntiBaseProtocolXcC4Lz9.onlyOwner.call({from: accounts[2]});

		assert.equal(addressEtX6sL0, 0xC26C736a2dC678c979F9015c26FdE78530700d17)
		await expect(AntiBaseProtocolXcC4Lz9.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolXoCN7oj = await AntiBaseProtocol.new({from: accounts[2]});
		const uintVUsdq0d = BigInt("504")
		const addressgOjN7b = accounts[5]
		const uintUIVIBng = BigInt("1754")
		const addresscw3wmiB = accounts[2]
		const stringBNr0YU = await AntiBaseProtocolXoCN7oj.symbol.call({from: accounts[1]});
		const booltTjjny3 = await AntiBaseProtocolXoCN7oj.increaseAllowance.call(addressgOjN7b, uintVUsdq0d, {from: accounts[1]});
		const addressPfBUh6W = await AntiBaseProtocolXoCN7oj._burn.call(addresscw3wmiB, uintUIVIBng, {from: accounts[2]});

		assert.equal(booltTjjny3, true)
		assert.equal(stringBNr0YU, "ABASE")
		await expect(AntiBaseProtocolXoCN7oj._burn.call(addresscw3wmiB, uintUIVIBng, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollsdysfy = await AntiBaseProtocol.new({from: accounts[4]});
		const uintysJ9tt5 = BigInt("391")
		const addressNybMKC0 = "0x0000000000000000000000000000000000000001"
		const uintakc9JCN = BigInt("1782")
		const addressPtfXEoN = accounts[5]
		const stringij4vWJz = await AntiBaseProtocollsdysfy.name.call({from: accounts[3]});
		const addressJEmKHyy = await AntiBaseProtocollsdysfy._burn.call(addressNybMKC0, uintysJ9tt5, {from: accounts[3]});
		const boolXTXmXKF = await AntiBaseProtocollsdysfy.transfer.call(addressPtfXEoN, uintakc9JCN, {from: accounts[0]});
		await AntiBaseProtocollsdysfy.onlyOwner.call({from: accounts[1]});
		const stringKb6b15c = await AntiBaseProtocollsdysfy.symbol.call({from: accounts[5]});

		assert.equal(stringij4vWJz, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocollsdysfy._burn.call(addressNybMKC0, uintysJ9tt5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintyUzW07t = BigInt("1796")
		const uintxykEcdy = BigInt("1302")
		const addressxLaut6v = accounts[4]
		const addressSQMNQ3 = accounts[3]
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintyUzW07t, {from: accounts[0]});
		const addressZoLb9QX = await AntiBaseProtocolBcglAI._mint.call(addressxLaut6v, uintxykEcdy, {from: accounts[0]});
		const addressHYJOpe = await AntiBaseProtocolBcglAI.transferOwnership.call(addressSQMNQ3, {from: accounts[4]});

		assert.equal(uint256SO2dIsi, BigInt("90"))
		await expect(AntiBaseProtocolBcglAI._mint.call(addressxLaut6v, uintxykEcdy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintqs9vC4P = BigInt("1796")
		const addressFLIJCIw = accounts[3]
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintqs9vC4P, {from: accounts[0]});
		const addressHYJOpe = await AntiBaseProtocolBcglAI.transferOwnership.call(addressFLIJCIw, {from: accounts[4]});

		assert.equal(uint256SO2dIsi, BigInt("90"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol7ourX6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintsW5QYB = BigInt("309")
		const addressepEnVe8 = accounts[1]
		const uintP4SNEv = BigInt("1153")
		const addressI1R4s04 = accounts[1]
		const uinttisBUF = BigInt("603")
		const addressdwSRTm = accounts[1]
		const uintnB5bvw8 = BigInt("1210")
		const addressrtbAmMW = accounts[3]
		const addressJDD5bjs = accounts[4]
		const boolpljfptO = await AntiBaseProtocol7ourX6.approve.call(addressepEnVe8, uintsW5QYB, {from: accounts[3]});
		const addressPWHFkeJ = await AntiBaseProtocol7ourX6.burnFrom.call(addressI1R4s04, uintP4SNEv, {from: accounts[0]});
		await AntiBaseProtocol7ourX6.requestGas.call({from: accounts[1]});
		const boolyiRep6s = await AntiBaseProtocol7ourX6.transfer.call(addressdwSRTm, uinttisBUF, {from: accounts[3]});
		const addressi4wABtA = await AntiBaseProtocol7ourX6.burnFrom.call(addressrtbAmMW, uintnB5bvw8, {from: accounts[1]});
		const uint256urf7vD = await AntiBaseProtocol7ourX6.balanceOf.call(addressJDD5bjs, {from: accounts[0]});

		assert.equal(boolpljfptO, true)
		await expect(AntiBaseProtocol7ourX6.burnFrom.call(addressI1R4s04, uintP4SNEv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintrNje2R = BigInt("1112")
		const addressfQaBP2m = accounts[2]
		const uintMbs21QF = BigInt("1796")
		const boolZNwniv = await AntiBaseProtocolBcglAI.transfer.call(addressfQaBP2m, uintrNje2R, {from: accounts[3]});
		const stringT3HCOa = await AntiBaseProtocolBcglAI.name.call({from: accounts[0]});
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintMbs21QF, {from: accounts[0]});

		await expect(AntiBaseProtocolBcglAI.transfer.call(addressfQaBP2m, uintrNje2R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintXrOUP4H = BigInt("1068")
		const addressjDnrGI4 = accounts[2]
		const addressRuMFJu3 = accounts[5]
		const uintLSUO3th = BigInt("827")
		const addressQdwk0qG = accounts[3]
		const uintegnHM0f = BigInt("1806")
		const boolU6pXvBJ = await AntiBaseProtocolBcglAI.transferFrom.call(addressRuMFJu3, addressjDnrGI4, uintXrOUP4H, {from: accounts[5]});
		const boolXA1iATn = await AntiBaseProtocolBcglAI.isOwner.call({from: accounts[1]});
		const addressztGn02w = await AntiBaseProtocolBcglAI.burnFrom.call(addressQdwk0qG, uintLSUO3th, {from: accounts[4]});
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintegnHM0f, {from: accounts[0]});

		await expect(AntiBaseProtocolBcglAI.transferFrom.call(addressRuMFJu3, addressjDnrGI4, uintXrOUP4H, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintv7YVEo = BigInt("569")
		const addressrnjgslR = accounts[4]
		const addressLOal1a3 = accounts[2]
		const uintbPex5ta = BigInt("1787")
		const uint256e0DmjyE = await AntiBaseProtocolBcglAI.totalSupply.call({from: accounts[4]});
		const addressUO6MIJ5 = await AntiBaseProtocolBcglAI._approve.call(addressLOal1a3, addressrnjgslR, uintv7YVEo, {from: accounts[0]});
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintbPex5ta, {from: accounts[0]});

		assert.equal(uint256e0DmjyE, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolBcglAI._approve.call(addressLOal1a3, addressrnjgslR, uintv7YVEo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolXkpJ24Z = await AntiBaseProtocol.new({from: accounts[2]});
		const addressWLdZAHE = accounts[3]
		const uint256yb6SrLd = await AntiBaseProtocolXkpJ24Z.balanceOf.call(addressWLdZAHE, {from: accounts[0]});
		const uint8LJNzSbk = await AntiBaseProtocolXkpJ24Z.decimals.call({from: accounts[2]});

		assert.equal(uint256yb6SrLd, BigInt("0"))
		assert.equal(uint8LJNzSbk, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintWW7g4Jp = BigInt("228")
		const addressSeKkjCa = accounts[1]
		const uintPProBP = BigInt("402")
		const boolDEs4TDq = await AntiBaseProtocolBcglAI.approve.call(addressSeKkjCa, uintWW7g4Jp, {from: accounts[3]});
		const uint256rh7ApLC = await AntiBaseProtocolBcglAI.findBurnFee.call(uintPProBP, {from: accounts[2]});
		const boolpVS1Z0c = await AntiBaseProtocolBcglAI.isOwner.call({from: accounts[0]});
		await AntiBaseProtocolBcglAI.onlyOwner.call({from: accounts[1]});

		assert.equal(boolDEs4TDq, true)
		assert.equal(boolpVS1Z0c, false)
		assert.equal(uint256rh7ApLC, BigInt("75"))
		await expect(AntiBaseProtocolBcglAI.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintmVq1kbF = BigInt("1705")
		const addressVEGrbi = accounts[1]
		const addressFjvzbNB = accounts[4]
		const address7wWzey = accounts[3]
		const uintN0ZvB4w = BigInt("197")
		const stringkIvcCVT = await AntiBaseProtocolBcglAI.name.call({from: accounts[3]});
		const boolpVS1Z0c = await AntiBaseProtocolBcglAI.isOwner.call({from: accounts[0]});
		const boolp6rSPYt = await AntiBaseProtocolBcglAI.transferFrom.call(addressFjvzbNB, addressVEGrbi, uintmVq1kbF, {from: "0x0000000000000000000000000000000000000001"});
		const addressA6CmyNu = await AntiBaseProtocolBcglAI.transferOwnership.call(address7wWzey, {from: accounts[0]});
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintN0ZvB4w, {from: accounts[0]});

		assert.equal(boolpVS1Z0c, false)
		assert.equal(stringkIvcCVT, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolBcglAI.transferFrom.call(addressFjvzbNB, addressVEGrbi, uintmVq1kbF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolHNpJng6 = await AntiBaseProtocol.new({from: accounts[3]});
		const addressMvUaEDd = accounts[2]
		const addressyvPrJo2 = accounts[3]
		const uintJUMiKAO = BigInt("131")
		const addresszRoIYjC = accounts[2]
		const addressXZs38MD = accounts[0]
		const addressTd0MpLa = accounts[0]
		const uint256VJakV1 = await AntiBaseProtocolHNpJng6.allowance.call(addressyvPrJo2, addressMvUaEDd, {from: accounts[2]});
		const boolVyYZc2x = await AntiBaseProtocolHNpJng6.approve.call(addresszRoIYjC, uintJUMiKAO, {from: accounts[2]});
		const uint256HjaNDH4 = await AntiBaseProtocolHNpJng6.allowance.call(addressTd0MpLa, addressXZs38MD, {from: accounts[4]});

		assert.equal(boolVyYZc2x, true)
		assert.equal(uint256HjaNDH4, BigInt("0"))
		assert.equal(uint256VJakV1, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uinteKJuEVX = BigInt("659")
		await AntiBaseProtocolBcglAI.renounceOwnership.call({from: accounts[4]});
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uinteKJuEVX, {from: accounts[0]});

		await expect(AntiBaseProtocolBcglAI.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYauTdWi = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressz8OtJRY = accounts[0]
		const uintSnqxuGR = BigInt("1822")
		const addressQxnuTNB = accounts[1]
		const addressxEh4z2b = "0x0000000000000000000000000000000000000001"
		const uint256zS93n2n = await AntiBaseProtocolYauTdWi.balanceOf.call(addressz8OtJRY, {from: accounts[1]});
		const booliIskAnX = await AntiBaseProtocolYauTdWi.transferFrom.call(addressxEh4z2b, addressQxnuTNB, uintSnqxuGR, {from: accounts[4]});
		const stringLSsvgJx = await AntiBaseProtocolYauTdWi.name.call({from: accounts[0]});
		await AntiBaseProtocolYauTdWi.renounceOwnership.call({from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBcglAI = await AntiBaseProtocol.new({from: accounts[4]});
		const uintAzBXTRb = BigInt("1093")
		const uintNuON5Lk = BigInt("362")
		const addressLbdlDpz = accounts[4]
		const uintQsidNMF = BigInt("46")
		const addressUSvmChU = accounts[1]
		const uint256SO2dIsi = await AntiBaseProtocolBcglAI.findRewardFee.call(uintAzBXTRb, {from: accounts[0]});
		const addressllvf4pc = await AntiBaseProtocolBcglAI.burnFrom.call(addressLbdlDpz, uintNuON5Lk, {from: accounts[3]});
		const addressI2ZB6X2 = await AntiBaseProtocolBcglAI.burnFrom.call(addressUSvmChU, uintQsidNMF, {from: accounts[4]});

		assert.equal(uint256SO2dIsi, BigInt("55"))
		await expect(AntiBaseProtocolBcglAI.burnFrom.call(addressLbdlDpz, uintNuON5Lk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})