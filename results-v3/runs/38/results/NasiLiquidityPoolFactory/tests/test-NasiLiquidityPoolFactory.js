const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressWe2utDs = "0x0000000000000000000000000000000000000001"
		const addressCWkdrj = accounts[2]
		const uintEmJp2Fz = BigInt("767")
		const uintCbkd2Zq = BigInt("1850")
		const NasiLiquidityPoolFactoryBA92pb0 = await NasiLiquidityPoolFactory.new(addressWe2utDs, addressCWkdrj, uintEmJp2Fz, uintCbkd2Zq, {from: accounts[1]});
		const addressd11LIcG = accounts[0]
		const addressDhjWJI6 = accounts[2]
		const addresswCssL5 = accounts[2]
		const uinthVLuS0A = BigInt("322")
		const addressMaLwqPG = accounts[5]
		const uint256YFN9js = await NasiLiquidityPoolFactoryBA92pb0.allowance.call(addressDhjWJI6, addressd11LIcG, {from: "0x0000000000000000000000000000000000000001"});
		const boolbK44HU = await NasiLiquidityPoolFactoryBA92pb0.isPauser.call(addresswCssL5, {from: "0x0000000000000000000000000000000000000001"});
		const boolFOHiagk = await NasiLiquidityPoolFactoryBA92pb0.increaseAllowance.call(addressMaLwqPG, uinthVLuS0A, {from: accounts[2]});
		await NasiLiquidityPoolFactoryBA92pb0.onlyOwner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvjrhlaj = "opaiiOsGRMVzET1Fw7vBkQ3yW4MnrHG0p5oudPk6Wq8pdzWlFr11TZLoLkPJ3Emihxe6qSwfzFO2"
		const stringb6grxX = "thV1kBWpE9mKcwgNw4NUCwqPwKbUQGPo7mIMz7TaHbu"
		const uintRklMbUm = BigInt("163")
		const NasiLiquidityPoolFactorygwzOdcV = await NasiLiquidityPoolFactory.new(stringvjrhlaj, stringb6grxX, uintRklMbUm, {from: accounts[2]});
		const uintw0O207t = BigInt("988")
		const addressLfKjkSb = accounts[3]
		const uint256V1wFkQe = await NasiLiquidityPoolFactorygwzOdcV.totalSupply.call({from: accounts[4]});
		const boolpKWnKAG = await NasiLiquidityPoolFactorygwzOdcV.increaseAllowance.call(addressLfKjkSb, uintw0O207t, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvaPhU4Q = "i5MftUbn51hYimLXbhErbKlNnPsB8PixRmvEC"
		const stringsxbFYNt = "VNNCx7erTr5OgMGGSer4AbVXKbXRz5Oyzf8M2BMhkE8SJWUeIaNqopNFg6Ohr3KPA5DE9AGT"
		const uintGIz4y2 = BigInt("246")
		const NasiLiquidityPoolFactory1z1mIU = await NasiLiquidityPoolFactory.new(stringvaPhU4Q, stringsxbFYNt, uintGIz4y2, {from: accounts[0]});
		const uintQJwm6Ps = BigInt("1321")
		const uintenuU39M = BigInt("446")
		const addressGaSNjEO = accounts[3]
		const uint256MtVtnEc = await NasiLiquidityPoolFactory1z1mIU.migrate.call(uintQJwm6Ps, {from: accounts[3]});
		const uint256Md062rN = await NasiLiquidityPoolFactory1z1mIU.burn.call(uintenuU39M, {from: accounts[2]});
		const uint25683XH3k = await NasiLiquidityPoolFactory1z1mIU.getCurrentVotes.call(addressGaSNjEO, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvj7WQmL = "V5GLClzMsQibf48U"
		const stringf6ax3H = "Bmgf673IBVP0sLDsMd6C3eAthQrWG42MSi903bTgvSY8HtkHu2l68fIIVMhiFb9jf36gqOTrT9nAG1Y4ggtbs2cxfoScpN1WB"
		const uintKPkNnM = BigInt("197")
		const NasiLiquidityPoolFactoryb97j3W1 = await NasiLiquidityPoolFactory.new(stringvj7WQmL, stringf6ax3H, uintKPkNnM, {from: accounts[3]});
		const addressLteecQ = accounts[1]
		const uintggZtjrc = BigInt("507")
		const addressJOtHBOl = accounts[4]
		const stringpn9HNq8 = await NasiLiquidityPoolFactoryb97j3W1.name.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryb97j3W1.renounceMinter.call({from: accounts[0]});
		const addressD1pvaBA = await NasiLiquidityPoolFactoryb97j3W1.setMigrator.call(addressLteecQ, {from: accounts[0]});
		const boolFdoJqUM = await NasiLiquidityPoolFactoryb97j3W1.decreaseAllowance.call(addressJOtHBOl, uintggZtjrc, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringIxvHrIC = "a"
		const stringfSgBm2C = "xGZdU8DAHGoi5m7aMDPlcUBWBOzAae"
		const uintuPVuwnE = BigInt("189")
		const NasiLiquidityPoolFactoryjxCTbdQ = await NasiLiquidityPoolFactory.new(stringIxvHrIC, stringfSgBm2C, uintuPVuwnE, {from: accounts[0]});
		const uintzATRfc3 = BigInt("466")
		const addressdUglMB = "0x0000000000000000000000000000000000000001"
		const uinthljyVCR = BigInt("1067")
		const addressv8BjfSW = "0x0000000000000000000000000000000000000001"
		const addressqc4IRa = accounts[2]
		const booluUfNnkT = await NasiLiquidityPoolFactoryjxCTbdQ.approve.call(addressdUglMB, uintzATRfc3, {from: accounts[1]});
		const boolWxFrMxo = await NasiLiquidityPoolFactoryjxCTbdQ.increaseAllowance.call(addressv8BjfSW, uinthljyVCR, {from: accounts[4]});
		const addressViyFC7A = await NasiLiquidityPoolFactoryjxCTbdQ.delegates.call(addressqc4IRa, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAmRHyP = "BB78T2M"
		const stringf3fFP5O = "nltu34ix4HsD4GpAklQ9IFwWeI8HNbT4sTrl4lWnjKsBjlBCgK3Sqb9w5xFbw6bgDOWzr8ObCQVKIAa"
		const uintwj9ec18 = BigInt("1")
		const NasiLiquidityPoolFactoryoMP4EHS = await NasiLiquidityPoolFactory.new(stringAmRHyP, stringf3fFP5O, uintwj9ec18, {from: accounts[3]});
		const addressu0xozOL = accounts[0]
		const addressLRswz36 = accounts[3]
		const uintuG7d7Kf = BigInt("888")
		const addressvNLKbwD = accounts[2]
		const addressMF9477g = await NasiLiquidityPoolFactoryoMP4EHS._delegate.call(addressLRswz36, addressu0xozOL, {from: accounts[0]});
		const uint256iWxWzyT = await NasiLiquidityPoolFactoryoMP4EHS.leaveStaking.call(uintuG7d7Kf, {from: "0x0000000000000000000000000000000000000001"});
		const addresspqYKQRC = await NasiLiquidityPoolFactoryoMP4EHS.transferOwnership.call(addressvNLKbwD, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryoMP4EHS.whenPaused.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrIsoG93 = "4dM1St78CQWKWqOaM6sOHoutvfe17c8sF1rjmWf1dwQO"
		const stringJdODv0 = "NyMsSzkN81xCNsOvY7TvMMLVLAbvFvuEEGUA5snygWg1Xi0W0tTbIHEkjtsoB5BDyXDFFdvcxbnQNEb1JKayJCuJg1"
		const uintYCijvwf = BigInt("243")
		const NasiLiquidityPoolFactoryFGNtrCP = await NasiLiquidityPoolFactory.new(stringrIsoG93, stringJdODv0, uintYCijvwf, {from: accounts[5]});
		const uintgkdreYj = BigInt("1141")
		const addressR42HIJG = accounts[0]
		const addresshwCcHo = accounts[4]
		const addressTJBkI3A = "0x0000000000000000000000000000000000000001"
		const addressFG82IF = accounts[3]
		const addressm9NirSf = accounts[1]
		const boolefIvXQ9 = await NasiLiquidityPoolFactoryFGNtrCP.decreaseAllowance.call(addressR42HIJG, uintgkdreYj, {from: accounts[2]});
		const addressZLzS26M = await NasiLiquidityPoolFactoryFGNtrCP.transferOwnership.call(addresshwCcHo, {from: accounts[0]});
		const uint256j0XIT9Q = await NasiLiquidityPoolFactoryFGNtrCP.allowance.call(addressFG82IF, addressTJBkI3A, {from: accounts[4]});
		const uint256X46FDHA = await NasiLiquidityPoolFactoryFGNtrCP.balanceOf.call(addressm9NirSf, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressnRgfZeo = accounts[0]
		const addressRrkaDXS = accounts[0]
		const uintaMJ8akm = BigInt("1657")
		const uintJMOsnWC = BigInt("580")
		const NasiLiquidityPoolFactoryQIbajoS = await NasiLiquidityPoolFactory.new(addressnRgfZeo, addressRrkaDXS, uintaMJ8akm, uintJMOsnWC, {from: "0x0000000000000000000000000000000000000001"});
		const uintNvT3XMp = BigInt("228")
		const addressneHvfUF = accounts[2]
		const addressl54YSKH = "0x0000000000000000000000000000000000000001"
		const uintsvUlRiW = BigInt("365")
		await NasiLiquidityPoolFactoryQIbajoS.unpause.call({from: accounts[3]});
		const boolSkPeLPl = await NasiLiquidityPoolFactoryQIbajoS.increaseAllowance.call(addressneHvfUF, uintNvT3XMp, {from: accounts[4]});
		const uint256qJrOtvV = await NasiLiquidityPoolFactoryQIbajoS.pendingNasi.call(uintsvUlRiW, addressl54YSKH, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringL4syPO = "UKR4uqF5N7"
		const stringNuA7xqT = "DAhNruKFFx8P7kW7R8b5b71tAcWuvqp1WxKRvV8mxWLUsM7Mg"
		const uintlfXQ3Ae = BigInt("78")
		const NasiLiquidityPoolFactorygZsSYd = await NasiLiquidityPoolFactory.new(stringL4syPO, stringNuA7xqT, uintlfXQ3Ae, {from: accounts[4]});
		const uintTL9SXvx = BigInt("1013")
		const uintK4hULH1 = BigInt("839")
		const uintW5zlqoO = BigInt("1433")
		const addressaABz5cQ = accounts[3]
		const addressZwWtbBx = accounts[0]
		const uintrz04KfH = BigInt("705")
		const uintvPk3v2r = BigInt("831")
		await NasiLiquidityPoolFactorygZsSYd.renounceOwnership.call({from: accounts[1]});
		const 
fByHVj1 = await NasiLiquidityPoolFactorygZsSYd._writeCheckpoint.call(addressaABz5cQ, uintW5zlqoO, uintK4hULH1, uintTL9SXvx, {from: accounts[3]});
		await NasiLiquidityPoolFactorygZsSYd.pause.call({from: accounts[1]});
		const addressCVf87PO = await NasiLiquidityPoolFactorygZsSYd.transferOwnership.call(addressZwWtbBx, {from: accounts[3]});
		const uint256IqRpFju = await NasiLiquidityPoolFactorygZsSYd.withdraw.call(uintvPk3v2r, uintrz04KfH, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringewPZKo = "exctgZeRHUmYILe6sQyKfeFcTlgAcWkIAkC863m4B1aJkycBRJEQSD77jzRU6l5MreECGvP78"
		const stringycsW8Jp = "z3RurBBD8XEHxxNqQJaFvKhWQrcu5"
		const uintPJZNLr7 = BigInt("19")
		const NasiLiquidityPoolFactorykCv4YdZ = await NasiLiquidityPoolFactory.new(stringewPZKo, stringycsW8Jp, uintPJZNLr7, {from: "0x0000000000000000000000000000000000000001"});
		const addressJfZaMoU = accounts[3]
		const uintGaXgzVB = BigInt("1869")
		const addresszAj6A6E = accounts[0]
		const addressajTKi6l = await NasiLiquidityPoolFactorykCv4YdZ.setMigrator.call(addressJfZaMoU, {from: accounts[2]});
		await NasiLiquidityPoolFactorykCv4YdZ.onlyPauser.call({from: accounts[5]});
		const booll1SuMnN = await NasiLiquidityPoolFactorykCv4YdZ.decreaseAllowance.call(addresszAj6A6E, uintGaXgzVB, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspnUwOTx = accounts[0]
		const addresseknoC3B = accounts[0]
		const uintsCQ9yz = BigInt("1867")
		const uintSNyiVdf = BigInt("442")
		const NasiLiquidityPoolFactorypqnhUJN = await NasiLiquidityPoolFactory.new(addresspnUwOTx, addresseknoC3B, uintsCQ9yz, uintSNyiVdf, {from: accounts[4]});
		const booljihSKcl = true
		const addressjPor6xz = accounts[1]
		const uinta9Blqg = BigInt("178")
		const uintKG88eDk = BigInt("1984")
		const addressfjfOMR = accounts[1]
		const address0MC26A = accounts[0]
		const uint256SW7USxC = await NasiLiquidityPoolFactorypqnhUJN.addLpToken.call(uinta9Blqg, addressjPor6xz, booljihSKcl, {from: accounts[3]});
		await NasiLiquidityPoolFactorypqnhUJN.onlyMinter.call({from: accounts[0]});
		const boold8bJuLT = await NasiLiquidityPoolFactorypqnhUJN.transferFrom.call(address0MC26A, addressfjfOMR, uintKG88eDk, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKoqHoc = accounts[1]
		const addressOzjrhfk = accounts[0]
		const uintsLtkT0 = BigInt("829")
		const uintvwYIWwg = BigInt("1082")
		const NasiLiquidityPoolFactorygMTbRTj = await NasiLiquidityPoolFactory.new(addressKoqHoc, addressOzjrhfk, uintsLtkT0, uintvwYIWwg, {from: accounts[0]});
		const uintYMfgD3r = BigInt("1351")
		const addressCvSqzot = accounts[0]
		const uint256F5xBzpt = await NasiLiquidityPoolFactorygMTbRTj.leaveStaking.call(uintYMfgD3r, {from: accounts[0]});
		await NasiLiquidityPoolFactorygMTbRTj.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const addressGMoXc7A = await NasiLiquidityPoolFactorygMTbRTj.dev.call(addressCvSqzot, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringORohQt0 = "8VJT2cFuDwPoeR2N3W79XV9ovd1X2LY1vuWDc9oH6RTbbT"
		const stringNsKInD9 = "73M"
		const uintUBUXMyx = BigInt("24")
		const NasiLiquidityPoolFactoryCmqoSV5 = await NasiLiquidityPoolFactory.new(stringORohQt0, stringNsKInD9, uintUBUXMyx, {from: "0x0000000000000000000000000000000000000001"});
		const addressTEytSJB = accounts[2]
		const uintfvClzIQ = BigInt("1461")
		const addressRUhDgkS = accounts[0]
		const addressRbSgP1n = accounts[4]
		const boolHQyoJLh = await NasiLiquidityPoolFactoryCmqoSV5.isPauser.call(addressTEytSJB, {from: accounts[2]});
		await NasiLiquidityPoolFactoryCmqoSV5.renounceMinter.call({from: accounts[4]});
		const uint256Koxarm = await NasiLiquidityPoolFactoryCmqoSV5.enterStaking.call(uintfvClzIQ, {from: accounts[0]});
		const boolOfn3uDb = await NasiLiquidityPoolFactoryCmqoSV5.isPauser.call(addressRUhDgkS, {from: accounts[0]});
		const uint256nwjWL95 = await NasiLiquidityPoolFactoryCmqoSV5.getCurrentVotes.call(addressRbSgP1n, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressuglozE = accounts[1]
		const addressOKB12YP = accounts[2]
		const uintnbXtvjF = BigInt("1498")
		const uintv6Ow6ti = BigInt("103")
		const NasiLiquidityPoolFactoryvKCovad = await NasiLiquidityPoolFactory.new(addressuglozE, addressOKB12YP, uintnbXtvjF, uintv6Ow6ti, {from: accounts[2]});
		const addresspKnxvqw = accounts[4]
		await NasiLiquidityPoolFactoryvKCovad.massUpdatePools.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryvKCovad.pause.call({from: accounts[1]});
		const boollpWLyKO = await NasiLiquidityPoolFactoryvKCovad.isPauser.call(addresspKnxvqw, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFwEOYo2 = "hG7MJFOPGTpbXciC2UXwccV5cU4bmHJP8GM4hnaI2kR9iPtCalzPDMgLI8nCcvPUAqUrujyO2GBs8y6WDp"
		const stringIYDKACT = "X8eBohj9pcVOCROrtjHy83wB0yGBHp3Z6"
		const uintc4oNL8A = BigInt("32")
		const NasiLiquidityPoolFactoryxZRSmO9 = await NasiLiquidityPoolFactory.new(stringFwEOYo2, stringIYDKACT, uintc4oNL8A, {from: "0x0000000000000000000000000000000000000001"});
		const uintkJhVpr = BigInt("1264")
		const uintjtQbe38 = BigInt("1763")
		const addresshzP3qIs = accounts[4]
		const uintisht5rg = BigInt("60")
		const addressBmEE4ZF = accounts[4]
		const addresspIELTJ9 = accounts[2]
		const addressGcm3770 = "0x0000000000000000000000000000000000000001"
		const addressU92qrh5 = accounts[2]
		const addressOmHWPf = accounts[2]
		const uint256IoEdi2b = await NasiLiquidityPoolFactoryxZRSmO9.getBonusMultiplier.call(uintjtQbe38, uintkJhVpr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sI28DSF = await NasiLiquidityPoolFactoryxZRSmO9.getCurrentVotes.call(addresshzP3qIs, {from: accounts[2]});
		const boolIsuZ6K4 = await NasiLiquidityPoolFactoryxZRSmO9.transferFrom.call(addresspIELTJ9, addressBmEE4ZF, uintisht5rg, {from: accounts[3]});
		const addressfLiCadc = await NasiLiquidityPoolFactoryxZRSmO9.delegate.call(addressGcm3770, {from: accounts[4]});
		const addressdlv6Cz1 = await NasiLiquidityPoolFactoryxZRSmO9.setMigrator.call(addressU92qrh5, {from: accounts[4]});
		const uint256Grz4ta = await NasiLiquidityPoolFactoryxZRSmO9.getCurrentVotes.call(addressOmHWPf, {from: accounts[0]});
	});
})